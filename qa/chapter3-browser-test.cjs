'use strict';

// 三章版真实页面集成验收。隔离 Chrome、只允许回环 HTTP 或本地 file。
// 定点检查的存档只由正式引擎从入口自然重放；完整流程仅使用真实 UI。
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const crypto = require('node:crypto'), assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { StoryEngine } = require('../engine.js');
const { story, reach } = require('./chapter3-story-test.cjs');
const root = path.resolve(__dirname, '..'), out = path.join(__dirname, 'chapter3-20261020');
const prefix = 'bijie-rain-demo:v0.3:', oldPrefix = 'bijie-rain-demo:v1:';
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const oldValues = { auto: '{"old":"自动档逐字保留"}', slot1: '{旧手动档原始内容', settings: '{"textSpeed":"slow","sound":true,"volume":0.4}' };
const files = ['engine.js', 'game.js', 'story.js', 'index.html', 'styles.css'];
const hashes = () => Object.fromEntries(files.map(file => [file, crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex')]));
const report = { startedAt: new Date().toISOString(), pass: false, checks: [], screenshots: [], flows: [],
  pageErrors: [], network: [], initialHashes: hashes(), scope: '真实三章版页面；定点合法存档与一条从新开局至第三章末的自然 UI 流程；HTTP及file章节续读',
  limitations: ['浏览器为隔离 Google Chrome，手机仅为视口模拟；未测试实体手机、Safari或Firefox。',
    '自然全程只走一条常规路线；其他路线以正式引擎合法快照检查界面与重选。',
    '本轮不重复旧版音频、标签生命周期和所有坏档矩阵专项。'] };
fs.mkdirSync(out, { recursive: true });
function check(name, details) { report.checks.push({ name, pass: true, details }); console.log('PASS ' + name); }
const save = state => ({ format: 1, savedAt: new Date().toISOString(), settings, state });
const state = page => page.evaluate(p => JSON.parse(localStorage.getItem(p + 'auto'))?.state, prefix);
const action = (page, name) => page.locator(`[data-action="${name}"]:visible`).first().click();
let browser, server;

async function fresh(url, label, viewport = { width: 1280, height: 720 }) {
  const ctx = await browser.newContext({ viewport, locale: 'zh-CN', reducedMotion: 'reduce' });
  const traffic = { label, allowed: [], blocked: [], failed: [], responseErrors: [] };
  const fileMode = url.startsWith('file:'), origin = fileMode ? null : new URL(url).origin;
  await ctx.route('**/*', route => {
    const value = route.request().url();
    if (fileMode ? value.startsWith(pathToFileURL(root + path.sep).href) : value.startsWith(origin + '/')) return route.continue();
    traffic.blocked.push(value); return route.abort();
  });
  await ctx.addInitScript(({ p, old, values, config }) => {
    if (sessionStorage.getItem('chapter3-seeded')) return;
    localStorage.setItem(p + 'settings', JSON.stringify(config));
    for (const [key, value] of Object.entries(values)) localStorage.setItem(old + key, value);
    sessionStorage.setItem('chapter3-seeded', '1');
  }, { p: prefix, old: oldPrefix, values: oldValues, config: settings });
  const page = await ctx.newPage();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => report.pageErrors.push({ label, message: error.message }));
  page.on('request', request => traffic.allowed.push(request.url()));
  page.on('requestfailed', request => traffic.failed.push({ url: request.url(), error: request.failure()?.errorText }));
  page.on('response', response => { if (response.status() >= 400) traffic.responseErrors.push({ url: response.url(), status: response.status() }); });
  await page.goto(url);
  await page.waitForSelector('#title-screen[aria-hidden="false"]');
  report.network.push(traffic);
  return { ctx, page, traffic, label };
}

async function verifyLegacy(page) {
  assert.deepEqual(await page.evaluate(p => Object.fromEntries(Object.keys(p.values).map(key => [key, localStorage.getItem(p.prefix + key)])),
    { prefix: oldPrefix, values: oldValues }), oldValues);
}
async function waitState(page, id) {
  await page.waitForFunction(({ p, id }) => JSON.parse(localStorage.getItem(p + 'auto'))?.state.nodeId === id, { p: prefix, id });
}
async function load(page, snapshot) {
  await page.evaluate(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)), { key: prefix + 'slot3', value: save(snapshot) });
  await action(page, 'load');
  assert.match(await page.locator('.save-version-note').textContent(), /旧序章.*保留/);
  await page.locator('.save-slot').nth(3).click();
  await waitState(page, snapshot.nodeId);
  await page.waitForTimeout(340);
}
async function capture(page, name) {
  const file = 'browser-' + name + '.png';
  await page.screenshot({ path: path.join(out, file) });
  report.screenshots.push(file);
}
function verifyTraffic(frame, noHidden = false) {
  assert.deepEqual(frame.traffic.blocked, [], frame.label + '外网请求');
  assert.deepEqual(frame.traffic.responseErrors, [], frame.label + '资源HTTP错误');
  assert.deepEqual(frame.traffic.failed, [], frame.label + '请求失败');
  if (noHidden) assert.equal(frame.traffic.allowed.some(url => /huangqiuqiu|cg08/i.test(url)), false, frame.label + '不应预载隐藏图片');
}
async function assertInside(page, selector) {
  const result = await page.locator(selector).evaluate(element => {
    const rect = element.getBoundingClientRect();
    return { x: rect.x, y: rect.y, right: rect.right, bottom: rect.bottom, width: innerWidth, height: innerHeight };
  });
  assert(result.x >= -1 && result.y >= -1 && result.right <= result.width + 1 && result.bottom <= result.height + 1,
    selector + '超出视口：' + JSON.stringify(result));
  return result;
}

async function viewportChecks(url) {
  const routeSnapshot = reach(story.routeChoice).snapshot();
  assert.equal(new StoryEngine(story, routeSnapshot).availableChoices().length, 6);
  const firstEnd = Object.values(story.nodes).find(node => node.type === 'end' && story.scenes[node.scene].chapter === 1 && node.character === 'xiaoman');
  assert(firstEnd);
  for (const [width, height] of [[1440, 900], [1280, 720], [390, 844], [375, 667], [844, 390]]) {
    const frame = await fresh(url, `viewport-${width}x${height}`, { width, height }), { page } = frame;
    try {
      await load(page, reach(firstEnd.id).snapshot());
      assert.equal(await page.locator('#end-continue').isVisible(), true);
      assert.equal(await page.locator('#end-replay-route').isVisible(), false);
      await capture(page, `${width}x${height}-chapter1-end`);
      await action(page, 'continue-chapter');
      await waitState(page, 'ch2_open_01');
      assert.match(await page.locator('#scene-chapter-name').textContent(), /第[二2]章/);
      await load(page, reach('end_ch2').snapshot());
      await action(page, 'save');
      await page.locator('.save-slot').nth(1).click();
      await action(page, 'close-modal');
      await action(page, 'continue-chapter');
      await waitState(page, 'ch3_open_01');
      await action(page, 'load'); await page.locator('.save-slot').nth(1).click();
      await waitState(page, 'end_ch2');
      await action(page, 'continue-chapter'); await waitState(page, 'ch3_open_01');
      assert.match(await page.locator('#scene-chapter-name').textContent(), /第[三3]章/);

      await load(page, routeSnapshot);
      assert.equal(await page.locator('[data-choice-index]').count(), 6);
      await assertInside(page, '#choice-panel');
      const dimensions = await page.locator('#choice-panel').evaluate(element => ({
        clientHeight: element.clientHeight, scrollHeight: element.scrollHeight,
        overflowY: getComputedStyle(element).overflowY
      }));
      assert.equal(dimensions.overflowY, 'auto');
      await capture(page, `${width}x${height}-six-choices`);
      const last = page.locator('[data-choice-index]').last();
      const lastIndex = Number(await last.getAttribute('data-choice-index'));
      const expected = new StoryEngine(story, routeSnapshot); assert.equal(expected.choose(lastIndex), true);
      await last.scrollIntoViewIfNeeded();
      await assertInside(page, '[data-choice-index="' + lastIndex + '"]');
      await capture(page, `${width}x${height}-six-choices-bottom`);
      await last.click(); await waitState(page, expected.current().id);
      const hiddenRoute = story.nodes[story.routeChoice].choices[lastIndex].value;
      await load(page, reach('end_ch3_' + hiddenRoute, { [story.routeChoice]: hiddenRoute }).snapshot());
      assert.equal(await page.locator('#end-continue').isVisible(), false);
      assert.equal(await page.locator('#end-replay-route').isVisible(), true);
      await capture(page, `${width}x${height}-chapter3-end`);
      const end = await state(page);
      await action(page, 'replay-route'); await waitState(page, story.routeChoice);
      assert.deepEqual(await state(page), routeSnapshot);
      assert.equal(end.choices.slice(0, routeSnapshot.choices.length).length, routeSnapshot.choices.length);
      await load(page, reach('end_ch3_solo', { [story.routeChoice]: 'solo' }).snapshot());
      await action(page, 'replay-preview'); await waitState(page, story.previewChoice);
      assert.deepEqual(await state(page), reach(story.previewChoice).snapshot());
      await verifyLegacy(page);
      verifyTraffic(frame);
      check(`五视口 ${width}×${height}：续章、章末手动档、六选项滚动点击、末章重选`, dimensions);
    } finally { await frame.ctx.close(); }
  }
}

function reachableExpression(character) {
  const candidates = Object.values(story.nodes).filter(node => node.type === 'line' && node.character === character &&
    node.expression && story.characters[character].expressions?.[node.expression] && !node.cg);
  for (const candidate of candidates) {
    for (const decisions of [{}, { c6: 'huangqiuqiu' }, ...Object.keys(story.characters).map(key => ({ [story.routeChoice]: key }))]) {
      try { return { node: candidate, snapshot: reach(candidate.id, decisions).snapshot() }; } catch (_) { /* 另一个合法分支 */ }
    }
  }
  throw new Error('没有找到可达的已有差分展示节点：' + character);
}
async function artChecks(url) {
  const frame = await fresh(url, 'eight-expression-images', { width: 1440, height: 900 });
  try {
    const seen = [];
    for (const key of ['wenwen', 'xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'maolang', 'shijiang', 'huangqiuqiu']) {
      const { node, snapshot } = reachableExpression(key), expected = story.characters[key].expressions[node.expression];
      await load(frame.page, snapshot);
      await frame.page.waitForFunction(source => {
        const img = document.getElementById('character');
        return img.getAttribute('src') === source && img.naturalWidth > 0 && !img.hidden;
      }, expected);
      assert.equal(await frame.page.locator('#character').getAttribute('data-variant'), node.expression);
      assert.equal(await frame.page.locator('#speaker-avatar').getAttribute('src'),
        story.characters[node.speaker === 'narrator' ? 'wenwen' : node.speaker]?.image);
      await capture(frame.page, `expression-${key}`);
      seen.push({ character: key, node: node.id, expression: node.expression, image: expected });
    }
    await verifyLegacy(frame.page); verifyTraffic(frame);
    check('8名角色代表性新差分均真实加载，头像继续使用同套基础图', seen);
  } finally { await frame.ctx.close(); }
}

async function fullNaturalFlow(url) {
  const frame = await fresh(url, 'http-natural-full', { width: 1280, height: 720 }), { page } = frame;
  const engine = new StoryEngine(story);
  const decisions = { h1: 'work', h2: 'finish', c6: 'xiaoman', [story.routeChoice]: 'solo' };
  let steps = 0, chapterEnds = 0;
  try {
    await action(page, 'start');
    while (!(engine.current().type === 'end' && !engine.current().next)) {
      const node = engine.current();
      assert.equal((await state(page)).nodeId, node.id);
      await page.waitForTimeout(335);
      if (node.type === 'line') {
        assert.equal(await page.locator('#dialogue-text').textContent(), node.text);
        if (steps % 3 === 1) { await page.locator('#dialogue-box').focus(); await page.keyboard.press('Space'); }
        else if (steps % 3 === 2) { await page.locator('#dialogue-box').focus(); await page.keyboard.press('Enter'); }
        else await page.locator('#dialogue-box').click();
        assert.equal(engine.advance(), true);
      } else if (node.type === 'choice') {
        const options = engine.availableChoices(), selected = options.find(option => option.option.value === decisions[node.id]) || options[0];
        assert.equal(await page.locator('[data-choice-index]').count(), options.length);
        await page.locator(`[data-choice-index="${selected.index}"]`).click();
        assert.equal(engine.choose(selected.index), true);
      } else {
        chapterEnds++;
        assert.equal(await page.locator('#end-title').textContent(), node.title);
        await action(page, 'continue-chapter');
        assert.equal(engine.advance(), true);
      }
      await waitState(page, engine.current().id);
      if (++steps % 60 === 0) console.log(`全UI自然流程：${steps} 节点，当前 ${engine.current().id}`);
      assert(steps < Object.keys(story.nodes).length + 1);
    }
    assert.equal(chapterEnds, 2);
    assert.deepEqual(await state(page), engine.snapshot());
    assert.equal(await page.locator('#end-continue').isVisible(), false);
    await capture(page, 'natural-full-ending');
    await page.reload(); await action(page, 'continue');
    await waitState(page, engine.current().id);
    assert.equal(await page.locator('#end-title').textContent(), engine.current().title);
    await verifyLegacy(page); verifyTraffic(frame, true);
    report.flows.push({ label: 'HTTP新开局至第三章末', steps, chapterEnds, ending: engine.current().id, choices: engine.state.choices });
    check('HTTP全程真实点击/空格/回车，跨两次章末、刷新续读且普通路径不请求黄球图片', { steps, chapterEnds, ending: engine.current().id });
  } finally { await frame.ctx.close(); }
}

async function fileSmoke() {
  const frame = await fresh(pathToFileURL(path.join(root, 'index.html')).href, 'file-chapter-continuation');
  try {
    await load(frame.page, reach('end_ch2', { h1: 'work', h2: 'finish' }).snapshot());
    await action(frame.page, 'continue-chapter'); await waitState(frame.page, 'ch3_open_01');
    await frame.page.reload(); await action(frame.page, 'continue'); await waitState(frame.page, 'ch3_open_01');
    await capture(frame.page, 'file-chapter3-open');
    await verifyLegacy(frame.page); verifyTraffic(frame, true);
    check('file:// 第二章章末继续第三章、刷新恢复及旧v1存档保留');
  } finally { await frame.ctx.close(); }
}

(async () => {
  try {
    assert.equal(story.release, '0.3', '请等待正式story.js合入三章版再验收');
    server = http.createServer((request, response) => {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
      if (!file.startsWith(root + path.sep)) return response.writeHead(403).end();
      fs.readFile(file, (error, body) => {
        if (error) return response.writeHead(404).end();
        response.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' })[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
        response.end(body);
      });
    });
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
    const url = 'http://127.0.0.1:' + server.address().port + '/index.html';
    browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
    report.browser = browser.version();
    await viewportChecks(url);
    await artChecks(url);
    await fileSmoke();
    await fullNaturalFlow(url);
    assert.deepEqual(report.pageErrors, []);
    assert.deepEqual(hashes(), report.initialHashes, '测试过程中产品文件发生变化');
    report.pass = true;
  } catch (error) { report.error = error.stack; console.error(error); process.exitCode = 1; }
  finally {
    if (browser) await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
    report.finishedAt = new Date().toISOString(); report.finalHashes = hashes();
    fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ pass: report.pass, checks: report.checks.length, flows: report.flows, errors: report.pageErrors, output: 'qa/chapter3-20261020/browser-results.json' }));
  }
})();
