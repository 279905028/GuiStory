'use strict';
// E5真实页面验收：独立Chrome上下文；只观察产品，保存夹具由正式引擎自然回放产生。
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const http = require('node:http'), crypto = require('node:crypto'), assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const { spawn } = require('node:child_process');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { StoryEngine } = require('../engine.js');
const root = path.resolve(__dirname, '..'), prefix = 'bijie-rain-demo:v1:';
const audioLifecycleOnly = process.argv.includes('--audio-lifecycle');
const visibilityOnly = process.argv.includes('--visibility-only');
const outputName = visibilityOnly ? 'e5-visibility-results.json' : audioLifecycleOnly ? 'e5-audio-lifecycle-results.json' : 'e5-final-results.json';
const sandbox = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(root, 'story.js'), 'utf8'), sandbox);
const story = JSON.parse(JSON.stringify(sandbox.window.RAIN_STORY));
const dayImage = 'assets/background-variants/m2-daynight-20261020/bg-street-day.png';
const runtime = ['index.html', 'styles.css', 'story.js', 'engine.js', 'game.js', ...Object.values(story.backgrounds),
  ...Object.values(story.characters).map(x => x.image), ...Object.values(story.cgs).map(x => x.image), dayImage];
const hashes = () => Object.fromEntries([...runtime, 'qa/e5-final-test.cjs'].map(p => [p, crypto.createHash('sha256').update(fs.readFileSync(path.join(root, p))).digest('hex')]));
const report = { startedAt: new Date().toISOString(), scope: visibilityOnly ? '真实标签隐藏/恢复专项；关闭自动化默认前台模拟，正式产品未变' : audioLifecycleOnly ? '音频、阅读交互和真实标签生命周期补验；正式产品未变' : '当前正式10图版；独立临时Chrome；HTTP仅回环和file协议分别完整通关',
  fingerprints: hashes(), checks: [], flows: [], network: [], audio: {}, pageErrors: [], limitations: [
    '直接打开HTML使用隔离Chrome的file://地址；未操作Finder双击，未检查其他系统默认浏览器。',
    '音频通过真实Web Audio输出采样验证，未代替真人对音色和设备扬声器的听感审阅。',
    '手机为浏览器视口模拟，不是实体手机；未检查Safari/Firefox。'
  ] };
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const save = (state, config = settings) => ({ format: 1, savedAt: new Date().toISOString(), state, settings: config });
function check(name, details) { report.checks.push({ name, pass: true, details }); console.log('PASS ' + name); }
function target(id, decisions = {}) {
  const engine = new StoryEngine(story);
  for (let i = 0; i < 600; i++) {
    const node = engine.current(); if (node.id === id) return engine.snapshot();
    if (node.type === 'line') engine.advance();
    else if (node.type === 'choice') {
      const wanted = decisions[node.id] ?? ({ h1: 'record', h2: 'reply', c6: 'xiaoman' }[node.id]);
      const options = engine.availableChoices(); engine.choose((options.find(x => x.option.value === wanted) || options[0]).index);
    } else throw new Error('不能到达目标 ' + id);
  }
  throw new Error('超过剧情步数 ' + id);
}
const state = page => page.evaluate(p => JSON.parse(localStorage.getItem(p + 'auto')).state, prefix);
const action = (page, name) => page.locator(`[data-action="${name}"]:visible`).first().click();
async function load(page, snapshot, config = settings) {
  await page.evaluate(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)), { key: prefix + 'slot3', value: save(snapshot, config) });
  await action(page, 'load'); await page.locator('.save-slot').nth(3).click();
  await page.waitForFunction(({ p, id }) => JSON.parse(localStorage.getItem(p + 'auto'))?.state.nodeId === id, { p: prefix, id: snapshot.nodeId });
}
let browser, server;
async function pageFor(url, label, config = settings, observeAudio = false) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 }, locale: 'zh-CN' });
  const traffic = { label, allowed: [], unexpected: [], failed: [], responsesWithErrors: [] };
  const fileMode = url.startsWith('file:'), origin = fileMode ? null : new URL(url).origin;
  await ctx.route('**/*', route => {
    const requestUrl = route.request().url();
    if (fileMode ? requestUrl.startsWith('file:') : requestUrl.startsWith(origin + '/')) return route.continue();
    traffic.unexpected.push(requestUrl); return route.abort();
  });
  await ctx.addInitScript(({ p, config, observeAudio }) => {
    if (!sessionStorage.getItem('e5-seeded')) { localStorage.setItem(p + 'settings', JSON.stringify(config)); sessionStorage.setItem('e5-seeded', '1'); }
    if (observeAudio) {
      // 旁路只读分析：保留产品原来的destination连接，不替换音频、时钟或用户事件。
      const connect = AudioNode.prototype.connect;
      window.__e5audio = { analysers: [], contexts: [], oscillators: 0 };
      AudioNode.prototype.connect = function (destination, ...args) {
        const result = connect.call(this, destination, ...args);
        if (destination === this.context.destination) {
          const analyser = this.context.createAnalyser(); analyser.fftSize = 2048;
          connect.call(this, analyser); window.__e5audio.analysers.push(analyser); window.__e5audio.contexts.push(this.context);
        }
        return result;
      };
      const createOscillator = AudioContext.prototype.createOscillator;
      AudioContext.prototype.createOscillator = function (...args) { window.__e5audio.oscillators++; return createOscillator.apply(this, args); };
    }
  }, { p: prefix, config, observeAudio });
  const page = await ctx.newPage(); page.setDefaultTimeout(10000);
  page.on('pageerror', error => report.pageErrors.push({ label, message: error.message }));
  page.on('request', r => traffic.allowed.push(r.url()));
  page.on('requestfailed', r => traffic.failed.push({ url: r.url(), error: r.failure()?.errorText }));
  page.on('response', r => { if (r.status() >= 400) traffic.responsesWithErrors.push({ url: r.url(), status: r.status() }); });
  await page.goto(url); await page.waitForSelector('#title-screen:not([hidden])');
  report.network.push(traffic); return { ctx, page, traffic };
}
async function playToEnd(page, decisions, label, engine) {
  let steps = 0;
  while (engine.current().type !== 'end') {
    const n = engine.current(); assert.equal((await state(page)).nodeId, n.id);
    await page.waitForTimeout(335);
    if (n.type === 'line') {
      assert.equal(await page.locator('#dialogue-text').textContent(), n.text);
      if (steps % 3 === 1) { await page.locator('#dialogue-box').focus(); await page.keyboard.press('Space'); }
      else if (steps % 3 === 2) { await page.locator('#dialogue-box').focus(); await page.keyboard.press('Enter'); }
      else await page.locator('#dialogue-box').click();
      engine.advance();
    } else {
      const opts = engine.availableChoices(), chosen = opts.find(x => x.option.value === decisions[n.id]) || opts[0];
      assert.equal(await page.locator('[data-choice-index]').count(), opts.length);
      await page.locator(`[data-choice-index="${chosen.index}"]`).click(); assert(engine.choose(chosen.index));
    }
    await page.waitForFunction(({ p, id }) => JSON.parse(localStorage.getItem(p + 'auto')).state.nodeId === id, { p: prefix, id: engine.current().id });
    if (++steps % 60 === 0) console.log(label + ': ' + steps + ' 节点');
    assert(steps < 600);
  }
  assert.equal(await page.locator('#end-title').textContent(), engine.current().title);
  assert.equal(await page.locator('#end-copy').textContent(), engine.current().text);
  assert.deepEqual(await state(page), engine.snapshot());
  return { label, steps, end: engine.current().id };
}
async function fullFlow(url, label) {
  const f = await pageFor(url, label); const { page } = f;
  try {
    await action(page, 'start');
    const decisions = { h1: 'record', h2: 'finish', c6: 'yelan' };
    const flow = await playToEnd(page, decisions, label, new StoryEngine(story)); report.flows.push(flow);
    await page.screenshot({ path: path.join(__dirname, 'e5-' + label + '-ending.png') });
    await page.reload(); await action(page, 'continue'); assert.equal((await state(page)).nodeId, flow.end);
    assert.deepEqual(f.traffic.unexpected, []); assert.deepEqual(f.traffic.responsesWithErrors, []); assert.deepEqual(f.traffic.failed, []);
    check(label + ' 从开始到常规收束、点击/空格/回车、刷新继续', flow);
  } finally { await f.ctx.close(); }
}
async function endingsAndHidden(url) {
  const f = await pageFor(url, 'five-endings-hidden');
  try {
    for (const h1 of ['record', 'work']) for (const h2 of ['reply', 'finish']) {
      const snapshot = target('c6', { h1, h2 }); await load(f.page, snapshot);
      const expected = h1 === 'record' && h2 === 'reply' ? 5 : 4;
      assert.equal(await f.page.locator('[data-choice-index]').count(), expected);
      if (expected === 4) assert(!(await f.page.locator('#choice-list').textContent()).includes('黄色头像'));
    }
    check('四种隐藏条件组合的正式页面选项数与未解锁隐藏项不泄露', { counts: [5, 4, 4, 4] });
    for (const ending of ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'huangqiuqiu']) {
      const snapshot = target('c6'); await load(f.page, snapshot);
      const engine = new StoryEngine(story, snapshot);
      const flow = await playToEnd(f.page, { c6: ending }, ending, engine); report.flows.push(flow);
      const before = await state(f.page); await action(f.page, 'replay-preview');
      const after = await state(f.page); assert.equal(after.nodeId, 'c6');
      assert.deepEqual(after.choices, before.choices.slice(0, 7));
      assert.equal(await f.page.locator('[data-choice-index]').count(), 5);
    }
    check('五个收束正式页面完成并重选，七次前置选择保留', { endings: 5 });
  } finally { await f.ctx.close(); }
}
async function audioReading(url) {
  const f = await pageFor(url, 'audio-reading', { ...settings, textSpeed: 'slow' }, true); const page = f.page;
  const sample = () => page.evaluate(() => {
    const a = window.__e5audio, analyser = a.analysers[0]; if (!analyser) return { rms: 0, state: null, oscillators: a.oscillators };
    const data = new Float32Array(analyser.fftSize); analyser.getFloatTimeDomainData(data);
    return { rms: Math.sqrt(data.reduce((sum, x) => sum + x*x, 0) / data.length), state: a.contexts[0].state, oscillators: a.oscillators };
  });
  try {
    await action(page, 'start'); await page.waitForTimeout(120);
    const partial = await page.locator('#dialogue-text').textContent(); assert(partial.length < story.nodes[story.start].text.length);
    await page.waitForTimeout(230); await page.locator('#dialogue-box').click();
    assert.equal((await state(page)).nodeId, story.start); assert.equal(await page.locator('#dialogue-text').textContent(), story.nodes[story.start].text);
    // 连点没有跳过下一段；事件来自真实浏览器鼠标。
    await page.locator('#dialogue-box').click({ clickCount: 4, delay: 5 }); assert.equal((await state(page)).nodeId, story.start);
    check('逐字补全与快速连点防误跳', { partialLength: partial.length });
    const defaultAudio = await sample(); assert.equal(defaultAudio.state, null); assert.equal(defaultAudio.rms, 0);
    assert.equal(await page.locator('[data-action="sound"]:visible').first().getAttribute('aria-pressed'), 'false');
    await action(page, 'sound'); await page.waitForTimeout(600);
    const on = await sample(); assert.equal(on.state, 'running'); assert(on.rms > 0.00001);
    await action(page, 'menu'); await page.waitForTimeout(700); const menu = await sample(); assert(menu.rms < on.rms * .02);
    await action(page, 'close-modal'); await page.waitForTimeout(500); const resumed = await sample(); assert(resumed.rms > .00001);
    await action(page, 'settings'); await page.locator('#setting-volume').fill('0.1'); await action(page, 'close-modal');
    await page.waitForTimeout(500); const low = await sample(); assert(low.rms < on.rms * .6);
    await load(page, target('h1'), { ...settings, sound: true, volume: .1 });
    const oscillatorsBefore = (await sample()).oscillators;
    await page.waitForTimeout(335); await page.locator('[data-choice-index="0"]').click();
    await page.waitForTimeout(100); const cue = await sample(); assert(cue.oscillators > oscillatorsBefore);
    await action(page, 'sound'); await page.waitForTimeout(700); const off = await sample(); assert(off.rms < low.rms * .02);
    report.audio = { defaultAudio, on, menu, resumed, low, cue, off, method: '保留产品destination连接，旁路Analyser读取真实输出；非听感评价' };
    check('真实雨声输出、菜单静音/恢复、音量、提示音、关闭', report.audio);
    const h1Before = Object.values(story.nodes).find(n => n.type === 'line' && n.next === 'h1');
    await load(page, target(h1Before.id)); await action(page, 'auto');
    await page.waitForFunction(p => JSON.parse(localStorage.getItem(p+'auto')).state.nodeId === 'h1', prefix);
    assert.equal(await page.locator('#auto-label').textContent(), '自动');
    const choiceState = await state(page); await page.waitForTimeout(1700); assert.deepEqual(await state(page), choiceState);
    await action(page, 'history'); assert((await page.locator('#modal-body').textContent()).includes(story.nodes[h1Before.id].text));
    await action(page, 'close-modal');
    check('自动阅读遇选择停止，历史记录可回看');
  } finally { await f.ctx.close(); }
}
async function visibility(url) {
  // 真实Chrome默认context；noDefaults跳过自动化强制前台。独立临时资料，不接触玩家数据。
  const profile = fs.mkdtempSync('/private/tmp/cjb-e5-visibility-');
  const process = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    ['--remote-debugging-port=0', '--remote-debugging-address=127.0.0.1', '--user-data-dir=' + profile,
      '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore' });
  let headed;
  try {
    const portFile = path.join(profile, 'DevToolsActivePort');
    for (let i = 0; i < 100 && !fs.existsSync(portFile); i++) await new Promise(r => setTimeout(r, 100));
    const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
    headed = await chromium.connectOverCDP('http://127.0.0.1:' + port, { noDefaults: true });
    const ctx = headed.contexts()[0];
    await ctx.addInitScript(p => {
      localStorage.setItem(p+'settings', JSON.stringify({ textSpeed: 'instant', sound: false, volume: .35 }));
      window.__e5visibility = [];
      document.addEventListener('visibilitychange', event => window.__e5visibility.push({ hidden: document.hidden, trusted: event.isTrusted }));
    }, prefix);
    const page = ctx.pages()[0] || await ctx.newPage(); await page.goto(url);
    await page.bringToFront(); await action(page, 'start'); await action(page, 'auto');
    const other = await ctx.newPage(); await other.goto('about:blank');
    await other.bringToFront();
    await page.waitForFunction(() => document.hidden === true, null, { polling: 100, timeout: 10000 });
    const hiddenState = await state(page); await page.waitForTimeout(6500); assert.deepEqual(await state(page), hiddenState);
    await page.bringToFront(); await page.waitForFunction(() => document.hidden === false, null, { polling: 100, timeout: 10000 });
    await page.waitForFunction(({ p, id }) => JSON.parse(localStorage.getItem(p+'auto')).state.nodeId !== id, { p: prefix, id: hiddenState.nodeId });
    const events = await page.evaluate(() => window.__e5visibility);
    assert(events.some(e => e.hidden && e.trusted)); assert(events.some(e => !e.hidden && e.trusted));
    check('真实浏览器切换标签后自动阅读暂停，返回后恢复', { hiddenNode: hiddenState.nodeId, hiddenWaitMs: 6500, events, method: '独立Chrome默认context，noDefaults；原生可信visibilitychange' });
  } finally { if (headed) await headed.close(); process.kill('SIGTERM'); }
}
(async () => {
  try {
    server = http.createServer((req, res) => {
      const name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname), file = path.resolve(root, '.' + (name === '/' ? '/index.html' : name));
      if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
      fs.readFile(file, (error, body) => { if (error) return res.writeHead(404).end();
        res.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' })[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(body); });
    });
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
    const url = 'http://127.0.0.1:' + server.address().port + '/index.html';
    browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
    report.browser = browser.version();
    if (!audioLifecycleOnly && !visibilityOnly) {
      await fullFlow(url, 'http-no-external');
      await fullFlow(pathToFileURL(path.join(root, 'index.html')).href, 'file-direct');
      await endingsAndHidden(url);
    }
    if (!visibilityOnly) await audioReading(url);
    await visibility(url);
    assert.deepEqual(report.pageErrors, []); assert.deepEqual(hashes(), report.fingerprints);
    report.pass = true;
  } catch (error) { report.pass = false; report.error = error.stack; console.error(error); process.exitCode = 1; }
  finally {
    if (browser) await browser.close(); if (server) await new Promise(resolve => server.close(resolve));
    report.finishedAt = new Date().toISOString(); report.finalFingerprints = hashes();
    fs.writeFileSync(path.join(__dirname, outputName), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ pass: report.pass, checks: report.checks.length, flows: report.flows, errors: report.pageErrors, result: 'qa/' + outputName }));
  }
})();
