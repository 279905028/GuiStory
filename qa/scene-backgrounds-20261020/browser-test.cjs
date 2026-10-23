'use strict';
// 本轮独立浏览器验收；所有定点存档均由正式引擎从入口自然回放产生。
// 仅读取历史 witnesses；不重写历史测试或验收产物。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const http = require('node:http');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = path.resolve(__dirname, '../..'), out = __dirname;
const resultFile = path.join(out, 'browser-results.json');
const previousReport = fs.existsSync(resultFile) ? JSON.parse(fs.readFileSync(resultFile, 'utf8')) : null;
const previousRuns = previousReport ? [...(previousReport.previousRuns || []),
  Object.fromEntries(Object.entries(previousReport).filter(([key]) => key !== 'previousRuns'))] : [];
const runNumber = Math.max(previousRuns.length, previousReport?.runNumber || 0,
  previousReport?.screenshotRefresh?.runNumber || 0, previousReport?.incrementalFix?.runNumber || 0) + 1;
const cleanCapturesOnly = process.argv.includes('--clean-captures');
const chapter2FixOnly = process.argv.includes('--chapter2-fix');
const { StoryEngine } = require(path.join(root, 'engine.js'));
const source = fs.readFileSync(path.join(root, 'story.js'), 'utf8');
const story = JSON.parse(source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1));
const audit = JSON.parse(fs.readFileSync(path.join(out, 'audit.json'), 'utf8'));
const bindings = JSON.parse(fs.readFileSync(path.join(root, 'assets/backgrounds/bijie-20261020/bindings.json'), 'utf8'));
const reviewedBindingFile = 'qa/fixtures/scene-reviewed-binding.json';
const reviewedBinding = JSON.parse(fs.readFileSync(path.join(root, reviewedBindingFile), 'utf8'));
const reviewedAddition = Object.fromEntries(['nodeId', 'bg', 'location', 'time'].map(key => [key, reviewedBinding[key]]));
const allNodeBindings = [...audit.nodeBindings, reviewedAddition];
const witnesses = JSON.parse(fs.readFileSync(path.join(root, 'qa/heroine-background-20261020/node-witnesses.json'), 'utf8'));
const prefix = fs.readFileSync(path.join(root, 'game.js'), 'utf8').match(/const PREFIX = ['"]([^'"]+)['"]/)?.[1];
assert(prefix, '未找到正式存档空间');
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
const files = ['story.js', 'engine.js', 'game.js', 'index.html', 'styles.css', 'assets/runtime-v0.4-manifest.json',
  'assets/backgrounds/bijie-20261020/bindings.json',
  ...audit.backgrounds.map(item => item.assetPath)];
const hashes = () => Object.fromEntries(files.map(file => [file,
  fs.existsSync(path.join(root, file)) ? hash(fs.readFileSync(path.join(root, file))) : null]));
const dimensions = file => {
  const data = fs.readFileSync(path.join(root, file));
  assert.equal(data.subarray(1, 4).toString(), 'PNG', file);
  return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
};
const resolved = node => {
  const scene = story.scenes[node.scene], key = node.bg ?? scene.bg, time = node.time ?? scene.time;
  return { key, source: key === 'street' && time === '下午' ?
    'assets/background-variants/m2-daynight-20261020/bg-street-day.png' : story.backgrounds[key],
  location: node.location ?? scene.location, time, day: scene.dayLabel || 'DAY ' + String(scene.day).padStart(2, '0'),
  title: scene.title };
};
function reach(id, decisions = witnesses[id]) {
  assert(decisions, id + ' 缺少自然路径见证');
  const engine = new StoryEngine(story);
  for (let count = 0; count <= Object.keys(story.nodes).length; count++) {
    const current = engine.current();
    if (current.id === id) {
      assert.deepEqual(new StoryEngine(story, engine.snapshot()).snapshot(), engine.snapshot());
      return engine;
    }
    if (current.type === 'choice') {
      const value = decisions[current.id];
      const option = engine.availableChoices().find(item => item.option.value === value) ||
        (value === undefined ? engine.availableChoices()[0] : null);
      assert(option, id + ' 无法自然经过 ' + current.id);
      assert(engine.choose(option.index));
    } else assert(engine.advance(), id + ' 无法从 ' + current.id + ' 继续');
  }
  throw new Error(id + ' 自然回放超出节点数');
}
const report = {
  runNumber, previousRuns, startedAt: new Date().toISOString(), pass: false, initialHashes: hashes(), storagePrefix: prefix,
  checks: [], screenshots: [], explicitNodes: [], defaultScenes: [], mobile: [], transitions: [],
  pageErrors: [], network: [], probeErrors: [],
  scope: chapter2FixOnly ? '独立复核新增 end_ch2 绑定及 ch2_leave_01 → end_ch2 的增量 UI 验收。' :
    '9 张新增背景、16 个场景默认绑定、56 个节点覆盖的正式浏览器验收。',
  limitations: [
    '使用隔离 Google Chrome；390×844 仅模拟手机视口，未覆盖实体手机、Safari 或 Firefox。',
    '定点进度由正式引擎从入口自然回放产生，再通过页面读取 slot3；并非全部路径从头到尾手工点击。',
    '截图与自动布局检查只覆盖记录的节点和视口；未覆盖线上部署或音频听感。'
  ]
};
let browser, server;
const check = (name, details) => { report.checks.push({ name, pass: true, details }); console.log('PASS ' + name); };
const action = (page, name) => page.locator(`[data-action="${name}"]:visible`).first().click();
const state = page => page.evaluate(p => JSON.parse(localStorage.getItem(p + 'auto'))?.state, prefix);
const waitState = (page, id) => page.waitForFunction(({ prefix, id }) =>
  JSON.parse(localStorage.getItem(prefix + 'auto'))?.state.nodeId === id, { prefix, id });
async function fresh(url, label, viewport = { width: 1280, height: 720 }) {
  const context = await browser.newContext({ viewport, locale: 'zh-CN', reducedMotion: 'reduce' });
  const traffic = { label, blocked: [], failed: [], responseErrors: [] };
  const allowed = url.startsWith('file:') ? pathToFileURL(root + path.sep).href : new URL(url).origin + '/';
  await context.route('**/*', route => {
    if (route.request().url().startsWith(allowed)) return route.continue();
    traffic.blocked.push(route.request().url()); return route.abort();
  });
  await context.addInitScript(({ prefix, settings }) =>
    localStorage.setItem(prefix + 'settings', JSON.stringify(settings)), { prefix, settings });
  const page = await context.newPage(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => report.pageErrors.push({ label, message: error.message }));
  page.on('requestfailed', request => traffic.failed.push({ url: request.url(), error: request.failure()?.errorText }));
  page.on('response', response => {
    if (response.status() >= 400) traffic.responseErrors.push({ url: response.url(), status: response.status() });
  });
  report.network.push(traffic);
  try {
    await page.goto(url);
    await page.waitForSelector('#title-screen[aria-hidden="false"]');
    return { context, page, traffic, label };
  } catch (error) { await context.close(); throw error; }
}
function verifyTraffic(frame) {
  assert.deepEqual(frame.traffic.blocked, [], frame.label + ' 存在外网请求');
  assert.deepEqual(frame.traffic.failed, [], frame.label + ' 存在失败资源');
  assert.deepEqual(frame.traffic.responseErrors, [], frame.label + ' 存在 HTTP 错误');
}
async function load(page, engine) {
  const snapshot = engine.snapshot();
  await page.evaluate(({ prefix, value }) => localStorage.setItem(prefix + 'slot3', JSON.stringify(value)),
    { prefix, value: { format: 1, savedAt: new Date().toISOString(), settings, state: snapshot } });
  await action(page, 'load');
  await page.locator('.save-slot').nth(3).click();
  await waitState(page, snapshot.nodeId);
  await page.waitForTimeout(360);
  assert.deepEqual(await state(page), snapshot);
}
async function inspect(page, node) {
  const expected = resolved(node), natural = dimensions(expected.source);
  await page.waitForFunction(source => {
    const img = document.getElementById('scene-bg');
    return img.getAttribute('src') === source && img.complete && img.naturalWidth > 0 && img.naturalHeight > 0;
  }, expected.source);
  if (node.cg) await page.waitForFunction(() => document.getElementById('app').dataset.cgState === 'ready');
  else await page.waitForFunction(() => document.getElementById('app').dataset.cgState !== 'ready');
  const actual = await page.evaluate(() => {
    const image = document.getElementById('scene-bg'), css = getComputedStyle(image), box = image.getBoundingClientRect();
    const cg = document.getElementById('cg-image'), layer = document.getElementById('cg-layer');
    return {
      source: image.getAttribute('src'), naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight,
      hidden: image.hidden, display: css.display, visibility: css.visibility, opacity: Number(css.opacity),
      rect: { x: box.x, y: box.y, width: box.width, height: box.height },
      location: document.getElementById('scene-location').textContent, time: document.getElementById('scene-time').textContent,
      day: document.getElementById('scene-day').textContent, title: document.getElementById('scene-title').textContent,
      cgState: document.getElementById('app').dataset.cgState, cgSource: cg.getAttribute('src'),
      cgNaturalWidth: cg.naturalWidth, cgHidden: layer.hidden, screen: document.body.dataset.screen
    };
  });
  for (const key of ['source', 'location', 'time', 'day', 'title']) assert.equal(actual[key], expected[key], node.id + ' ' + key);
  assert.equal(actual.naturalWidth, natural.width, node.id + ' 原图宽度');
  assert.equal(actual.naturalHeight, natural.height, node.id + ' 原图高度');
  if (node.cg) {
    assert.equal(actual.cgSource, story.cgs[node.cg].image, node.id + ' CG来源');
    assert(actual.cgNaturalWidth > 0 && !actual.cgHidden, node.id + ' CG加载失败');
    assert(actual.hidden || actual.visibility === 'hidden', node.id + ' CG层应覆盖普通背景');
  } else {
    assert(!actual.hidden && actual.display !== 'none' && actual.visibility === 'visible' && actual.opacity > 0,
      node.id + ' 新背景被错误隐藏');
    assert(actual.rect.width > 0 && actual.rect.height > 0, node.id + ' 背景尺寸为空');
    assert(actual.cgHidden, node.id + ' 旧CG层残留');
  }
  assert.equal(actual.screen, node.type === 'end' ? 'end' : 'game', node.id + ' 页面类型');
  if (node.type === 'line') assert.equal(await page.locator('#dialogue-text').textContent(), node.text, node.id + ' 对白');
  if (node.type === 'end') assert.equal(await page.locator('#end-copy').textContent(), node.text, node.id + ' 结束文字');
  return { nodeId: node.id, expected, actual };
}
async function inside(page, selector, allowVerticalScroll = false) {
  const rect = await page.locator(selector).evaluate(element => {
    const box = element.getBoundingClientRect(), css = getComputedStyle(element);
    return { left: box.left, top: box.top, right: box.right, bottom: box.bottom, width: innerWidth, height: innerHeight,
      scrollHeight: element.scrollHeight, clientHeight: element.clientHeight, overflowY: css.overflowY };
  });
  assert(rect.left >= -1 && rect.top >= -1 && rect.right <= rect.width + 1 && rect.bottom <= rect.height + 1,
    selector + ' 超出视口：' + JSON.stringify(rect));
  assert(rect.scrollHeight <= rect.clientHeight + 2 || (allowVerticalScroll && ['auto', 'scroll'].includes(rect.overflowY)),
    selector + ' 内容不可读：' + JSON.stringify(rect));
  return rect;
}
async function layout(page) {
  const overflow = await page.evaluate(() => ({
    viewport: innerWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth
  }));
  assert(overflow.document <= overflow.viewport + 1 && overflow.body <= overflow.viewport + 1, '存在横向溢出');
  return {
    overflow, header: await inside(page, '.scene-header'), visual: await inside(page, '.scene-visual'),
    dialogue: await inside(page, '#dialogue-box', true), toolbar: await inside(page, '.game-toolbar')
  };
}
async function capture(page, label) {
  if (cleanCapturesOnly || chapter2FixOnly) await page.waitForSelector('#toast', { state: 'hidden', timeout: 8000 });
  const filename = 'browser-run' + runNumber + '-' + label + '.png', file = path.join(out, filename);
  assert(!fs.existsSync(file), '不覆盖既有截图：' + filename);
  await page.screenshot({ path: file }); report.screenshots.push(filename);
}
async function step(page, engine) {
  assert.equal(engine.current().type, 'line');
  await page.waitForTimeout(340);
  await page.locator('#dialogue-box').click();
  assert(engine.advance());
  await waitState(page, engine.current().id);
  await page.waitForTimeout(340);
  assert.deepEqual(await state(page), engine.snapshot());
  return inspect(page, engine.current());
}
async function sequence(page, ids, label) {
  const engine = reach(ids[0]);
  await load(page, engine);
  const rows = [await inspect(page, engine.current())];
  for (const id of ids.slice(1)) {
    const row = await step(page, engine); assert.equal(engine.current().id, id, label + ' 连接');
    rows.push(row);
  }
  await capture(page, 'transition-' + label);
  report.transitions.push({ label, nodes: rows });
}
function preflight() {
  assert.equal(audit.backgrounds.length, 9); assert.equal(audit.nodeBindings.length, 55);
  assert.equal(Object.keys(bindings.nodeBindings).length, 56);
  // 结构化输入记录原复核结论及来源指纹；不会把历史复核冒充本轮浏览器验收。
  assert.deepEqual(reviewedBinding, {
    "schemaVersion": 1,
    "sourceDocument": {
      "path": "qa/scene-backgrounds-20261020/independent-review.md",
      "sha256": "e59950d300cbdc43a27db7c5855b436eb8996d35a0e2fd5dcb60f7186b5e5920",
      "reviewDate": "2026-10-20"
    },
    "fromNode": "ch2_leave_01",
    "nodeId": "end_ch2",
    "bg": "slope_junction_night",
    "location": "回家的坡路",
    "time": "夜间"
  }, '独立复核夹具与归档事实不一致');
  assert.deepEqual(bindings.nodeBindings.end_ch2, { bg: reviewedAddition.bg, location: reviewedAddition.location });
  const fromNode = story.nodes[reviewedBinding.fromNode], toNode = story.nodes[reviewedBinding.nodeId];
  assert(fromNode && toNode, '独立复核绑定的起止节点必须存在');
  assert.equal(fromNode.next, toNode.id, 'ch2_leave_01 必须直接衔接 end_ch2');
  for (const node of [fromNode, toNode]) {
    const actual = resolved(node);
    assert.deepEqual({ bg: actual.key, location: actual.location, time: actual.time },
      { bg: reviewedBinding.bg, location: reviewedBinding.location, time: reviewedBinding.time },
      node.id + ' 实际背景、地点与时段须保持独立复核确认的连续性');
  }
  const changedScenes = audit.sceneDefaults.filter(item => item.currentBackground !== item.recommendedBackground);
  assert.equal(changedScenes.length, 16);
  assert.deepEqual(bindings.sceneBindings, Object.fromEntries(changedScenes.map(item => [item.sceneId, item.recommendedBackground])),
    '正式绑定与审计的场景映射不同');
  assert.deepEqual(Object.keys(bindings.nodeBindings).sort(), allNodeBindings.map(item => item.nodeId).sort(),
    '正式绑定与审计的节点范围不同');
  for (const item of audit.backgrounds) {
    assert.equal(bindings.backgrounds[item.key].path, item.assetPath, item.key + ' 正式资源来源');
    assert.equal(story.backgrounds[item.key], item.assetPath, item.key + ' 未绑定');
    const dim = dimensions(item.assetPath);
    assert(dim.width >= 1672 && dim.height >= 941, item.key + ' 分辨率不足');
    assert(Math.abs(dim.width / dim.height - 16 / 9) < .01, item.key + ' 不是横向16:9');
  }
  for (const item of changedScenes) {
    assert.equal(story.scenes[item.sceneId].bg, item.recommendedBackground, item.sceneId);
    assert.equal(story.scenes[item.sceneId].day, item.day, item.sceneId + ' 日期改变');
    assert.equal(story.scenes[item.sceneId].time, item.time, item.sceneId + ' 时段改变');
  }
  for (const item of allNodeBindings) {
    for (const field of ['bg', 'location']) {
      assert.equal(bindings.nodeBindings[item.nodeId][field], item[field], item.nodeId + ' 审计 ' + field);
      assert.equal(story.nodes[item.nodeId][field], item[field], item.nodeId + ' ' + field);
    }
    assert.equal(resolved(story.nodes[item.nodeId]).time, item.time, item.nodeId + ' 有效时段');
  }
  check('9 图、16 场默认、56 节点绑定与原生尺寸就绪', {
    backgrounds: 9, defaultScenes: 16, explicitNodes: 56, originalAuditNodes: 55,
    reviewedAddition: { ...reviewedAddition, evidence: reviewedBindingFile, sourceDocument: reviewedBinding.sourceDocument }
  });
  return changedScenes;
}
async function representativeChecks(url, viewport, label, representatives) {
  const frame = await fresh(url, label, viewport), results = [];
  try {
    for (const { key, id } of representatives) {
      const engine = reach(id); await load(frame.page, engine);
      const result = await inspect(frame.page, engine.current()), geometry = await layout(frame.page);
      await capture(frame.page, label + '-' + key);
      results.push({ key, ...result, layout: geometry });
    }
    verifyTraffic(frame);
    check(label + ' 九张背景真实节点加载、元数据与布局', results);
    if (label.startsWith('mobile')) report.mobile = results;
  } finally { await frame.context.close(); }
}
async function bindingChecks(url, changedScenes) {
  const frame = await fresh(url, 'binding-and-transition'), { page } = frame;
  try {
    for (const item of allNodeBindings) {
      const engine = reach(item.nodeId); await load(page, engine);
      report.explicitNodes.push(await inspect(page, engine.current()));
    }
    check('56 个显式覆盖节点逐一通过真实 UI 读档和图片/元数据检查', { count: report.explicitNodes.length });
    for (const item of changedScenes) {
      const node = Object.values(story.nodes).find(node => node.scene === item.sceneId &&
        node.type === 'line' && !node.cg && node.bg === undefined);
      assert(node, item.sceneId + ' 缺少可见默认节点');
      const engine = reach(node.id); await load(page, engine);
      report.defaultScenes.push({ sceneId: item.sceneId, ...await inspect(page, node) });
    }
    check('16 个场景默认绑定逐一通过真实 UI 检查', { count: report.defaultScenes.length });
    await sequence(page, ['ch3_piao_c_15', 'ch3_piao_c_16'], 'piao-front-to-inside');
    await sequence(page, ['ch3_piao_b_05', 'ch3_piao_b_06', 'ch3_piao_b_07'], 'piao-eaves-to-slope');
    await sequence(page, ['ch3_yelan_f_07', 'ch3_yelan_f_08', 'ch3_bg_yelan_21_01', 'ch3_bg_yelan_21_02',
      'ch3_bg_yelan_21_03', 'ch3_yelan_f_09', 'ch3_yelan_f_10', 'ch3_yelan_f_11', 'end_ch3_yelan'], 'yelan-eaves-and-end');
    await sequence(page, ['epilogue_piao_w_12', 'epilogue_piao_w_13', 'end_piao_wenwen'], 'piao-epilogue-slope-end');
    await sequence(page, ['preview_yelan_10', 'preview_yelan_11', 'preview_yelan_private_01',
      'preview_yelan_private_02', 'preview_yelan_private_03', 'end_yelan'], 'yelan-private-and-cg-return');
    for (const value of ['walk', 'taxi']) {
      const engine = reach('c1'); await load(page, engine);
      const rows = [await inspect(page, engine.current())];
      const item = engine.availableChoices().find(item => item.option.value === value); assert(item);
      await page.locator(`[data-choice-index="${item.index}"]`).click(); assert(engine.choose(item.index));
      await waitState(page, engine.current().id); await page.waitForTimeout(340);
      assert.equal(engine.current().id, 's3_' + value + '_01');
      rows.push(await inspect(page, engine.current()));
      for (let i = 0; i < 5; i++) rows.push(await step(page, engine));
      assert.equal(engine.current().id, 's4_shift_01');
      report.transitions.push({ label: 's3-' + value + '-to-s4', nodes: rows });
    }
    await sequence(page, ['s1_arrive_03', 's1_arrive_04'], 'cg-to-busstop');
    await sequence(page, ['ch2_leave_01', 'end_ch2'], 'chapter2-slope-end');
    check('转场、插入对白、结尾保持、步行/打车分支与 CG 退出恢复', { sequences: report.transitions.length });
    verifyTraffic(frame);
  } finally { await frame.context.close(); }
}
async function startServer() {
  server = http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep)) return response.writeHead(403).end();
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end();
      response.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.js': 'text/javascript',
        '.css': 'text/css', '.png': 'image/png' })[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store' });
      response.end(data);
    });
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  return 'http://127.0.0.1:' + server.address().port + '/index.html';
}
(async () => {
  try {
    if (cleanCapturesOnly) {
      assert(previousReport?.pass, '清洁截图补拍前必须有已通过的本轮完整验收');
      assert.deepEqual(previousReport.finalHashes, hashes(), '补拍前正式内容与已验收版本不一致');
    }
    const changedScenes = preflight();
    browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
    report.browser = browser.version();
    let url = pathToFileURL(path.join(root, 'index.html')).href;
    if (chapter2FixOnly) {
      assert(previousReport?.pass, '增量检查前必须有本轮已通过的完整验收');
      const allowedChanged = ['story.js', 'assets/runtime-v0.4-manifest.json', 'assets/backgrounds/bijie-20261020/bindings.json'];
      report.changedFiles = Object.keys(report.initialHashes).filter(file =>
        previousReport.finalHashes[file] !== report.initialHashes[file]);
      assert(report.changedFiles.every(file => allowedChanged.includes(file)), '增量范围之外的正式文件发生变化');
      const frame = await fresh(url, 'chapter2-fix');
      try {
        await sequence(frame.page, ['ch2_leave_01', 'end_ch2'], 'chapter2-slope-end');
        report.explicitNodes = report.transitions[0].nodes.filter(item => item.nodeId === 'end_ch2');
        verifyTraffic(frame);
        check('ch2_leave_01 → end_ch2 连续点击保持回家坡路背景与地点', report.transitions[0]);
      } finally { await frame.context.close(); }
      report.transport = 'file://';
      assert.deepEqual(report.pageErrors, []);
      assert.deepEqual(hashes(), report.initialHashes, '增量验收期间正式文件改变');
      report.pass = true;
      return;
    }
    try {
      const probe = await fresh(url, 'file-url-probe');
      try { await load(probe.page, reach(story.start)); await inspect(probe.page, story.nodes[story.start]); verifyTraffic(probe); }
      finally { await probe.context.close(); }
      report.transport = 'file://';
    } catch (error) {
      report.probeErrors.push({ transport: 'file://', message: error.message });
      url = await startServer(); report.transport = 'localhost';
    }
    const preferred = {
      busstop_day: 's1_arrive_01', market_stall_night: 's3_stall_04', echo_entrance_night: 's4_shift_01',
      old_eaves_day: 'ch3_piao_b_05', slope_junction_night: 's3_walk_01',
      residential_slope_day: 'ch3_piao_b_06', noodle_front_dusk: 'ch3_piao_c_15', noodles_dusk: 'ch3_piao_c_16'
    };
    const representatives = audit.backgrounds.map(item => {
      const chosen = story.nodes[preferred[item.key]] || Object.values(story.nodes).find(node =>
        node.type === 'line' && !node.cg && node.character && resolved(node).key === item.key);
      assert(chosen && !chosen.cg && chosen.type === 'line' && resolved(chosen).key === item.key, item.key + ' 代表节点无效');
      return { key: item.key, id: chosen.id };
    });
    await representativeChecks(url, { width: 1280, height: 720 }, 'desktop', representatives);
    await representativeChecks(url, { width: 390, height: 844 }, 'mobile-390x844', representatives);
    if (!cleanCapturesOnly) await bindingChecks(url, changedScenes);
    assert.deepEqual(report.pageErrors, [], '浏览器页面报错');
    assert.deepEqual(hashes(), report.initialHashes, '验收期间正式文件发生变化');
    report.pass = true;
  } catch (error) {
    report.error = error.stack; process.exitCode = 1; console.error(error);
  } finally {
    if (browser) await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
    report.finishedAt = new Date().toISOString(); report.finalHashes = hashes();
    // 完整验收与补拍分别记录；保留失败尝试、旧截图及完整功能证据。
    const persisted = chapter2FixOnly ? {
      ...previousReport,
      pass: previousReport.pass && report.pass,
      fullVerificationFinalHashes: previousReport.fullVerificationFinalHashes || previousReport.finalHashes,
      finalHashes: report.finalHashes,
      finalCoverage: { newBackgrounds: 9, defaultScenes: 16, explicitNodes: 56,
        basis: '此前55个节点完整验收，加本次独立复核新增end_ch2的1个节点增量验收。' },
      screenshots: [...previousReport.screenshots, ...report.screenshots],
      incrementalFix: Object.fromEntries(Object.entries(report).filter(([key]) => key !== 'previousRuns'))
    } : cleanCapturesOnly ? {
      ...previousReport,
      screenshots: [...previousReport.screenshots, ...report.screenshots],
      screenshotRefresh: Object.fromEntries(Object.entries(report).filter(([key]) => key !== 'previousRuns'))
    } : report;
    fs.writeFileSync(resultFile, JSON.stringify(persisted, null, 2) + '\n');
    console.log(JSON.stringify({ pass: report.pass, checks: report.checks.length, screenshots: report.screenshots.length, report: resultFile }));
  }
})();
