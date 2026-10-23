'use strict';
// 本轮正式页面专项。所有测试进度来自正式引擎自然回放，不直接伪造 flags。
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { story, baseline, StoryEngine, BaselineEngine, reach, addedIds, changedTextIds, root, out, hashes } = require('./story-test.cjs');
const witnesses = JSON.parse(fs.readFileSync(path.join(out, 'node-witnesses.json'), 'utf8'));
const storyReport = JSON.parse(fs.readFileSync(path.join(out, 'story-results.json'), 'utf8'));
assert(storyReport.pass, '需先完成正式剧情验收');
assert.deepEqual(storyReport.finalHashes, hashes(), '正式内容已改变，先重新运行剧情验收');
const gameSource = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
const prefix = gameSource.match(/const PREFIX = ['"]([^'"]+)['"]/)?.[1];
assert(prefix, '无法读取正式存档空间');
const baselinePrefix = 'bijie-rain-demo:v0.4:';
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const save = state => ({ format: 1, savedAt: new Date().toISOString(), settings, state });
const oldSnapshot = reach(baseline.routeChoice,
  { h1: 'record', h2: 'reply', c6: 'xiaoman' }, baseline, BaselineEngine).snapshot();
assert.throws(() => new StoryEngine(story, oldSnapshot), /存档不兼容或已损坏/);
const oldRaw = JSON.stringify(save(oldSnapshot));
const legacy = {
  [baselinePrefix + 'auto']: oldRaw, [baselinePrefix + 'slot1']: oldRaw,
  'bijie-rain-demo:v0.3:auto': '{"旧自动档":"逐字保留"}',
  'bijie-rain-demo:v1:slot1': '{旧手动档原始内容'
};
const report = {
  startedAt: new Date().toISOString(), pass: false, initialHashes: hashes(), storagePrefix: prefix,
  checks: [], screenshots: [], pageErrors: [], network: [], externalCoverIssues: [],
  scope: '六位女主背景对白定点正式页面续读，新增最长对白手机布局，旧档保留与新档读写。',
  limitations: [
    '使用隔离的 Google Chrome；手机仅为视口模拟，未覆盖实体手机、Safari、Firefox。',
    '定点进度由正式引擎从入口自然重放生成；真实 UI 覆盖定点后续读，不等同全部路径完整 UI 点击。',
    '不覆盖线上部署与音频听感。'
  ]
};
let browser, server;
const check = (name, details) => { report.checks.push({ name, pass: true, details }); console.log('PASS ' + name); };
const action = (page, name) => page.locator(`[data-action="${name}"]:visible`).first().click();
const state = page => page.evaluate(p => JSON.parse(localStorage.getItem(p + 'auto'))?.state, prefix);
const waitState = (page, id) => page.waitForFunction(({ p, id }) =>
  JSON.parse(localStorage.getItem(p + 'auto'))?.state.nodeId === id, { p: prefix, id });
const currentSave = id => reach(id, witnesses[id]).snapshot();

async function fresh(url, label, viewport = { width: 1280, height: 720 }, withOld = false) {
  const context = await browser.newContext({ viewport, locale: 'zh-CN', reducedMotion: 'reduce' });
  const traffic = { label, blocked: [], failed: [], responseErrors: [] };
  const allowed = url.startsWith('file:') ? pathToFileURL(root + path.sep).href : new URL(url).origin + '/';
  await context.route('**/*', route => {
    if (route.request().url().startsWith(allowed)) return route.continue();
    traffic.blocked.push(route.request().url()); return route.abort();
  });
  await context.addInitScript(({ prefix, settings, legacy, withOld }) => {
    if (sessionStorage.getItem('heroine-background-seeded')) return;
    if (withOld) for (const [key, value] of Object.entries(legacy)) localStorage.setItem(key, value);
    localStorage.setItem(prefix + 'settings', JSON.stringify(settings));
    sessionStorage.setItem('heroine-background-seeded', '1');
  }, { prefix, settings, legacy, withOld });
  const page = await context.newPage(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => report.pageErrors.push({ label, message: error.message }));
  page.on('requestfailed', request => traffic.failed.push({ url: request.url(), error: request.failure()?.errorText }));
  page.on('response', response => { if (response.status() >= 400) traffic.responseErrors.push({ url: response.url(), status: response.status() }); });
  await page.goto(url); await page.waitForSelector('#title-screen[aria-hidden="false"]');
  report.network.push(traffic);
  return { page, context, traffic, label };
}
function verifyTraffic(frame) {
  const externalCover = /\/assets\/cover-b-(?:desktop|mobile)\.png(?:[?#]|$)/;
  const externalFailures = frame.traffic.failed.filter(item => externalCover.test(item.url));
  const externalResponses = frame.traffic.responseErrors.filter(item => externalCover.test(item.url));
  if (externalFailures.length || externalResponses.length) report.externalCoverIssues.push({
    label: frame.label, failed: externalFailures, responseErrors: externalResponses,
    attribution: '共享工作区并行封面工作；与背景对白内容独立'
  });
  assert.deepEqual(frame.traffic.blocked, [], frame.label + ' 外网请求');
  assert.deepEqual(frame.traffic.failed.filter(item => !externalCover.test(item.url)), [], frame.label + ' 剧情资源失败');
  assert.deepEqual(frame.traffic.responseErrors.filter(item => !externalCover.test(item.url)), [], frame.label + ' 剧情 HTTP 错误');
}
async function capture(page, name) {
  const file = 'browser-' + name + '.png';
  await page.screenshot({ path: path.join(out, file) }); report.screenshots.push(file);
}
async function load(page, snapshot) {
  assert.deepEqual(new StoryEngine(story, snapshot).snapshot(), snapshot);
  await page.evaluate(({ prefix, value }) => localStorage.setItem(prefix + 'slot3', JSON.stringify(value)),
    { prefix, value: save(snapshot) });
  await action(page, 'load');
  await page.locator('.save-slot').nth(3).click();
  await waitState(page, snapshot.nodeId);
  await page.waitForTimeout(340);
}
async function assertLine(page, node) {
  assert.equal(await page.locator('#dialogue-text').textContent(), node.text);
  const hero = story.characters[node.character];
  if (hero) await page.waitForFunction(source => {
    const img = document.getElementById('character');
    return !img.hidden && img.naturalWidth > 0 && img.getAttribute('src') === source;
  }, hero.expressions?.[node.expression] || hero.image);
}
async function inside(page, selector) {
  const rect = await page.locator(selector).evaluate(element => {
    const r = element.getBoundingClientRect();
    return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: innerWidth, height: innerHeight,
      scrollHeight: element.scrollHeight, clientHeight: element.clientHeight, overflowY: getComputedStyle(element).overflowY };
  });
  assert(rect.left >= -1 && rect.top >= -1 && rect.right <= rect.width + 1 && rect.bottom <= rect.height + 1,
    selector + ' 超出视口：' + JSON.stringify(rect));
  assert(rect.scrollHeight <= rect.clientHeight + 2 || ['auto', 'scroll'].includes(rect.overflowY),
    selector + ' 内容被裁切：' + JSON.stringify(rect));
  return rect;
}
async function stepLine(page, engine) {
  assert.equal(engine.current().type, 'line');
  await assertLine(page, engine.current());
  await page.waitForTimeout(340);
  await page.locator('#dialogue-box').click();
  assert(engine.advance()); await waitState(page, engine.current().id);
  await page.waitForTimeout(340);
  assert.deepEqual(await state(page), engine.snapshot());
}
async function oldStorageCheck(url) {
  const frame = await fresh(url, 'legacy-storage', undefined, true), { page } = frame;
  try {
    assert.equal(await page.locator('#continue-btn').isDisabled(), true);
    const before = await page.evaluate(keys => Object.fromEntries(keys.map(key => [key, localStorage.getItem(key)])), Object.keys(legacy));
    assert.deepEqual(before, legacy);
    await action(page, 'load');
    const note = await page.locator('.save-version-note').textContent();
    assert.match(note, /v0\.4|背景/);
    await action(page, 'close-modal');
    await action(page, 'start');
    if (prefix === baselinePrefix) {
      assert.match(await page.locator('#modal-title').textContent(), /开始新的故事/);
      assert.match(await page.locator('#modal').textContent(), /原样备份/);
      assert.equal(await page.evaluate(key => localStorage.getItem(key), baselinePrefix + 'auto'), oldRaw);
      await page.getByRole('button', { name: '取消', exact: true }).click();
      assert.equal(await page.evaluate(key => localStorage.getItem(key), baselinePrefix + 'auto'), oldRaw);
      await action(page, 'start');
      await page.getByRole('button', { name: '确认', exact: true }).click();
      const backups = await page.evaluate(p => Object.keys(localStorage).filter(key => key.startsWith(p + 'auto-backup:')).map(key => localStorage.getItem(key)), prefix);
      assert(backups.includes(oldRaw), '旧自动档未原样备份');
    }
    await waitState(page, story.start);
    const expectedOld = { ...legacy };
    if (prefix === baselinePrefix) delete expectedOld[baselinePrefix + 'auto'];
    assert.deepEqual(await page.evaluate(keys => Object.fromEntries(keys.map(key => [key, localStorage.getItem(key)])), Object.keys(expectedOld)), expectedOld);
    await page.reload(); await action(page, 'continue'); await waitState(page, story.start);
    await capture(page, 'legacy-preserved-new-start');
    verifyTraffic(frame);
    check('旧 v0.4 与更早存档原文保留，新背景版可开局与刷新续读', {
      strategy: prefix === baselinePrefix ? '沿用命名空间；确认后备份旧自动档' : '使用独立命名空间',
      oldKeysChecked: Object.keys(expectedOld), saveNote: note
    });
  } finally { await frame.context.close(); }
}

async function heroineChecks(url) {
  const frame = await fresh(url, 'six-heroines'), { page } = frame;
  try {
    const ids = ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'huangqiuqiu', 'piao'];
    const results = [];
    for (const heroine of ids) {
      const candidates = addedIds.map(id => story.nodes[id]).filter(node => node.speaker === heroine);
      assert(candidates.length, heroine + ' 没有新增本人对白');
      const chosen = candidates.find(node => /以前|回|工作|学校|岁|KTV|第一|当年|从前/.test(node.text)) || candidates[0];
      const engine = reach(chosen.id, witnesses[chosen.id]); await load(page, engine.snapshot());
      await assertLine(page, chosen); await inside(page, '#dialogue-box'); await inside(page, '#dialogue-text');
      const char = await page.locator('#character').evaluate(img => ({ width: img.naturalWidth, height: img.naturalHeight, presentation: img.dataset.presentation }));
      assert(char.width > 0 && char.height > 0);
      if (heroine === 'huangqiuqiu') assert.equal(char.presentation, 'orb');
      await capture(page, heroine + '-background');
      await stepLine(page, engine);
      await page.reload(); await action(page, 'continue'); await waitState(page, engine.current().id);
      assert.deepEqual(await state(page), engine.snapshot());
      await load(page, currentSave(chosen.id));
      assert.deepEqual(await state(page), currentSave(chosen.id));
      results.push({ heroine, nodeId: chosen.id, text: chosen.text, nextAfterClick: engine.current().id });
    }
    verifyTraffic(frame); check('六位女主新增线索真实显示、继续、刷新续读与手动读档', results);
  } finally { await frame.context.close(); }
}
async function mobileAndFileChecks(url) {
  const affected = [...addedIds, ...changedTextIds].map(id => story.nodes[id]).filter(node => node.type === 'line');
  const longest = affected.reduce((max, node) => !max || node.text.length > max.text.length ? node : max, null);
  assert(longest);
  for (const viewport of [{ width: 390, height: 844 }, { width: 375, height: 667 }]) {
    const frame = await fresh(url, `mobile-${viewport.width}x${viewport.height}`, viewport), { page } = frame;
    try {
      const engine = reach(longest.id, witnesses[longest.id]); await load(page, engine.snapshot());
      await assertLine(page, longest);
      const box = await inside(page, '#dialogue-box'), text = await inside(page, '#dialogue-text');
      await capture(page, `mobile-${viewport.width}x${viewport.height}-longest`);
      let scroll = null;
      if (box.scrollHeight > box.clientHeight + 2) {
        await page.locator('#dialogue-box').hover();
        await page.mouse.wheel(0, 500);
        await page.waitForFunction(() => document.getElementById('dialogue-box').scrollTop > 0);
        await page.waitForTimeout(120);
        scroll = await page.locator('#dialogue-box').evaluate(element => {
          const box = element.getBoundingClientRect(), text = document.getElementById('dialogue-text').getBoundingClientRect();
          return { scrollTop: element.scrollTop, lastLineBottom: text.bottom, boxBottom: box.bottom };
        });
        assert(scroll.lastLineBottom <= scroll.boxBottom - 10, '滚动后末行仍被遮挡');
        assert.deepEqual(await state(page), engine.snapshot(), '阅读滚动不应推进剧情');
        await capture(page, `mobile-${viewport.width}x${viewport.height}-longest-bottom`);
      }
      await stepLine(page, engine);
      verifyTraffic(frame); check(`${viewport.width}×${viewport.height} 本轮最长对白显示、可滚动读完与续读`, { nodeId: longest.id, chars: longest.text.length, box, text, scroll });
    } finally { await frame.context.close(); }
  }
  const frame = await fresh(pathToFileURL(path.join(root, 'index.html')).href, 'file-new-dialogue'), { page } = frame;
  try {
    const engine = reach(longest.id, witnesses[longest.id]); await load(page, engine.snapshot());
    await stepLine(page, engine); await page.reload(); await action(page, 'continue'); await waitState(page, engine.current().id);
    assert.deepEqual(await state(page), engine.snapshot()); verifyTraffic(frame);
    check('file:// 直接打开可读新增对白并刷新续读', { nodeId: longest.id });
  } finally { await frame.context.close(); }
}

(async () => {
  try {
    server = http.createServer((request, response) => {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
      if (!file.startsWith(root + path.sep)) return response.writeHead(403).end();
      fs.readFile(file, (error, buffer) => {
        if (error) return response.writeHead(404).end();
        response.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' })[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
        response.end(buffer);
      });
    });
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
    browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
    report.browser = browser.version();
    const url = 'http://127.0.0.1:' + server.address().port + '/index.html';
    await oldStorageCheck(url); await heroineChecks(url); await mobileAndFileChecks(url);
    assert.deepEqual(report.pageErrors, []);
    assert.deepEqual(hashes(), report.initialHashes, '验收期间正式文件改变');
    report.contentChecksPass = true;
    report.pass = report.externalCoverIssues.length === 0;
    if (!report.pass) {
      report.error = '背景对白与存档专项通过，但并行封面资源仍有缺项；整体页面不记为无资源错误。';
      process.exitCode = 1;
    }
  } catch (error) {
    report.error = error.stack; process.exitCode = 1; console.error(error);
  } finally {
    if (browser) await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
    report.finishedAt = new Date().toISOString(); report.finalHashes = hashes();
    fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ pass: report.pass, checks: report.checks.length, report: path.join(out, 'browser-results.json') }));
  }
})();
