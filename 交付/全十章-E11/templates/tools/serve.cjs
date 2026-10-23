'use strict';
// 只提供已登记的游戏文件，固定监听本机；不读取任何浏览器存档。
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { verify } = require('./verify.cjs');
const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
if (args.length && !(args.length === 2 && args[0] === '--port' && /^\d+$/.test(args[1]))) {
  console.error('用法：node tools/serve.cjs [--port 4173]'); process.exit(1);
}
const port = args.length ? Number(args[1]) : 4173;
if (!Number.isInteger(port) || port < 0 || port > 65535) throw Error('端口无效');
try { verify(root); } catch (error) { console.error('启动前校验失败：' + error.message); process.exit(1); }
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package-manifest.json')));
const allowed = new Set(manifest.files.filter(row => row.path.startsWith('game/')).map(row => row.path.slice(5)));
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }).end(); return; }
  let name;
  try { name = decodeURIComponent(req.url.split('?')[0]); }
  catch { res.writeHead(400).end(); return; }
  if (name === '/') name = '/index.html';
  if (!name.startsWith('/') || !allowed.has(name.slice(1))) { res.writeHead(404).end(); return; }
  const file = path.join(root, 'game', name.slice(1));
  try {
    if (!fs.realpathSync(file).startsWith(fs.realpathSync(path.join(root, 'game')) + path.sep)) throw Error('路径越界');
    const data = fs.readFileSync(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Content-Length': data.length, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404).end(); }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? '端口已占用。先关闭之前的本地游戏服务，再重试；本工具不会终止其他程序或自动换端口。' : error.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log('http://127.0.0.1:' + server.address().port + '/');
  console.log('仅本机可访问。保持此窗口打开；停止服务请按 Ctrl+C。');
});
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
