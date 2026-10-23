'use strict';
// E3 最终修复回归：正式快照、全新浏览器 context，不访问玩家资料目录。
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const http = require('node:http'), crypto = require('node:crypto'), assert = require('node:assert/strict');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { StoryEngine } = require('../engine.js');
const root = path.resolve(__dirname, '..'), prefix = 'bijie-rain-demo:v1:';
const dayImage = 'assets/background-variants/m2-daynight-20261020/bg-street-day.png';
const files = ['game.js', 'story.js', 'engine.js', 'index.html', 'styles.css', dayImage, 'assets/bg-street.png'];
const frozen = Object.fromEntries(files.map(p => [p, fs.readFileSync(path.join(root, p))]));
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
const versions = Object.fromEntries(files.map(p => [p, hash(frozen[p])]));
const sandbox = { window: {} }; vm.runInNewContext(frozen['story.js'].toString(), sandbox);
const story = JSON.parse(JSON.stringify(sandbox.window.RAIN_STORY));
const snapshots = new Map();
function visit(e) {
  const n = e.current();
  if (!snapshots.has(n.id)) snapshots.set(n.id, e.snapshot());
  if (n.type === 'end') return;
  if (n.type === 'line') { e.advance(); visit(e); return; }
  for (const { index } of e.availableChoices()) { const branch = new StoryEngine(story, e.snapshot()); branch.choose(index); visit(branch); }
}
visit(new StoryEngine(story));
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const report = { date: new Date().toISOString(), scope: '正式剧情/PNG + 单列标明的元数据和滚动压力夹具；隔离存储', versions, checks: [], pageErrors: [], missingRequests: [] };
const record = (name, details) => { report.checks.push({ name, pass: true, details }); console.log('PASS ' + name); };
const packed = (id, options = settings) => ({ format: 1, savedAt: new Date().toISOString(), state: snapshots.get(id), settings: options });
async function action(page, name) { await page.locator(`[data-action="${name}"]:visible`).first().click(); }
async function currentId(page) { return page.evaluate(prefix => JSON.parse(localStorage.getItem(prefix + 'auto')).state.nodeId, prefix); }
async function load(page, id, options = settings, slot = 'slot3') {
  assert(snapshots.has(id), id);
  await page.evaluate(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)), { key: prefix + slot, value: packed(id, options) });
  await action(page, 'load');
  await page.locator('.save-slot').nth(Number(slot.slice(-1))).click();
  await page.waitForFunction(({ prefix, id }) => document.querySelector('#modal').hidden && JSON.parse(localStorage.getItem(prefix + 'auto')).state.nodeId === id, { prefix, id });
}
async function background(page, source, time) {
  await page.waitForFunction(source => { const e = document.querySelector('#scene-bg'); return e.getAttribute('src') === source && e.complete && e.naturalWidth > 0; }, source);
  if (time) assert.equal(await page.locator('#scene-time').textContent(), time);
}
async function next(page) { await page.waitForTimeout(340); await page.locator('#dialogue-box').click(); }
async function scrollDown(page, selector) {
  const value = await page.locator(selector).evaluate(e => { e.scrollTop = e.scrollHeight; return e.scrollTop; });
  assert(value > 0, selector + '必须实际可滚动'); return value;
}
async function top(page, selector) { assert.equal(await page.locator(selector).evaluate(e => e.scrollTop), 0, selector + '未归零'); }
let server, browser;
async function main() {
  server = http.createServer((request, response) => {
    const relative = decodeURIComponent(new URL(request.url, 'http://localhost').pathname).replace(/^\//, '') || 'index.html';
    const file = path.resolve(root, relative);
    if (!file.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    const send = (error, data) => { if (error) { response.writeHead(404).end(); return; } response.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png' })[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); response.end(data); };
    if (frozen[relative]) send(null, frozen[relative]); else fs.readFile(file, send);
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const origin = 'http://127.0.0.1:' + server.address().port;
  browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const ctx = await browser.newContext({ viewport: { width: 375, height: 667 }, reducedMotion: 'reduce' });
  await ctx.addInitScript(({ prefix, settings }) => { if (!sessionStorage.getItem('e3-seeded')) { localStorage.setItem(prefix + 'settings', JSON.stringify(settings)); sessionStorage.setItem('e3-seeded', '1'); } }, { prefix, settings });
  const page = await ctx.newPage();
  page.on('pageerror', e => report.pageErrors.push(e.message));
  page.on('response', response => { if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) report.missingRequests.push({ url: response.url(), status: response.status() }); });
  await page.goto(origin);
  await background(page, story.backgrounds.street);
  await action(page, 'start');
  await background(page, dayImage, '下午');
  record('标题固定夜景，新游戏切下午街景', { title: story.backgrounds.street, game: dayImage });

  const daytime = [...snapshots.keys()].filter(id => { const n = story.nodes[id], s = story.scenes[n.scene]; return (n.bg ?? s.bg) === 'street' && (n.time ?? s.time) === '下午'; });
  assert.equal(daytime.length, 40);
  for (const id of daytime) { await load(page, id); await background(page, dayImage, '下午'); }
  record('全部40个正式下午街景节点逐个合法读档并真实加载PNG', { nodes: daytime });

  const overrides = Object.values(story.nodes).filter(n => n.type !== 'gate' && (Object.hasOwn(n, 'bg') || Object.hasOwn(n, 'time')));
  for (const n of overrides) { const s = story.scenes[n.scene]; await load(page, n.id); await background(page, story.backgrounds[n.bg ?? s.bg], n.time ?? s.time); }
  const dark = [...snapshots.keys()].filter(id => { const n = story.nodes[id], s = story.scenes[n.scene]; return (n.bg ?? s.bg) === 'street' && (n.time ?? s.time) !== '下午'; });
  const darkRepresentative = [...new Set(dark.map(id => story.nodes[id].scene))].map(scene => dark.find(id => story.nodes[id].scene === scene));
  for (const id of darkRepresentative) { await load(page, id); await background(page, story.backgrounds.street, story.nodes[id].time ?? story.scenes[story.nodes[id].scene].time); }
  record('全部显式背景覆盖与夜间/凌晨街景保持原图', { overrides: overrides.map(n => n.id), darkRepresentative });

  const s1Last = Object.values(story.nodes).find(n => n.scene === 's1' && n.type === 'line' && story.nodes[n.next].scene === 's2');
  await load(page, s1Last.id); await background(page, dayImage); await next(page); await background(page, story.backgrounds.repair, '晚上');
  await load(page, 's3_walk_05'); await next(page); await background(page, story.backgrounds.street, '凌晨');
  await load(page, 's4_invite_04'); await next(page);
  { const n = story.nodes[await currentId(page)], s = story.scenes[n.scene]; await background(page, story.backgrounds[n.bg ?? s.bg], n.time ?? s.time); }
  record('自然推进跨场及节点背景覆盖不向后继承', { afternoonToNight: s1Last.id, overrideExits: ['s3_walk_05', 's4_invite_04'] });

  await load(page, 's1_arrive_04'); await action(page, 'save'); await page.locator('.save-slot').nth(1).click(); await action(page, 'close-modal');
  await load(page, darkRepresentative.at(-1)); await action(page, 'load'); await page.locator('.save-slot').nth(1).click(); await background(page, dayImage);
  await page.reload(); await background(page, story.backgrounds.street); await action(page, 'continue'); await background(page, dayImage);
  await action(page, 'menu'); await action(page, 'title'); await background(page, story.backgrounds.street);
  await action(page, 'continue'); await background(page, dayImage);
  record('白天手动保存→夜间→读回、刷新继续、返回标题与缓存恢复', { node: 's1_arrive_04' });
  await page.screenshot({ path: path.join(__dirname, 'e3-final-street-day-375x667.png') });

  // 当前正式剧情没有 time 覆盖：只改变隔离页面的元数据，验证契约优先级，不写磁盘剧情。
  const overrideCases = [
    { bg: 'street', time: '夜间', expected: story.backgrounds.street },
    { bg: 'street', time: '凌晨', expected: story.backgrounds.street },
    { bg: 'room', time: '下午', expected: story.backgrounds.room },
    { bg: 'street', time: '下午', expected: dayImage },
    { bg: null, time: null, expected: dayImage }
  ];
  for (const item of overrideCases) {
    await page.evaluate(({ bg, time }) => Object.assign(window.RAIN_STORY.nodes.s1_arrive_04, { bg, time }), item);
    await load(page, 's1_arrive_04'); await background(page, item.expected, item.time ?? '下午');
  }
  await page.evaluate(() => { delete window.RAIN_STORY.nodes.s1_arrive_04.bg; delete window.RAIN_STORY.nodes.s1_arrive_04.time; });
  record('隔离元数据夹具：节点time/bg优先及null回退规则', { cases: overrideCases });

  await load(page, 'end_huangqiuqiu');
  const oldEndScroll = await scrollDown(page, '.end-content');
  await load(page, 'end_xiaoman'); await top(page, '.end-content');
  const sameEndScroll = await scrollDown(page, '.end-content');
  await load(page, 'end_xiaoman'); await top(page, '.end-content');
  await page.screenshot({ path: path.join(__dirname, 'e3-final-end-scroll-375x667.png') });
  record('375×667真实结束页：换收束读档及同节点重读均回到顶部', { previousScroll: oldEndScroll, sameNodeScroll: sameEndScroll, after: 0 });
  await scrollDown(page, '.end-content'); await action(page, 'replay-preview'); await top(page, '.end-content'); await top(page, '#choice-panel'); await background(page, story.backgrounds.street, '夜间');
  assert.equal(await currentId(page), 'c6');
  record('结束页重选清理阅读位置并恢复C6夜间背景', { node: 'c6' });

  // 固定阅读容器高度制造可重复溢出：只加测试CSS，不修改正文或生产布局。
  const stress = await page.addStyleTag({ content: '#dialogue-box{height:64px!important;max-height:64px!important;min-height:0!important;overflow:auto!important} #choice-panel{height:70px!important;max-height:70px!important;min-height:0!important;overflow:auto!important} #choice-list{max-height:none!important;overflow:visible!important}' });
  await load(page, 'c6'); const choiceBefore = await scrollDown(page, '#choice-panel');
  await action(page, 'menu'); await action(page, 'close-modal');
  assert.equal(await page.locator('#choice-panel').evaluate(e => e.scrollTop), choiceBefore);
  await load(page, 'c6'); await top(page, '#choice-panel');
  const longLine = Object.values(story.nodes).filter(n => n.type === 'line' && !n.cg).sort((a, b) => b.text.length - a.text.length)[0];
  await load(page, longLine.id); const lineBefore = await scrollDown(page, '#dialogue-box');
  await action(page, 'menu'); await action(page, 'close-modal'); assert.equal(await page.locator('#dialogue-box').evaluate(e => e.scrollTop), lineBefore);
  await load(page, longLine.id); await top(page, '#dialogue-box');
  await scrollDown(page, '#dialogue-box'); await next(page); await top(page, '#dialogue-box');
  record('滚动压力夹具：选择/对白同节点读档与推进归零，菜单保持位置', { choiceBefore, lineBefore, longLine: longLine.id });

  await load(page, longLine.id, { ...settings, textSpeed: 'fast' });
  await page.waitForFunction(() => document.querySelector('#dialogue-text').textContent.length > 12);
  const typingBefore = await scrollDown(page, '#dialogue-box');
  const textBefore = await page.locator('#dialogue-text').textContent();
  await page.waitForTimeout(100);
  assert((await page.locator('#dialogue-text').textContent()).length > textBefore.length);
  assert.equal(await page.locator('#dialogue-box').evaluate(e => e.scrollTop), typingBefore);
  record('滚动压力夹具：逐字增长保持正在阅读的位置', { node: longLine.id, before: typingBefore });

  let unblock; const gate = new Promise(resolve => { unblock = resolve; });
  await page.route('**/' + story.cgs.cg08.image, async route => { await gate; await route.continue(); });
  await load(page, 'preview_qiu_12');
  await page.waitForFunction(() => document.querySelector('#app').dataset.cgState === 'loading');
  const cgBefore = await scrollDown(page, '#dialogue-box');
  unblock();
  await page.waitForFunction(() => document.querySelector('#app').dataset.cgState === 'ready');
  const cgAfter = await page.locator('#dialogue-box').evaluate(e => ({ top: e.scrollTop, max: e.scrollHeight - e.clientHeight }));
  // ready移除说话头像会降低可滚动高度；浏览器允许夹到新上限，不能回到0。
  assert.equal(cgAfter.top, Math.min(cgBefore, cgAfter.max));
  assert(cgAfter.top > 0);
  await page.unroute('**/' + story.cgs.cg08.image);
  record('滚动压力夹具：真实CG延迟加载完成不重置对白滚动', { node: 'preview_qiu_12', before: cgBefore, after: cgAfter });
  await action(page, 'menu'); await action(page, 'title'); await action(page, 'start'); await page.getByRole('button', { name: '确认', exact: true }).click();
  await top(page, '#dialogue-box'); await top(page, '#choice-panel'); await top(page, '.end-content'); await background(page, dayImage);
  record('新游戏清理三个阅读区位置并使用下午背景', { node: story.start });
  await stress.evaluate(e => e.remove());
  await ctx.close();
  assert.deepEqual(report.pageErrors, []); assert.deepEqual(report.missingRequests, []);
  report.endVersions = Object.fromEntries(files.map(p => [p, hash(fs.readFileSync(path.join(root, p)))]));
  assert.deepEqual(report.endVersions, versions, '受测文件在回归期间改变');
  report.pass = true;
}
main().catch(error => { report.pass = false; report.error = error.stack; console.error(error); process.exitCode = 1; }).finally(async () => {
  if (browser) await browser.close(); if (server) await new Promise(resolve => server.close(resolve));
  fs.writeFileSync(path.join(__dirname, 'e3-final-results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ pass: report.pass, checks: report.checks.length, output: 'qa/e3-final-results.json' }));
});
