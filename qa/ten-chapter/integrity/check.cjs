'use strict';
const fs=require('node:fs'), path=require('node:path'), crypto=require('node:crypto'), assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../../..');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const read=f=>fs.readFileSync(path.join(root,f));
const out=(name,value)=>fs.writeFileSync(path.join(__dirname,name),JSON.stringify(value,null,2)+'\n');
const expectedStory='28dd958534a727dd06dae3e3a44f493e557a239a7a056111591e23d29e097d60';
const expectedBuild='db01e296857b57e787323644aeefdb30bfdbea53cb854d5812cf1935fb815139';
const mode=process.argv[2]||'check';
if(mode==='freeze'){
  if(fs.existsSync(path.join(__dirname,'baseline.json')))throw Error('基线已存在，禁止静默覆盖');
  const previous=JSON.parse(read('任务拆分/全十章/校验/E09/protected-before.json'));
  const files=new Set(previous.map(r=>r.file));
  for(const f of ['story.js','game.js','engine.js','player-runtime.js','save-compat.js','index.html','styles.css','assets/runtime-ten-chapter-manifest.json','任务拆分/三章扩展/build-story.cjs'])files.add(f);
  function walk(dir){for(const d of fs.readdirSync(path.join(root,dir),{withFileTypes:true})){const p=dir+'/'+d.name;if(d.isDirectory())walk(p);else if(d.isFile())files.add(p);}}
  for(const dir of ['任务拆分/全十章/build','任务拆分/全十章/presentation','任务拆分/全十章/校验/E09'])walk(dir);
  const rows=[...files].sort().map(file=>({file,sha256:hash(read(file))}));
  assert.equal(hash(read('story.js')),expectedStory);
  out('baseline.json',{task:'E10',capturedAt:new Date().toISOString(),storySha256:expectedStory,expectedBuild,files:rows});
  console.log(JSON.stringify({frozen:rows.length,storySha256:expectedStory}));
}else if(mode==='check'){
  const start=Date.now(),baseline=JSON.parse(fs.readFileSync(path.join(__dirname,'baseline.json'))),checks=[];
  function test(name,fn){try{const details=fn();checks.push({name,status:'passed',details});}catch(e){checks.push({name,status:'failed',error:e.stack});}}
  test('当前正式剧情与E09冻结版本一致',()=>assert.equal(hash(read('story.js')),baseline.storySha256));
  const formal=require(path.join(root,'任务拆分/全十章/build/formal.cjs'));
  let first;
  test('只读重新构建与正式四份产物逐字一致',()=>{first=formal.prepareFormal();assert.equal(first.contentHash,expectedBuild);for(const [file,body]of Object.entries(first.files))assert.equal(read(file).toString(),body,file);return{outputs:Object.keys(first.files),contentHash:first.contentHash,graph:first.report.graph.statistics};});
  test('两次只读构建完全一致',()=>{const second=formal.prepareFormal();assert.deepEqual(second.files,first.files);return{contentHash:second.contentHash};});
  test('正式输入和资源指纹全部一致',()=>{const rows=[...first.report.inputFiles,...first.report.builderFiles,...first.report.runtimeFiles,...first.runtimeManifest.assets];for(const r of rows)assert.equal(hash(read(r.path||r.file)),r.sha256,r.path||r.file);return{checked:rows.length};});
  test('保护文件与E10开工基线逐字一致',()=>{const changed=baseline.files.filter(r=>!fs.existsSync(path.join(root,r.file))||hash(read(r.file))!==r.sha256);assert.deepEqual(changed,[]);return{checked:baseline.files.length,changed};});
  const report={task:'E10',runAt:new Date().toISOString(),formalStorySha256:hash(read('story.js')),expectedBuild,checks,passed:checks.filter(x=>x.status==='passed').length,failed:checks.filter(x=>x.status==='failed').length,durationMs:Date.now()-start,formalWriteExecuted:false,playerStorageAccessed:false,deployed:false};
  out('results.json',report);console.log(JSON.stringify(report,null,2));if(report.failed)process.exitCode=1;
}else if(mode==='verify-protection'){
 const baseline=JSON.parse(fs.readFileSync(path.join(__dirname,'baseline.json')));
 const changed=baseline.files.filter(r=>!fs.existsSync(path.join(root,r.file))||hash(read(r.file))!==r.sha256);
 const report={runAt:new Date().toISOString(),checked:baseline.files.length,changed,passed:!changed.length};out('protected-after.json',report);console.log(JSON.stringify(report));if(changed.length)process.exitCode=1;
}else throw Error('未知模式');
