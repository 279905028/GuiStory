#!/usr/bin/env node
'use strict';
// 只读取正式资产与章节源，所有写入仅落在本脚本目录。可复跑：node qa/a06-20261023/backgrounds/audit.cjs
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '../../..');
const sharp = require(path.join(root, 'deployment/cloudflare/node_modules/sharp'));
const read = p => JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const write = (name, value) => fs.writeFileSync(path.join(__dirname,name), typeof value==='string'?value:JSON.stringify(value,null,2)+'\n');
const manifestPath = 'assets/ten-chapter/backgrounds/a04-manifest.json';
const manifest = read(manifestPath);
const generations = read('assets/ten-chapter/backgrounds/generation-record.json');
const legacy = read('assets/webp-manifest.json');
const manual = JSON.parse(fs.readFileSync(path.join(__dirname,'visual-review.json'),'utf8'));
const modules = [...Array.from({length:10},(_,i)=>'任务拆分/全十章/common/ch'+String(i+1).padStart(2,'0')+'.json'),...['xiaoman','zhouzhi','mengyao','yelan','piao','friends','huangqiuqiu'].map(r=>'任务拆分/全十章/routes/'+r+'.json')].map(file=>({file,data:read(file)}));
const errors=[];
const assetById = new Map(manifest.items.map(a=>[a.id,a]));
const allNodes = new Map(modules.flatMap(m=>Object.entries(m.data.nodes).map(([id,node])=>[id,{...node,moduleFile:m.file}])));
function scoped(moduleSuffix, sceneId, assetId, reason, decision='replace') {
  const m=modules.find(m=>m.file.endsWith(moduleSuffix));
  const scene=m.data.scenes[sceneId];
  if(!scene)throw new Error('Missing scene '+sceneId);
  const nodeIds=Object.values(m.data.nodes).filter(n=>n.scene===sceneId).map(n=>n.id);
  const refs=m.data.sourceMap.filter(r=>r.nodeIds.some(id=>nodeIds.includes(id)));
  return {moduleFile:m.file,sceneId,nodeIds,assetId,previousAssetId:scene.bg,decision,reason,time:scene.time,chronology:scene.chronology,location:scene.location,sourceRefs:refs,limit:'仅限所列实际节点；不得扩展到同章、同场段或回叙饭局。'};
}
const overrides=[
  scoped('common/ch06.json','ts_c06_common_closed_echo','tc-bg-echo-closed-dawn','第31天06:00接班后经过回声；门关闭、门灯熄灭且清晨已亮。包含2个显示节点与1个同场路由控制节点。'),
  scoped('routes/zhouzhi.json','ts_c06_zhouzhi_after_closing_closed_echo','tc-bg-echo-closed-day','第32天17:10下午经过已停业回声；沿用闭门日景，不能被清晨变体整体覆盖。','retain-confirmed'),
  scoped('routes/mengyao.json','ts_c10_mengyao_friends_bakery','tc-bg-bridge-dusk','两年后17:40朋友饭局散场后才经过烧饼店；仅朋友结尾018和end_friends用傍晚桥头图。001—011饭局保留food-dusk、012—017街道保留street-dusk。'),
  scoped('routes/zhouzhi.json','ts_c09_zhouzhi_dating_eaves','tc-bg-eaves-day','第75天18:10晚饭后的雨天屋檐。原图为灰蓝低照度天光、屋檐灯已亮，无强日照；有限采用为尚有天光的阴雨傍晚，不根据day后缀将它解释为正午。','retain-reviewed-dusk'),
  scoped('routes/zhouzhi.json','ts_c10_zhouzhi_dating_eaves','tc-bg-eaves-day','两年后傍晚饭后在住处外屋檐；灰蓝阴雨天光与点亮屋檐灯符合尚有天光的傍晚。只用通用屋檐质感，不认定图中具体门牌或建筑即周栀住处。','retain-reviewed-dusk')
];
const restrictions=[
 {id:'full-landscape',assetIds:manifest.items.map(a=>a.id),rule:'采用清单原尺寸完整横图作为独立场景区；390×844居中cover只保留约26%的原始宽度。全幅+竖裁静态审核不构成真实游戏与实体手机验收。'},
 {id:'no-universal-cover',assetIds:['tc-bg-echo-day','tc-bg-echo-closed-day','tc-bg-echo-closed-dawn','tc-bg-bridge-day','tc-bg-bridge-dusk','tc-bg-eaves-day','tc-bg-netcafe-pc-day','tc-bg-netcafe-pc-night','tc-bg-bookstore-day','tc-bg-arcade-basketball','tc-bg-arcade-airhockey','tc-bg-arcade-rowing'],rule:'中央竖裁丢失双门、烧饼店、屋檐走廊或双人设备；这些场景禁止以统一居中cover作为唯一呈现。'},
 {id:'foreground-clearance',assetIds:['tc-bg-courtyard-day','tc-bg-courtyard-night','tc-bg-practice-room','tc-bg-xiaoman-home-day','tc-bg-game-store-day'],rule:'两凳、双话筒冰杯、两袋番茄及门口矮凳处于画面下部；人物及对白布局需保留或用单独分镜，实际叠层待E08/E10验证。'},
 {id:'eaves-dusk-scope',assetIds:['tc-bg-eaves-day'],rule:'只按有天光的阴雨傍晚有限采用；不能替代明确深夜。必须保留右侧屋檐和走廊，不能把图中某扇门当作正文已确认的住址。'},
 {id:'banquet-neutral-shop',assetIds:['tc-bg-banquet-day'],rule:'图面是有简单红色装饰、餐桌和食物的普通小店，无预置宾客；可作E03普通小店婚宴。不得补写面馆身份、地址、宾客人数或球球。'},
 {id:'separate-props',assetIds:['tc-bg-kiosk-eaves-day','tc-bg-used-books-day','tc-bg-bookstore-day','tc-bg-tea-day','tc-bg-netcafe-counter-day'],rule:'半个发字、收据、班表、书页等必读信息需要独立文字/道具层，不能从背景模糊字样提取。'}
];
const unspecifiedLocations=modules.flatMap(m=>Object.entries(m.data.scenes).filter(([id,s])=>s.location===''&&s.bg!=='tc-bg-chapter-end').map(([sceneId,s])=>({moduleFile:m.file,sceneId,assetId:s.bg,time:s.time,nodeIds:Object.values(m.data.nodes).filter(n=>n.scene===sceneId).map(n=>n.id),status:'content-location-unspecified',rule:'背景仅为演出候选，不从图面反推住宅、店名、工作单位或人物在场。E09绑定前保留未指明地点；若选具体店铺含义须先确认。'})));
const chapterEnds=modules.flatMap(m=>Object.entries(m.data.scenes).filter(([id,s])=>s.bg==='tc-bg-chapter-end').map(([sceneId,s])=>({moduleFile:m.file,sceneId,nodeIds:Object.values(m.data.nodes).filter(n=>n.scene===sceneId).map(n=>n.id)})));
const holds=[{id:'unspecified-location-staging',status:'requires-content-confirmation-before-concrete-location-binding',scenes:unspecifiedLocations},{id:'chapter-end-neutral-surface',assetId:'tc-bg-chapter-end',status:'E09-programmatic-presentation-required',scenes:chapterEnds,rule:'这是9个中性章末控制场景，不是A04第56张背景；建议使用项目现有深色底/渐变与章名作为程序绘制界面，移除地点与人物。该建议尚未实现，不能套用任一街道或店铺图片。'}];
async function decode(file){const info=await sharp(path.join(root,file)).metadata();const raw=await sharp(path.join(root,file)).ensureAlpha().raw().toBuffer();return {info,raw};}
async function main(){
 const items=[];
 for(const a of manifest.items){
  const {info,raw}=await decode(a.file);const record=generations.items.find(g=>g.file===a.file);const old=legacy.assets.find(g=>g.webp.path===a.file);
  const sourcePath=a.sourcePath||old?.source.path; const s=sourcePath?await decode(sourcePath):null;
  const sourceSha256=sourcePath?sha(sourcePath):null;const expectedSourceSha=record?.sourceSha256||old?.source.sha256||null;
  const actualSha=sha(a.file);const review=manual.items.find(x=>x.assetId===a.id);
  const checks={webp:info.format==='webp',decoded:true,dimensionsMatch:info.width===a.width&&info.height===a.height,sha256Match:actualSha===a.sha256,bytesMatch:fs.statSync(path.join(root,a.file)).size===a.bytes,alphaMatch:!!info.hasAlpha===a.hasAlpha,sourceAvailable:!!s,sourceDimensionsMatch:!!s&&info.width===s.info.width&&info.height===s.info.height,sourcePixelsEqual:!!s&&raw.equals(s.raw),sourceHashMatch:expectedSourceSha?sourceSha256===expectedSourceSha:null,visualReviewRecorded:!!review,visualReviewMatchesSelectedFile:review?.selectedFile===a.file&&review?.sha256===actualSha};
  const pass=Object.values(checks).every(v=>v!==false);if(!pass)errors.push(a.id);
  items.push({assetId:a.id,file:a.file,sourcePath,sha256:actualSha,sourceSha256,width:info.width,height:info.height,format:info.format,hasAlpha:!!info.hasAlpha,bytes:fs.statSync(path.join(root,a.file)).size,centerCoverOriginalWidthFraction: +(390/844*info.height/info.width).toFixed(6),adoption:'adopted-library-with-presentation-restrictions',runtimeIntegrated:false,checks,pass,visualReview:review,sourceMobileRestriction:a.mobile});
 }
 const generationChecks=[];
 for(const g of generations.items){const a=await decode(g.file),b=await decode(g.sourcePath);const checks={webp:a.info.format==='webp',dimensionsEqual:a.info.width===b.info.width&&a.info.height===b.info.height,pixelsEqual:a.raw.equals(b.raw),sourceHashMatch:sha(g.sourcePath)===g.sourceSha256,webpHashMatch:sha(g.file)===g.sha256};const pass=Object.values(checks).every(Boolean);if(!pass)errors.push(g.file);generationChecks.push({generationId:g.generationId,file:g.file,sourcePath:g.sourcePath,selected:manifest.items.some(a=>a.file===g.file),checks,pass});}
 const uniqueIds=new Set(items.map(a=>a.assetId)).size===55;const uniqueFiles=new Set(items.map(a=>a.file)).size===55;const uniqueHashes=new Set(items.map(a=>a.sha256)).size===55;
 if(!(uniqueIds&&uniqueFiles&&uniqueHashes))errors.push('duplicate-selected-assets');
 const nodeValidation=overrides.map(o=>({sceneId:o.sceneId,nodeCount:o.nodeIds.length,pass:o.nodeIds.every(id=>allNodes.get(id)?.scene===o.sceneId)&&assetById.has(o.assetId)}));if(nodeValidation.some(v=>!v.pass))errors.push('node-overrides');
 const contactSheets=[];
 for(let page=0;page<7;page++){const layers=[];for(let k=0;k<8;k++){const i=page*8+k,a=manifest.items[i];if(!a)break;const x=(k%2)*650,y=Math.floor(k/2)*400;layers.push({input:Buffer.from('<svg width="650" height="36"><text x="8" y="26" font-family="sans-serif" font-size="19" fill="#d7e2e4">'+(i+1)+'. '+a.id.replace('tc-bg-','')+'</text></svg>'),left:x,top:y});layers.push({input:await sharp(path.join(root,a.file)).resize(450,253,{fit:'contain',background:'#17252b'}).png().toBuffer(),left:x+8,top:y+38});layers.push({input:await sharp(path.join(root,a.file)).resize(172,372,{fit:'cover',position:'centre'}).png().toBuffer(),left:x+470,top:y+23});}const name='contact-'+(page+1)+'.webp';await sharp({create:{width:1300,height:1600,channels:3,background:'#17252b'}}).composite(layers).webp({quality:90}).toFile(path.join(__dirname,name));contactSheets.push({file:'qa/a06-20261023/backgrounds/'+name,sha256:sha('qa/a06-20261023/backgrounds/'+name)});}
 const result={schemaVersion:'1.0.0',date:'2026-10-23',owner:'A06',pass:errors.length===0,evidenceLayer:'current-static-image-and-node-mapping-audit',formalIntegration:false,browserVerified:false,physicalDeviceVerified:false,manifestPath,manualReviewSha256:sha('qa/a06-20261023/backgrounds/visual-review.json'),freshEvidenceReviewed:manual.freshEvidenceReviewed===true,manifestSha256:sha(manifestPath),sourceMapSha256:sha('assets/ten-chapter/backgrounds/source-map.json'),moduleFingerprints:modules.map(m=>({file:m.file,sha256:sha(m.file)})),summary:{selected:items.length,selectedPixelsEqual:items.filter(i=>i.checks.sourcePixelsEqual).length,selectedFormatsVerified:items.filter(i=>i.checks.webp).length,sourceGenerationPairs:generationChecks.length,unselectedGenerationPairs:generationChecks.filter(g=>!g.selected).length,uniqueIds,uniqueFiles,uniqueHashes,visualReviewed:manual.items.length,chapterEndScenes:chapterEnds.length,unspecifiedLocationScenes:unspecifiedLocations.length,overridesValidated:nodeValidation.length},items,generationChecks,nodeValidation,contactSheets,errors,notes:['A04选定资源保持真实原尺寸；未生成、转码或修改正式图片。','本轮重新执行55组采用图来源像素比较，并重验48组A04生成记录；3张首稿不进入采用清单。','本轮图面审阅记录可追溯至visual-review.json；脚本复跑重做机器检查，不自动重新执行人工图面判断。']};
 write('node-overrides.json',{schemaVersion:'1.0.0',date:'2026-10-23',formalIntegration:false,sourceModuleFingerprints:result.moduleFingerprints,overrides,restrictions,holds});
 write('audit.json',result);
 write('report.md',`# A06 背景采用复核\n\n2026-10-23｜静态图面与实际节点映射；正式接入、浏览器叠层及实体手机均未验。\n\n- 本轮55张选定WebP均真实解码，尺寸/指纹/alpha与A04清单一致，55组原PNG与选定WebP解码像素一致；48组A04生成记录也重新核验，3张旧首稿未采用。\n- 尺寸沿用真实输出（主要1672×941；街道日景1671×941、傍晚1670×941），不声明1920×1080。\n- 55张完整横图及对应390:844居中竖裁已逐项审阅；作为资源库采用，所有项保留裁切和演出限制。实际运行状态仍为未接入。\n- 已重生成本目录7张全图/竖裁证据；静态竖裁约保留26%原始宽度。回声门、桥头店、屋檐、双人设备等不能统一居中cover。\n\n## 节点采用\n\n|范围|采用|限制|\n|---|---|---|\n|第六章第31天06:00共通闭门段|tc-bg-echo-closed-dawn|仅closed_echo_01/02与同场gate；第30天饭局、网吧不改。|\n|周栀第32天17:10回声路口|tc-bg-echo-closed-day|仅after_closing_005—011，保留白天停业状态。|\n|孟遥两年后朋友结尾烧饼店|tc-bg-bridge-dusk|仅friends_018与end_friends；饭局001—011、街道012—017不改。|\n|周栀第75天及两年后恋人屋檐|tc-bg-eaves-day|原图灰蓝阴雨天光、屋檐灯点亮，有限采用为雨天尚亮傍晚；不当深夜，保留右侧屋檐全景。|\n\n精确节点、源行及源模块指纹见[node-overrides.json](node-overrides.json)。周栀屋檐仅是中性环境，未把任何图中门牌补成其住址。婚宴图为普通小店无预置人物，可采用但不能新增面馆身份、宾客或球球。\n\n## 待E09/E10处理\n\n- ${unspecifiedLocations.length}个未指定地点场景只保留演出候选；飘第九章/两年后茶店桌边等须确认演出，不据图补设定。\n- tc-bg-chapter-end是${chapterEnds.length}个中性章末控制场景；交E09用现有深色/渐变底与章名程序绘制。没有伪造第56张背景，也未借用街景。\n- 背景中模糊字样不充当半个“发”字、票据、班表、书页等必读信息，需独立文字/道具层。\n- E08/E10在正式集成中验全景保留、立绘/对白遮挡、昼夜切换、浏览器及实体手机。\n\n## 复跑\n\n项目根目录运行：\n\n\`node qa/a06-20261023/backgrounds/audit.cjs\`\n\n机器核验详见[audit.json](audit.json)，图面观察见[visual-review.json](visual-review.json)。脚本只写本目录；人工图面结论不会被复跑自动重新认定。\n`);
 console.log(JSON.stringify({pass:result.pass,summary:result.summary,errors},null,2)); if(errors.length)process.exitCode=1;
}
main().catch(e=>{console.error(e);process.exitCode=1;});
