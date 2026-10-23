'use strict';

// v0.4 正式故事页面验收；所有定点存档均从入口使用正式引擎自然重放生成。
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const assert = require('node:assert/strict'), crypto = require('node:crypto');
const { pathToFileURL } = require('node:url');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { StoryEngine } = require('../../engine.js');
const { story, reach } = require('../piao-story-test.cjs');
const root = path.resolve(__dirname, '../..'), out = __dirname;
const prefix = 'bijie-rain-demo:v0.4:';
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const legacy = Object.fromEntries(['v0.3', 'v1'].flatMap(version => [
  [`bijie-rain-demo:${version}:auto`, '{"旧自动档":"逐字保留"}'],
  [`bijie-rain-demo:${version}:slot1`, '{旧手动档原始内容'],
  [`bijie-rain-demo:${version}:settings`, '{"textSpeed":"slow","sound":true,"volume":0.4}']
]));
const productFiles = ['engine.js', 'game.js', 'story.js', 'index.html', 'styles.css'];
const hashes = () => Object.fromEntries(productFiles.map(file =>
  [file, crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex')]));
const report = {
  startedAt: new Date().toISOString(), pass: false, checks: [], screenshots: [], pageErrors: [],
  network: [], initialHashes: hashes(),
  scope: '正式 v0.4 页面；新开局至飘首次出场自然 UI；合法快照覆盖七选项、飘双结局与非飘婚礼、重选和存档。',
  limitations: [
    '浏览器为隔离 Google Chrome；手机仅为视口模拟，未覆盖实体手机、Safari 或 Firefox。',
    '自然 UI 全程从开局走至飘首次出场；后续使用正式引擎自然重放生成的合法快照与真实 UI 续读。',
    '本轮针对飘接入；不重复原有音频和全部损坏存档专项。'
  ]
};
let browser, server;
const check = (name, details) => { report.checks.push({ name, pass: true, details }); console.log('PASS ' + name); };
const save = state => ({ format: 1, savedAt: new Date().toISOString(), settings, state });
const state = page => page.evaluate(p => JSON.parse(localStorage.getItem(p + 'auto'))?.state, prefix);
const action = (page, name) => page.locator(`[data-action="${name}"]:visible`).first().click();
const waitState = (page, id) => page.waitForFunction(({ p, id }) =>
  JSON.parse(localStorage.getItem(p + 'auto'))?.state.nodeId === id, { p: prefix, id });
async function oldDataIntact(page) {
  assert.deepEqual(await page.evaluate(keys => Object.fromEntries(keys.map(key =>
    [key, localStorage.getItem(key)])), Object.keys(legacy)), legacy);
}
async function fresh(url, label, viewport = { width: 1280, height: 720 }) {
  const ctx = await browser.newContext({ viewport, locale: 'zh-CN', reducedMotion: 'reduce' });
  const traffic = { label, blocked: [], failed: [], responseErrors: [] };
  const allowed = url.startsWith('file:') ? pathToFileURL(root + path.sep).href : new URL(url).origin + '/';
  await ctx.route('**/*', route => {
    if (route.request().url().startsWith(allowed)) return route.continue();
    traffic.blocked.push(route.request().url()); return route.abort();
  });
  await ctx.addInitScript(({ p, values, config }) => {
    if (sessionStorage.getItem('piao-seeded')) return;
    localStorage.setItem(p + 'settings', JSON.stringify(config));
    for (const [key, value] of Object.entries(values)) localStorage.setItem(key, value);
    sessionStorage.setItem('piao-seeded', '1');
  }, { p: prefix, values: legacy, config: settings });
  const page = await ctx.newPage(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => report.pageErrors.push({ label, message: error.message }));
  page.on('requestfailed', request => traffic.failed.push({ url: request.url(), error: request.failure()?.errorText }));
  page.on('response', response => {
    if (response.status() >= 400) traffic.responseErrors.push({ url: response.url(), status: response.status() });
  });
  await page.goto(url);
  await page.waitForSelector('#title-screen[aria-hidden="false"]');
  report.network.push(traffic);
  return { ctx, page, traffic, label };
}
function verifyTraffic(frame) {
  assert.deepEqual(frame.traffic.blocked, [], frame.label + ' 外网请求');
  assert.deepEqual(frame.traffic.failed, [], frame.label + ' 资源请求失败');
  assert.deepEqual(frame.traffic.responseErrors, [], frame.label + ' HTTP 错误');
}
async function load(page, snapshot) {
  new StoryEngine(story, snapshot);
  await page.evaluate(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)),
    { key: prefix + 'slot3', value: save(snapshot) });
  await action(page, 'load');
  assert.match(await page.locator('.save-version-note').textContent(), /v0\.4.*v0\.3.*v1.*重新开始.*保留/);
  await page.locator('.save-slot').nth(3).click();
  await waitState(page, snapshot.nodeId); await page.waitForTimeout(340);
}
async function capture(page, name) {
  const file = 'browser-' + name + '.png';
  await page.screenshot({ path: path.join(out, file) });
  report.screenshots.push(file);
}
async function inside(page, selector) {
  const rect = await page.locator(selector).evaluate(element => {
    const r = element.getBoundingClientRect();
    return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: innerWidth, height: innerHeight };
  });
  assert(rect.left >= -1 && rect.top >= -1 && rect.right <= rect.width + 1 && rect.bottom <= rect.height + 1,
    selector + ' 超出视口：' + JSON.stringify(rect));
}
async function clickStep(page, engine, decisions = {}, step = 0) {
  const node = engine.current();
  assert.equal((await state(page)).nodeId, node.id);
  await page.waitForTimeout(335);
  if (node.type === 'line') {
    assert.equal(await page.locator('#dialogue-text').textContent(), node.text);
    if (step % 3) {
      await page.locator('#dialogue-box').focus();
      await page.keyboard.press(step % 3 === 1 ? 'Space' : 'Enter');
    } else await page.locator('#dialogue-box').click();
    assert(engine.advance());
  } else if (node.type === 'choice') {
    const options = engine.availableChoices();
    const option = options.find(item => item.option.value === decisions[node.id]) || options[0];
    await page.locator(`[data-choice-index="${option.index}"]`).click();
    assert(engine.choose(option.index));
  } else {
    assert(node.next);
    await action(page, 'continue-chapter'); assert(engine.advance());
  }
  await waitState(page, engine.current().id);
}
async function playToEnd(page, engine, decisions = {}) {
  let steps = 0, sawEpilogue = false;
  while (engine.current().type !== 'end' || engine.current().next) {
    const node = engine.current(), scene = story.scenes[node.scene];
    if (scene.chapter === 'epilogue' && node.type === 'line') {
      sawEpilogue = true;
      assert.equal(await page.locator('#scene-day').textContent(), '两年后');
      assert.equal(await page.locator('#scene-day').getAttribute('aria-label'), '两年后');
      assert.equal(await page.locator('#scene-chapter-name').textContent(), story.chapters.epilogue.title);
    }
    await clickStep(page, engine, decisions, steps++);
    assert(steps < Object.keys(story.nodes).length);
  }
  assert(sawEpilogue, '真实 UI 必须经过后日谈对白');
  assert.deepEqual(await state(page), engine.snapshot());
  assert.equal(await page.locator('#end-status').textContent(), '飘的关系后日谈已读完');
  assert.match(await page.locator('#end-footnote').textContent(), /其他人物路线仍处于阶段成长/);
  assert.equal(await page.locator('#end-continue').isVisible(), false);
  assert.equal(await page.locator('#end-replay-route').isVisible(), true);
  assert.doesNotMatch(await page.locator('#end-screen').textContent(), /已读至第三章|本段尚未完结|第epilogue章/);
  return steps;
}

async function naturalArrival(url) {
  const frame = await fresh(url, 'natural-first-piao'), { page } = frame;
  const engine = new StoryEngine(story); let steps = 0;
  try {
    await action(page, 'start');
    while (engine.current().character !== 'piao' && engine.current().speaker !== 'piao') {
      await clickStep(page, engine, {}, steps++); assert(steps < Object.keys(story.nodes).length);
      if (steps % 60 === 0) console.log(`自然开局：${steps} 步，当前 ${engine.current().id}`);
    }
    await page.waitForFunction(() => {
      const img = document.getElementById('character');
      return img.naturalWidth > 0 && !img.hidden && img.getAttribute('src')?.includes('piao');
    });
    assert.deepEqual(await state(page), engine.snapshot());
    await capture(page, 'natural-first-piao');
    await oldDataIntact(page); verifyTraffic(frame);
    check('新开局通过真实点击、空格与回车自然到达飘首次出场并加载立绘', { steps, nodeId: engine.current().id });
  } finally { await frame.ctx.close(); }
}

async function viewportChecks(url) {
  const route = reach(story.routeChoice), snapshot = route.snapshot();
  assert.equal(route.availableChoices().length, 7);
  for (const [width, height] of [[1280, 720], [390, 844], [375, 667]]) {
    const frame = await fresh(url, `viewport-${width}x${height}`, { width, height }), { page } = frame;
    try {
      await inside(page, '.title-footer > div');
      await capture(page, `${width}x${height}-title`);
      await load(page, snapshot);
      assert.equal(await page.locator('[data-choice-index]').count(), 7);
      await inside(page, '#choice-panel');
      const scrolling = await page.locator('#choice-panel').evaluate(element => ({
        clientHeight: element.clientHeight, scrollHeight: element.scrollHeight, overflowY: getComputedStyle(element).overflowY
      }));
      assert.equal(scrolling.overflowY, 'auto');
      await capture(page, `${width}x${height}-seven-choices`);
      const last = page.locator('[data-choice-index]').last();
      await last.scrollIntoViewIfNeeded(); await inside(page, '[data-choice-index="' + await last.getAttribute('data-choice-index') + '"]');
      await capture(page, `${width}x${height}-seven-choices-bottom`);
      const expected = new StoryEngine(story, snapshot);
      assert(expected.choose(Number(await last.getAttribute('data-choice-index'))));
      await last.click(); await waitState(page, expected.current().id);

      await load(page, reach('end_ch3_piao', { [story.routeChoice]: 'piao' }).snapshot());
      assert.equal(await page.locator('#end-continue').textContent(), '继续后日谈 ↗');
      assert.equal(await page.locator('#end-replay-route').isVisible(), true);
      await page.locator('#end-continue').scrollIntoViewIfNeeded(); await inside(page, '#end-continue');
      await capture(page, `${width}x${height}-piao-stage-end`);
      await action(page, 'replay-route'); await waitState(page, story.routeChoice);
      assert.deepEqual(await state(page), snapshot);

      await load(page, reach('epilogue_piao_m_01', { [story.routeChoice]: 'solo' }).snapshot());
      assert.equal(await page.locator('#scene-day').textContent(), '两年后');
      assert.equal(await page.locator('#scene-chapter-name').textContent(), story.chapters.epilogue.title);
      await inside(page, '#scene-chapter-name'); await inside(page, '#scene-day');
      await inside(page, '.scene-position'); await inside(page, '.menu-button');
      await capture(page, `${width}x${height}-wedding-two-years-later`);
      await load(page, reach('end_piao_maolang', { [story.routeChoice]: 'solo' }).snapshot());
      assert.equal(await page.locator('#end-status').textContent(), '飘的关系后日谈已读完');
      await page.locator('#end-replay-route').scrollIntoViewIfNeeded(); await inside(page, '#end-replay-route');
      await inside(page, '#end-footnote'); await capture(page, `${width}x${height}-wedding-end`);
      await action(page, 'replay-preview'); await waitState(page, story.previewChoice);
      assert.deepEqual(await state(page), reach(story.previewChoice).snapshot());
      await oldDataIntact(page); verifyTraffic(frame);
      check(`${width}×${height}：标题、七选项滚动点击、第三章续读与重选、婚礼页与第一章回溯`, scrolling);
    } finally { await frame.ctx.close(); }
  }
}

async function branchChecks(url) {
  const frame = await fresh(url, 'piao-branches-and-replay'), { page } = frame;
  try {
    const commit = story.nodes.ch3_piao_commit;
    assert(commit, '飘确认关系选择必须存在');
    const outcomes = [];
    for (const option of commit.choices) {
      const decisions = { [story.routeChoice]: 'piao', [commit.id]: option.value };
      const engine = reach(commit.id, decisions); await load(page, engine.snapshot());
      const steps = await playToEnd(page, engine, decisions);
      outcomes.push(engine.current().id);
      await capture(page, 'piao-' + option.value + '-end');
      await action(page, 'save'); await page.locator('.save-slot').nth(1).click();
      if (await page.locator('#modal-title').textContent() === '覆盖手动存档 1') await page.getByRole('button', { name: '确认', exact: true }).click();
      await action(page, 'close-modal');
      await page.reload(); await action(page, 'continue'); await waitState(page, engine.current().id);
      assert.deepEqual(await state(page), engine.snapshot());
      await action(page, 'load'); await page.locator('.save-slot').nth(1).click(); await waitState(page, engine.current().id);
      assert.deepEqual(await state(page), engine.snapshot());
      check('飘确认关系选项 ' + option.value + '：真实 UI 至两年后结局、自动续读与手动读档', { steps, end: engine.current().id });
    }
    assert.deepEqual(new Set(outcomes), new Set(['end_piao_wenwen', 'end_piao_maolang']));
    const solo = reach('end_ch3_solo', { [story.routeChoice]: 'solo' });
    await load(page, solo.snapshot());
    assert.equal(await page.locator('#end-continue').textContent(), '继续后日谈 ↗');
    const steps = await playToEnd(page, solo);
    assert.equal(solo.current().id, 'end_piao_maolang');
    await action(page, 'replay-route'); await waitState(page, story.routeChoice);
    const baseline = reach(story.routeChoice).snapshot(); assert.deepEqual(await state(page), baseline);
    assert.equal((await state(page)).history.some(entry => story.scenes[entry.scene]?.chapter === 'epilogue'), false);
    const replay = new StoryEngine(story, baseline);
    const wenwenDecisions = { [story.routeChoice]: 'piao', [commit.id]: 'together' };
    await playToEnd(page, replay, wenwenDecisions);
    assert.equal(replay.current().id, 'end_piao_wenwen');
    assert.equal(replay.state.history.some(entry => entry.nodeId === 'end_piao_maolang'), false);
    await capture(page, 'replayed-wenwen-end');
    await oldDataIntact(page); verifyTraffic(frame);
    check('非飘路线婚礼后回溯，清除后日谈记录并重新选择文文结局，旧 v0.3/v1 原字节保留', { soloSteps: steps });
  } finally { await frame.ctx.close(); }
}
async function piaoArtChecks(url) {
  const frame = await fresh(url, 'piao-nine-expression-assets'), { page } = frame;
  try {
    const seen = [], reserves = [];
    for (const [expression, image] of Object.entries(story.characters.piao.expressions)) {
      const candidates = Object.values(story.nodes).filter(node => node.character === 'piao' && node.expression === expression);
      if (!candidates.length) {
        assert(fs.statSync(path.join(root, image)).size > 0);
        const dimensions = await page.evaluate(async source => {
          const img = new Image(); img.src = source; await img.decode();
          return { width: img.naturalWidth, height: img.naturalHeight };
        }, image);
        assert(dimensions.width > 0 && dimensions.height > 0);
        reserves.push({ expression, image, ...dimensions, status: '已注册且可加载；当前无正式剧情绑定' });
        continue;
      }
      let engine;
      for (const candidate of candidates) {
        for (const decisions of [
          { [story.routeChoice]: 'piao', ch3_piao_commit: 'together' },
          { [story.routeChoice]: 'piao', ch3_piao_commit: 'friends' },
          { [story.routeChoice]: 'solo' }
        ]) {
          try { engine = reach(candidate.id, decisions); break; } catch (_) { /* 分支不符时寻找其他正式出场 */ }
        }
        if (engine) break;
      }
      assert(engine, '差分未在正式剧情中使用：' + expression);
      await load(page, engine.snapshot());
      const selector = engine.current().type === 'end' ? '#end-character' : '#character';
      await page.waitForFunction(({ selector, source }) => {
        const img = document.querySelector(selector); return img.getAttribute('src') === source && img.naturalWidth > 0 && !img.hidden;
      }, { selector, source: image });
      assert.equal(await page.locator(selector).getAttribute('data-variant'), expression);
      seen.push({ expression, image, nodeId: engine.current().id });
    }
    await capture(page, 'piao-expression-loaded');
    await oldDataIntact(page); verifyTraffic(frame);
    assert.equal(seen.length, 8); assert.equal(reserves.length, 1);
    assert.equal(reserves[0].expression, 'expression-displeased');
    check('飘 8 张已绑定差分通过正式剧情显示，1 张备用差分登记完整且可加载', { stageVerified: seen, reserves });
  } finally { await frame.ctx.close(); }
}
async function fileSmoke() {
  const frame = await fresh(pathToFileURL(path.join(root, 'index.html')).href, 'file-epilogue');
  try {
    const engine = reach('end_ch3_solo', { [story.routeChoice]: 'solo' });
    await load(frame.page, engine.snapshot());
    await action(frame.page, 'continue-chapter'); engine.advance(); await waitState(frame.page, engine.current().id);
    assert.equal(await frame.page.locator('#scene-day').textContent(), '两年后');
    await frame.page.reload(); await action(frame.page, 'continue'); await waitState(frame.page, engine.current().id);
    await capture(frame.page, 'file-epilogue');
    await oldDataIntact(frame.page); verifyTraffic(frame);
    check('file:// 第三章继续后日谈、两年后日期、刷新续读和旧版存档保留');
  } finally { await frame.ctx.close(); }
}
(async () => {
  try {
    assert.equal(story.release, '0.4', '请等待正式内容构建完成再执行');
    const resumeCore = process.argv.includes('--resume-after-core');
    if (resumeCore) {
      const previousPath = path.join(out, 'browser-precheck-art-scope.json');
      const previous = JSON.parse(fs.readFileSync(previousPath, 'utf8'));
      assert.deepEqual(previous.initialHashes, report.initialHashes, '续验前运行文件已改变，必须完整重跑');
      assert.deepEqual(previous.finalHashes, report.initialHashes, '初检结束后运行文件已改变，必须完整重跑');
      assert.equal(previous.checks.length, 7); assert(previous.checks.every(item => item.pass));
      assert.deepEqual(previous.pageErrors, []);
      report.checks = previous.checks;
      report.screenshots = previous.screenshots;
      report.network = previous.network;
      report.resumedCoreFrom = { file: path.basename(previousPath), startedAt: previous.startedAt,
        reason: '保留相同正式文件哈希下已通过的 7 组核心检查；仅修正备用差分必须实际出场的过严测试假设，续跑差分和 file 协议检查。' };
    }
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
    browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
    report.browser = browser.version();
    const url = 'http://127.0.0.1:' + server.address().port + '/index.html';
    if (!resumeCore) {
      await naturalArrival(url);
      await viewportChecks(url);
      await branchChecks(url);
    }
    await piaoArtChecks(url);
    await fileSmoke();
    assert.deepEqual(report.pageErrors, []);
    assert.deepEqual(hashes(), report.initialHashes, '验收过程中正式文件发生变化');
    report.pass = true;
  } catch (error) { report.error = error.stack; console.error(error); process.exitCode = 1; }
  finally {
    if (browser) await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
    report.finishedAt = new Date().toISOString(); report.finalHashes = hashes();
    fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ pass: report.pass, checks: report.checks.length, errors: report.pageErrors, report: path.join(out, 'browser-results.json') }));
  }
})();
