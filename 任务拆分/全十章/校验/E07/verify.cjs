'use strict';

// E07 独立验收：直接读取冻结原稿、契约与已交付 JSON；不导入 E07 转录器。
// 只在本目录写测试产物，不执行 engine/game，不接触任何玩家存档。
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'../../../..');
const base=path.join(root,'任务拆分/全十章');
const {readJSON}=require(path.join(base,'build/json.cjs'));
const {loadProject,compileProject}=require(path.join(base,'build/compiler.cjs'));
const contract=readJSON(path.join(base,'contract.json'));
const art=readJSON(path.join(base,'美术清单.json'));
const routeFile=path.join(base,'routes/huangqiuqiu.json');
const moduleData=readJSON(routeFile);
const common=contract.chapters.map(ch=>readJSON(path.join(base,`common/ch${String(ch.id).padStart(2,'0')}.json`)));
const e04=['xiaoman','zhouzhi'].map(route=>readJSON(path.join(base,'routes',route+'.json')));
const spec=contract.routes.find(r=>r.id==='huangqiuqiu');
const clone=x=>JSON.parse(JSON.stringify(x));
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const pad=n=>String(n).padStart(2,'0');
const save=(name,x)=>fs.writeFileSync(path.join(__dirname,name),JSON.stringify(x,null,2)+'\n');
const lines=Object.fromEntries(contract.baseline.sourceManifest.map(s=>[s.file,fs.readFileSync(path.join(root,s.file),'utf8').split('\n')]));
const sourceFile=ch=>contract.baseline.sourceManifest[ch-1].file;
const bodyRows=m=>m.sourceMap.filter(r=>['dialogue','narration'].includes(r.kind));
const results=[],walks=[],hiddenWitnesses=[],negativeChecks=[];
let sourceSummary,compiled,allPaths,manifest;
function test(name,fn){try{const detail=fn();results.push({name,status:'passed',...(detail?{detail}:{})});}catch(error){results.push({name,status:'failed',message:error.message});}}
function srcNode(m,ch,line){const r=bodyRows(m).find(r=>r.file===sourceFile(ch)&&r.startLine===line);assert(r,`缺失第${ch}章第${line}行`);assert.equal(r.nodeIds.length,1);return m.nodes[r.nodeIds[0]];}
function isBody(raw){return raw.trim()&&!raw.startsWith('#')&&!/^\*\*(?:小选择|选择)：\*\*$/.test(raw)&&!raw.startsWith('- **');}
function normalized(ch,line){const raw=lines[sourceFile(ch)][line-1];return ch===7&&[519,521].includes(line)?raw.replace(/^\*\*如果选过[AB]：\*\*/,''):raw;}
// 独立逐句审阅得到的主角纯对白行；其他纯对白属于黄球球，混合叙述段归旁白。
const wenwen={3:[992,1002,1010,1020,1032,1040,1056,1092],4:[535],5:[515,537,553,557],6:[485,497,519,529,537],7:[545],8:[481,503,511,531],9:[584],10:[537,575,587,595]};
function auditSources(m){
  const rows=bodyRows(m),mapped=new Map(),nonempty=[];
  for(const row of rows){
    assert.equal(row.startLine,row.endLine,'正文应逐段精确映射');assert.equal(row.nodeIds.length,1);
    const ch=contract.baseline.sourceManifest.find(s=>s.file===row.file)?.chapter;assert(ch>=3&&ch<=10);
    const key=row.file+':'+row.startLine;assert(!mapped.has(key),'重复正文来源 '+key);mapped.set(key,row);
    const text=normalized(ch,row.startLine),n=m.nodes[row.nodeIds[0]];
    assert(isBody(lines[row.file][row.startLine-1]),'说明、标题或按钮不应冒充正文');
    assert(n&&n.type==='line');assert.equal(n.text,text,'原文不一致 '+key);
    const dialogue=/^“[^”]*”$/.test(text);assert.equal(row.kind,dialogue?'dialogue':'narration');
    assert.equal(n.speaker,dialogue?(wenwen[ch].includes(row.startLine)?'wenwen':'huangqiuqiu'):'narrator','说话者错误 '+key);
    assert(!m.exclusions.some(e=>e.file===row.file&&e.startLine<=row.startLine&&e.endLine>=row.startLine),'真实正文被排除');
  }
  for(const part of spec.chapters){const s=contract.chapters[part.chapter-1].sections.find(s=>s.scope==='huangqiuqiu').source;
    const coverage=new Set([...m.sourceMap,...m.exclusions].filter(r=>r.file===s.file).flatMap(r=>Array.from({length:r.endLine-r.startLine+1},(_,i)=>r.startLine+i)));
    for(let line=s.startLine;line<=s.endLine;line++){const raw=lines[s.file][line-1];if(!raw.trim())continue;nonempty.push(s.file+':'+line);assert(coverage.has(line),'非空行未覆盖 '+s.file+':'+line);if(isBody(raw))assert(mapped.has(s.file+':'+line),'正文漏转 '+s.file+':'+line);}
  }
  for(const e of m.exclusions){for(let line=e.startLine;line<=e.endLine;line++){const raw=lines[e.file][line-1];assert.equal(e.reason,'heading-only','路线仅允许标题排除');assert(raw.startsWith('#'),'排除项含真实正文');}}
  assert.deepEqual(new Set(rows.flatMap(r=>r.nodeIds)),new Set(Object.values(m.nodes).filter(n=>n.type==='line').map(n=>n.id)),'新增无来源对白');
  assert.equal(rows.length,301);return {paragraphs:rows.length,dialogue:rows.filter(r=>r.kind==='dialogue').length,narration:rows.filter(r=>r.kind==='narration').length,nonempty:nonempty.length,exclusions:m.exclusions.length};
}
// 源稿固定分支范围，不使用生成器块表或 delivery.json 来推断应播放文本。
function expected(ch,outing,relationship){
  const section=contract.chapters[ch-1].sections.find(s=>s.scope==='huangqiuqiu').source;
  let ranges=[[section.startLine,section.endLine]];
  if(ch===4)ranges=[[510,520],outing==='portrait'?[529,545]:[549,557],[561,581]];
  if(ch===7)ranges=[[501,515],outing==='portrait'?[519,519]:[521,521],[525,559]];
  if(ch===9)ranges=[[547,563],relationship==='dating'?[572,594]:[598,616]];
  if(ch===10)ranges=[relationship==='dating'?[533,567]:[571,603]];
  return ranges.flatMap(([a,b])=>Array.from({length:b-a+1},(_,i)=>a+i).filter(i=>isBody(lines[section.file][i-1])).map(i=>normalized(ch,i)));
}
const matches=(flags,c)=>Object.hasOwn(flags,c.flag)&&flags[c.flag]===c.value;
const allowed=(flags,cs=[])=>cs.every(c=>matches(flags,c));
function trace(story,start,initial,picks={},stopWhen=()=>false){
  const flags={...initial},visited=[],events=[],choices=[],snapshots=[];let id=start;
  for(let i=0;i<5000;i++){
    if(stopWhen(id))return {stop:id,flags,visited,events,choices,snapshots};
    const n=story.nodes[id];assert(n,'缺失节点 '+id);assert(!visited.includes(id),'重复播放 '+id);visited.push(id);
    const before={...flags};if(n.onEnter){assert(allowed(flags,n.onEnter.requires),'事件前置不成立 '+id);Object.assign(flags,n.onEnter.setFlags);events.push(id);}
    snapshots.push({id,before,after:{...flags}});
    if(n.type==='choice'){const o=n.choices.find(o=>o.value===picks[n.flag]);assert(o&&allowed(flags,o.requires),'选项不存在或资格不符 '+n.id);flags[n.flag]=o.value;choices.push({nodeId:id,flag:n.flag,value:o.value});id=o.next;}
    else if(n.type==='gate'){const c=n.cases.find(c=>matches(flags,c));assert(c||!n.exhaustive,'穷尽门禁未命中 '+id);id=c?.next||n.default;}
    else {if(!n.next)return {stop:id,flags,visited,events,choices,snapshots};id=n.next;}
  }
  throw Error('超过路径步数限制');
}
function routeWalk(m,outing,relationship){
  let flags={...contract.interface.initialFlags,route:'huangqiuqiu',qiuSignal:'record',qiuReply:'reply',qiuMet:true};const chapters=[],visited=[],snapshots=[];
  for(let ch=3;ch<=10;ch++){
    const t=trace(m,`tc_c${pad(ch)}_huangqiuqiu_entry`,flags,{huangqiuqiuOuting:outing,huangqiuqiuRelationship:relationship},id=>!m.nodes[id]);
    const text=t.visited.map(id=>m.nodes[id]).filter(n=>n.type==='line').map(n=>n.text);
    assert.deepEqual(text,expected(ch,outing,relationship),`第${ch}章原文路径遗漏、重复或串分支`);
    assert.equal(t.stop,ch<10?`tc_c${pad(ch)}_common_exit`:`tc_c10_huangqiuqiu_end_${relationship}`);
    assert.deepEqual(t.choices.map(x=>x.flag),ch===4?['huangqiuqiuOuting']:ch===9?['huangqiuqiuRelationship']:[]);
    flags=t.flags;visited.push(...t.visited);snapshots.push(...t.snapshots);chapters.push({chapter:ch,lines:text.length,stop:t.stop});
  }
  assert.equal(flags.qiuForm,'human');
  const event='tc_c08_huangqiuqiu_human_reveal',eventIndex=snapshots.findIndex(s=>s.id===event);assert(eventIndex>=0);
  snapshots.forEach((s,i)=>assert.equal(s.after.qiuForm,i<eventIndex?'sphere':'human','形态切换位置错误 '+s.id));assert.equal(snapshots[eventIndex].before.qiuForm,'sphere');
  return {outing,relationship,ending:`tc_c10_huangqiuqiu_end_${relationship}`,chapters,visited,snapshots};
}
function fixture(){
  const version={schemaVersion:1,contractVersion:contract.contractVersion,contentRevision:contract.contentRevision};
  const modules=[...clone(common),...clone(e04),clone(moduleData)],stops=[];
  for(const route of contract.routes.filter(r=>!['xiaoman','zhouzhi','huangqiuqiu'].includes(r.id))){
    const m={...version,moduleId:route.file.replace('.json',''),owner:route.owner,scenes:{},nodes:{},imports:[],exports:{},sourceMap:[],exclusions:[],assetRequests:[]};
    for(const part of route.chapters){const ch=contract.chapters[part.chapter-1],source=ch.sections.find(s=>s.scope===route.id).source,sid=part.entry.replace('tc_','ts_').replace('_entry','_e07_interface_stub');
      const scene={chapter:ch.id,title:'E07 外部路线接口桩',bg:'e07-interface-stub',time:'接口测试',chronology:{domain:ch.id===10?'two-years-later':'story-day',mode:'present'},location:'接口测试',day:ch.id===10?null:ch.dayRange[0],dayLabel:ch.id===10?'两年后':`第${ch.dayRange[0]}天`};if(ch.id<10)scene.chronology.day=scene.day;m.scenes[sid]=scene;
      m.nodes[part.entry]={id:part.entry,type:'line',scene:sid,speaker:'narrator',character:null,text:'【E07 测试接口桩，不是路线正文】',next:ch.id===10?null:ch.exit};m.exports[part.entry]=part.entry;
      m.sourceMap.push({file:source.file,startLine:source.startLine,endLine:source.startLine,nodeIds:[part.entry],kind:'control'});
      if(ch.id===10)stops.push(part.entry);else m.imports.push(ch.exit);
      if(route.id==='piao'&&ch.id===3){const q=contract.choices.find(q=>q.id==='tc_c03_piao_relationship_choice');m.nodes[part.entry].next=q.id;m.nodes[q.id]={id:q.id,type:'choice',scene:sid,flag:q.flag,text:'',choices:q.options.map(o=>({label:o.label,value:o.value,next:ch.exit}))};m.sourceMap.push({file:q.prompt.file,startLine:q.prompt.line,endLine:q.prompt.line,nodeIds:[q.id],kind:'control'});}
    }modules.push(m);
  }
  const bgs=[...new Set(modules.flatMap(m=>[...Object.values(m.scenes).map(s=>s.bg),...Object.values(m.nodes).map(n=>n.bg).filter(Boolean)]))];
  const bindings={...version,characters:Object.fromEntries(contract.characters.map(c=>[c.id,{name:c.name}])),backgrounds:Object.fromEntries(bgs.map(bg=>[bg,'sample://e07-interface/'+bg])),cgs:{},scenes:{},nodes:{}};
  return {modules,bindings:[bindings],contract:clone(contract),manifest:{...version,mode:'sample',modules:modules.map(m=>m.moduleId+'.json'),bindings:['bindings.json'],sample:{start:contract.interface.start,stops}}};
}
function writeFixture(p){const dir=path.join(__dirname,'fixture');fs.mkdirSync(dir,{recursive:true});const manifest=clone(p.manifest);
  for(let i=0;i<p.modules.length;i++){const m=p.modules[i];if(m.moduleId.startsWith('common/')||['routes/xiaoman','routes/zhouzhi','routes/huangqiuqiu'].includes(m.moduleId))manifest.modules[i]='../../../'+m.moduleId+'.json';else {const name='route-'+m.moduleId.split('/')[1]+'.json';manifest.modules[i]=name;fs.writeFileSync(path.join(dir,name),JSON.stringify(m,null,2)+'\n');}}
  fs.writeFileSync(path.join(dir,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');fs.writeFileSync(path.join(dir,'bindings.json'),JSON.stringify(p.bindings[0],null,2)+'\n');
  fs.writeFileSync(path.join(dir,'README.md'),'# E07 隔离拼接测试\n\n清单直接读取 E03 十份真实共通、E04 小满与周栀、E07 黄球球 JSON。孟遥、叶岚、飘、朋友职业线为明确接口测试桩，不读取其正在制作的真实模块。飘关系选择仅为公共后日谈条件测试。背景只使用 sample:// 语义占位，无真实美术绑定。本目录不能作为正式游戏或完整候选验收。\n');return path.join(dir,'manifest.json');}
function enumerate(story,stops){const done=[],pending=[{id:story.start,flags:{...story.initialFlags},visited:[],choices:[],events:[]}];
  while(pending.length){let {id,flags,visited,choices,events}=pending.pop();for(let i=0;i<5000;i++){
    const n=story.nodes[id];assert(n);assert(!visited.includes(id),'重复播放 '+id);visited=visited.concat(id);
    if(n.onEnter){assert(allowed(flags,n.onEnter.requires));flags={...flags,...n.onEnter.setFlags};events=events.concat(id);}
    if(stops.includes(id)||(n.type==='end'&&!n.next)){done.push({stop:id,flags,visited,choices,events});break;}
    if(n.type==='choice'){for(const o of n.choices.filter(o=>allowed(flags,o.requires)))pending.push({id:o.next,flags:{...flags,[n.flag]:o.value},visited,choices:choices.concat({nodeId:id,flag:n.flag,value:o.value}),events});break;}
    if(n.type==='gate'){const c=n.cases.find(c=>matches(flags,c));assert(c||!n.exhaustive);id=c?.next||n.default;}else{assert(n.next);id=n.next;}
    if(i===4999)assert.fail('超过枚举步数');
  }}return done;
}
function publicEpilogueAudit(story,t){
  const eps=t.visited.filter(id=>contract.epilogues.some(e=>e.id===id));assert.equal(eps.length,1,'后日谈应恰好一次');const expect=t.flags.route==='piao'&&t.flags.piaoRelationship==='dating'?'tc_c10_common_piao_dating':'tc_c10_common_piao_wedding';assert.equal(eps[0],expect);
  const common10=t.visited.filter(id=>/^tc_c10_common_/.test(id));for(const id of common10){const n=story.nodes[id];assert.notEqual(n.speaker,'huangqiuqiu','公共后日谈不应有球球发言');assert.notEqual(n.character,'huangqiuqiu','公共后日谈不应显示球球');assert(!/黄球球/.test(n.text||''),'公共后日谈泄露球球身份');}
  return eps[0];
}

test('冻结原稿指纹与契约源清单一致',()=>{for(const s of contract.baseline.sourceManifest)assert.equal(hash(fs.readFileSync(path.join(root,s.file))),s.sha256);});
test('301段正文逐字、说话者、全分支与排除项完整核对',()=>sourceSummary=auditSources(moduleData));
test('只导出八章入口与两个结局，读写和资产请求遵循契约',()=>{
  assert.equal(moduleData.owner,'E07');assert.deepEqual(Object.keys(moduleData.exports).sort(),[...spec.chapters.map(ch=>ch.entry),...contract.endings.filter(e=>e.route==='huangqiuqiu').map(e=>e.id)].sort());assert.deepEqual([...moduleData.imports].sort(),spec.chapters.map(ch=>ch.returnTo).filter(Boolean).sort());
  assert.deepEqual(Object.values(moduleData.nodes).filter(n=>n.type==='choice').map(n=>n.id).sort(),contract.choices.filter(q=>q.owner==='E07').map(q=>q.id).sort());
  assert.equal(moduleData.assetRequests.length,8);for(const r of moduleData.assetRequests)for(const id of r.a01Ids)assert(art.assets.some(a=>a.id===id),'未知资产语义 '+id);
  for(const s of Object.values(moduleData.scenes))assert(moduleData.assetRequests.find(r=>r.id===`e01-art-ch${pad(s.chapter)}`).a01Ids.includes(s.bg),'场景背景未登记');
});
for(const outing of ['portrait','story'])for(const relationship of ['dating','friends'])test(`真实球球路线 ${outing} × ${relationship} 全八章逐段路径`,()=>{const w=routeWalk(moduleData,outing,relationship);walks.push(w);return {chapters:w.chapters,ending:w.ending};});
test('四条路径覆盖 E07 所有节点、选项与门禁分支',()=>{assert.equal(walks.length,4);const reached=new Set(walks.flatMap(w=>w.visited));assert.deepEqual([...reached].sort(),Object.keys(moduleData.nodes).sort());for(const n of Object.values(moduleData.nodes).filter(n=>n.type==='gate'))for(const c of n.cases)assert(walks.some(w=>w.visited.includes(n.id)&&w.visited.includes(c.next)));});
test('第42天保持球形自主铺垫，第55天精确527行才变身',()=>{
  const event=contract.automaticEvents.find(e=>e.owner==='E07'),n=srcNode(moduleData,8,527);assert.equal(n.id,event.nodeId);assert.deepEqual(n.onEnter,{requires:event.requires,setFlags:event.setFlags});assert.deepEqual(Object.values(moduleData.nodes).filter(n=>n.onEnter).map(n=>n.id),[event.nodeId]);
  const s=moduleData.scenes[n.scene];assert.deepEqual([s.day,s.time],[55,'17:00']);
  const setup=srcNode(moduleData,7,553),setupScene=moduleData.scenes[setup.scene];assert.deepEqual([setupScene.day,setupScene.time],[42,'16:30']);
  for(const w of walks){const snap=line=>w.snapshots.find(s=>s.id===srcNode(moduleData,8,line).id);for(const line of [487,499,505,519,521,523,525])assert.deepEqual([snap(line).before.qiuForm,snap(line).after.qiuForm],['sphere','sphere']);
    assert.deepEqual([snap(527).before.qiuForm,snap(527).after.qiuForm],['sphere','human']);const ids=[505,521,523,525,527].map(line=>w.visited.indexOf(srcNode(moduleData,8,line).id));assert(ids.every((id,i)=>i===0||id>ids[i-1]),'松手、自主决定、退凳、变化、显露顺序错误');
    assert.equal(w.snapshots.find(s=>s.id===setup.id).after.qiuForm,'sphere');assert.equal(w.snapshots.find(s=>s.id==='tc_c09_huangqiuqiu_relationship_choice').before.qiuForm,'human');
    assert(w.snapshots.filter(s=>/^tc_c(?:09|10)_/.test(s.id)).every(s=>s.before.qiuForm==='human'&&s.after.qiuForm==='human'));}
});
test('第九章关系不反控变身，两个结局保持人形与各自正文',()=>{for(const w of walks){assert(w.snapshots.findIndex(s=>s.id==='tc_c08_huangqiuqiu_human_reveal')<w.snapshots.findIndex(s=>s.id==='tc_c09_huangqiuqiu_relationship_choice'));const n=moduleData.nodes[w.ending];assert.equal(n.type,'end');assert(!Object.hasOwn(n,'next'));assert.equal(n.endingId,w.ending);const s=moduleData.scenes[n.scene];assert.equal(s.day,null);assert.equal(s.dayLabel,'两年后');assert(/门内/.test(s.location),'结局立绘应处于门内场景');}});
test('E03共通＋E04双路线＋E07真实模块用E02隔离编译',()=>{manifest=writeFixture(fixture());compiled=compileProject(loadProject(manifest));save('fixture/build-report.json',{...compiled.report,scope:'E03真实共通+E04小满周栀+E07黄球球；其余四线/美术为明确测试桩'});assert.deepEqual(compiled.report.graph.coverage.unreachableNodes,[]);assert.deepEqual(compiled.report.graph.coverage.unreachableOptions,[]);assert.deepEqual(compiled.report.graph.coverage.reachedEndings,contract.endings.filter(e=>['xiaoman','zhouzhi','huangqiuqiu'].includes(e.route)).map(e=>e.id).sort());return compiled.report.graph.statistics;});
test('前两章32种前情：仅记录且回应相识，无资格不泄露身份',()=>{
  assert(compiled);let combinations=[{}];for(const q of contract.choices.filter(q=>q.owner==='E03'&&q.chapter<3))combinations=combinations.flatMap(p=>q.options.map(o=>({...p,[q.flag]:o.value})));assert.equal(combinations.length,32);
  for(const picks of combinations){const t=trace(compiled.story,compiled.story.start,compiled.story.initialFlags,picks,id=>id===contract.interface.routeChoice);const qualified=picks.qiuSignal==='record'&&picks.qiuReply==='reply';assert.equal(t.flags.qiuMet,qualified);assert.equal(t.flags.qiuForm,'sphere');assert.equal(t.events.includes('tc_c02_common_qiu_met'),qualified);
    const visible=compiled.story.nodes[t.stop].choices.filter(o=>allowed(t.flags,o.requires));assert.equal(visible.length,qualified?7:6);assert.equal(visible.some(o=>o.value==='huangqiuqiu'),qualified);assert(t.visited.includes('tc_c02_common_rhythm_reply_choice'),'第8天回应应始终可选');
    if(!qualified)for(const id of t.visited){const n=compiled.story.nodes[id];assert(!/黄球球/.test(n.text||''),'身份提前泄露 '+id);assert.notEqual(n.speaker,'huangqiuqiu');assert.notEqual(n.character,'huangqiuqiu');}
    hiddenWitnesses.push({picks,qualified,qiuMet:t.flags.qiuMet,visibleRoutes:visible.map(o=>o.value)});
  }return {combinations:hiddenWitnesses.length,qualified:hiddenWitnesses.filter(x=>x.qualified).length};
});
test('448条真实/桩拼接路径：后日谈唯一、婚宴无球球、路线不串线',()=>{
  assert(compiled);allPaths=enumerate(compiled.story,compiled.report.graph.coverage.reachedStops);assert.equal(allPaths.length,448);
  for(const t of allPaths){publicEpilogueAudit(compiled.story,t);for(const ch of contract.chapters)assert.equal(t.visited.filter(id=>id===ch.entry).length,1);for(const ch of contract.chapters.slice(0,9))assert.equal(t.visited.filter(id=>id===ch.exit).length,1);
    for(const ch of contract.chapters.slice(2)){const re=new RegExp(`^tc_c${pad(ch.id)}_(xiaoman|zhouzhi|mengyao|yelan|piao|friends|huangqiuqiu)_entry$`);assert.deepEqual(t.visited.filter(id=>re.test(id)),[`tc_c${pad(ch.id)}_${t.flags.route}_entry`]);}
    assert.equal(t.flags.qiuForm,t.flags.route==='huangqiuqiu'?'human':'sphere');
  }return {paths:allPaths.length,realEndings:compiled.report.graph.coverage.reachedEndings.length,stubBoundaries:compiled.report.graph.coverage.reachedStops.length};
});
test('8种合资格前情×4种球球经历完整接到两个真人形结局',()=>{
  assert(allPaths);const qiu=allPaths.filter(t=>t.flags.route==='huangqiuqiu');assert.equal(qiu.length,32);const counts={};
  for(const t of qiu){assert.equal(t.stop,`tc_c10_huangqiuqiu_end_${t.flags.huangqiuqiuRelationship}`);assert.deepEqual(t.events,['tc_c02_common_qiu_met','tc_c08_huangqiuqiu_human_reveal']);assert.equal(t.flags.qiuForm,'human');const key=t.flags.huangqiuqiuOuting+'/'+t.flags.huangqiuqiuRelationship;counts[key]=(counts[key]||0)+1;for(let ch=3;ch<=10;ch++){const texts=t.visited.filter(id=>id.startsWith(`tc_c${pad(ch)}_huangqiuqiu_`)).map(id=>compiled.story.nodes[id]).filter(n=>n.type==='line').map(n=>n.text);assert.deepEqual(texts,expected(ch,t.flags.huangqiuqiuOuting,t.flags.huangqiuqiuRelationship));}}
  assert.deepEqual(Object.values(counts),[8,8,8,8]);return counts;
});
function negative(name,fn){test('反例：'+name,()=>{assert.throws(fn);negativeChecks.push(name);});}
negative('正文多写一句被逐字核对拒绝',()=>{const m=clone(moduleData);srcNode(m,8,527).text+='新增剧情';auditSources(m);});
negative('正文漏映射被完整性核对拒绝',()=>{const m=clone(moduleData);m.sourceMap=m.sourceMap.filter(r=>!(r.file===sourceFile(8)&&r.startLine===523));auditSources(m);});
negative('正文伪装标题排除被拒绝',()=>{const m=clone(moduleData);m.exclusions.push({file:sourceFile(8),startLine:523,endLine:523,reason:'heading-only'});auditSources(m);});
negative('第七章回收分支交换被独立路径期望拒绝',()=>{const m=clone(moduleData),g=Object.values(m.nodes).find(n=>n.type==='gate'&&n.id.startsWith('tc_c07_'));[g.cases[0].next,g.cases[1].next]=[g.cases[1].next,g.cases[0].next];routeWalk(m,'portrait','dating');});
negative('提前到17点入口写人形被唯一写入点拒绝',()=>{const p=fixture(),m=p.modules.find(m=>m.moduleId==='routes/huangqiuqiu');srcNode(m,8,487).onEnter=clone(srcNode(m,8,527).onEnter);delete srcNode(m,8,527).onEnter;compileProject(p);});
negative('去掉527行自动事件无法通过形态图',()=>{const p=fixture();delete p.modules.find(m=>m.moduleId==='routes/huangqiuqiu').nodes.tc_c08_huangqiuqiu_human_reveal.onEnter;compileProject(p);});
negative('隐藏选项缺少相识门槛被契约拒绝',()=>{const p=fixture(),q=p.modules.find(m=>m.moduleId==='common/ch03').nodes.tc_c03_common_route_choice.choices.find(o=>o.value==='huangqiuqiu');q.requires=q.requires.filter(c=>c.flag!=='qiuMet');compileProject(p);});
negative('C10朋友误连恋人结局被状态条件拒绝',()=>{const p=fixture(),m=p.modules.find(m=>m.moduleId==='routes/huangqiuqiu');for(const n of Object.values(m.nodes))if(n.next==='tc_c10_huangqiuqiu_end_friends')n.next='tc_c10_huangqiuqiu_end_dating';compileProject(p);});
negative('公共婚宴显示球球被独立公共场合审计拒绝',()=>{assert(compiled&&allPaths);const story=clone(compiled.story);story.nodes.tc_c10_common_piao_wedding.character='huangqiuqiu';publicEpilogueAudit(story,allPaths.find(t=>t.flags.route==='huangqiuqiu'));});
negative('纯对白错标说话者被原稿独立表拒绝',()=>{const m=clone(moduleData);srcNode(m,3,992).speaker='huangqiuqiu';auditSources(m);});

test('正式构建入口仅 --check 执行，未生成正式游戏',()=>{assert(manifest);const output=execFileSync(process.execPath,[path.join(root,'任务拆分/三章扩展/build-story.cjs'),'--ten-chapter','--manifest',path.relative(root,manifest),'--check'],{cwd:root,encoding:'utf8'});save('fixture/cli-check.json',{command:'node 任务拆分/三章扩展/build-story.cjs --ten-chapter --manifest 任务拆分/全十章/校验/E07/fixture/manifest.json --check',stdout:output.trim(),formalIntegration:false});});
const protectedBefore=readJSON(path.join(__dirname,'protected-before.json'));const protectedFiles=Array.isArray(protectedBefore)?protectedBefore:protectedBefore.files;
test('保护范围内正式游戏、源稿、契约和既有交付指纹未变',()=>{for(const r of protectedFiles)assert.equal(hash(fs.readFileSync(path.join(root,r.file))),r.sha256,r.file+'发生变化');return {checked:protectedFiles.length};});
const status=results.every(t=>t.status==='passed')?'passed':'failed';
save('path-witnesses.json',{scope:'E03+E04+E07真实JSON的隔离静态路径；其余四路线为桩，不是播放器验收',formalIntegration:false,
  hiddenCombinations:hiddenWitnesses,qiuRoutes:walks.map(w=>({outing:w.outing,relationship:w.relationship,ending:w.ending,chapters:w.chapters,visited:w.visited,formSequence:w.snapshots.map(s=>({nodeId:s.id,before:s.before.qiuForm,after:s.after.qiuForm}))})),
  integratedPaths:(allPaths||[]).map(t=>({stop:t.stop,flags:t.flags,choices:t.choices,events:t.events,epilogues:t.visited.filter(id=>contract.epilogues.some(e=>e.id===id))}))});
save('verification.json',{status,runAt:new Date().toISOString(),contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,formalIntegration:false,
  scope:'E07正文/说话者/隐藏资格/变身/分支/结局及E03+真实E04+E07隔离编译；另四线和美术为明确测试桩',passed:results.filter(r=>r.status==='passed').length,failed:results.filter(r=>r.status==='failed').length,results,
  source:sourceSummary,totals:{nodes:Object.keys(moduleData.nodes).length,scenes:Object.keys(moduleData.scenes).length,qiuBranchPaths:walks.length,earlyCombinations:hiddenWitnesses.length,integratedPaths:allPaths?.length||0,negativeChecks:negativeChecks.length,protectedFiles:protectedFiles.length},
  inputFiles:compiled?.report.inputFiles||[],routeFile:{file:path.relative(root,routeFile),sha256:hash(fs.readFileSync(routeFile))},
  notExecuted:['E05/E06真实路线全文及全部13个结局','E08真实播放器/重选/存读档/形态恢复','A06真实美术及E09演出绑定','正式story.js替换与完整十章候选','浏览器/设备/声音/真人阅读','打包/部署/发布']});
console.log(JSON.stringify({status,passed:results.filter(r=>r.status==='passed').length,failed:results.filter(r=>r.status==='failed'),paragraphs:sourceSummary?.paragraphs,nodes:Object.keys(moduleData.nodes).length,paths:allPaths?.length,formalIntegration:false},null,2));
if(status!=='passed')process.exitCode=1;
