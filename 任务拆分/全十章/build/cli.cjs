'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { loadProject, compileProject, hash, base, root } = require('./compiler.cjs');
const outputRoot = path.join(base, '构建');
const json = value => JSON.stringify(value, null, 2) + '\n';

function assertOutput(directory) {
  const target = path.resolve(directory);
  if (!target.startsWith(outputRoot + path.sep)) throw new Error('隔离输出只能位于 任务拆分/全十章/构建/ 的子目录；禁止覆盖正式游戏');
  let current = base;
  // 检查从base起的每一层，拒绝通过软链接覆盖输入或运行目录。
  if (fs.realpathSync(base) !== base) throw new Error('独立十章源目录不能为软链接');
  for (const segment of path.relative(base,target).split(path.sep)) {
    current = path.join(current,segment);
    if (!fs.existsSync(current)) {
      try { if (fs.lstatSync(current).isSymbolicLink()) throw new Error('输出路径不能含软链接'); }
      catch (error) { if (error.code !== 'ENOENT') throw error; }
      continue;
    }
    const stat = fs.lstatSync(current);
    if (stat.isSymbolicLink() || !stat.isDirectory()) throw new Error('输出路径必须为真实目录，不能含软链接或文件');
  }
  return target;
}

function serialize(result) {
  return {
    'story.js': '// E02 隔离构建：仅用于数据接口验证，不能替换现行游戏。\nwindow.RAIN_STORY = ' + JSON.stringify(result.story,null,2) + ';\n',
    'story.json': json(result.story),
    'source-map.json': json(result.sourceMap),
    'build-report.json': json(result.report)
  };
}

function writeIsolated(result, directory) {
  const files = serialize(result);
  const contentHash = hash(Object.entries(files).map(([name,text]) => name+'\0'+text).join('\n'));
  const target = assertOutput(directory || path.join(outputRoot, result.report.mode + '-' + contentHash.slice(0,16)));
  if (fs.existsSync(target)) {
    const names = fs.readdirSync(target).sort();
    if (JSON.stringify(names) !== JSON.stringify(Object.keys(files).sort())) throw new Error('既有输出目录内容不同；请指定新目录');
    for (const [name,text] of Object.entries(files)) {
      const file = path.join(target,name), stat = fs.lstatSync(file);
      if (!stat.isFile() || stat.isSymbolicLink() || fs.readFileSync(file,'utf8') !== text) throw new Error('既有输出已变化，拒绝覆盖：' + file);
    }
    return {directory:target,contentHash,reused:true};
  }
  fs.mkdirSync(path.dirname(target),{recursive:true});
  assertOutput(target);
  const temp = fs.mkdtempSync(path.join(path.dirname(target),'.e02-'));
  try {
    for (const [name,text] of Object.entries(files)) fs.writeFileSync(path.join(temp,name),text,{flag:'wx'});
    if (fs.existsSync(target)) throw new Error('输出目录被并发创建；拒绝覆盖');
    fs.renameSync(temp,target);
  } finally { if (fs.existsSync(temp)) fs.rmSync(temp,{recursive:true}); }
  return {directory:target,contentHash,reused:false};
}

function run(args) {
  if (args.length === 1 && args[0] === '--help') {
    console.log('旧三章：node 任务拆分/三章扩展/build-story.cjs\n十章样例：node 任务拆分/三章扩展/build-story.cjs --ten-chapter --sample\n自定义隔离构建：同上 --ten-chapter --manifest <JSON> [--check | --out-dir <构建目录下的新子目录>]');
    return;
  }
  const seen = new Set(); let manifestPath, output, sample = false, checkOnly = false;
  for (let i=0;i<args.length;i++) {
    const arg = args[i];
    if (seen.has(arg)) throw new Error('重复参数 ' + arg); seen.add(arg);
    if (arg === '--ten-chapter') continue;
    if (arg === '--sample') sample = true;
    else if (arg === '--check') checkOnly = true;
    else if (['--manifest','--out-dir'].includes(arg)) {
      const value = args[++i]; if (!value || value.startsWith('--')) throw new Error(arg + '缺少路径');
      if (arg === '--manifest') manifestPath = path.resolve(value); else output = path.resolve(value);
    } else throw new Error('未知参数 ' + arg);
  }
  if (!seen.has('--ten-chapter')) throw new Error('十章构建必须显式提供 --ten-chapter；没有参数才运行旧构建');
  if (sample && manifestPath) throw new Error('--sample 与 --manifest 不能同时使用');
  if (checkOnly && output) throw new Error('--check 不写输出，不能与 --out-dir 同用');
  if (output) assertOutput(output);
  const file = sample ? path.join(base,'samples/e02/manifest.json') : manifestPath || path.join(base,'build-manifest.json');
  if (!fs.existsSync(file)) throw new Error('十章模块清单尚未交付：' + file + '；未读取旧快照，未改写正式游戏');
  const result = compileProject(loadProject(file));
  const written = checkOnly ? null : writeIsolated(result,output);
  console.log(json({status:'passed',mode:result.report.mode,formalIntegration:false,moduleCount:result.report.moduleCount,nodeCount:result.report.nodeCount,sceneCount:result.report.sceneCount,output:written,graph:result.report.graph.statistics}));
  return {result,written};
}

function main(args) {
  try { return run(args); }
  catch (error) { console.error('十章构建失败：' + error.message); process.exitCode = 1; }
}
if (require.main === module) main(process.argv.slice(2));
module.exports = {main,run,writeIsolated,assertOutput,serialize};
