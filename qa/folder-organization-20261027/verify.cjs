'use strict';

const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto'), vm = require('node:vm'), assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const read = file => fs.readFileSync(path.join(root, file));
const json = file => JSON.parse(read(file));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const migration = json('assets/manifests/path-migration.json');
const reviewed = json('项目文档/文件整理方案-20261027/核查记录.json');
const report = { date: '2026-10-27', passed: false, scope: '整理后的路径、字节保护、批准删除集合及正式构建；不访问浏览器存储', checks: [] };
const check = (name, run) => { report.checks.push({ name, passed: true, detail: run() }); };
const story = file => { const scope = { window: {} }; vm.runInNewContext(read(file).toString(), scope); return JSON.parse(JSON.stringify(scope.window.RAIN_STORY)); };
try {
  check('删除范围等于批准A–D，E保留', () => {
    const approved = reviewed.candidates.filter(x => 'ABCD'.includes(x.group));
    assert.equal(approved.length, 827);
    assert.deepEqual(approved.map(x => x.path).sort(), migration.deleted.map(x => x.path).sort());
    for (const x of approved) assert(!fs.existsSync(path.join(root, x.path)), x.path);
    const retained = reviewed.candidates.filter(x => x.group === 'E');
    for (const x of retained) assert.equal(hash(read(x.path)), x.sha256, x.path);
    return { deleted: approved.length, bytes: approved.reduce((n, x) => n + x.bytes, 0), retainedE: retained.length };
  });
  check('原始图片、保留WebP与历史JSON原字节', () => {
    let rasters = 0, originalImages = 0, historicalJson = 0;
    for (const x of migration.files) {
      assert(fs.existsSync(path.join(root, x.to)), x.to);
      if (/\.(png|jpe?g|webp)$/i.test(x.from)) { assert.equal(hash(read(x.to)), x.sha256, x.to); rasters++; if (/\.(png|jpe?g)$/i.test(x.from)) originalImages++; }
      if (x.from.endsWith('.json') && x.from !== 'assets/runtime-ten-chapter-manifest.json') { assert.equal(hash(read(x.to)), x.sha256, x.to); historicalJson++; }
    }
    return { movedFiles: migration.files.length, rasters, originalImages, historicalJson };
  });
  check('剧情仅发生资源路径变更', () => {
    const { rewritePaths } = require(path.join(root, 'scripts/art-paths.cjs'));
    assert.deepEqual(story('story.js'), rewritePaths(story('qa/folder-organization-20261027/story-before.js')));
    return { nodes: Object.keys(story('story.js').nodes).length, sourceTextAndChoicesUnchanged: true };
  });
  check('兼容代码直接引用无断链', () => {
    const files = [...read('game.js').toString().matchAll(/["'](assets\/[^"']+\.webp)["']/g)].map(x => x[1]);
    for (const file of files) assert(fs.existsSync(path.join(root, file)), file);
    return { paths: files.length };
  });
  for (const args of [
    ['任务拆分/全十章/presentation/prepare-bindings.cjs', '--check'],
    ['任务拆分/三章扩展/build-story.cjs', '--check'],
    ['deployment/cloudflare-ten-chapter/prepare.cjs', '--check'],
    ['scripts/build-art-index.cjs', '--check'],
    ['assets/sources/character-variants/wenwen-option-b-production-20261026/process-results.cjs', '--check'],
    ['assets/sources/character-variants/wenwen-option-b-production-20261026/gallery.cjs', '--check']
  ]) check(args.join(' '), () => {
    const r = spawnSync(process.execPath, args, { cwd: root, encoding: 'utf8' }); assert.equal(r.status, 0, r.stderr || r.stdout); return JSON.parse(r.stdout);
  });
  check('退役图片不能被转换工具重新生成', () => {
    const r = spawnSync(process.execPath, ['scripts/convert-art-webp.cjs', '--input', 'assets/sources/cover-options/20261020', '--output', 'assets/sources/conversion-check-20261027', '--manifest', 'assets/sources/conversion-check-20261027/webp-manifest.json', '--check'], { cwd: root, encoding: 'utf8' });
    assert.equal(r.status, 1); assert(r.stderr.includes('拒绝重新生成已批准退役')); assert(!fs.existsSync(path.join(root, 'assets/sources/conversion-check-20261027')));
    return { rejected: true, noOutputCreated: true };
  });
  report.passed = true;
} catch (e) { report.error = e.stack; process.exitCode = 1; }
if (process.argv.includes('--write-report')) fs.writeFileSync(path.join(__dirname, 'static-results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
