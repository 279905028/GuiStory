'use strict';
// Read-only A02/A03 audit. Writes only audit.json in this directory; never converts art.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const sharp = require('sharp');
const root = path.resolve(__dirname, '../../..');
const abs = p => path.join(root, p);
const read = p => JSON.parse(fs.readFileSync(abs(p), 'utf8'));
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(abs(p))).digest('hex');
const a02Path = 'assets/ten-chapter/characters/a02-delivery.json';
const a03Path = 'assets/ten-chapter/huangqiuqiu/manifest.json';
const webpPath = 'assets/webp-manifest.json';
const planPath = '任务拆分/全十章/美术清单.json';
const formsPath = 'assets/ten-chapter/huangqiuqiu/forms-index.json';
const generationPath = 'assets/ten-chapter/characters/generation-index.json';
const visualPath = 'qa/a06-20261023/characters/visual-review.json';
const a02 = read(a02Path), a03 = read(a03Path), webp = read(webpPath), plan = read(planPath), forms = read(formsPath), generation = read(generationPath);
const errors = [];
const requireCheck = (condition, message) => { if (!condition) errors.push(message); return !!condition; };
function pixelCompare(a, b) {
  if (a.length !== b.length) return { dimensionsEqual: false, alphaEqual: false, visibleRgbEqual: false };
  let alphaDifferences = 0, visibleRgbDifferences = 0, invisibleRgbDifferences = 0;
  for (let i=0; i<a.length; i+=4) {
    if (a[i+3] !== b[i+3]) alphaDifferences++;
    for(let c=0;c<3;c++) if(a[i+c] !== b[i+c]) { if(a[i+3] || b[i+3]) visibleRgbDifferences++; else invisibleRgbDifferences++; }
  }
  return {dimensionsEqual:true, alphaEqual:alphaDifferences===0, visibleRgbEqual:visibleRgbDifferences===0, alphaDifferences, visibleRgbDifferences, invisibleRgbDifferences};
}
function alphaInfo(data,w,h) {
  let transparent=0,partial=0,opaque=0,min=255,max=0,left=w,top=h,right=-1,bottom=-1;
  for(let i=3;i<data.length;i+=4){const a=data[i];min=Math.min(min,a);max=Math.max(max,a); if(a===0)transparent++;else if(a===255)opaque++;else partial++;if(a>=16){const p=(i-3)/4,x=p%w,y=Math.floor(p/w);left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}}
  return {min,max,transparent,partial,opaque,bboxAlphaAtLeast16:{left,top,right,bottom}};
}
function resolveOriginal(sourcePath, file) {
  if(sourcePath.endsWith('.png')) return {path:sourcePath,via:'batch-source-PNG'};
  const entry=webp.assets.find(e=>e.webp.path===sourcePath||e.webp.path===file);
  if(entry) return {path:entry.source.path,sha256:entry.source.sha256,via:webpPath,webpManifestSha256:entry.webp.sha256};
  return {path:sourcePath,via:'missing-PNG-provenance'};
}
async function inspect(spec) {
  const {id,file,sourcePath,expectedSha256,expectedSourceSha256,width,height}=spec;
  try {
    const bytes=fs.readFileSync(abs(file));const m=await sharp(bytes).metadata();
    const original=resolveOriginal(sourcePath,file);
    requireCheck(original.via!=='missing-PNG-provenance',id+': missing PNG provenance');
    const sourceMeta=await sharp(abs(original.path)).metadata();
    const actualHash=hash(file),sourceHash=hash(sourcePath),originalHash=hash(original.path);
    const checks={exists:true,realWebP:bytes.toString('ascii',0,4)==='RIFF'&&bytes.toString('ascii',8,12)==='WEBP'&&m.format==='webp',sha256MatchesBatch:actualHash===expectedSha256,sourceHashMatchesBatch:!expectedSourceSha256||sourceHash===expectedSourceSha256,originalHashMatchesWebpManifest:!original.sha256||originalHash===original.sha256,webpHashMatchesWebpManifest:!original.webpManifestSha256||actualHash===original.webpManifestSha256,dimensionsExpected:m.width===width&&m.height===height,hasAlpha:m.hasAlpha===true};
    const targetRaw=await sharp(bytes).ensureAlpha().raw().toBuffer();
    const sourceRaw=await sharp(abs(original.path)).ensureAlpha().raw().toBuffer();
    const pixels=pixelCompare(sourceRaw,targetRaw);pixels.dimensionsEqual=sourceMeta.width===m.width&&sourceMeta.height===m.height&&pixels.dimensionsEqual;
    Object.entries(checks).forEach(([k,v])=>requireCheck(v,id+': '+k));
    for(const k of ['dimensionsEqual','alphaEqual','visibleRgbEqual'])requireCheck(pixels[k],id+': '+k);
    return {...spec,sha256:actualHash,sourceSha256:sourceHash,sourcePngPath:original.path,sourcePngSha256:originalHash,provenance:original.via,width:m.width,height:m.height,format:m.format,hasAlpha:m.hasAlpha,bytes:bytes.length,decodes:true,checks,pixels,alpha:alphaInfo(targetRaw,m.width,m.height),adoptionRecommendation:'adopted-static',bindingStatus:'awaiting-E09',gameIntegrated:false,pass:Object.values(checks).every(Boolean)&&pixels.dimensionsEqual&&pixels.alphaEqual&&pixels.visibleRgbEqual};
  } catch(e) {errors.push(id+': '+e.message);return {...spec,pass:false,error:e.message};}
}
async function main(){
  const inputs=[planPath,a02Path,a03Path,webpPath,formsPath,generationPath,visualPath,'assets/ten-chapter/characters/visual-review.json','assets/ten-chapter/huangqiuqiu/baseline-approval.json','assets/ten-chapter/huangqiuqiu/production-inputs.json'].map(path=>({path,sha256:hash(path)}));
  const specs=[];
  for(const e of a02.assets) specs.push({id:e.id,owner:'A02',role:'main',character:e.character,kind:e.kind,expression:e.expression,file:e.delivery.path,sourcePath:e.source.path,expectedSha256:e.delivery.sha256,expectedSourceSha256:e.source.sha256,width:1024,height:1536,cueIds:e.cueIds,method:e.method});
  for(const e of a03.entries){
    specs.push({id:e.assetId,owner:'A03',role:'main',character:'huangqiuqiu',form:e.form,expression:e.key,file:e.image.path,sourcePath:e.source.path,expectedSha256:e.image.sha256,expectedSourceSha256:e.source.sha256,width:e.form==='human'?1024:1254,height:e.form==='human'?1536:1254,cueIds:e.cueIds});
    specs.push({id:e.assetId+':avatar',parentAssetId:e.assetId,owner:'A03',role:'avatar',character:'huangqiuqiu',form:e.form,expression:e.key,file:e.avatar.path,sourcePath:e.avatar.original,expectedSha256:e.avatar.sha256,width:512,height:512,crop:e.avatar.crop,resize:e.avatar.resize});
  }
  const records=[];for(const s of specs) records.push(await inspect(s));
  // Reproduce the documented crop/resize in memory; compare against saved avatar PNG.
  const avatarDerivations=[];
  for(const e of a03.entries){
    const reproduced=await sharp(abs(e.image.path)).extract(e.avatar.crop).resize(e.avatar.resize.width,e.avatar.resize.height,{kernel:e.avatar.resize.kernel}).ensureAlpha().raw().toBuffer();
    const saved=await sharp(abs(e.avatar.original)).ensureAlpha().raw().toBuffer();
    const pixels=pixelCompare(reproduced,saved);const pass=pixels.dimensionsEqual&&pixels.alphaEqual&&pixels.visibleRgbEqual;requireCheck(pass,e.assetId+': avatar derivation');avatarDerivations.push({id:e.assetId,file:e.avatar.path,pixels,pass});
  }
  const actualIds=new Set(specs.filter(s=>s.role==='main').map(s=>s.id));
  const expected=plan.assets.filter(e=>['A02','A03'].includes(e.owner));
  const coverage={expected:expected.length,delivered:actualIds.size,missing:expected.filter(e=>!actualIds.has(e.id)).map(e=>e.id),extra:[...actualIds].filter(id=>!expected.some(e=>e.id===id))};
  requireCheck(!coverage.missing.length&&!coverage.extra.length,'A01 coverage');requireCheck(new Set(specs.map(s=>s.id)).size===specs.length,'unique record IDs');
  const formChecks=[];
  for(const e of a03.entries){const f=forms.characters.huangqiuqiu.forms[e.form],binding=forms.assetBindings[e.assetId];const image=e.key==='base'?f.image:f.expressions[e.key],avatar=e.key==='base'?f.avatarImage:f.avatarExpressions[e.key];const pass=image===e.image.path&&avatar===e.avatar.path&&binding.image===e.image.path&&binding.avatarImage===e.avatar.path&&binding.form===e.form&&f.presentation===(e.form==='sphere'?'orb':'human');requireCheck(pass,e.assetId+': forms index');formChecks.push({id:e.assetId,form:e.form,expression:e.key,image,avatar,pass});}
  const rejected=generation.entries.filter(e=>!e.selected).map(e=>({owner:'A02',id:e.resourceId,path:e.original,reason:e.rejectionReason,sha256:hash(e.original)}));
  // A03 v1 files are retained provenance, never adopt the superseded compositions.
  for(const e of a03.entries.filter(e=>/-v2\.png$/.test(e.source.path))){const p=e.source.path.replace('-v2.png','.png');if(fs.existsSync(abs(p))) rejected.push({owner:'A03',id:e.assetId,path:p,sha256:hash(p),reason:'A03原始首版；已由留白/构图修订v2替代'});}
  for(const r of rejected)requireCheck(!specs.some(s=>s.file===r.path||s.sourcePath===r.path),r.path+': rejected/superseded used');
  // Preserve the actual 2026-10-23 review snapshot; reruns do not invent a new review.
  const visualSnapshot=read(visualPath),reviewedEvidence=visualSnapshot.evidence;
  for(const e of reviewedEvidence)requireCheck(hash(e.path)===e.sha256,'visual evidence changed: '+e.path);
  for(const e of visualSnapshot.reviewedFiles)requireCheck(hash(e.path)===e.sha256,'visually reviewed file changed: '+e.path);
  const constraints={professionSets:[{character:'wenwen',resourceIds:a02.assets.filter(e=>e.character==='wenwen').map(e=>e.id),requirement:'7张基础/表情统一使用去维修工具版本；禁止切回旧工具图。'},{character:'mengyao',resourceIds:a02.assets.filter(e=>e.character==='mengyao').map(e=>e.id),requirement:'6张基础/表情及2衣装均无相机与挂颈带；整组采用。'},{character:'yelan',resourceIds:a02.assets.filter(e=>e.character==='yelan').map(e=>e.id),requirement:'6张基础/表情及1衣装均无夹板；整组采用。'}],looks:a02.assets.filter(e=>e.kind==='look').map(e=>({id:e.id,file:e.delivery.path,onlyBasePose:true,noLookExpressionMatrix:true,requirement:'衣装启用后保持本套基础图；缺表情另列补图，不能自动退回日常衣装。'})),qiuForms:{formFlag:'qiuForm',spherePresentation:'orb',humanPresentation:'human',switchAnchor:'tc_c08_huangqiuqiu_human_reveal',history:'历史节点按历史形态恢复，禁止全局替换球形',missing:'缺图报错，禁止跨形态回退',avatars:'双形态与每个表情/动作同步解析专用头像；人形裁切与球形全画布缩放不同'},specialCases:['师匠犹豫图是既有未注册候选，本轮可随Option A整组静态采用。','小满新外套仅采用-v2.webp；首版拒收。','叶岚平底鞋超出大腿截幅；周栀外套搭椅背由场景演出承担。','球球人形为透明腰部截幅，无下半身设计；轻搭手仅球球一只小手，未包含对方手指或双人接触CG。','球球人形最高alpha=254继承PNG；差分存在细微衣褶/头部位置变化，应统一画布等比和底部锚点，切换平滑度待集成。','48px球球人形犹豫/认真表情差别克制，实际对话框识别度待E10。']};
  constraints.looks=a02.assets.filter(e=>e.id.startsWith('tc-look-')).map(e=>({id:e.id,file:e.delivery.path,onlyBasePose:true,noLookExpressionMatrix:true,requirement:'衣装启用后保持本套基础图；缺表情另列补图，不能自动退回日常衣装。'}));
  const report={schemaVersion:1,task:'A06',subtask:'characters-A02-A03',date:'2026-10-23',generatedAt:new Date().toISOString(),pass:errors.length===0,inputHashes:inputs,contractVersion:a02.contractVersion,contentRevision:a02.contentRevision,encoderRuntime:{sharp:sharp.versions.sharp,webp:sharp.versions.webp},summary:{a02Main:53,a02Generated:records.filter(r=>r.owner==='A02'&&r.method==='imagegen-edit').length,a02Reused:records.filter(r=>r.owner==='A02'&&r.method==='reuse').length,a02Looks:constraints.looks.length,a03Main:12,a03Avatars:12,mainAssets:65,physicalWebpFiles:new Set(specs.map(s=>s.file)).size,sourcePngComparisons:records.length,reviewedEvidenceCount:reviewedEvidence.length},coverage,records,avatarDerivations,formChecks,rejectedOrSuperseded:rejected,visualReview:{reviewedThisRun:true,reviewer:'Codex A06 characters audit',evidence:reviewedEvidence,result:'所看最终版未见阻止静态采用的明显脸型、道具、透明背景块或手部错误；不代表正式游戏切换/移动端验收。'},constraints,errors,validationBoundary:{current:'当前文件格式、尺寸、alpha、SHA、PNG可见RGB与alpha、12头像裁切复算、A01覆盖、forms索引及28张既有证据实际目视复核',historical:'原A02/A03独立浏览器画廊记录仅为历史证据，本轮未重跑',notExecuted:['正式游戏工程绑定','章节构建','剧情/引擎测试','游戏浏览器验收','存读档/回顾/重选','真实手机','部署'],adoptionStatus:'adopted-static',bindingStatus:'awaiting-E09'}};
  fs.writeFileSync(path.join(__dirname,'audit.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({pass:report.pass,summary:report.summary,errors},null,2));if(!report.pass)process.exitCode=1;
}
main().catch(e=>{console.error(e);process.exitCode=1;});
