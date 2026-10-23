'use strict';
// 使用当前正式引擎自然回放出的存档，通过真实读取存档界面检查差分显示。
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { root, story, StoryEngine, reach, graph, bindings, hashes, initialHashes } = require('./audit.cjs');
const prefix = fs.readFileSync(path.join(root,'game.js'),'utf8').match(/const PREFIX = '([^']+)'/)[1];
const settings = { textSpeed:'instant', sound:false, volume:0.35 };
const report = { checkedAt:new Date().toISOString(), pass:false, scope:'隔离 Chrome，1280×720，本地正式页面；逐种差分代表节点和18处旧映射，不是全部路径逐次UI点击',
  inputHashes:initialHashes, cases:[], transitions:[], screenshots:[], pageErrors:[], httpErrors:[] };
const server = http.createServer((req,res) => {
  const file = path.resolve(root,'.'+(decodeURIComponent(new URL(req.url,'http://localhost').pathname) === '/' ?
    '/index.html' : decodeURIComponent(new URL(req.url,'http://localhost').pathname)));
  if (!file.startsWith(root+path.sep)) return res.writeHead(403).end();
  fs.readFile(file,(error,buffer) => {
    if(error) return res.writeHead(404).end();
    res.writeHead(200,{'Content-Type':({'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png'})[path.extname(file)]||'application/octet-stream'});
    res.end(buffer);
  });
});
let browser;
(async () => {
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  browser = await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
  const context = await browser.newContext({viewport:{width:1280,height:720},locale:'zh-CN',reducedMotion:'reduce'});
  await context.addInitScript(({prefix,settings})=>localStorage.setItem(prefix+'settings',JSON.stringify(settings)),{prefix,settings});
  const page = await context.newPage(); page.setDefaultTimeout(15000);
  page.on('pageerror',e=>report.pageErrors.push(e.message));
  page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/favicon.ico'))report.httpErrors.push({url:r.url(),status:r.status()});});
  await page.goto('http://127.0.0.1:'+server.address().port);
  async function load(id) {
    const snapshot = reach(id,graph.witnesses.get(id)).snapshot();
    assert.equal(new StoryEngine(story,snapshot).current().id,id);
    await page.evaluate(({prefix,settings,snapshot})=>localStorage.setItem(prefix+'slot3',
      JSON.stringify({format:1,savedAt:new Date().toISOString(),settings,state:snapshot})),{prefix,settings,snapshot});
    await page.locator('[data-action="load"]:visible').first().click();
    await page.locator('.save-slot').nth(3).click();
    await page.waitForFunction(({prefix,id})=>JSON.parse(localStorage.getItem(prefix+'auto'))?.state.nodeId===id,{prefix,id});
  }
  const selected = new Map();
  for (const binding of bindings.filter(b=>!b.cg)) {
    const key = binding.character+':'+binding.variant;
    if(!selected.has(key))selected.set(key,binding);
  }
  const targets = [...selected.values()];
  for (const b of bindings.filter(b=>b.mapping==='player-legacy')) if(!targets.some(v=>v.id===b.id))targets.push(b);
  const captured = new Set();
  for (const b of targets) {
    await load(b.id);
    if(b.cg) {
      await page.waitForFunction(()=>document.getElementById('app').dataset.cgState==='ready');
      assert.equal(await page.locator('#character').isVisible(),false);
      assert.equal(await page.locator('#speaker-avatar').isVisible(),false);
    } else {
      await page.waitForFunction(({source,variant})=>{
        const image=document.getElementById('character');
        return image.getAttribute('src')===source && image.complete && image.naturalWidth>0 &&
          image.dataset.variant===variant && !image.hidden && getComputedStyle(image).display!=='none';
      },{source:b.source,variant:b.variant});
      const speaker=b.speaker==='narrator'?'wenwen':b.speaker;
      if(story.characters[speaker])assert.equal(await page.locator('#speaker-avatar').getAttribute('src'),story.characters[speaker].image);
    }
    report.cases.push({id:b.id,character:b.character,variant:b.variant,source:b.source,cg:b.cg,
      displayed:!b.cg,pass:true});
    if(!captured.has(b.character)&&!b.cg) {
      const file=b.character+'.png';
      await page.screenshot({path:path.join(__dirname,file)});
      report.screenshots.push(file); captured.add(b.character);
    }
    if(b.id==='s2_counter_07') {
      await page.screenshot({path:path.join(__dirname,'shijiang-cg-covered.png')});
      report.screenshots.push('shijiang-cg-covered.png');
    }
  }
  // 同一角色的下一句未指定 expression 时，确认恢复基础图。
  for(const id of ['s3_stall_01','ch3_mengyao_f_03']) {
    const node=story.nodes[id],next=story.nodes[node.next];
    assert(node.expression && next.character===node.character && !next.expression);
    await load(id);
    await page.waitForFunction(src=>document.getElementById('character').getAttribute('src')===src,
      story.characters[node.character].expressions[node.expression]);
    await page.waitForTimeout(360);
    await page.locator('#dialogue-box').click();
    await page.waitForFunction(({prefix,id,src})=>{
      const image=document.getElementById('character');
      return JSON.parse(localStorage.getItem(prefix+'auto'))?.state.nodeId===id &&
        image.getAttribute('src')===src && image.dataset.variant==='base' && image.naturalWidth>0;
    },{prefix,id:next.id,src:story.characters[node.character].image});
    report.transitions.push({from:id,to:next.id,result:'回到基础图',pass:true});
  }
  assert.deepEqual(report.pageErrors,[]);
  assert.deepEqual(report.httpErrors,[]);
  assert.deepEqual(hashes(),initialHashes);
  report.uniqueVariants=selected.size;
  report.pass=true;
})().catch(error=>{report.error=error.stack;process.exitCode=1;console.error(error);})
.finally(async()=>{
  report.finalHashes=hashes();
  fs.writeFileSync(path.join(__dirname,'browser-results.json'),JSON.stringify(report,null,2)+'\n');
  await browser?.close(); await new Promise(resolve=>server.close(resolve));
  console.log(JSON.stringify({pass:report.pass,cases:report.cases.length,uniqueVariants:report.uniqueVariants,
    transitions:report.transitions.length,error:report.error},null,2));
});
