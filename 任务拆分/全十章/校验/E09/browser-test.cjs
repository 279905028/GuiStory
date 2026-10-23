'use strict';
// E09正式候选，从根目录真实story与采用图加载；独立临时浏览器与随机本地端口。
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http'),vm=require('node:vm'),crypto=require('node:crypto');
const {chromium}=require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {root,createStory,reach,finish,clone}=require('../E08/fixture.cjs');
const {StoryEngine}=require(path.join(root,'engine.js'));
const compat=require(path.join(root,'save-compat.js'));
const scope={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'story.js'),'utf8'),scope);
const story=scope.window.RAIN_STORY;
const presentation=JSON.parse(fs.readFileSync(path.join(root,'任务拆分/全十章/校验/E07/presentation.json')));
const qiu={qiuSignal:'record',qiuReply:'reply',route:'huangqiuqiu'};
const at=(id,sel=qiu)=>reach(new StoryEngine(story),id,sel).snapshot();
const terminal=finish(new StoryEngine(story),qiu).snapshot();
const reveal='tc_c08_huangqiuqiu_human_reveal',previous=Object.values(story.nodes).find(n=>n.next===reveal).id;
const talking=Object.values(story.nodes).find(n=>n.scene===story.nodes[reveal].scene&&n.speaker==='huangqiuqiu'&&n.id.endsWith('_024'))?.id||'tc_c08_huangqiuqiu_her_decision_024';
const relative=Object.values(story.nodes).find(n=>n.scene==='ts_c09_huangqiuqiu_friends_days_later'&&n.type==='line').id;
const clearStage='tc_c08_common_exit';
const settings={textSpeed:'instant',sound:false,volume:.35};
const PREFIX=compat.getProfile(story).namespace;
const encoded=state=>JSON.stringify({format:1,...compat.metadata(story),savedAt:'2026-10-23T02:00:00.000Z',state,settings});
const runtimeNames=['story.js','index.html','styles.css','game.js','engine.js','save-compat.js','player-runtime.js'];
const frozen=Object.fromEntries(runtimeNames.map(f=>[f,fs.readFileSync(path.join(root,f))]));
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const output={task:'E09',date:'2026-10-23',scope:'E09 根目录正式十章候选的独立浏览器核查；不访问玩家存储，E10全套验收另行执行',formalIntegration:true,checks:[],screenshots:[],pageErrors:[],storySha256:hash(fs.readFileSync(path.join(root,'story.js'))),runtimeHashes:Object.fromEntries(Object.entries(frozen).map(([f,b])=>[f,hash(b)]))};
const server=http.createServer((req,res)=>{const name=decodeURIComponent(req.url.split('?')[0]).replace(/^\//,'')||'index.html';const file=path.resolve(root,name);if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}try{const data=frozen[name]||fs.readFileSync(file);res.setHeader('Content-Type',name.endsWith('.js')?'text/javascript':name.endsWith('.css')?'text/css':name.endsWith('.webp')?'image/webp':'text/html');res.end(data);}catch{res.writeHead(404).end();}});
let browser,origin;
async function scenario(name,fn,{state,storyOverride,missingModule,viewport={width:1440,height:900},badAuto,missingImage}={}){
 const context=await browser.newContext({viewport});
 await context.route('**/*',route=>{const u=route.request().url();if(!u.startsWith(origin+'/'))return route.abort();if(storyOverride&&u.endsWith('/story.js'))return route.fulfill({contentType:'text/javascript',body:'window.RAIN_STORY='+JSON.stringify(storyOverride)+';'});if(missingModule&&u.endsWith('/'+missingModule))return route.fulfill({contentType:'text/javascript',body:'/* isolated missing module */'});if(missingImage&&u.endsWith('/'+missingImage))return route.fulfill({status:404,body:''});return route.continue();});
 await context.addInitScript(({PREFIX,settings,seed})=>{
  const get=Storage.prototype.getItem,set=Storage.prototype.setItem,remove=Storage.prototype.removeItem;
  const store=localStorage,reads=[],writes=[],removes=[];
  const historical={'bijie-rain-demo:v1:auto':'old-v1','bijie-rain-demo:v0.3:auto':'old-v03','bijie-rain-demo:v0.4:auto':'old-v04','bijie-rain-demo:v0.4-background:auto':'old-background'};
  if(!sessionStorage.getItem('seeded')){for(const [k,v]of Object.entries(historical))set.call(store,k,v);set.call(store,PREFIX+'settings',JSON.stringify(settings));if(seed!=null)set.call(store,PREFIX+'auto',seed);sessionStorage.setItem('seeded','yes');}
  Storage.prototype.getItem=function(k){if(this===store)reads.push(k);return get.call(this,k);};
  Storage.prototype.setItem=function(k,v){if(this===store)writes.push(k);return set.call(this,k,v);};
  Storage.prototype.removeItem=function(k){if(this===store)removes.push(k);return remove.call(this,k);};
  window.__e09={reads,writes,removes,raw:k=>get.call(store,PREFIX+k),historical:()=>Object.fromEntries(Object.keys(historical).map(k=>[k,get.call(store,k)])),expected:historical};
 },{PREFIX,settings,seed:badAuto!==undefined?badAuto:state?encoded(state):null});
 const page=await context.newPage();page.setDefaultTimeout(10000);page.on('pageerror',e=>output.pageErrors.push({name,error:e.message}));
 try {await page.goto(origin,{waitUntil:'load'});await fn(page);if(!missingImage&&!missingModule){const broken=await page.locator('img[src]').evaluateAll(xs=>xs.filter(x=>!x.hidden&&x.getAttribute('src')&&x.complete&&x.naturalWidth===0).map(x=>({id:x.id,src:x.getAttribute('src')})));assert.deepEqual(broken,[],name+'可见图片加载失败');}const audit=await page.evaluate(()=>({reads:__e09.reads,writes:__e09.writes,removes:__e09.removes,actual:__e09.historical(),expected:__e09.expected}));assert.deepEqual(audit.actual,audit.expected);assert([...audit.reads,...audit.writes,...audit.removes].every(k=>k.startsWith(PREFIX)),name+'访问旧空间');output.checks.push({name,passed:true,reads:audit.reads.length,writes:audit.writes.length});}
 finally{await context.close();}
}
async function load(page){await page.locator('#continue-btn').click();await page.waitForFunction(()=>document.body.dataset.screen!=='title');}
const snapshot=page=>page.evaluate(()=>JSON.parse(__e09.raw('auto')).state);
async function next(page){await page.waitForTimeout(350);await page.locator('#dialogue-box').click();}
async function shot(page,name){const file=path.join(__dirname,name+'.png');await page.screenshot({path:file,fullPage:true});output.screenshots.push(path.relative(root,file));}
async function reselect(page,id){await page.locator('[data-action="reselect"]:visible').click();await page.locator('[data-reselect-node="'+id+'"]').click();await page.getByRole('button',{name:'确认',exact:true}).click();}
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({channel:'chrome',headless:true});
 await scenario('启动与新空间元信息',async p=>{assert.match(await p.title(),/全十章/);await p.locator('[data-action="start"]').click();const s=await p.evaluate(()=>JSON.parse(__e09.raw('auto')));assert.equal(s.contentVersion,1);assert.equal(s.contractVersion,'1.0.0');assert.equal(s.contentRevision,'nightshift-20261022-r1');assert.deepEqual(s.state.flags,{qiuMet:false,qiuForm:'sphere'});});
 await scenario('变身前一行→精确变身→说话头像→刷新恢复',async p=>{await load(p);assert.equal(await p.locator('#character').getAttribute('data-form'),'sphere');await next(p);assert.equal((await snapshot(p)).nodeId,reveal);assert.equal(await p.locator('#character').getAttribute('data-form'),'human');await next(p);await next(p);await next(p);assert.equal(await p.locator('#speaker-avatar').getAttribute('data-form'),'human');assert.equal(await p.locator('#speaker-avatar').getAttribute('data-dedicated-avatar'),'true');await shot(p,'human-transition-desktop');await p.reload({waitUntil:'load'});await load(p);assert.equal(await p.locator('#character').getAttribute('data-form'),'human');assert.equal(await p.locator('#speaker-avatar').getAttribute('data-form'),'human');},{state:at(previous)});
 await scenario('章末继续与立绘清理',async p=>{await load(p);assert(await p.locator('#end-character').isHidden());assert.equal(await p.locator('#end-continue').innerText(),'继续第9章 ↗');await p.locator('#end-continue').click();assert.equal((await snapshot(p)).nodeId,'tc_c09_common_entry');assert.equal(await p.locator('#character').getAttribute('src'),story.characters.shijiang.image);},{state:at(clearStage)});
 await scenario('结局人形与第九章重选',async p=>{await load(p);assert.equal(await p.locator('#end-character').getAttribute('data-form'),'human');assert(await p.locator('#end-continue').isHidden());assert.match(await p.locator('#end-kicker').innerText(),/全篇读完/);await shot(p,'ending-desktop');await reselect(p,'tc_c09_huangqiuqiu_relationship_choice');const s=await snapshot(p);assert.equal(s.nodeId,'tc_c09_huangqiuqiu_relationship_choice');assert.equal(s.flags.qiuForm,'human');assert(!Object.hasOwn(s.flags,'huangqiuqiuRelationship'));},{state:terminal});
 await scenario('第三章重选保留相识清除人形与后续选择',async p=>{await load(p);await p.locator('#end-replay-route').click();const s=await snapshot(p);assert.equal(s.nodeId,story.routeChoice);assert.equal(s.flags.qiuForm,'sphere');assert.equal(s.flags.qiuMet,true);assert(!Object.hasOwn(s.flags,'route'));assert.equal(await p.locator('[data-choice-index]').count(),7);},{state:terminal});
 await scenario('相对日期与回顾无历史形象回填',async p=>{await load(p);assert.equal(await p.locator('#scene-day').innerText(),'第76天后的数日');await p.locator('[data-action="history"]:visible').click();assert.match(await p.locator('#modal-body').innerText(),/第76天后的数日/);assert.equal(await p.locator('#modal-body img').count(),0);},{state:at(relative,{...qiu,huangqiuqiuRelationship:'friends'})});
 await scenario('手动保存与读取元信息',async p=>{await load(p);await p.locator('#game-screen [data-action="save"]').click();await p.getByRole('button',{name:/手动存档 1/}).click();const manual=await p.evaluate(()=>JSON.parse(__e09.raw('slot1')));assert.equal(manual.contractVersion,'1.0.0');await p.locator('#modal-close').click();await next(p);await p.locator('#game-screen [data-action="load"]').click();await p.getByRole('button',{name:/手动存档 1/}).click();assert.equal((await snapshot(p)).nodeId,previous);assert.equal(await p.locator('#character').getAttribute('data-form'),'sphere');},{state:at(previous)});
 await scenario('坏自动档保持字节且自动保存暂停',async p=>{assert(await p.locator('#continue-btn').isDisabled());assert.equal(await p.evaluate(()=>__e09.raw('auto')),'{corrupt-e08');assert.equal((await p.evaluate(()=>__e09.writes)).length,0);},{badAuto:'{corrupt-e08'});
 for(const [label,mutate]of [['未知能力',s=>s.requiredCapabilities.push('future-v2')],['不匹配契约',s=>s.contractVersion='2.0.0'],['缺失人形',s=>delete s.characters.huangqiuqiu.forms.human]]){const bad=clone(story);mutate(bad);await scenario('拒绝启动：'+label,async p=>{assert(await p.locator('[data-action="start"]').isDisabled());assert.equal((await p.evaluate(()=>__e09.reads)).length,0);assert.equal((await p.evaluate(()=>__e09.writes)).length,0);},{storyOverride:bad});}
 await scenario('缺显示组件拒绝启动且零存储访问',async p=>{assert(await p.locator('[data-action="start"]').isDisabled());assert.equal((await p.evaluate(()=>__e09.reads)).length,0);},{missingModule:'player-runtime.js'});
 const broken=story.characters.huangqiuqiu.forms.human.image;
 await scenario('人形文件缺失不回退球形',async p=>{await load(p);await p.waitForTimeout(100);assert.equal(await p.locator('#character').getAttribute('src'),broken);assert(await p.locator('#character').isHidden());assert.match(await p.locator('#toast').innerText(),/素材/);},{state:at(reveal),missingImage:broken});
 for(const [name,viewport]of [['desktop',{width:1440,height:900}],['laptop',{width:1280,height:720}],['phone',{width:390,height:844}],['small-phone',{width:360,height:640}],['landscape',{width:844,height:390}]])await scenario('视口与人形独立头像：'+name,async p=>{await load(p);await p.waitForTimeout(100);const bounds=await p.locator('#speaker-avatar').evaluate(el=>{const r=el.getBoundingClientRect(),a=el.parentElement.getBoundingClientRect();return {width:r.width,height:r.height,parentWidth:a.width,parentHeight:a.height,complete:el.complete&&el.naturalWidth>0};});assert(bounds.complete);assert(Math.abs(bounds.width-bounds.parentWidth)<=2.1,JSON.stringify(bounds));assert(Math.abs(bounds.height-bounds.parentHeight)<=2.1,JSON.stringify(bounds));assert(await p.locator('#character').isVisible());await shot(p,'human-'+name);},{state:at(talking),viewport});

 const sphereTalk=presentation.nodeRequests.find(p=>p.form==='sphere'&&story.nodes[p.nodeId]?.speaker==='huangqiuqiu').nodeId;
 await scenario('球形独立头像与等比显示',async p=>{await load(p);assert.equal(await p.locator('#speaker-avatar').getAttribute('data-form'),'sphere');assert.equal(await p.locator('#speaker-avatar').getAttribute('data-presentation'),'orb');assert.equal(await p.locator('#speaker-avatar').getAttribute('data-dedicated-avatar'),'true');await shot(p,'sphere-phone');},{state:at(sphereTalk),viewport:{width:390,height:844}});
 await scenario('小屏相对日序和七项选择可滚动触达',async p=>{await load(p);assert.equal(await p.locator('#scene-day').innerText(),'第76天后的数日');await shot(p,'relative-small-phone');await p.locator('[data-action="menu"]').click();await reselect(p,story.routeChoice);assert.equal(await p.locator('[data-choice-index]').count(),7);await p.locator('[data-choice-index="6"]').scrollIntoViewIfNeeded();await shot(p,'route-choice-small-phone');await p.waitForTimeout(350);await p.locator('[data-choice-index="6"]').click();assert.equal((await snapshot(p)).flags.route,'huangqiuqiu');},{state:at(relative,{...qiu,huangqiuqiuRelationship:'friends'}),viewport:{width:360,height:640}});
 await artScenarios();
 assert.equal(output.pageErrors.length,0);output.passed=output.checks.length;output.failed=0;
})().catch(error=>{output.failed=1;output.error=error.stack;process.exitCode=1;console.error(error.stack);}).finally(async()=>{if(browser)await browser.close();server.close();fs.writeFileSync(path.join(__dirname,'browser-results.json'),JSON.stringify(output,null,2)+'\n');console.log(JSON.stringify({passed:output.passed||output.checks.length,failed:output.failed,screenshots:output.screenshots.length}));});

async function artScenarios() {
 const adoption=JSON.parse(fs.readFileSync(path.join(root,'assets/ten-chapter/a06-adoption.json')));
 const map=JSON.parse(fs.readFileSync(path.join(root,'assets/ten-chapter/a06-scene-node-map.json')));
 await scenario('138张正式采用图可解码，尺寸与清单一致',async p=>{
  const rows=await p.evaluate(async files=>{const out=[];for(const f of files){const im=new Image();im.src=f.file;await im.decode();out.push({file:f.file,width:im.naturalWidth,height:im.naturalHeight});}return out;},adoption.assets.map(a=>({file:a.file})));
  for(const row of rows){const a=adoption.assets.find(a=>a.file===row.file);assert.equal(row.width,a.width);assert.equal(row.height,a.height);}output.loadedAdoptedImages=rows.length;
 });
 for(const rule of map.cgRules.items.filter(x=>x.allowedNodeIds)){
  const selection=rule.id.includes('qiuqiu')?qiu:rule.id.includes('piao-choice')?{route:'piao'}:{route:'xiaoman'};
  await scenario('CG合法进入/刷新/退出：'+rule.id,async p=>{
   await load(p);await p.waitForFunction(()=>document.getElementById('app').dataset.cgState==='ready');
   assert.equal(await p.locator('#cg-image').getAttribute('src'),rule.file);
   assert(await p.locator('#character').isHidden());
   const b=await p.evaluate(()=>{const r=e=>{const b=e.getBoundingClientRect();return {x:b.x,y:b.y,w:b.width,h:b.height,bottom:b.bottom};};return {cg:r(document.getElementById('cg-image')),dialogue:r(document.querySelector('.dialogue-shell')),fit:getComputedStyle(document.getElementById('cg-image')).objectFit};});
   assert.equal(b.fit,'contain');assert(b.cg.bottom<=b.dialogue.y+1||b.cg.x+b.cg.w<=b.dialogue.x+1,'CG与对白不重叠');
   await shot(p,rule.id+'-desktop');await p.reload({waitUntil:'load'});await load(p);await p.waitForFunction(()=>document.getElementById('app').dataset.cgState==='ready');
   for(let i=0;i<rule.allowedNodeIds.length;i++)await next(p);
   assert.equal((await snapshot(p)).nodeId,rule.exitBefore);assert(await p.locator('#cg-layer').isHidden());
  },{state:at(rule.enterAt,selection)});
 }
 for(const [name,viewport]of [['desktop',{width:1440,height:900}],['laptop',{width:1280,height:720}],['phone',{width:390,height:844}],['small-phone',{width:360,height:640}],['landscape',{width:844,height:390}]]){
  await scenario('正式封面与全景区域：'+name,async p=>{
   const cover=await p.locator('#title-cover').evaluate(el=>({src:el.currentSrc,loaded:el.complete&&el.naturalWidth>0}));assert(cover.loaded);assert(cover.src.includes(viewport.width<=760&&viewport.height>viewport.width?'cover-mobile.webp':'cover-desktop.webp'));await shot(p,'cover-'+name);
   await p.locator('[data-action="start"]').click();await p.locator('#scene-bg').evaluate(el=>el.decode());
   assert.equal(await p.locator('#scene-bg').evaluate(el=>getComputedStyle(el).objectFit),'contain');
   assert.equal(await p.locator('#scene-bg').evaluate(el=>el.parentElement.className),'scene-visual');
   assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth),false);await shot(p,'first-scene-'+name);
  },{viewport});
  await scenario('CG完整构图五视口：'+name,async p=>{await load(p);await p.waitForFunction(()=>document.getElementById('app').dataset.cgState==='ready');const b=await p.evaluate(()=>{const r=e=>{const b=e.getBoundingClientRect();return {x:b.x,y:b.y,right:b.right,bottom:b.bottom};};return {cg:r(document.getElementById('cg-image')),dialogue:r(document.querySelector('.dialogue-shell'))};});assert(b.cg.bottom<=b.dialogue.y+1||b.cg.right<=b.dialogue.x+1);await shot(p,'cg-transform-'+name);},{state:at('tc_c08_huangqiuqiu_her_decision_025'),viewport});
 }
 await scenario('章末程序底色且不请求占位图片',async p=>{await load(p);assert(await p.locator('#scene-bg').isHidden());assert.equal(await p.locator('#scene-bg').getAttribute('src'),null);assert.equal(await p.locator('#app').getAttribute('data-background-mode'),'neutral');await shot(p,'chapter-end-neutral');},{state:at('tc_c01_common_exit')});
 await scenario('飘交往后日谈不显示婚宴CG',async p=>{await load(p);assert(await p.locator('#cg-layer').isHidden());},{state:at('tc_c10_piao_dating_001',{route:'piao',piaoRelationship:'dating'})});
}
