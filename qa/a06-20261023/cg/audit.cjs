'use strict';
// A06 独立只读复核 A05；仅写本目录，不绑定正式游戏。
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto'), assert = require('node:assert/strict');
const sharp = require('../../../deployment/cloudflare/node_modules/sharp');
const root = path.resolve(__dirname, '../../..');
const read = p => JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const save = (p,v) => fs.writeFileSync(path.join(__dirname,p),JSON.stringify(v,null,2)+'\n');
const manifestPath = 'assets/ten-chapter/cg/a05-manifest.json';
const m = read(manifestPath), a01Path = '任务拆分/全十章/美术清单.json', a01 = read(a01Path);
const inputPaths = new Set([manifestPath,a01Path,'项目文档/美术资源规范.md','任务拆分/全十章/交接/A05.md','任务拆分/全十章/交接/E06.md']);
const modulePaths = ['routes/piao.json','routes/huangqiuqiu.json','common/ch06.json','common/ch10.json'].map(p=>'任务拆分/全十章/'+p);
const modules = modulePaths.map(p=>{inputPaths.add(p); return {path:p,...read(p)};});
const nodes = Object.assign({},...modules.map(v=>v.nodes));
const registry = new Map();
for(const who of fs.readdirSync(path.join(root,'assets/ten-chapter/characters'))) {
  const p = `assets/ten-chapter/characters/${who}/manifest.json`;
  if(!fs.existsSync(path.join(root,p))) continue;
  inputPaths.add(p);
  for(const a of read(p).assets) registry.set(a.delivery.path,{owner:'A02',assetId:a.id,manifest:p,sha256:a.delivery.sha256});
}
const a03Path = 'assets/ten-chapter/huangqiuqiu/manifest.json', a04Path = 'assets/ten-chapter/backgrounds/a04-manifest.json';
inputPaths.add(a03Path);inputPaths.add(a04Path);
for(const a of read(a03Path).entries) registry.set(a.image.path,{owner:'A03',assetId:a.assetId,manifest:a03Path,sha256:a.image.sha256});
for(const a of read(a04Path).items) registry.set(a.file,{owner:'A04',assetId:a.id,manifest:a04Path,sha256:a.sha256});
function trace(start,stop) {
  const chain=[];let id=start;
  while(id!==stop) { assert(nodes[id],`missing ${id}`);assert(!chain.includes(id),`cycle ${id}`);chain.push(id);assert.equal(nodes[id].type,'line');id=nodes[id].next;assert(chain.length<100); }
  assert(nodes[stop],`missing exit ${stop}`);return chain;
}
const visual = {
  'tc-ui-cover-desktop': {observed:'逐图查看：标题、副题、三名前景人物与河桥剪影完整；胸袋无工具、桥上无相机。', inspectedImages:['assets/ten-chapter/ui/cover-desktop.webp']},
  'tc-ui-cover-mobile': {observed:'逐图查看：独立竖构图；标题、副题、三名前景人物及河桥保留；无工具、相机或挂带。', inspectedImages:['assets/ten-chapter/ui/cover-mobile.webp']},
  'tc-cg-piao-choice': {observed:'逐图和手部局部查看：低马尾、白衬衫黑边、红绳；两瓶水、饼袋；双手在自己膝前，无另一人手或牵手。', inspectedImages:['assets/ten-chapter/cg/cg-piao-choice.webp','qa/a06-20261023/cg/piao-hands.webp']},
  'tc-cg-last-echo-dinner': {observed:'逐图查看：周栀与毛狼的双人局部饭桌，暮色小店、碗筷及椅背外套；无职业器材或仪式。只可解释为共通多人饭局切镜。', inspectedImages:['assets/ten-chapter/cg/cg-last-echo-dinner.webp']},
  'tc-cg-qiuqiu-transform': {observed:'逐图和手部下缘查看：眼贴在画面右侧，黑颈饰、棕发、米灰外套和白印花内搭；两手扶浅色玩偶棒；下缘为外套、无新增下装；空凳、无握手拥抱或施法。', inspectedImages:['assets/ten-chapter/cg/cg-qiuqiu-transform.webp','qa/a06-20261023/cg/qiuqiu-hands-hem.webp']},
  'tc-cg-piao-wedding': {observed:'逐图和领口/册子局部查看：门口站姿、便西装和简洁粉礼裙；毛狼整理领口、飘扶衣袖；右下无字册子；无球球或额外宾客。', inspectedImages:['assets/ten-chapter/cg/cg-piao-wedding.webp','qa/a06-20261023/cg/wedding-collar.webp','qa/a06-20261023/cg/wedding-book.webp']}
};
async function main(){
 const items=[];
 for(const x of m.items){
  inputPaths.add(x.file);inputPaths.add(x.source.path);
  const raw=fs.readFileSync(path.join(root,x.file)), meta=await sharp(path.join(root,x.file)).metadata(), sourceMeta=await sharp(path.join(root,x.source.path)).metadata();
  const wp=await sharp(path.join(root,x.file)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const sp=await sharp(path.join(root,x.source.path)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  let alphaMin=255,alphaMax=0,nonOpaque=0;
  for(let i=3;i<wp.data.length;i+=4){alphaMin=Math.min(alphaMin,wp.data[i]);alphaMax=Math.max(alphaMax,wp.data[i]);if(wp.data[i]!==255)nonOpaque++;}
  const checks={riffWebp:raw.toString('ascii',0,4)==='RIFF'&&raw.toString('ascii',8,12)==='WEBP',decodes:meta.format==='webp',sourcePng:sourceMeta.format==='png',dimensionsMatchManifest:meta.width===x.width&&meta.height===x.height,dimensionsMatchSource:meta.width===sourceMeta.width&&meta.height===sourceMeta.height,alphaMatchManifest:meta.hasAlpha===x.hasAlpha,rgbaPixelsEqual:wp.data.equals(sp.data),fileHashMatch:hash(x.file)===x.sha256,sourceHashMatch:hash(x.source.path)===x.source.sha256,bytesMatch:raw.length===x.bytes};
  for(const [k,v]of Object.entries(checks)) assert(v,`${x.id}: ${k}`);
  const nodeEvidence=x.nodeEvidence.map(e=>{const current=nodes[e.id];const checked={id:e.id,module:e.module,moduleSha256:hash(e.module),moduleHashMatchesA05:hash(e.module)===e.moduleSha256,textMatchesA05:current?.text===e.text,scene:current?.scene,next:current?.next};assert(checked.moduleHashMatchesA05&&checked.textMatchesA05,`${x.id}: stale source`);return checked;});
  items.push({id:x.id,label:x.label,kind:x.kind,file:x.file,sha256:hash(x.file),source:x.source,width:meta.width,height:meta.height,bytes:raw.length,hasAlpha:meta.hasAlpha,alpha:{min:alphaMin,max:alphaMax,nonOpaquePixels:nonOpaque},checks,nodeEvidence,visual:{status:'pass-static-review',...visual[x.id]},adoptionRecommendation:'adopted-static-awaiting-E09',runtimeBindingStatus:'not-integrated'});
 }
 const boardDecisions=m.boardDecisions.map(b=>{
  const original=a01.storyboards.find(s=>s.id===b.boardId);assert(original,`A01 board missing ${b.boardId}`);
  const fallback=(b.fallbackPaths||[]).map(file=>{const r=registry.get(file);assert(r,`not in A02-A04 manifest: ${file}`);assert(fs.existsSync(path.join(root,file)),file);assert.equal(hash(file),r.sha256,`fallback hash ${file}`);inputPaths.add(file);return {file,...r,exists:true,sha256Matches:true};});
  if(b.file)assert(items.some(x=>x.id===b.assetId&&x.file===b.file));
  return {boardId:b.boardId,label:original.label,priority:b.priority,decision:b.decision,assetId:b.assetId,deliveryFile:b.file||null,fallbacks:fallback,a01Conditions:original.conditions,status:b.file?'independent-cg-adopted-static':'fallback-assets-resolved-static',runtimeBound:false};
 });
 assert.equal(boardDecisions.length,10);assert.equal(boardDecisions.filter(b=>b.deliveryFile).length,4);
 const weddingGate=nodes.tc_c10_common_epilogue_route_gate,piaoGate=nodes.tc_c10_common_piao_relationship_gate;
 function epilogueTarget(flags){let c=weddingGate.cases.find(c=>flags[c.flag]===c.value);if(!c)return null;if(c.next===piaoGate.id)c=piaoGate.cases.find(c=>flags[c.flag]===c.value);return c?.next||null;}
 const gateExamples=['xiaoman','zhouzhi','mengyao','yelan','piao','friends','huangqiuqiu','unknown'].flatMap(route=>['dating','friends',null].map(piaoRelationship=>{const f={route,piaoRelationship};const target=epilogueTarget(f);const allowed=target==='tc_c10_common_piao_wedding';const expected=['xiaoman','zhouzhi','mengyao','yelan','friends','huangqiuqiu'].includes(route)||(route==='piao'&&piaoRelationship==='friends');assert.equal(allowed,expected);return {...f,target,weddingCgAllowed:allowed};}));
 const q=nodes.tc_c08_huangqiuqiu_human_reveal;
 assert.equal(q.onEnter.setFlags.qiuForm,'human');assert.deepEqual(q.onEnter.requires,[{flag:'route',value:'huangqiuqiu'},{flag:'qiuSignal',value:'record'},{flag:'qiuReply',value:'reply'},{flag:'qiuMet',value:true}]);
 const seqIds=m.qiuqiuSequence.map(x=>x.node),qchain=trace(seqIds[0],nodes[seqIds.at(-1)].next),positions=seqIds.map(id=>qchain.indexOf(id));
 assert(positions.every((p,i)=>p>=0&&(i===0||p>positions[i-1])));assert(!JSON.stringify(q.onEnter).includes('qiuRelationship'));
 const rules={schemaVersion:'1.0.0',task:'A06',date:'2026-10-23',scope:'static-art-adoption; recommendations for E09, not runtime bindings',sourceFingerprints:modulePaths.map(p=>({path:p,sha256:hash(p)})),global:{fit:'contain',cropAllowed:false,clearCgOnNodeOutsideAllowedSpan:true,clearCgOnBranchChange:true,clearCgOnSceneChange:true,restoreVisibilityFromCurrentNodeAndStateOnLoad:true,noPersistentCgCarryover:true,hideRegularSpritesWhileCgVisible:true,restoreSpritesAndBackgroundOnExit:true,dialogue:'下缘手部/玩偶棒/册子不得被永久遮挡；文本置图外或提供可隐藏对白。',unlock:'只有在合法状态实际到达并显示相应节点后才解锁；静态文件存在和加入清单不等于已解锁。',acceptancePending:['E09 正式绑定/重建','E10 引擎与回顾/存读档/分支回退','E10 真实浏览器与实体手机画面']},items:[]};
 for(const x of m.items){
  if(x.kind==='ui'){rules.items.push({id:x.id,file:x.file,kind:'cover',orientation:x.width>x.height?'landscape':'portrait',storyNodeBinding:null,conditions:[],publicHumanQiuqiuAllowed:false});continue;}
  const span=trace(x.suggestedNodeIds[0],x.exitBefore);
  const r={id:x.id,file:x.file,enterAt:span[0],allowedNodeIds:span,exitBefore:x.exitBefore,exitExplicitlyClearsCg:true,conditions:[],notes:x.rules};
  if(x.id==='tc-cg-piao-choice')Object.assign(r,{conditions:[{flag:'route',value:'piao'}],relationshipCondition:'none; choice has not been answered',clearBeforeChoice:'tc_c03_piao_relationship_choice',forbiddenNodePrefixes:['tc_c03_piao_dating_','tc_c03_piao_friends_'],conflictResolution:'A05实际中性成图与A01允许中性方案优先；E06旧“牵手CG只适合交往正文”描述的是未采用候选，不可据此把本图移到交往段或给朋友段加牵手。'});
  if(x.id==='tc-cg-last-echo-dinner')Object.assign(r,{conditions:[],context:'第30天18:00共通饭局；先交代多人在场，局部镜头仅见周栀/毛狼，不增加约会关系。',forbiddenAfter:'tc_c06_common_meal_goodbye_01'});
  if(x.id==='tc-cg-qiuqiu-transform')Object.assign(r,{conditions:[...q.onEnter.requires,{flag:'qiuForm',value:'human'}],requiresEventPreviouslyExecuted:q.id,relationshipCondition:'none; never gate transformation by romance',publicGallery:'locked until legitimately seen; do not expose human form in public covers or locked memories',forbiddenScenes:['chapter7-day42','wedding'],doNotShowBeforeNode:q.id,sequence:m.qiuqiuSequence});
  if(x.id==='tc-cg-piao-wedding')Object.assign(r,{conditions:{any:[{flag:'route',in:['xiaoman','zhouzhi','mengyao','yelan','friends','huangqiuqiu']},{all:[{flag:'route',value:'piao'},{flag:'piaoRelationship',value:'friends'}]}]},rejectInvalidOrMissingRoute:true,explicitlyExcluded:{all:[{flag:'route',value:'piao'},{flag:'piaoRelationship',value:'dating'}]},cast:['piao','maolang'],neverAddCharacter:'huangqiuqiu',note:'球球路线可以经过文文参加的公共婚宴；球球本人不得在婚宴画面出现。'});
  rules.items.push(r);
 }
 const sequence=m.qiuqiuSequence.map((s,i)=>{assert(nodes[s.node]);assert(fs.existsSync(path.join(root,s.file)));return {...s,text:nodes[s.node].text,positionInLinearChain:positions[i],nodeExists:true};});
 save('integration-rules.json',rules);
 const audit={schemaVersion:'1.0.0',task:'A06',pass:true,subtask:'A05 CG/covers/storyboards',date:'2026-10-23',completedAt:new Date().toISOString(),verdict:'pass-static-art-adoption',actualGameIntegration:false,counts:{images:items.length,cg:items.filter(x=>x.kind==='cg').length,covers:items.filter(x=>x.kind==='ui').length,storyboards:boardDecisions.length,fallbackBoards:boardDecisions.filter(x=>x.fallbacks.length).length,fallbackReferences:boardDecisions.reduce((n,x)=>n+x.fallbacks.length,0),uniqueFallbackFiles:new Set(boardDecisions.flatMap(x=>x.fallbacks.map(f=>f.file))).size,sequenceBeats:sequence.length,gateExamples:gateExamples.length},items,boardDecisions,sourceChecks:{allSuggestedNodesExist:true,allExitNodesExist:true,allA05ModuleFingerprintsCurrent:true,weddingGateExamples:gateExamples,qiuqiuSequence:sequence,qiuqiuHumanEvent:q.onEnter,noRomanceGateOnHumanEvent:true},decisions:[{id:'piao-neutral-cg-vs-old-e06-note',status:'resolved',evidence:['任务拆分/全十章/交接/A05.md',manifestPath,'任务拆分/全十章/交接/E06.md','qa/a06-20261023/cg/piao-hands.webp'],resolution:'采用实际无牵手的选择前中性CG；选择前退出，后续两关系走各自文本/差分。E06候选牵手说明不适用本图。'},{id:'qiuqiu-transform-framing',status:'accepted-with-integration-constraint',resolution:'A05近景暖色切镜可采用；A01同机位连续变身仍由A03球形/人形承担。本CG仅human_reveal已执行后的扶正玩偶棒节点使用。'}],inputs:[...inputPaths].sort().map(p=>({path:p,sha256:hash(p)})),notExecuted:['正式游戏绑定/重建','实际游戏CG进入退出与解锁测试','浏览器/实体手机验收','存读档/回顾验收'],historicalEvidenceNotClaimedAsCurrent:['qa/a05-20261023/gallery-check.json']};
 save('audit.json',audit);
 console.log(JSON.stringify({verdict:audit.verdict,counts:audit.counts,artifacts:['qa/a06-20261023/cg/audit.json','qa/a06-20261023/cg/integration-rules.json']}));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
