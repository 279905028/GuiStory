'use strict';

// 读取真实 E04 JSON。公共部分仅为隔离边界桩，不代表 E03 或 E08/E10 验收。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname,'../../../..');
const base = path.join(root,'任务拆分/全十章');
const c = require(path.join(base,'contract.json'));
const a = require(path.join(base,'美术清单.json'));
const {loadProject,compileProject}=require(path.join(base,'build/compiler.cjs'));
const {readJSON}=require(path.join(base,'build/json.cjs'));
const {build}=require('./build-routes.cjs');
const clone=x=>JSON.parse(JSON.stringify(x));
const json=x=>JSON.stringify(x,null,2)+'\n';
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const pad=n=>String(n).padStart(2,'0');
const routes=['xiaoman','zhouzhi'];
const modules=routes.map(r=>readJSON(path.join(base,'routes',r+'.json')));
const checks=[];
const sourceLines=Object.fromEntries(c.baseline.sourceManifest.map(s=>[s.file,fs.readFileSync(path.join(root,s.file),'utf8').split('\n')]));
function check(name,action) {
  try {const details=action();checks.push({name,status:'passed',...(details?{details}:{})});}
  catch(e){checks.push({name,status:'failed',message:e.message,details:e.details});}
}
function bodyRows(m){return m.sourceMap.filter(r=>['dialogue','narration'].includes(r.kind));}
function sourceNode(m,chapter,line){const row=bodyRows(m).find(r=>r.file===c.baseline.sourceManifest[chapter-1].file&&r.startLine===line);assert(row,'缺少原文节点');return m.nodes[row.nodeIds[0]];}

function auditSources(m) {
  const route=m.moduleId.split('/')[1];
  const body=bodyRows(m),mapped=new Set(),excluded=new Set();
  const spec=c.routes.find(r=>r.id===route);
  for(const row of body){
    assert.equal(row.startLine,row.endLine,'本任务每段来源独占一行');assert.equal(row.nodeIds.length,1);
    const key=row.file+':'+row.startLine;assert(!mapped.has(key),'正文重复映射');mapped.add(key);
    const raw=sourceLines[row.file][row.startLine-1],n=m.nodes[row.nodeIds[0]];
    assert.equal(n.type,'line');assert.equal(n.text,raw,'正文不一致 '+key);
    assert.equal(row.kind,/^“[^”]*”$/.test(raw)?'dialogue':'narration');
    if(row.kind==='narration')assert.equal(n.speaker,'narrator','混合段不可伪装成单人对白');
    else assert([route,'wenwen'].includes(n.speaker));
  }
  for(const row of m.exclusions){
    assert.equal(row.reason,'heading-only');
    for(let i=row.startLine;i<=row.endLine;i++){assert(sourceLines[row.file][i-1].startsWith('#'),'正文不能列为排除');excluded.add(row.file+':'+i);}
  }
  let paragraphs=0,nonempty=0;
  for(const ch of spec.chapters){
    const s=c.chapters[ch.chapter-1].sections.find(s=>s.scope===route).source;
    for(let i=s.startLine;i<=s.endLine;i++){
      const raw=sourceLines[s.file][i-1];if(!raw.trim())continue;nonempty++;
      if(!raw.startsWith('#')){paragraphs++;assert(mapped.has(s.file+':'+i),'正文漏转 '+s.file+':'+i);}
      else assert(excluded.has(s.file+':'+i)||m.sourceMap.some(r=>r.file===s.file&&r.startLine<=i&&r.endLine>=i),'元信息漏记');
    }
  }
  assert.equal(body.length,paragraphs);
  assert.equal(Object.values(m.nodes).filter(n=>n.type==='line').length,paragraphs,'存在无原文的新对白');
  return {paragraphs,nonempty,excludedHeadings:excluded.size};
}

// 独立于转录器／A01 分块，从审阅稿边界给出每条真实经历应播放的原文序列。
const branchRanges={
  xiaoman:{4:{before:[31,48],a:[49,80],b:[81,110],after:[111,134]},
    7:{before:[25,62],a:[63,82],b:[83,106],after:[107,122]},
    9:{before:[33,70],a:[71,110],b:[111,144]},10:{a:[69,112],b:[113,152]}},
  zhouzhi:{4:{before:[135,154],a:[155,174],b:[175,192],after:[193,210]},
    7:{before:[123,144],a:[145,162],b:[163,184],after:[185,200]},
    9:{before:[145,170],a:[171,212],b:[213,246]},10:{a:[157,198],b:[199,232]}}
};
function expectedText(route,chapter,outing,relationship){
  const s=c.chapters[chapter-1].sections.find(s=>s.scope===route).source;
  const b=branchRanges[route][chapter];
  const ranges=b?[b.before,b[(chapter===4||chapter===7?outing:relationship)===0?'a':'b'],b.after].filter(Boolean):[[s.startLine,s.endLine]];
  return ranges.flatMap(([start,end])=>sourceLines[s.file].slice(start-1,end).filter(l=>l.trim()&&!l.startsWith('#')));
}
function play(m,outing,relationship) {
  const route=m.moduleId.split('/')[1];
  const flags={...c.interface.initialFlags,route};
  const steps=[],chapters=[],gates=[];
  for(let chapter=3;chapter<=10;chapter++){
    let id=`tc_c${pad(chapter)}_${route}_entry`,ending=null;
    const visited=new Set(),text=[],writes=[];
    while(m.nodes[id]){
      assert(!visited.has(id),'路径出现环');visited.add(id);steps.push(id);
      const n=m.nodes[id];
      if(n.type==='line'){text.push(n.text);assert(!n.onEnter);id=n.next;}
      else if(n.type==='choice'){
        const option=n.choices[chapter===4?outing:relationship];assert(option);
        flags[n.flag]=option.value;writes.push(n.flag);id=option.next;
      }else if(n.type==='gate'){
        const index=n.cases.findIndex(k=>Object.hasOwn(flags,k.flag)&&flags[k.flag]===k.value);
        assert(index>=0,'合法路线状态未命中门禁');gates.push({nodeId:n.id,index});id=n.cases[index].next;
      }else if(n.type==='end'){ending=n.id;assert(!Object.hasOwn(n,'next'));break;}
      else assert.fail('未知节点');
    }
    if(chapter<10)assert.equal(id,`tc_c${pad(chapter)}_common_exit`,'章末未返回契约出口');
    else assert.equal(ending,`tc_c10_${route}_end_${relationship===0?'dating':'friends'}`);
    assert.deepEqual(text,expectedText(route,chapter,outing,relationship),'经历遗漏／重复／跨分支 '+route+' c'+chapter);
    assert.deepEqual(writes,[4,9].includes(chapter)?[route+(chapter===4?'Outing':'Relationship')]:[]);
    chapters.push({chapter,lines:text.length,exit:chapter===10?ending:id});
  }
  return {route,outing,relationship,ending:chapters.at(-1).exit,chapters,gates,steps};
}

function auditDates(m){
  const route=m.moduleId.split('/')[1],ch9=route==='xiaoman'?{line:139,day:82}:{line:233,day:88};
  const n=sourceNode(m,9,ch9.line),s=m.scenes[n.scene];
  assert.equal(s.day,ch9.day);assert.equal(s.chronology.day,ch9.day);assert.equal(s.time,'未注明');
  const earlier=sourceNode(m,9,route==='xiaoman'?113:215);
  assert.equal(m.scenes[earlier.scene].day,route==='xiaoman'?68:75);
  for(const scene of Object.values(m.scenes)){
    assert.equal(scene.chronology.mode,'present');
    if(scene.chapter===10){assert.equal(scene.day,null);assert.equal(scene.dayLabel,'两年后');}
  }
  if(route==='xiaoman'){
    assert.equal(m.scenes[sourceNode(m,4,113).scene].time,'17:30');
    assert.equal(m.scenes[sourceNode(m,7,109).scene].time,'19:30');
    for(const row of bodyRows(m).filter(r=>r.file===c.baseline.sourceManifest[7].file&&r.startLine<85))assert.equal(m.nodes[row.nodeIds[0]].character,null,'语音段误作在场');
  } else {
    assert.equal(m.scenes[sourceNode(m,6,129).scene].day,32,'饭后概述不重演第30天饭局');
    assert.equal(m.scenes[sourceNode(m,6,137).scene].bg,'tc-bg-echo-closed-day','第32天应为停业回声');
    assert.notEqual(sourceNode(m,8,129).scene,sourceNode(m,8,161).scene,'漂亮饭店与小锅饭不能同场');
    assert.equal(m.scenes[sourceNode(m,8,129).scene].location,'漂亮饭店门口');
    assert.equal(m.scenes[sourceNode(m,8,161).scene].location,'小锅饭店');
    assert.equal(sourceNode(m,8,167).scene,sourceNode(m,8,161).scene,'吃完碗里剩饭前不可切到街上');
    assert.equal(m.scenes[sourceNode(m,8,169).scene].location,'小锅饭店外街边');
    assert.equal(m.scenes[sourceNode(m,10,187).scene].location,'去周栀住处的路上');
    assert.equal(m.scenes[sourceNode(m,10,189).scene].location,'周栀住处外屋檐');
  }
}

function fixture() {
  const p=loadProject(path.join(base,'samples/e02/manifest.json'));
  p.modules=p.modules.filter(m=>m.moduleId!=='common/ch04'&&!routes.some(r=>m.moduleId==='routes/'+r));
  p.modules.push(...clone(modules));
  const stops=[];
  for(const m of p.modules.filter(m=>m.moduleId.startsWith('routes/')&&m.owner!=='E04')){
    const n=Object.values(m.nodes)[0];n.next=null;m.imports=[];stops.push(n.id);
  }
  for(let chapter=4;chapter<=10;chapter++){
    const ch=c.chapters[chapter-1],source=ch.sections.find(s=>s.scope==='common').source;
    const sid=`ts_c${pad(chapter)}_common_e04_boundary`,eid=`ts_c${pad(chapter)}_common_e04_end`;
    const m={schemaVersion:1,contractVersion:c.contractVersion,contentRevision:c.contentRevision,moduleId:`common/ch${pad(chapter)}`,owner:'E03',
      scenes:{},nodes:{},imports:routes.map(r=>`tc_c${pad(chapter)}_${r}_entry`),exports:{},sourceMap:[],exclusions:[],assetRequests:[]};
    m.scenes[sid]={chapter,title:ch.title,bg:'sample-bg',time:chapter===10?'两年后':'边界测试',
      chronology:chapter===10?{domain:'two-years-later',mode:'present'}:{domain:'story-day',mode:'present',day:ch.dayRange[0]},
      location:'',day:chapter===10?null:ch.dayRange[0],dayLabel:chapter===10?'两年后':`第${ch.dayRange[0]}天`};
    m.nodes[ch.entry]={id:ch.entry,type:'gate',scene:sid,cases:routes.map(r=>({flag:'route',value:r,next:`tc_c${pad(chapter)}_${r}_entry`})),default:null,exhaustive:true};
    m.exports[ch.entry]=ch.entry;
    if(chapter<10){
      m.scenes[eid]={chapter,title:ch.title,bg:'sample-bg',time:'章末',chronology:{domain:'chapter-range',mode:'present',label:ch.days},location:'',day:null,dayLabel:ch.days};
      m.nodes[ch.exit]={id:ch.exit,type:'end',scene:eid,title:ch.title,text:'',next:ch.next,nextChapter:c.chapters[chapter].title};
      m.exports[ch.exit]=ch.exit;m.imports.push(ch.next);
    }
    for(const id of Object.keys(m.nodes))m.sourceMap.push({file:source.file,startLine:source.startLine,endLine:source.startLine,nodeIds:[id],kind:'control'});
    p.modules.push(m);
  }
  p.bindings=[{schemaVersion:1,contractVersion:c.contractVersion,contentRevision:c.contentRevision,
    characters:Object.fromEntries(c.characters.map(x=>[x.id,{name:x.name}])),backgrounds:Object.fromEntries([...new Set(p.modules.flatMap(m=>Object.values(m.scenes).map(s=>s.bg)))].map(id=>[id,'sample://'+id])),cgs:{},scenes:{},nodes:{}}];
  p.manifest={schemaVersion:1,contractVersion:c.contractVersion,contentRevision:c.contentRevision,mode:'sample',
    modules:p.modules.map(m=>m.moduleId+'.json'),bindings:['bindings.json'],sample:{start:c.interface.start,stops}};
  delete p.inputFiles;
  return p;
}
function writeFixture(p){
  const dir=path.join(__dirname,'fixture');fs.mkdirSync(dir,{recursive:true});
  for(const m of p.modules){
    const file=path.join(dir,m.moduleId+'.json');fs.mkdirSync(path.dirname(file),{recursive:true});
    if(m.owner!=='E04')fs.writeFileSync(file,json(m));
  }
  const manifest=clone(p.manifest);
  manifest.modules=manifest.modules.map(f=>routes.some(r=>f===`routes/${r}.json`)?'../../../'+f:f);
  fs.writeFileSync(path.join(dir,'manifest.json'),json(manifest));fs.writeFileSync(path.join(dir,'bindings.json'),json(p.bindings[0]));
  fs.writeFileSync(path.join(dir,'README.md'),'# E04 隔离连接桩\n\n测试清单直接读取真实小满、周栀模块。其余路线只取 E02 样例首段并停止；公共第四至第十章只有路由和出口。背景为 sample:// 语义占位，无真实美术。本目录不交付为 E03 正文或正式游戏。\n');
  return path.join(dir,'manifest.json');
}

const sourceSummary={},walks=[];
for(const m of modules){
  const route=m.moduleId.split('/')[1];
  check(route+' 原文逐段一致与完整覆盖',()=>sourceSummary[route]=auditSources(m));
  check(route+' 日序／地点／远程演出',()=>auditDates(m));
  check(route+' 公开入口出口与资产请求',()=>{
    const spec=c.routes.find(r=>r.id===route),expectedExports=[...spec.chapters.map(ch=>ch.entry),...c.endings.filter(e=>e.route===route).map(e=>e.id)].sort();
    assert.deepEqual(Object.keys(m.exports).sort(),expectedExports);
    assert.deepEqual(m.imports,spec.chapters.map(ch=>ch.returnTo).filter(Boolean));
    assert.equal(m.assetRequests.length,8);
    for(const r of m.assetRequests)for(const id of r.a01Ids)assert(a.assets.some(x=>x.id===id),'未知 A01 ID');
    for(const s of Object.values(m.scenes))assert(m.assetRequests.find(r=>r.id===`e01-art-ch${pad(s.chapter)}`).a01Ids.includes(s.bg));
    if(route==='xiaoman'){
      const delivery=readJSON(path.join(__dirname,'delivery.json')).routes.find(r=>r.route===route);
      for(const id of ['a01-ch03-xiaoman-02','a01-ch03-xiaoman-03'])assert(!delivery.assetMappings.find(x=>x.a01SectionId===id).assetIds.includes('tc-look-xiaoman-work-apron'),'私下会面不请求工作围裙');
      assert(delivery.assetMappings.find(x=>x.a01SectionId==='a01-ch03-xiaoman-01').assetIds.includes('tc-look-xiaoman-work-apron'),'工作场仍需工作衣装');
    }
  });
  for(let outing=0;outing<2;outing++)for(let relationship=0;relationship<2;relationship++)check(`${route} 经历${outing+1}／关系${relationship+1} 第3—10章完整路径`,()=>{
    const result=play(m,outing,relationship);walks.push(result);return {...result,steps:undefined};
  });
}
check('两路线所有节点与门禁分支均有路径见证',()=>{
  const visited=new Set(walks.flatMap(w=>w.steps));const gates=new Set(walks.flatMap(w=>w.gates.map(g=>g.nodeId+':'+g.index)));
  for(const m of modules)for(const n of Object.values(m.nodes)){assert(visited.has(n.id),n.id);if(n.type==='gate')n.cases.forEach((x,i)=>assert(gates.has(n.id+':'+i)));}
  return {visitedNodes:visited.size,gateBranches:gates.size,completeRoutePaths:walks.length};
});
check('可复现生成与提交 JSON 一致',()=>{for(const r of build())assert.deepEqual(r.module,modules.find(m=>m.moduleId===r.module.moduleId));});

const project=fixture();let compiled;
check('E02 编译器验证真实两路线及隔离接口',()=>{compiled=compileProject(project);return compiled.report.graph.statistics;});
check('磁盘清单直接读取真实两路线且重编译一致',()=>{
  const file=writeFixture(project),p=loadProject(file),result=compileProject(p);
  assert.deepEqual(result.story,compiled.story);
  for(const route of routes)assert(p.inputFiles.some(x=>x.file===`任务拆分/全十章/routes/${route}.json`));
  return {manifest:path.relative(root,file)};
});

function rejects(name,mutate,audit) {
  check('反例：'+name,()=>{let thrown;try{audit(mutate());}catch(e){thrown=e;}assert(thrown,'错误数据未被拒绝');return {rejected:true,reason:thrown.message.slice(0,240)};});
}
for(const [index,route] of routes.entries()){
  const copy=()=>clone(modules[index]);
  rejects(route+' 第七章回收错线',()=>{const m=copy(),g=m.nodes[`tc_c07_${route}_outing_gate`];[g.cases[0].next,g.cases[1].next]=[g.cases[1].next,g.cases[0].next];return m;},m=>play(m,0,0));
  rejects(route+' 第十章关系结局错配',()=>{const m=copy(),g=m.nodes[`tc_c10_${route}_entry`];[g.cases[0].next,g.cases[1].next]=[g.cases[1].next,g.cases[0].next];return m;},m=>play(m,0,0));
  rejects(route+' 第九章朋友日序未拆',()=>{const m=copy(),n=sourceNode(m,9,route==='xiaoman'?139:233);m.scenes[n.scene].day=route==='xiaoman'?68:75;return m;},auditDates);
  rejects(route+' 篡改原文',()=>{const m=copy();m.nodes[Object.keys(m.nodes)[0]].text+='改写';return m;},auditSources);
  rejects(route+' 丢失正文来源',()=>{const m=copy();m.sourceMap.splice(m.sourceMap.findIndex(r=>r.kind==='narration'),1);return m;},auditSources);
  rejects(route+' 章末跳过共通出口',()=>{const m=copy(),n=Object.values(m.nodes).find(n=>n.next==='tc_c03_common_exit');n.next=`tc_c04_${route}_entry`;return m;},m=>play(m,0,0));
}
rejects('选择按钮被改写',()=>{const p=clone(project);p.modules.find(m=>m.moduleId==='routes/xiaoman').nodes.tc_c04_xiaoman_outing_choice.choices[0].label='替换按钮';return p;},compileProject);
rejects('读取另一条路线状态',()=>{const p=clone(project),branch=p.modules.find(m=>m.moduleId==='routes/xiaoman').nodes.tc_c07_xiaoman_outing_gate.cases[0];branch.flag='zhouzhiOuting';branch.value='river';return p;},compileProject);
rejects('重复状态写入点',()=>{const p=clone(project),m=p.modules.find(m=>m.moduleId==='routes/zhouzhi');m.nodes.tc_c09_zhouzhi_relationship_choice.flag='zhouzhiOuting';return p;},compileProject);
rejects('漏报公共出口 imports',()=>{const p=clone(project);p.modules.find(m=>m.moduleId==='routes/zhouzhi').imports.pop();return p;},compileProject);
check('保护文件指纹未变',()=>{
  const before=readJSON(path.join(__dirname,'protected-before.json'));
  const changed=before.files.filter(x=>hash(fs.readFileSync(path.join(root,x.file)))!==x.sha256);
  assert.deepEqual(changed,[]);return {files:before.files.length,changed:[]};
});

const failed=checks.filter(x=>x.status!=='passed');
const report={scope:'E04 真实路线源数据、原文一致性和隔离静态图；公共部分为测试桩',formalIntegration:false,
  contractVersion:c.contractVersion,contentRevision:c.contentRevision,createdAt:new Date().toISOString(),
  pass:failed.length===0,summary:{checks:checks.length,passed:checks.length-failed.length,failed:failed.length,routePaths:walks.length,
    routeNodes:modules.reduce((n,m)=>n+Object.keys(m.nodes).length,0),routeScenes:modules.reduce((n,m)=>n+Object.keys(m.scenes).length,0)},
  sources:sourceSummary,files:routes.map(r=>({file:`任务拆分/全十章/routes/${r}.json`,sha256:hash(fs.readFileSync(path.join(base,'routes',r+'.json')))})),
  checks,paths:walks,isolatedGraph:compiled?.report.graph,
  notValidated:['E03 完整公共正文与第十章婚宴后日谈','E08 真实引擎与存读档','A06 真实 WebP 资源和演出采用','E09 正式集成构建','E10 浏览器／实体手机／声音／真人阅读','发布']};
fs.writeFileSync(path.join(__dirname,'verification.json'),json(report));
console.log(json({pass:report.pass,summary:report.summary,sources:sourceSummary,failed}));
if(failed.length)process.exitCode=1;
