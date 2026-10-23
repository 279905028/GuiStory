'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { loadProject, compileProject, hash, base, root } = require('./compiler.cjs');
const { writeIsolated, assertOutput } = require('./cli.cjs');
const outputRoot = path.join(base,'构建'), evidence = path.join(base,'校验/E02');
const entry = '任务拆分/三章扩展/build-story.cjs';
const protectedFiles = JSON.parse(fs.readFileSync(path.join(evidence,'protected-before.json'),'utf8'));
const results = [];
function test(name,fn) { fn(); results.push({name,status:'passed'}); }
function run(args = [], preload) {
  const r = spawnSync(process.execPath,[...(preload ? ['--require',preload] : []),entry,...args],{cwd:root,encoding:'utf8'});
  if (r.error) throw r.error;
  return r;
}
function rejected(name,args) {
  test(name,() => { const r = run(args); assert.equal(r.status,1); assert.match(r.stderr,/十章构建失败/); results.at(-1); });
}
fs.mkdirSync(outputRoot,{recursive:true});
const temp = fs.mkdtempSync(path.join(outputRoot,'.e02-integration-'));
let output;
try {
  test('隔离样例从现有入口构建',() => {
    const r = run(['--ten-chapter','--sample']); assert.equal(r.status,0,r.stderr);
    output = JSON.parse(r.stdout).output; assert(output.directory.startsWith(outputRoot+path.sep));
  });
  test('重复构建字节完全一致并安全复用',() => {
    const r = run(['--ten-chapter','--sample']); assert.equal(r.status,0,r.stderr);
    const again = JSON.parse(r.stdout).output;
    assert.equal(again.contentHash,output.contentHash); assert.equal(again.directory,output.directory); assert.equal(again.reused,true);
  });
  test('--check只校验不输出',() => {
    const before = fs.readdirSync(outputRoot).sort();
    const r = run(['--ten-chapter','--sample','--check']); assert.equal(r.status,0,r.stderr);
    assert.equal(JSON.parse(r.stdout).output,null); assert.deepEqual(fs.readdirSync(outputRoot).sort(),before);
  });
  test('十章路径不读取旧快照',() => {
    const preload = path.join(temp,'forbid-legacy.cjs');
    fs.writeFileSync(preload,"const fs=require('node:fs');const original=fs.readFileSync;fs.readFileSync=function(file,...args){if(String(file).includes('qa/chapter3-20261020/before/story.js'))throw Error('禁止读取旧快照');return original.call(this,file,...args)};\n");
    const r = run(['--ten-chapter','--sample','--check'],preload); assert.equal(r.status,0,r.stderr);
  });
  rejected('缺正式模块清单不退回旧故事',['--ten-chapter']);
  rejected('未知参数不启动旧构建',['--typo']);
  rejected('缺少显式十章开关',['--sample']);
  rejected('拒绝参数冲突',['--ten-chapter','--sample','--manifest','任务拆分/全十章/samples/e02/manifest.json']);
  rejected('拒绝缺少参数值',['--ten-chapter','--manifest']);
  rejected('拒绝重复参数',['--ten-chapter','--sample','--sample']);
  rejected('拒绝check带输出目录',['--ten-chapter','--sample','--check','--out-dir',path.join(temp,'checked')]);
  rejected('拒绝输出到正式根目录',['--ten-chapter','--sample','--out-dir',root]);
  rejected('拒绝输出到正式story.js',['--ten-chapter','--sample','--out-dir',path.join(root,'story.js')]);
  rejected('拒绝输入旧三章JSON',['--ten-chapter','--manifest','任务拆分/三章扩展/chapter2.json']);
  const sample = compileProject(loadProject(path.join(base,'samples/e02/manifest.json')));
  test('可写入显式新隔离目录',() => { const target=path.join(temp,'explicit'); assert.equal(writeIsolated(sample,target).reused,false); });
  test('拒绝软链接输出目录及其子目录',() => {
    const link=path.join(temp,'escape'); fs.symlinkSync(root,link,'dir');
    assert.throws(()=>assertOutput(link),/软链接/); assert.throws(()=>assertOutput(path.join(link,'escape-child')),/软链接/);
  });
  test('拒绝既有不同内容且保持原样',() => {
    const target=path.join(temp,'existing');fs.mkdirSync(target);fs.writeFileSync(path.join(target,'user.txt'),'keep');
    assert.throws(()=>writeIsolated(sample,target),/不同/);assert.equal(fs.readFileSync(path.join(target,'user.txt'),'utf8'),'keep');
  });
  test('拒绝既有输出中的文件软链接',() => {
    const target=path.join(temp,'linked');writeIsolated(sample,target);fs.unlinkSync(path.join(target,'story.js'));
    fs.symlinkSync(path.join(root,'story.js'),path.join(target,'story.js'));
    assert.throws(()=>writeIsolated(sample,target),/拒绝覆盖/);
  });
  test('无参数构建保持原三章行为',() => {
    const r=run();assert.equal(r.status,0,r.stderr);const report=JSON.parse(r.stdout);
    assert.equal(report.chapterCount,3);assert.equal(report.nodeCount,1310);
  });
  test('全部保护文件与E02开始前一致',() => {
    for (const item of protectedFiles) assert.equal(hash(fs.readFileSync(path.join(root,item.file))),item.sha256,item.file);
  });
  test('旧构建正文只增加入口分流',() => {
    const original=fs.readFileSync(path.join(evidence,'legacy-build-before.cjs'),'utf8');
    const current=fs.readFileSync(path.join(root,entry),'utf8');
    const legacyStart=current.indexOf('// 从保留的十日序章');
    assert.equal(current.slice(legacyStart),original.slice(original.indexOf('// 从保留的十日序章')));
  });
} finally { fs.rmSync(temp,{recursive:true,force:true}); }
const report={status:'passed',scope:'E02 CLI, isolated output safety, legacy build reproducibility',runAt:new Date().toISOString(),passed:results.length,results,output,protectedFilesChecked:protectedFiles.length,protectedFilesChanged:[],builderSha256:hash(fs.readFileSync(path.join(root,entry))),notExecuted:['正式十章接入','真实引擎/玩家存档','浏览器/设备/发布']};
fs.writeFileSync(path.join(evidence,'integration-tests.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({status:report.status,passed:results.length,protectedFilesChecked:protectedFiles.length,output:output.directory}));
