'use strict';

// E06 正文、持续状态、公共后日谈与组合静态图。独立于真实引擎/浏览器，不访问玩家存档。
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'../../../..'),base=path.join(root,'任务拆分/全十章');
const {readJSON}=require(path.join(base,'build/json.cjs'));
const {loadProject,compileProject}=require(path.join(base,'build/compiler.cjs'));
const {build}=require('./build-routes.cjs');
const c=readJSON(path.join(base,'contract.json')),art=readJSON(path.join(base,'美术清单.json'));
const routeIds=['piao','friends'],modules=routeIds.map(r=>readJSON(path.join(base,'routes',r+'.json')));
const delivery=readJSON(path.join(__dirname,'delivery.json'));
const common=Array.from({length:10},(_,i)=>readJSON(path.join(base,'common',`ch${String(i+1).padStart(2,'0')}.json`)));
const source=Object.fromEntries(c.baseline.sourceManifest.map(s=>[s.file,fs.readFileSync(path.join(root,s.file),'utf8').split('\n')]));
const clone=x=>JSON.parse(JSON.stringify(x)),hash=x=>crypto.createHash('sha256').update(x).digest('hex'),pad=n=>String(n).padStart(2,'0');
const write=(file,data)=>fs.writeFileSync(path.join(__dirname,file),JSON.stringify(data,null,2)+'\n');
const matches=(flags,x)=>Object.hasOwn(flags,x.flag)&&flags[x.flag]===x.value;
const allowed=(flags,requirements=[])=>requirements.every(x=>matches(flags,x));
const checks=[],walks=[],sources={};
function check(name,fn){try{const details=fn();checks.push({name,status:'passed',...(details?{details}:{})});}catch(e){checks.push({name,status:'failed',message:e.message,details:e.details});}}
function body(m){return m.sourceMap.filter(r=>['dialogue','narration'].includes(r.kind));}
function fromLine(m,ch,line){const row=body(m).find(r=>r.file===c.baseline.sourceManifest[ch-1].file&&r.startLine===line);assert(row,'来源缺失');return row.nodeIds.map(id=>m.nodes[id]);}
function expectedParagraphs(file,start,end){
  const result=[];
  for(let line=start;line<=end;line++){
    const raw=source[file][line-1];
    if(!raw.trim()||raw.startsWith('#')||raw.startsWith('- **')||/^\*\*(?:选择：|小选择：|本线选择｜|回收第四章选择)/.test(raw))continue;
    result.push({line,text:raw.replace(/^\*\*如果选过[AB]：\*\*/,'')});
  }
  return result;
}
function auditSource(m){
  const route=m.moduleId.split('/')[1],expected=[],nonempty=[];
  for(let ch=3;ch<=10;ch++){
    const s=c.chapters[ch-1].sections.find(s=>s.scope===route).source;
    expected.push(...expectedParagraphs(s.file,s.startLine,s.endLine).map(r=>({...r,file:s.file})));
    for(let line=s.startLine;line<=s.endLine;line++)if(source[s.file][line-1].trim())nonempty.push({file:s.file,line});
  }
  const rows=body(m);
  assert.equal(rows.length,expected.length,'正文段数');
  for(const e of expected){
    const matches=rows.filter(r=>r.file===e.file&&r.startLine===e.line&&r.endLine===e.line);assert.equal(matches.length,1,'来源唯一 '+e.file+':'+e.line);
    const nodes=matches[0].nodeIds.map(id=>m.nodes[id]);assert(nodes.every(n=>n?.type==='line'));
    assert.equal(nodes.map(n=>n.text).join(''),e.text,'原文被改写 '+e.file+':'+e.line);
    assert(!m.exclusions.some(r=>r.file===e.file&&r.startLine<=e.line&&r.endLine>=e.line),'正文误排除');
  }
  assert.deepEqual(new Set(rows.flatMap(r=>r.nodeIds)),new Set(Object.values(m.nodes).filter(n=>n.type==='line').map(n=>n.id)),'无额外正文');
  for(const row of m.exclusions)for(let line=row.startLine;line<=row.endLine;line++){
    const raw=source[row.file][line-1];assert(row.reason==='heading-only'&&raw.startsWith('#')||row.reason==='reading-rule'&&raw==='**回收第四章选择，只读相应一段。**','排除理由不成立');
  }
  for(const e of nonempty)assert([...m.sourceMap,...m.exclusions].some(r=>r.file===e.file&&r.startLine<=e.line&&r.endLine>=e.line),'来源未覆盖 '+e.file+':'+e.line);
  return {paragraphs:expected.length,nonemptyLines:nonempty.length,lineNodes:Object.values(m.nodes).filter(n=>n.type==='line').length,exclusions:m.exclusions.length};
}

// 根据原稿独立登记分支范围；不读取转录器的分块/连边来决定正确路径。
const ranges={
  piao:{
    3:{before:[[695,815]],dating:[[822,846]],friends:[[848,870]]},
    4:{before:[[373,383]],paperboat:[[390,404]],signs:[[406,418]],dating:[[422,438]],friends:[[440,450]]},
    5:{before:[[365,405]],dating:[[409,431]],friends:[[433,453]]},
    6:{before:[[341,363]],dating:[[367,397]],friends:[[399,419]]},
    7:{before:[[379,385]],paperboat:[[389,389]],signs:[[391,391]],after:[[393,393]],dating:[[397,419]],friends:[[421,439]]},
    8:{before:[[337,355]],dating:[[359,381]],friends:[[383,401]]},
    9:{before:[[423,441]],dating:[[445,473]],friends:[[475,497]]},
    10:{dating:[[401,443]],friends:[[445,469]]}
  },
  friends:{4:{before:[[454,460]],show:[[464,480]],walk:[[482,496]],after:[[498,504]]},
    7:{show:[[447,459]],walk:[[461,471]],after:[[473,495]]}}
};
function expectedChapter(route,ch,outing,relationship){
  const spec=c.chapters[ch-1].sections.find(s=>s.scope===route).source,b=ranges[route][ch];
  const selected=b?[...(b.before||[]),...(b[outing]||[]),...(b.after||[]),...(relationship?b[relationship]||[]:[])]:[[spec.startLine,spec.endLine]];
  return selected.flatMap(([start,end])=>expectedParagraphs(spec.file,start,end));
}
function trace(nodes,start,initialFlags,pick={},stopWhen=id=>!nodes[id]){
  const flags={...initialFlags},steps=[],gates=[],choices=[],events=[];let id=start;
  for(let count=0;count<4000;count++){
    if(stopWhen(id))return {stop:id,flags,steps,gates,choices,events};
    assert(!steps.includes(id),'路径循环');steps.push(id);const n=nodes[id];assert(n,'断链 '+id);
    if(n.onEnter){assert(allowed(flags,n.onEnter.requires),'事件前置');Object.assign(flags,n.onEnter.setFlags);events.push(n.id);}
    if(n.type==='line'){id=n.next;}
    else if(n.type==='gate'){const index=n.cases.findIndex(x=>matches(flags,x));assert(index>=0||!n.exhaustive,'穷尽门未命中 '+id);gates.push({id,index});id=index<0?n.default:n.cases[index].next;}
    else if(n.type==='choice'){assert(Object.hasOwn(pick,n.flag),'选择未指定 '+n.flag);const index=n.choices.findIndex(x=>x.value===pick[n.flag]);assert(index>=0&&allowed(flags,n.choices[index].requires),'选项不可用');flags[n.flag]=n.choices[index].value;choices.push({id,flag:n.flag,value:flags[n.flag],index});id=n.choices[index].next;}
    else if(n.type==='end'){if(!n.next)return {stop:id,flags,steps,gates,choices,events};id=n.next;}
    else assert.fail('节点类型非法');
  }
  assert.fail('路径过长');
}
function play(m,outing,relationship){
  const route=m.moduleId.split('/')[1];let flags={...c.interface.initialFlags,route};
  const steps=[],gates=[],choices=[],chapters=[];
  const pick=route==='piao'?{piaoOuting:outing,piaoRelationship:relationship}:{friendsOuting:outing};
  for(let ch=3;ch<=10;ch++){
    const t=trace(m.nodes,`tc_c${pad(ch)}_${route}_entry`,flags,pick);flags=t.flags;
    const e=expectedChapter(route,ch,outing,relationship),file=c.baseline.sourceManifest[ch-1].file;
    const actual=t.steps.filter(id=>m.nodes[id].type==='line');
    const rows=body(m),origins=actual.map(id=>{const r=rows.find(r=>r.nodeIds.includes(id));assert(r);assert.equal(r.file,file);return r.startLine;});
    const paragraphs=origins.filter((line,i)=>i===0||line!==origins[i-1]);
    assert.deepEqual(paragraphs,e.map(r=>r.line),`第${ch}章播放顺序/分支正文`);
    assert.equal(actual.map(id=>m.nodes[id].text).join(''),e.map(r=>r.text).join(''),'路径正文一致');
    if(ch<10)assert.equal(t.stop,`tc_c${pad(ch)}_common_exit`,'必须回同章共通出口');
    else {const ending=c.endings.find(e=>e.route===route&&e.relationship===relationship);assert.equal(t.stop,ending.id);assert(allowed(flags,ending.requires));}
    if(route==='piao')assert.equal(flags.piaoRelationship,relationship,'第三章关系被改写');
    else assert(!Object.hasOwn(flags,'piaoRelationship')&&!Object.hasOwn(flags,'friendsRelationship'),'朋友线不得写关系');
    steps.push(...t.steps);gates.push(...t.gates);choices.push(...t.choices);chapters.push({chapter:ch,paragraphs:e.length,lineNodes:actual.length,stop:t.stop,flags:{...flags}});
  }
  assert.deepEqual(choices.map(x=>x.flag),route==='piao'?['piaoRelationship','piaoOuting']:['friendsOuting']);
  return {route,outing,relationship,steps,gates,choices,chapters,ending:chapters.at(-1).stop};
}

function auditDates(m){
  const route=m.moduleId.split('/')[1];
  function at(ch,line,day,time,bg){for(const n of fromLine(m,ch,line)){const s=m.scenes[n.scene];assert.equal(s.day,day);assert.equal(s.chronology.day,day);if(time)assert.equal(s.time,time);if(bg)assert.equal(s.bg,'tc-bg-'+bg);}}
  for(const s of Object.values(m.scenes)){
    assert.equal(s.chronology.clock,s.time);assert.equal(s.chronology.mode,'present');
    if(s.chapter===10){assert.equal(s.day,null);assert.equal(s.dayLabel,'两年后');assert.equal(s.chronology.domain,'two-years-later');}
    else {assert.equal(s.day,s.chronology.day);assert.equal(s.dayLabel,`第${s.day}天`);}
  }
  if(route==='piao'){
    at(3,866,21,'晚上','rental-night');at(4,424,24,'18:00','street-dusk');at(6,345,32,'15:30','echo-closed-day');
    const ns=fromLine(m,7,419);assert.equal(ns.length,2);assert.equal(m.scenes[ns[0].scene].day,39);assert.equal(m.scenes[ns[1].scene].day,41);
    assert(ns[1].text.startsWith('到了第四十一天'));at(9,447,74,'16:30');
    for(const [ch,line] of [[9,425],[9,447],[10,403]])assert.equal(m.scenes[fromLine(m,ch,line)[0].scene].location,'','未点名地点不能定为茶店');
    const summary=m.scenes[fromLine(m,7,431)[0].scene];assert(summary.chronology.label.includes('不推定具体哪一天'));
  } else {
    at(3,918,18,'20:00','rental-night');at(6,471,34,'下午');at(7,475,40,'20:00','rental-night');
    at(8,417,54,'晚上','netcafe-counter-night');at(9,525,80,'晚上','rental-night');at(9,533,90,'傍晚');
    for(const [ch,line] of [[9,503],[9,533]])assert.equal(m.scenes[fromLine(m,ch,line)[0].scene].location,'');
    const end=m.nodes.tc_c10_friends_end;assert.equal(m.scenes[end.scene].location,'回家路上');assert(fromLine(m,10,521)[0].text.includes('今晚不是我的班'));
  }
  assert(Object.values(m.nodes).filter(n=>n.type==='line').every(n=>n.character===null),'演出未采用前清除上一场人物');
}

for(const m of modules){
  const r=m.moduleId.split('/')[1];
  check(r+' 全部原文逐段一致、覆盖和排除理由',()=>sources[r]=auditSource(m));
  check(r+' 日序、未定地点和远程演出边界',()=>auditDates(m));
  check(r+' 公开接口和A01场段/资产请求完整',()=>{
    const spec=c.routes.find(x=>x.id===r),d=delivery.routes.find(x=>x.route===r);
    assert.deepEqual(Object.keys(m.exports).sort(),[...spec.chapters.map(x=>x.entry),...c.endings.filter(x=>x.route===r).map(x=>x.id)].sort());
    assert.deepEqual(m.imports,spec.chapters.map(x=>x.returnTo).filter(Boolean));
    const expected=art.chapters.flatMap(ch=>ch.sections.filter(s=>s.route===r).map(s=>s.id));assert.deepEqual(d.assetMappings.map(x=>x.a01SectionId),expected);
    for(const x of d.assetMappings){
      assert(x.nodeIds.length);assert.equal(x.bindingStatus,'requested-not-adopted');x.nodeIds.forEach(id=>assert(m.nodes[id]));x.sceneIds.forEach(id=>assert(m.scenes[id]));x.assetIds.forEach(id=>assert(art.assets.some(a=>a.id===id),'A01未知资源 '+id));
      const a=art.chapters.flatMap(ch=>ch.sections).find(s=>s.id===x.a01SectionId);
      assert.deepEqual(x.conditions,a.conditions||[]);assert.deepEqual(x.cgCandidates,a.cgCandidates||[]);
      for(const cg of art.assets.filter(a=>a.kind==='cg'&&a.cueIds?.includes(x.a01SectionId)))assert(x.assetIds.includes(cg.id),'CG候选语义未交接');
    }
    assert.equal(m.assetRequests.length,8);for(const s of Object.values(m.scenes))assert(m.assetRequests.find(a=>a.id===`e01-art-ch${pad(s.chapter)}`).a01Ids.includes(s.bg));
    return {entries:8,endings:c.endings.filter(x=>x.route===r).length,assetMappings:expected.length};
  });
  for(const outing of r==='piao'?['paperboat','signs']:['show','walk'])for(const rel of r==='piao'?['dating','friends']:[null])check(`${r} ${outing}/${rel||'独立结尾'} 第3—10章路径`,()=>{const w=play(m,outing,rel);walks.push(w);return {ending:w.ending,lineNodes:w.steps.filter(id=>m.nodes[id].type==='line').length,choices:w.choices};});
}
check('所有E06节点、选择、门禁分支和三个结局均有见证',()=>{
  const seen=new Set(walks.flatMap(w=>w.steps)),gates=new Set(walks.flatMap(w=>w.gates.map(g=>g.id+':'+g.index)));
  for(const m of modules)for(const n of Object.values(m.nodes)){assert(seen.has(n.id),'节点无见证 '+n.id);if(n.type==='gate')n.cases.forEach((_,i)=>assert(gates.has(n.id+':'+i)));}
  return {nodes:seen.size,gateBranches:gates.size,paths:walks.length,endings:[...new Set(walks.map(w=>w.ending))]};
});
check('转录可复现且不写共通或全局文件',()=>{const generated=build();for(const r of generated)assert.deepEqual(r.module,modules.find(m=>m.moduleId===r.module.moduleId));});

function auditEpilogues(m){
  const file=c.baseline.sourceManifest[9].file;
  const contexts=c.endings.map(e=>({ending:e.id,flags:Object.fromEntries(e.requires.map(x=>[x.flag,x.value]))}));
  const witnesses=[];
  for(const ctx of contexts){
    const t=trace(m.nodes,c.chapters[9].entry,ctx.flags,{},id=>!m.nodes[id]);
    assert.equal(t.stop,`tc_c10_${ctx.flags.route}_entry`,'后日谈须回原路线');
    const ep=c.epilogues.filter(e=>t.steps.includes(e.id));assert.equal(ep.length,1,'恰好一个公共后日谈');
    const dating=ctx.flags.route==='piao'&&ctx.flags.piaoRelationship==='dating';assert.equal(ep[0].id,dating?c.epilogues[0].id:c.epilogues[1].id,'后日谈关系错配');
    assert.equal(t.choices.length,0);assert.deepEqual(t.flags,ctx.flags,'公共后日谈不能改写关系');
    const nodes=t.steps.map(id=>m.nodes[id]).filter(n=>n.type==='line');
    const expected=[...expectedParagraphs(file,13,19),...expectedParagraphs(file,dating?21:41,dating?39:63)];
    // 婚宴段第43行是读稿提示，不应成为可播放正文。
    const actualExpected=expected.filter(e=>!e.text.startsWith('>'));
    assert.deepEqual(nodes.map(n=>n.text),actualExpected.map(e=>e.text),'公共后日谈原文顺序');
    assert(!nodes.some(n=>n.type==='end'||n.speaker==='huangqiuqiu'||n.character==='huangqiuqiu'));
    witnesses.push({...ctx,epilogue:ep[0].id,stop:t.stop,paragraphs:nodes.length});
  }
  for(const route of modules)assert(!route.sourceMap.some(r=>r.file===file&&r.startLine<65),'路线重复认领公共后日谈');
  return witnesses;
}
let epilogues=[];
check('E03公共后日谈13种结局上下文：文本/互斥/归属/路由',()=>{epilogues=auditEpilogues(common[9]);write('epilogue-review.json',{contractVersion:c.contractVersion,contentRevision:c.contentRevision,reviewer:'E06',status:'passed',commonModuleSha256:hash(fs.readFileSync(path.join(base,'common/ch10.json'))),witnesses:epilogues,scope:'只读交叉核对E03公共后日谈；未修改E03文件'});return {contexts:epilogues.length,dating:epilogues.filter(x=>x.epilogue===c.epilogues[0].id).length,wedding:epilogues.filter(x=>x.epilogue===c.epilogues[1].id).length};});
check('E03后日谈拒绝缺失/非法路由和飘关系',()=>{
  for(const flags of [{},{route:'unknown'},{route:'piao'},{route:'piao',piaoRelationship:'unknown'}])assert.throws(()=>trace(common[9].nodes,c.chapters[9].entry,flags));
});
check('飘后续章节拒绝缺失/非法关系，不能默认走朋友分支',()=>{
  const m=modules[0];for(let ch=4;ch<=10;ch++)for(const value of [undefined,'unknown']){
    const flags={route:'piao',piaoOuting:'paperboat'};if(value!==undefined)flags.piaoRelationship=value;
    assert.throws(()=>trace(m.nodes,`tc_c${pad(ch)}_piao_entry`,flags,{piaoOuting:'paperboat'}));
  }
});

// 读取真实 E03/E04/E06；其余三线直接引用 E03 的显式接口桩，不改写桩或历史证据。
let compiled,project,manifestFile;
check('E03+E04+E06真实模块组合编译（其余三线/美术为桩）',()=>{
  const initial=loadProject(path.join(base,'common/qa/fixtures/manifest.json'));
  const realRoutes=['xiaoman','zhouzhi','piao','friends'];
  const fixture=path.join(__dirname,'fixture');fs.mkdirSync(fixture,{recursive:true});
  const manifest=clone(initial.manifest);
  manifest.modules=initial.modules.map(m=>m.moduleId.startsWith('common/')?'../../../'+m.moduleId+'.json':realRoutes.includes(m.moduleId.split('/')[1])?'../../../'+m.moduleId+'.json':'../../../common/qa/fixtures/route-'+m.moduleId.split('/')[1]+'.json');
  manifest.sample.stops=manifest.sample.stops.filter(id=>!/^tc_c10_(xiaoman|zhouzhi|piao|friends)_entry$/.test(id));
  const selected=manifest.modules.map(f=>readJSON(path.resolve(fixture,f)));
  const bgIds=[...new Set(selected.flatMap(m=>Object.values(m.scenes).map(s=>s.bg)))];
  const bindings={schemaVersion:1,contractVersion:c.contractVersion,contentRevision:c.contentRevision,characters:Object.fromEntries(c.characters.map(x=>[x.id,{name:x.name}])),backgrounds:Object.fromEntries(bgIds.map(id=>[id,'sample://e06-integration/'+id])),cgs:{},scenes:{},nodes:{}};
  manifest.bindings=['bindings.json'];write('fixture/manifest.json',manifest);write('fixture/bindings.json',bindings);
  fs.writeFileSync(path.join(fixture,'README.md'),'# E06 组合静态验证\n\n清单直接读取真实 E03 十章共通、E04 小满/周栀和 E06 飘/朋友职业 JSON。孟遥、叶岚、黄球球使用 E03 接口桩并在第十章入口停止；全部背景为 sample://。不接入正式游戏，不证明真实引擎、存档或画面通过。\n');
  manifestFile=path.join(fixture,'manifest.json');project=loadProject(manifestFile);compiled=compileProject(project);
  const endings=c.endings.filter(e=>realRoutes.includes(e.route)).map(e=>e.id).sort();assert.deepEqual(compiled.report.graph.coverage.reachedEndings,endings);
  for(const r of routeIds)assert(project.inputFiles.some(x=>x.file===`任务拆分/全十章/routes/${r}.json`));
  write('integration-report.json',{scope:'真实E03+E04+E06，E05/E07为接口桩；不执行引擎',formalIntegration:false,inputFiles:project.inputFiles,graph:compiled.report.graph});
  return compiled.report.graph.statistics;
});
const integratedPaths=[];
check('32种前情×6条E06路径：共通接续、唯一后日谈和三结局',()=>{
  assert(compiled,'组合编译前置失败');
  for(let mask=0;mask<32;mask++)for(const w of walks){
    const choices={qiuSignal:mask&1?'record':'ignore',reunion:mask&2?'availability':'nervous',qiuReply:mask&4?'reply':'leave',missedGame:mask&8?'reschedule':'voice',yelanFirst:mask&16?'food':'game',route:w.route,
      ...(w.route==='piao'?{piaoOuting:w.outing,piaoRelationship:w.relationship}:{friendsOuting:w.outing})};
    const t=trace(compiled.story.nodes,compiled.story.start,c.interface.initialFlags,choices);
    assert.equal(t.stop,w.ending);assert.deepEqual(t.steps.filter(id=>modules.some(m=>m.nodes[id])),w.steps);
    const ep=c.epilogues.filter(e=>t.steps.includes(e.id));assert.equal(ep.length,1);assert.equal(ep[0].id,w.route==='piao'&&w.relationship==='dating'?c.epilogues[0].id:c.epilogues[1].id);
    for(let ch=1;ch<=9;ch++)assert.equal(t.steps.filter(id=>id===`tc_c${pad(ch)}_common_exit`).length,1);
    if(w.route==='piao')assert.equal(t.choices.filter(q=>q.flag==='piaoRelationship').length,1);else assert(!Object.hasOwn(t.flags,'piaoRelationship'));
    integratedPaths.push({beforeMask:mask,route:w.route,outing:w.outing,relationship:w.relationship,ending:t.stop,epilogue:ep[0].id,flags:t.flags,choices:t.choices,steps:t.steps.length});
  }
  write('integrated-paths.json',{scope:'真实E03+E06逐路径静态遍历；无播放器/存档',formalIntegration:false,paths:integratedPaths});
  return {preconditions:32,routeVariants:walks.length,paths:integratedPaths.length};
});

function rejects(name,mutation,audit){check('反例：'+name,()=>{const changed=mutation();let err;try{audit(changed);}catch(e){err=e;}assert(err,'错误数据未被拒绝');return {rejected:true,reason:err.message.slice(0,220)};});}
for(const [index,r] of routeIds.entries()){
  const copy=()=>clone(modules[index]);
  rejects(r+'篡改原文',()=>{const m=copy();Object.values(m.nodes).find(n=>n.type==='line').text+='新增';return m;},auditSource);
  rejects(r+'删除来源映射',()=>{const m=copy();m.sourceMap.splice(m.sourceMap.findIndex(r=>r.kind==='narration'),1);return m;},auditSource);
  rejects(r+'把真实正文当阅读提示排除',()=>{const m=copy(),r=body(m)[0];m.exclusions.push({file:r.file,startLine:r.startLine,endLine:r.endLine,reason:'reading-rule'});return m;},auditSource);
  rejects(r+'第七章回收颠倒',()=>{const m=copy(),g=m.nodes[r==='piao'?'tc_c07_piao_outing_gate':'tc_c07_friends_entry'];[g.cases[0].next,g.cases[1].next]=[g.cases[1].next,g.cases[0].next];return m;},m=>play(m,r==='piao'?'paperboat':'show',r==='piao'?'dating':null));
  rejects(r+'跳过公共章末',()=>{const m=copy();Object.values(m.nodes).find(n=>n.next==='tc_c03_common_exit').next=`tc_c04_${r}_entry`;return m;},m=>play(m,r==='piao'?'paperboat':'show',r==='piao'?'dating':null));
}
for(let ch=4;ch<=10;ch++)rejects(`飘第${ch}章关系串段`,()=>{const m=clone(modules[0]),g=m.nodes[ch===10?'tc_c10_piao_entry':`tc_c${pad(ch)}_piao_relationship_gate`];[g.cases[0].next,g.cases[1].next]=[g.cases[1].next,g.cases[0].next];return m;},m=>play(m,'paperboat','dating'));
rejects('第41天仍标第39天',()=>{const m=clone(modules[0]),n=fromLine(m,7,419)[1];m.scenes[n.scene].day=39;return m;},auditDates);
rejects('远程消息残留实体立绘',()=>{const m=clone(modules[1]);fromLine(m,3,918)[0].character='shijiang';return m;},auditDates);
rejects('恋人误进婚宴',()=>{const m=clone(common[9]);m.nodes.tc_c10_common_piao_relationship_gate.cases[0].next=c.epilogues[1].id;return m;},auditEpilogues);
rejects('婚宴完又播放恋人后日谈',()=>{const m=clone(common[9]);m.nodes.tc_c10_common_piao_wedding_09.next=c.epilogues[0].id;return m;},auditEpilogues);
function mutateProject(fn){const p=clone(project);fn(p,p.modules.find(m=>m.moduleId==='routes/piao'),p.modules.find(m=>m.moduleId==='routes/friends'));return p;}
rejects('第九章重新写入飘关系',()=>mutateProject((p,m)=>{m.nodes.tc_c09_piao_entry.onEnter={requires:[],setFlags:{piaoRelationship:'dating'}};}),compileProject);
rejects('朋友线读取飘关系',()=>mutateProject((p,m,f)=>{f.nodes.tc_c07_friends_entry.cases[0].flag='piaoRelationship';f.nodes.tc_c07_friends_entry.cases[0].value='dating';}),compileProject);
rejects('选择按钮改写',()=>mutateProject((p,m)=>{m.nodes.tc_c03_piao_relationship_choice.choices[0].label='另写台词';}),compileProject);
rejects('漏报公共出口',()=>mutateProject((p,m)=>{m.imports.pop();}),compileProject);
rejects('关系缺失默认走朋友分支',()=>{const m=clone(modules[0]);m.nodes.tc_c10_piao_entry.exhaustive=false;m.nodes.tc_c10_piao_entry.default=m.nodes.tc_c10_piao_entry.cases[1].next;return m;},m=>assert.throws(()=>trace(m.nodes,'tc_c10_piao_entry',{route:'piao'})));

check('项目构建入口检查与隔离输出',()=>{
  assert(compiled&&manifestFile,'编译前置失败');
  const script=path.join(root,'任务拆分/三章扩展/build-story.cjs'),relative=path.relative(root,manifestFile),commands=[];
  for(const extra of [['--check'],[]]){
    const args=[script,'--ten-chapter','--manifest',relative,...extra];
    const stdout=execFileSync(process.execPath,args,{cwd:root,encoding:'utf8'}).trim();
    commands.push({command:'node '+path.relative(root,script)+' --ten-chapter --manifest '+relative+(extra.length?' --check':''),stdout});
  }
  write('build-result.json',{scope:'E06组合静态图隔离输出，不替换根story.js',formalIntegration:false,commands});return {commands:commands.length};
});
check('保护文件指纹未变',()=>{
  const before=readJSON(path.join(__dirname,'protected-before.json'));
  const changed=before.files.filter(x=>hash(fs.readFileSync(path.join(root,x.file)))!==x.sha256);
  assert.deepEqual(changed,[]);return {files:before.files.length,changed:[]};
});

const failed=checks.filter(x=>x.status!=='passed');
const report={createdAt:new Date().toISOString(),scope:'E06真实路线/逐段原文/持续关系/E03后日谈交叉复核/含桩组合静态图',contractVersion:c.contractVersion,contentRevision:c.contentRevision,formalIntegration:false,pass:failed.length===0,
  summary:{checks:checks.length,passed:checks.length-failed.length,failed:failed.length,negativeChecks:checks.filter(x=>x.name.startsWith('反例：')).length,routePaths:walks.length,integratedPaths:integratedPaths.length,epilogueContexts:epilogues.length,
    nodes:modules.reduce((n,m)=>n+Object.keys(m.nodes).length,0),scenes:modules.reduce((n,m)=>n+Object.keys(m.scenes).length,0),paragraphs:Object.values(sources).reduce((n,s)=>n+s.paragraphs,0)},sources,checks,routePaths:walks,
  inputFiles:project?.inputFiles,notValidated:['E05/E07真实路线全量组合','E08真实引擎/自动事件/存读档','A06采用资源/E09演出绑定','正式十章story.js集成','浏览器/实体手机/声音/真人阅读','打包/发布']};
write('verification.json',report);console.log(JSON.stringify({pass:report.pass,summary:report.summary,failed},null,2));if(failed.length)process.exitCode=1;
