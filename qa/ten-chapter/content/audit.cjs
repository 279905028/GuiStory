#!/usr/bin/env node
'use strict';
// E10 independent content audit. Does not import the compiler, engine, or E09 tests.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const root=path.resolve(__dirname,'../../..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>JSON.parse(read(p));
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const base='任务拆分/全十章/';
const contract=json(base+'contract.json');
const context={window:{}};vm.runInNewContext(read('story.js'),context,{timeout:2000});
const story=JSON.parse(JSON.stringify(context.window.RAIN_STORY));
const paths=Array.from({length:10},(_,i)=>base+`common/ch${String(i+1).padStart(2,'0')}.json`).concat(contract.routes.map(r=>base+r.file));
const modules=paths.map(p=>({path:p,...json(p)}));
const source=Object.fromEntries(contract.baseline.sourceManifest.map(x=>[x.file,read(x.file).split(/\r?\n/)]));
const maps=modules.flatMap(m=>m.sourceMap.map(x=>({...x,module:m.moduleId,owner:m.owner})));
const exclusions=modules.flatMap(m=>m.exclusions.map(x=>({...x,module:m.moduleId})));
const bodyMaps=maps.filter(x=>['narration','dialogue'].includes(x.kind));
const allNodes=modules.flatMap(m=>Object.values(m.nodes).map(n=>({module:m.moduleId,node:n})));
const errors=[],counts={},tests=[];
function check(ok,kind,detail){counts[kind]=(counts[kind]||0)+1;if(!ok)errors.push({kind,...detail});}
const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const at=(f,l)=>source[f][l-1];
const covers=(m,f,l)=>m.file===f&&m.startLine<=l&&m.endLine>=l;
const textsAt=(f,l)=>bodyMaps.filter(m=>covers(m,f,l));
const sourceKey=m=>`${m.file}:${m.startLine}-${m.endLine}`;
const fileByChapter=n=>contract.baseline.sourceManifest.find(x=>x.chapter===n).file;
const fingerprints=Object.fromEntries(['story.js',base+'contract.json','assets/runtime-ten-chapter-manifest.json',...paths,...Object.keys(source)].map(p=>[p,sha(p)]));
for(const b of contract.baseline.sourceManifest)check(sha(b.file)===b.sha256,'baseline-fingerprint',{file:b.file});
check(story.contractVersion===contract.contractVersion&&story.contentRevision===contract.contentRevision,'revision',{});
check(new Set(allNodes.map(x=>x.node.id)).size===allNodes.length,'unique-node-ownership',{});
check(allNodes.length===Object.keys(story.nodes).length,'source-formal-node-count',{});
for(const {node:n,module} of allNodes){const f=story.nodes[n.id];check(!!f,'formal-node-exists',{node:n.id,module});if(!f)continue;
 for(const k of ['id','type','text','next','nextChapter','choices','cases','default','exhaustive','flag','onEnter','title'])check(eq(n[k],f[k]),'source-formal-control-text',{node:n.id,field:k});
 const a=modules.find(m=>m.moduleId===module).scenes[n.scene],b=story.scenes[f.scene];
 check(!!a&&!!b,'scene-exists',{node:n.id});if(a&&b)for(const k of ['chapter','chronology','day','dayLabel','time','location','title'])check(eq(a[k],b[k]),'source-formal-chronology',{node:n.id,field:k});
}
const coverage=[],transforms=[],exclusionReview=[],bodyNodeUses=new Map();
function normalize(raw){return raw.replace(/^\*\*(?:若|如果)[^*]+：\*\*/,'').replace(/^如果第一章(?:没有)?记下(?:了)?三拍，/,'');}
for(const [file,lines] of Object.entries(source))for(let i=0;i<lines.length;i++){let raw=lines[i],line=i+1;if(!raw.trim())continue;
 const mm=maps.filter(m=>covers(m,file,line)),ee=exclusions.filter(m=>covers(m,file,line)),bb=mm.filter(m=>['narration','dialogue'].includes(m.kind));
 check(mm.length+ee.length>0,'all-nonblank-covered',{file,line,raw});
 const structural=/^(?:#{1,6}\s|>\s|---$|\[返回|本章路线：|(?:第\d+—\d+天|两年后)｜网吧夜班版|\*\*选择|\*\*路线选择|\*\*小选择|\*\*本线选择|\*\*回收第四章选择|\*\*如果|\*\*若|\*\*本章|\*\*第|\*\*两年|\*\*关系|\*\*共同|- \*\*)/.test(raw);
 // Prefix conditions containing body copy still require a body map.
 const conditionalBody=/^\*\*(?:若|如果)[^*]+：\*\*.+/.test(raw);
 if(!structural||conditionalBody)check(bb.length===1,'independent-prose-coverage',{file,line,raw,maps:mm.map(m=>m.kind)});
 if(bb.length)check(bb.length===1,'one-body-owner',{file,line,owners:bb.map(m=>m.module)});
 for(const e of ee){let valid=false;
  if(e.reason==='heading-only')valid=/^#{1,6}\s/.test(raw);
  if(e.reason==='navigation')valid=/^(?:---$|\[返回|本章路线：)/.test(raw);
  if(e.reason==='reading-rule')valid=/^(?:>\s|(?:第\d+—\d+天|两年后)｜网吧夜班版|\*\*回收第四章选择，只读相应一段。\*\*)/.test(raw);
  if(e.reason==='choice-label-excerpt')valid=bb.length===1&&mm.some(x=>x.kind==='choice')&&contract.choices.some(c=>c.options.some(o=>o.sourceKind==='dialogue-excerpt'&&o.source.file===file&&o.source.line===line));
  check(valid,'exclusion-reason',{file,line,raw,reason:e.reason});exclusionReview.push({file,line,raw,reason:e.reason,valid,bodyRetained:bb.length>0});
 }
 coverage.push({file,line,kinds:mm.map(m=>m.kind),exclusions:ee.map(e=>e.reason)});
}
for(const m of maps){check(!!source[m.file]&&m.startLine>0&&m.endLine>=m.startLine&&m.endLine<=source[m.file].length,'source-map-range',{source:sourceKey(m)});for(const id of m.nodeIds)check(!!story.nodes[id],'source-map-node',{source:sourceKey(m),node:id});}
for(const m of bodyMaps){const raw=source[m.file].slice(m.startLine-1,m.endLine).join('\n');const nodes=m.nodeIds.map(id=>story.nodes[id]);const actual=nodes.map(n=>n?.text).join('');let expected=normalize(raw);
 if(m.file===fileByChapter(10)&&m.startLine===263)expected=raw.replace(/^若第四章去过旧书摊，/,'').replace(/若第四章去过街机厅，/,'');
 check(nodes.every(n=>n?.type==='line'),'body-is-playable-line',{source:sourceKey(m)});check(actual===expected,'verbatim-body',{source:sourceKey(m),expected,actual});
 if(raw!==expected||nodes.length>1)transforms.push({source:sourceKey(m),raw,displayedSegments:nodes.map(n=>({node:n.id,text:n.text})),classification:m.startLine===263&&m.file===fileByChapter(10)?'mutually-exclusive-outing-fragments':nodes.length>1?'chronology-split':'condition-prefix-to-gate'});
 for(const n of nodes){const section=contract.chapters.flatMap(c=>c.sections).find(x=>x.source.file===m.file&&x.source.startLine<=m.startLine&&x.source.endLine>=m.endLine);check(!!section&&n.id.startsWith('tc_c'+String(contract.baseline.sourceManifest.find(b=>b.file===m.file).chapter).padStart(2,'0')+'_'+section.scope+'_'),'source-route-ownership',{node:n.id,source:sourceKey(m),scope:section?.scope});bodyNodeUses.set(n.id,(bodyNodeUses.get(n.id)||0)+1);}
}
for(const n of Object.values(story.nodes).filter(n=>n.type==='line'))check(bodyNodeUses.get(n.id)===1,'all-formal-lines-have-one-source',{node:n.id,count:bodyNodeUses.get(n.id)||0});
for(const c of contract.choices){const n=story.nodes[c.id];check(n?.type==='choice'&&n.flag===c.flag,'choice-contract',{choice:c.id});if(!n)continue;check(n.choices.length===c.options.length,'choice-options-count',{choice:c.id});for(let i=0;i<c.options.length;i++){const a=c.options[i],b=n.choices[i];check(!!b&&a.label===b.label&&a.value===b.value&&eq(a.requires||[],b.requires||[]),'choice-order-label-condition',{choice:c.id,index:i});if(a.sourceKind==='dialogue-excerpt')check(textsAt(a.source.file,a.source.line).some(m=>m.nodeIds.some(id=>story.nodes[id].text.includes(a.label))),'choice-excerpt-answer-retained',{choice:c.id,index:i});}}
// Independent semantic obligations from source headings/inline condition statements.
const obligations=new Map(),obligationList=[];
function register(ids,flag,value,label){check(ids.length>0,'semantic-obligation-nonempty',{label});for(const id of ids){const a=obligations.get(id)||[];a.push({flag,value,label});obligations.set(id,a);}obligationList.push({label,flag,value,nodes:ids});}
function blockNodes(src){const raw=at(src.file,src.line),h=/^(#+)\s/.exec(raw);if(!h)return textsAt(src.file,src.line).flatMap(m=>m.nodeIds);
 let end=source[src.file].length+1;for(let l=src.line+1;l<end;l++){const next=/^(#+)\s/.exec(at(src.file,l));if(next&&next[1].length<=h[1].length){end=l;break;}}
 return bodyMaps.filter(m=>m.file===src.file&&m.startLine>src.line&&m.startLine<end).flatMap(m=>m.nodeIds);
}
for(const c of contract.choices)for(const o of c.options){if(/^#+\s/.test(at(o.source.file,o.source.line)))register(blockNodes(o.source),c.flag,o.value,`choice-branch:${c.id}:${o.value}`);}
for(const chapter of contract.chapters){for(const section of chapter.sections){if(section.scope==='common'||section.scope==='friends')continue;const f=section.source.file;for(let line=section.source.startLine;line<=section.source.endLine;line++){let raw=at(f,line);if(!/^#+\s/.test(raw))continue;let relationship=/仅交往|仅承接第九章选择A/.test(raw)?'dating':/仅朋友|仅承接第九章选择B/.test(raw)?'friends':null;if(relationship)register(blockNodes({file:f,line}),section.scope+'Relationship',relationship,`relationship-block:${chapter.id}:${section.scope}:${line}`);}}
 for(const anchor of chapter.sceneAnchors){const ids=blockNodes(anchor);if(!ids.length)continue;const sc=story.scenes[story.nodes[ids[0]].scene];check(sc.chronology.domain===chapter.timeDomain&&(anchor.day===null||sc.day===anchor.day),'source-heading-day',{source:anchor.file+':'+anchor.line,node:ids[0],expected:anchor.day,actual:sc.day});}}
for(const [flag,state]of Object.entries(contract.states)){const writers=Object.values(story.nodes).filter(n=>n.flag===flag||(n.onEnter&&Object.hasOwn(n.onEnter.setFlags||{},flag)));check(writers.length===1&&writers[0].id===state.writer.nodeId,'unique-declared-flag-writer',{flag,writers:writers.map(n=>n.id)});}
for(const n of Object.values(story.nodes)){if(n.type==='choice')check(!!contract.states[n.flag],'declared-choice-state',{node:n.id,flag:n.flag});}
for(const [id,day]of [['tc_c07_piao_dating_011',39],['tc_c07_piao_dating_012',41]])check(story.scenes[story.nodes[id].scene].day===day,'piao-same-source-two-days',{node:id,expected:day});
const events=Object.values(story.nodes).filter(n=>n.onEnter);check(events.length===contract.automaticEvents.length,'only-declared-automatic-events',{});for(const e of contract.automaticEvents){const n=story.nodes[e.nodeId];check(eq(n?.onEnter,{requires:e.requires,setFlags:e.setFlags})||eq(n?.onEnter,{setFlags:e.setFlags,requires:e.requires}),'automatic-event-contract',{node:e.nodeId});}
for(const r of [...contract.callbackRules,...contract.piaoRelationshipBlocks])register(blockNodes(r.source),r.flag,r.value,`${r.source.file}:${r.source.line}`);
for(const e of contract.endings)for(const r of e.requires)register([...blockNodes(e.source),e.id],r.flag,r.value,e.id);
register(textsAt(fileByChapter(2),19).flatMap(m=>m.nodeIds),'qiuSignal','record','second-chapter-remembered');
register(textsAt(fileByChapter(2),29).flatMap(m=>m.nodeIds),'qiuSignal','ignore','second-chapter-unremembered');
register(['tc_c10_mengyao_dating_014_books'],'mengyaoOuting','books','two-years-keepsake-books');
register(['tc_c10_mengyao_dating_014_arcade'],'mengyaoOuting','arcade','two-years-keepsake-arcade');
const epilogueNodes=contract.epilogues.map(e=>new Set(blockNodes(e.source)));
for(const r of contract.timeline.inlineDayChanges)for(const id of textsAt(r.source.file,r.source.line).flatMap(m=>m.nodeIds)){const sc=story.scenes[story.nodes[id].scene];check(sc.chronology.day===r.day,'inline-day-change',{node:id,day:sc.chronology.day,expected:r.day});if(r.time)check(sc.time===r.time,'inline-time-change',{node:id,time:sc.time,expected:r.time});}
for(const r of contract.timeline.chapter6Flashbacks){const ids=blockNodes(r.source);check(ids.length>0,'flashback-body',{route:r.route});let returned=false;for(const id of ids){const n=story.nodes[id],sc=story.scenes[n.scene];if(/第31天临近天亮/.test(n.text))returned=true;check(sc.chronology.mode===(returned?'present':'flashback')&&sc.day===(returned?31:30),'same-dinner-flashback',{node:id,chronology:sc.chronology,returnedToNextMorning:returned});}}
const seenNodes=new Set(),seenChoices=new Set(),seenGateEdges=new Set(),semanticWitnesses=new Map(),endingWitnesses={},hiddenWitnesses={},chronologyBacksteps=new Map();
const satisfies=(rs,flags)=>(rs||[]).every(r=>Object.hasOwn(flags,r.flag)&&flags[r.flag]===r.value);
const stack=[{id:story.start,flags:{...story.initialFlags},trace:[],choiceTrace:[],maxDay:0,epilogue:[],humanSeen:false}];let visits=0,completePaths=0;
while(stack.length){let p=stack.pop();while(p.id){let n=story.nodes[p.id];if(!n){check(false,'no-dangling',{node:p.id});break;}if(p.trace.length>4000){check(false,'finite-path',{node:p.id});break;}check(!p.trace.includes(n.id),'no-repeated-node-in-path',{node:n.id});p.trace.push(n.id);visits++;seenNodes.add(n.id);
 if(n.onEnter){check(satisfies(n.onEnter.requires,p.flags),'automatic-event-precondition',{node:n.id});Object.assign(p.flags,n.onEnter.setFlags);}
 if(n.id==='tc_c08_huangqiuqiu_human_reveal')p.humanSeen=true;
 const m=/^tc_c(\d{2})_([^_]+)_/.exec(n.id),chapter=Number(m[1]),scope=m[2];
 if(scope!=='common')check(p.flags.route===scope,'seven-route-isolation',{node:n.id,route:p.flags.route});
 check(p.flags.qiuForm===(p.humanSeen?'human':'sphere'),'precise-human-event',{node:n.id,form:p.flags.qiuForm,humanSeen:p.humanSeen});
 for(const r of obligations.get(n.id)||[]){check(p.flags[r.flag]===r.value,'conditional-body-semantics',{node:n.id,condition:r,actual:p.flags[r.flag]});const key=`${r.label}:${r.flag}=${r.value}`;if(!semanticWitnesses.has(key))semanticWitnesses.set(key,{node:n.id,choices:p.choiceTrace});}
 if(chapter<=2&&(/黄球球/.test(n.text||'')||n.speaker==='huangqiuqiu'||n.character==='huangqiuqiu'))check(p.flags.qiuSignal==='record'&&p.flags.qiuReply==='reply','hidden-identity-leak',{node:n.id,flags:p.flags});
 if(n.id==='tc_c03_common_route_choice'){let available=n.choices.filter(c=>satisfies(c.requires,p.flags));let key=`${p.flags.qiuSignal}+${p.flags.qiuReply}`;let expected=p.flags.qiuSignal==='record'&&p.flags.qiuReply==='reply';check(available.some(c=>c.value==='huangqiuqiu')===expected&&p.flags.qiuMet===expected,'hidden-four-combinations',{key,flags:p.flags});hiddenWitnesses[key]={qiuMet:p.flags.qiuMet,options:available.map(c=>c.value),choices:p.choiceTrace};}
 if(n.type!=='gate'){const sc=story.scenes[n.scene],ch=sc.chronology;if(ch?.domain==='story-day'){if(ch.day<p.maxDay&&ch.mode!=='flashback'){check(false,'unexpected-backward-day',{node:n.id,previousDay:p.maxDay,day:ch.day});}if(ch.mode==='flashback')chronologyBacksteps.set(n.id,{day:ch.day,previousDay:p.maxDay});else p.maxDay=Math.max(p.maxDay,ch.day);}}
 if(chapter===10){for(let i=0;i<epilogueNodes.length;i++)if(epilogueNodes[i].has(n.id)){if(!p.epilogue.includes(i))p.epilogue.push(i);check(i===((p.flags.route==='piao'&&p.flags.piaoRelationship==='dating')?0:1),'epilogue-exclusive-condition',{node:n.id,route:p.flags.route,relationship:p.flags.piaoRelationship});if(i===1)check(n.speaker!=='huangqiuqiu'&&n.character!=='huangqiuqiu','qiu-absent-from-wedding',{node:n.id});}
  if(scope!=='common')check(p.epilogue.length===1,'epilogue-before-route-ending',{node:n.id,epilogues:p.epilogue});
 }
 if(n.type==='choice'){let choices=n.choices.map((c,i)=>({c,i})).filter(({c})=>satisfies(c.requires,p.flags));check(choices.length>0,'choice-has-option',{node:n.id});for(const {c,i}of choices){seenChoices.add(`${n.id}:${i}`);stack.push({...p,id:c.next,flags:{...p.flags,[n.flag]:c.value},trace:[...p.trace],choiceTrace:[...p.choiceTrace,{node:n.id,index:i,value:c.value}],epilogue:[...p.epilogue]});}break;}
 if(n.type==='gate'){const matches=n.cases.filter(c=>Object.hasOwn(p.flags,c.flag)&&p.flags[c.flag]===c.value);check(matches.length===1||(!n.exhaustive&&matches.length===0&&n.default),'gate-strict-matching',{node:n.id,matches:matches.length});const c=matches[0];p.id=c?c.next:n.default;seenGateEdges.add(`${n.id}:${c?n.cases.indexOf(c):'default'}`);continue;}
 if(n.type==='end'&&!n.next){completePaths++;let e=contract.endings.find(e=>e.id===n.id);check(!!e&&satisfies(e.requires,p.flags),'terminal-contract-semantics',{node:n.id,flags:p.flags});check(p.epilogue.length===1,'terminal-one-epilogue',{node:n.id,epilogues:p.epilogue});endingWitnesses[n.id]??={choices:p.choiceTrace,flags:p.flags,epilogue:p.epilogue[0]};break;}
 p.id=n.next;
}}
check(seenNodes.size===Object.keys(story.nodes).length,'all-nodes-reachable',{seen:seenNodes.size,total:Object.keys(story.nodes).length});
for(const n of Object.values(story.nodes)){if(n.type==='choice')n.choices.forEach((_,i)=>check(seenChoices.has(`${n.id}:${i}`),'all-options-reachable',{node:n.id,index:i}));if(n.type==='gate')n.cases.forEach((_,i)=>check(seenGateEdges.has(`${n.id}:${i}`),'all-gate-cases-reachable',{node:n.id,index:i}));}
for(const e of contract.endings)check(!!endingWitnesses[e.id],'all-13-ending-witnesses',{ending:e.id});
check(Object.keys(hiddenWitnesses).length===4,'all-hidden-combinations',{});
for(const [p,digest]of Object.entries(fingerprints))check(sha(p)===digest,'inputs-unchanged',{file:p});
const result={schemaVersion:1,task:'E10',suite:'independent-content-source-semantics',generatedAt:new Date().toISOString(),status:errors.length?'failed':'passed',independence:'只读取正式story、17源、契约与10份审阅稿；未导入E02/E09检查器或历史结果；自行遍历全部合法选择路径。',fingerprints,suiteSha256:sha('qa/ten-chapter/content/audit.cjs'),metrics:{modules:modules.length,chapters:Object.keys(source).length,nonblankLines:coverage.length,bodySourceParagraphs:bodyMaps.length,bodyNodes:bodyNodeUses.size,exclusions:exclusionReview.length,transformedParagraphs:transforms.length,completePaths,nodeVisits:visits,reachableNodes:seenNodes.size,choices:seenChoices.size,gateCases:seenGateEdges.size,endings:Object.keys(endingWitnesses).length,semanticObligations:obligationList.length,conditionalNodes:obligations.size},checks:counts,errors,transforms,exclusionReview,semanticObligations:obligationList,semanticWitnesses:Object.fromEntries(semanticWitnesses),endingWitnesses,hiddenWitnesses,flashbackNodeCount:chronologyBacksteps.size,evidenceBoundary:{machine:'逐源行完整性、精确正文、声明来源与排除类别、独立选择/门禁模拟、条件义务和路径见证。',agentReading:'关键条件、后日谈、13结局和变身/日序段落另见report.md；不是真人完整通读或阅读时长。',cancelledByUser:['真人阅读及阅读时长','声音试听'],notCovered:['真实设备画面','引擎API恢复（由另一套E10检查承担）']}};
fs.writeFileSync(path.join(__dirname,'results.json'),JSON.stringify(result,null,2)+'\n');
fs.writeFileSync(path.join(__dirname,'coverage.json'),JSON.stringify(coverage,null,2)+'\n');

const review=['# E10 来源排除与转换明细','', '由本目录 audit.cjs 随 results.json 同次生成。只有条件前缀转门禁及明确日序/互斥拆分；所有实际正文逐字核对。', '', '## 14 处转换', ''];
for(const t of transforms){review.push('### '+t.source,'',t.raw,'','转换：'+t.classification,'');for(const n of t.displayedSegments)review.push('- '+n.node+'：'+n.text);review.push('');}
review.push('## 143 条排除记录','','heading-only：标题不重复播作对白，日序另核对；reading-rule：审阅标注/资格提示不作为旁白；navigation：链接和分隔线；choice-label-excerpt：仅排除重复按钮副本，完整回答仍保留。','','| 来源 | 原文 | 理由 | 正文仍保留 |','| --- | --- | --- | --- |');
for(const e of exclusionReview)review.push('| '+e.file+':'+e.line+' | '+e.raw.replace(/\|/g,'\\|')+' | '+e.reason+' | '+(e.bodyRetained?'是':'不适用')+' |');
fs.writeFileSync(path.join(__dirname,'source-review.md'),review.join('\n')+'\n');
console.log(JSON.stringify({status:result.status,metrics:result.metrics,errorCount:errors.length,errors:errors.slice(0,20)},null,2));if(errors.length)process.exitCode=1;
