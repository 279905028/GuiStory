'use strict';

// E03 专用：从已冻结原文组装十份共通 JSON。只写 common/，不调用正式构建或播放器。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = path.resolve(__dirname, '..');
const root = path.resolve(base, '../..');
const contract = require('../contract.json');
const art = require('../美术清单.json');
const { validate } = require('../verify-contract.cjs');
const copy = value => JSON.parse(JSON.stringify(value));

// 只去掉给读稿者看的条件前缀；保留其后的每个字及原始标点。
const conditionPrefixes = {
  '2:19': '如果第一章记下了三拍，',
  '2:29': '如果第一章没有记下三拍，',
  '5:33': '**若当时发了说明语音：**',
  '5:35': '**若当时用文字重约时间：**'
};

// 仅标注明确的整段直接对白；含动作、转述或多人对白的段落保留原样旁白。
// 未识别门后声音始终是 narrator，不借 speaker 提前暴露姓名或头像。
const speakers = {
  1: {
    maolang: [21,25,47,111,115,121,129,275],
    wenwen: [23,45,73,99,113,119,127,151,159,169,175,179,195,199,207,225,231,237,241,263,291,301,335,339,327],
    shijiang: [31,35,93],
    xiaoman: [149,153,157,161,167,171,177],
    mengyao: [193,197,203,209,215,229,233,239,243],
    yelan: [265],
    zhouzhi: [289,293,297,303,309,313],
    piao: [325,329,337,341,351]
  },
  2: {
    wenwen: [23,43,47,79,101,105,119,129,135,147,151,159,171,175,183,229,237,249,259],
    yelan: [45,53,103,127,133,137,149,161,173,177],
    maolang: [203,213],
    huangqiuqiu: [247,251,261,267]
  },
  4: {wenwen:[19,23],maolang:[21]},
  5: {zhouzhi:[23]},
  6: {maolang:[19,23],xiaoman:[21],wenwen:[27],zhouzhi:[29]},
  8: {wenwen:[15,19,27,35],shijiang:[25,37]},
  9: {maolang:[21,25],wenwen:[23]},
  10: {piao:[29,33],maolang:[31,49],wenwen:[47]}
};

function makeChapter(number) {
  const ch = contract.chapters[number - 1];
  const section = ch.sections.find(s => s.scope === 'common').source;
  const raw = fs.readFileSync(path.join(root, section.file), 'utf8').split('\n');
  const prefix = `tc_c${String(number).padStart(2,'0')}_common_`;
  const scenePrefix = prefix.replace('tc_', 'ts_');
  const sourceMap = [], exclusions = [], scenes = {}, nodes = {};
  const sceneSources = new Map();
  const m = {
    schemaVersion:1,contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,
    moduleId:`common/ch${String(number).padStart(2,'0')}`,owner:'E03',
    scenes,nodes,imports:[],exports:{},sourceMap,exclusions,
    assetRequests:[{id:`e01-art-ch${String(number).padStart(2,'0')}`,
      a01Ids:[...new Set(art.chapters.find(c=>c.chapter===number).sections.filter(s=>s.route==='common')
        .flatMap(s=>[...s.scenes.flatMap(scene=>scene.assetIds),...(s.characterAssetIds||[]),...(s.lookAssetIds||[])]))].sort()}]
  };
  function source(line,nodeIds,kind) {
    sourceMap.push({file:section.file,startLine:line,endLine:line,nodeIds,kind});
  }
  function scene(key, day, time, location, bg, sourceLine, title) {
    const id=scenePrefix+key;
    assert(!scenes[id],id);
    const chronology = {domain:number===10?'two-years-later':'story-day',mode:'present',clock:time};
    if(number!==10) chronology.day=day;
    scenes[id]={chapter:number,title:title || raw[sourceLine-1].replace(/^#+\s*/,''),bg,time,chronology,location,
      day:number===10?null:day,dayLabel:number===10?'两年后':`第${day}天`};
    sceneSources.set(id,sourceLine);
    return id;
  }
  function lines(key,from,to,sceneId,firstId) {
    const ids=[];
    for(let line=from;line<=to;line++) {
      let text=raw[line-1];
      if(!text.trim()) continue;
      const prefixToRemove=conditionPrefixes[`${number}:${line}`];
      if(prefixToRemove) {assert(text.startsWith(prefixToRemove));text=text.slice(prefixToRemove.length);}
      assert(text && !/^(?:#|>|\*\*选择|\*\*路线选择|- \*\*)/.test(text),`非正文 ${number}:${line}`);
      const id=ids.length===0&&firstId ? firstId : prefix+key+'_'+String(ids.length+1).padStart(2,'0');
      assert(!nodes[id],id);
      const speaker=Object.entries(speakers[number]||{}).find(([,list])=>list.includes(line))?.[0] || 'narrator';
      nodes[id]={id,type:'line',scene:sceneId,speaker,text,character:null,next:null};
      ids.push(id);source(line,[id],speaker==='narrator'?'narration':'dialogue');
    }
    assert(ids.length,key);
    link(ids,null);
    return ids;
  }
  function link(ids,next) {
    ids.forEach((id,index)=>{assert.equal(nodes[id].type,'line');nodes[id].next=ids[index+1]||next;});
    return ids[0];
  }
  function choice(id,sceneId,targets) {
    const q=contract.choices.find(q=>q.id===id);assert(q,id);
    const choices=q.options.map((o,index)=>{
      const result={label:o.label,value:o.value,next:targets[index]};
      if(o.requires.length)result.requires=copy(o.requires);
      source(o.source.line,[id],'choice');return result;
    });
    const text=q.prompt.raw.replace(/^\*\*(?:选择\d+|路线选择)｜/,'').replace(/\*\*$/,'');
    nodes[id]={id,type:'choice',scene:sceneId,flag:q.flag,text,choices,character:null};
    source(q.prompt.line,[id],'choice');return id;
  }
  function gate(key,sceneId,flag,cases,sourceLine) {
    const id=prefix+key;
    nodes[id]={id,type:'gate',scene:sceneId,cases:Object.entries(cases).map(([value,next])=>({flag,value,next})),default:null,exhaustive:true};
    source(sourceLine,[id],'control');return id;
  }
  function routeGate(sceneId,sourceLine) {
    const id=gate('route_gate',sceneId,'route',Object.fromEntries(contract.routes.map(r=>[r.id,`tc_c${String(number).padStart(2,'0')}_${r.id}_entry`])),sourceLine);
    return id;
  }
  function exit() {
    assert(ch.exit);
    const sceneId=scenePrefix+'chapter_end';
    scenes[sceneId]={chapter:number,title:ch.title,bg:'tc-bg-chapter-end',time:'章末',
      chronology:{domain:'chapter-range',mode:'present',label:ch.days},location:'',day:null,dayLabel:ch.days};
    // 章末是控制界面，不复述上一段或引入新对白。
    nodes[ch.exit]={id:ch.exit,type:'end',scene:sceneId,title:ch.title,text:'',character:null,next:ch.next,nextChapter:contract.chapters[number].title};
    source(section.startLine,[ch.exit],'control');return ch.exit;
  }
  function finish() {
    for(const [sceneId,line] of sceneSources) {
      const first=Object.values(nodes).find(n=>n.scene===sceneId);assert(first,sceneId+'无节点');
      source(line,[first.id],/^#/.test(raw[line-1])?'scene-title':'control');
    }
    const mapped = new Set(sourceMap.flatMap(s=>Array.from({length:s.endLine-s.startLine+1},(_,i)=>s.startLine+i)));
    for(let line=1;line<=raw.length;line++) {
      const text=raw[line-1];if(!text.trim()||mapped.has(line))continue;
      // 只认领共通段与全文件导航；路线正文属于 E04—E07。
      if(ch.sections.some(s=>s.scope!=='common'&&line>=s.source.startLine&&line<=s.source.endLine))continue;
      let reason;
      if(/^>/.test(text)||line===3) reason='reading-rule';
      else if(/^#/.test(text)) reason='heading-only';
      else if(text==='---'||text.startsWith('[返回')||text.startsWith('本章路线：')) reason='navigation';
      else throw Error(`未处理的共通正文 ${number}:${line} ${text}`);
      exclusions.push({file:section.file,startLine:line,endLine:line,reason});
    }
    const refs=n=>[n.next,n.default,...(n.choices||[]).map(x=>x.next),...(n.cases||[]).map(x=>x.next)].filter(Boolean);
    m.imports=[...new Set(Object.values(nodes).flatMap(refs).filter(id=>!nodes[id]))].sort();
    for(const id of [ch.entry,ch.exit,ch.dispatch,...contract.epilogues.filter(e=>number===10).map(e=>e.id)])
      if(id) {assert(nodes[id],id);m.exports[id]=id;}
    sourceMap.sort((a,b)=>a.startLine-b.startLine||a.kind.localeCompare(b.kind));
    return m;
  }
  return {ch,raw,prefix,scene,lines,link,choice,gate,routeGate,exit,finish,nodes};
}

function assemble() {
  validate(contract);
  const output=[];
  {
    const x=makeChapter(1),p=x.prefix;
    const bus=x.scene('arrival_bus',1,'下午','公交站牌','tc-bg-busstop-day',7);
    const slope=x.scene('arrival_slope',1,'下午','坡路','tc-bg-slope-day',19,'箱子轮子响得太大');
    const counter=x.scene('first_shift_talk',1,'下午','网吧柜台','tc-bg-netcafe-counter-day',27,'先把休息讲明白');
    const door=x.scene('three_taps',1,'21:40','网吧后院侧门外','tc-bg-backdoor-night',53);
    const lobby=x.scene('back_to_counter',1,'21:40','网吧门厅与柜台','tc-bg-netcafe-counter-night',83,'先回柜台');
    const shift=x.scene('first_shift',1,'22:00','网吧柜台','tc-bg-netcafe-counter-night',91,'第一班');
    const night=x.scene('night_greeting',2,'02:00','网吧柜台','tc-bg-netcafe-counter-night',97,'预支早上好');
    const handover=x.scene('dawn_handover',2,'06:00','网吧门口','tc-bg-netcafe-counter-day',107,'六点交班');
    const breakfast=x.scene('breakfast',2,'06:20','早餐店','tc-bg-breakfast-dawn',105);
    const rental=x.scene('morning_messages',2,'清晨','文文出租屋','tc-bg-rental-day',135,'回去睡觉');
    const salon=x.scene('salon',3,'16:10','理发店','tc-bg-salon-day',145);
    const reunion=x.scene('reunion',4,'17:20','便利店','tc-bg-convenience-day',185);
    const fork=x.scene('reunion_fork',4,'17:20','街道岔路口与坡口','tc-bg-slope-day',219,'分开前');
    const game=x.scene('home_game',5,'20:30','文文出租屋','tc-bg-rental-night',253);
    const noodles=x.scene('noodles',6,'17:30','街口面馆','tc-bg-food-dusk',285);
    const piao=x.scene('piao_meal',7,'17:30','约饭小店','tc-bg-food-dusk',319);
    const rain=x.scene('two_umbrellas',7,'饭后','雨中街道及路口','tc-bg-eaves-day',349,'三个人两把伞');
    const intro=[...x.lines('arrival',9,17,bus,x.ch.entry),...x.lines('slope',19,25,slope),...x.lines('job_talk',27,51,counter),...x.lines('three_taps',55,65,door)];
    const record=x.lines('rhythm_record',71,77,door),ignore=x.lines('rhythm_ignore',83,85,lobby);
    const middle=[...x.lines('first_shift',91,95,shift),...x.lines('night_greeting',97,103,night),...x.lines('handover',107,107,handover),...x.lines('breakfast',109,133,breakfast),...x.lines('morning_messages',135,143,rental),...x.lines('salon',147,183,salon),...x.lines('reunion',187,217,reunion),...x.lines('reunion_fork',219,219,fork)];
    x.link(intro,x.choice(p+'rhythm_record_choice',door,[record[0],ignore[0]]));
    x.link(record,middle[0]);x.link(ignore,middle[0]);
    const nervous=x.lines('reunion_nervous',225,233,fork),availability=x.lines('reunion_availability',237,243,fork);
    x.link(middle,x.choice(p+'reunion_choice',fork,[nervous[0],availability[0]]));
    const tail=[...x.lines('reunion_message',247,251,fork),...x.lines('home_game',255,283,game),...x.lines('noodles',287,317,noodles),...x.lines('piao_meal',321,347,piao),...x.lines('two_umbrellas',349,357,rain)];
    x.link(nervous,tail[0]);x.link(availability,tail[0]);x.link(tail,x.exit());output.push(x.finish());
  }
  {
    const x=makeChapter(2),p=x.prefix;
    const counter=x.scene('charger',8,'19:40','网吧柜台','tc-bg-netcafe-counter-night',7);
    const door=x.scene('reply_at_door',8,'19:40','网吧后院侧门外','tc-bg-backdoor-night',11,'还记得的三拍');
    const street=x.scene('same_sign',8,'19:40','坡口面馆外街道','tc-bg-food-front-dusk',39,'同一块招牌');
    const missed=x.scene('missed_game',10,'20:50','文文出租屋','tc-bg-rental-night',59);
    const later=x.scene('next_meeting',10,'21:00后','文文出租屋','tc-bg-rental-night',95,'下次见面的时间');
    const noodles=x.scene('yelan_first',12,'16:30','坡口面馆','tc-bg-food-day',109);
    const walk=x.scene('yelan_walk',12,'饭后','面馆外沿街和岔路口','tc-bg-food-day',181,'下回不用等毛狼');
    const meal=x.scene('friends_meal',14,'18:00','朋友约饭小店','tc-bg-food-dusk',191);
    const hiddenCounter=x.scene('qiu_arrival',14,'20:30','网吧柜台过道','tc-bg-netcafe-counter-night',225,'门后有人回答');
    const hiddenDoor=x.scene('qiu_door',14,'20:30','网吧后院侧门外','tc-bg-backdoor-night',221,'门后有人回答');
    const courtyard=x.scene('qiu_meeting',14,'20:30','网吧后院','tc-bg-courtyard-night',243,'门后有人回答');
    const home=x.scene('qiu_name_note',14,'20:30','文文出租屋','tc-bg-rental-night',271,'备忘录上的名字');
    const intro=[...x.lines('charger',9,9,counter,x.ch.entry),...x.lines('rhythm_heard',11,13,door)];
    const remembered=x.lines('rhythm_remembered',19,27,door),unremembered=x.lines('rhythm_unremembered',29,29,door),leave=x.lines('rhythm_leave',33,33,door);
    const recordGate=x.gate('rhythm_reply_gate',door,'qiuSignal',{record:remembered[0],ignore:unremembered[0]},19);
    x.link(intro,x.choice(p+'rhythm_reply_choice',door,[recordGate,leave[0]]));
    const beforeMissed=[...x.lines('same_sign',39,57,street),...x.lines('missed_game',61,73,missed)];
    for(const branch of [remembered,unremembered,leave])x.link(branch,beforeMissed[0]);
    const voice=x.lines('missed_voice',79,83,missed),reschedule=x.lines('missed_reschedule',87,89,missed);
    x.link(beforeMissed,x.choice(p+'missed_game_choice',missed,[voice[0],reschedule[0]]));
    const beforeYelan=[...x.lines('laundry',93,93,missed),...x.lines('next_meeting',95,107,later),...x.lines('yelan_first',111,139,noodles)];
    x.link(voice,beforeYelan[0]);x.link(reschedule,beforeYelan[0]);
    const game=x.lines('yelan_game',145,155,noodles),food=x.lines('yelan_food',159,165,noodles);
    x.link(beforeYelan,x.choice(p+'yelan_first_choice',noodles,[game[0],food[0]]));
    const beforeHidden=[...x.lines('yelan_meal',169,179,noodles),...x.lines('yelan_walk',181,189,walk),...x.lines('friends_meal',193,219,meal)];
    x.link(game,beforeHidden[0]);x.link(food,beforeHidden[0]);
    const hidden=[...x.lines('qiu_arrival',225,225,hiddenCounter),...x.lines('qiu_door',227,241,hiddenDoor),...x.lines('qiu_meeting',243,267,courtyard),...x.lines('qiu_leave',269,269,hiddenDoor),...x.lines('qiu_note',271,271,home,p+'qiu_met')];
    const event=contract.automaticEvents.find(e=>e.nodeId===p+'qiu_met');
    x.nodes[event.nodeId].onEnter={requires:copy(event.requires),setFlags:copy(event.setFlags)};
    const end=x.exit();x.link(hidden,end);
    const replyGate=x.gate('qiu_reply_gate',meal,'qiuReply',{reply:hidden[0],leave:end},223);
    const signalGate=x.gate('qiu_signal_gate',meal,'qiuSignal',{record:replyGate,ignore:end},223);
    x.link(beforeHidden,signalGate);output.push(x.finish());
  }
  for(const number of [3,4,5,6,7,8,9]) {
    const x=makeChapter(number);
    const specs={
      3:['invitation',15,'下午','文文出租屋','tc-bg-rental-day',13,19],
      4:['payday',22,'15:40','文文出租屋','tc-bg-rental-day',13,27],
      5:['echo_message',25,'18:10','文文出租屋','tc-bg-rental-night',13,29],
      6:['last_night_meal',30,'18:00','回声旁小店','tc-bg-food-dusk',13,31],
      7:['short_game',35,'下午','文文出租屋','tc-bg-rental-day',13,23],
      8:['trial_roster',52,'17:00','网吧柜台','tc-bg-netcafe-counter-day',13,39],
      9:['confirmed_roster',61,'下午','网吧柜台','tc-bg-netcafe-counter-day',13,31]
    };
    const [key,day,time,location,bg,start,end]=specs[number];
    const scene=x.scene(key,day,time,location,bg,11);
    const body=x.lines(key,start,end,scene,x.ch.entry);
    x.exit();
    if(number===3) {
      x.link(body,x.choice(x.ch.dispatch,scene,contract.routes.map(r=>'tc_c03_'+r.id+'_entry')));
    } else if(number===5) {
      const later=x.scene('missed_game_callback',25,'晚些时候','文文出租屋','tc-bg-rental-night',33,'提前把约局说清');
      const voice=x.lines('missed_voice_callback',33,33,later),reschedule=x.lines('missed_reschedule_callback',35,35,later);
      const dispatch=x.routeGate(later,31);
      x.link(voice,dispatch);x.link(reschedule,dispatch);
      x.link(body,x.gate('missed_game_gate',later,'missedGame',{voice:voice[0],reschedule:reschedule[0]},31));
    } else if(number===6) {
      const leaving=x.scene('meal_goodbye',30,'七点多','回声旁小店','tc-bg-food-dusk',33,'吃完还要上班');
      const work=x.scene('night_shift',30,'22:00','网吧柜台','tc-bg-netcafe-counter-night',35,'按时到岗');
      const midnight=x.scene('after_midnight',31,'凌晨','网吧柜台','tc-bg-netcafe-counter-night',37,'收工了，回去睡');
      const dawn=x.scene('closed_echo',31,'06:00','回声门外与早餐摊','tc-bg-echo-closed-day',39,'招牌还在那里');
      body.push(...x.lines('meal_goodbye',33,33,leaving),...x.lines('night_shift',35,35,work),...x.lines('after_midnight',37,37,midnight),...x.lines('closed_echo',39,41,dawn));
      x.link(body,x.routeGate(dawn,43));
    } else x.link(body,x.routeGate(scene,x.ch.sections[0].source.startLine));
    output.push(x.finish());
  }
  {
    const x=makeChapter(10),p=x.prefix;
    const daily=x.scene('daily_life',null,'两年后','网吧柜台','tc-bg-netcafe-counter-day',11);
    const meal=x.scene('piao_dating_meal',null,'休班日','朋友约饭小店','tc-bg-food-day',21,'朋友饭局');
    const wedding=x.scene('piao_wedding',null,'婚宴当天','普通小店婚宴','tc-bg-banquet-day',41,'飘与毛狼的婚宴');
    const intro=x.lines('daily_life',13,19,daily,x.ch.entry);
    const dating=x.lines('piao_dating',25,39,meal,p+'piao_dating');
    const married=x.lines('piao_wedding',45,61,wedding,p+'piao_wedding');
    const dispatch=x.routeGate(daily,63);
    x.link(dating,dispatch);x.link(married,dispatch);
    const relation=x.gate('piao_relationship_gate',daily,'piaoRelationship',{dating:dating[0],friends:married[0]},23);
    const epilogue=x.gate('epilogue_route_gate',daily,'route',Object.fromEntries(contract.routes.map(r=>[r.id,r.id==='piao'?relation:married[0]])),43);
    x.link(intro,epilogue);output.push(x.finish());
  }
  return output;
}

if(require.main===module) {
  const modules=assemble();
  for(const m of modules) fs.writeFileSync(path.join(__dirname,m.moduleId.split('/')[1]+'.json'),JSON.stringify(m,null,2)+'\n');
  console.log(JSON.stringify({owner:'E03',modules:modules.length,nodes:modules.reduce((n,m)=>n+Object.keys(m.nodes).length,0),formalIntegration:false}));
}
module.exports={assemble,conditionPrefixes};
