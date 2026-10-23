const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const gallery = 'assets/ten-chapter/huangqiuqiu/index.html';
const manifest = JSON.parse(fs.readFileSync(path.join(root,'assets/ten-chapter/huangqiuqiu/manifest.json')));
const allowed = new Map();
for (const relative of [gallery, ...manifest.entries.flatMap(e=>[e.image.path,e.avatar.path])]) {
  if (!relative.startsWith('assets/') || relative.split('/').some(x=>x.startsWith('.')) || !/\.(webp|html)$/.test(relative)) throw Error('Rejected non-art path');
  allowed.set('/'+relative, path.join(root,relative));
}
const server = http.createServer((req,res)=>{
  if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405).end();return;}
  let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
  const file=allowed.get(pathname);
  if(!file){res.writeHead(404).end('Not found');return;}
  res.setHeader('Content-Type',file.endsWith('.webp')?'image/webp':'text/html; charset=utf-8');
  res.setHeader('Cache-Control','no-store');
  if(req.method==='HEAD'){res.end();return;}
  fs.createReadStream(file).pipe(res);
});
server.listen(0,'127.0.0.1',()=>console.log(JSON.stringify({url:'http://127.0.0.1:'+server.address().port+'/'+gallery,allowedFiles:allowed.size,scope:'one gallery and 24 WebP deliverables only; all other paths return 404'})));
