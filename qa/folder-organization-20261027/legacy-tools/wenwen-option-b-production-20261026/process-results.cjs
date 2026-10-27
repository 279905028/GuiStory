'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const sharp = require('sharp');
const dir = __dirname, root = path.resolve(dir, '../../..');
const relative = file => path.relative(root, file).split(path.sep).join('/');
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
const partial = process.argv.includes('--partial');
const previous = fs.existsSync(path.join(dir,'adoption.json')) ? JSON.parse(fs.readFileSync(path.join(dir,'adoption.json'))).assets : [];
const correctionFile = path.join(dir,'correction-final.json');
const correction = fs.existsSync(correctionFile) ? JSON.parse(fs.readFileSync(correctionFile)) : null;
const jobs = ['generation-jobs.json','sprite-jobs.json','cg-jobs.json'].flatMap(file =>
  fs.existsSync(path.join(dir,file)) ? JSON.parse(fs.readFileSync(path.join(dir,file))).jobs : []);

function oldPaths(job) {
  if (job.id === 'base') return ['assets/char-wenwen.webp','assets/char-wenwen.png','assets/ten-chapter/characters/wenwen/char-wenwen-human-base.webp'];
  if (job.kind === 'sprite') return [
    'assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-'+job.id+'.webp',
    'assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-'+job.id+'.png',
    ...(['hesitant','smile','tired','downcast','surprised','serious'].some(key => job.id === 'expression-'+key)
      ? ['assets/ten-chapter/characters/wenwen/char-wenwen-human-'+job.id+'.webp'] : [])];
  if (job.kind === 'ui') return ['assets/ten-chapter/ui/'+job.id+'.webp','assets/cover-b-'+job.id.slice(6)+'.webp','assets/cover-b-'+job.id.slice(6)+'.png'];
  if (job.kind === 'poster') return ['assets/release-posters-v1.0-20261023/'+(job.id === 'poster-A'?'poster-A-cinematic.webp':'poster-B-nightshift.webp')];
  const extra = job.id.startsWith('cg-06') ? ['assets/character-variants/maolang-optionD-production-20261020/cg06-optionD.webp'] :
    job.id.startsWith('cg-09') ? ['assets/character-variants/maolang-optionD-production-20261020/cg09-optionD.webp','assets/character-variants/shijiang-optionA-20261020/cg09-shijiang-optionA.webp'] : [];
  return ['assets/cg/'+job.id+'.webp','assets/cg/'+job.id+'.png',...extra];
}

async function main() {
  const assets = [], pending = [];
  for (const originalJob of jobs) {
    const job = correction && correction.id === originalJob.id ? {...originalJob,slug:correction.slug} : originalJob;
    const resultFile = path.join(dir,'results',job.id+'.json');
    if (!fs.existsSync(resultFile)) {pending.push(job.id); continue;}
    const result = correction && correction.id === job.id ? correction : JSON.parse(fs.readFileSync(resultFile));
    const original = path.join(dir,'originals',job.slug+'.png');
    const input = fs.existsSync(original) ? original : result.generatedPath;
    assert(input && fs.existsSync(input), '生成原件缺失：'+job.id);
    const source = fs.readFileSync(input);
    const known = previous.find(asset=>asset.id===job.id && asset.source.path===relative(original));
    if(known)assert.equal(hash(source),known.source.sha256,'工作区原件指纹变化：'+job.id);
    if (fs.existsSync(original)) assert.equal(hash(fs.readFileSync(original)),hash(source),'原件已有不同版本：'+job.id);
    else fs.writeFileSync(original, source);
    const sub = job.kind === 'sprite' ? '' : job.kind === 'ui' ? 'ui' : job.kind === 'poster' ? 'posters' : 'cg';
    const output = path.join(dir,sub,job.slug+'.webp');
    fs.mkdirSync(path.dirname(output),{recursive:true});
    const m = await sharp(source).metadata();
    const encoded = await sharp(source).keepMetadata().webp({lossless:true,effort:6}).toBuffer();
    const w = await sharp(encoded).metadata();
    assert.equal(w.format,'webp'); assert.equal(w.width,m.width); assert.equal(w.height,m.height); assert.equal(w.hasAlpha,m.hasAlpha);
    if (job.transparent) assert.equal(w.hasAlpha,true);
    const a = await sharp(source).ensureAlpha().raw().toBuffer(), b = await sharp(encoded).ensureAlpha().raw().toBuffer();
    assert.equal(a.length,b.length); let invisibleRgbDifferences=0;
    for(let i=0;i<a.length;i+=4) {
      assert.equal(a[i+3],b[i+3],'alpha变化：'+job.id);
      for(let c=0;c<3;c++) if(a[i+c]!==b[i+c]) {assert.equal(a[i+3],0,'可见像素变化：'+job.id);invisibleRgbDifferences++;}
    }
    fs.writeFileSync(output,encoded);
    assets.push({id:job.id,kind:job.kind,label:job.label || job.id,replaces:oldPaths(job),
      source:{path:relative(original),sha256:hash(source),bytes:source.length},
      delivery:{path:relative(output),sha256:hash(encoded),bytes:encoded.length,format:'webp',width:w.width,height:w.height,hasAlpha:w.hasAlpha},
      validation:{decodes:true,dimensionsEqual:true,alphaEqual:true,visiblePixelsEqual:true,invisibleRgbDifferences}});
  }
  assert(partial || pending.length === 0,'尚未生成：'+pending.join(', '));
  const manifest = {schemaVersion:1,revision:'wenwen-option-b-yellow-20261026',date:'2026-10-26',status:pending.length?'in-progress':'adopted',
    tool:'image_gen built-in',adoptedReference:'assets/character-variants/wenwen-town-youth-options-20261026/yellow-hair-v2/b-denim.webp',
    encoder:{sharp:sharp.versions.sharp,webp:sharp.versions.webp,lossless:true,effort:6},assets,pending};
  fs.writeFileSync(path.join(dir,'adoption.json'),JSON.stringify(manifest,null,2)+'\n');
  console.log(JSON.stringify({converted:assets.length,expected:jobs.length,pending}));
}
main().catch(error => {console.error(error);process.exitCode=1;});
