'use strict';
// A05 独立交付打包；不修改故事、构建或旧美术。
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto'), assert = require('node:assert/strict');
const sharp = require('../../deployment/cloudflare/node_modules/sharp');
const root = path.resolve(__dirname, '../..');
const abs = p => path.join(root, p), read = p => JSON.parse(fs.readFileSync(abs(p), 'utf8'));
const write = (p, o) => fs.writeFileSync(abs(p), JSON.stringify(o, null, 2) + '\n');
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(abs(p))).digest('hex');
const cg = 'assets/ten-chapter/cg/', ui = 'assets/ten-chapter/ui/';
const a01 = read('任务拆分/全十章/美术清单.json');
const jobs = read(cg + 'generation-index.json').jobs;
const selected = jobs.filter(j => j.selected);
const modules = ['routes/piao.json', 'routes/huangqiuqiu.json', 'common/ch06.json', 'common/ch10.json'].map(p => ({path:'任务拆分/全十章/' + p, ...read('任务拆分/全十章/' + p)}));
const nodes = Object.assign({}, ...modules.map(m => m.nodes));
const nodeEvidence = id => { assert(nodes[id], id); const m = modules.find(m => m.nodes[id]); return {id, module:m.path, moduleSha256:hash(m.path), text:nodes[id].text, source:m.sourceMap.filter(s => s.nodeIds?.includes(id))}; };
const specs = {
 'cg-piao-choice': {id:'tc-cg-piao-choice', label:'这一次讲明白', board:'a01-board-piao-choice', suggestedNodeIds:['tc_c03_piao_say_clearly_002'], exitBefore:'tc_c03_piao_relationship_choice', rules:['仅飘路线、选择前的共同谈话。选择后退出CG，交往／朋友分别使用差分和文本；朋友版不得牵手。','A01候选锚点列表偏重选择后段，本图实际建议是选择前河边共同段，以E06节点原文为准。'], review:'低马尾、浅酒窝、黑边白衬衫与红绳吻合；两瓶水与饼袋在场，无牵手。手和道具接近下缘，需完整显示。'},
 'cg-last-echo-dinner': {id:'tc-cg-last-echo-dinner',label:'吃完还要上班',board:'a01-board-last-echo-dinner',suggestedNodeIds:['tc_c06_common_last_night_meal_07'],exitBefore:'tc_c06_common_meal_goodbye_01',rules:['第30天18:00共通饭局局部镜头；其他在场角色位于画外，先用背景＋立绘交代全员。','只用于菜端上来后的谈话，不替代周栀离席、回声关门或文文网吧到岗。'],review:'周栀深青衬衫、毛狼黑色花纹T恤，暮色小店、碗筷、外套吻合；无职业道具和仪式。双人近景不得解释为二人约会。'},
 'cg-qiuqiu-transform': {id:'tc-cg-qiuqiu-transform',label:'她自己决定换个模样',board:'a01-board-qiuqiu-transform',suggestedNodeIds:['tc_c08_huangqiuqiu_her_decision_025'],exitBefore:'tc_c08_huangqiuqiu_her_decision_028',rules:['仅已相识且当前路线huangqiuqiu；必须已执行human_reveal的onEnter并且qiuForm=human。','只表现变身后扶正玩偶棒，不得在轻搭手、松手、退凳或球形变化时提前显示。恋爱选择不参与触发。','不用于第42天、不放公开封面／未解锁回顾，婚宴不得出现。'],review:'v2下缘仅米灰外套，未补下装；眼贴位于画面右侧、颈饰、发型、玩偶棒与基准吻合。空凳表达留出的距离，无握手、拥抱或施法特效。CG为较暖的近景切镜，不应宣称与远景逐像素同光照。'},
 'cg-piao-wedding': {id:'tc-cg-piao-wedding',label:'领子没有歪',board:'a01-board-piao-wedding',suggestedNodeIds:['tc_c10_common_piao_wedding_04'],exitBefore:'tc_c10_common_piao_wedding_05',rules:['仅E03公共婚宴分支：排除route=piao且piaoRelationship=dating；绝不放到文文与飘交往的朋友饭局。','E03 ch10场景已指定普通小店婚宴，沿A04空间制作。毛狼便西装、飘简洁礼裙沿A02用户确认。','第二版册子身份由原文交代，封面不生成文字；球球及未确认宾客不入镜。'],review:'v2两人站在门框内，毛狼整理领口；飘看向领口、轻扶衣袖，小桌册子在右下。角色脸型与衣装吻合，普通小店规模。首版坐姿拒收。'},
 'cover-desktop': {id:'tc-ui-cover-desktop',label:'横版封面修订',suggestedNodeIds:[],rules:['保持既有封面与标题布局，仅修订胸袋工具与桥上相机剪影；不新增UI图。'],review:'工具与相机轮廓已去除；标题“毕节，雨停之前”及副题“贵州 · 毕节”、三名前景人物、其余剪影及河桥暮色保留。生成编辑带来细微纹理变化，不宣称修改区外像素完全相同。'},
 'cover-mobile': {id:'tc-ui-cover-mobile',label:'竖版封面修订',suggestedNodeIds:[],rules:['独立竖构图，与横图同样去工具及相机，不由横版裁切。'],review:'工具、镜头及挂带已去除；原有竖版标题、人物与河桥构图保留。生成编辑带来细微纹理变化。'}
};
const fallback = {
 breakfast:['早餐只需困倦文文与毛狼对话，背景＋差分足够，不额外做全员接风CG。','tc-bg-breakfast-dawn',['wenwen','maolang']],
 'online-first-meet':['叶岚线下停顿由去夹板基础／犹豫表情承担，不改成职业交接。','tc-bg-food-day',['yelan']],
 'shift-request':['网吧柜台与师匠对话沿E03节点，饭盒／手机用文本表达，不画授奖竞聘。','tc-bg-netcafe-counter-day',['wenwen','shijiang']],
 'qiuqiu-answer':['第九章仍用人形差分；恋人同意后的拥抱用正文表达，朋友分坐留空，不共用接触CG。','tc-bg-courtyard-day',['huangqiuqiu']],
 'small-everyday':['两年后家常饭局由毛狼、飘、师匠日常立绘与家中背景承担，不画成功合影。','tc-bg-maolang-home-day',['maolang','piao','shijiang','wenwen']],
 'qiuqiu-epilogue':['两年后两种关系均人形；复用托腮／挥手差分，接触动作只按恋人正文表达。','tc-bg-courtyard-day',['huangqiuqiu']]
};
async function main(){
 const items=[];
 for(const j of jobs){ assert(fs.existsSync(abs(j.source))); for(const p of j.references)assert(fs.existsSync(abs(p)),p); }
 for(const j of selected){
  const spec=specs[j.id], m=await sharp(abs(j.source)).metadata();
  if(!fs.existsSync(abs(j.output)))await sharp(abs(j.source)).webp({lossless:true,effort:6}).toFile(abs(j.output));
  const wm=await sharp(abs(j.output)).metadata(), bytes=fs.readFileSync(abs(j.output));
  assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WEBP');assert.equal(wm.format,'webp');
  const a=await sharp(abs(j.source)).ensureAlpha().raw().toBuffer(),b=await sharp(abs(j.output)).ensureAlpha().raw().toBuffer();assert(a.equals(b),j.output);
  assert.equal(m.width,wm.width);assert.equal(m.height,wm.height);
  if(j.dir==='ui'){const old=await sharp(abs(j.references[0])).metadata();assert.equal(m.width,old.width);assert.equal(m.height,old.height);}
  if(spec.exitBefore)assert(nodes[spec.exitBefore],spec.exitBefore);
  const a01asset=a01.assets.find(a=>a.id===spec.id);assert(a01asset);
  items.push({...spec,kind:j.dir==='ui'?'ui':'cg',source:{path:j.source,sha256:hash(j.source)},file:j.output,sha256:hash(j.output),bytes:bytes.length,width:m.width,height:m.height,format:'webp',hasAlpha:wm.hasAlpha,encoding:{lossless:true,effort:6},validation:{decodes:true,dimensionsEqual:true,rgbaPixelsEqual:true},references:j.references.map(p=>({path:p,sha256:hash(p)})),cueIds:a01asset.cueIds,nodeEvidence:spec.suggestedNodeIds.map(nodeEvidence),adoptionStatus:'awaiting-A06',bindingStatus:'awaiting-E09',runtimeNodeIds:[],display:{fit:'contain',cropAllowed:false,dialogue:'关键手部或册子位于下部时，将文本置于图外或提供隐藏文本框查看。'}});
 }
 const bg=read('assets/ten-chapter/backgrounds/a04-manifest.json').items;
 const forms=read('assets/ten-chapter/huangqiuqiu/forms-index.json').characters.huangqiuqiu.forms;
 const boardDecisions=a01.storyboards.map(b=>{
  const slug=b.id.replace('a01-board-',''), item=items.find(x=>x.board===b.id);
  if(item)return {boardId:b.id,priority:b.priority,decision:'独立CG＋前后立绘演出',assetId:item.id,file:item.file,rules:item.rules};
  const [reason,bgId,chars]=fallback[slug]; const backdrop=bg.find(x=>x.id===bgId); assert(backdrop);
  const paths=[backdrop.file];for(const c of chars){if(c==='huangqiuqiu'){paths.push(forms.human.image,forms.human.expressions['action-thinking'],forms.human.expressions['action-wave']);}else{const entries=read(`assets/ten-chapter/characters/${c}/manifest.json`).assets;paths.push(...entries.filter(x=>x.kind==='character'&&['base','expression-hesitant','expression-smile'].includes(x.expression)).map(x=>x.delivery.path));}}
  paths.forEach(p=>assert(fs.existsSync(abs(p)),p));return {boardId:b.id,priority:b.priority,decision:'不另制CG；使用已交付背景／立绘／正文',reason,assetId:b.assetIds[0],deliveryPath:null,fallbackPaths:paths,adoptionStatus:'fallback-assets-awaiting-A06',originalConditions:b.conditions};
 });
 assert.equal(boardDecisions.length,10);assert.equal(items.length,6);
 const sequence=[
  {beat:'轻搭手',node:'tc_c08_huangqiuqiu_her_decision_001',form:'sphere',file:forms.sphere.expressions['action-hand'],note:'A03姿态＋正文表达接触；不新增紧握或告白。'},
  {beat:'她自主松开',node:'tc_c08_huangqiuqiu_her_decision_010',form:'sphere',file:forms.sphere.image},
  {beat:'文文收手、退凳',node:'tc_c08_huangqiuqiu_her_decision_019',form:'sphere',file:forms.sphere.image},
  {beat:'轮廓变化',node:'tc_c08_huangqiuqiu_her_decision_020',form:'sphere',file:forms.sphere.image,note:'由E08／E09淡出球形；不提前切人形，不加恋爱条件。'},
  {beat:'揭示人形并执行形态事件',node:'tc_c08_huangqiuqiu_human_reveal',form:'human',file:forms.human.image,note:'先执行原有onEnter，再解析人形立绘和头像。'},
  {beat:'扶正玩偶棒的近景',node:'tc_c08_huangqiuqiu_her_decision_025',form:'human',file:cg+'cg-qiuqiu-transform.webp'},
  {beat:'退出CG继续聊天',node:'tc_c08_huangqiuqiu_her_decision_028',form:'human',file:forms.human.image}
 ];
 for(const s of sequence){nodeEvidence(s.node);assert(fs.existsSync(abs(s.file)),s.file);}
 assert.equal(nodes.tc_c08_huangqiuqiu_human_reveal.onEnter.setFlags.qiuForm,'human');
 const manifest={version:'a05-20261023-v1',date:'2026-10-23',owner:'A05',status:'art-delivered-awaiting-A06',contractVersion:'1.0.0',contentRevision:'nightshift-20261022-r1',a01Version:a01.version,actualIntegration:false,pathsRelativeTo:'project-root',counts:{cg:4,covers:2,originals:8,superseded:2,storyboardsResolved:10,spriteAlternatives:6},items,boardDecisions,qiuqiuSequence:sequence,superseded:jobs.filter(j=>!j.selected).map(j=>({path:j.source,sha256:hash(j.source),reason:j.id.includes('wedding')?'坐姿不符门口迎客':'下沿出现未确认的深色下装片段'}))};
 write(cg+'a05-manifest.json',manifest);
 write(ui+'a05-covers.json',{version:manifest.version,items:items.filter(x=>x.kind==='ui')});
 write('qa/a05-20261023/validation.json',{date:manifest.date,pass:true,images:items.map(x=>({id:x.id,width:x.width,height:x.height,...x.validation})),boardCount:10,sequenceNodeCount:sequence.length,formalGameTest:false});
 write(cg+'visual-review.json',{date:manifest.date,method:'逐张查看工具原始成图和修订图，核对角色基准、动作、剧情、时段、道具与文字；非游戏验收',items:items.map(x=>({id:x.id,result:'可交A06复核',notes:x.review})),limitations:['实际CG为1672×941，保留真实尺寸，未伪放大到1920×1080。','关键动作／道具不保证处于上中65%安全区；使用contain并允许隐藏文字框，禁止竖屏cover裁切。','静态通过不等于正式采用、浏览器游戏或实体手机通过。']});
 const escape=s=>s.replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
 const cards=items.map(x=>`<article data-kind="${x.kind}"><h2>${escape(x.label)}</h2><a href="../../../${x.file}"><img src="../../../${x.file}" alt="${escape(x.label)}" width="${x.width}" height="${x.height}"></a><p>${x.width} × ${x.height} · 无损 WebP · 待 A06 采用</p><p>${escape(x.review)}</p><ul>${x.rules.map(s=>`<li>${escape(s)}</li>`).join('')}</ul></article>`).join('\n');
 fs.writeFileSync(abs(cg+'index.html'),`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>A05｜关键CG与封面</title><style>body{margin:0;background:#162326;color:#ede8df;font:16px/1.7 system-ui}main{max-width:1440px;padding:28px;margin:auto}h1{font-size:30px}nav{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}button,a{color:inherit}button{background:#314548;border:1px solid #708987;border-radius:6px;padding:8px 18px;cursor:pointer}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}article{background:#223337;padding:20px;border-radius:12px}img{display:block;width:100%;height:auto;max-height:650px;object-fit:contain;background:#111a1c}h2{font-size:22px;margin-top:0}li{margin:8px 0}ul{padding-left:22px}[hidden]{display:none!important}body.light{background:#f2eee5;color:#213336}.light article{background:white}.light button{background:#dce5df}@media(max-width:760px){main{padding:16px}.grid{grid-template-columns:1fr}article{padding:14px}h1{font-size:24px}}</style><main><h1>A05 · 关键 CG 与封面修订</h1><p>4 张关键 CG · 2 张封面 · 10 项分镜均有制作取舍。以下包含隐藏角色人形与结局剧透，仅供制作审阅。</p><p>制作交付完成，待 A06 采用和 E09 接入。点击图片看原尺寸；完整等比显示，不裁切。</p><nav><button data-filter="all">全部 6 张</button><button data-filter="cg">CG 4 张</button><button data-filter="ui">封面 2 张</button><button id="theme">切换明暗底</button><a href="README.md">分镜及交接说明</a><a href="a05-manifest.json">资源清单</a></nav><section class="grid">${cards}</section></main><script>document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>document.querySelectorAll('article').forEach(c=>c.hidden=b.dataset.filter!=='all'&&c.dataset.kind!==b.dataset.filter));document.querySelector('#theme').onclick=()=>document.body.classList.toggle('light');</script></html>`);
 const sheet=[];for(let i=0;i<items.length;i++){sheet.push({input:await sharp(abs(items[i].file)).resize(640,360,{fit:'contain',background:'#162326'}).png().toBuffer(),left:(i%2)*640,top:Math.floor(i/2)*360});}
 await sharp({create:{width:1280,height:1080,channels:3,background:'#162326'}}).composite(sheet).webp({lossless:true}).toFile(abs('qa/a05-20261023/contact-sheet.webp'));
 const changes=read('qa/a05-20261023/protected-before.json').filter(x=>!fs.existsSync(abs(x.path))||hash(x.path)!==x.sha256);
 const observedExternal=['任务拆分/全十章/校验/E07/completion-recheck.json','任务拆分/全十章/校验/E07/final-audit.json','index.html'];
 const checked=read('qa/a05-20261023/protected-before.json').length;
 write('qa/a05-20261023/protected-after.json',{checked,unchanged:checked-changes.length,allUnchanged:changes.length===0,changes:changes.map(x=>({path:x.path,beforeSha256:x.sha256,afterSha256:fs.existsSync(abs(x.path))?hash(x.path):null,classification:observedExternal.includes(x.path)?'本轮未写入，观察到同期外部变化；未覆盖或还原':'待调查'})),note:'本轮工具写入仅A05交付、A05 QA、A05交接和当前待办；指纹变化本身不能证明具体外部操作者。'});
 assert(changes.every(x=>observedExternal.includes(x.path)),JSON.stringify(changes));
 console.log(JSON.stringify({images:items.length,boards:boardDecisions.length,pixels:'all equal',protectedUnchanged:checked-changes.length,observedExternalChanges:changes.length}));
}
main().catch(e=>{console.error(e);process.exitCode=1});
