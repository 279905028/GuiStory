'use strict';

// E03 的独立正文、路由与接口验收。不加载 engine/game，不访问存档，不改 E01/E02 报告。
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process');
const {readJSON}=require('../build/json.cjs');
const {loadProject,compileProject}=require('../build/compiler.cjs');
const {assemble}=require('./assemble.cjs');
const {saveFixture,fixtures}=require('./qa/interface-fixture.cjs');
const contract=readJSON(path.join(__dirname,'../contract.json'));
const art=readJSON(path.join(__dirname,'../美术清单.json'));
const root=path.resolve(__dirname,'../../..');
const qa=path.join(__dirname,'qa');
const clone=x=>JSON.parse(JSON.stringify(x));
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const modules=contract.chapters.map(ch=>readJSON(path.join(__dirname,`ch${String(ch.id).padStart(2,'0')}.json`)));
const results=[];
function test(name,fn){fn();results.push({name,status:'passed'});}
const save=(file,data)=>fs.writeFileSync(path.join(qa,file),JSON.stringify(data,null,2)+'\n');
const matches=(flags,condition)=>Object.hasOwn(flags,condition.flag)&&flags[condition.flag]===condition.value;
const allowed=(flags,requires=[])=>requires.every(c=>matches(flags,c));
const sourceText={};
for(const s of contract.baseline.sourceManifest)sourceText[s.file]=fs.readFileSync(path.join(root,s.file),'utf8').split('\n');

function paragraphAudit(m) {
  const chapter=Number(m.moduleId.slice(-2)),ch=contract.chapters[chapter-1];
  const section=ch.sections.find(s=>s.scope==='common').source;
  const lines=sourceText[section.file];
  const body=m.sourceMap.filter(row=>['narration','dialogue'].includes(row.kind));
  const expected=[];
  for(let line=section.startLine;line<=section.endLine;line++) {
    const raw=lines[line-1];
    if(!raw.trim()||/^(?:#|>|\*\*选择|\*\*路线选择|- \*\*)/.test(raw))continue;
    expected.push(line);
  }
  assert.deepEqual(body.map(r=>r.startLine).sort((a,b)=>a-b),expected,`第${chapter}章正文覆盖`);
  for(const row of body) {
    assert.equal(row.startLine,row.endLine,'逐段来源必须精确');
    let expectedText=lines[row.startLine-1];
    if(chapter===2&&row.startLine===19)expectedText=expectedText.replace(/^如果第一章记下了三拍，/,'');
    if(chapter===2&&row.startLine===29)expectedText=expectedText.replace(/^如果第一章没有记下三拍，/,'');
    if(chapter===5&&[33,35].includes(row.startLine))expectedText=expectedText.replace(/^\*\*若[^*]+：\*\*/,'');
    const nodes=row.nodeIds.map(id=>m.nodes[id]);
    assert(nodes.every(n=>n?.type==='line'));
    assert.equal(nodes.map(n=>n.text).join(''),expectedText,`${section.file}:${row.startLine} 原文不一致`);
    assert(!m.exclusions.some(r=>r.startLine<=row.startLine&&r.endLine>=row.startLine),'真实正文不得排除');
  }
  assert.deepEqual(new Set(body.flatMap(r=>r.nodeIds)),new Set(Object.values(m.nodes).filter(n=>n.type==='line').map(n=>n.id)),'全部line都有原文');
  const coverage=new Set([...m.sourceMap,...m.exclusions].flatMap(r=>Array.from({length:r.endLine-r.startLine+1},(_,i)=>r.startLine+i)));
  for(let line=1;line<=lines.length;line++) {
    if(!lines[line-1].trim()||ch.sections.some(s=>s.scope!=='common'&&line>=s.source.startLine&&line<=s.source.endLine))continue;
    assert(coverage.has(line),`${section.file}:${line} 无映射或排除`);
  }
  for(const row of m.exclusions)for(let line=row.startLine;line<=row.endLine;line++) {
    const raw=lines[line-1];
    const valid=row.reason==='reading-rule' ? raw.startsWith('>')||line===3
      : row.reason==='heading-only' ? raw.startsWith('#')
      : row.reason==='navigation' ? raw==='---'||raw.startsWith('[返回')||raw.startsWith('本章路线：') : false;
    assert(valid,`${section.file}:${line} 不正确的排除理由 ${row.reason}`);
  }
  return expected.length;
}

function nodesBySource(chapter,line) {
  const m=modules[chapter-1];
  return m.sourceMap.filter(row=>row.startLine<=line&&row.endLine>=line&&['narration','dialogue'].includes(row.kind)).flatMap(r=>r.nodeIds);
}
function trace(story,start,initialFlags,picks={},stopWhen=()=>false) {
  const visited=[],events=[],flags={...initialFlags};
  let id=start;
  for(let steps=0;steps<2000;steps++) {
    if(stopWhen(id))return {stop:id,flags,visited,events};
    const n=story.nodes[id];assert(n,'缺失节点 '+id);assert(!visited.includes(id),'重复播放或环 '+id);
    visited.push(id);
    if(n.onEnter) {assert(allowed(flags,n.onEnter.requires),'自动事件前置失败');Object.assign(flags,n.onEnter.setFlags);events.push(id);}
    if(n.type==='choice') {
      const option=n.choices.find(o=>o.value===picks[n.flag]);
      assert(option&&allowed(flags,option.requires),'选择不可用 '+n.id);flags[n.flag]=option.value;id=option.next;
    } else if(n.type==='gate') {
      const branch=n.cases.find(c=>matches(flags,c));
      assert(branch||!n.exhaustive,'穷尽门禁未命中 '+id);id=branch?.next||n.default;
    } else {
      if(!n.next)return {stop:id,flags,visited,events};
      id=n.next;
    }
  }
  throw Error('路径超过上限');
}
function exhaustivePaths(story,stops) {
  const complete=[],pending=[{id:story.start,flags:{...story.initialFlags},visited:[],choices:[],epilogues:[]}];
  const epilogueIds=contract.epilogues.map(e=>e.id);
  while(pending.length) {
    const state=pending.pop();
    let {id,flags,visited,choices,epilogues}=state;
    for(let steps=0;steps<2000;steps++) {
      if(stops.includes(id)){complete.push({stop:id,flags,visited,choices,epilogues});break;}
      const n=story.nodes[id];assert(n);assert(!visited.includes(id),'重复播放 '+id);visited=visited.concat(id);
      if(epilogueIds.includes(id))epilogues=epilogues.concat(id);
      if(n.onEnter){assert(allowed(flags,n.onEnter.requires));flags={...flags,...n.onEnter.setFlags};}
      if(n.type==='choice') {
        for(const o of n.choices.filter(o=>allowed(flags,o.requires)))pending.push({id:o.next,flags:{...flags,[n.flag]:o.value},visited,choices:choices.concat({id:n.id,flag:n.flag,value:o.value}),epilogues});
        break;
      }
      if(n.type==='gate') {
        const branch=n.cases.find(c=>matches(flags,c));assert(branch||!n.exhaustive);id=branch?.next||n.default;
      }else {assert(n.next,'未登记截点');id=n.next;}
      if(steps===1999)throw Error('路径超过上限');
    }
  }
  return complete;
}

test('十份JSON与冻结正文确定性组装一致',()=>assert.deepEqual(modules,assemble()));
const paragraphCounts=[];
for(const m of modules)test(m.moduleId+' 逐段原文、非空行覆盖与排除理由',()=>paragraphCounts.push(paragraphAudit(m)));
test('只写共通ID、六处选择和相识事件',()=>{
  const nodes=modules.flatMap(m=>Object.values(m.nodes));
  assert(nodes.every(n=>/^tc_c(?:0[1-9]|10)_common_/.test(n.id)));
  assert.deepEqual(nodes.filter(n=>n.type==='choice').map(n=>n.id).sort(),contract.choices.filter(q=>q.owner==='E03').map(q=>q.id).sort());
  assert.deepEqual(nodes.filter(n=>n.onEnter).map(n=>n.id),['tc_c02_common_qiu_met']);
  assert(!nodes.some(n=>n.flag==='piaoRelationship'||n.onEnter?.setFlags?.qiuForm));
});
test('全部正文清除读稿说明，章末不重复正文',()=>{
  for(const m of modules)for(const n of Object.values(m.nodes)) {
    if(n.type==='line'||n.type==='choice')assert(!/阅读记录|本稿仍可|仅当第一章|第三章有六条路线|^\*\*|^如果第一章|^若当时/.test(n.text));
    if(n.type==='end')assert.equal(n.text,'');
  }
});
test('选择提问沿用六处原题，不新增台词',()=>{
  const texts=['我怎样对待刚才听到的声音？','分开前，我说什么？','我是否回应？','我怎样解释这次没到？','我怎样开始这顿饭？','接下来的时间，我想怎样度过？'];
  assert.deepEqual(modules.flatMap(m=>Object.values(m.nodes).filter(n=>n.type==='choice').map(n=>n.text)),texts);
});
test('九个章末为中性范围，指向真实下一章',()=>{
  for(const ch of contract.chapters.slice(0,9)) {
    const m=modules[ch.id-1],n=m.nodes[ch.exit],s=m.scenes[n.scene];
    assert.deepEqual([n.type,n.next,n.nextChapter],['end',ch.next,contract.chapters[ch.id].title]);
    assert.deepEqual([s.day,s.dayLabel,s.time,s.location,s.chronology.domain],[null,ch.days,'章末','','chapter-range']);
  }
  assert(!Object.values(modules[9].nodes).some(n=>n.type==='end'));
});
test('八个后续路由/选线接口只导向本章七条路线',()=>{
  for(const ch of contract.chapters.slice(2)) {
    const m=modules[ch.id-1],n=m.nodes[ch.dispatch];
    const targets=(n.choices||n.cases).map(x=>x.next);
    assert.deepEqual(targets,contract.routes.map(r=>`tc_c${String(ch.id).padStart(2,'0')}_${r.id}_entry`));
    assert.equal(m.exports[ch.dispatch],ch.dispatch);
    if(ch.id>3)assert.deepEqual([n.exhaustive,n.default],[true,null]);
  }
});
test('第一晚凌晨与第六章跨日按原文分场',()=>{
  const probes=[[1,97,2,'02:00'],[6,37,31,'凌晨'],[6,39,31,'06:00'],[8,13,52,'17:00'],[9,13,61,'下午']];
  for(const [chapter,line,day,time] of probes) {
    const m=modules[chapter-1],node=m.nodes[nodesBySource(chapter,line)[0]],s=m.scenes[node.scene];
    assert.deepEqual([s.day,s.time],[day,time]);
  }
  assert(Object.values(modules[9].scenes).every(s=>s.day===null&&s.dayLabel==='两年后'));
});
test('A01资源ID可解析；正文模块只有语义背景，无真实美术采用',()=>{
  const ids=new Set(art.assets.map(a=>a.id));
  for(const m of modules) {
    for(const r of m.assetRequests)for(const id of r.a01Ids)assert(ids.has(id),'未知A01资源 '+id);
    for(const s of Object.values(m.scenes))assert(s.bg.startsWith('tc-bg-'));
    for(const n of Object.values(m.nodes))if(n.type!=='gate')assert.equal(n.character,null,'显式清除继承立绘');
  }
});

const manifest=saveFixture(modules);
let compiled;
test('E02编译器加载真实共通JSON与明确标记的外部测试桩',()=>{compiled=compileProject(loadProject(manifest));});
const {story,report}=compiled;
save('interface-build-report.json',{...report,scope:'E03 actual common modules + external route interface stubs; no route prose or real assets',notValidated:[...report.notValidated,'E04—E07真实路线接入与全文、13个终结正文']});
test('全部389个共通节点与17个共通选项可达',()=>{
  const commonNodes=modules.flatMap(m=>Object.values(m.nodes));
  assert.equal(commonNodes.length,389);
  assert.equal(commonNodes.filter(n=>n.type==='choice').reduce((sum,n)=>sum+n.choices.length,0),17);
  assert.deepEqual(report.graph.coverage.unreachableNodes,[]);assert.deepEqual(report.graph.coverage.unreachableOptions,[]);
});
test('全部共通门禁分支都有状态见证',()=>{
  for(const m of modules)for(const n of Object.values(m.nodes).filter(n=>n.type==='gate'))
    n.cases.forEach((_,i)=>assert(report.graph.coverage.gateBranches[n.id+':'+i]>0,n.id+':'+i));
});

const earlyChoices=contract.choices.filter(q=>q.owner==='E03'&&q.chapter<3);
let combinations=[{}];
for(const q of earlyChoices)combinations=combinations.flatMap(c=>q.options.map(o=>({...c,[q.flag]:o.value})));
const hiddenWitnesses=[];
test('前两章32种选择组合：只有记录并回应才能相识和看见第七路线',()=>{
  for(const picks of combinations) {
    const t=trace(story,story.start,story.initialFlags,picks,id=>id===contract.interface.routeChoice);
    assert.equal(t.stop,contract.interface.routeChoice);
    const qualified=picks.qiuSignal==='record'&&picks.qiuReply==='reply';
    assert.equal(t.flags.qiuMet,qualified);assert.equal(t.events.includes('tc_c02_common_qiu_met'),qualified);
    const options=story.nodes[t.stop].choices.filter(o=>allowed(t.flags,o.requires));
    assert.equal(options.length,qualified?7:6);
    const hiddenNodes=nodesBySource(2,235).concat(nodesBySource(2,243));
    assert.equal(hiddenNodes.every(id=>t.visited.includes(id)),qualified);
    if(!qualified) {
      for(const id of t.visited) {
        const n=story.nodes[id];assert(!/黄球球/.test(n.text||''),id+'身份提前泄露');
        assert.notEqual(n.speaker,'huangqiuqiu');assert.notEqual(n.character,'huangqiuqiu');
      }
    }
    // 第8天回应始终可选；未记录时不读门后答话和约定。
    assert.equal(t.visited.includes(nodesBySource(2,19)[0]),picks.qiuSignal==='record'&&picks.qiuReply==='reply');
    assert.equal(t.visited.includes(nodesBySource(2,29)[0]),picks.qiuSignal==='ignore'&&picks.qiuReply==='reply');
    hiddenWitnesses.push({picks,qualified,visibleRoutes:options.map(o=>o.value),qiuMet:t.flags.qiuMet});
  }
  assert.equal(combinations.length,32);
});

let paths;
test('232条接口路径：无重复播放、跨章汇合准确、公共后日谈恰好一次',()=>{
  paths=exhaustivePaths(story,contract.routes.map(r=>'tc_c10_'+r.id+'_entry'));
  assert.equal(paths.length,232);
  for(const t of paths) {
    assert.equal(t.epilogues.length,1);
    assert.equal(t.epilogues[0],t.flags.route==='piao'&&t.flags.piaoRelationship==='dating'?'tc_c10_common_piao_dating':'tc_c10_common_piao_wedding');
    for(const ch of contract.chapters)assert.equal(t.visited.filter(id=>id===ch.entry).length,1);
    for(const ch of contract.chapters.slice(0,9))assert.equal(t.visited.filter(id=>id===ch.exit).length,1);
    for(const ch of contract.chapters.slice(2,9)) {
      const routeEntries=contract.routes.map(r=>`tc_c${String(ch.id).padStart(2,'0')}_${r.id}_entry`);
      assert.deepEqual(t.visited.filter(id=>routeEntries.includes(id)),[`tc_c${String(ch.id).padStart(2,'0')}_${t.flags.route}_entry`]);
    }
    assert.equal(t.stop,'tc_c10_'+t.flags.route+'_entry');
    assert.equal(t.visited.includes(nodesBySource(5,33)[0]),t.flags.missedGame==='voice');
    assert.equal(t.visited.includes(nodesBySource(5,35)[0]),t.flags.missedGame==='reschedule');
    if(t.flags.route!=='piao')assert(!Object.hasOwn(t.flags,'piaoRelationship'));
  }
});
test('婚宴无球球、恋人饭局不串婚宴，均返回所选路线',()=>{
  for(const t of paths) {
    const wedding=t.epilogues[0]==='tc_c10_common_piao_wedding';
    for(const line of [45,47,49,51,53,55,57,59,61])assert.equal(t.visited.includes(nodesBySource(10,line)[0]),wedding);
    for(const line of [25,27,29,31,33,35,37,39])assert.equal(t.visited.includes(nodesBySource(10,line)[0]),!wedding);
    for(const id of t.visited.filter(id=>/^tc_c10_common_piao_wedding/.test(id))) {
      assert.notEqual(story.nodes[id].speaker,'huangqiuqiu');assert.notEqual(story.nodes[id].character,'huangqiuqiu');
    }
  }
});
const endingContexts=[];
test('13种契约结局上下文分别经过正确后日谈后交还本路线',()=>{
  for(const e of contract.endings) {
    const flags={qiuSignal:'record',qiuReply:'reply',qiuMet:true,qiuForm:e.route==='huangqiuqiu'?'human':'sphere'};
    for(const condition of e.requires)flags[condition.flag]=condition.value;
    const t=trace(story,'tc_c10_common_entry',flags,{},id=>!id.includes('_common_'));
    assert.equal(t.stop,'tc_c10_'+flags.route+'_entry');
    const epilogues=t.visited.filter(id=>contract.epilogues.some(e=>e.id===id));assert.equal(epilogues.length,1);
    assert.equal(epilogues[0],flags.route==='piao'&&flags.piaoRelationship==='dating'?'tc_c10_common_piao_dating':'tc_c10_common_piao_wedding');
    endingContexts.push({endingId:e.id,contextOnly:true,epilogue:epilogues[0],handoff:t.stop});
  }
});
test('非法/缺失route与飘关系不默认为普通路线或婚宴',()=>{
  for(const flags of [{},{route:'invalid'},{route:'piao'},{route:'piao',piaoRelationship:'invalid'}]) {
    assert.throws(()=>trace(story,'tc_c10_common_entry',flags),/穷尽门禁未命中/);
  }
  for(let chapter=4;chapter<=9;chapter++)assert.throws(()=>trace(story,`tc_c${String(chapter).padStart(2,'0')}_common_route_gate`,{}),/穷尽门禁未命中/);
});
test('第三章重选仅重放真实前缀，不带后续关系或人形（静态重放）',()=>{
  const picks={qiuSignal:'record',reunion:'nervous',qiuReply:'reply',missedGame:'voice',yelanFirst:'game'};
  const t=trace(story,story.start,story.initialFlags,picks,id=>id===contract.interface.routeChoice);
  assert.equal(t.flags.qiuMet,true);assert.equal(t.flags.qiuForm,'sphere');
  assert(!Object.hasOwn(t.flags,'piaoRelationship'));assert(!Object.hasOwn(t.flags,'route'));
});

let e04Integration=null;
const e04Files=['xiaoman','zhouzhi'].map(name=>path.resolve(__dirname,'../routes/'+name+'.json'));
if(e04Files.every(file=>fs.existsSync(file)))test('E03与已交付E04真实双路线接续，四个结局可达（其余五线为桩）',()=>{
  const project=fixtures(modules);
  const inputs=e04Files.map(file=>({file:path.relative(root,file),sha256:hash(fs.readFileSync(file))}));
  for(const file of e04Files) {
    const m=readJSON(file),i=project.modules.findIndex(old=>old.moduleId===m.moduleId);
    project.modules[i]=m;project.manifest.modules[i]=path.relative(path.dirname(manifest),file);
  }
  project.manifest.sample.stops=project.manifest.sample.stops.filter(id=>!/^tc_c10_(xiaoman|zhouzhi)_entry$/.test(id));
  const backgrounds=new Set(project.modules.flatMap(m=>[...Object.values(m.scenes).map(s=>s.bg),...Object.values(m.nodes).map(n=>n.bg).filter(Boolean)]));
  project.bindings[0].backgrounds=Object.fromEntries([...backgrounds].map(id=>[id,'sample://e03-e04-interface/'+id]));
  const merged=compileProject(project);
  const expected=contract.endings.filter(e=>e.id.startsWith('tc_c10_xiaoman_')||e.id.startsWith('tc_c10_zhouzhi_')).map(e=>e.id).sort();
  assert.deepEqual(merged.report.graph.coverage.reachedEndings,expected);
  for(const item of inputs)assert.equal(hash(fs.readFileSync(path.join(root,item.file))),item.sha256);
  e04Integration={status:'passed',scope:'E03真实共通+E04真实双路线；其余五线和美术仍为接口桩；未执行真实引擎',formalIntegration:false,
    inputFiles:inputs,commonNodes:389,routeNodes:717,graph:merged.report.graph};
  save('e04-common-integration.json',e04Integration);
});

const negatives=[];
function reject(name,mutation,check) {
  test('反例：'+name,()=>{const altered=clone(modules);mutation(altered);assert.throws(()=>check(altered));negatives.push(name);});
}
reject('篡改正文会被逐字核对拒绝',m=>{m[0].nodes.tc_c01_common_entry.text+='额外剧情';},m=>paragraphAudit(m[0]));
reject('遗漏正文映射会被完整性核对拒绝',m=>{m[0].sourceMap=m[0].sourceMap.filter(r=>r.startLine!==9);},m=>paragraphAudit(m[0]));
reject('真实对白伪装为阅读提示不能排除',m=>{m[0].exclusions.push({file:contract.chapters[0].sections[0].source.file,startLine:9,endLine:9,reason:'reading-rule'});},m=>paragraphAudit(m[0]));
reject('隐藏信号门反转会被事件前置拒绝',m=>{m[1].nodes.tc_c02_common_qiu_signal_gate.cases.reverse();m[1].nodes.tc_c02_common_qiu_signal_gate.cases[0].next='tc_c02_common_qiu_reply_gate';m[1].nodes.tc_c02_common_qiu_signal_gate.cases[1].next='tc_c02_common_exit';},m=>compileProject(fixtures(m)));
reject('选项缺少qiuMet门槛不能通过契约',m=>{m[2].nodes.tc_c03_common_route_choice.choices[6].requires.pop();},m=>compileProject(fixtures(m)));
reject('交往误入婚宴不能通过后日谈条件检查',m=>{m[9].nodes.tc_c10_common_piao_relationship_gate.cases[0].next='tc_c10_common_piao_wedding';},m=>compileProject(fixtures(m)));
reject('路由跳进别人的路线不能通过状态图',m=>{m[3].nodes.tc_c04_common_route_gate.cases[0].next='tc_c04_zhouzhi_entry';m[3].imports=m[3].imports.filter(id=>id!=='tc_c04_xiaoman_entry');},m=>compileProject(fixtures(m)));
reject('新对白写入飘关系会违反唯一写入点',m=>{m[8].nodes.tc_c09_common_entry.onEnter={requires:[],setFlags:{piaoRelationship:'dating'}};},m=>compileProject(fixtures(m)));

test('正式构建入口 --ten-chapter --manifest --check 通过且无输出写入',()=>{
  const buildRoot=path.resolve(__dirname,'../构建');
  const before=fs.readdirSync(buildRoot).sort();
  const text=execFileSync(process.execPath,[path.join(root,'任务拆分/三章扩展/build-story.cjs'),'--ten-chapter','--manifest',path.relative(root,manifest),'--check'],{cwd:root,encoding:'utf8'});
  save('cli-check.json',{command:'node 任务拆分/三章扩展/build-story.cjs --ten-chapter --manifest 任务拆分/全十章/common/qa/fixtures/manifest.json --check',stdout:text.trim(),scope:'E03 common + explicitly marked interface stubs',formalIntegration:false});
  assert.deepEqual(fs.readdirSync(buildRoot).sort(),before);
});

const sourceIndex=modules.map((m,index)=>{
  const ch=contract.chapters[index],file=ch.sections[0].source.file,lines=sourceText[file];
  const headings=[];
  const paragraphRows=m.sourceMap.filter(r=>['dialogue','narration'].includes(r.kind));
  const paragraphs=paragraphRows.map(r=>{
    headings.length=0;
    for(let i=0;i<r.startLine;i++) {
      const match=/^(#+)\s+(.+)$/.exec(lines[i]);
      if(match){headings.length=match[1].length-1;headings.push(match[2]);}
    }
    const cue=art.chapters[index].sections.find(s=>s.route==='common'&&r.startLine>=s.sourceLineStart&&r.startLine<=s.sourceLineEnd);
    return {file,chapterTitle:ch.title,headings:headings.filter(Boolean),startLine:r.startLine,endLine:r.endLine,original:lines[r.startLine-1],nodeIds:r.nodeIds,a01CueId:cue?.id||null};
  });
  return {chapter:ch.id,module:m.moduleId,paragraphs,controls:m.sourceMap.filter(r=>!['dialogue','narration'].includes(r.kind)),exclusions:m.exclusions};
});
save('source-index.json',{contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,scope:'E03-owned paragraphs only',chapters:sourceIndex});
save('path-witnesses.json',{scope:'actual common modules with external route stubs, not full-story acceptance',hiddenCombinations:hiddenWitnesses,
  paths:paths.map(t=>({stop:t.stop,flags:t.flags,choices:t.choices,epilogues:t.epilogues})),endingContexts});
const integration=modules.map((m,index)=>{
  const nodes=Object.values(m.nodes);
  return {chapter:index+1,module:m.moduleId,exports:Object.keys(m.exports),imports:m.imports,
    reads:[...new Set(nodes.flatMap(n=>[...(n.cases||[]).map(c=>c.flag),...(n.choices||[]).flatMap(o=>(o.requires||[]).map(c=>c.flag)),...(n.onEnter?.requires||[]).map(c=>c.flag)]))].sort(),
    writes:nodes.filter(n=>n.type==='choice'||n.onEnter).map(n=>({nodeId:n.id,flags:n.flag?[n.flag]:Object.keys(n.onEnter.setFlags)})),
    assetRequests:m.assetRequests,scenes:Object.entries(m.scenes).map(([id,s])=>({id,bg:s.bg,day:s.day,time:s.time,location:s.location}))};
});
save('integration-map.json',{contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,chapters:integration,
  presentationStatus:'语义背景与人物说话者；真实立绘/头像/差分/CG待A06/E09绑定。character:null显式清除前一段人物。',
  chapterEndBackground:'tc-bg-chapter-end是待E09选择已采用图的中性章末语义；不是已采用图片。',
  deferredReview:[{owner:'E06',items:['飘第三章关系读取与第十章两段公共后日谈核对；不得在路线重复播放']},{owner:'E07',items:['隐藏线入口采用三项requires；第14天相识事件来自共通']},{owner:'E09',items:['共通JSON已交付，需与真实路线/引擎/美术统一集成']} ]});

const protectedBefore=readJSON(path.join(qa,'protected-before.json'));
test('40个原文/契约/构建/运行/A01保护文件指纹未变',()=>{
  for(const record of protectedBefore)assert.equal(hash(fs.readFileSync(path.join(root,record.file))),record.sha256,record.file+'被修改');
});
const summaries=modules.map((m,i)=>({chapter:i+1,file:path.relative(root,path.join(__dirname,`ch${String(i+1).padStart(2,'0')}.json`)),
  sha256:hash(fs.readFileSync(path.join(__dirname,`ch${String(i+1).padStart(2,'0')}.json`))),nodes:Object.keys(m.nodes).length,scenes:Object.keys(m.scenes).length,
  paragraphs:paragraphCounts[i],choices:Object.values(m.nodes).filter(n=>n.type==='choice').length,sourceRows:m.sourceMap.length,exclusions:m.exclusions.length}));
save('verification.json',{status:'passed',runAt:new Date().toISOString(),scope:'E03共通源/逐段原文/静态路由/带接口桩的E02编译；不是正式游戏验收',
  contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,formalIntegration:false,passed:results.length,results,modules:summaries,
  totals:{modules:10,nodes:summaries.reduce((n,m)=>n+m.nodes,0),scenes:summaries.reduce((n,m)=>n+m.scenes,0),paragraphs:paragraphCounts.reduce((a,b)=>a+b,0),
    choices:6,options:17,earlyChoiceCombinations:combinations.length,interfacePaths:paths.length,endingContexts:endingContexts.length,negativeChecks:negatives.length},
  protectedFilesChecked:protectedBefore.length,protectedFilesChanged:[],e04Integration:e04Integration?{status:e04Integration.status,inputFiles:e04Integration.inputFiles,report:'common/qa/e04-common-integration.json'}:null,
  notExecuted:['E05—E07真实路线接入/正文与全部13个终结','E06/E07独立交叉复核','E08真实引擎/存读档/形态恢复','A06采用资源与E09演出绑定','正式story.js构建替换','浏览器/实体手机/声音/真人阅读','打包/发布']});
console.log(JSON.stringify({status:'passed',tests:results.length,commonModules:10,commonNodes:389,paragraphs:paragraphCounts.reduce((a,b)=>a+b,0),interfacePaths:paths.length,formalIntegration:false}));
