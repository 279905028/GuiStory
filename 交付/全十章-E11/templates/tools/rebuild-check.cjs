'use strict';
// 在系统临时目录拼合源与运行图，只读重算；不会覆盖游戏目录。
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawnSync } = require('node:child_process');
const { verify } = require('./verify.cjs');
const root = path.resolve(__dirname, '..');
if (process.platform === 'win32') {
  console.error('当前冻结构建器使用POSIX路径，Windows不支持逐字重建复核。请在macOS执行此项；游戏启动和verify完整性校验不受此限制。');
  process.exit(1);
}
verify(root);
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'bijie-e11-rebuild-'));
try {
  fs.cpSync(path.join(root, 'game'), temp, { recursive: true });
  fs.cpSync(path.join(root, 'materials/source'), temp, { recursive: true });
  const code = `const fs=require('node:fs');const assert=require('node:assert/strict');const p=require('./任务拆分/全十章/build/formal.cjs').prepareFormal();for(const [file,text]of Object.entries(p.files))assert.equal(fs.readFileSync(file,'utf8'),text,file);console.log(JSON.stringify({passed:true,outputs:Object.keys(p.files),buildSha256:p.contentHash,formalWriteExecuted:false}));`;
  const result = spawnSync(process.execPath, ['-e', code], { cwd: temp, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.status !== 0) throw Error(result.stderr || result.error?.message || '源构建复核失败');
} finally { fs.rmSync(temp, { recursive: true, force: true }); }
