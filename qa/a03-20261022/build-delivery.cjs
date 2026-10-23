'use strict';
// 仅处理 A03 独占目录；不接触全局资源登记、游戏或来源原件。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const sharp = require('../../deployment/cloudflare/node_modules/sharp');
const root = path.resolve(__dirname, '../..');
process.chdir(root);
const dir = 'assets/ten-chapter/huangqiuqiu';
const qa = 'qa/a03-20261022';
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const write = (p, x) => fs.writeFileSync(p, JSON.stringify(x, null, 2) + '\n');
const inputs = JSON.parse(fs.readFileSync(`${dir}/production-inputs.json`));
const plan = JSON.parse(fs.readFileSync('任务拆分/全十章/美术清单.json'));
const contract = JSON.parse(fs.readFileSync('任务拆分/全十章/contract.json'));
const entries = [];
const forms = {
  sphere: { image: null, expressions: {}, avatarImage: null, avatarExpressions: {}, presentation: 'orb' },
  human: { image: null, expressions: {}, avatarImage: null, avatarExpressions: {}, presentation: 'human' }
};
const errors = [];

async function inspect(file) {
  const m = await sharp(file).metadata();
  const {data, info} = await sharp(file).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  let min = 255, max = 0, transparent = 0, visible = 0, touchingSides = 0;
  let x1=info.width,y1=info.height,x2=-1,y2=-1;
  for (let i=0;i<data.length;i+=4) {
    const a=data[i+3],x=(i/4)%info.width,y=Math.floor(i/4/info.width);
    min=Math.min(min,a); max=Math.max(max,a);
    if(a===0) transparent++; else visible++;
    if(a>127){x1=Math.min(x1,x);x2=Math.max(x2,x);y1=Math.min(y1,y);y2=Math.max(y2,y);if(x===0||x===info.width-1)touchingSides++;}
  }
  return {path:file,sha256:hash(file),bytes:fs.statSync(file).size,format:m.format,width:m.width,height:m.height,hasAlpha:m.hasAlpha,alpha:{min,max,transparent,visible,bboxAbove127:[x1,y1,x2,y2],touchingSides}};
}

async function compare(a,b) {
  const x=await sharp(a).ensureAlpha().raw().toBuffer(),y=await sharp(b).ensureAlpha().raw().toBuffer();
  assert.equal(x.length,y.length);
  let invisibleRgbChanges=0;
  for(let i=0;i<x.length;i+=4){assert.equal(x[i+3],y[i+3],`alpha changed: ${b}`);for(let c=0;c<3;c++)if(x[i+c]!==y[i+c]){assert.equal(x[i+3],0,`visible RGB changed: ${b}`);invisibleRgbChanges++;}}
  return {alphaEqual:true,visiblePixelsEqual:true,invisibleRgbChanges};
}

async function convert(source,target) {
  const m=await sharp(source).metadata();
  await sharp(source).webp({lossless:true,effort:6}).toFile(target);
  const n=await sharp(target).metadata();assert.equal(n.width,m.width);assert.equal(n.height,m.height);
  return {lossless:true,effort:6,dimensionsEqual:true,...await compare(source,target)};
}

async function sheet(items,name,portrait=true) {
  const w=256,h=portrait?384:256,label=40,cols=4;
  const tiles=[];
  for(const entry of items){for(const [mode,bg] of [['light','#f5f0e7'],['dark','#17212b']]){
    const tile=await sharp(entry.image.path).resize(w,h,{fit:'contain',background:bg}).flatten({background:bg}).png().toBuffer();
    tiles.push({tile,title:`${entry.form} / ${entry.key} / ${mode}`});
  }}
  const layers=[];
  for(let i=0;i<tiles.length;i++){
    const left=(i%cols)*w,top=Math.floor(i/cols)*(h+label);
    layers.push({input:tiles[i].tile,left,top});
    layers.push({input:Buffer.from(`<svg width="${w}" height="${label}"><rect width="100%" height="100%" fill="#fff"/><text x="8" y="24" fill="#222" font-family="Arial" font-size="11">${tiles[i].title}</text></svg>`),left,top:top+h});
  }
  await sharp({create:{width:cols*w,height:Math.ceil(tiles.length/cols)*(h+label),channels:3,background:'#fff'}}).composite(layers).png().toFile(`${qa}/${name}.png`);
}

async function main(){
  for(const input of inputs.entries){
    const {form,key,label,assetId,source,generatedSource,output}=input;
    assert(fs.existsSync(source),`missing source ${source}`);
    if(generatedSource)assert.equal(hash(source),hash(generatedSource),'original differs from generator output');
    let conversion=null;
    if(output!==source)conversion=await convert(source,output);
    const image=await inspect(output);
    assert.equal(image.format,'webp');assert(image.hasAlpha);assert(image.alpha.transparent>image.width*image.height*0.1);
    assert.equal(image.alpha.touchingSides,0,`silhouette touches horizontal edge ${output}`);
    assert.equal(image.width,form==='human'?1024:1254);assert.equal(image.height,form==='human'?1536:1254);
    const crop=form==='human'?{left:200,top:40,width:650,height:650}:{left:0,top:0,width:image.width,height:image.height};
    const stem=path.basename(output,'.webp');
    const avatarOriginal=`${dir}/originals/avatar-${form}-${key}.png`;
    const avatarPath=`${dir}/avatars/avatar-${form}-${key}.webp`;
    await sharp(output).extract(crop).resize(512,512,{kernel:'lanczos3'}).png().toFile(avatarOriginal);
    const avatarConversion=await convert(avatarOriginal,avatarPath);
    const avatar=await inspect(avatarPath);
    const entry={assetId,label,form,key,source:{path:source,sha256:hash(source),generatedSource:generatedSource||null},image,conversion,avatar:{...avatar,original:avatarOriginal,crop,resize:{width:512,height:512,kernel:'lanczos3'},conversion:avatarConversion},cueIds:plan.assets.find(a=>a.id===assetId)?.cueIds||[],gameIntegrated:false,adoptionStatus:'delivered-awaiting-A06'};
    entries.push(entry);
    if(key==='base'){forms[form].image=output;forms[form].avatarImage=avatarPath;}
    else{forms[form].expressions[key]=output;forms[form].avatarExpressions[key]=avatarPath;}
  }
  const expected=plan.assets.filter(a=>a.owner==='A03').map(a=>a.id);
  assert.deepEqual([...entries.map(x=>x.assetId)].sort(),expected.sort());
  assert.equal(new Set(entries.map(x=>x.assetId)).size,entries.length);
  for(const form of Object.values(forms))for(const field of contract.interface.presentation.formEntryFields)assert(field in form);
  const index={schemaVersion:1,task:'A03',version:'a03-20261022-r1',contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,status:'art-delivered-awaiting-A06',baselineApproval:`${dir}/baseline-approval.json`,characters:{huangqiuqiu:{forms}},assetBindings:Object.fromEntries(entries.map(e=>[e.assetId,{image:e.image.path,avatarImage:e.avatar.path,form:e.form,expression:e.key==='base'?null:e.key,cueIds:e.cueIds}])),integration:{gameIntegrated:false,owner:'E09',adoptionOwner:'A06',runtimeNodeIds:[],formFlag:'qiuForm',spherePresentation:'orb',switchAnchor:'tc_c08_huangqiuqiu_human_reveal',switchCondition:'after release of hands and space is cleared; not a romance reward',history:'resolve from historical prefix state; never replace old sphere globally',missingResource:'error; never fall back across forms'},evidence:`${qa}/report.md`};
  write(`${dir}/forms-index.json`,index);
  write(`${dir}/manifest.json`,{schemaVersion:1,task:'A03',version:index.version,date:'2026-10-22',contractVersion:index.contractVersion,contentRevision:index.contentRevision,tool:'built-in image_gen',encoder:{sharp:sharp.versions.sharp,webp:sharp.versions.webp,lossless:true,effort:6},originalsPreserved:true,entries,gameIntegrated:false,globalAdoption:false});
  await sheet(entries.filter(e=>e.form==='human'),'human-light-dark',true);
  await sheet(entries.filter(e=>e.form==='sphere'),'sphere-light-dark',false);
  const faces=[];
  for(const [i,e] of entries.filter(e=>e.form==='human').entries()){
    faces.push({input:await sharp(e.avatar.path).resize(320,320).flatten({background:'#eee9df'}).png().toBuffer(),left:(i%4)*320,top:Math.floor(i/4)*350});
    faces.push({input:Buffer.from(`<svg width="320" height="30"><text x="8" y="22" font-family="Arial" font-size="16">${e.key}</text></svg>`),left:(i%4)*320,top:Math.floor(i/4)*350+320});
  }
  await sharp({create:{width:1280,height:700,channels:3,background:'#fff'}}).composite(faces).png().toFile(`${qa}/human-face-details.png`);
  const avatars=[];
  for(const [i,e] of entries.entries())for(const [j,size] of [48,96,160].entries())avatars.push({input:await sharp(e.avatar.path).resize(size,size).flatten({background:'#eee9df'}).png().toBuffer(),left:j*180,top:i*180});
  await sharp({create:{width:540,height:entries.length*180,channels:3,background:'#fff'}}).composite(avatars).png().toFile(`${qa}/avatar-scales.png`);
  write(`${qa}/validation.json`,{date:'2026-10-22',pass:true,scope:'file-format-alpha-visible-pixels-A01-coverage-contract-shape',assetCount:entries.length,newGenerated:inputs.entries.filter(e=>e.generatedSource).length,avatarCount:entries.length,requiredA01Assets:expected.length,missingA01Assets:[],forms:Object.keys(forms),dimensions:entries.map(e=>({id:e.assetId,width:e.image.width,height:e.image.height})),sourceChecks:true,alphaAndVisiblePixelsEqual:true,browserChecked:false,gameChecked:false,visualReview:'pending-human-inspection',errors});
  console.log(JSON.stringify({assets:entries.length,avatars:entries.length,pass:true}));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
