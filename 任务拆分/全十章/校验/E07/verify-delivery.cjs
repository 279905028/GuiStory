'use strict';

// E07 演出请求与交付边界检查。只读已有美术，不作 A06 图面验收或 E08 播放器验收。
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../../../..'),base=path.join(root,'任务拆分/全十章');
const read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const m=read(path.join(base,'routes/huangqiuqiu.json')),d=read(path.join(__dirname,'delivery.json')),p=read(path.join(__dirname,'presentation.json'));
const forms=read(path.join(root,p.formsIndex));
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex');
const clone=x=>JSON.parse(JSON.stringify(x));
const checks=[];
function check(name,fn){try{const details=fn();checks.push({name,status:'passed',...(details?{details}:{})});}catch(e){checks.push({name,status:'failed',message:e.message});}}
function auditRequests(req){
  const seen=new Set(),files=new Set();
  for(const r of req.nodeRequests){
    assert(!seen.has(r.nodeId),'演出节点重复');seen.add(r.nodeId);
    const n=m.nodes[r.nodeId];assert(n&&n.type==='line','非正文演出节点');
    const src=d.paragraphs.find(x=>x.nodeId===r.nodeId);assert(src,'缺来源');
    assert.deepEqual(r.source,{file:src.file,line:src.line});
    const chapter=m.scenes[n.scene].chapter;
    const expected=chapter>8||chapter===8&&src.line>=527?'human':'sphere';
    assert.equal(r.form,expected,'形态早切或倒退');assert.equal(r.character,n.character);
    const item=forms.assetBindings[r.assetId];assert(item,'A03资源ID未知');
    assert.equal(item.form,r.form,'跨形态取图');assert.equal(item.expression||'base',r.expression);
    assert.equal(r.image,item.image);assert.equal(r.avatarImage,item.avatarImage);
    assert.equal(r.avatarExpression,n.speaker==='huangqiuqiu'?r.expression:null);
    if(n.character===null)assert.equal(r.rendering,'no-physical-sprite');
    if(r.form==='human')assert.equal(r.framing,'waist-up-no-new-lower-clothing');
    assert.equal(r.status,'requested-not-adopted');
    for(const file of [r.image,r.avatarImage]){
      assert(file.endsWith('.webp'),'交付引用必须为WebP');
      const bytes=fs.readFileSync(path.join(root,file));
      assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WEBP');files.add(file);
    }
  }
  assert.equal(seen.size,Object.values(m.nodes).filter(n=>n.type==='line').length,'正文演出覆盖缺失');
  return {nodes:seen.size,referencedWebpFiles:files.size,scope:'存在与文件头检查；非像素或图面验收'};
}
check('301段来源与演出请求一一对应，A03同形态立绘／头像存在',()=>auditRequests(p));
check('21个A01场段映射与8章资产请求完整',()=>{
  const art=read(path.join(base,'美术清单.json')),valid=new Set(art.assets.map(x=>x.id));
  const sections=art.chapters.flatMap(ch=>ch.sections.filter(s=>s.route==='huangqiuqiu'));
  assert.equal(d.assetMappings.length,sections.length);
  for(const a of d.assetMappings){const s=sections.find(s=>s.id===a.a01SectionId);assert(s);assert.equal(a.startLine,s.sourceLineStart);assert.equal(a.endLine,s.sourceLineEnd);
    a.assetIds.forEach(id=>assert(valid.has(id),'A01未知资源 '+id));a.nodeIds.forEach(id=>assert(m.nodes[id]));a.sceneIds.forEach(id=>assert(m.scenes[id]));}
  assert.equal(m.assetRequests.length,8);
  assert.deepEqual(new Set(p.sceneRequests.map(x=>x.sceneId)),new Set(Object.keys(m.scenes)));
});
check('第42天铺垫到55天变身的演出顺序及唯一写入点',()=>{
  const ids=p.sequence.map(x=>x.nodeId);assert.equal(ids.length,new Set(ids).size);
  const lines=p.sequence.slice(0,8).map(r=>p.nodeRequests.find(x=>x.nodeId===r.nodeId).source.line);
  assert.deepEqual(lines,[553,487,505,521,523,525,527,543]);
  const writes=Object.values(m.nodes).filter(n=>n.onEnter);assert.equal(writes.length,1);
  assert.equal(writes[0].id,'tc_c08_huangqiuqiu_human_reveal');
  assert.deepEqual(writes[0].onEnter.setFlags,{qiuForm:'human'});
  assert(!writes[0].onEnter.requires.some(r=>/Relationship/.test(r.flag)));
  assert.equal(p.sequence[5].form,'sphere');assert.equal(p.sequence[6].form,'human');
});
check('两种结局卡使用门内场景与人形，且有演出交接',()=>{
  for(const n of Object.values(m.nodes).filter(n=>n.type==='end')){
    assert.equal(m.scenes[n.scene].location,'网吧后院门内干处');
    const r=p.controlRequests.find(x=>x.nodeId===n.id);assert.equal(r.form,'human');assert.equal(r.rendering,'ending-card-private-courtyard');
  }
});
check('第九章数日后保留相对日期，不编造实际日序',()=>{
  const note=p.relativeTimeNotes[0];assert.equal(note.anchorDay,76);assert.equal(note.nodeIds.length,4);
  for(const id of note.nodeIds){const n=m.nodes[id],s=m.scenes[n.scene];assert.equal(n.time,'第76天后的数日·具体时刻未注明');assert.equal(s.chronology.label,note.label);}
});
check('隐藏门与E03原有契约一致，E07不写qiuMet',()=>{
  const c=read(path.join(base,'contract.json')),ch2=read(path.join(base,'common/ch02.json')),ch3=read(path.join(base,'common/ch03.json'));
  const event=d.hiddenContract.meetEvent;
  assert.deepEqual(ch2.nodes[event.nodeId].onEnter,{requires:event.requires,setFlags:event.setFlags});
  const option=ch3.nodes[c.interface.routeChoice].choices.find(o=>o.value==='huangqiuqiu');
  assert.deepEqual(option.requires,d.hiddenContract.entranceRequires);
  assert(Object.values(m.nodes).every(n=>!n.onEnter||!Object.hasOwn(n.onEnter.setFlags,'qiuMet')));
});
check('交付均标注待采用，保护美术索引版本',()=>{
  assert.equal(p.formsIndexSha256,hash(p.formsIndex));assert.equal(p.status,'requested-not-adopted');
  assert.equal(d.formalIntegration,false);assert.equal(p.formalIntegration,false);
  assert(d.assetMappings.every(x=>x.bindingStatus==='requested-not-adopted'));
});
check('确定性转录复现三份交付，未覆盖文件',()=>{
  const r=require('./build-route.cjs').build();assert.deepEqual(r.module,m);assert.deepEqual(r.delivery,d);assert.deepEqual(r.presentation,p);
});
for(const [name,mutate] of [
  ['提前把第42天显示为人形',x=>{x.nodeRequests.find(r=>r.nodeId===p.sequence[0].nodeId).form='human';}],
  ['把人形结局正文的图片换回球形',x=>{const r=x.nodeRequests.find(r=>r.nodeId.startsWith('tc_c10_'));r.image=forms.characters.huangqiuqiu.forms.sphere.image;}],
  ['门外提前摆放实体立绘',x=>{x.nodeRequests.find(r=>r.character===null).rendering='physical';}],
  ['漏掉首次人形节点演出请求',x=>{x.nodeRequests=x.nodeRequests.filter(r=>r.nodeId!=='tc_c08_huangqiuqiu_human_reveal');}]
])check('拒绝反例：'+name,()=>{const candidate=clone(p);mutate(candidate);assert.throws(()=>auditRequests(candidate));});
const report={task:'E07',date:'2026-10-23',formalIntegration:false,scope:'演出请求、来源、资源引用、保护文件；未做正式播放器、存档、浏览器或A06图面验收',
  passed:checks.filter(x=>x.status==='passed').length,failed:checks.filter(x=>x.status==='failed').length,checks,
  inputs:['任务拆分/全十章/routes/huangqiuqiu.json','任务拆分/全十章/校验/E07/delivery.json','任务拆分/全十章/校验/E07/presentation.json',p.formsIndex].map(file=>({file,sha256:hash(file)}))};
fs.writeFileSync(path.join(__dirname,'delivery-verification.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({passed:report.passed,failed:report.failed,failures:checks.filter(x=>x.status==='failed')},null,2));
if(report.failed)process.exitCode=1;
