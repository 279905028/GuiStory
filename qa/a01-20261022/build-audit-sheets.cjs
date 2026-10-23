const fs=require('fs'),vm=require('vm'),path=require('path');
const sharp=require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync('story.js','utf8'),ctx);const story=ctx.window.RAIN_STORY;
const root='qa/a01-20261022';
const htmlEsc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
async function sheet(name,items,cols,w,h){const labelH=42,rows=Math.ceil(items.length/cols);let composites=[];for(let i=0;i<items.length;i++){const it=items[i];const buf=await sharp(it.path).resize(w,h,{fit:'contain',background:'#d2d5d6'}).flatten({background:'#d2d5d6'}).toBuffer();composites.push({input:buf,left:(i%cols)*w,top:Math.floor(i/cols)*(h+labelH)});const svg=Buffer.from(`<svg width="${w}" height="${labelH}"><rect width="100%" height="100%" fill="#fff"/><text x="8" y="16" font-size="13" fill="#000">${htmlEsc(it.label)}</text><text x="8" y="34" font-size="11" fill="#333">${i+1}. ${htmlEsc(path.basename(it.path))}</text></svg>`);composites.push({input:svg,left:(i%cols)*w,top:Math.floor(i/cols)*(h+labelH)+h});}
await sharp({create:{width:w*cols,height:(h+labelH)*rows,channels:3,background:'#fff'}}).composite(composites).webp({lossless:true}).toFile(`${root}/${name}.webp`);return {path:`${root}/${name}.webp`,items:items.map((x,i)=>({...x,cell:i+1}))};}
(async()=>{const sheets=[];sheets.push(await sheet('bases',Object.entries(story.characters).map(([k,v])=>({label:k,path:v.image})).concat([{label:'huangqiuqiu-human (unregistered)',path:'assets/character-variants/huangqiuqiu-human-20261022/char-huangqiuqiu-human-base.webp'}]),5,260,390));
for(const [k,v]of Object.entries(story.characters))sheets.push(await sheet('expressions-'+k,Object.entries(v.expressions).map(([e,p])=>({label:k+':'+e,path:p})),5,210,315));
const bg=Object.entries(story.backgrounds).map(([k,v])=>({label:k,path:v}));bg.push({label:'street:day override',path:'assets/background-variants/m2-daynight-20261020/bg-street-day.webp'});for(let i=0;i<bg.length;i+=6)sheets.push(await sheet('backgrounds-'+(i/6+1),bg.slice(i,i+6),2,600,338));
const cgs=Object.entries(story.cgs).map(([k,v])=>({label:k,path:v.image}));for(let i=0;i<cgs.length;i+=4)sheets.push(await sheet('cg-'+(i/4+1),cgs.slice(i,i+4),2,600,338));
sheets.push(await sheet('covers',require('../../assets/cover-b-manifest.json').images.map((v,i)=>({label:i?'mobile':'desktop',path:v.path})),2,600,600));
fs.writeFileSync(root+'/contact-sheets-index.json',JSON.stringify(sheets,null,2));console.log(sheets.map(s=>s.path).join('\n'));})();
