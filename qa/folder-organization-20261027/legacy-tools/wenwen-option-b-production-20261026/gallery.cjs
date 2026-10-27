'use strict';
const fs=require('node:fs'),path=require('node:path'),sharp=require('sharp');
const dir=__dirname,root=path.resolve(dir,'../../..');
const data=JSON.parse(fs.readFileSync(path.join(dir,'adoption.json')));
const sprites=data.assets.filter(x=>x.kind==='sprite');
const scenes=data.assets.filter(x=>x.kind!=='sprite');
const rel=file=>path.relative(dir,path.join(root,file)).split(path.sep).join('/');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const label=x=>x.id==='base'?'基础立绘':x.label;
async function sheet(items,name,{width=1800,columns=3,cellHeight=400,dark=false,face=false}={}){
 const cellWidth=width/columns,height=Math.ceil(items.length/columns)*cellHeight,layers=[];
 let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="${dark?'#222c35':'#f3f3ed'}"/>`;
 for(let i=0;i<items.length;i++){
  const item=items[i],x=(i%columns)*cellWidth,y=Math.floor(i/columns)*cellHeight;
  svg+=`<text x="${x+15}" y="${y+32}" font-family="PingFang SC,sans-serif" font-size="21" fill="${dark?'#f3f3ed':'#22332c'}">${escape(label(item))}</text>`;
  let pic=sharp(path.join(root,item.delivery.path));
  if(face)pic=pic.extract({left:250,top:0,width:470,height:530});
  layers.push({input:await pic.resize({width:cellWidth-24,height:cellHeight-58,fit:'contain',background:dark?'#222c35':'#f3f3ed'}).toBuffer(),left:Math.round(x+12),top:y+46});
 }
 svg+='</svg>';await sharp(Buffer.from(svg)).composite(layers).webp({lossless:true,effort:6}).toFile(path.join(dir,name));
}
async function main(){
 await sheet(sprites,'qa-sprites-light.webp',{width:2000,columns:5,cellHeight:640});
 await sheet(sprites,'qa-sprites-dark.webp',{width:2000,columns:5,cellHeight:640,dark:true});
 await sheet(sprites.filter(x=>!x.id.startsWith('action-')),'qa-faces.webp',{width:1600,columns:4,cellHeight:420,face:true});
 await sheet(scenes,'qa-scenes.webp');
 const cards=data.assets.map(a=>`<article data-kind="${a.kind}"><h2>${escape(label(a))}</h2><a href="${rel(a.delivery.path)}"><div class="image ${a.kind}"><img src="${rel(a.delivery.path)}" alt="文文B方案·${escape(label(a))}" width="${a.delivery.width}" height="${a.delivery.height}"></div></a><p>${a.delivery.width} × ${a.delivery.height} · 无损WebP</p><a href="${rel(a.source.path)}">生成PNG原件</a>${a.kind==='cg'?'<p>旧剧情图的形象补绘；未加入现行十章剧情。</p>':''}</article>`).join('\n');
 fs.writeFileSync(path.join(dir,'index.html'),`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>文文B方案·黄发牛仔形象</title><style>*{box-sizing:border-box}body{margin:0;background:#15222b;color:#ebefe7;font:16px/1.6 system-ui,sans-serif}header,nav,main{max-width:1600px;margin:auto;padding:20px}h1{margin:0}a{color:#98d7c8}nav{display:flex;gap:10px;flex-wrap:wrap;position:sticky;top:0;background:#15222bf2;z-index:2}button{padding:10px 16px;border:1px solid #74958b;border-radius:6px;background:transparent;color:inherit;font:inherit;cursor:pointer}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:20px}article{min-width:0;padding:16px;border:1px solid #536961;border-radius:10px}article[hidden]{display:none}h2{font-size:19px}.image{height:430px;background:#22313b;display:flex;align-items:center;justify-content:center}.image img{display:block;max-width:100%;max-height:100%;width:auto;height:auto}.image.cg,.image.ui{height:300px}p{margin:10px 0;color:#bbc9c0}.light{background:#f2f3ec;color:#25382c}.light nav{background:#f2f3ecf2}.light a{color:#26664f}.light p{color:#596a60}.light .image{background:#fff}.light article{border-color:#bdc9bf}@media(max-width:600px){main{grid-template-columns:1fr}header,nav,main{padding:14px}.image{height:500px}}</style><header><h1>文文 · B方案黄发牛仔</h1><p>用户已确认采用 · 19张立绘／差分、10张旧CG、2张封面、2张海报 · 2026-10-26</p><a href="README.md">交接与提示词</a> · <a href="../../../index.html">返回游戏</a></header><nav><button data-filter="all">全部33张</button><button data-filter="sprite">立绘／表情／动作</button><button data-filter="cg">旧CG补绘</button><button data-filter="ui">游戏封面</button><button data-filter="poster">海报</button><button id="theme">切换明暗底</button></nav><main>${cards}</main><script>document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>document.querySelectorAll('article').forEach(c=>c.hidden=b.dataset.filter!=='all'&&c.dataset.kind!==b.dataset.filter));document.querySelector('#theme').onclick=()=>document.body.classList.toggle('light');</script></html>`);
 const replacements=new Map(data.assets.flatMap(a=>a.replaces.map(old=>[old,a.delivery.path])));
 for(const file of ['assets/ten-chapter/index.html','assets/ten-chapter/characters/index.html','assets/background-variants/style-options-20261019/index.html']){
  let text=fs.readFileSync(path.join(root,file),'utf8');const from=path.dirname(path.join(root,file));
  for(const [old,target]of replacements){const a=path.relative(from,path.join(root,old)).split(path.sep).join('/'),b=path.relative(from,path.join(root,target)).split(path.sep).join('/');text=text.split(a).join(b);}
  fs.writeFileSync(path.join(root,file),text);
 }
 console.log('图库33项、4张检查拼图及当前图库路径已更新。');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
