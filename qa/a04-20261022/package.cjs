// A04 独立交付整理；不修改游戏、A01 清单或既有美术。
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('../../deployment/cloudflare/node_modules/sharp');
const root = path.resolve(__dirname, '../..');
const assetDir = 'assets/ten-chapter/backgrounds';
const abs = p => path.join(root, p);
const read = p => JSON.parse(fs.readFileSync(abs(p), 'utf8'));
const write = (p, d) => fs.writeFileSync(abs(p), JSON.stringify(d, null, 2) + '\n');
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(abs(p))).digest('hex');
const esc = s => String(s).replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const a01 = read('任务拆分/全十章/美术清单.json');
const requirements = a01.assets.filter(a => a.kind === 'background');
const replacements = {'netcafe-pc-day':'netcafe-pc-day-v2', 'bookstore-day':'bookstore-day-v2', 'xiaoman-home-day':'xiaoman-home-day-v2', 'practice-room':'practice-room-blue'};
const superseded = ['netcafe-pc-day', 'bookstore-day', 'xiaoman-home-day'];
const extra = [
  {id:'tc-bg-echo-closed-dawn', parentAssetId:'tc-bg-echo-closed-day', label:'回声门外·关门清晨', cueIds:['a01-ch06-common-01'], rule:'第31天06:00关门段使用；第32天下午仍用 closed-day。不可整场替换第30天饭局。'},
  {id:'tc-bg-bridge-dusk', parentAssetId:'tc-bg-bridge-day', label:'桥头烧饼店／台阶·尚亮傍晚', cueIds:['a01-ch10-mengyao-02'], rule:'两年后孟遥朋友结局17:40桥头段；天仍亮，不改成深夜。'}
];
const mobileNotes = {
 'street-day':'中央街道可辨；左右店面与坡口不应作为裁后必读线索。',
 'street-dusk':'保持与日景同一街道结构，左右门面需全景建立。',
 'slope-day':'坡道、栏墙能作中性街景；需要完整转弯关系时保留全幅。',
 'busstop-day':'站棚和长凳横向展开；居中竖裁会丢失部分设施。',
 'busstop-dusk':'同站棚傍晚；保持站棚与道路整体关系。',
 'netcafe-counter-day':'收银台、玻璃入口及邻近机位跨越横幅；先以全景建立网吧。',
 'netcafe-counter-night':'与日景同构；人物避免覆盖柜台与门口。',
 'netcafe-pc-day':'双机位偏左、柜台偏右；居中竖裁只剩部分屏幕。',
 'netcafe-pc-night':'双机位位置沿用日景；空场背景不固定顾客身份。',
 'courtyard-day':'两只蓝凳位于下部；对话框勿盖住两凳与门槛；无球球预置。',
 'courtyard-night':'与日景同构；门框天空、两凳和侧门需全景或分镜保留。',
 'backdoor-night':'门外视角；门缝不显球形／人形，隐藏线身份由节点控制。',
 'rental-day':'床偏左、桌与椅居中；全幅可同时交代单人床、书桌与生活角。',
 'rental-night':'沿用同一出租屋几何；夜景桌灯不代表额外剧情事件。',
 'breakfast-dawn':'门外清晨天光、桌位和蒸笼横向分布；不要裁成纯夜宵室内。',
 'salon-day':'镜台与椅子建立理发店；旧图的边缘设施不作为新剧情事实。',
 'convenience-day':'柜台、货架及门外椅需全景；仅裁货架会弱化会面位置。',
 'food-day':'中性桌位；不同店可复用质感，但需转场文字区分地址。',
 'food-dusk':'同店日暮衔接；食物按文本或独立道具层表达。',
 'food-night':'保留旧版无人夜景；不能替代早餐清晨。',
 'food-front-dusk':'门外与店内为不同机位；入口需全景建立。',
 'stall-day':'食品摊及雨棚横向展开，前景食物可能被对白遮住。',
 'stall-night':'沿用同摊夜景；不把日间原文直接套入夜色。',
 'eaves-day':'连续屋檐及湿街关系需保留横幅。',
 'echo-day':'目标双门位于画面最左侧；居中竖裁会完全丢门，必须保留全景或左侧构图。',
 'echo-closed-day':'左侧目标双门关闭、内部熄灯；不能只裁中间街道。',
 'echo-closed-dawn':'左侧双门保持关闭、门灯关闭；清晨天空已亮。',
 'bookstore-day':'双阅读椅在桌子两侧；居中竖裁不能完整保留双座位。',
 'mall-day':'休息区与电梯需全景关系；中央裁切仅用于中性商场过场。',
 'bridge-day':'烧饼店、桥栏与台阶分处横幅；对话和人物勿遮住台阶。',
 'bridge-dusk':'日景同构暖光；仍须保留桥与烧饼店的关系。',
 'park-day':'树荫、步道与长椅同时出现需全幅；不固定鸭／纸船等分支道具。',
 'river-day':'步道、长椅、可避雨台阶需完整关系；下部台阶可能被对白遮挡。',
 'riverside-lawn-day':'保留空地与河边关系；风筝由道具或CG承载，不预置分支结果。',
 'alteration-day':'工作台与衣物可辨；重点线轴／袖口动作另用道具或CG。',
 'arcade-basketball':'双篮机横向并列；勿竖裁成单人设备。',
 'arcade-airhockey':'完整球台与两端站位需要全幅，人物避免压住两端。',
 'arcade-rowing':'双座与双手柄需同时显示；不要仅裁出一个座位。',
 'used-books-day':'书摊、棚下石阶和可坐位置要同时保留。',
 'used-books-closed-dusk':'同一棚与台阶，书已收起；不能回用开摊图。',
 'cinema-interior':'影院过道可辨；屏幕保持抽象，不含真实电影。',
 'tea-day':'双人桌位保持全幅；桌游／书页文字另层，复用不等于同一店。',
 'secondhand-day':'玩具与杂货摊是环境；具体小鸭等选购道具需节点演出。',
 'kiosk-eaves-day':'雨棚和旧牌分布在横幅边侧；半个“发”字、纸船与收据另层。',
 'performance-shop-day':'店内小舞台与普通桌椅须共存，不能裁成独立大型舞台。',
 'game-store-day':'旧游戏设备与门口矮凳需全景交代，矮凳容易被对白遮挡。',
 'parcel-day':'货架与门口分列；不把裁切后货架当作人物住宅。',
 'supermarket-day':'日用品、米袋及货架作为中性购物环境；包装无必读文字。',
 'clothing-day':'普通服装与饰品环境；不补人物试穿结果。',
 'practice-room':'蓝灯、双话筒与两杯冰水在桌面；保留全幅及下部桌面，非回声营业。',
 'tabletennis-day':'球桌、球网与场边座椅需同时保留。',
 'badminton-day':'球网与完整场地几何及座椅需全景，不宜中央竖裁。',
 'xiaoman-home-day':'桌上两袋均为番茄，靠下；对白不应把两袋全部盖住。',
 'maolang-home-day':'普通家中餐桌；餐具数量不推定正文未列的来客。',
 'banquet-day':'仅普通婚宴空间候选；不增加正文未列宾客，不出现球球。'
};
const fullPromptPrefix = 'Use case: illustration-story. Asset: finished environment background for the adult Chinese visual novel 毕节，雨停之前. Generate ONE single full-bleed landscape 1920x1080 image, 16:9, no panels. Contemporary modest Bijie Guizhou, cinematic realistic hand-painted background, fine detailed textures, muted gray teal rain atmosphere and restrained warm practical lights, natural perspective at seated/standing eye level, calm everyday life. No people, faces, silhouettes, creatures, characters, logos, readable text or watermark. Key spatial identity must remain visible in the center 32 percent vertical crop; keep right third uncluttered for a character overlay, no essential detail in bottom third covered by dialogue. Never fantasy, glossy luxury or anime cel outlines. ';
const initial = [
 {id:'netcafe-counter-day',mode:'new',refs:[],prompt:fullPromptPrefix+'Daytime rainy neighborhood internet cafe, ground floor. View from inside toward glass entrance left-of-center; simple cashier desk at center-left with one terminal, muted faded beverage price sheet with UNREADABLE neutral blocks, shelves of water, electric kettle, few empty drink crates. Ceiling fan and light near window. To rear left a few ordinary desktop PC stations in same room; modest gray floor, off-white walls, dark wooden desk, utilitarian blue chairs, window natural overcast daylight. Clear register/counter identity in center third. No computer repair tools, no KTV lobby, no red carpet, no neon gaming palace.'},
 {id:'rental-day',mode:'new',refs:[],prompt:fullPromptPrefix+"Wenwen's very modest rented single room in an ordinary Bijie apartment. One small single bed center-left with plain muted bedding, a cheap desk and desktop computer with headphones center, exactly one basic chair, barred window above left of desk with soft overcast daylight; small wardrobe, closed suitcase tucked beside wall/under bed, a compact washing machine partly at edge, practical hanging rail. Everything lived-in but ordinary and reasonably tidy, no couple photos, no luxury, no workshop. Center crop must show desk, barred window and part of bed. Screen is abstract blank dim neutral interface, no readable words; no perishable food or story-specific props fixed into reusable background."}
];

async function main() {
 const specs = initial.concat(...['prompts.json','prompts-dependent-1.json','prompts-dependent-2.json','prompts-dependent-3.json'].map(f=>read(assetDir+'/'+f).specs));
 for (const s of specs) s.refs=(s.refs||[]).map(p=>p.startsWith(root+'/')?p.slice(root.length+1):p);
 const records=fs.readdirSync(path.join(__dirname,'records')).filter(f=>f.endsWith('.json')).map(f=>read('qa/a04-20261022/records/'+f));
 const recordById=Object.fromEntries(records.map(r=>[r.id,r]));
 const builds=[];
 for(const r of records){
  const source=await sharp(abs(r.sourcePath)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const dest=await sharp(abs(r.file)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const meta=await sharp(abs(r.file)).metadata();
  if(!source.data.equals(dest.data)||source.info.width!==meta.width||source.info.height!==meta.height||meta.format!=='webp'||hash(r.file)!==r.sha256||hash(r.sourcePath)!==r.sourceSha256)throw Error('Image validation failed '+r.id);
  if(!specs.some(s=>'tc-bg-'+s.id===r.id))throw Error('Missing prompt '+r.id);
  builds.push({id:r.id,sourcePath:r.sourcePath,file:r.file,width:meta.width,height:meta.height,format:meta.format,hasAlpha:meta.hasAlpha,decodedPixelsEqual:true,sha256:r.sha256,sourceSha256:r.sourceSha256,bytes:r.bytes,selection:superseded.includes(r.id.slice(6))?'superseded':'candidate'});
 }
 write(assetDir+'/generation-record.json',{version:'a04-20261023-v1',tool:'built-in image_gen',generatedOn:'2026-10-22',verifiedOn:'2026-10-23',encoding:{format:'webp',lossless:true,effort:6},sizeNote:'目标1920×1080，工具实际输出47张1672×941、1张1670×941（street-dusk）；保留真实尺寸，不插值放大或附带裁切。',items:specs.map(s=>({...s,...recordById['tc-bg-'+s.id],generationId:s.id}))});
 const items=[];
 for(const a of requirements.concat(extra)){
  const short=a.id.slice(6), key=replacements[short]||short, r=recordById['tc-bg-'+key];
  const file=r?.file||a.deliveryPath;
  if(!file||!fs.existsSync(abs(file)))throw Error('Missing delivery '+a.id);
  const meta=await sharp(abs(file)).metadata();await sharp(abs(file)).raw().toBuffer();
  items.push({id:a.id,label:a.label,parentAssetId:a.parentAssetId||null,scope:a.parentAssetId?'time-variant':'a01-requirement',plannedAction:a.action||'variant',deliveredAction:r?(a.action==='reuse'?'revise':a.action||'variant'):'reuse',file,sourcePath:r?.sourcePath||null,width:meta.width,height:meta.height,format:meta.format,hasAlpha:meta.hasAlpha,bytes:fs.statSync(abs(file)).size,sha256:hash(file),generationId:r?key:null,cueIds:a.cueIds,notes:a.notes||'',selectionRule:a.rule||null,adoptionStatus:'pending-A06',runtimeBindingStatus:'not-integrated',mobile:{reviewViewport:{width:390,height:844},preferredPresentation:'contain-in-scene-region',centerCoverSafety:'restricted-context',note:mobileNotes[short],integrationAction:'窄屏先保留完整横图；若采用cover，按本项线索另定焦点与分镜，E10在真实立绘／对白叠层下复验。'}});
 }
 if(new Set(items.map(a=>a.id)).size!==items.length)throw Error('Duplicate asset id');
 if(new Set(items.map(a=>a.sha256)).size!==items.length)throw Error('Unexpected identical image');
 const protectedFiles=read('qa/a04-20261022/protected-before.json');
 const changed=protectedFiles.filter(a=>!fs.existsSync(abs(a.path))||hash(a.path)!==a.sha256).map(a=>a.path);
 const sourceMap=a01.chapters.flatMap(c=>c.sections.map(s=>({cueId:s.id,chapter:c.chapter,route:s.route,source:c.source,sourceLineStart:s.sourceLineStart,sourceLineEnd:s.sourceLineEnd,heading:s.heading,time:s.time,scenes:s.scenes.map(scene=>({...scene,assetIds:scene.assetIds.filter(id=>id.startsWith('tc-bg-'))})),conditions:s.conditions,chronologyOverrides:s.chronologyOverrides||[],runtimeNodeIds:[],bindingStatus:'awaiting-A06-E09-node-binding'})));
 const unknown=[...new Set(sourceMap.flatMap(s=>s.scenes.flatMap(x=>x.assetIds)))].filter(id=>!items.some(x=>x.id===id));
 if(unknown.length)throw Error('Uncovered source refs '+unknown.join(','));
 const counts={a01BackgroundIds:requirements.length,generatedSelected:items.filter(i=>i.generationId).length,reused:items.filter(i=>!i.generationId).length,extraTimeVariants:extra.length,selectedFiles:items.length,generatedSourceFiles:records.length,supersededSources:superseded.length,sourceSections:sourceMap.length};
 write(assetDir+'/a04-manifest.json',{schemaVersion:'1.0.0',version:'a04-20261023-v1',owner:'A04',status:'art-delivered-pending-A06',date:'2026-10-23',contractVersion:a01.contractVersion,contentRevision:a01.contentRevision,a01Version:a01.version,a01Sha256:hash('任务拆分/全十章/美术清单.json'),counts,actualIntegration:false,pathsRelativeTo:'project-root',items,superseded:superseded.map(id=>({generationId:id,file:recordById['tc-bg-'+id].file,reason:{'netcafe-pc-day':'背景边缘残留顾客头部，使用v2空场','bookstore-day':'单椅，使用v2双椅','xiaoman-home-day':'第二袋为青菜，使用v2两袋番茄'}[id]})),bindingNotes:[{id:'D05',owner:'E03—E07/A06/E09',note:'复用背景不新增地点事实；E03现有普通小店婚宴语义已给出，图面采用仍由A06确认。飘第九章／恋人后日谈桌边地点未点名，茶店图仅作候选。'},...extra.map(a=>({id:a.id,owner:'A06/E09',note:a.rule}))]});
 write(assetDir+'/source-map.json',{version:'a04-20261023-v1',source:'任务拆分/全十章/美术清单.json',contentRevision:a01.contentRevision,sections:sourceMap});
 const previewDir='qa/a04-20261022/previews';fs.mkdirSync(abs(previewDir),{recursive:true});
 for(const a of items){
  const id=a.id.slice(6);
  await sharp(abs(a.file)).resize(640,360,{fit:'contain',background:'#17252b'}).webp({quality:86}).toFile(abs(previewDir+'/'+id+'-full.webp'));
  await sharp(abs(a.file)).resize(195,422,{fit:'cover',position:'centre'}).webp({quality:86}).toFile(abs(previewDir+'/'+id+'-center.webp'));
 }
 const contactPaths=[];
 for(let start=0;start<items.length;start+=8){
  const composite=[];let labels='';
  for(let j=0;j<8&&start+j<items.length;j++){
   const a=items[start+j],x=(j%2)*650,y=Math.floor(j/2)*400,id=a.id.slice(6);
   composite.push({input:await sharp(abs(a.file)).resize(450,253,{fit:'contain',background:'#17252b'}).png().toBuffer(),left:x+8,top:y+38});
   composite.push({input:await sharp(abs(a.file)).resize(172,372,{fit:'cover',position:'centre'}).png().toBuffer(),left:x+470,top:y+23});
   labels+=`<text x="${x+8}" y="${y+24}">${start+j+1}. ${esc(id)}</text><text x="${x+8}" y="${y+318}" font-size="15">Full frame / center cover 390:844 →</text><rect x="${x+470}" y="${y+276}" width="172" height="119" fill="#15202b" fill-opacity=".68"/><text x="${x+478}" y="${y+298}" font-size="12">dialogue risk zone</text>`;
  }
  composite.push({input:Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="1600"><g font-family="Arial,sans-serif" font-size="19" fill="#d9e5e7">${labels}</g></svg>`),left:0,top:0});
  const out='qa/a04-20261022/contact-'+(Math.floor(start/8)+1)+'.webp';
  await sharp({create:{width:1300,height:1600,channels:3,background:'#17252b'}}).composite(composite).webp({quality:90}).toFile(abs(out));contactPaths.push(out);
 }
 const cards=items.map(a=>{
  const rel=path.relative(abs(assetDir),abs(a.file)), thumb=path.relative(abs(assetDir),abs(previewDir+'/'+a.id.slice(6)+'-full.webp')), crop=path.relative(abs(assetDir),abs(previewDir+'/'+a.id.slice(6)+'-center.webp'));
  return `<article data-search="${esc(a.id+' '+a.label+' '+a.cueIds.join(' '))}"><div class="caption"><span>${a.generationId?'本批制作':'原图复用'}${a.scope==='time-variant'?' · 补充时段':''}</span><h2>${esc(a.label)}</h2><code>${a.id}</code></div><a href="${rel}" target="_blank" title="打开全尺寸图片"><img class="full" src="${thumb}" alt="${esc(a.label)}" loading="lazy"></a><div class="details"><div><p>${esc(a.mobile.note)}</p><p class="meta">${a.width} × ${a.height} · WebP · ${(a.bytes/1048576).toFixed(2)} MB</p><a href="${rel}" target="_blank">打开原尺寸</a>${a.sourcePath?' · <a href="'+path.relative(abs(assetDir),abs(a.sourcePath))+'" target="_blank">PNG 原件</a>':''}${a.selectionRule?'<p class="rule">'+esc(a.selectionRule)+'</p>':''}</div><details><summary>查看居中竖裁风险</summary><img class="crop" src="${crop}" alt="${esc(a.label)}：390比844居中裁切诊断" loading="lazy"><p>仅裁切诊断，未叠真实立绘／对白。</p></details></div></article>`;
 }).join('\n');
 const html=`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>A04 · 十章背景画廊</title><style>*{box-sizing:border-box}body{margin:0;background:#101c21;color:#dfe8e8;font:16px/1.65 system-ui,-apple-system,sans-serif}header,main{max-width:1380px;margin:auto;padding:32px}header{padding-bottom:18px}h1{font-size:34px;margin:8px 0}p{margin:10px 0}a{color:#aadbc5}small,.meta{color:#a0b9bb}input{width:100%;padding:14px 18px;border:1px solid #486365;border-radius:8px;background:#1b3037;color:inherit;font:inherit;margin-top:16px}main{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;padding-top:14px}article{background:#1a2b32;border:1px solid #344b51;border-radius:12px;overflow:hidden}article[hidden]{display:none}.caption,.details{padding:18px 22px}.caption span{font-size:13px;color:#a8d2bb}h2{font-size:20px;margin:4px 0}code{font-size:12px;color:#9cb3b8;overflow-wrap:anywhere}.full{width:100%;display:block;aspect-ratio:16/9;object-fit:contain;background:#111c21}.details{padding-top:8px}.crop{display:block;width:195px;max-width:100%;margin-top:14px}.rule{border-left:3px solid #c0ac75;padding-left:12px}summary{cursor:pointer;color:#c7d3d7}details{padding-top:12px}.count{font-size:14px;color:#9cb3b8}@media(max-width:760px){header,main{padding:20px}main{grid-template-columns:1fr}h1{font-size:27px}.caption,.details{padding-left:16px;padding-right:16px}}</style><header><small>毕节，雨停之前 · A04 · 2026-10-23</small><h1>十章场景与时段</h1><p>53 项背景需求，另附 2 张时段变体。45 张本批制作，10 张原图复用。</p><p>已完成图片制作与静态核验，待 A06 采用、E09 接入。竖屏建议先保留完整横图；每项提供居中裁切诊断与遮挡提示，实际游戏画面由 E10 验收。</p><p><a href="a04-manifest.json">资源清单</a> · <a href="source-map.json">原文场段映射</a> · <a href="../../../任务拆分/全十章/交接/A04.md">交接说明</a> · <a href="../../../qa/a04-20261022/report.json">核验数据</a></p><label for="search">按场景名、资源编号或场段筛选</label><input id="search" type="search" placeholder="例如：网吧、回声、ch10"><div class="count" id="count">55 / 55 项</div></header><main>${cards}</main><script>const cards=[...document.querySelectorAll('article')],q=document.querySelector('#search'),count=document.querySelector('#count');q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();let n=0;for(const c of cards){c.hidden=!c.dataset.search.toLowerCase().includes(v);if(!c.hidden)n++;}count.textContent=n+' / '+cards.length+' 项';});</script></html>`;
 fs.writeFileSync(abs(assetDir+'/index.html'),html);
 const localLinks=[...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(x=>x[1]).filter(x=>!x.startsWith('#'));
 const missingLinks=localLinks.filter(p=>!fs.existsSync(path.resolve(abs(assetDir),p)));
 if(missingLinks.length)throw Error('Missing gallery links '+missingLinks.join(', '));
 for(const script of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new (require('vm').Script)(script[1]);
 const report={date:'2026-10-23',version:'a04-20261023-v1',counts,imageValidation:{generatedPairs:builds.length,allDecodedPixelsEqual:true,actualWebp:true,allSourcesPreserved:true,selectedAllDecode:true,duplicateSelectedHashes:0,generatedDimensions:[...new Set(builds.map(r=>r.width+'x'+r.height))]},coverage:{requirements:requirements.length,covered:items.filter(i=>i.scope==='a01-requirement').length,missing:unknown,sourceSections:sourceMap.length},protectedFiles:{checked:protectedFiles.length,unchanged:protectedFiles.length-changed.length,changed},contactSheets:contactPaths,staticReview:{status:'pending-contact-review',viewports:[{width:390,height:844}],note:'全图与居中cover裁切诊断；不是正式游戏、浏览器或实体手机验收。'},browserReview:{status:'not-run'},items:builds,remaining:['A06静态采用与最终运行清单','E03—E07未点名地点的演出确认','E09节点绑定及变体选择','E10真实立绘／对白叠层与设备验收']};
 const reviewPath='qa/a04-20261022/visual-review.json';
 if(fs.existsSync(abs(reviewPath))){
  const review=read(reviewPath);
  if(items.every(i=>review.items.some(r=>r.id===i.id&&r.sha256===i.sha256))){report.staticReview.status='reviewed-with-crop-constraints';report.staticReview.evidence=reviewPath;}
 }
 report.browserReview={status:'blocked-not-run',reason:'本地服务监听被沙箱拒绝（EPERM）；浏览器工具拒绝file:协议。未绕过限制。'};
 report.galleryStaticCheck={references:localLinks.length,missing:missingLinks,inlineScriptSyntax:'passed',interaction:'not-run'};
 write('qa/a04-20261022/report.json',report);
 console.log(JSON.stringify({counts,protectedFiles:report.protectedFiles,generatedDimensions:report.imageValidation.generatedDimensions,contacts:contactPaths,links:localLinks.length},null,2));
}
main().catch(e=>{console.error(e);process.exit(1)});
