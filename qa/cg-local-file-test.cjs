'use strict';
// Chrome直接打开index.html；独立context，所有HTTP/HTTPS资源请求拒绝。
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { StoryEngine } = require('../engine.js');
const root = path.resolve(__dirname, '..');
const c = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'story.js'), 'utf8'), c);
const story = c.window.RAIN_STORY;
const engine = new StoryEngine(story);
while (engine.current().id !== 's3_stall_05') {
  assert(engine.current().type !== 'end');
  if (engine.current().type === 'line') engine.advance();
  else assert(engine.choose(engine.availableChoices()[0].index));
}
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const save = { format: 1, savedAt: new Date().toISOString(), state: engine.snapshot(), settings };
const result = { date: new Date().toISOString(), scope: 'Chrome file URL打开index.html、实际CG13、网络请求阻断；非Finder实体双击或全流程离线验收', checks: [], pageErrors: [], blockedRequests: [] };
result.fingerprints = Object.fromEntries(['story.js', 'game.js', 'index.html', 'styles.css', 'assets/cg/cg-13-xiaoman-night-stall.png'].map(p => [p, crypto.createHash('sha256').update(fs.readFileSync(path.join(root, p))).digest('hex')]));
let browser;
(async () => {
  try {
    browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await context.route(/^https?:\/\//, route => { result.blockedRequests.push(route.request().url()); return route.abort(); });
    await context.addInitScript(({ save, settings }) => {
      localStorage.setItem('bijie-rain-demo:v1:auto', JSON.stringify(save));
      localStorage.setItem('bijie-rain-demo:v1:settings', JSON.stringify(settings));
    }, { save, settings });
    const page = await context.newPage();
    page.on('pageerror', e => result.pageErrors.push(e.message));
    await page.goto('file://' + path.join(root, 'index.html'));
    await page.locator('[data-action="continue"]').click();
    await page.waitForFunction(() => document.querySelector('#app').dataset.cgState === 'ready' && document.querySelector('#cg-image').naturalWidth > 0);
    assert.equal(await page.locator('#cg-image').getAttribute('src'), story.cgs.cg13.image);
    assert.equal(await page.locator('#dialogue-text').textContent(), story.nodes.s3_stall_05.text);
    await page.screenshot({ path: path.join(__dirname, 'cg-integrated-file-390x844.png') });
    result.checks.push('本地file协议加载正式脚本、存档与CG13原生PNG');
    for (let i = 0; i < 4; i++) { await page.waitForTimeout(335); await page.locator('#dialogue-box').click(); }
    await page.waitForFunction(() => document.querySelector('#app').dataset.cgState === 'off');
    assert.equal(await page.locator('#cg-image').getAttribute('src'), null);
    result.checks.push('四段CG对白后按正式节点退出并恢复普通场景');
    assert.deepEqual(result.pageErrors, []);
    assert.deepEqual(result.blockedRequests, []);
    for (const [p, sha] of Object.entries(result.fingerprints)) assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root, p))).digest('hex'), sha);
    result.pass = true;
  } catch (error) { result.pass = false; result.error = error.stack; console.error(error); process.exitCode = 1; }
  finally { if (browser) await browser.close(); fs.writeFileSync(path.join(__dirname, 'cg-local-file-results.json'), JSON.stringify(result, null, 2) + '\n'); console.log(JSON.stringify({ pass: result.pass, checks: result.checks, output: 'qa/cg-local-file-results.json' })); }
})();
