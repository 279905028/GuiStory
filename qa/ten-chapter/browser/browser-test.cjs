'use strict';
// E10 独立正式浏览器回归。延用 E09 浏览器场景作为回归基线，新增最长真实历史、
// 全13结局、全部九章末、最长选项、音频及故障注入。未调用历史测试或写其报告。
// 仅服务冻结的根目录正式运行文件；Chrome 独立临时 profile / context + 随机 localhost。
// 本文件和所有输出归 E10 所有，不连接用户浏览器，也不读取玩家存储。
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http'),vm=require('node:vm'),crypto=require('node:crypto');
const playwright=require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {chromium,firefox,webkit}=playwright;
const {root,createStory,reach,finish,clone}=require('../../../任务拆分/全十章/校验/E08/fixture.cjs');
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
const output={task:'E10',date:'2026-10-23',scope:'E10 当前根目录正式十章独立浏览器自动验收；不访问玩家存储；模拟视口不等于实体设备，技术音频检查不等于人耳试听',formalIntegration:true,checks:[],screenshots:[],defects:[],environment:{platform:process.platform,arch:process.arch,node:process.version,playwright:require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json').version},notTested:[],pageErrors:[],storySha256:hash(fs.readFileSync(path.join(root,'story.js'))),runtimeHashes:Object.fromEntries(Object.entries(frozen).map(([f,b])=>[f,hash(b)]))};
const server=http.createServer((req,res)=>{const name=decodeURIComponent(req.url.split('?')[0]).replace(/^\//,'')||'index.html';const file=path.resolve(root,name);if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}try{const data=frozen[name]||fs.readFileSync(file);res.setHeader('Content-Type',name.endsWith('.js')?'text/javascript':name.endsWith('.css')?'text/css':name.endsWith('.webp')?'image/webp':'text/html');res.end(data);}catch{res.writeHead(404).end();}});
let browser,origin;
const filteredCase = process.env.E10_CASE || '';
const onlyExtended = process.env.E10_EXTENDED === '1';
const browserName=process.argv.find(x=>x.startsWith('--browser='))?.split('=')[1]||'chrome';
assert(['chrome','firefox'].includes(browserName),'仅支持已准备的独立Chrome/Firefox测试');
const screenshotDirectory=browserName==='chrome'?'screenshots':'screenshots-'+browserName;
const resultFilename=(onlyExtended?'extended-':'')+(browserName==='chrome'?'browser':browserName)+'-results.json';
output.browserName=browserName;
async function scenario(name,fn,{state,storyOverride,missingModule,viewport={width:1440,height:900},badAuto,missingImage,faults={},seedSlots={}}={}){
 if(filteredCase && !name.includes(filteredCase))return;
 const started=Date.now();
 const context=await browser.newContext({viewport});
 await context.route('**/*',route=>{const u=route.request().url();if(!u.startsWith(origin+'/'))return route.abort();if(storyOverride&&u.endsWith('/story.js'))return route.fulfill({contentType:'text/javascript',body:'window.RAIN_STORY='+JSON.stringify(storyOverride)+';'});if(missingModule&&u.endsWith('/'+missingModule))return route.fulfill({contentType:'text/javascript',body:'/* isolated missing module */'});if(missingImage&&u.endsWith('/'+missingImage))return route.fulfill({status:404,body:''});return route.continue();});
 await context.addInitScript(({PREFIX,settings,seed,faults,seedSlots})=>{
  const get=Storage.prototype.getItem,set=Storage.prototype.setItem,remove=Storage.prototype.removeItem;
  const store=localStorage,reads=[],writes=[],removes=[];
  const historical={'bijie-rain-demo:v1:auto':'old-v1','bijie-rain-demo:v0.3:auto':'old-v03','bijie-rain-demo:v0.4:auto':'old-v04','bijie-rain-demo:v0.4-background:auto':'old-background'};
  if(!sessionStorage.getItem('seeded')){for(const [k,v]of Object.entries(historical))set.call(store,k,v);set.call(store,PREFIX+'settings',JSON.stringify(settings));if(seed!=null)set.call(store,PREFIX+'auto',seed);for(const [k,v]of Object.entries(seedSlots))set.call(store,PREFIX+k,v);sessionStorage.setItem('seeded','yes');}
  Storage.prototype.getItem=function(k){if(this===store){reads.push(k);if(faults.readAll)throw new DOMException('E10隔离读取拒绝','SecurityError');if(k.includes('-backup:')&&faults.readBackup)throw new DOMException('E10隔离备份回读拒绝','SecurityError');if(k.includes('-backup:')&&faults.mismatchBackup&&get.call(this,k)!==null)return 'E10回读不匹配';}return get.call(this,k);};
  Storage.prototype.setItem=function(k,v){if(this===store){writes.push(k);if(faults.writeAll||(faults.writeBackup&&k.includes('-backup:')))throw new DOMException('E10隔离空间不足','QuotaExceededError');if(faults.writeSecurity)throw new DOMException('E10隔离写入拒绝','SecurityError');}return set.call(this,k,v);};
  Storage.prototype.removeItem=function(k){if(this===store)removes.push(k);return remove.call(this,k);};
  window.__e10={faults,rawWrite:(k,v)=>set.call(store,PREFIX+k,v),entries:()=>Object.fromEntries(Object.keys(store).map(k=>[k,get.call(store,k)])),reads,writes,removes,raw:k=>get.call(store,PREFIX+k),historical:()=>Object.fromEntries(Object.keys(historical).map(k=>[k,get.call(store,k)])),expected:historical};
 },{PREFIX,settings,seed:badAuto!==undefined?badAuto:state?encoded(state):null,faults,seedSlots});
 await context.addInitScript(audioProbe);
 const page=await context.newPage();page.setDefaultTimeout(10000);page.on('pageerror',e=>output.pageErrors.push({name,error:e.message}));
 try {await page.goto(origin,{waitUntil:'load'});await fn(page);if(!missingImage&&!missingModule){const broken=await page.locator('img[src]').evaluateAll(xs=>xs.filter(x=>!x.hidden&&x.getAttribute('src')&&x.complete&&x.naturalWidth===0).map(x=>({id:x.id,src:x.getAttribute('src')})));assert.deepEqual(broken,[],name+'可见图片加载失败');}const audit=await page.evaluate(()=>({reads:__e10.reads,writes:__e10.writes,removes:__e10.removes,actual:__e10.historical(),expected:__e10.expected}));assert.deepEqual(audit.actual,audit.expected);assert([...audit.reads,...audit.writes,...audit.removes].every(k=>k.startsWith(PREFIX)),name+'访问旧空间');output.checks.push({name,passed:true,milliseconds:Date.now()-started,reads:audit.reads.length,writes:audit.writes.length});}
 catch(error){output.checks.push({name,passed:false,milliseconds:Date.now()-started,error:error.stack});output.defects.push({name,error:error.message});try{await shot(page,'FAILED-'+output.checks.length);}catch{}console.error(name+': '+error.message);}
 finally{await context.close();}
}
async function load(page){await page.locator('#continue-btn').click();await page.waitForFunction(()=>document.body.dataset.screen!=='title');}
const snapshot=page=>page.evaluate(()=>JSON.parse(__e10.raw('auto')).state);
async function next(page){await page.waitForTimeout(350);await page.locator('#dialogue-box').click();}
async function shot(page,name){const file=path.join(__dirname,screenshotDirectory,name+'.png');fs.mkdirSync(path.dirname(file),{recursive:true});await page.screenshot({path:file,fullPage:true});output.screenshots.push(path.relative(root,file));}
async function reselect(page,id){await page.locator('[data-action="reselect"]:visible').click();await page.locator('[data-reselect-node="'+id+'"]').click();await page.getByRole('button',{name:'确认',exact:true}).click();}
(async()=>{
 output.environment.browserAvailability=browserAvailability();
 await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});origin='http://127.0.0.1:'+server.address().port;
 browser=browserName==='firefox'?await firefox.launch({headless:true,firefoxUserPrefs:{'network.proxy.type':0}}):await chromium.launch({channel:'chrome',headless:true});output.environment.browserVersion=browser.version();if(browserName==='firefox')output.environment.isolatedPreferences={'network.proxy.type':0,reason:'最小页面对照证明默认系统代理阻断localhost；仅当前临时Firefox profile直连，未改系统代理，见firefox-network-probe.json'};output.environment.localhostOrigin=origin;output.environment.profile='Playwright自动创建且销毁的独立临时'+browserName+' profile；每场景独立隔离context';
 output.waivedByUser=['真人连续阅读全文与阅读时长','人耳环境音试听、实际扬声器/耳机及听感'];
 output.notTested.push('Safari：根任务独立WebDriver探测因Allow remote automation关闭被拒绝；见../safari/probe-results.json，本浏览器脚本未启动Safari','Playwright WebKit：运行文件不存在；即便存在也不能称为Safari','实体手机：五视口仅'+browserName+'桌面模拟尺寸');
 if(browserName!=='firefox')output.notTested.push('Firefox：本报告仅涵盖Chrome；另见Firefox独立报告');
 if(!onlyExtended){
 await scenario('启动与新空间元信息',async p=>{assert.match(await p.title(),/全十章/);await p.locator('[data-action="start"]').click();const s=await p.evaluate(()=>JSON.parse(__e10.raw('auto')));assert.equal(s.contentVersion,1);assert.equal(s.contractVersion,'1.0.0');assert.equal(s.contentRevision,'nightshift-20261022-r1');assert.deepEqual(s.state.flags,{qiuMet:false,qiuForm:'sphere'});});
 await scenario('变身前一行→精确变身→说话头像→刷新恢复',async p=>{await load(p);assert.equal(await p.locator('#character').getAttribute('data-form'),'sphere');await next(p);assert.equal((await snapshot(p)).nodeId,reveal);assert.equal(await p.locator('#character').getAttribute('data-form'),'human');await next(p);await next(p);await next(p);assert.equal(await p.locator('#speaker-avatar').getAttribute('data-form'),'human');assert.equal(await p.locator('#speaker-avatar').getAttribute('data-dedicated-avatar'),'true');await shot(p,'human-transition-desktop');await p.reload({waitUntil:'load'});await load(p);assert.equal(await p.locator('#character').getAttribute('data-form'),'human');assert.equal(await p.locator('#speaker-avatar').getAttribute('data-form'),'human');},{state:at(previous)});
 await scenario('章末继续与立绘清理',async p=>{await load(p);assert(await p.locator('#end-character').isHidden());assert.equal(await p.locator('#end-continue').innerText(),'继续第9章 ↗');await p.locator('#end-continue').click();assert.equal((await snapshot(p)).nodeId,'tc_c09_common_entry');assert.equal(await p.locator('#character').getAttribute('src'),story.characters.shijiang.image);},{state:at(clearStage)});
 await scenario('结局人形与第九章重选',async p=>{await load(p);assert.equal(await p.locator('#end-character').getAttribute('data-form'),'human');assert(await p.locator('#end-continue').isHidden());assert.match(await p.locator('#end-kicker').innerText(),/全篇读完/);await shot(p,'ending-desktop');await reselect(p,'tc_c09_huangqiuqiu_relationship_choice');const s=await snapshot(p);assert.equal(s.nodeId,'tc_c09_huangqiuqiu_relationship_choice');assert.equal(s.flags.qiuForm,'human');assert(!Object.hasOwn(s.flags,'huangqiuqiuRelationship'));},{state:terminal});
 await scenario('第三章重选保留相识清除人形与后续选择',async p=>{await load(p);await p.locator('#end-replay-route').click();const s=await snapshot(p);assert.equal(s.nodeId,story.routeChoice);assert.equal(s.flags.qiuForm,'sphere');assert.equal(s.flags.qiuMet,true);assert(!Object.hasOwn(s.flags,'route'));assert.equal(await p.locator('[data-choice-index]').count(),7);},{state:terminal});
 await scenario('相对日期与回顾无历史形象回填',async p=>{await load(p);assert.equal(await p.locator('#scene-day').innerText(),'第76天后的数日');await p.locator('[data-action="history"]:visible').click();assert.match(await p.locator('#modal-body').innerText(),/第76天后的数日/);assert.equal(await p.locator('#modal-body img').count(),0);},{state:at(relative,{...qiu,huangqiuqiuRelationship:'friends'})});
 await scenario('手动保存与读取元信息',async p=>{await load(p);await p.locator('#game-screen [data-action="save"]').click();await p.getByRole('button',{name:/手动存档 1/}).click();const manual=await p.evaluate(()=>JSON.parse(__e10.raw('slot1')));assert.equal(manual.contractVersion,'1.0.0');await p.locator('#modal-close').click();await next(p);await p.locator('#game-screen [data-action="load"]').click();await p.getByRole('button',{name:/手动存档 1/}).click();assert.equal((await snapshot(p)).nodeId,previous);assert.equal(await p.locator('#character').getAttribute('data-form'),'sphere');},{state:at(previous)});
 await scenario('坏自动档保持字节且自动保存暂停',async p=>{assert(await p.locator('#continue-btn').isDisabled());assert.equal(await p.evaluate(()=>__e10.raw('auto')),'{corrupt-e08');assert.equal((await p.evaluate(()=>__e10.writes)).length,0);},{badAuto:'{corrupt-e08'});
 for(const [label,mutate]of [['未知能力',s=>s.requiredCapabilities.push('future-v2')],['不匹配契约',s=>s.contractVersion='2.0.0'],['缺失人形',s=>delete s.characters.huangqiuqiu.forms.human]]){const bad=clone(story);mutate(bad);await scenario('拒绝启动：'+label,async p=>{assert(await p.locator('[data-action="start"]').isDisabled());assert.equal((await p.evaluate(()=>__e10.reads)).length,0);assert.equal((await p.evaluate(()=>__e10.writes)).length,0);},{storyOverride:bad});}
 await scenario('缺显示组件拒绝启动且零存储访问',async p=>{assert(await p.locator('[data-action="start"]').isDisabled());assert.equal((await p.evaluate(()=>__e10.reads)).length,0);},{missingModule:'player-runtime.js'});
 const broken=story.characters.huangqiuqiu.forms.human.image;
 await scenario('人形文件缺失不回退球形',async p=>{await load(p);await p.waitForTimeout(100);assert.equal(await p.locator('#character').getAttribute('src'),broken);assert(await p.locator('#character').isHidden());assert.match(await p.locator('#toast').innerText(),/素材/);},{state:at(reveal),missingImage:broken});
 for(const [name,viewport]of [['desktop',{width:1440,height:900}],['laptop',{width:1280,height:720}],['phone',{width:390,height:844}],['small-phone',{width:360,height:640}],['landscape',{width:844,height:390}]])await scenario('视口与人形独立头像：'+name,async p=>{await load(p);await p.waitForTimeout(100);const bounds=await p.locator('#speaker-avatar').evaluate(el=>{const r=el.getBoundingClientRect(),a=el.parentElement.getBoundingClientRect();return {width:r.width,height:r.height,parentWidth:a.width,parentHeight:a.height,complete:el.complete&&el.naturalWidth>0};});assert(bounds.complete);assert(Math.abs(bounds.width-bounds.parentWidth)<=2.1,JSON.stringify(bounds));assert(Math.abs(bounds.height-bounds.parentHeight)<=2.1,JSON.stringify(bounds));assert(await p.locator('#character').isVisible());await shot(p,'human-'+name);},{state:at(talking),viewport});

 const sphereTalk=presentation.nodeRequests.find(p=>p.form==='sphere'&&story.nodes[p.nodeId]?.speaker==='huangqiuqiu').nodeId;
 await scenario('球形独立头像与等比显示',async p=>{await load(p);assert.equal(await p.locator('#speaker-avatar').getAttribute('data-form'),'sphere');assert.equal(await p.locator('#speaker-avatar').getAttribute('data-presentation'),'orb');assert.equal(await p.locator('#speaker-avatar').getAttribute('data-dedicated-avatar'),'true');await shot(p,'sphere-phone');},{state:at(sphereTalk),viewport:{width:390,height:844}});
 await scenario('小屏相对日序和七项选择可滚动触达',async p=>{await load(p);assert.equal(await p.locator('#scene-day').innerText(),'第76天后的数日');await shot(p,'relative-small-phone');await p.locator('[data-action="menu"]').click();await reselect(p,story.routeChoice);assert.equal(await p.locator('[data-choice-index]').count(),7);await p.locator('[data-choice-index="6"]').scrollIntoViewIfNeeded();await shot(p,'route-choice-small-phone');await p.waitForTimeout(350);await p.locator('[data-choice-index="6"]').click();assert.equal((await snapshot(p)).flags.route,'huangqiuqiu');},{state:at(relative,{...qiu,huangqiuqiuRelationship:'friends'}),viewport:{width:360,height:640}});
 await artScenarios();
 }
 await extendedScenarios();
 output.passed=output.checks.filter(x=>x.passed).length;output.failed=output.checks.filter(x=>!x.passed).length;
 assert.equal(output.pageErrors.length,0);
 assert.deepEqual(Object.fromEntries(runtimeNames.map(f=>[f,hash(fs.readFileSync(path.join(root,f)))])),output.runtimeHashes,'运行文件在测试中变化，须重跑');
 if(output.failed)process.exitCode=1;
})().catch(error=>{output.failed=(output.failed||0)+1;output.error=error.stack;process.exitCode=1;console.error(error.stack);}).finally(async()=>{if(browser)await browser.close();server.close();output.executedAt=new Date().toISOString();output.scopeFilter={onlyExtended,filteredCase};fs.writeFileSync(path.join(__dirname,resultFilename),JSON.stringify(output,null,2)+'\n');console.log(JSON.stringify({passed:output.passed??output.checks.filter(x=>x.passed).length,failed:output.failed,screenshots:output.screenshots.length}));});

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

function browserAvailability(){
 const availability={
  googleChrome:{path:'/Applications/Google Chrome.app',installed:fs.existsSync('/Applications/Google Chrome.app')},
  firefox:{applicationInstalled:fs.existsSync('/Applications/Firefox.app'),automationExecutable:firefox.executablePath(),automationInstalled:fs.existsSync(firefox.executablePath())},
  webkit:{automationExecutable:webkit.executablePath(),automationInstalled:fs.existsSync(webkit.executablePath()),notSafari:true},
  safari:{applicationInstalled:fs.existsSync('/Applications/Safari.app'),driverInstalled:fs.existsSync('/usr/bin/safaridriver'),launched:false,reason:'本脚本未启动Safari；独立WebDriver探测见单独报告'}
 };
 const probePath=path.join(__dirname,'../safari/probe-results.json');
 if(fs.existsSync(probePath)){const probe=JSON.parse(fs.readFileSync(probePath));availability.safari.separateProbe={path:'qa/ten-chapter/safari/probe-results.json',generatedAt:probe.generatedAt,status:probe.status,httpStatus:probe.blocker?.httpStatus,message:probe.blocker?.message};availability.safari.reason=probe.blocker?.message||'独立探测状态：'+probe.status;}
 return availability;
}
function audioProbe(){
 const Native=window.AudioContext||window.webkitAudioContext;
 const audit={supported:!!Native,created:0,resumes:0,bufferStarts:0,oscillatorStarts:0,trustedClicks:[],targets:[],buffers:[],contexts:[],gains:[]};
 window.__audio={read:()=>({supported:audit.supported,created:audit.created,resumes:audit.resumes,bufferStarts:audit.bufferStarts,oscillatorStarts:audit.oscillatorStarts,trustedClicks:audit.trustedClicks,targets:audit.targets,buffers:audit.buffers,states:audit.contexts.map(c=>c.state),gainValues:audit.gains.map(g=>g.gain.value)})};
 document.addEventListener('click',e=>audit.trustedClicks.push(e.isTrusted),true);
 if(!Native)return;
 class ObservedAudio extends Native {
  constructor(...args){
   super(...args);audit.created++;audit.contexts.push(this);
   const originalResume=this.resume.bind(this);this.resume=(...args)=>{audit.resumes++;return originalResume(...args);};
   const originalGain=this.createGain.bind(this);this.createGain=(...args)=>{const gain=originalGain(...args),index=audit.gains.length;audit.gains.push(gain);const target=gain.gain.setTargetAtTime.bind(gain.gain);gain.gain.setTargetAtTime=(value,...args)=>{audit.targets.push({index,value});return target(value,...args);};return gain;};
   const originalSource=this.createBufferSource.bind(this);this.createBufferSource=(...args)=>{const source=originalSource(...args),start=source.start.bind(source);source.start=(...args)=>{audit.bufferStarts++;const data=source.buffer?.getChannelData(0);if(data){let min=Infinity,max=-Infinity,sum=0;for(const value of data){min=Math.min(min,value);max=Math.max(max,value);sum+=value*value;}audit.buffers.push({samples:data.length,seconds:source.buffer.duration,loop:source.loop,min,max,rms:Math.sqrt(sum/data.length)});}return start(...args);};return source;};
   const originalOscillator=this.createOscillator.bind(this);this.createOscillator=(...args)=>{const oscillator=originalOscillator(...args),start=oscillator.start.bind(oscillator);oscillator.start=(...args)=>{audit.oscillatorStarts++;return start(...args);};return oscillator;};
  }
 }
 window.AudioContext=ObservedAudio;
 if(window.webkitAudioContext)window.webkitAudioContext=ObservedAudio;
}
function formalWitnesses(){
 const endings=new Map();let longest=null,pathCount=0,choiceForks=0;
 function visit(engine){
  for(let steps=0;steps<=Object.keys(story.nodes).length;steps++){
   const node=engine.current();
   if(node.type==='choice'){
    const state=engine.snapshot();const options=engine.availableChoices();assert(options.length>0);
    for(const {index}of options){choiceForks++;const branch=new StoryEngine(story,state);assert(branch.choose(index));visit(branch);}
    return;
   }
   if(node.type==='end'&&!node.next){
    pathCount++;const state=engine.snapshot();if(!endings.has(node.id))endings.set(node.id,state);
    if(!longest||state.history.length>longest.history.length)longest=state;
    return;
   }
   assert(engine.advance(),'正式路径中断：'+node.id);
  }
  assert.fail('实际故事疑似循环');
 }
 visit(new StoryEngine(story));
 const selections=Object.fromEntries(longest.choices.map(c=>[c.nodeId,c.value]));
 const beforeEnding=at(longest.history.at(-1).nodeId,selections);
 return {endings,longest,beforeEnding,pathCount,choiceForks};
}
async function timedClick(page,locator){
 await page.evaluate(()=>{window.__timing=null;document.addEventListener('click',()=>{const start=performance.now();requestAnimationFrame(()=>requestAnimationFrame(()=>window.__timing=performance.now()-start));},{capture:true,once:true});});
 await locator.click();await page.waitForFunction(()=>window.__timing!==null);
 return page.evaluate(()=>window.__timing);
}
async function extendedScenarios(){
 const witnesses=formalWitnesses();
 output.witnessGeneration={algorithm:'从正式StoryEngine逐个可见choice分叉，逐步advance到terminal；不指定旧路径数、不伪造history。仅复用E08的reach/finish纯行走助手，未调用其sample故事构建。',paths:witnesses.pathCount,choiceForks:witnesses.choiceForks,endings:witnesses.endings.size,longestHistoryEntries:witnesses.longest.history.length,longestEnding:witnesses.longest.nodeId,longestSelections:witnesses.longest.choices};
 assert.equal(witnesses.endings.size,Object.values(story.nodes).filter(n=>n.type==='end'&&!n.next).length);
 for(const [id,state]of witnesses.endings){
  await scenario('13结局浏览器逐一恢复：'+id,async p=>{
   await load(p);assert.equal(await p.locator('#end-screen').isVisible(),true);assert.equal((await snapshot(p)).nodeId,id);
   assert(await p.locator('#end-continue').isHidden());assert.match(await p.locator('#end-kicker').innerText(),/全篇读完/);
   if(state.flags.route==='huangqiuqiu')assert.equal(await p.locator('#end-character').getAttribute('data-form'),'human');
   await shot(p,'ending-'+id);assert.equal((await snapshot(p)).history.length,state.history.length);
  },{state});
 }
 for(const end of Object.values(story.nodes).filter(n=>n.type==='end'&&n.next)){
  await scenario('九章末中性底色与继续：'+end.id,async p=>{
   await load(p);assert.equal(await p.locator('#app').getAttribute('data-background-mode'),'neutral');
   assert(await p.locator('#scene-bg').isHidden());assert(await p.locator('#end-continue').isVisible());
   await p.locator('#end-continue').click();assert.equal((await snapshot(p)).nodeId,end.next);
  },{state:at(end.id)});
 }
 for(const [signal,reply]of [['record','reply'],['record','leave'],['ignore','reply'],['ignore','leave']]){
  await scenario('隐藏路线四种真实前情：'+signal+'/'+reply,async p=>{
   await load(p);const eligible=signal==='record'&&reply==='reply';
   assert.equal(await p.locator('[data-choice-index]').count(),eligible?7:6);
   assert.equal(await p.locator('[data-choice-index="6"]').count(),eligible?1:0);
   assert.equal((await snapshot(p)).flags.qiuMet,eligible);
  },{state:at(story.routeChoice,{qiuSignal:signal,qiuReply:reply})});
 }
 const choice=Object.values(story.nodes).filter(n=>n.type==='choice').sort((a,b)=>Math.max(...b.choices.map(c=>c.label.length))-Math.max(...a.choices.map(c=>c.label.length)))[0];
 const route=/tc_c\d+_([^_]+)_/.exec(choice.id)[1];
 output.longestOption={nodeId:choice.id,maxCharacters:Math.max(...choice.choices.map(c=>c.label.length)),labels:choice.choices.map(c=>c.label)};
 for(const [label,viewport]of [['small-phone',{width:360,height:640}],['landscape',{width:844,height:390}]]){
  await scenario('最长正式选项可滚动点击：'+label,async p=>{
   await load(p);assert.equal(await p.locator('[data-choice-index]').count(),choice.choices.length);
   const index=choice.choices.reduce((a,c,i)=>c.label.length>choice.choices[a].label.length?i:a,0);
   const button=p.locator('[data-choice-index="'+index+'"]');await button.scrollIntoViewIfNeeded();
   const box=await button.evaluate(el=>{const r=el.getBoundingClientRect();return {x:r.x,y:r.y,right:r.right,bottom:r.bottom,width:innerWidth,height:innerHeight,text:el.textContent};});
   assert(box.x>=-1&&box.right<=box.width+1&&box.y>=-1&&box.bottom<=box.height+1,JSON.stringify(box));
   assert(box.text.includes(choice.choices[index].label));await shot(p,'longest-choice-'+label);await p.waitForTimeout(350);await button.click();
   assert.equal((await snapshot(p)).flags[choice.flag],choice.choices[index].value);
  },{state:at(choice.id,{route}),viewport});
 }
 const map=JSON.parse(fs.readFileSync(path.join(root,'assets/ten-chapter/a06-scene-node-map.json')));
 for(const rule of map.cgRules.items.filter(x=>x.allowedNodeIds)){
  const selections=rule.id.includes('qiuqiu')?qiu:rule.id.includes('piao-choice')?{route:'piao'}:{route:'xiaoman'};
  await scenario('CG手动保存读取并回顾：'+rule.id,async p=>{
   await load(p);await p.waitForFunction(()=>document.getElementById('app').dataset.cgState==='ready');
   await p.locator('#game-screen [data-action="save"]').click();await p.getByRole('button',{name:/手动存档 1/}).click();await p.locator('#modal-close').click();
   const saved=await snapshot(p);await next(p);await p.locator('#game-screen [data-action="load"]').click();await p.getByRole('button',{name:/手动存档 1/}).click();
   assert.deepEqual(await snapshot(p),saved);await p.waitForFunction(()=>document.getElementById('app').dataset.cgState==='ready');assert.equal(await p.locator('#cg-image').getAttribute('src'),rule.file);
   await p.locator('[data-action="history"]:visible').click();assert.equal(await p.locator('.history-entry').count(),saved.history.length);await p.locator('#modal-close').click();
   assert.equal(await p.locator('#app').getAttribute('data-cg-state'),'ready');
  },{state:at(rule.enterAt,selections)});
 }
 await scenario('最长真实历史加载回顾保存读取性能',async p=>{
  const result={historyEntries:witnesses.beforeEnding.history.length,saveBytes:Buffer.byteLength(encoded(witnesses.beforeEnding)),timings:{}};
  result.timings.load=await timedClick(p,p.locator('#continue-btn'));
  assert.equal((await snapshot(p)).history.length,result.historyEntries);
  result.timings.history=await timedClick(p,p.locator('[data-action="history"]:visible'));
  assert.equal(await p.locator('.history-entry').count(),result.historyEntries);
  const scroll=await p.locator('#modal-body').evaluate(el=>{const end=el.scrollTop;el.scrollTop=0;const start=el.scrollTop;el.scrollTop=el.scrollHeight;return {atEnd:end>0,atStart:start===0,returnedToEnd:el.scrollTop>0,scrollHeight:el.scrollHeight,clientHeight:el.clientHeight};});
  assert(scroll.atEnd&&scroll.atStart&&scroll.returnedToEnd);result.scroll=scroll;await shot(p,'longest-history');await p.locator('#modal-close').click();
  result.timings.saveMenu=await timedClick(p,p.locator('#game-screen [data-action="save"]'));
  result.timings.manualSave=await timedClick(p,p.getByRole('button',{name:/手动存档 1/}));await p.locator('#modal-close').click();
  const baseline=await snapshot(p);await next(p);await p.locator('[data-action="load"]:visible').click();
  result.timings.manualLoad=await timedClick(p,p.getByRole('button',{name:/手动存档 1/}));assert.deepEqual(await snapshot(p),baseline);
  result.measurement='Trusted click捕获至第二个requestAnimationFrame，含真实同步恢复/DOM构建；单次本机观测，非性能基准分位数';
  output.longHistoryPerformance=result;
  for(const value of Object.values(result.timings))assert(value<5000,'单次动作阻塞超过5秒，应复核性能');
 },{state:witnesses.beforeEnding,viewport:{width:390,height:844}});
 await audioScenarios();await storageScenarios();
}
async function audioScenarios(){
 await scenario('音频真实AudioContext与可信点击技术核查',async p=>{
  let a=await p.evaluate(()=>__audio.read());assert(a.supported);assert.equal(a.created,0,'默认关闭应不创建AudioContext');
  await load(p);await p.locator('#game-screen [data-action="sound"]').click();
  await p.waitForFunction(()=>__audio.read().states[0]==='running');await p.waitForTimeout(100);
  a=await p.evaluate(()=>__audio.read());assert.equal(a.created,1);assert.equal(a.bufferStarts,1);assert(a.resumes>=1);assert(a.trustedClicks.every(Boolean));
  assert.equal(a.buffers[0].loop,true);assert.equal(a.buffers[0].seconds,3);assert(a.buffers[0].rms>0&&a.buffers[0].rms<1);assert(a.buffers[0].max<=1&&a.buffers[0].min>=-1);
  assert.equal(a.targets.filter(x=>x.index===0).at(-1).value,.35);
  await p.waitForTimeout(350);await p.locator('[data-choice-index="0"]').click();a=await p.evaluate(()=>__audio.read());assert.equal(a.oscillatorStarts,1,'正式选择应播放本机提示音');
  await p.locator('#game-screen [data-action="settings"]').click();a=await p.evaluate(()=>__audio.read());assert.equal(a.targets.filter(x=>x.index===0).at(-1).value,0,'弹窗应静音');
  await p.locator('#setting-volume').focus();await p.locator('#setting-volume').press('Home');for(let i=0;i<12;i++)await p.locator('#setting-volume').press('ArrowRight');await p.locator('#modal-close').click();a=await p.evaluate(()=>__audio.read());assert.equal(a.targets.filter(x=>x.index===0).at(-1).value,.6);
  await p.locator('#game-screen [data-action="sound"]').click();a=await p.evaluate(()=>__audio.read());assert.equal(a.targets.filter(x=>x.index===0).at(-1).value,0);
  assert.equal(await p.locator('#game-screen [data-action="sound"]').getAttribute('aria-pressed'),'false');await p.waitForTimeout(800);a=await p.evaluate(()=>__audio.read());assert(a.gainValues[0]<.001,'关闭后的真实主增益应衰减接近0');output.audioTechnical=a;
 },{state:at('tc_c01_common_rhythm_record_choice')});
 await scenario('预存声音开启未可信交互不自动播放',async p=>{
  assert.equal((await p.evaluate(()=>__audio.read())).created,0);
  await p.evaluate(()=>document.querySelector('[data-action="start"]').click());
  assert.equal((await p.evaluate(()=>__audio.read())).created,0,'程序click不能解锁声音');
  await p.locator('#game-screen [data-action="settings"]').click();await p.waitForFunction(()=>__audio.read().states[0]==='running');
  assert.equal((await p.evaluate(()=>__audio.read())).targets.filter(x=>x.index===0).at(-1).value,0);
 },{seedSlots:{settings:JSON.stringify({...settings,sound:true})}});
}
async function storageScenarios(){
 const good=encoded(at(previous)),manual=encoded(at('tc_c01_common_exit')),bad='{E10-corrupt-raw-\n 故障数据未改写';
 for(const fault of ['writeAll','writeSecurity'])await scenario('存储写入失败保留原自动手动档：'+fault,async p=>{
  await load(p);await next(p);assert.equal(await p.evaluate(()=>__e10.raw('auto')),good);
  await p.locator('#game-screen [data-action="save"]').click();await p.getByRole('button',{name:/手动存档 1/}).click();await p.getByRole('button',{name:'确认',exact:true}).click();
  assert.equal(await p.evaluate(()=>__e10.raw('slot1')),manual);assert.match(await p.locator('#toast').innerText(),/存储不可用|空间不足/);
 },{badAuto:good,seedSlots:{slot1:manual},faults:{[fault]:true}});
 await scenario('存储读取SecurityError不写入或覆盖原档',async p=>{
  assert(await p.locator('#continue-btn').isDisabled());await p.locator('[data-action="start"]').click();
  assert.equal(await p.locator('#game-screen').isVisible(),true);assert.equal(await p.evaluate(()=>__e10.raw('auto')),good);
  assert.equal(await p.evaluate(()=>__e10.raw('slot1')),manual);assert.equal((await p.evaluate(()=>__e10.writes)).length,0);
  assert.match(await p.locator('#toast').innerText(),/存储不可用|空间不足/);
 },{badAuto:good,seedSlots:{slot1:manual},faults:{readAll:true}});
 for(const fault of ['writeBackup','readBackup','mismatchBackup'])await scenario('损坏自动档备份失败原档保持：'+fault,async p=>{
  await p.locator('[data-action="start"]').click();await p.getByRole('button',{name:'确认',exact:true}).click();
  assert.equal(await p.evaluate(()=>__e10.raw('auto')),bad);assert.equal(await p.evaluate(()=>__e10.raw('slot1')),manual);
  assert.equal(await p.evaluate(()=>document.body.dataset.screen),'title');assert.match(await p.locator('#toast').innerText(),/备份失败/);
 },{badAuto:bad,seedSlots:{slot1:manual},faults:{[fault]:true}});
 await scenario('坏自动档确认备份后原字节可恢复且手动档保留',async p=>{
  await p.locator('[data-action="start"]').click();await p.getByRole('button',{name:'确认',exact:true}).click();
  const entries=await p.evaluate(()=>__e10.entries());const backups=Object.entries(entries).filter(([k])=>k.startsWith(PREFIX+'auto-backup:'));
  assert.equal(backups.length,1);assert.equal(backups[0][1],bad);assert.equal(await p.evaluate(()=>__e10.raw('slot1')),manual);
  assert.equal((await snapshot(p)).nodeId,story.start);
 },{badAuto:bad,seedSlots:{slot1:manual}});
 await scenario('确认期间原自动档变化重新确认且不覆盖',async p=>{
  await p.locator('[data-action="start"]').click();await p.evaluate(good=>__e10.rawWrite('auto',good),good);
  await p.getByRole('button',{name:'确认',exact:true}).click();assert.equal(await p.evaluate(()=>__e10.raw('auto')),good);
  assert.equal(await p.evaluate(()=>document.body.dataset.screen),'title');assert.match(await p.locator('#toast').innerText(),/已发生变化/);
 },{badAuto:bad});
 await scenario('坏手动档读取不改变当前进度或原档',async p=>{
  await load(p);const current=await snapshot(p);await p.locator('#game-screen [data-action="load"]').click();await p.getByRole('button',{name:/手动存档 1/}).click();
  assert.deepEqual(await snapshot(p),current);assert.equal(await p.evaluate(()=>__e10.raw('slot1')),bad);assert.match(await p.locator('#toast').innerText(),/不兼容或已损坏/);
 },{state:at(previous),seedSlots:{slot1:bad}});
}
