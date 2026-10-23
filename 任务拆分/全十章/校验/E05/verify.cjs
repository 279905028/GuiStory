'use strict';

// E05 原文与离线静态图检查。直接加载真实 E03/E04/E05；E06/E07仍是有标识的接口桩。
// 不加载旧引擎、不打开浏览器、不读取玩家存档；不能作为 E08/E10 的运行时验收。
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'../../../..'),base=path.join(root,'任务拆分/全十章');
const c=require(path.join(base,'contract.json')),a=require(path.join(base,'美术清单.json'));
const {loadProject,compileProject}=require(path.join(base,'build/compiler.cjs'));
const {readJSON}=require(path.join(base,'build/json.cjs'));
const {fixtures}=require(path.join(base,'common/qa/interface-fixture.cjs'));
const {build}=require('./build-routes.cjs');
const clone=x=>JSON.parse(JSON.stringify(x)),json=x=>JSON.stringify(x,null,2)+'\n';
const hash=x=>crypto.createHash('sha256').update(x).digest('hex'),pad=n=>String(n).padStart(2,'0');
const routes=['mengyao','yelan'],modules=routes.map(r=>readJSON(path.join(base,'routes',r+'.json')));
const sources=Object.fromEntries(c.baseline.sourceManifest.map(s=>[s.file,fs.readFileSync(path.join(root,s.file),'utf8').split('\n')]));
const checks=[],sourceSummary={},walks=[],integrationWalks=[];
function check(name,action){try{const details=action();checks.push({name,status:'passed',...(details?{details}:{})});}catch(e){checks.push({name,status:'failed',message:e.message,details:e.details});}}
const bodyRows=m=>m.sourceMap.filter(r=>['dialogue','narration'].includes(r.kind));
function nodeAt(m,ch,line){const row=bodyRows(m).find(r=>r.file===c.baseline.sourceManifest[ch-1].file&&r.startLine===line);assert(row,'缺来源 '+ch+':'+line);return m.nodes[row.nodeIds[0]];}
const early={mengyao:{flag:'reunion',values:['nervous','availability'],lines:[397,399]},yelan:{flag:'yelanFirst',values:['game','food'],lines:[557,559]}};
const keepPrefixes=['若第四章去过旧书摊，','若第四章去过街机厅，'];
const keepText=[
  '那是夹在书里的收据，背面留着“破锅确实很好笑”。',
  '那是记着气垫球比分的小票，后来又添了两个人划船的记录。'
];
function prose(raw){return raw.trim()&&!raw.startsWith('#')&&!raw.startsWith('>')&&!raw.startsWith('**选择：');}
function auditSources(m){
  const route=m.moduleId.split('/')[1],rows=bodyRows(m),seen=new Set(),excluded=new Set();let transformations=0;
  for(const row of rows){
    assert.equal(row.startLine,row.endLine,'逐段映射不能混合行');const key=row.file+':'+row.startLine;assert(!seen.has(key),'重复段落');seen.add(key);
    const raw=sources[row.file][row.startLine-1],nodes=row.nodeIds.map(id=>m.nodes[id]);assert(prose(raw),'控制提示不能是正文');
    nodes.forEach(n=>assert.equal(n.type,'line'));
    if(row.file===c.baseline.sourceManifest[2].file&&early[route].lines.includes(row.startLine)){
      assert.equal(nodes.length,1);assert.equal(nodes[0].text,raw.replace(/^\*\*若[^*]+\*\*/,''));transformations++;
    }else if(route==='mengyao'&&row.file===c.baseline.sourceManifest[9].file&&row.startLine===263){
      assert.deepEqual(nodes.map(n=>n.text),keepText);assert.equal(nodes.map((n,i)=>keepPrefixes[i]+n.text).join(''),raw);transformations++;
    }else {assert.equal(nodes.length,1);assert.equal(nodes[0].text,raw,'正文变化 '+key);}
    assert.equal(row.kind,/^“[^”]*”$/.test(raw)?'dialogue':'narration');
    nodes.forEach(n=>{if(row.kind==='narration')assert.equal(n.speaker,'narrator');else assert([route,'wenwen','shijiang'].includes(n.speaker));});
  }
  for(const row of m.exclusions)for(let line=row.startLine;line<=row.endLine;line++){
    const raw=sources[row.file][line-1],key=row.file+':'+line;excluded.add(key);
    if(row.reason==='heading-only')assert(raw.startsWith('#'));
    else if(row.reason==='reading-rule')assert(raw.startsWith('>'));
    else if(row.reason==='choice-label-excerpt'){
      assert(seen.has(key),'按钮摘录不能代替完整对白');
      assert(c.choices.some(q=>q.route===route&&q.options.some(o=>o.sourceKind==='dialogue-excerpt'&&o.source.file===row.file&&o.source.line===line)));
      assert(m.sourceMap.some(r=>r.kind==='choice'&&r.file===row.file&&r.startLine===line),'摘录缺选择来源');
    }else assert.fail('错误排除理由');
  }
  let paragraphs=0,nonempty=0;
  for(let ch=3;ch<=10;ch++){
    const s=c.chapters[ch-1].sections.find(s=>s.scope===route).source;
    for(let line=s.startLine;line<=s.endLine;line++){
      const raw=sources[s.file][line-1],key=s.file+':'+line;if(!raw.trim())continue;nonempty++;
      if(prose(raw)){paragraphs++;assert(seen.has(key),'漏转正文 '+key);}
      else assert(excluded.has(key)||m.sourceMap.some(r=>r.file===s.file&&r.startLine<=line&&r.endLine>=line),'未覆盖标题／控制行 '+key);
    }
  }
  assert.equal(rows.length,paragraphs);assert.equal(transformations,route==='mengyao'?3:2);
  assert.equal(Object.values(m.nodes).filter(n=>n.type==='line').length,paragraphs+(route==='mengyao'?1:0));
  return {paragraphs,nonempty,bodyNodes:Object.values(m.nodes).filter(n=>n.type==='line').length,transformedRows:transformations,
    readingRules:m.exclusions.filter(x=>x.reason==='reading-rule').length,choiceLabelExcerpts:m.exclusions.filter(x=>x.reason==='choice-label-excerpt').length};
}

// 独立于转录器和 A01 分块，按原稿人工核对的条件段边界定义应播放序列。
const ranges={
  mengyao:{3:{before:[361,393],a:[397,397],b:[399,399],after:[401,531]},
    4:{before:[215,225],a:[231,257],b:[261,287],after:[291,299]},
    7:{before:[205,229],a:[235,255],b:[259,277],after:[281,289]},
    9:{before:[251,265],a:[271,303],b:[307,331]},10:{a:[237,283],b:[287,321]}},
  yelan:{3:{before:[537,553],a:[557,557],b:[559,559],after:[561,691]},
    4:{before:[305,317],a:[323,337],b:[341,357],after:[361,369]},
    7:{before:[295,313],a:[319,341],b:[345,365],after:[369,375]},
    9:{before:[337,349],a:[355,389],b:[393,419]},10:{a:[327,365],b:[369,395]}}
};
function expectedText(route,ch,prior,outing,relationship){
  const s=c.chapters[ch-1].sections.find(s=>s.scope===route).source,b=ranges[route][ch];
  const selection=ch===3?prior:ch===4||ch===7?outing:relationship;
  const spans=b?[b.before,b[selection===0?'a':'b'],b.after].filter(Boolean):[[s.startLine,s.endLine]];
  const rows=spans.flatMap(([from,to])=>sources[s.file].slice(from-1,to).map((raw,i)=>({raw,line:from+i}))).filter(r=>prose(r.raw));
  return rows.map(({raw,line})=>{
    if(ch===3&&early[route].lines.includes(line))return raw.replace(/^\*\*若[^*]+\*\*/,'');
    if(route==='mengyao'&&ch===10&&line===263)return keepText[outing];return raw;
  });
}
function gateTarget(n,flags){const index=n.cases.findIndex(k=>Object.hasOwn(flags,k.flag)&&flags[k.flag]===k.value);assert(index>=0,'状态未命中门禁 '+n.id);return {index,next:n.cases[index].next};}
function play(m,prior,outing,relationship){
  const route=m.moduleId.split('/')[1],flags={...c.interface.initialFlags,route,[early[route].flag]:early[route].values[prior]};
  const steps=[],gates=[],chapters=[];
  for(let ch=3;ch<=10;ch++){
    let id=`tc_c${pad(ch)}_${route}_entry`,ending=null;const seen=new Set(),text=[],writes=[];
    while(m.nodes[id]){
      assert(!seen.has(id),'路线成环');seen.add(id);steps.push(id);const n=m.nodes[id];
      if(n.type==='line'){assert(!n.onEnter);text.push(n.text);id=n.next;}
      else if(n.type==='choice'){assert([4,9].includes(ch));const o=n.choices[ch===4?outing:relationship];flags[n.flag]=o.value;writes.push(n.flag);id=o.next;}
      else if(n.type==='gate'){const result=gateTarget(n,flags);gates.push({nodeId:n.id,index:result.index});id=result.next;}
      else if(n.type==='end'){assert(!Object.hasOwn(n,'next'));assert.equal(n.text,'','结尾不重复正文');ending=n.id;break;}
      else assert.fail('未知节点');
    }
    if(ch<10)assert.equal(id,`tc_c${pad(ch)}_common_exit`,'跳过共通出口');else assert.equal(ending,`tc_c10_${route}_end_${relationship===0?'dating':'friends'}`);
    assert.deepEqual(text,expectedText(route,ch,prior,outing,relationship),'漏段／重复／串线 '+route+' ch'+ch);
    assert.deepEqual(writes,[4,9].includes(ch)?[route+(ch===4?'Outing':'Relationship')]:[],'写入时机错误');
    chapters.push({chapter:ch,lines:text.length,exit:ch===10?ending:id});
  }
  return {route,prior,outing,relationship,ending:chapters.at(-1).exit,chapters,gates,steps};
}
function auditDates(m){
  const route=m.moduleId.split('/')[1],at=(ch,line)=>m.scenes[nodeAt(m,ch,line).scene];
  for(const s of Object.values(m.scenes)){
    if(s.chapter===10){assert.equal(s.chronology.domain,'two-years-later');assert.equal(s.day,null);assert.equal(s.dayLabel,'两年后');}
    if(s.chronology.mode==='flashback'){assert.equal(s.chapter,6);assert.equal(s.day,30);assert.equal(s.time,route==='mengyao'?'19:20':'19:15');assert(s.title.includes('补叙'));}
  }
  const start=at(6,route==='mengyao'?195:269);assert.equal(start.chronology.mode,'flashback');
  const after=at(6,route==='mengyao'?215:285);assert.equal(after.day,32);assert.equal(after.chronology.mode,'present');
  assert(!after.bg.includes('echo'),'第32天私人约会不可当成回声营业');
  const late=at(9,route==='mengyao'?325:409);assert.equal(late.day,route==='mengyao'?81:86);assert.equal(late.chronology.day,late.day);assert.equal(late.time,'未注明');
  assert.equal(at(9,route==='mengyao'?307:393).day,route==='mengyao'?68:72);
  if(route==='mengyao'){
    assert.equal(at(6,209).day,31);assert.equal(at(6,211).day,31);assert.equal(at(6,209).time,'临近天亮');
    assert.equal(at(6,209).location,'网吧柜台');assert.equal(nodeAt(m,6,211).character,null);
    assert.notEqual(nodeAt(m,10,237).scene,nodeAt(m,10,245).scene);assert.equal(at(10,245).location,'另一家可借双人桌游的小店');
    assert.equal(at(4,243).bg,'tc-bg-tea-day');assert.equal(at(7,263).bg,'tc-bg-arcade-rowing');
  }else{
    assert.equal(at(7,295).day,39);assert.equal(at(7,309).day,40);assert.equal(at(7,313).day,40);
    assert.equal(at(6,329).location,'公交站');
    assert.notEqual(nodeAt(m,10,369).scene,nodeAt(m,10,383).scene);assert.equal(at(10,369).time,'19:20');
    assert.equal(at(10,383).time,'首个休息日的下午');assert(at(10,383).chronology.label.includes('另一天'));
  }
}
function auditPresence(m){
  const route=m.moduleId.split('/')[1];
  const remote=route==='mengyao'?[[3,361,367],[5,265,269],[6,209,211],[8,189,193],[9,325,331]]:
    [[3,537,545],[3,603,643],[5,303,321],[7,295,313],[7,345,345],[8,271,275],[9,409,419],[10,327,327],[10,369,381]];
  for(const [ch,from,to] of remote)for(const row of bodyRows(m).filter(r=>r.file===c.baseline.sourceManifest[ch-1].file&&r.startLine>=from&&r.endLine<=to))
    for(const id of row.nodeIds)assert.equal(m.nodes[id].character,null,'远程／概述段不可显示实体 '+id);
  if(route==='yelan'){assert.equal(nodeAt(m,10,383).character,'yelan');assert.equal(nodeAt(m,7,347).character,'yelan');}
  else assert.equal(nodeAt(m,3,445).speaker,'shijiang','师匠对白不得算作孟遥');
}
function auditCanon(m){
  const text=Object.values(m.nodes).filter(n=>n.type==='line').map(n=>n.text).join('\n');
  assert(!/摄影师|摄影助理|相机|调音台|回声领班|维修工|交接清单|保险销售|理财顾问/.test(text),'旧职业／道具残留');
  assert(!/\*\*若|若第四章去过|下列两段只读|\*\*选择|^>/m.test(text),'读稿控制标记泄漏');
  if(m.moduleId.endsWith('mengyao')){assert(text.includes('我问她做老师是不是很习惯'));assert(text.includes('没有约定复合'));}
  else {assert(text.includes('她仍在保险公司做内勤'));assert(text.includes('回声的收尾跟她的工作没有关系'));}
}
function auditInterface(m){
  const route=m.moduleId.split('/')[1],spec=c.routes.find(r=>r.id===route);
  assert.deepEqual(Object.keys(m.exports).sort(),[...spec.chapters.map(ch=>ch.entry),...c.endings.filter(e=>e.route===route).map(e=>e.id)].sort());
  assert.deepEqual(m.imports,spec.chapters.map(ch=>ch.returnTo).filter(Boolean));assert.equal(m.assetRequests.length,8);
  for(const request of m.assetRequests)for(const id of request.a01Ids)assert(a.assets.some(x=>x.id===id),'未知A01资源');
  for(const scene of Object.values(m.scenes))assert(m.assetRequests.find(r=>r.id===`e01-art-ch${pad(scene.chapter)}`).a01Ids.includes(scene.bg));
  for(const q of c.choices.filter(q=>q.route===route)){
    const n=m.nodes[q.id];assert.equal(n.text,q.prompt.raw.replace(/^\*\*选择：/,'').replace(/\*\*$/,''));
    assert.deepEqual(n.choices.map(o=>({label:o.label,value:o.value})),q.options.map(o=>({label:o.label,value:o.value})));
  }
}

function makeFixture(){
  const common=Array.from({length:10},(_,i)=>readJSON(path.join(base,`common/ch${pad(i+1)}.json`)));
  const p=fixtures(common),realRoutes=['xiaoman','zhouzhi',...routes];
  p.modules=p.modules.map(m=>realRoutes.includes(m.moduleId.split('/')[1])?readJSON(path.join(base,m.moduleId+'.json')):m);
  p.manifest.sample.stops=p.manifest.sample.stops.filter(id=>!realRoutes.some(r=>id===`tc_c10_${r}_entry`));
  p.bindings[0].backgrounds=Object.fromEntries([...new Set(p.modules.flatMap(m=>Object.values(m.scenes).map(s=>s.bg)))].map(id=>[id,'sample://e05-interface/'+id]));
  const dir=path.join(__dirname,'fixture');fs.mkdirSync(dir,{recursive:true});
  p.manifest.modules=p.modules.map(m=>{
    const actual=m.moduleId.startsWith('common/')||realRoutes.includes(m.moduleId.split('/')[1]);
    if(actual)return '../../../'+m.moduleId+'.json';
    const file='stub-'+m.moduleId.split('/')[1]+'.json';fs.writeFileSync(path.join(dir,file),json(m));return file;
  });
  fs.writeFileSync(path.join(dir,'manifest.json'),json(p.manifest));fs.writeFileSync(path.join(dir,'bindings.json'),json(p.bindings[0]));
  fs.writeFileSync(path.join(dir,'README.md'),'# E05 隔离组合\n\n清单直接读取 E03 十章共通、E04 小满／周栀和 E05 孟遥／叶岚真实源。飘、朋友职业、黄球球是 E03 提供的最小接口桩，均在第十章路线入口停止；球球事件桩不代表真实路线交付。背景使用 sample:// 语义占位。所有输出仅供静态组合验证，不能接入正式游戏，也不是播放器／存档／美术／浏览器验收。\n');
  return path.join(dir,'manifest.json');
}
function traceCombined(story,selections){
  let id=story.start;const flags={...story.initialFlags},steps=[],choices=[],seen=new Set();
  while(id){
    assert(!seen.has(id),'完整路径成环');seen.add(id);steps.push(id);const n=story.nodes[id];assert(n,'悬空节点');
    if(n.type==='line'){
      if(n.onEnter){for(const req of n.onEnter.requires||[])assert.equal(flags[req.flag],req.value);Object.assign(flags,n.onEnter.setFlags);}
      id=n.next;
    }else if(n.type==='choice'){
      const index=n.choices.findIndex(o=>o.value===selections[n.flag]);assert(index>=0,'未指定选择 '+n.flag);
      const option=n.choices[index];for(const req of option.requires||[])assert.equal(flags[req.flag],req.value);
      flags[n.flag]=option.value;choices.push({nodeId:n.id,index,flag:n.flag,value:option.value});id=option.next;
    }else if(n.type==='gate')id=gateTarget(n,flags).next;
    else if(n.type==='end'){if(n.next)id=n.next;else return {steps,choices,flags,ending:n.id};}
    else assert.fail('未知节点类型');
  }
  assert.fail('E05完整路径不应在桩终止');
}

for(const m of modules){
  const route=m.moduleId.split('/')[1];
  check(route+' 原文与全部来源覆盖',()=>sourceSummary[route]=auditSources(m));
  check(route+' 日期／补叙／两年后独立时段',()=>auditDates(m));
  check(route+' 远程演出与明确说话者',()=>auditPresence(m));
  check(route+' 职业事实与控制标记清理',()=>auditCanon(m));
  check(route+' 入口出口、原文按钮与资产ID',()=>auditInterface(m));
  for(let prior=0;prior<2;prior++)for(let outing=0;outing<2;outing++)for(let relationship=0;relationship<2;relationship++)
    check(`${route} 前情${prior+1}／经历${outing+1}／关系${relationship+1}`,()=>{const result=play(m,prior,outing,relationship);walks.push(result);return {ending:result.ending,chapters:result.chapters};});
}
check('E05所有节点、所有门禁分支均有路径见证',()=>{
  const visited=new Set(walks.flatMap(w=>w.steps)),gates=new Set(walks.flatMap(w=>w.gates.map(g=>g.nodeId+':'+g.index)));
  for(const m of modules)for(const n of Object.values(m.nodes)){assert(visited.has(n.id),'节点无见证 '+n.id);if(n.type==='gate')n.cases.forEach((k,i)=>assert(gates.has(n.id+':'+i)));}
  return {nodes:visited.size,gateBranches:gates.size,routePaths:walks.length,endings:[...new Set(walks.map(w=>w.ending))]};
});
check('重新转录与交付JSON字节一致',()=>{for(const r of build())assert.equal(json(r.module),fs.readFileSync(path.join(base,r.module.moduleId+'.json'),'utf8'));});
check('A01场段到节点及资源请求完整对应',()=>{
  const d=readJSON(path.join(__dirname,'delivery.json'));let blocks=0;
  for(const r of d.routes){const m=modules.find(m=>m.moduleId==='routes/'+r.route);
    assert.deepEqual(r.sourceIndex.map(({heading,...row})=>row),m.sourceMap);assert.deepEqual(r.exclusions,m.exclusions);
    const expected=a.chapters.flatMap(ch=>ch.sections.filter(s=>s.route===r.route));assert.equal(r.assetMappings.length,expected.length);
    for(const x of expected){const actual=r.assetMappings.find(b=>b.a01SectionId===x.id);assert(actual);assert.equal(actual.bindingStatus,'requested-not-adopted');
      const body=bodyRows(m).filter(row=>row.file===actual.file&&row.startLine>=x.sourceLineStart&&row.endLine<=x.sourceLineEnd).flatMap(row=>row.nodeIds);
      assert.deepEqual(actual.nodeIds,body);blocks++;}
  }
  return {a01Blocks:blocks};
});
const manifestFile=makeFixture();let project,compiled;
check('E02编译器检查真实E03／E04／E05组合与外部桩',()=>{project=loadProject(manifestFile);compiled=compileProject(project);return {nodeCount:compiled.report.nodeCount,graph:compiled.report.graph.statistics};});
check('组合清单直接读取全部14份真实模块',()=>{
  assert(project);const files=project.inputFiles.map(x=>x.file);for(let i=1;i<=10;i++)assert(files.includes(`任务拆分/全十章/common/ch${pad(i)}.json`));
  for(const r of ['xiaoman','zhouzhi',...routes])assert(files.includes(`任务拆分/全十章/routes/${r}.json`));
  assert.equal(project.manifest.mode,'sample');assert.equal(project.manifest.sample.stops.length,3);
});
check('32种前情×两路线×四种经历关系的256条共通接续',()=>{
  assert(compiled,'组合未编译');const story=compiled.story;const beginnings=[['qiuSignal',['record','ignore']],['reunion',['nervous','availability']],['qiuReply',['reply','leave']],['missedGame',['voice','reschedule']],['yelanFirst',['game','food']]];
  const contexts=beginnings.reduce((rows,[flag,values])=>rows.flatMap(row=>values.map(value=>({...row,[flag]:value}))),[{}]);
  for(const initial of contexts)for(const route of routes)for(let outing=0;outing<2;outing++)for(let relationship=0;relationship<2;relationship++){
    const selections={...initial,route,[route+'Outing']:c.choices.find(q=>q.flag===route+'Outing').options[outing].value,[route+'Relationship']:relationship===0?'dating':'friends'};
    const w=traceCombined(story,selections),prior=early[route].values.indexOf(initial[early[route].flag]);
    assert.equal(w.ending,`tc_c10_${route}_end_${relationship===0?'dating':'friends'}`);
    assert.equal(w.steps.filter(id=>id==='tc_c10_common_piao_wedding').length,1);assert(!w.steps.includes('tc_c10_common_piao_dating'),'公共后日谈串入飘交往');
    assert.equal(w.steps.filter(id=>id==='tc_c06_common_entry').length,1,'同一饭局重复');
    for(let ch=1;ch<10;ch++)assert.equal(w.steps.filter(id=>id===`tc_c${pad(ch)}_common_exit`).length,1);
    for(let ch=3;ch<=10;ch++){
      const actual=w.steps.filter(id=>id.startsWith(`tc_c${pad(ch)}_${route}_`)).map(id=>story.nodes[id]).filter(n=>n.type==='line').map(n=>n.text);
      assert.deepEqual(actual,expectedText(route,ch,prior,outing,relationship));
    }
    for(const id of w.steps){const scope=/^tc_c\d+_([^_]+)_/.exec(id)?.[1];assert(scope==='common'||scope===route,'私人经历串线');}
    integrationWalks.push({route,ending:w.ending,choices:w.choices,steps:w.steps.length,pathSha256:hash(json(w.steps)),commonEpilogue:'tc_c10_common_piao_wedding',
      ...(integrationWalks.length===0||!integrationWalks.some(x=>x.ending===w.ending)?{representativeSteps:w.steps}:{})});
  }
  return {earlyContexts:contexts.length,completeE05Paths:integrationWalks.length,endings:[...new Set(integrationWalks.map(w=>w.ending))],epiloguesPerPath:1};
});

function reject(name,make,audit){check('反例：'+name,()=>{let error;try{audit(make());}catch(e){error=e;}assert(error,'错误数据未被拒绝');return {rejected:true,reason:error.message.slice(0,220)};});}
for(const [i,route] of routes.entries()){
  const copy=()=>clone(modules[i]);
  for(const [suffix,label] of [['tc_c03_'+route+'_early_callback_gate','前情回应错配'],['tc_c07_'+route+'_outing_gate','第四章回收错配'],['tc_c10_'+route+'_entry','结局关系错配']])
    reject(route+' '+label,()=>{const m=copy(),g=m.nodes[suffix];[g.cases[0].next,g.cases[1].next]=[g.cases[1].next,g.cases[0].next];return m;},m=>play(m,0,0,0));
  reject(route+' 缺失前情不得默认分支',()=>copy(),m=>{gateTarget(m.nodes[`tc_c03_${route}_early_callback_gate`],{});});
  reject(route+' 补叙误标当下',()=>{const m=copy();m.scenes[nodeAt(m,6,route==='mengyao'?195:269).scene].chronology.mode='present';return m;},auditDates);
  reject(route+' 朋友后续日期未拆',()=>{const m=copy();m.scenes[nodeAt(m,9,route==='mengyao'?325:409).scene].day=route==='mengyao'?68:72;return m;},auditDates);
  reject(route+' 远程段误摆实体',()=>{const m=copy();nodeAt(m,route==='mengyao'?6:3,route==='mengyao'?211:615).character=route;return m;},auditPresence);
  reject(route+' 篡改正文',()=>{const m=copy();m.nodes[`tc_c03_${route}_entry`].text+='改写';return m;},auditSources);
  reject(route+' 丢失正文映射',()=>{const m=copy();m.sourceMap.splice(m.sourceMap.findIndex(r=>r.kind==='narration'),1);return m;},auditSources);
  reject(route+' 把按钮摘录当成完整回答',()=>{const m=copy(),line=route==='mengyao'?271:355;nodeAt(m,9,line).text=c.choices.find(q=>q.flag===route+'Relationship').options[0].label;return m;},auditSources);
  reject(route+' 章末绕过共通',()=>{const m=copy(),n=Object.values(m.nodes).find(n=>n.next==='tc_c03_common_exit');n.next=`tc_c04_${route}_entry`;return m;},m=>play(m,0,0,0));
}
reject('孟遥两年后票据回收反转',()=>{const m=clone(modules[0]),g=m.nodes.tc_c10_mengyao_keepsake_gate;[g.cases[0].next,g.cases[1].next]=[g.cases[1].next,g.cases[0].next];return m;},m=>play(m,0,0,0));
reject('叶岚两年后上班与打球混为同一时刻',()=>{const m=clone(modules[1]);m.scenes[nodeAt(m,10,383).scene].time='19:20';return m;},auditDates);
reject('旧职业残留',()=>{const m=clone(modules[0]);m.nodes.tc_c03_mengyao_entry.text+='她是一名摄影师。';return m;},auditCanon);
reject('前情读稿提示泄漏',()=>{const m=clone(modules[1]);nodeAt(m,3,557).text='**若上次从游戏开聊：**'+nodeAt(m,3,557).text;return m;},auditCanon);
if(project){
  const mutated=(route,action)=>{const p=clone(project);action(p.modules.find(m=>m.moduleId==='routes/'+route));return p;};
  reject('跨路线读取状态',()=>mutated('mengyao',m=>{m.nodes.tc_c07_mengyao_outing_gate.cases[0].flag='yelanOuting';m.nodes.tc_c07_mengyao_outing_gate.cases[0].value='kite';}),compileProject);
  reject('选择标签被改写',()=>mutated('yelan',m=>{m.nodes.tc_c09_yelan_relationship_choice.choices[0].label='我愿意';}),compileProject);
  reject('漏报外部出口',()=>mutated('mengyao',m=>m.imports.pop()),compileProject);
  reject('错误状态写入点',()=>mutated('yelan',m=>{m.nodes.tc_c09_yelan_relationship_choice.flag='yelanOuting';}),compileProject);
}
check('保护文件指纹未变',()=>{const before=readJSON(path.join(__dirname,'protected-before.json'));const changed=before.files.filter(x=>hash(fs.readFileSync(path.join(root,x.file)))!==x.sha256);assert.deepEqual(changed,[]);return {files:before.files.length,changed:[]};});

const failed=checks.filter(x=>x.status!=='passed');
const report={scope:'E05真实路线原文／状态路径及E03+E04+E05静态组合；E06/E07接口桩与sample资源',formalIntegration:false,
  contractVersion:c.contractVersion,contentRevision:c.contentRevision,createdAt:new Date().toISOString(),pass:failed.length===0,
  summary:{checks:checks.length,passed:checks.length-failed.length,failed:failed.length,negativeChecks:checks.filter(x=>x.name.startsWith('反例')).length,
    routePaths:walks.length,integrationPaths:integrationWalks.length,routeNodes:modules.reduce((n,m)=>n+Object.keys(m.nodes).length,0),routeScenes:modules.reduce((n,m)=>n+Object.keys(m.scenes).length,0)},
  sources:sourceSummary,files:routes.map(r=>({file:`任务拆分/全十章/routes/${r}.json`,sha256:hash(fs.readFileSync(path.join(base,'routes',r+'.json')))})),
  checks,routePaths:walks,integrationPaths:integrationWalks,isolatedGraph:compiled?.report.graph,
  notValidated:['E06/E07真实路线正文及全部13个终结','E08真实引擎、存读档与重选','A06采用美术及E09演出绑定','正式story.js集成','E10浏览器、实体手机、声音及真人阅读','打包与发布']};
fs.writeFileSync(path.join(__dirname,'verification.json'),json(report));
if(compiled)fs.writeFileSync(path.join(__dirname,'combined-build-report.json'),json(compiled.report));
console.log(json({pass:report.pass,summary:report.summary,sources:sourceSummary,failed}));if(failed.length)process.exitCode=1;
