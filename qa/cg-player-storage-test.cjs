'use strict';

// 独立浏览器回归：随机 localhost 源 + 全新非持久 context，绝不打开玩家浏览器资料目录。
// node qa/cg-player-storage-test.cjs；仅输出同目录 cg-player-storage-results.json。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const crypto = require('node:crypto');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '..');
// 启动即固定所有运行文件，测试过程不混用其他窗口写入的新版本。
const runtimeFiles = Object.fromEntries(['game.js', 'story.js', 'engine.js', 'index.html', 'styles.css']
  .map(name => [name, fs.readFileSync(path.join(root, name))]));
const PREFIX = 'bijie-rain-demo:v1:';
const AUTO = PREFIX + 'auto';
const clone = value => JSON.parse(JSON.stringify(value));
const source = runtimeFiles['story.js'].toString('utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox, { filename: 'story.js' });
const story = clone(sandbox.window.RAIN_STORY);
const engineSandbox = { module: { exports: {} } };
vm.runInNewContext(runtimeFiles['engine.js'].toString('utf8'), engineSandbox, { filename: 'engine.js' });
const { StoryEngine } = engineSandbox.module.exports;
const settings = { textSpeed: 'instant', sound: false, volume: 0.35 };
const save = state => JSON.stringify({ format: 1, savedAt: '2026-10-20T03:00:00.000Z', state, settings });
const hashes = () => Object.fromEntries(['game.js', 'story.js', 'engine.js', 'index.html', 'styles.css'].map(name =>
  [name, crypto.createHash('sha256').update(fs.readFileSync(path.join(root, name))).digest('hex')]));
const frozenHashes = Object.fromEntries(Object.entries(runtimeFiles).map(([name, bytes]) =>
  [name, crypto.createHash('sha256').update(bytes).digest('hex')]));
function route(unlocked, target = 'c6') {
  const engine = new StoryEngine(story);
  let previous = null;
  for (let steps = 0; steps < 600; steps++) {
    if (engine.current().id === target) return { state: clone(engine.snapshot()), previous };
    previous = clone(engine.snapshot());
    if (engine.current().type === 'line') engine.advance();
    else if (engine.current().type === 'choice') {
      const choice = engine.current();
      const desired = choice.id === 'h1' ? 'record' : choice.id === 'h2' ? (unlocked ? 'reply' : 'finish') :
        choice.id === 'c6' ? (unlocked ? 'huangqiuqiu' : 'xiaoman') : choice.choices[0].value;
      assert.equal(engine.choose(choice.choices.findIndex(item => item.value === desired)), true);
    } else throw new Error('未到达指定测试节点：' + target);
  }
  throw new Error('构造测试存档超出正式剧情步数');
}
const unlocked = route(true);
const locked = route(false);
const first = clone(new StoryEngine(story).snapshot());
const fixture = {
  first: save(first), unlocked: save(unlocked.state), locked: save(locked.state),
  unlockedEnd: save(route(true, 'end_huangqiuqiu').state),
  lockedEnd: save(route(false, 'end_xiaoman').state), beforeChoice: save(unlocked.previous)
};
const oldStory = clone(story);
oldStory.nodes[oldStory.start].text += '【仅在隔离测试内存中的旧文本】';
fixture.oldText = save(new StoryEngine(oldStory).snapshot());
fixture.badJson = '  { "old": "保留原始字节", invalid json\n';
fixture.nullState = JSON.stringify({ format: 1, savedAt: '2026-10-20T03:00:00.000Z', state: null, settings });
assert.throws(() => new StoryEngine(story, JSON.parse(fixture.oldText).state), /对白记录不匹配/);
assert.equal(new StoryEngine(story, unlocked.state).availableChoices().length, 5);
assert.equal(new StoryEngine(story, locked.state).availableChoices().length, 4);

const output = { generatedAt: null, status: 'RUNNING', isolation: {
  browser: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  context: 'browser.newContext；无 userDataDir；127.0.0.1 随机监听端口；每场景新 context',
  storage: '只在隔离 context 中写测试夹具与故障注入；未访问玩家浏览器资料',
  storyFixtures: '正式 story.js + engine.js 自然推进构造合法快照；旧文本仅修改内存副本'
}, initialHashes: frozenHashes, finalHashes: null, assertions: [], cases: [], pageErrors: [], screenshots: [], limitations: [
  '不是玩家现存旧档迁移测试；不关闭严格历史校验。',
  '存储错误由隔离 context 内 Storage 方法故障注入模拟，非系统级浏览器隐私设置。',
  '不包括手机/Safari/Firefox、音频听感、完整剧情逐句人工游玩或正式CG接入验收。'
] };
function check(name, actual, expected) {
  assert.deepEqual(actual, expected, name);
  output.assertions.push(name);
}
let browser;
let origin;
const server = http.createServer((req, res) => {
  const requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + (requested === '/' ? '/index.html' : requested));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  const send = (error, body) => {
    if (error) { res.writeHead(404); res.end('not found'); return; }
    const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png' };
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  };
  const name = path.relative(root, file);
  if (runtimeFiles[name]) send(null, runtimeFiles[name]);
  else fs.readFile(file, send);
});
async function contextPage(seed = {}, faults = {}) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addInitScript(({ seed, faults, PREFIX }) => {
    const native = { get: Storage.prototype.getItem, set: Storage.prototype.setItem, key: Storage.prototype.key };
    const trace = [];
    const flags = { ...faults };
    const store = window.localStorage;
    if (!window.sessionStorage.getItem('__storage_test_seeded')) {
      for (const [key, raw] of Object.entries(seed)) native.set.call(store, PREFIX + key, raw);
      native.set.call(store, PREFIX + 'settings', JSON.stringify({ textSpeed: 'instant', sound: false, volume: 0.35 }));
      window.sessionStorage.setItem('__storage_test_seeded', 'yes');
    }
    Storage.prototype.getItem = function (key) {
      if (this === store && (flags.readAll || (flags.readAuto && key === PREFIX + 'auto') ||
        (flags.readBackup && key.startsWith(PREFIX + 'auto-backup:')))) throw new DOMException('隔离测试读取不可用', 'SecurityError');
      return native.get.call(this, key);
    };
    Storage.prototype.setItem = function (key, raw) {
      if (this === store) {
        const denied = flags.writeAll || (flags.writeAuto && key === PREFIX + 'auto') ||
          (flags.writeBackup && key.startsWith(PREFIX + 'auto-backup:'));
        trace.push({ key, raw: String(raw), success: !denied });
        if (denied) throw new DOMException('隔离测试空间不足', 'QuotaExceededError');
      }
      const result = native.set.call(this, key, raw);
      if (this === store && key.startsWith(PREFIX + 'auto-backup:') && flags.replaceAutoAfterBackup) {
        native.set.call(store, PREFIX + 'auto', flags.replaceAutoAfterBackup);
        flags.replaceAutoAfterBackup = null;
      }
      return result;
    };
    window.__storageTest = {
      trace, flags,
      raw: key => native.get.call(store, PREFIX + key),
      put: (key, raw) => native.set.call(store, PREFIX + key, raw),
      dump: () => Object.fromEntries(Array.from({ length: store.length }, (_, i) => native.key.call(store, i))
        .filter(key => key.startsWith(PREFIX)).sort().map(key => [key.slice(PREFIX.length), native.get.call(store, key)]))
    };
  }, { seed, faults, PREFIX });
  const page = await context.newPage();
  page.on('pageerror', error => output.pageErrors.push(error.message));
  await page.goto(origin, { waitUntil: 'load' });
  await page.waitForFunction(() => document.querySelector('#continue-btn') && window.__storageTest);
  return { context, page };
}
const raw = (page, key = 'auto') => page.evaluate(key => window.__storageTest.raw(key), key);
const dump = page => page.evaluate(() => window.__storageTest.dump());
const state = async page => JSON.parse(await raw(page)).state;
const screen = page => page.locator('body').getAttribute('data-screen');
const modalText = page => page.locator('#modal-body').innerText();
async function action(page, name) {
  await page.locator('[data-action="' + name + '"]:visible').first().click();
}
async function close(page) { await page.locator('#modal-close').click(); }
async function confirm(page, yes) { await page.locator('#modal-body').getByRole('button', { name: yes ? '确认' : '取消', exact: true }).click(); }
async function loadSlot(page, index) {
  await action(page, 'load');
  await page.locator('.save-slot').nth(index).click();
  await page.waitForTimeout(350);
}
async function next(page) {
  await page.waitForTimeout(350);
  await page.locator('#dialogue-box').click();
}
async function backups(page) {
  const values = await dump(page);
  return Object.entries(values).filter(([key]) => key.startsWith('auto-backup:'));
}
async function protectedRaw(page, expected, label) {
  check(label, await raw(page), expected);
  check(label + '：无成功自动覆盖', await page.evaluate(AUTO => window.__storageTest.trace.filter(t => t.key === AUTO && t.success).length, AUTO), 0);
}
async function runCase(name, run) {
  const before = output.assertions.length;
  try { await run(); output.cases.push({ name, status: 'PASS', assertions: output.assertions.length - before }); }
  catch (error) { output.cases.push({ name, status: 'FAIL', error: error.stack }); throw error; }
}
async function withPage(seed, faults, run) {
  const { context, page } = await contextPage(seed, faults);
  try { return await run(page); } finally { await context.close(); }
}

async function main() {
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  origin = 'http://127.0.0.1:' + server.address().port;
  output.isolation.origin = origin;
  browser = await chromium.launch({ executablePath: output.isolation.browser, headless: true });

  for (const [label, original] of [['旧文本', fixture.oldText], ['坏JSON', fixture.badJson], ['null state', fixture.nullState]]) {
    await runCase(label + '自动档：提示、取消、确认精确备份', () => withPage({ auto: original, slot1: fixture.unlocked, slot2: fixture.locked, slot3: fixture.first }, {}, async page => {
      check(label + '继续按钮禁用', await page.locator('#continue-btn').isDisabled(), true);
      assert.match(await page.locator('#toast').innerText(), /不兼容|损坏/);
      assert.match(await page.locator('#toast').innerText(), /保留/);
      assert.match(await page.locator('#toast').innerText(), /暂停/);
      await action(page, 'start');
      check(label + '开始前仍标题', await screen(page), 'title');
      check(label + '确认默认焦点取消', await page.evaluate(() => document.activeElement.textContent), '取消');
      assert.match(await modalText(page), /备份|保留/);
      if (label === '旧文本') {
        await page.screenshot({ path: path.join(__dirname, 'cg-player-storage-confirm.png') });
        output.screenshots.push({ file: 'qa/cg-player-storage-confirm.png', scenario: '真实浏览器：不兼容旧文本auto开始新故事的确认框', viewport: '1440×900' });
      }
      await confirm(page, false);
      await protectedRaw(page, original, label + '取消保留原档');
      check(label + '取消不建备份', (await backups(page)).length, 0);
      await action(page, 'start');
      await confirm(page, true);
      check(label + '确认进入故事', await screen(page), 'game');
      check(label + '备份精确等于原字符串', (await backups(page)).map(([, value]) => value), [original]);
      check(label + '新档回到故事入口', (await state(page)).nodeId, story.start);
      check(label + '新档不继承标记', (await state(page)).flags, {});
      for (const [key, expected] of [['slot1', fixture.unlocked], ['slot2', fixture.locked], ['slot3', fixture.first]]) check(label + '保留' + key, await raw(page, key), expected);
      new StoryEngine(story, await state(page));
    }));
  }

  await runCase('载入合法槽、设置、推进、手动三槽、退出保护与恢复入口', () => withPage({ auto: fixture.oldText, slot1: fixture.first }, {}, async page => {
    await loadSlot(page, 1);
    check('载入合法手动槽进入故事', await screen(page), 'game');
    await protectedRaw(page, fixture.oldText, '载入不会覆盖不兼容auto');
    assert.match(await page.locator('#toast').innerText(), /暂停/);
    assert.match(await page.locator('#toast').innerText(), /手动/);
    await action(page, 'settings');
    await page.locator('#setting-speed').selectOption('fast');
    await page.locator('#setting-speed').selectOption('instant');
    await page.locator('#setting-volume').fill('0.5');
    await protectedRaw(page, fixture.oldText, '设置不会覆盖不兼容auto');
    await close(page);
    await next(page);
    check('旧档保护不阻碍故事推进', await page.locator('#dialogue-text').innerText(), story.nodes[story.nodes[story.start].next].text);
    await protectedRaw(page, fixture.oldText, '推进不会覆盖不兼容auto');
    await action(page, 'save');
    check('保护模式菜单顶部明确自动保存暂停', (await page.locator('#modal-body > p').first().innerText()).includes('自动保存暂停'), true);
    check('保护模式自动槽状态为已暂停', await page.locator('.save-slot').first().locator('.slot-meta').innerText(), '已暂停');
    // 等临时通知自行消失，截图保留完整菜单标题与持久保护提示。
    await page.locator('#toast').waitFor({ state: 'hidden', timeout: 7000 });
    await page.screenshot({ path: path.join(__dirname, 'cg-player-storage-protected.png') });
    output.screenshots.push({ file: 'qa/cg-player-storage-protected.png', scenario: '真实浏览器：读取合法手动档后原auto仍保留，保存菜单显示暂停及恢复入口', viewport: '1440×900' });
    await page.locator('.save-slot').nth(1).click();
    await confirm(page, false);
    check('手动覆盖取消保留原槽', await raw(page, 'slot1'), fixture.first);
    await page.locator('.save-slot').nth(1).click();
    await confirm(page, true);
    for (const index of [2, 3]) await page.locator('.save-slot').nth(index).click();
    for (const index of [1, 2, 3]) {
      const saved = JSON.parse(await raw(page, 'slot' + index));
      check('手动槽' + index + '保存当前节点', saved.state.nodeId, story.nodes[story.start].next);
      new StoryEngine(story, saved.state);
    }
    await close(page);
    await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pagehide')));
    await protectedRaw(page, fixture.oldText, 'pagehide不会覆盖不兼容auto');
    await action(page, 'menu');
    await action(page, 'title');
    await protectedRaw(page, fixture.oldText, '返回标题不会覆盖不兼容auto');
    await page.reload({ waitUntil: 'load' });
    check('刷新后原旧档仍保留', await raw(page), fixture.oldText);
    check('刷新后旧auto仍不可继续', await page.locator('#continue-btn').isDisabled(), true);
    await loadSlot(page, 2);
    await action(page, 'save');
    const recovery = page.getByRole('button', { name: '备份旧档并恢复自动保存', exact: true });
    await recovery.click();
    await confirm(page, false);
    await protectedRaw(page, fixture.oldText, '恢复入口取消保留原auto');
    await recovery.click();
    await confirm(page, true);
    check('恢复入口精确备份', (await backups(page)).map(([, value]) => value), [fixture.oldText]);
    check('恢复入口保存当前节点', (await state(page)).nodeId, story.nodes[story.start].next);
    await page.reload({ waitUntil: 'load' });
    check('恢复后刷新可继续', await page.locator('#continue-btn').isDisabled(), false);
    await action(page, 'continue');
    check('继续恢复保存节点', await page.locator('#dialogue-text').innerText(), story.nodes[story.nodes[story.start].next].text);
  }));

  for (const fault of ['writeBackup', 'readBackup']) await runCase('备份失败阻止开始：' + fault, () =>
    withPage({ auto: fixture.badJson }, { [fault]: true }, async page => {
      await action(page, 'start');
      await confirm(page, true);
      check(fault + '失败后仍标题', await screen(page), 'title');
      await protectedRaw(page, fixture.badJson, fault + '失败保留auto');
      assert.match(await page.locator('#toast').innerText(), /备份|存储|保留/);
    }));

  await runCase('恢复自动保存时备份失败保留当前进度和旧auto', () => withPage({ auto: fixture.badJson, slot1: fixture.first }, { writeBackup: true }, async page => {
    await loadSlot(page, 1);
    const before = await page.locator('#dialogue-text').innerText();
    await action(page, 'save');
    await page.getByRole('button', { name: '备份旧档并恢复自动保存', exact: true }).click();
    await confirm(page, true);
    await protectedRaw(page, fixture.badJson, '恢复备份失败保留auto');
    check('恢复备份失败保留当前故事', await page.locator('#dialogue-text').innerText(), before);
  }));

  await runCase('确认期间auto变化必须重确认并备份最新原文', () => withPage({ auto: fixture.badJson }, {}, async page => {
    await action(page, 'start');
    await page.evaluate(value => window.__storageTest.put('auto', value), fixture.nullState);
    await confirm(page, true);
    check('原档变化后第一确认不开始', await screen(page), 'title');
    await protectedRaw(page, fixture.nullState, '原档变化后第一确认不覆盖');
    check('原档变化后第一确认不备份旧内容', (await backups(page)).length, 0);
    check('原档变化后确认框仍在', await page.locator('#modal').isVisible(), true);
    await confirm(page, true);
    check('二次确认进入故事', await screen(page), 'game');
    check('备份最新原始内容', (await backups(page)).map(([, value]) => value), [fixture.nullState]);
  }));

  await runCase('备份完成后另一坏档换入：拒绝替换且不虚报恢复成功', () => withPage(
    { auto: fixture.badJson }, { replaceAutoAfterBackup: fixture.nullState }, async page => {
      await action(page, 'start');
      await confirm(page, true);
      await protectedRaw(page, fixture.nullState, '备份后竞态保留后到坏档');
      check('备份仍精确保留原授权版本', (await backups(page)).map(([, value]) => value), [fixture.badJson]);
      const message = await page.locator('#toast').innerText();
      check('备份后竞态不声称恢复自动保存成功', /自动保存已恢复|新的故事已开始/.test(message), false);
      assert.match(message, /暂停|未替换|保留|变化/);
      await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pagehide')));
      await protectedRaw(page, fixture.nullState, '备份后竞态后续退出仍保护');
    }));

  await runCase('合法auto开始新故事也确认，取消保留原档', () => withPage({ auto: fixture.unlocked, slot1: fixture.first }, {}, async page => {
    await action(page, 'start');
    await confirm(page, false);
    check('合法auto取消后字节不变', await raw(page), fixture.unlocked);
    await action(page, 'start');
    await confirm(page, true);
    check('合法auto确认后新故事清空标记', (await state(page)).flags, {});
    check('合法auto新故事保留手动档', await raw(page, 'slot1'), fixture.first);
  }));

  await runCase('存储读取禁用时不覆盖未知auto，允许未保存游玩', () => withPage({ auto: fixture.oldText }, { readAll: true }, async page => {
    await action(page, 'start');
    check('读取禁用仍可进入故事', await screen(page), 'game');
    await protectedRaw(page, fixture.oldText, '读取禁用开始不覆盖auto');
    await next(page);
    await action(page, 'settings');
    await page.locator('#setting-speed').selectOption('instant');
    await close(page);
    await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pagehide')));
    await protectedRaw(page, fixture.oldText, '读取禁用设置及退出不覆盖auto');
    assert.match(await page.locator('#toast').innerText(), /存储|读取/);
  }));

  await runCase('写入空间不足：原auto不变、手动保存报告失败', () => withPage({ auto: fixture.first }, { writeAll: true }, async page => {
    await action(page, 'continue');
    await next(page);
    check('空间不足仍能推进', await page.locator('#dialogue-text').innerText(), story.nodes[story.nodes[story.start].next].text);
    check('空间不足auto原值不变', await raw(page), fixture.first);
    await action(page, 'save');
    await page.locator('.save-slot').nth(1).click();
    check('手动保存失败不产生伪存档', await raw(page, 'slot1'), null);
    assert.match(await page.locator('#toast').innerText(), /存储|空间|保存/);
  }));

  await runCase('正式合法档资格5/4切换与重选清理历史', () => withPage({ slot1: fixture.unlockedEnd, slot2: fixture.lockedEnd, slot3: fixture.badJson }, {}, async page => {
    for (const [index, count, expected] of [[1, 5, unlocked.state], [2, 4, locked.state], [1, 5, unlocked.state], [2, 4, locked.state]]) {
      await loadSlot(page, index);
      check('合法结尾槽' + index + '载入结束页', await screen(page), 'end');
      await action(page, 'replay-preview');
      check('槽' + index + '重选数量' + count, await page.locator('[data-choice-index]').count(), count);
      const snapshot = await state(page);
      check('槽' + index + '保留七次前置选择', snapshot.choices, expected.choices);
      check('槽' + index + '历史恢复至唯一C6', snapshot.history, expected.history);
      check('槽' + index + '不残留上一预告标记', snapshot.flags, expected.flags);
      if (count === 4) check('未解锁无第五项或占位', await page.locator('#choice-list').innerText().then(text => /黄色头像|锁定|\?/.test(text)), false);
    }
    const before = await raw(page);
    await action(page, 'load');
    await page.locator('.save-slot').nth(3).click();
    check('坏手动档不改变当前auto', await raw(page), before);
    assert.match(await page.locator('#toast').innerText(), /未更改|未改变/);
    await close(page);
    await action(page, 'history');
    assert.match(await modalText(page), new RegExp(story.nodes.h1.choices[0].label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    check('历史面板确实显示前置选择', (await modalText(page)).includes(story.nodes.h2.choices[1].label), true);
  }));

  await runCase('自动播放到选择暂停，菜单暂停不推进', () => withPage({ slot1: fixture.beforeChoice, slot2: fixture.first }, {}, async page => {
    await loadSlot(page, 1);
    await action(page, 'auto');
    await page.waitForFunction(() => document.querySelector('#choice-panel').hidden === false, null, { timeout: 7500 });
    check('自动停在选择节点', (await state(page)).nodeId, 'c6');
    check('自动到选择后关闭', await page.locator('#auto-label').innerText(), '自动');
    check('自动没有替玩家选择', (await state(page)).choices.length, 7);
    await loadSlot(page, 2);
    await action(page, 'auto');
    await action(page, 'menu');
    const before = await raw(page);
    await page.waitForTimeout(2200);
    check('菜单打开时自动不推进', await raw(page), before);
    await close(page);
    await page.waitForFunction(({ AUTO, first }) => JSON.parse(localStorage.getItem(AUTO)).state.nodeId !== first, { AUTO, first: story.start }, { timeout: 7500 });
    check('菜单关闭后自动恢复', (await state(page)).nodeId !== story.start, true);
    await action(page, 'auto');
  }));

  check('真实浏览器无未捕获异常', output.pageErrors, []);
  output.finalHashes = hashes();
  check('测试期间运行文件保持同版本', output.finalHashes, output.initialHashes);
  output.status = 'PASS';
}

main().catch(error => {
  output.status = 'FAIL'; output.error = error.stack; process.exitCode = 1;
}).finally(async () => {
  output.generatedAt = new Date().toISOString();
  output.finalHashes = hashes();
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
  fs.writeFileSync(path.join(__dirname, 'cg-player-storage-results.json'), JSON.stringify(output, null, 2) + '\n');
  console.log(JSON.stringify({ status: output.status, cases: output.cases.length, assertions: output.assertions.length,
    results: 'qa/cg-player-storage-results.json', error: output.error || null }, null, 2));
});
