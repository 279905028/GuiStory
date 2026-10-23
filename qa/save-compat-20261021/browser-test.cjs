'use strict';
// 每场景使用 Chrome 全新非持久 context 和随机 localhost；仅操作隔离测试存储。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const crypto = require('node:crypto');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = path.resolve(__dirname, '../..');
const names = ['game.js', 'save-compat.js', 'story.js', 'engine.js', 'index.html', 'styles.css'];
const frozen = Object.fromEntries(names.map(name => [name, fs.readFileSync(path.join(root, name))]));
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const fingerprints = files => Object.fromEntries(Object.entries(files).map(([name, bytes]) => [name, sha(bytes)]));
const baselinePath = 'qa/chapter3-followup-20261021/before/story.js';
const baselineBytes = fs.readFileSync(path.join(root, baselinePath));
const clone = value => JSON.parse(JSON.stringify(value));
function parseStory(bytes) { const scope = { window: {} }; vm.runInNewContext(bytes.toString(), scope); return clone(scope.window.RAIN_STORY); }
const story = parseStory(frozen['story.js']);
const baseline = parseStory(baselineBytes);
const scope = { module: { exports: {} } };
vm.runInNewContext(frozen['engine.js'].toString(), scope);
const { StoryEngine } = scope.module.exports;
const PREFIX = 'bijie-rain-demo:v0.4-background:';
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const changed = ['preview_xiaoman_visit_01', 'ch2_cut_join_04'];
const encode = (state, version) => JSON.stringify({ format: 1, ...(version === undefined ? {} : { contentVersion: version }), savedAt: '2026-10-20T03:00:00.000Z', state, settings });
function reach(source, target, decisions = {}) {
  const engine = new StoryEngine(source);
  const preferred = { c4: 'appointment', ...decisions };
  for (let i = 0; i <= Object.keys(source.nodes).length; i++) {
    const node = engine.current();
    if (node.id === target) return clone(engine.snapshot());
    if (node.type === 'choice') {
      const choices = engine.availableChoices();
      const selected = preferred[node.id] === undefined ? choices[0] : choices.find(item => item.option.value === preferred[node.id]);
      assert(selected, '缺少合法选择 ' + node.id); assert(engine.choose(selected.index));
    } else assert(engine.advance(), '不能抵达 ' + target + '，停止于 ' + node.id);
  }
  throw new Error('正式剧情回放超限');
}
const states = {
  first: reach(story, story.start), oldFirst: reach(baseline, baseline.start),
  oldOne: reach(baseline, changed[0]), oldBoth: reach(baseline, changed[1]),
  currentBoth: reach(story, changed[1]),
  unlocked: reach(baseline, 'c6'), locked: reach(baseline, 'c6', { h2: 'finish' }),
  unlockedEnd: reach(baseline, 'end_huangqiuqiu', { c6: 'huangqiuqiu' }),
  lockedEnd: reach(baseline, 'end_xiaoman', { h2: 'finish' })
};
const fixture = Object.fromEntries(Object.entries(states).map(([key, state]) => [key, encode(state, key.startsWith('current') || key === 'first' ? 2 : undefined)]));
fixture.badJson = '  { "legacy": "保留原始字节", invalid JSON\n';
fixture.nullState = encode(null);
fixture.unknown = encode(states.first, 999);
const unknownText = clone(states.currentBoth); unknownText.history[0].text += '未知改写'; fixture.unknownText = encode(unknownText);
for (const key of ['oldOne', 'oldBoth']) assert.throws(() => new StoryEngine(story, states[key]), /对白记录不匹配/);
assert(changed.every(id => states.oldBoth.history.some(h => h.nodeId === id && h.text === baseline.nodes[id].text)));
const historical = { 'bijie-rain-demo:v1:auto': 'v1原档字节', 'bijie-rain-demo:v0.3:auto': 'v0.3原档字节', 'bijie-rain-demo:v0.4:auto': 'v0.4原档字节' };
const output = {
  generatedAt: null, status: 'RUNNING', isolation: { browser: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', context: '每场景 browser.newContext，无 userDataDir；127.0.0.1 随机端口；禁止公网请求', storage: '夹具与故障注入只存在隔离 context，未访问玩家存储', fixtures: '当前与两句改写前的正式 story.js 使用冻结 engine.js 自然推进生成合法快照' },
  baseline: { path: baselinePath, sha256: sha(baselineBytes) }, initialHashes: fingerprints(frozen), finalHashes: null,
  fixtures: Object.fromEntries(Object.entries(fixture).map(([name, raw]) => [name, { sha256: sha(raw), bytes: Buffer.byteLength(raw), nodeId: states[name]?.nodeId, historyLength: states[name]?.history.length }])),
  cases: [], assertions: [], pageErrors: [], blockedExternalRequests: [], screenshots: [], limitations: [
    '自然构造旧版样本，不读取或统计玩家真实旧档；不等于所有存档兼容率。',
    '存储故障与竞态由隔离 Storage 方法注入，非真实浏览器配额耗尽或多标签并发。',
    '本次为桌面 Chrome 存档专项；不含移动端、Safari、Firefox、上线部署和全剧情人工游玩验收。'
  ]
};
let browser, origin;
const server = http.createServer((req, res) => {
  const requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + (requested === '/' ? '/index.html' : requested));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  const relative = path.relative(root, file);
  const send = (error, body) => { if (error) { res.writeHead(404); res.end('not found'); return; }
    const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png' };
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(body); };
  if (frozen[relative]) send(null, frozen[relative]); else fs.readFile(file, send);
});
function check(label, actual, expected) { assert.deepEqual(actual, expected, label); output.assertions.push(label); }
function matches(label, actual, expression) { assert.match(actual, expression, label); output.assertions.push(label); }
async function withPage(seed, faults, run) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.route('**/*', route => {
    const url = route.request().url();
    if (!url.startsWith(origin + '/') && !url.startsWith('data:')) { output.blockedExternalRequests.push(url); return route.abort(); }
    if (faults.missingCompat && url.endsWith('/save-compat.js')) return route.fulfill({ status: 200, contentType: 'text/javascript', body: '/* 故障注入：缺兼容组件 */' });
    return route.continue();
  });
  await context.addInitScript(({ seed, faults, PREFIX, settings, historical }) => {
    const native = { get: Storage.prototype.getItem, set: Storage.prototype.setItem, key: Storage.prototype.key };
    const store = window.localStorage, trace = [], reads = [], flags = { ...faults };
    if (!window.sessionStorage.getItem('__seeded')) {
      for (const [key, value] of Object.entries(seed)) native.set.call(store, PREFIX + key, value);
      for (const [key, value] of Object.entries(historical)) native.set.call(store, key, value);
      native.set.call(store, PREFIX + 'settings', JSON.stringify(settings));
      window.sessionStorage.setItem('__seeded', 'yes');
    }
    const isBackup = key => key.startsWith(PREFIX) && /-backup:/.test(key);
    Storage.prototype.getItem = function(key) {
      if (this === store) reads.push(key);
      const value = native.get.call(this, key);
      if (this === store && isBackup(key) && value !== null) {
        if (flags.readBackup) throw new DOMException('隔离测试备份回读失败', 'SecurityError');
        if (flags.mismatchBackup) return '故障注入：备份回读不一致';
      }
      return value;
    };
    Storage.prototype.setItem = function(key, value) {
      if (this !== store) return native.set.call(this, key, value);
      const denied = (flags.writeBackup && isBackup(key)) || (flags.writeSlot && key === PREFIX + flags.writeSlot);
      trace.push({ key, value: String(value), success: !denied });
      if (denied) throw new DOMException('隔离测试空间不足', 'QuotaExceededError');
      const result = native.set.call(this, key, value);
      if (isBackup(key) && flags.replaceAfterBackup) {
        native.set.call(store, PREFIX + flags.replaceAfterBackup.slot, flags.replaceAfterBackup.raw); flags.replaceAfterBackup = null;
      }
      return result;
    };
    window.__storageTest = { flags, trace, reads,
      raw: key => native.get.call(store, PREFIX + key),
      put: (key, value) => native.set.call(store, PREFIX + key, value),
      all: () => Object.fromEntries(Array.from({ length: store.length }, (_, i) => native.key.call(store, i)).sort().map(key => [key, native.get.call(store, key)])) };
  }, { seed, faults, PREFIX, settings, historical });
  const page = await context.newPage(); page.setDefaultTimeout(6000);
  page.on('pageerror', error => output.pageErrors.push(error.message));
  try { await page.goto(origin, { waitUntil: 'load' }); await run(page); }
  finally { await context.close(); }
}
const raw = (page, slot = 'auto') => page.evaluate(slot => window.__storageTest.raw(slot), slot);
const decoded = async (page, slot = 'auto') => JSON.parse(await raw(page, slot));
const screen = page => page.locator('body').getAttribute('data-screen');
const action = (page, name) => page.locator('[data-action="' + name + '"]:visible').first().click();
const close = page => page.locator('#modal-close').click();
const confirm = (page, yes) => page.locator('#modal-body').getByRole('button', { name: yes ? '确认' : '取消', exact: true }).click();
const backups = (page, slot = 'auto') => page.evaluate(({ PREFIX, slot }) => Object.entries(window.__storageTest.all()).filter(([key]) => key.startsWith(PREFIX + slot + '-backup:')), { PREFIX, slot });
const next = async page => { await page.waitForTimeout(350); await page.locator('#dialogue-box').click(); };
async function loadSlot(page, index) { await action(page, 'load'); await page.locator('.save-slot').nth(index).click(); }
async function noWrite(page, label) { check(label, await page.evaluate(() => window.__storageTest.trace), []); }
async function preserved(page, expected, label, slot = 'auto') {
  check(label + '：原字符串', await raw(page, slot), expected);
  check(label + '：无成功覆盖', await page.evaluate(key => window.__storageTest.trace.filter(t => t.key === key && t.success).length, PREFIX + slot), 0);
}
async function screenshot(page, name, label) { await page.locator('#toast').waitFor({ state: 'hidden', timeout: 7000 }); await page.screenshot({ path: path.join(__dirname, name) }); output.screenshots.push({ file: 'qa/save-compat-20261021/' + name, scenario: label, viewport: '1440×900' }); }
async function runCase(name, run) {
  const before = output.assertions.length;
  try { await run(); output.cases.push({ name, status: 'PASS', assertions: output.assertions.length - before }); console.log('PASS ' + name); }
  catch (error) { output.cases.push({ name, status: 'FAIL', error: error.stack }); console.error('FAIL ' + name + '\n' + error.stack); }
}
async function main() {
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  origin = 'http://127.0.0.1:' + server.address().port; output.isolation.origin = origin;
  browser = await chromium.launch({ executablePath: output.isolation.browser, headless: true });
  await runCase('标题与读取列表只读；旧档两句可识别，未知版本不误收', () => withPage({ auto: fixture.oldBoth, slot1: fixture.oldOne, slot2: fixture.first, slot3: fixture.unknown }, {}, async page => {
    check('合法旧auto可继续', await page.locator('#continue-btn').isDisabled(), false);
    await noWrite(page, '标题不写存储');
    await action(page, 'load');
    const entries = await page.locator('.save-slot').allTextContents();
    check('前3槽正确识别为可读取', entries.slice(0, 3).some(text => /不兼容|损坏/.test(text)), false);
    matches('未知版本显示不兼容', entries[3], /不兼容|损坏/);
    await close(page); await noWrite(page, '打开关闭列表不写存储');
    check('只读不建立任何备份', (await backups(page)).length, 0);
  }));
  for (const key of ['oldOne', 'oldBoth']) await runCase(key + '自动档继续：新文本、原样备份、版本标记、刷新恢复', () => withPage({ auto: fixture[key] }, {}, async page => {
    await action(page, 'continue');
    check(key + '继续进入游戏', await screen(page), 'game');
    const saved = await decoded(page);
    check(key + '写入新内容版本', saved.contentVersion, 2);
    check(key + '节点不变', saved.state.nodeId, states[key].nodeId);
    check(key + '选择不变', saved.state.choices, states[key].choices);
    check(key + '标记不变', saved.state.flags, states[key].flags);
    for (const id of changed.filter(id => states[key].history.some(h => h.nodeId === id))) {
      check(key + '回顾采用新句 ' + id, saved.state.history.find(h => h.nodeId === id).text, story.nodes[id].text);
    }
    new StoryEngine(story, saved.state);
    check(key + '备份保留旧档原字符串', (await backups(page)).map(([, value]) => value), [fixture[key]]);
    check(key + '当前对白为新句', await page.locator('#dialogue-text').innerText(), story.nodes[states[key].nodeId].text);
    const beforeReload = clone(saved.state);
    await page.reload({ waitUntil: 'load' });
    check(key + '刷新继续可用', await page.locator('#continue-btn').isDisabled(), false);
    await action(page, 'continue');
    check(key + '刷新恢复相同状态', (await decoded(page)).state, beforeReload);
    check(key + '刷新不重复备份', (await backups(page)).length, 1);
    if (key === 'oldBoth') { await action(page, 'history'); await page.locator('#modal-body').evaluate(node => { node.scrollTop = node.scrollHeight; }); await screenshot(page, 'migrated-history.png', '真实旧两句档兼容读取后回顾显示新版文本'); }
  }));
  await runCase('未受影响无标记auto首次保存也原样备份；当前版本无需备份', async () => {
    for (const key of ['oldFirst', 'first']) await withPage({ auto: fixture[key] }, {}, async page => {
      await action(page, 'continue'); check(key + '写入版本2', (await decoded(page)).contentVersion, 2);
      check(key + '备份数量', (await backups(page)).length, key === 'oldFirst' ? 1 : 0);
    });
  });
  await runCase('手动旧档读取保留源；覆盖取消不备份；确认覆盖前原样备份', () => withPage({ slot1: fixture.oldBoth }, {}, async page => {
    await loadSlot(page, 1);
    await preserved(page, fixture.oldBoth, '读取保留源手动槽', 'slot1');
    check('读取手动旧档后auto为新版本', (await decoded(page)).contentVersion, 2);
    check('只读手动槽不备份', (await backups(page, 'slot1')).length, 0);
    await next(page); const nodeId = (await decoded(page)).state.nodeId;
    await action(page, 'save'); await page.locator('.save-slot').nth(1).click(); await confirm(page, false);
    await preserved(page, fixture.oldBoth, '取消覆盖保留手动槽', 'slot1');
    check('取消覆盖不备份', (await backups(page, 'slot1')).length, 0);
    await page.locator('.save-slot').nth(1).click(); await confirm(page, true);
    check('确认原样备份手动旧档', (await backups(page, 'slot1')).map(([, value]) => value), [fixture.oldBoth]);
    check('手动覆盖为当前节点', (await decoded(page, 'slot1')).state.nodeId, nodeId);
    check('手动覆盖版本2', (await decoded(page, 'slot1')).contentVersion, 2);
  }));
  for (const fault of ['writeBackup', 'readBackup', 'mismatchBackup', 'writeSlot']) await runCase('旧auto首次保存失败保护：' + fault, () => withPage({ auto: fixture.oldBoth }, { [fault]: fault === 'writeSlot' ? 'auto' : true }, async page => {
    await action(page, 'continue');
    check(fault + '仍能读取到游戏', await screen(page), 'game');
    await preserved(page, fixture.oldBoth, fault + '不替换旧auto');
    matches(fault + '提示失败', await page.locator('#toast').innerText(), /失败|存储|空间|无法保存/);
    check(fault + '不虚报读取迁移成功', /已兼容读取/.test(await page.locator('#toast').innerText()), false);
    await next(page); await preserved(page, fixture.oldBoth, fault + '推进后仍保留');
  }));
  for (const fault of ['writeBackup', 'readBackup', 'mismatchBackup', 'writeSlot']) await runCase('手动旧档覆盖失败保护：' + fault, () => withPage({ slot1: fixture.oldBoth }, { [fault]: fault === 'writeSlot' ? 'slot1' : true }, async page => {
    await loadSlot(page, 1); await action(page, 'save'); await page.locator('.save-slot').nth(1).click(); await confirm(page, true);
    await preserved(page, fixture.oldBoth, fault + '保留手动原档', 'slot1');
    matches(fault + '手动失败提示', await page.locator('#toast').innerText(), /失败|存储|空间|无法保存/);
  }));
  for (const slot of ['auto', 'slot1']) await runCase('旧档备份后竞态：' + slot, () => withPage({ [slot]: fixture.oldBoth }, { replaceAfterBackup: { slot, raw: fixture.unknown } }, async page => {
    if (slot === 'auto') await action(page, 'continue');
    else { await loadSlot(page, 1); await action(page, 'save'); await page.locator('.save-slot').nth(1).click(); await confirm(page, true); }
    await preserved(page, fixture.unknown, slot + '备份后到达档不覆盖', slot);
    check(slot + '竞态精确保留原授权版本备份', (await backups(page, slot)).map(([, value]) => value), [fixture.oldBoth]);
    matches(slot + '竞态提示', await page.locator('#toast').innerText(), /变化|未替换|不兼容|暂停/);
  }));
  await runCase('手动确认期间换档应重新确认', () => withPage({ slot1: fixture.oldBoth }, {}, async page => {
    await loadSlot(page, 1); await action(page, 'save'); await page.locator('.save-slot').nth(1).click();
    await page.evaluate(value => window.__storageTest.put('slot1', value), fixture.unknown);
    await confirm(page, true); await preserved(page, fixture.unknown, '确认期间换档不覆盖', 'slot1');
    check('确认期间换档不备份', (await backups(page, 'slot1')).length, 0);
    matches('手动换档重新确认提示', await page.locator('#toast').innerText(), /发生变化|重新确认/);
  }));
  for (const key of ['badJson', 'unknown', 'unknownText']) await runCase(key + '损坏auto保护：读取其他槽、推进、设置、pagehide、取消恢复和确认备份', () => withPage({ auto: fixture[key], slot1: fixture.oldOne }, {}, async page => {
    check(key + '损坏继续禁用', await page.locator('#continue-btn').isDisabled(), true);
    await loadSlot(page, 1); await preserved(page, fixture[key], key + '读取其他槽不覆盖');
    await next(page); await preserved(page, fixture[key], key + '推进不覆盖');
    await action(page, 'settings'); await page.locator('#setting-speed').selectOption('fast'); await page.locator('#setting-speed').selectOption('instant'); await close(page);
    await preserved(page, fixture[key], key + '设置不覆盖');
    await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pagehide'))); await preserved(page, fixture[key], key + 'pagehide不覆盖');
    await action(page, 'save');
    if (key === 'badJson') await screenshot(page, 'protected-auto.png', '损坏auto读取其他旧手动槽后保留原档，菜单提供备份恢复入口');
    const recover = page.getByRole('button', { name: '备份旧档并恢复自动保存', exact: true });
    await recover.click(); await confirm(page, false); await preserved(page, fixture[key], key + '取消恢复不覆盖');
    check(key + '取消恢复不备份', (await backups(page)).length, 0);
    await recover.click(); await confirm(page, true);
    check(key + '确认精确保留损坏档', (await backups(page)).map(([, value]) => value), [fixture[key]]);
    check(key + '确认后写入版本2', (await decoded(page)).contentVersion, 2);
    new StoryEngine(story, (await decoded(page)).state);
  }));
  for (const fault of ['writeBackup', 'readBackup', 'mismatchBackup']) await runCase('损坏auto开始新故事备份失败：' + fault, () => withPage({ auto: fixture.badJson }, { [fault]: true }, async page => {
    await action(page, 'start'); await confirm(page, true);
    check(fault + '备份失败仍标题', await screen(page), 'title'); await preserved(page, fixture.badJson, fault + '坏档未替换');
  }));
  await runCase('损坏auto备份后竞态及写入失败', async () => {
    await withPage({ auto: fixture.badJson }, { replaceAfterBackup: { slot: 'auto', raw: fixture.nullState } }, async page => {
      await action(page, 'start'); await confirm(page, true); await preserved(page, fixture.nullState, '坏auto备份后换档不替换');
      check('坏档竞态备份原授权版本', (await backups(page)).map(([, raw]) => raw), [fixture.badJson]);
    });
    await withPage({ auto: fixture.badJson }, { writeSlot: 'auto' }, async page => {
      await action(page, 'start'); await confirm(page, true); await preserved(page, fixture.badJson, '坏auto备份后写入失败保留');
      check('写入失败仍存在原始备份', (await backups(page)).map(([, raw]) => raw), [fixture.badJson]);
    });
  });
  await runCase('旧命名空间不读写；缺兼容组件安全关闭入口', async () => {
    await withPage({ auto: fixture.oldBoth }, {}, async page => {
      await action(page, 'continue'); const all = await page.evaluate(() => window.__storageTest.all());
      for (const [key, value] of Object.entries(historical)) check('保留历史命名空间 ' + key, all[key], value);
      check('所有写入只限当前命名空间', await page.evaluate(PREFIX => window.__storageTest.trace.every(item => item.key.startsWith(PREFIX)), PREFIX), true);
      check('运行层不读取其他历史命名空间', await page.evaluate(keys => window.__storageTest.reads.every(key => !keys.includes(key)), Object.keys(historical)), true);
    });
    await withPage({ auto: fixture.oldBoth }, { missingCompat: true }, async page => {
      check('缺组件继续禁用', await page.locator('#continue-btn').isDisabled(), true);
      check('缺组件开始禁用', await page.locator('[data-action="start"]').first().isDisabled(), true);
      matches('缺组件显示明确提示', await page.locator('#modal-body').innerText(), /存档兼容组件尚未加载/);
      await noWrite(page, '缺组件不写存储'); check('缺组件原档保留', await raw(page), fixture.oldBoth);
    });
  });
  await runCase('隐藏选项门槛和章末重选保留，清理后续历史', () => withPage({ slot1: fixture.unlockedEnd, slot2: fixture.lockedEnd }, {}, async page => {
    for (const [slot, count, expected] of [[1, 5, states.unlocked], [2, 4, states.locked]]) {
      await loadSlot(page, slot); check('槽' + slot + '载入章末', await screen(page), 'end');
      await action(page, 'replay-preview');
      check('槽' + slot + '预告选项数', await page.locator('[data-choice-index]').count(), count);
      const saved = (await decoded(page)).state;
      check('槽' + slot + '重选保留前置选择', saved.choices, expected.choices);
      check('槽' + slot + '重选清理后续历史', saved.history, expected.history);
      check('槽' + slot + '重选清理后续标记', saved.flags, expected.flags);
      check('槽' + slot + '读取源手动档保持原样', await raw(page, 'slot' + slot), slot === 1 ? fixture.unlockedEnd : fixture.lockedEnd);
    }
  }));
  check('真实浏览器无未捕获异常', output.pageErrors, []);
  check('没有公网请求', output.blockedExternalRequests, []);
  output.finalHashes = fingerprints(Object.fromEntries(names.map(name => [name, fs.readFileSync(path.join(root, name))])));
  const sameVersion = hashes => Object.fromEntries(Object.entries(hashes).filter(([name]) => name !== 'styles.css'));
  check('测试期间存档运行文件版本保持稳定', sameVersion(output.finalHashes), sameVersion(output.initialHashes));
  output.styleChangedDuringRun = output.finalHashes['styles.css'] !== output.initialHashes['styles.css'];
  if (output.styleChangedDuringRun) output.limitations.push('运行时CSS采用启动时冻结版本；结束时CSS已由其他任务修改，截图仅代表 initialHashes 中的CSS。');
  check('旧版基线文件保持不变', sha(fs.readFileSync(path.join(root, baselinePath))), output.baseline.sha256);
  output.status = output.cases.every(item => item.status === 'PASS') ? 'PASS' : 'FAIL';
  if (output.status !== 'PASS') process.exitCode = 1;
}
main().catch(error => { output.status = 'FAIL'; output.error = error.stack; process.exitCode = 1; }).finally(async () => {
  output.generatedAt = new Date().toISOString();
  output.finalHashes = fingerprints(Object.fromEntries(names.map(name => [name, fs.readFileSync(path.join(root, name))])));
  if (browser) await browser.close(); await new Promise(resolve => server.close(resolve));
  fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify(output, null, 2) + '\n');
  console.log(JSON.stringify({ status: output.status, cases: output.cases.length, assertions: output.assertions.length, failed: output.cases.filter(item => item.status === 'FAIL').map(item => item.name), results: 'qa/save-compat-20261021/browser-results.json', error: output.error || null }, null, 2));
});
