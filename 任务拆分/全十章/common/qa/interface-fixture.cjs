'use strict';

// 仅替代未交付路线的外部边界，用来通过 E02 校验 E03 的真实共通模块。
// route*.json 不包含路线正文，不是 E04—E07 的交付，也不可用于 candidate。
const fs=require('node:fs');
const path=require('node:path');
const contract=require('../../contract.json');
const root=path.resolve(__dirname,'../../../..');
const version={schemaVersion:1,contractVersion:contract.contractVersion,contentRevision:contract.contentRevision};
const clone=x=>JSON.parse(JSON.stringify(x));

function fixtures(common) {
  const modules=[];
  const stops=[];
  for(const route of contract.routes) {
    const m={...version,moduleId:route.file.replace('.json',''),owner:route.owner,scenes:{},nodes:{},imports:[],exports:{},sourceMap:[],exclusions:[],assetRequests:[]};
    for(const part of route.chapters) {
      const ch=contract.chapters[part.chapter-1];
      const section=ch.sections.find(s=>s.scope===route.id).source;
      const sceneId=part.entry.replace('tc_','ts_').replace('_entry','_interface_stub');
      const scene={chapter:part.chapter,title:'E03 外部路线接口桩',bg:'e03-interface-stub',time:'接口测试',
        chronology:{domain:part.chapter===10?'two-years-later':'story-day',mode:'present'},location:'接口测试',
        day:part.chapter===10?null:ch.dayRange[0],dayLabel:part.chapter===10?'两年后':`第${ch.dayRange[0]}天`};
      if(part.chapter!==10)scene.chronology.day=scene.day;
      m.scenes[sceneId]=scene;
      m.nodes[part.entry]={id:part.entry,type:'line',scene:sceneId,speaker:'narrator',text:'【E03 测试接口桩，不是路线正文】',next:part.chapter===10?null:ch.exit};
      m.exports[part.entry]=part.entry;
      m.sourceMap.push({file:section.file,startLine:section.startLine,endLine:section.startLine,nodeIds:[part.entry],kind:'control'});
      if(part.chapter===10)stops.push(part.entry);else m.imports.push(ch.exit);
      if(route.id==='piao'&&part.chapter===3) {
        const q=contract.choices.find(q=>q.id==='tc_c03_piao_relationship_choice');
        m.nodes[part.entry].next=q.id;
        m.nodes[q.id]={id:q.id,type:'choice',scene:sceneId,flag:q.flag,text:'',choices:q.options.map(o=>({label:o.label,value:o.value,next:ch.exit}))};
        m.sourceMap.push({file:q.prompt.file,startLine:q.prompt.line,endLine:q.prompt.line,nodeIds:[q.id],kind:'control'});
      }
      // E02 检查后续形态；此处仅注入 E07 契约规定的事件，不表示路线已制作。
      if(route.id==='huangqiuqiu'&&part.chapter===8) {
        const event=contract.automaticEvents.find(e=>e.owner==='E07');
        const eventScene=sceneId.replace('interface_stub','event_stub');
        m.scenes[eventScene]={...clone(scene),time:event.time,day:event.day,dayLabel:`第${event.day}天`,chronology:{domain:'story-day',mode:'present',day:event.day,clock:event.time}};
        m.nodes[part.entry].next=event.nodeId;
        m.nodes[event.nodeId]={id:event.nodeId,type:'line',scene:eventScene,speaker:'narrator',text:event.source.raw,
          next:ch.exit,onEnter:{requires:clone(event.requires),setFlags:clone(event.setFlags)}};
        m.sourceMap.push({file:event.source.file,startLine:event.source.line,endLine:event.source.line,nodeIds:[event.nodeId],kind:'narration'});
      }
    }
    modules.push(m);
  }
  const all=[...common,...modules];
  const backgroundIds=[...new Set(all.flatMap(m=>Object.values(m.scenes).map(s=>s.bg)))];
  const bindings={...version,characters:Object.fromEntries(contract.characters.map(c=>[c.id,{name:c.name}])),
    backgrounds:Object.fromEntries(backgroundIds.map(id=>[id,'sample://e03-interface/'+id])),cgs:{},scenes:{},nodes:{}};
  const manifest={...version,mode:'sample',modules:[...common.map(m=>'../../'+m.moduleId.split('/')[1]+'.json'),...modules.map(m=>'route-'+m.moduleId.split('/')[1]+'.json')],
    bindings:['bindings.json'],sample:{start:contract.interface.start,stops}};
  return {manifest,modules:all,bindings:[bindings],contract:clone(contract)};
}

function saveFixture(common) {
  const project=fixtures(common),directory=path.join(__dirname,'fixtures');
  fs.mkdirSync(directory,{recursive:true});
  const save=(file,value)=>fs.writeFileSync(path.join(directory,file),JSON.stringify(value,null,2)+'\n');
  save('manifest.json',project.manifest);save('bindings.json',project.bindings[0]);
  for(const module of project.modules.slice(10))save('route-'+module.moduleId.split('/')[1]+'.json',module);
  return path.join(directory,'manifest.json');
}
module.exports={fixtures,saveFixture};
