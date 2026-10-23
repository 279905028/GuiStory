'use strict';

// 当前正式页面的阅读提示专项。定点档只由正式引擎从入口自然回放产生。
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const crypto = require('node:crypto'), assert = require('node:assert/strict');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { StoryEngine } = require('../../engine.js');
const root = path.resolve(__dirname, '../..'), out = __dirname;
const baseline = process.argv.includes('--baseline');
const parseStory = source => JSON.parse(source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1));
const story = parseStory(fs.readFileSync(path.join(root, 'story.js'), 'utf8'));
const prefix = fs.readFileSync(path.join(root, 'game.js'), 'utf8').match(/const PREFIX = ['"]([^'"]+)['"]/)[1];
const witnesses = JSON.parse(fs.readFileSync(path.join(root, 'qa/heroine-background-20261020/node-witnesses.json'), 'utf8'));
const files = ['story.js', 'engine.js', 'game.js', 'index.html', 'styles.css',
  ...(fs.existsSync(path.join(root, 'save-compat.js')) ? ['save-compat.js'] : [])];
const hash = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const hashes = () => Object.fromEntries(files.map(file => [file, hash(fs.readFileSync(path.join(root, file)))]));
const longest = Object.values(story.nodes).filter(node => node.type === 'line').sort((a, b) => b.text.length - a.text.length)[0];
const longestSpoken = Object.values(story.nodes).filter(node => node.type === 'line' && node.speaker !== 'narrator').sort((a, b) => b.text.length - a.text.length)[0];
const targets = [...new Set([longest.id, longestSpoken.id, 'epilogue_piao_m_03'])];
const report = { startedAt: new Date().toISOString(), pass: false, baseline,
  scope: '当前v0.4背景补全版阅读提示避让：正式最长文本、最长人物对白与已知叠字节点，五视口首中尾滚动及正文/提示点击和键盘推进',
  initialHashes: hashes(), targets: targets.map(id => ({ id, chars: story.nodes[id].text.length, speaker: story.nodes[id].speaker })),
  cases: [], screenshots: [], network: [], pageErrors: [],
  limitations: ['隔离Chrome与模拟视口，未测试实体手机、Safari或Firefox。', '仅阅读布局和交互专项；不等同全剧情UI通关。'] };
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const save = state => ({ format: 1, savedAt: new Date().toISOString(), settings, state });
let server, browser;

function reach(id) {
  assert(witnesses[id], '缺少合法路径见证：' + id);
  const engine = new StoryEngine(story), decisions = witnesses[id];
  for (let steps = 0; steps <= Object.keys(story.nodes).length; steps++) {
    const node = engine.current(); if (node.id === id) return engine;
    if (node.type === 'choice') {
      const option = engine.availableChoices().find(entry => entry.option.value === decisions[node.id]) || engine.availableChoices()[0];
      assert(engine.choose(option.index));
    } else assert(engine.advance(), '未能到达 ' + id);
  }
  assert.fail('自然回放超过上限');
}
const state = page => page.evaluate(p => JSON.parse(localStorage.getItem(p + 'auto'))?.state, prefix);
const waitState = (page, id) => page.waitForFunction(({ p, id }) => JSON.parse(localStorage.getItem(p + 'auto'))?.state.nodeId === id, { p: prefix, id });
const action = (page, name) => page.locator(`[data-action="${name}"]:visible`).first().click();
async function load(page, engine) {
  const snapshot = engine.snapshot(); assert.deepEqual(new StoryEngine(story, snapshot).snapshot(), snapshot);
  await page.evaluate(({ p, save }) => localStorage.setItem(p + 'slot3', JSON.stringify(save)), { p: prefix, save: save(snapshot) });
  await action(page, 'load'); await page.locator('.save-slot').nth(3).click();
  await waitState(page, snapshot.nodeId); await page.waitForTimeout(350);
  assert.equal(await page.locator('#dialogue-text').textContent(), engine.current().text);
}
async function measure(page) {
  return page.evaluate(() => {
    const box = document.getElementById('dialogue-box'), text = document.getElementById('dialogue-text'), hint = document.getElementById('advance-hint');
    const b = box.getBoundingClientRect(), h = hint.getBoundingClientRect();
    const inside = r => r.top >= b.top - 1 && r.bottom <= b.bottom + 1 && r.left >= b.left - 1 && r.right <= b.right + 1;
    const overlap = r => Math.min(r.right, h.right, b.right) > Math.max(r.left, h.left, b.left) && Math.min(r.bottom, h.bottom, b.bottom) > Math.max(r.top, h.top, b.top);
    const visible = [], collisions = [], glyphs = [];
    for (let index = 0; index < text.firstChild.length; index++) {
      const range = document.createRange(); range.setStart(text.firstChild, index); range.setEnd(text.firstChild, index + 1);
      const r = range.getBoundingClientRect();
      glyphs.push({ index, char: text.firstChild.data[index], top: r.top, bottom: r.bottom, left: r.left, right: r.right });
      if (inside(r)) visible.push(index);
      if (!hint.hidden && overlap(r)) collisions.push({ index, char: text.firstChild.data[index] });
    }
    return { scrollTop: box.scrollTop, maxScroll: box.scrollHeight - box.clientHeight, clientHeight: box.clientHeight,
      box: { top: b.top, bottom: b.bottom }, hint: { top: h.top, bottom: h.bottom, visible: inside(h), position: getComputedStyle(hint).position },
      text: { top: text.getBoundingClientRect().top, bottom: text.getBoundingClientRect().bottom },
      visible, collisions, glyphCount: glyphs.length, lastGlyph: glyphs.at(-1),
      documentWidth: document.documentElement.scrollWidth, viewportWidth: innerWidth };
  });
}
async function screenshot(page, name) {
  const file = `reading-${baseline ? 'before' : 'after'}-${name}.png`;
  await page.screenshot({ path: path.join(out, file) }); report.screenshots.push(file);
}
async function testViewport(url, viewport) {
  const label = `${viewport.width}x${viewport.height}`;
  const context = await browser.newContext({ viewport, locale: 'zh-CN', reducedMotion: 'reduce' });
  const traffic = { label, blocked: [], failed: [], errors: [] }; report.network.push(traffic);
  await context.route('**/*', route => {
    if (route.request().url().startsWith(new URL(url).origin + '/')) return route.continue();
    traffic.blocked.push(route.request().url()); return route.abort();
  });
  await context.addInitScript(({ p, settings }) => localStorage.setItem(p + 'settings', JSON.stringify(settings)), { p: prefix, settings });
  const page = await context.newPage(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => report.pageErrors.push({ label, message: error.message }));
  page.on('requestfailed', request => traffic.failed.push(request.url()));
  page.on('response', response => { if (response.status() >= 400) traffic.errors.push({ url: response.url(), status: response.status() }); });
  try {
    await page.goto(url); await page.waitForSelector('#title-screen[aria-hidden="false"]');
    for (const id of targets) {
      const engine = reach(id), original = engine.snapshot(); await load(page, engine);
      // 等待读档提示消失，以免截图中的状态消息遮挡人物。
      await page.waitForFunction(() => document.getElementById('toast').hidden);
      const top = await measure(page), samples = [];
      for (const [stage, delta] of [['top', 0], ['middle', Math.ceil(top.maxScroll / 2)], ['bottom', top.maxScroll + 100]]) {
        if (delta > 0) { await page.locator('#dialogue-box').hover(); await page.mouse.wheel(0, delta); await page.waitForTimeout(180); }
        const measured = await measure(page); samples.push({ stage, ...measured });
        assert.deepEqual(await state(page), original, '滚动不能推进正文');
        assert.equal(measured.documentWidth, measured.viewportWidth, '页面横向溢出');
        await screenshot(page, `${label}-${id}-${stage}`);
      }
      const visible = new Set(samples.flatMap(sample => sample.visible));
      assert.equal(visible.size, story.nodes[id].text.length, '首中尾滚动应覆盖全部正文');
      const collisions = samples.flatMap(sample => sample.collisions.map(collision => ({ stage: sample.stage, ...collision })));
      const result = { viewport, nodeId: id, samples, collisions, allGlyphsRead: true, interactions: [] };
      report.cases.push(result);
      if (!baseline) {
        const bottom = samples.at(-1);
        assert(bottom.hint.visible, '滚到底部应完整显示阅读提示');
        assert(bottom.hint.top >= bottom.text.bottom + 8, '提示应在正文之后留出间距');
      }
      for (const method of ['click', 'hint', 'Space', 'Enter']) {
        await load(page, reach(id));
        if (method === 'click') await page.locator('#dialogue-box').click();
        else if (method === 'hint') await page.locator('#advance-hint').click();
        else { await page.locator('#dialogue-box').focus(); await page.keyboard.press(method); }
        const expected = reach(id); assert(expected.advance()); await waitState(page, expected.current().id);
        assert.deepEqual(await state(page), expected.snapshot()); result.interactions.push({ method, next: expected.current().id });
      }
      if (!baseline) assert.deepEqual(collisions, [], '阅读提示与可见正文重叠');
      console.log(`${baseline ? 'BASELINE' : 'PASS'} ${label} ${id}: collisions=${collisions.length}`);
    }
    assert.deepEqual(traffic.blocked, []); assert.deepEqual(traffic.failed, []); assert.deepEqual(traffic.errors, []);
  } finally { await context.close(); }
}

(async () => {
  try {
    server = http.createServer((request, response) => {
      const name = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      const file = path.resolve(root, '.' + (name === '/' ? '/index.html' : name));
      if (!file.startsWith(root + path.sep)) return response.writeHead(403).end();
      fs.readFile(file, (error, data) => {
        if (error) return response.writeHead(404).end();
        response.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png' })[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); response.end(data);
      });
    });
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
    browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
    report.browser = browser.version();
    // Each viewport owns an isolated browser context; finish all before closing the browser.
    const results = await Promise.allSettled([[375, 667], [390, 844], [844, 390], [1280, 720], [1440, 900]]
      .map(([width, height]) => testViewport('http://127.0.0.1:' + server.address().port, { width, height })));
    const failed = results.find(result => result.status === 'rejected');
    if (failed) throw failed.reason;
    assert.deepEqual(report.pageErrors, []); assert.deepEqual(hashes(), report.initialHashes, '测试中正式文件发生变化');
    report.pass = report.cases.every(test => test.collisions.length === 0);
  } catch (error) { report.error = error.stack; console.error(error); process.exitCode = 1; }
  finally {
    if (browser) await browser.close(); if (server) await new Promise(resolve => server.close(resolve));
    report.finishedAt = new Date().toISOString(); report.finalHashes = hashes();
    const file = baseline ? 'reading-before.json' : 'reading-results.json';
    fs.writeFileSync(path.join(out, file), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ pass: report.pass, baseline, cases: report.cases.length, collisions: report.cases.reduce((sum, test) => sum + test.collisions.length, 0), result: file }));
  }
})();
