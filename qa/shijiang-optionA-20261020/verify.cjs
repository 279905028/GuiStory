'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm'), http = require('http');
const assert = require('assert/strict'), crypto = require('crypto');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { StoryEngine } = require('../../engine.js');
const root = path.resolve(__dirname, '../..');
const prefix = 'bijie-rain-demo:v1:';
const settings = { textSpeed: 'instant', sound: false, volume: 0.35 };
const loadStory = file => { const c = { window: {} }; vm.runInNewContext(fs.readFileSync(file, 'utf8'), c); return JSON.parse(JSON.stringify(c.window.RAIN_STORY)); };
const story = loadStory(path.join(root, 'story.js'));
const oldStory = loadStory(path.join(__dirname, 'before/story.js'));
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const code = ['story.js', 'game.js', 'engine.js', 'styles.css', 'index.html'];
const initialHashes = Object.fromEntries(code.map(n => [n, hash(path.join(root, n))]));
function stateAt(source, target, hidden = false) {
  const e = new StoryEngine(source);
  for (let i = 0; i < 1500; i++) {
    const n = e.current();
    if (n.id === target) return e.snapshot();
    if (n.type === 'line') assert.equal(e.advance(), true);
    else if (n.type === 'choice') {
      const value = n.id === 'h1' ? (target === 's2_work_03' ? 'work' : 'record') :
        n.id === 'h2' ? (hidden ? 'reply' : 'finish') :
        n.id === 'c6' ? (hidden ? 'huangqiuqiu' : 'xiaoman') : n.choices[0].value;
      assert.equal(e.choose(n.choices.findIndex(o => o.value === value)), true);
    } else throw new Error('Target not reached: ' + target);
  }
  throw new Error('Route limit');
}
const save = state => JSON.stringify({ format: 1, savedAt: new Date().toISOString(), state, settings });
const report = { date: new Date().toISOString(), status: 'RUNNING', scope: '正式本地文件、自然推进快照、独立浏览器存储；不代表线上部署', cases: [], pageErrors: [], screenshots: [], initialHashes };
const expected = {
  s2_counter_14: 'action-thinking', s2_record_03: 'expression-smile',
  s2_work_03: 'action-explaining', s8_handoff_02: 'action-phone',
  s8_handoff_04: 'action-phone', s9_review_01: 'expression-serious',
  s9_review_04: 'action-explaining'
};
const artRoot = 'assets/character-variants/shijiang-optionA-20261020/';
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const p = path.resolve(root, '.' + (url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname)));
  if (!p.startsWith(root + path.sep)) return res.writeHead(403).end();
  fs.readFile(p, (error, data) => {
    if (error) return res.writeHead(404).end();
    res.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' })[path.extname(p)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(data);
  });
});
let browser, origin;
async function newPage(viewport) {
  const ctx = await browser.newContext({ viewport });
  const page = await ctx.newPage();
  page.on('pageerror', e => report.pageErrors.push(e.message));
  await page.goto(origin);
  return { ctx, page };
}
async function seed(page, raw) {
  // 先回标题并销毁旧引擎，再写夹具，避免旧页面pagehide把上一段进度写回。
  await page.goto(origin);
  await page.evaluate(({ prefix, raw, settings }) => { localStorage.clear(); localStorage.setItem(prefix + 'settings', JSON.stringify(settings)); localStorage.setItem(prefix + 'auto', raw); }, { prefix, raw, settings });
  await page.reload();
}
async function enter(page, raw) {
  await seed(page, raw);
  await page.waitForFunction(() => !document.getElementById('continue-btn').disabled);
  await page.locator('#continue-btn').click();
  await page.waitForFunction(() => document.body.dataset.screen === 'game');
}
async function capture(page, name) {
  const p = path.join(__dirname, name + '.png');
  await page.screenshot({ path: p });
  report.screenshots.push(path.relative(root, p));
}
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  origin = 'http://127.0.0.1:' + server.address().port;
  browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
  const views = [[1440, 900], [1280, 720], [390, 844], [375, 667], [844, 390]];
  for (const [width, height] of views) {
    const { ctx, page } = await newPage({ width, height });
    for (const id of ['s2_counter_14', 's8_handoff_02', 's9_review_04']) {
      await enter(page, save(stateAt(story, id)));
      const source = artRoot + 'char-shijiang-' + expected[id] + '.png';
      await page.waitForFunction(src => { const i = document.getElementById('character'); return i.getAttribute('src') === src && i.complete && i.naturalWidth > 0; }, source);
      assert.equal(await page.locator('#speaker-avatar').getAttribute('src'), 'assets/char-shijiang.png');
      const geometry = await page.evaluate(() => {
        const app = document.getElementById('app').getBoundingClientRect();
        const avatar = document.getElementById('speaker-avatar').getBoundingClientRect();
        return { overflow: document.documentElement.scrollWidth > innerWidth, avatarWidth: avatar.width, appWidth: app.width, imageHeight: document.getElementById('character').naturalHeight };
      });
      assert.equal(geometry.overflow, false, '横向溢出');
      assert.equal(geometry.imageHeight, 1536);
      report.cases.push({ viewport: [width, height], id, source, geometry, pass: true });
      if (id === 's8_handoff_02' || (width === 1280 && id === 's2_counter_14')) await capture(page, id + '-' + width + 'x' + height);
    }
    await enter(page, save(stateAt(story, 's2_counter_07')));
    await page.waitForFunction(() => document.getElementById('app').dataset.cgState === 'ready');
    assert.equal(await page.locator('#cg-image').getAttribute('src'), 'assets/cg/cg-09-repair-handoff.png');
    assert.equal(await page.locator('#cg-image').evaluate(i => getComputedStyle(i).objectFit), 'contain');
    assert.equal(await page.locator('#character').getAttribute('src'), null);
    await capture(page, 'cg09-' + width + 'x' + height);
    report.cases.push({ viewport: [width, height], id: 's2_counter_07', cg: 'cg09', pass: true });
    await ctx.close();
  }
  {
    const { ctx, page } = await newPage({ width: 1280, height: 720 });
    for (const [id, variant] of Object.entries(expected)) {
      await enter(page, save(stateAt(story, id)));
      await page.waitForFunction(v => document.getElementById('character').dataset.variant === v, variant);
    }
    const files = fs.readdirSync(path.join(root, artRoot)).filter(n => /^char-shijiang-.*\.png$/.test(n));
    assert.equal(files.length, 10);
    for (const file of files) {
      const dimensions = await page.evaluate(async src => { const image = new Image(); image.src = src; await image.decode(); return [image.naturalWidth, image.naturalHeight]; }, artRoot + file);
      assert.deepEqual(dimensions, [1024, 1536]);
    }
    report.cases.push({ name: '全部7个普通立绘绑定及10个动作表情文件可加载', pass: true });
    const oldRaw = save(stateAt(oldStory, 's9_review_04'));
    await seed(page, oldRaw);
    assert.equal(await page.evaluate(p => localStorage.getItem(p + 'auto'), prefix), oldRaw, '旧档只读检查不得改写原始数据');
    assert.equal(await page.locator('#continue-btn').isDisabled(), false);
    await page.locator('#continue-btn').click();
    await page.waitForFunction(() => document.body.dataset.screen === 'game');
    assert.equal(await page.locator('#speaker-name').textContent(), '师匠');
    await page.reload();
    assert.equal(await page.locator('#continue-btn').isDisabled(), false);
    report.cases.push({ name: '旧眼镜描述存档严格验证后迁移、读取及刷新续玩', pass: true });
    for (const hidden of [false, true]) {
      await enter(page, save(stateAt(oldStory, 'c6', hidden)));
      assert.equal(await page.locator('.choice-button').count(), hidden ? 5 : 4);
    }
    report.cases.push({ name: '旧档C6检查点与隐藏选项4/5保留', pass: true });
    const corrupt = stateAt(oldStory, 's9_review_04'); corrupt.flags.injected = 'forged';
    const corruptRaw = save(corrupt);
    await seed(page, corruptRaw);
    assert.equal(await page.locator('#continue-btn').isDisabled(), true);
    assert.equal(await page.evaluate(p => localStorage.getItem(p + 'auto'), prefix), corruptRaw);
    report.cases.push({ name: '伪造标记旧档仍拒绝且原数据保留', pass: true });
    await ctx.close();
  }
  {
    const { ctx, page } = await newPage({ width: 1280, height: 720 });
    await page.route('**/char-shijiang-action-thinking.png', route => route.abort());
    await enter(page, save(stateAt(story, 's2_counter_14')));
    await page.waitForFunction(() => { const i = document.getElementById('character'); return i.getAttribute('src') === 'assets/char-shijiang.png' && i.naturalWidth > 0; });
    report.cases.push({ name: '动作加载失败回退A版基础立绘', pass: true });
    await ctx.close();
  }
  {
    const { ctx, page } = await newPage({ width: 1280, height: 720 });
    await page.route('**/cg-09-repair-handoff.png', route => route.abort());
    await enter(page, save(stateAt(story, 's2_counter_07')));
    await page.waitForFunction(() => document.getElementById('app').dataset.cgState === 'fallback' && document.getElementById('character').naturalWidth > 0);
    assert.equal(await page.locator('#character').getAttribute('src'), artRoot + 'char-shijiang-action-explaining.png');
    report.cases.push({ name: 'CG失败回退师匠对应动作', pass: true });
    await ctx.close();
  }
  assert.deepEqual(report.pageErrors, []);
  report.finalHashes = Object.fromEntries(code.map(n => [n, hash(path.join(root, n))]));
  assert.deepEqual(report.finalHashes, initialHashes, '验收期间运行文件被其他任务修改');
  report.status = 'PASS';
})().catch(error => { report.status = 'FAIL'; report.error = error.stack; process.exitCode = 1; }).finally(async () => {
  if (browser) await browser.close();
  server.close();
  fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ status: report.status, cases: report.cases.length, errors: report.pageErrors, error: report.error }));
});
