// 同期师匠眼镜单词变更已在 maolang-optionD-runtime-test.cjs 严格核对；其余沿用原集成检查。
'use strict';
// 正式源码/图片集成检查；浏览器使用独立context与随机本地端口，不改写剧情响应。
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const { StoryEngine } = require('../engine.js');
const prefix = 'bijie-rain-demo:v1:';
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const source = fs.readFileSync(path.join(root, 'story.js'), 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context);
const story = JSON.parse(JSON.stringify(context.window.RAIN_STORY));
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/cg-manifest.json')));
const artifacts = manifest.assets;
// 独立列出已批准的十图范围，不能随待测清单的漏项一同缩小目标。
const sequence = (base, from, to) => Array.from({ length: to - from + 1 }, (_, i) => base + String(i + from).padStart(2, '0'));
const expectedBindings = {
  cg01: ['s1_arrive_02', 's1_arrive_03'],
  cg02: ['s5_mirror_03', 's5_ride_walk_01', 's5_ride_walk_02', 's5_ride_taxi_01', 's5_ride_taxi_02', 's5_ride_leave_01', 's5_ride_leave_02'],
  cg03: sequence('s6_plan_', 4, 8), cg04: sequence('s7_camera_', 1, 6),
  cg05: sequence('s8_count_', 1, 8), cg06: ['s9_compete_08', 's9_compete_09'],
  cg07: ['preview_yelan_10'], cg08: sequence('preview_qiu_', 12, 19),
  cg09: sequence('s2_counter_', 6, 10), cg13: sequence('s3_stall_', 5, 8)
};
const expectedExits = { cg01: 's1_arrive_04', cg02: 's5_work_01', cg03: 's6_plan_09', cg04: 's7_camera_07', cg05: 's8_count_09', cg06: 's9_compete_10', cg07: 'preview_yelan_11', cg08: 'preview_qiu_20', cg09: 's2_counter_11', cg13: 's3_stall_09' };
const smoke = process.argv.includes('--smoke');
const logicOnly = process.argv.includes('--logic-only');
const output = process.env.CG_OUTPUT_PATH || path.join(__dirname, 'maolang-optionD-20261020/cg-integration-results.json');
const results = { date: new Date().toISOString(), scope: '正式十图剧情、实际PNG；隔离浏览器存储；非夹具剧情', smoke, logicOnly, logic: {}, cases: [], checks: [], pageErrors: [], requests: [] };
const trackedFiles = [...new Set(['story.js', 'engine.js', 'game.js', 'index.html', 'styles.css', 'qa/cg-integration-test.cjs', 'assets/cg-manifest.json', ...artifacts.flatMap(a => [a.path, a.record]), ...Object.values(story.characters).map(a => a.image), ...Object.values(story.backgrounds), 'assets/background-variants/m2-daynight-20261020/bg-street-day.png'])];
const originals = Object.fromEntries(trackedFiles.map(p => [p, hash(fs.readFileSync(path.join(root, p)))]));
results.fingerprints = originals;
const recordCheck = (name, details) => results.checks.push({ name, pass: true, details });
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const snapshots = new Map();
const completed = [];
const c6Combinations = new Map();
function traverse(engine, ids = []) {
  const n = engine.current();
  if (!snapshots.has(n.id)) snapshots.set(n.id, engine.snapshot());
  if (n.id === 'c6') c6Combinations.set(engine.state.flags.qiuSignal + '/' + engine.state.flags.qiuReply, engine.snapshot());
  const trail = ids.concat(n.id);
  if (n.type === 'end') { completed.push({ ids: trail, flags: engine.state.flags }); return; }
  if (n.type === 'line') { engine.advance(); traverse(engine, trail); return; }
  for (const { index } of engine.availableChoices()) {
    const branch = new StoryEngine(story, engine.snapshot());
    assert(branch.choose(index));
    traverse(branch, trail);
  }
}
function logic() {
  const stripped = structuredClone(story);
  delete stripped.cgs;
  for (const n of Object.values(stripped.nodes)) delete n.cg;
  const originalSource = source.slice(0, source.indexOf('window.RAIN_STORY')) + 'window.RAIN_STORY = ' + JSON.stringify(stripped, null, 2) + ';\n';
  assert.equal(hash(originalSource), "c21429293c3017d27d3d8fd4b5450b9be3d780791b90e6f3c0c850ffd7886860", '非CG字段/正文/拓扑发生变化');
  assert.deepEqual(artifacts.map(a => a.key).sort(), Object.keys(expectedBindings).sort(), '必须包含精确十张正式CG');
  assert.deepEqual(Object.keys(story.cgs).sort(), Object.keys(expectedBindings).sort());
  assert.equal(new Set(Object.values(expectedExits)).size, 10);
  const expected = new Map();
  for (const item of artifacts) {
    const r = JSON.parse(fs.readFileSync(path.join(root, item.record)));
    assert.deepEqual(item.nodeIds, expectedBindings[item.key], item.key + ' 清单持有范围');
    assert.deepEqual(r.integration.nodeIds, expectedBindings[item.key], item.key + ' 采用记录持有范围');
    assert.equal(item.restoreAt, expectedExits[item.key]);
    assert.equal(r.integration.restoreAt, expectedExits[item.key]);
    assert.equal(item.path, r.adopted.path);
    assert.equal(item.sha256, r.adopted.sha256);
    assert.equal(story.cgs[item.key].image, r.adopted.path);
    const b = fs.readFileSync(path.join(root, r.adopted.path));
    assert.equal(hash(b), r.adopted.sha256);
    assert.equal(b.length, r.adopted.bytes);
    assert.equal(b.readUInt32BE(16), r.adopted.width);
    assert.equal(b.readUInt32BE(20), r.adopted.height);
    for (const id of r.integration.nodeIds) {
      assert(!expected.has(id));
      expected.set(id, item.key);
      assert.equal(story.nodes[id].type, 'line');
      assert.equal(story.nodes[id].cg, item.key);
    }
    assert(!story.nodes[r.integration.restoreAt].cg);
  }
  assert.equal(expected.size, 48);
  assert.equal(Object.keys(story.cgs).length, artifacts.length);
  for (const n of Object.values(story.nodes)) assert.equal(n.cg, expected.get(n.id), '白名单外CG: ' + n.id);
  traverse(new StoryEngine(story));
  assert.equal(completed.length, 1224);
  assert.equal(snapshots.size, 375);
  const coverage = Object.fromEntries(artifacts.map(a => [a.key, 0]));
  for (const p of completed) {
    const keys = [...new Set(p.ids.map(id => story.nodes[id].cg).filter(Boolean))];
    for (const a of artifacts) {
      const expectedCount = a.key === 'cg07' ? (p.flags.preview === 'yelan' ? 1 : 0) : a.key === 'cg08' ? (p.flags.preview === 'huangqiuqiu' ? 1 : 0) : 1;
      assert.equal(keys.filter(k => k === a.key).length, expectedCount);
      if (expectedCount) coverage[a.key]++;
    }
  }
  for (const saved of snapshots.values()) {
    // 去除CG后的原文本自然产生旧版快照，交由新剧情严格恢复。
    const oldEngine = new StoryEngine(stripped, saved);
    const restored = new StoryEngine(story, oldEngine.snapshot());
    assert.deepEqual(restored.snapshot(), oldEngine.snapshot());
    assert(!JSON.stringify(restored.snapshot()).includes('"cg"'));
  }
  assert.equal(c6Combinations.size, 4);
  results.logic = { semanticBaselineUnchanged: true, resources: artifacts.length, paths: completed.length, compatibleSnapshots: snapshots.size, holders: expected.size, exits: expectedExits, exitCount: 10, coverage };
  recordCheck('正文、选项及拓扑未变；1224路径、375同文本旧快照和精确CG范围通过', results.logic);
}
function save(id) {
  assert(snapshots.has(id), '没有自然可达快照 ' + id);
  return { format: 1, savedAt: new Date().toISOString(), state: snapshots.get(id), settings };
}
let browser, server;
async function action(page, name) {
  const button = page.locator(`[data-action="${name}"]:visible`).first();
  await button.click();
}
async function load(page, id, state) {
  const value = state ? { ...save(id), state } : save(id);
  new StoryEngine(story, value.state); // 所有注入存档都由自然回放产生并通过正式严格恢复。
  await page.evaluate(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)), { key: prefix + 'slot3', value });
  await action(page, 'load');
  await page.locator('.save-slot').nth(3).click();
  await page.waitForFunction(id => JSON.parse(localStorage.getItem('bijie-rain-demo:v1:auto')).state.nodeId === id, id);
}
async function ready(page, key) {
  await page.waitForFunction(({ key, image }) => document.querySelector('#app').dataset.cgState === 'ready' && document.querySelector('#cg-image').getAttribute('src') === image && document.querySelector('#cg-image').naturalWidth > 0, { key, image: story.cgs[key].image });
}
async function off(page) {
  await page.waitForFunction(() => document.querySelector('#app').dataset.cgState === 'off' && !document.querySelector('#cg-image').getAttribute('src') && document.querySelector('#cg-image').alt === '');
}
async function next(page) { await page.waitForTimeout(335); await page.locator('#dialogue-box').click(); }
async function geometry(page) {
  return page.evaluate(() => {
    const rect = e => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom }; };
    const image = document.querySelector('#cg-image');
    const box = rect(image), scale = Math.min(box.width / image.naturalWidth, box.height / image.naturalHeight);
    const w = image.naturalWidth * scale, h = image.naturalHeight * scale;
    const fitted = { x: box.x + (box.width - w) / 2, y: box.y + (box.height - h) / 2, right: box.x + (box.width + w) / 2, bottom: box.y + (box.height + h) / 2 };
    const obscurers = ['.scene-header', '.dialogue-shell', '.toolbar-controls', '.menu-button', '#toast'].map(s => ({ selector: s, rect: rect(document.querySelector(s)) }));
    return { fit: getComputedStyle(image).objectFit, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight, box, fitted, obscurers, viewport: { width: innerWidth, height: innerHeight }, scroll: { x: scrollX, y: scrollY, width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight }, ordinary: ['character', 'speaker-avatar'].map(id => document.getElementById(id).getAttribute('src')), src: image.getAttribute('src') };
  });
}
async function runBrowser() {
  const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
  server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + (new URL(req.url, 'http://localhost').pathname === '/' ? '/index.html' : decodeURIComponent(new URL(req.url, 'http://localhost').pathname)));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
    fs.readFile(file, (error, data) => { if (error) { res.writeHead(404).end(); return; } res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(data); });
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const origin = 'http://127.0.0.1:' + server.address().port;
  browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
  const newContext = async viewport => {
    const ctx = await browser.newContext({ viewport });
    ctx.on('page', p => p.on('pageerror', e => results.pageErrors.push(e.message)));
    return ctx;
  };
  const views = smoke ? [[1280, 720]] : [[1440, 900], [1280, 720], [390, 844], [375, 667], [844, 390]];
  // 五个隔离视口独立运行；等待产品通知自然消失，不改DOM或计时器伪造验收图。
  const viewOutcomes = await Promise.allSettled(views.map(async ([width, height]) => {
    const ctx = await newContext({ width, height });
    const page = await ctx.newPage();
    const requests = [];
    page.on('request', r => { if (r.url().includes('/assets/cg/')) requests.push(r.url().slice(origin.length + 1)); });
    await ctx.addInitScript(({ prefix, settings }) => { if (!sessionStorage.getItem('integration-seeded')) { localStorage.setItem(prefix + 'settings', JSON.stringify(settings)); sessionStorage.setItem('integration-seeded', '1'); } }, { prefix, settings });
    await page.goto(origin + '/index.html');
    await page.waitForSelector('[data-action="start"]');
    assert.equal(requests.length, 0, '标题预加载CG');
    for (const a of artifacts) {
      await load(page, a.nodeIds[0]);
      await ready(page, a.key);
      await page.waitForFunction(() => document.querySelector('#toast').hidden);
      const g = await geometry(page);
      assert.equal(g.fit, 'contain');
      assert.equal(g.naturalWidth, a.width); assert.equal(g.naturalHeight, a.height);
      assert(g.ordinary.every(x => x === null));
      assert.equal(g.scroll.x, 0); assert.equal(g.scroll.y, 0);
      assert(g.scroll.width <= width && g.scroll.height <= height);
      assert(g.fitted.x >= -1 && g.fitted.y >= -1 && g.fitted.right <= width + 1 && g.fitted.bottom <= height + 1);
      for (const o of g.obscurers) {
        const r = o.rect;
        assert(!(Math.min(r.right, g.fitted.right) - Math.max(r.x, g.fitted.x) > 1 && Math.min(r.bottom, g.fitted.bottom) - Math.max(r.y, g.fitted.y) > 1), o.selector + '遮挡CG');
      }
      const shot = `cg-integrated-${a.key}-${width}x${height}.png`;
      await page.screenshot({ path: path.join(__dirname, shot) });
      results.cases.push({ key: a.key, width, height, node: a.nodeIds[0], pass: true, screenshot: 'qa/' + shot, geometry: g });
      if (width === 1280) {
        const before = Object.values(story.nodes).find(n => n.type === 'line' && n.next === a.nodeIds[0] && !n.cg);
        if (before) { await load(page, before.id); await off(page); await next(page); await ready(page, a.key); }
        await load(page, a.nodeIds.at(-1)); await ready(page, a.key);
        await next(page); await off(page);
        assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('bijie-rain-demo:v1:auto')).state.nodeId), a.restoreAt);
        recordCheck('正式进入与退出 ' + a.key, { entry: a.nodeIds[0], last: a.nodeIds.at(-1), exit: a.restoreAt, naturalEntry: before?.id || null });
      }
    }
    if (width === 1280) {
      if (!smoke) {
        for (const a of artifacts) for (const id of a.nodeIds) { await load(page, id); await ready(page, a.key); }
        recordCheck('全部48个正式持有节点合法读档后加载当前PNG', { holders: artifacts.reduce((sum, a) => sum + a.nodeIds.length, 0) });
      }
      // 同文本旧档继续/刷新、菜单、手动存读档，均通过正式页面完成。
      await load(page, 's5_mirror_03'); await ready(page, 'cg02');
      await action(page, 'menu'); await action(page, 'close-modal'); await ready(page, 'cg02');
      await action(page, 'save'); await page.locator('.save-slot').nth(1).click();
      await action(page, 'close-modal');
      await load(page, 's1_arrive_04'); await off(page);
      await action(page, 'load'); await page.locator('.save-slot').nth(1).click(); await ready(page, 'cg02');
      await page.reload(); await action(page, 'continue'); await ready(page, 'cg02');
      recordCheck('正式CG中手动存档、切普通档、读回、刷新继续与菜单恢复', { node: 's5_mirror_03' });
      await ctx.close();
    } else await ctx.close();
    results.requests.push({ width, height, paths: requests });
  }));
  for (const outcome of viewOutcomes) if (outcome.status === 'rejected') throw outcome.reason;
  results.cases.sort((a, b) => views.findIndex(v => v[0] === a.width && v[1] === a.height) - views.findIndex(v => v[0] === b.width && v[1] === b.height) || a.key.localeCompare(b.key));
  assert.equal(results.cases.length, smoke ? 10 : 50);
  // 隐藏边界使用未请求隐藏CG的新context；不改写story响应。
  const ctx = await newContext({ width: 390, height: 844 });
  const page = await ctx.newPage(), hiddenRequests = [];
  page.on('request', r => { if (r.url().endsWith(story.cgs.cg08.image)) hiddenRequests.push(r.url()); });
  await ctx.addInitScript(({ prefix, settings }) => localStorage.setItem(prefix + 'settings', JSON.stringify(settings)), { prefix, settings });
  await page.goto(origin + '/index.html');
  for (const [combination, state] of c6Combinations) {
    await load(page, 'c6', state); await off(page);
    assert.equal(await page.locator('[data-choice-index]').count(), combination === 'record/reply' ? 5 : 4);
    assert.equal(hiddenRequests.length, 0, 'H组合提前请求隐藏CG ' + combination);
  }
  for (const id of ['h1', 'h2', 'c6', ...Array.from({ length: 11 }, (_, i) => 'preview_qiu_' + String(i + 1).padStart(2, '0'))]) { await load(page, id); await off(page); }
  assert.equal(hiddenRequests.length, 0);
  await load(page, 'preview_qiu_12'); await ready(page, 'cg08'); assert(hiddenRequests.length > 0);
  await load(page, 's1_arrive_04'); await off(page);
  await load(page, 'end_huangqiuqiu'); await off(page);
  await action(page, 'replay-preview'); await off(page);
  assert.equal(await page.locator('[data-choice-index]').count(), 5);
  recordCheck('四种H组合不预取隐藏图；只在合法_12请求；普通档/结束页/重选清除隐藏画面', { combinations: [...c6Combinations.keys()], first: 'preview_qiu_12' });
  await ctx.close();
  // 仅拦截图片请求模拟失败/晚到，剧情、DOM、Image API均保持正式实现。
  for (const key of Object.keys(expectedBindings)) {
    const isolated = await newContext({ width: 390, height: 844 });
    const p = await isolated.newPage();
    await isolated.addInitScript(({ prefix, settings }) => localStorage.setItem(prefix + 'settings', JSON.stringify(settings)), { prefix, settings });
    await p.route('**/' + story.cgs[key].image, route => route.abort());
    await p.goto(origin + '/index.html');
    const art = artifacts.find(a => a.key === key);
    await load(p, art.nodeIds[0]);
    await p.waitForFunction(() => document.querySelector('#app').dataset.cgState === 'fallback');
    assert.equal(await p.locator('#dialogue-text').textContent(), story.nodes[art.nodeIds[0]].text);
    assert.equal(await p.locator('#cg-image').getAttribute('src'), null);
    await next(p);
    assert.notEqual(await p.evaluate(() => JSON.parse(localStorage.getItem('bijie-rain-demo:v1:auto')).state.nodeId), art.nodeIds[0]);
    await load(p, 's1_arrive_04'); await off(p);
    await isolated.close();
    recordCheck('正式图缺失时降级且正文可继续 ' + key, { key });
  }
  for (const outcome of ['success', 'failure']) {
  const delayed = await newContext({ width: 390, height: 844 });
  const delayedPage = await delayed.newPage();
  await delayed.addInitScript(({ prefix, settings }) => localStorage.setItem(prefix + 'settings', JSON.stringify(settings)), { prefix, settings });
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  await delayedPage.route('**/' + story.cgs.cg08.image, async route => { await gate; if (outcome === 'success') await route.continue(); else await route.abort(); });
  await delayedPage.goto(origin + '/index.html');
  await load(delayedPage, 'preview_qiu_12');
  await delayedPage.waitForFunction(() => document.querySelector('#app').dataset.cgState === 'loading');
  await load(delayedPage, 's1_arrive_04'); await off(delayedPage);
  release();
  await delayedPage.waitForTimeout(500); await off(delayedPage);
  await delayed.close();
  recordCheck('正式隐藏图片请求晚到不覆盖已恢复的普通节点 ' + outcome, { source: 'preview_qiu_12', target: 's1_arrive_04', outcome });
  }
  assert.deepEqual(results.pageErrors, []);
}
(async () => {
  try {
    logic();
    if (!logicOnly) await runBrowser();
    for (const [p, original] of Object.entries(originals)) assert.equal(hash(fs.readFileSync(path.join(root, p))), original, '测试期间文件变化 ' + p);
    results.fingerprintsStable = true;
    results.pass = true;
  } catch (error) { results.pass = false; results.error = error.stack; console.error(error); process.exitCode = 1; }
  finally {
    if (browser) await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
    results.finishedAt = new Date().toISOString();
    fs.writeFileSync(output, JSON.stringify(results, null, 2) + '\n');
    console.log(JSON.stringify({ pass: results.pass, logic: results.logic, cases: results.cases.length, checks: results.checks.length, output }));
  }
})();
