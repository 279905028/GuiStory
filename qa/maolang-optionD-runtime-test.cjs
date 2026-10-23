'use strict';
// 正式文件 + 正式引擎自然回放存档；只在隔离浏览器上下文中验证。
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { StoryEngine } = require('../engine.js');
const root = path.resolve(__dirname, '..');
const out = path.join(__dirname, 'maolang-optionD-20261020');
const prefix = 'bijie-rain-demo:v1:';
const artRoot = 'assets/new-character-variants/expressions-v01-20261019/maolang/';
const expected = {
  s2_counter_02: 'action-wave', s2_counter_04: 'action-explaining',
  s2_counter_13: 'expression-surprised', s2_recruit_02: 'action-thinking',
  s9_compete_02: 'expression-serious', s9_compete_04: 'expression-hesitant',
  s9_compete_07: 'expression-smile', s9_measure_02: 'expression-serious'
};
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
const storySource = fs.readFileSync(path.join(root, 'story.js'));
// 本轮制作期间另一窗口已将师匠的“细框”改为“黑框”；明确保留这一处可核实变更。
const beforeStory = fs.readFileSync(path.join(out, 'before/story.js'), 'utf8');
const concurrentStory = beforeStory.replace('师匠用笔压住故障单。细框眼镜后，他先看机器，再看我。', '师匠用笔压住故障单。黑框眼镜后，他先看机器，再看我。');
assert.equal(storySource.toString(), concurrentStory, '除已记录的同期师匠措辞外，毛狼对白与剧情必须保持');
assert.deepEqual(fs.readFileSync(path.join(root, 'engine.js')), fs.readFileSync(path.join(out, 'before/engine.js')), '引擎保持原样');
const sandbox = { window: {} };
vm.runInNewContext(storySource.toString(), sandbox);
const story = JSON.parse(JSON.stringify(sandbox.window.RAIN_STORY));
const targets = Object.keys(expected).concat('s2_counter_06', 's9_compete_08', 's2_counter_03');
const snapshots = {};
const engine = new StoryEngine(story);
while (true) {
  const node = engine.current();
  if (targets.includes(node.id)) snapshots[node.id] = engine.snapshot();
  if (node.type === 'end') break;
  if (node.type === 'line') engine.advance();
  else engine.choose(engine.availableChoices()[0].index);
}
for (const id of targets) {
  assert(snapshots[id], '自然路线必须覆盖 ' + id);
  new StoryEngine(story, snapshots[id]);
}
const baseline = JSON.parse(fs.readFileSync(path.join(out, 'before.json')));
const removedDocInputs = JSON.parse(fs.readFileSync(path.join(root, 'qa/fixtures/removed-doc-inputs.json'), 'utf8'));
assert.equal(removedDocInputs.schemaVersion, 1);
assert.equal(removedDocInputs.sourceBaseline, 'qa/maolang-optionD-20261020/before.json');
assert.equal(removedDocInputs.files.length, 13, '只允许已确认清理的 13 份历史文档');
const removedDocuments = new Map(removedDocInputs.files.map(item => [item.path, item.sha256]));
assert.equal(removedDocuments.size, 13, '已清理文档名单不得重复');
assert.deepEqual([...removedDocuments.keys()].sort(), Object.keys(baseline).filter(file => file.endsWith('.md')).sort(),
  '豁免名单必须精确对应冻结基线中的 13 份 Markdown');
for (const [file, originalHash] of removedDocuments) assert.equal(baseline[file], originalHash, file + ' 原始文档指纹');
const skippedDocumentChecks = [];
const base = 'assets/char-maolang.png';
const approved = 'assets/character-variants/maolang-photo2-options-20261020/option-D-dialogue-stance.png';
assert.equal(hash(fs.readFileSync(path.join(root, base))), hash(fs.readFileSync(path.join(root, approved))), '基础图须为用户所选 D 原图');
const changed = [];
for (const [file, beforeHash] of Object.entries(baseline)) {
  if (removedDocuments.has(file) && !fs.existsSync(path.join(root, file))) {
    skippedDocumentChecks.push(file);
    continue;
  }
  const current = hash(fs.readFileSync(path.join(root, file)));
  if (current !== beforeHash) changed.push(file);
}
const documentValidation = { skipped: skippedDocumentChecks, evidence: 'qa/fixtures/removed-doc-inputs.json',
  limitation: '旧文档已清理，本次不再覆盖名单中已删除文档的哈希校验；仍存在的文档及其余文件按原规则读取校验。' };
console.log('DOCUMENT_SCOPE ' + JSON.stringify(documentValidation));
const allowed = file => ['game.js', 'styles.css', 'story.js', 'assets/char-maolang.png', 'assets/new-characters-manifest.json', 'assets/new-character-prompts.json', 'assets/cg-manifest.json', 'assets/cg/cg-06-maolang-confession.png', 'assets/cg/cg-09-repair-handoff.png', 'assets/cg-variants/CG06/record.json', 'assets/cg-variants/CG09/record.json', '任务拆分/共享契约.md'].includes(file) || file.startsWith(artRoot);
const concurrentFiles = changed.filter(file => file === 'assets/char-shijiang.png' || file.startsWith('assets/new-character-variants/expressions-v01-20261019/shijiang/'));
assert(changed.every(file => allowed(file) || concurrentFiles.includes(file)), '出现范围之外的旧文件修改: ' + changed.filter(f => !allowed(f) && !concurrentFiles.includes(f)).join(', '));
const currentCharacters = JSON.parse(fs.readFileSync(path.join(root, 'assets/new-characters-manifest.json'))).characters;
assert.equal(hash(fs.readFileSync(path.join(root, base))), currentCharacters.maolang.sha256);
assert.equal(hash(fs.readFileSync(path.join(root, currentCharacters.shijiang.path))), currentCharacters.shijiang.sha256, '同期师匠资源与其当前清单一致');
const results = { date: new Date().toISOString(), maolangStoryUnchanged: true, concurrentStoryChangePreserved: 's2_counter_06: 细框眼镜→黑框眼镜；本任务未写story.js', concurrentFilesPreserved: concurrentFiles, documentValidation, storySha256: hash(storySource), engineUnchanged: true, baseMatchesOptionD: true, changed, cases: [], errors: [], fallback: null, refresh: null };
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const save = id => ({ format: 1, savedAt: new Date().toISOString(), state: snapshots[id], settings });
let browser, server;
async function load(page, id) {
  await page.evaluate(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)), { key: prefix + 'slot3', value: save(id) });
  await page.locator('[data-action="load"]:visible').first().click();
  await page.locator('.save-slot').nth(3).click();
  await page.waitForFunction(id => JSON.parse(localStorage.getItem('bijie-rain-demo:v1:auto')).state.nodeId === id, id);
}
async function readySprite(page, source) {
  await page.waitForFunction(source => {
    const i = document.querySelector('#character');
    return i.getAttribute('src') === source && i.complete && i.naturalWidth > 0 && !i.hidden;
  }, source);
}
async function geometry(page) {
  return page.evaluate(() => {
    const image = document.querySelector('#character'), r = image.getBoundingClientRect();
    const avatar = document.querySelector('#speaker-avatar');
    return { src: image.getAttribute('src'), variant: image.dataset.variant, fit: getComputedStyle(image).objectFit,
      rect: { x: r.x, y: r.y, right: r.right, bottom: r.bottom }, size: [image.naturalWidth, image.naturalHeight],
      avatar: avatar.getAttribute('src'), avatarLoaded: avatar.complete && avatar.naturalWidth > 0,
      scroll: [document.documentElement.scrollWidth, document.documentElement.scrollHeight], viewport: [innerWidth, innerHeight] };
  });
}
(async () => {
  try {
    server = http.createServer((req, res) => {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
      if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
      fs.readFile(file, (error, data) => {
        if (error) return res.writeHead(404).end();
        const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
        res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(data);
      });
    });
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
    const origin = 'http://127.0.0.1:' + server.address().port;
    browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
    await Promise.all([[1440,900], [1280,720], [390,844], [375,667], [844,390]].map(async ([width,height]) => {
      const ctx = await browser.newContext({ viewport: { width, height } });
      const page = await ctx.newPage();
      page.on('pageerror', e => results.errors.push(e.message));
      await ctx.addInitScript(({ prefix, settings }) => localStorage.setItem(prefix + 'settings', JSON.stringify(settings)), { prefix, settings });
      await page.goto(origin);
      for (const [id, variant] of Object.entries(expected)) {
        await load(page, id);
        const source = artRoot + 'char-maolang-' + variant + '.png';
        await readySprite(page, source);
        await page.waitForFunction(() => { const i = document.querySelector('#speaker-avatar'); return i.complete && i.naturalWidth > 0; });
        const g = await geometry(page);
        assert.equal(g.variant, variant); assert.equal(g.avatar, base); assert(g.avatarLoaded);
        assert.equal(g.fit, 'contain'); assert.deepEqual(g.size, [1024,1536]);
        assert(g.rect.x >= -1 && g.rect.y >= -1 && g.rect.right <= width + 1 && g.rect.bottom <= height + 1, '立绘框越界 ' + id);
        assert(g.scroll[0] <= width && g.scroll[1] <= height, '页面溢出 ' + id);
        assert.equal(await page.locator('#dialogue-text').textContent(), story.nodes[id].text);
        let screenshot = null;
        if (['s2_counter_02','s9_compete_02'].includes(id)) {
          screenshot = path.join(out, id + '-' + width + 'x' + height + '.png');
          await page.screenshot({ path: screenshot });
        }
        results.cases.push({ id, width, height, pass: true, screenshot, geometry: g });
      }
      for (const [id,key] of [['s2_counter_06','cg09'],['s9_compete_08','cg06']]) {
        await load(page, id);
        const source = story.cgs[key].image;
        await page.waitForFunction(source => { const i=document.querySelector('#cg-image');return document.querySelector('#app').dataset.cgState==='ready' && i.getAttribute('src')===source && i.complete && i.naturalWidth>0; }, source);
        const dimensions = await page.locator('#cg-image').evaluate(i => [i.naturalWidth,i.naturalHeight]);
        const screenshot = path.join(out,key+'-'+width+'x'+height+'.png');
        await page.screenshot({ path: screenshot });
        results.cases.push({ id, key, width, height, pass: true, dimensions, screenshot });
      }
      await load(page,'s2_counter_03'); await readySprite(page,story.characters.wenwen.image);
      assert.equal(await page.locator('#character').getAttribute('data-variant'),'base');
      if (width===1280) {
        await load(page,'s9_compete_04'); await readySprite(page,artRoot+'char-maolang-expression-hesitant.png');
        await page.reload(); await page.locator('[data-action="continue"]:visible').click();
        await readySprite(page,artRoot+'char-maolang-expression-hesitant.png');
        results.refresh={pass:true,node:'s9_compete_04',unchangedSaveFormat:true};
      }
      await ctx.close();
    }));
    const ctx=await browser.newContext({viewport:{width:390,height:844}}),page=await ctx.newPage();
    await ctx.addInitScript(({prefix,settings})=>localStorage.setItem(prefix+'settings',JSON.stringify(settings)),{prefix,settings});
    let blocked=0;
    await page.route('**/char-maolang-action-wave.png', route=>{blocked++;return route.abort();});
    await page.goto(origin);await load(page,'s2_counter_02');await readySprite(page,base);
    assert.equal(await page.locator('#dialogue-text').textContent(),story.nodes.s2_counter_02.text);
    await page.waitForTimeout(350);await page.locator('#dialogue-box').click();await readySprite(page,story.characters.wenwen.image);
    await load(page,'s2_counter_02');await readySprite(page,base);assert.equal(blocked,1,'已知失败差分不重复请求');
    results.fallback={pass:true,blockedRequests:blocked,textAndProgressPreserved:true};await ctx.close();
    assert.equal(results.errors.length,0);assert.equal(results.cases.length,50);
    results.status='passed';results.summary={spriteScenes:40,cgScenes:10,viewports:5,refresh:true,fallback:true};
  } catch(error) { results.status='failed';results.failure=error.stack;process.exitCode=1; }
  finally {
    if(browser)await browser.close();if(server)await new Promise(resolve=>server.close(resolve));
    fs.writeFileSync(path.join(out,'runtime-results.json'),JSON.stringify(results,null,2)+'\n');
    console.log(JSON.stringify({status:results.status,summary:results.summary,failure:results.failure},null,2));
  }
})();
