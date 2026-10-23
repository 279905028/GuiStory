'use strict';
// E01 契约与来源检查；不加载或执行游戏，不访问浏览器/玩家存档。
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const assert=require('node:assert/strict');
const base=__dirname, root=path.resolve(base,'../..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const digest=b=>crypto.createHash('sha256').update(b).digest('hex');
const clone=x=>JSON.parse(JSON.stringify(x));
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const allowed=(flags,conditions)=>conditions.every(c=>own(flags,c.flag)&&flags[c.flag]===c.value);
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const unique=(xs,name)=>assert.equal(new Set(xs).size,xs.length,name+'重复');

function validate(c){
 assert.equal(c.schemaVersion,1);assert.equal(c.contractVersion,'1.0.0');
 assert.equal(c.status,'E01-engineering-baseline-confirmed');
 assert.equal(c.chapters.length,10);assert.equal(c.routes.length,7);
 assert.equal(c.choices.length,19);assert.equal(c.choices.reduce((n,x)=>n+x.options.length,0),43);
 assert.equal(c.endings.length,13);assert.equal(Object.keys(c.states).length,21);
 unique(c.choices.map(x=>x.id),'选择ID');unique(c.routes.map(x=>x.id),'路线');unique(c.endings.map(x=>x.id),'结局');
 const nodePattern=new RegExp(c.interface.nodeIdPattern);
 const refs=[];
 function visit(x){
  if(!x||typeof x!=='object')return;
  if(x.file&&Number.isInteger(x.line)&&typeof x.raw==='string'){
   assert.equal(read(x.file).split('\n')[x.line-1],x.raw,`来源变动 ${x.file}:${x.line}`);refs.push(x);
  }
  if(x.file&&x.startLine){assert(x.endLine>=x.startLine);assert(x.endLine<=read(x.file).split('\n').length);}
  for(const v of Object.values(x))visit(v);
 }
 visit(c);
 for(const s of c.baseline.sourceManifest){
  const bytes=fs.readFileSync(path.join(root,s.file));assert.equal(digest(bytes),s.sha256,'正文指纹漂移 '+s.file);
  assert.equal(bytes.length,s.bytes);
 }
 assert.equal(c.baseline.sourceDigest,digest(c.baseline.sourceManifest.map(s=>s.file+'\0'+s.sha256).join('\n')));
 let sections=0;
 for(const [i,ch] of c.chapters.entries()){
  assert.equal(ch.id,i+1);assert(nodePattern.test(ch.entry));
  assert.equal(ch.sections.filter(s=>s.scope!=='common').length,i<2?0:7);
  for(const s of ch.sections){
   if(s.scope!=='common'){
    sections++;const r=c.routes.find(r=>r.id===s.scope);assert.equal(s.owner,r.owner);
    assert.equal(read(s.source.file).split('\n')[s.source.startLine-1],'## '+r.name);
   }
  }
  for(let j=1;j<ch.sections.length;j++)assert.equal(ch.sections[j].source.startLine,ch.sections[j-1].source.endLine+1);
  for(const a of ch.sceneAnchors)if(a.day!==null)assert(a.day>=ch.dayRange[0]&&a.day<=ch.dayRange[1],'标题日序越界');
  assert.equal(ch.next,i<9?c.chapters[i+1].entry:null);
  assert.equal(ch.exit,i===9?null:`tc_c${String(i+1).padStart(2,'0')}_common_exit`);
 }
 assert.equal(sections,56);
 for(const r of c.routes){
  assert.equal(r.chapters.length,8);
  for(const [i,b] of r.chapters.entries()){
   assert.equal(b.chapter,i+3);assert(nodePattern.test(b.entry));
   assert.equal(b.returnTo,c.chapters[b.chapter-1].exit);
  }
  for(const f of r.readFlags)assert(c.states[f],'未声明读取 '+f);
  for(const f of r.writeFlags)assert.equal(c.states[f].writer.owner,r.owner);
 }
 for(const q of c.choices){
  assert(nodePattern.test(q.id));const s=c.states[q.flag];assert(s,'未知状态');
  assert.equal(s.writer.nodeId,q.id);assert.equal(s.writer.kind,'choice');assert.equal(s.writer.owner,q.owner);
  assert.deepEqual(s.values,q.options.map(o=>o.value));unique(s.values,'选项值');
  for(const o of q.options){assert(o.source.raw.includes(o.label),'标签脱离原文 '+q.id);for(const condition of o.requires){assert(c.states[condition.flag].values.includes(condition.value));}}
 }
 const hiddenOption=c.choices.find(q=>q.flag==='route').options.find(o=>o.value==='huangqiuqiu');
 assert.deepEqual(hiddenOption.requires,c.hidden.routeRequires);
 assert.deepEqual(c.hidden.rawRequires,[{flag:'qiuSignal',value:'record'},{flag:'qiuReply',value:'reply'}]);
 assert.deepEqual(c.hidden.routeRequires,[...c.hidden.rawRequires,{flag:'qiuMet',value:true}]);
 assert(c.hidden.responseOptionAlwaysAvailable);
 assert.equal(c.choices.find(q=>q.flag==='piaoRelationship').chapter,3);
 assert.equal(c.choices.filter(q=>q.chapter===9).length,5);
 assert(!c.choices.some(q=>q.flag==='friendsRelationship'));
 assert.equal(c.callbackRules.length,20);
 for(const cb of c.callbackRules){const q=c.choices.find(q=>q.id===cb.choiceId);assert.equal(q.flag,cb.flag);assert(q.options.some(o=>o.value===cb.value));}
 for(const q of c.choices.filter(q=>q.chapter===4))assert.deepEqual(c.callbackRules.filter(cb=>cb.choiceId===q.id).map(x=>x.value),q.options.map(o=>o.value));
 assert.equal(c.piaoRelationshipBlocks.length,14);
 for(let ch=4;ch<=10;ch++)assert.deepEqual(c.piaoRelationshipBlocks.filter(b=>b.chapter===ch).map(b=>b.value),['dating','friends']);
 assert.equal(c.automaticEvents.length,2);
 for(const e of c.automaticEvents){
  assert(nodePattern.test(e.nodeId));assert.equal(e.type,'line');
  for(const [flag,value] of Object.entries(e.setFlags)){
   const s=c.states[flag];assert.equal(s.writer.nodeId,e.nodeId);assert.equal(s.writer.owner,e.owner);assert.equal(s.writer.kind,'onEnter');assert(s.values.includes(value));
  }
 }
 const met=c.automaticEvents.find(e=>e.id==='qiu-met'),human=c.automaticEvents.find(e=>e.id==='qiu-human');
 assert.equal(met.source.line,271);assert.deepEqual(met.requires,c.hidden.rawRequires);assert.deepEqual(met.setFlags,{qiuMet:true});
 assert.equal(human.source.line,527);assert.equal(human.day,55);assert.equal(human.time,'17:00');assert.equal(human.chapter,8);
 assert.deepEqual(human.setFlags,{qiuForm:'human'});assert.deepEqual(human.requires,[{flag:'route',value:'huangqiuqiu'},...c.hidden.routeRequires]);
 assert.deepEqual(c.interface.initialFlags,{qiuMet:false,qiuForm:'sphere'});
 assert.equal(c.interface.save.namespace,`bijie-rain-demo:ten-chapter:${c.contentRevision}:`);
 for(const e of c.endings){assert(nodePattern.test(e.id));assert(e.terminal);assert(c.routes.some(r=>r.id===e.route));}
 assert.equal(c.epilogues.length,2);assert.deepEqual(c.epilogues[0].all,[{flag:'route',value:'piao'},{flag:'piaoRelationship',value:'dating'}]);
 assert(c.epilogues[1].otherwise);assert(c.epilogues.every(e=>!e.terminal));assert(c.epilogues[1].forbiddenCharacters.includes('huangqiuqiu'));
 assert.equal(c.timeline.chapter6Flashbacks.length,2);assert.equal(c.timeline.inlineDayChanges.length,6);
 assert.deepEqual(c.timeline.inlineDayChanges.filter(x=>x.chapter===9).map(x=>x.day),[82,88,81,86]);
 assert.deepEqual(c.timeline.inlineDayChanges.filter(x=>x.chapter===6).map(x=>[x.day,x.time]),[[31,'凌晨'],[31,'06:00']]);
 assert.deepEqual(c.interface.presentation.presentationValues,{sphere:'orb',human:'human'});
 assert(c.interface.nodeFields.end.optional.includes('character'));
 assert(c.interface.requiredStoryFields.includes('backgrounds'));
 assert.deepEqual(c.interface.onEnter.requiredFields,['requires','setFlags']);
 assert.equal(c.assetRequests.length,10);assert.equal(c.assetPolicy.humanBaseStatus,'awaiting-user-art-review');assert.equal(c.assetPolicy.countsFrozen,false);
 return {sourceReferencesChecked:refs.length,routeSections:sections};
}

// 只演算契约的枚举状态，不替代正式节点图或真实引擎测试。
function model(c){
 const early=c.choices.filter(q=>q.chapter<3),route=c.choices.find(q=>q.flag==='route');
 const met=c.automaticEvents.find(e=>e.id==='qiu-met'),human=c.automaticEvents.find(e=>e.id==='qiu-human');
 const hits={},witnesses={},visitedOptions=new Set(),hiddenMatrix=new Map();let scenarios=0;
 function finish(flags,trace){
  const ends=c.endings.filter(e=>allowed(flags,e.requires));assert.equal(ends.length,1,'结局必须唯一');const end=ends[0];
  const epi=allowed(flags,c.epilogues[0].all)?c.epilogues[0]:c.epilogues[1];
  assert.equal(epi.id.endsWith('dating'),flags.route==='piao'&&flags.piaoRelationship==='dating');
  assert.equal(flags.qiuForm,flags.route==='huangqiuqiu'?'human':'sphere');
  if(end.requiredForm)assert.equal(flags.qiuForm,end.requiredForm);
  for(const r of c.routes.filter(r=>r.id!==flags.route)){
   assert(!own(flags,r.id+'Outing'));assert(!own(flags,r.id+'Relationship'));
  }
  const callbacks=c.callbackRules.filter(cb=>cb.kind==='chapter4-to-7'&&allowed(flags,[{flag:cb.flag,value:cb.value}]));assert.equal(callbacks.length,1);
  scenarios++;hits[end.id]=(hits[end.id]||0)+1;witnesses[end.id]||={choices:trace,epilogue:epi.id,finalForm:flags.qiuForm};
 }
 function pick(q,flags,trace,cont){for(const o of q.options.filter(o=>allowed(flags,o.requires))){visitedOptions.add(q.id+':'+o.value);cont({...flags,[q.flag]:o.value},trace.concat({choiceId:q.id,value:o.value}));}}
 function afterEarly(flags,trace){
  if(allowed(flags,met.requires))flags={...flags,...met.setFlags};
  const rawKey=flags.qiuSignal+'/'+flags.qiuReply;
  hiddenMatrix.set(rawKey,{met:flags.qiuMet,visible:allowed(flags,route.options.find(o=>o.value==='huangqiuqiu').requires)});
  // 此处是第三章重选必须回到的状态前缀，而非实际replayChoice验证。
  assert.equal(flags.qiuForm,'sphere');assert(!own(flags,'route'));
  pick(route,flags,trace,(rflags,rtrace)=>{
   const events=[...c.choices.filter(q=>q.route===rflags.route),human].sort((a,b)=>a.chapter-b.chapter||a.day-b.day);
   function step(i,s,t){
    if(i===events.length)return finish(s,t);
    const event=events[i];
    if(event.setFlags)return step(i+1,allowed(s,event.requires)?{...s,...event.setFlags}:s,t);
    pick(event,s,t,(ns,nt)=>step(i+1,ns,nt));
   }step(0,rflags,rtrace);
  });
 }
 function walk(i,flags,trace){if(i===early.length)return afterEarly(flags,trace);pick(early[i],flags,trace,(s,t)=>walk(i+1,s,t));}
 walk(0,clone(c.interface.initialFlags),[]);
 assert.equal(scenarios,736);assert.equal(Object.keys(hits).length,13);assert.equal(visitedOptions.size,43);
 assert.equal(hiddenMatrix.size,4);for(const [key,v] of hiddenMatrix)assert.equal(v.visible,key==='record/reply');
 return {modelScenarios:scenarios,coveredOptions:visitedOptions.size,coveredEndings:Object.keys(hits).length,hiddenMatrix:Object.fromEntries(hiddenMatrix),endingScenarios:hits,witnesses};
}

function negativeChecks(c){
 const cases=[
  ['重复选择ID',x=>x.choices[1].id=x.choices[0].id],
  ['隐藏条件被删',x=>x.choices.find(q=>q.flag==='route').options.at(-1).requires=[]],
  ['飘第九章重选',x=>x.choices.find(q=>q.flag==='piaoRelationship').chapter=9],
  ['球球恋爱门槛',x=>x.automaticEvents[1].requires.push({flag:'huangqiuqiuRelationship',value:'dating'})],
  ['按钮伪造',x=>x.choices[0].options[0].label='非原稿按钮'],
  ['正文指纹漂移',x=>x.baseline.sourceManifest[0].sha256='0'.repeat(64)],
  ['回收非法枚举',x=>x.callbackRules[0].value='unknown'],
  ['路线缺章',x=>x.routes[0].chapters.pop()],
  ['变身提前到场景入口',x=>x.automaticEvents[1].source.line=485],
  ['结局交叠',x=>x.endings[1].requires=clone(x.endings[0].requires)],
  ['婚宴出现球球',x=>x.epilogues[1].forbiddenCharacters=[]],
  ['存档空间复用',x=>x.interface.save.namespace='bijie-rain-demo:v0.4-background:']
 ];
 return cases.map(([name,mutate])=>{const test=clone(c);mutate(test);assert.throws(()=>{validate(test);model(test);},undefined,'未拒绝 '+name);return {name,rejected:true};});
}

function checkLinks(files){
 let checked=0;
 for(const file of files){
  for(const m of read(file).matchAll(/\[[^\]\n]+\]\(([^)]+)\)/g)){
   const target=m[1].split('#')[0];if(!target||/^[a-z]+:/i.test(target))continue;
   assert(fs.existsSync(path.resolve(root,path.dirname(file),decodeURIComponent(target))),'断链 '+file+' -> '+target);checked++;
  }
 }
 return checked;
}

function main(){
 const file=path.join(base,'contract.json'), c=JSON.parse(fs.readFileSync(file,'utf8'));
 const structural=validate(c),logic=model(c),mutations=negativeChecks(c);
 const protectedFiles=JSON.parse(fs.readFileSync(path.join(base,'校验/E01/protected-before.json'),'utf8'));
 const changed=protectedFiles.filter(f=>digest(fs.readFileSync(path.join(root,f.file)))!==f.sha256);assert.equal(changed.length,0,'受保护文件变化');
 const docs=['任务拆分/全十章/契约.md','任务拆分/全十章/交接/E01.md','任务拆分/全十章开发计划.md','TODO与多窗口提示词-v0.4.md','项目文档/故事/全十章审阅稿/README.md'];
 const links=checkLinks(docs);
 const report={status:'passed',scope:'E01 contract/source/abstract-state only',runAt:new Date().toISOString(),contractVersion:c.contractVersion,contentRevision:c.contentRevision,contractSha256:digest(fs.readFileSync(file)),sourceDigest:c.baseline.sourceDigest,...structural,...logic,negativeChecks:mutations,localLinksChecked:links,protectedFilesChecked:protectedFiles.length,protectedFilesChanged:changed,notExecuted:['正式故事构建','正式图与全文节点映射验收','真实引擎自动事件/恢复测试','浏览器/实体手机/声音/真人阅读','资源制作与采用','发布']};
 fs.writeFileSync(path.join(base,'校验/E01/verification.json'),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({status:report.status,sourceFiles:c.baseline.sourceManifest.length,...structural,modelScenarios:logic.modelScenarios,coveredEndings:logic.coveredEndings,coveredOptions:logic.coveredOptions,negativeChecks:mutations.length,localLinksChecked:links,protectedFilesChanged:changed}));
}
if(require.main===module)main();
module.exports={validate,model};
