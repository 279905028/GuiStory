/* 文稿路径审校：读取 Markdown 条件，不加载游戏或玩家存档。 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../../..');
const folder = '项目文档/故事/v1.1润色稿';
const baseline = path.join(__dirname, 'baseline', folder);
const current = path.join(root, folder);
const routes = [
 ['XM','罗小满-练习本.md','罗小满',['XM07-01','XM08-01']],
 ['ZZ','周栀-十一点四十七分.md','周栀',['ZZ06-01','ZZ08-01']],
 ['MY','孟遥-旧题.md','孟遥',['MY07-01','MY09-01']],
 ['YL','叶岚-下线.md','叶岚',['YL06-01','YL09-01']],
 ['PI','飘-空白页.md','飘',['PI06-01','PI08-01']],
 ['FR','朋友与职业-夜班.md','朋友与职业',['FR06-01','FR08-01']],
 ['HQ','黄球球-门后.md','黄球球',['HQ07-01','HQ08-01']]
];
const commonNames=['第一章-回到毕节.md','第二章-十四天.md'];
const choiceRE=/^\*\*选择 ([A-Z0-9]+-\d{2})｜(.+)\*\*$/gm;
const han=s=>(s.match(/\p{Script=Han}/gu)||[]).length;
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const read=(dir,name)=>fs.readFileSync(path.join(dir,name),'utf8');
const ids=text=>[...text.matchAll(choiceRE)].map(m=>m[1]);
function conditions(expr, flags) {
 return expr.split('|').some(or=>or.split('&').every(and=>{
  const m=/^\s*([A-Z0-9]+-\d{2})\s*=\s*([AB])\s*$/.exec(and);
  assert(m,`未知条件：${expr}`);
  assert(Object.hasOwn(flags,m[1]),`条件使用未定义编号：${m[1]}`);
  return flags[m[1]]===m[2];
 }));
}
function commonGuard(text) {
 if(!text.includes('### 第8—9天｜')) return text;
 return text.replace(/(^### 第8—9天｜[\s\S]*?)(?=^### 第九天)/m,'<!-- IF C01-02=A -->\n$1<!-- ENDIF -->\n\n')
 .replace(/(^### 第14天·20:30｜正式相识[\s\S]*?)(?=^### 第14天深夜)/m,'<!-- IF C01-02=A & C02-01=A -->\n$1<!-- ENDIF -->\n\n');
}
function entry(text, label) {
 const parts=[...text.matchAll(/^### (.+)｜(.+)$/gm)];
 const part=parts.findIndex(m=>m[1]===label); assert(part>=0,label);
 return text.slice(0,parts[0].index)+text.slice(parts[part].index,parts[part+1]?.index??text.length);
}
function render(text, flags, external=[]) {
 let inBody=false, currentChoice=null, option=null;
 const stack=[], lines=[], visited=[], endings=[], seen=new Set(external);
 const own=new Set(ids(text));
 for(const raw of text.split('\n')) {
  const line=raw.trim();
  const condition=/^<!-- IF (.+) -->$/.exec(line);
  if(condition) {
   for(const match of condition[1].matchAll(/([A-Z0-9]+-\d{2})\s*=/g))
    assert(!own.has(match[1])||seen.has(match[1]),`条件提前读取 ${match[1]}`);
   stack.push(conditions(condition[1],flags)); continue;
  }
  if(line==='<!-- ENDIF -->') {assert(stack.length,'多余 ENDIF');stack.pop();continue;}
  const active=stack.every(Boolean);
  if(/^#{2,3} 剧情简介$/.test(line)) {inBody=false;currentChoice=null;option=null;continue;}
  if(/^#{2,3} 完整内容$/.test(line)) {inBody=true;currentChoice=null;option=null;continue;}
  const c=/^\*\*选择 ([A-Z0-9]+-\d{2})｜(.+)\*\*$/.exec(line);
  if(c) {
   currentChoice=c[1]; option=null; seen.add(c[1]);
   if(active&&inBody) visited.push(c[1]);
   continue;
  }
  const opt=/^#### ([AB])｜/.exec(line);
  if(opt) {assert(currentChoice,'没有选择却有回应');option=opt[1];continue;}
  if(/^#### 共同段$/.test(line)) {option=null;continue;}
  const eligible=active&&inBody&&(!option||flags[currentChoice]===option);
  const e=/^#### 结局 ([A-Z]+-E[12])｜(.+)$/.exec(line);
  if(e) {if(eligible) endings.push(e[1]);continue;}
  if(!eligible||!line||/^(#|>|<!--|→)/.test(line)) continue;
  if(/^\[.+\]\(.+\)(?: · .*)?$/.test(line)) continue;
  lines.push(line);
 }
 assert.equal(stack.length,0,'未闭合条件');
 return {han:han(lines.join('\n')),text:lines.join('\n\n'),visited,endings};
}
function assignments(names) {
 return Array.from({length:2**names.length},(_,n)=>Object.fromEntries(names.map((id,i)=>[id,(n>>i)&1?'B':'A'])));
}
function commonPaths() {
 const old=commonNames.map(n=>read(baseline,n));
 const fresh=commonNames.map(n=>read(current,n));
 const names=old.flatMap(ids), unique=new Map();
 for(const flags of assignments(names)) {
  const o1=render(old[0],flags), o2=render(commonGuard(old[1]),flags,o1.visited);
  const n1=render(fresh[0],flags), n2=render(commonGuard(fresh[1]),flags,n1.visited);
  assert.deepEqual(n1.visited,o1.visited,'共通第一章选项访问变化');
  assert.deepEqual(n2.visited,o2.visited,'共通第二章入口访问变化');
  const visited=[...o1.visited,...o2.visited];
  assert.equal(visited.includes('C02-01'),flags['C01-02']==='A','记录三拍控制回应机会');
  assert.equal(visited.includes('C02-07'),flags['C01-02']==='A'&&flags['C02-01']==='A','正式相识必须满足两处前置');
  const key=visited.map(id=>id+'='+flags[id]).join(',');
  if(!unique.has(key)) unique.set(key,{flags,old:o1.han+o2.han,fresh:n1.han+n2.han,oldText:o1.text+'\n\n'+o2.text,newText:n1.text+'\n\n'+n2.text,hidden:flags['C01-02']==='A'&&flags['C02-01']==='A'});
 }
 return [...unique.values()];
}
function statsInit() {return {count:0,sum:0,min:Infinity,max:-Infinity,hanMin:Infinity,hanMax:-Infinity};}
function addStat(s,ratio,count) {s.count++;s.sum+=ratio;s.min=Math.min(s.min,ratio);s.max=Math.max(s.max,ratio);s.hanMin=Math.min(s.hanMin,count);s.hanMax=Math.max(s.hanMax,count);}
function finish(s) {return {pathCount:s.count,growthMeanPct:+(s.sum/s.count*100).toFixed(2),growthMinPct:+(s.min*100).toFixed(2),growthMaxPct:+(s.max*100).toFixed(2),fullReadHanMin:s.hanMin,fullReadHanMax:s.hanMax};}
function run({draft=false,only=null}={}) {
 const common=commonPaths(); const result=[]; const samples=[]; const allChoices=[];
 const entryOld=read(baseline,'第三章-选一条路.md'),entryNew=read(current,'第三章-选一条路.md');
 for(const [prefix,name,label,keys] of routes) {
  if(only&&prefix!==only)continue;
  const old=read(baseline,name),fresh=read(current,name); const names=ids(old);
  assert.deepEqual(ids(fresh),names,`${name}选择ID变化`);
  assert.equal(names.length,8);
  const chapterMatches=[...fresh.matchAll(/^## (第[三四五六七八九十]+章)｜/gm)].map(m=>m[1]);
  assert.deepEqual(chapterMatches,['第三章','第四章','第五章','第六章','第七章','第八章','第九章','第十章']);
  const sourceEndings=[...fresh.matchAll(/^#### 结局 ([A-Z]+-E[12])｜(.+)$/gm)].map(m=>({id:m[1],title:m[2]}));
  if(!draft)assert.deepEqual(sourceEndings.map(e=>e.id),[prefix+'-E1',prefix+'-E2'],name+'结局');
  const pool=prefix==='HQ'?common.filter(c=>c.hidden):common;
  const eOld=render(entry(entryOld,label),{'ROUTE-01':label});
  const eNew=render(entry(entryNew,label),{'ROUTE-01':label});
  const groups={AA:statsInit(),AB:statsInit(),BA:statsInit(),BB:statsInit()};
  const endingStats={};let lo=Infinity,hi=0,baseSum=0; const reps={};
  for(const flags of assignments(names)) {
   const a=render(old,flags),b=render(fresh,flags);
   assert.deepEqual(b.visited,names,name+'每路径8处选择');
   const combination=keys.map(k=>flags[k]).join('');
   const expected=prefix+'-E'+(combination==='AA'?'1':'2');
   if(!draft)assert.deepEqual(b.endings,[expected],name+' '+combination);
   lo=Math.min(lo,b.han);hi=Math.max(hi,b.han);baseSum+=a.han;
   const ending=b.endings[0]||'未完成'; endingStats[ending]??=statsInit();
   for(const c of pool) {
    const oldTotal=c.old+eOld.han+a.han, newTotal=c.fresh+eNew.han+b.han;
    const growth=newTotal/oldTotal-1;
    addStat(groups[combination],growth,newTotal);addStat(endingStats[ending],growth,newTotal);
   }
   if(!reps[combination]) {
    const c=pool.find(c=>c.hidden)||pool[0];
    reps[combination]={choices:flags,ending,text:c.newText+'\n\n'+eNew.text+'\n\n'+b.text};
   }
  }
  const endings=Object.fromEntries(Object.entries(endingStats).map(([k,v])=>[k,finish(v)]));
  const keyCombinations=Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,finish(v)]));
  const rangePass=Object.values(endings).every(e=>e.growthMinPct>=40&&e.growthMaxPct<=60);
  result.push({prefix,file:name,baselineRouteHanMean:baseSum/256,routeHanMin:lo,routeHanMax:hi,keys,sourceEndings,endings,keyCombinations,rangePass});
  for(const [combination,re] of Object.entries(reps))samples.push({prefix,combination,...re});
 }
 if(draft) {console.log(JSON.stringify(result,null,2));return result;}
 const manuscriptFiles=[...commonNames,'第三章-选一条路.md',...routes.map(r=>r[1])];
 let introCount=0,bodyCount=0;
 for(const name of manuscriptFiles) {
  const text=read(current,name);
  introCount += [...text.matchAll(/^#{2,3} 剧情简介$/gm)].length;
  bodyCount += [...text.matchAll(/^#{2,3} 完整内容$/gm)].length;
  for(const m of text.matchAll(choiceRE)) {
   const end=text.indexOf('**选择 ',m.index+m[0].length);
   const section=text.slice(m.index,end<0?undefined:end);
   const options=m[1]==='ROUTE-01'?[...section.matchAll(/^### (.+)｜(.+)$/gm)].map(x=>({label:x[1],text:x[2]})):[...section.matchAll(/^#### ([AB])｜(.+)$/gm)].slice(0,2).map(x=>({label:x[1],text:x[2]}));
   assert.equal(options.length,m[1]==='ROUTE-01'?7:2);
   allChoices.push({id:m[1],file:name,question:m[2],options,line:text.slice(0,m.index).split('\n').length,type:routes.some(r=>r[3].includes(m[1]))?'关键选择':m[1]==='ROUTE-01'?'路线选择':['C01-02','C02-01'].includes(m[1])?'入口条件':'普通选择'});
  }
 }
 assert.equal(introCount,59);assert.equal(bodyCount,59);assert.equal(allChoices.length,69);assert.equal(new Set(allChoices.map(c=>c.id)).size,69);
 const protection=JSON.parse(fs.readFileSync(path.join(__dirname,'protected-before.json'),'utf8'));
 const baselineManifest=JSON.parse(fs.readFileSync(path.join(__dirname,'baseline-manifest.json'),'utf8'));
 for(const [f,h] of Object.entries(baselineManifest))assert.equal(hash(fs.readFileSync(path.join(__dirname,'baseline',f))),h,'基线被改动：'+f);
 const changed=Object.entries(protection).filter(([f,h])=>!fs.existsSync(path.join(root,f))||hash(fs.readFileSync(path.join(root,f)))!==h).map(([f])=>f);
 assert.deepEqual(changed,[],'本轮保护文件变化');
 let checkedLinks=0;
 for(const name of fs.readdirSync(current).filter(n=>n.endsWith('.md')))for(const m of read(current,name).matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
  if(/^https?:/.test(m[1]))continue;
  assert(fs.existsSync(path.resolve(current,m[1].split('#')[0])),name+'失效链接 '+m[1]);checkedLinks++;
 }
 const manuscriptHashes=Object.fromEntries(manuscriptFiles.map(f=>[f,hash(fs.readFileSync(path.join(current,f)))]));
 const report={scope:'独立文稿结构、条件路径、实读正文增长与文件保护；不代表游戏或浏览器验收',baseline:'rewrite-20261027/baseline',baselineFiles:Object.keys(baselineManifest).length,manuscriptHashes,counting:'只计所选路径叙述与对白的汉字；排除简介、标题、选项标签、编辑说明和未选结局；新旧对应普通选择与共通入口逐路径比较',manuscriptUnits:introCount,totalChoices:allChoices.length,totalOptions:allChoices.reduce((n,c)=>n+c.options.length,0),keyChoices:14,totalEndings:14,majorCombinations:28,ordinaryCommonPaths:common.length,hiddenCommonPaths:common.filter(c=>c.hidden).length,validatedReadingPaths:result.reduce((n,r)=>n+Object.values(r.endings).reduce((m,e)=>m+e.pathCount,0),0),protectedFiles:Object.keys(protection).length,changedProtectedFiles:changed,checkedLinks,growthPassed:result.every(r=>r.rangePass),routes:result,choices:allChoices};
 const rendered=path.join(__dirname,'rendered');fs.mkdirSync(rendered,{recursive:true});
 for(const sample of samples)fs.writeFileSync(path.join(rendered,`${sample.prefix}-${sample.combination}.md`),`# ${sample.prefix} ${sample.combination} → ${sample.ending}\n\n> 验收用单次阅读路径。${JSON.stringify(sample.choices)}\n\n${sample.text}\n`);
 fs.writeFileSync(path.join(__dirname,'report.json'),JSON.stringify(report,null,2)+'\n');
 fs.writeFileSync(path.join(root,'qa/v1.1-text/report.json'),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({scope:report.scope,manuscriptUnits:introCount,totalChoices:69,totalEndings:14,majorCombinations:28,validatedReadingPaths:report.validatedReadingPaths,protectedFiles:report.protectedFiles,checkedLinks,growthPassed:report.growthPassed,routes:result.map(r=>({prefix:r.prefix,routeHanMin:r.routeHanMin,routeHanMax:r.routeHanMax,endings:r.endings}))},null,2));
 assert(report.growthPassed,'部分实读路径扩写幅度不在40%—60%');
 return report;
}
module.exports={run,render,commonGuard,entry,han,routes};
if(require.main===module)run({draft:process.argv.includes('--draft'),only:process.argv.find(x=>x.startsWith('--file='))?.slice(7)});
