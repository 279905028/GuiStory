const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const sharp=require('../../deployment/cloudflare/node_modules/sharp');
process.chdir(path.resolve(__dirname,'../..'));
const d='assets/ten-chapter/huangqiuqiu',q='qa/a03-20261022';
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
async function main(){
  const m=JSON.parse(fs.readFileSync(d+'/manifest.json')),index=JSON.parse(fs.readFileSync(d+'/forms-index.json'));
  const reused=[];
  for(const e of m.entries){
    for(const f of [e.image,e.avatar]){
      const b=fs.readFileSync(f.path);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(hash(f.path),f.sha256);
      const meta=await sharp(b).metadata();assert.equal(meta.width,f.width);assert.equal(meta.height,f.height);assert(meta.hasAlpha);
    }
    assert.equal(hash(e.source.path),e.source.sha256);
    if(e.source.path===e.image.path){
      const png=e.source.path.replace(/\.webp$/,'.png'),a=await sharp(png).ensureAlpha().raw().toBuffer(),b=await sharp(e.image.path).ensureAlpha().raw().toBuffer();assert.equal(a.length,b.length);
      let invisible=0;for(let i=0;i<a.length;i+=4){assert.equal(a[i+3],b[i+3]);for(let c=0;c<3;c++)if(a[i+c]!==b[i+c]){assert.equal(a[i+3],0);invisible++;}}
      reused.push({id:e.assetId,sourcePng:png,sourceSha256:hash(png),alphaEqual:true,visiblePixelsEqual:true,transparentRgbDifferences:invisible});
    }
  }
  const covered=JSON.parse(fs.readFileSync('任务拆分/全十章/美术清单.json')).assets.filter(a=>a.owner==='A03').map(a=>a.id);
  assert.deepEqual(Object.keys(index.assetBindings).sort(),covered.sort());
  for(const [form,v]of Object.entries(index.characters.huangqiuqiu.forms)){
    assert.deepEqual(Object.keys(v.expressions).sort(),Object.keys(v.avatarExpressions).sort());
    for(const p of [v.image,v.avatarImage,...Object.values(v.expressions),...Object.values(v.avatarExpressions)])assert(fs.existsSync(p));
    assert.equal(v.presentation,form==='sphere'?'orb':'human');
  }
  const docs=[d+'/README.md','任务拆分/全十章/交接/A03.md',q+'/report.md','TODO与多窗口提示词-v0.4.md'];
  let links=0;const badLinks=[];
  for(const file of docs){if(!fs.existsSync(file))continue;for(const match of fs.readFileSync(file,'utf8').matchAll(/\]\(([^)]+)\)/g)){let target=match[1];if(/^(https?:|#)/.test(target))continue;target=decodeURIComponent(target.split('#')[0]);links++;const resolved=path.resolve(path.dirname(file),target);if(!fs.existsSync(resolved))badLinks.push({file,target});}}
  assert.deepEqual(badLinks,[]);
  const baseline=JSON.parse(fs.readFileSync(q+'/before-hashes.json')),changed=[],missing=[];
  for(const [p,h]of Object.entries(baseline)){if(!fs.existsSync(p))missing.push(p);else if(hash(p)!==h)changed.push(p);}
  const taskEdits=changed.filter(p=>p==='TODO与多窗口提示词-v0.4.md');
  const observedConcurrent=changed.filter(p=>!taskEdits.includes(p));
  const protectedFiles=['story.js','engine.js','game.js','index.html','styles.css','assets/runtime-v0.4-manifest.json',...Object.keys(baseline).filter(p=>p.startsWith('assets/')||p.startsWith('项目文档/故事/全十章审阅稿/'))];
  const protectedChanged=[...new Set(protectedFiles)].filter(p=>baseline[p]&&(!fs.existsSync(p)||hash(p)!==baseline[p]));
  assert.deepEqual(protectedChanged,[]);assert.deepEqual(missing,[]);
  const result={date:'2026-10-22',pass:true,webpFilesVerified:m.entries.length*2,assetIdsCovered:covered.length,brokenReferences:[],markdownLinksChecked:links,badLinks,reusedPngComparisons:reused,baselineFiles:Object.keys(baseline).length,taskChangedExisting:taskEdits,observedConcurrentChanges:observedConcurrent,protectedChanged,missing,gitStatus:'系统git被Xcode许可提示阻挡；使用文件SHA256比较，未声明Git检查通过',runtimeIntegrationTested:false};
  write(q+'/final-audit.json',result);console.log(JSON.stringify(result));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
