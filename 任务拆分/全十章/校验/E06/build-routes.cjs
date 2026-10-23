'use strict';

// E06 独占转录：读取冻结正文，写两条路线及本任务索引；不修改共通、契约或正式游戏。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../../../..');
const base = path.join(root, '任务拆分/全十章');
const c = require(path.join(base, 'contract.json'));
const art = require(path.join(base, '美术清单.json'));
const {validate} = require(path.join(base, 'verify-contract.cjs'));
const json = x => JSON.stringify(x, null, 2) + '\n';
const pad = n => String(n).padStart(2, '0');

// 每块：语义名、来源范围、背景语义、实际地点、可选时段。
// 未点名地点用空字符串；A01 的建议背景不升级成已确认故事事实。
const blocks = {
  piao: {
    3: [
      ['sweet_jelly',695,743,'rental-day','文文出租屋'],
      ['leave_blank',745,793,'food-day','小店门槛外'],
      ['say_clearly',795,815,'rental-day','文文出租屋'],
      ['dating',822,846,'river-day','河边休息处'],
      ['friends',848,870,'river-day','河边休息处']
    ],
    4: [
      ['two_plans',373,383,'kiosk-eaves-day','小卖部门口雨棚'],
      ['paperboat',390,404,'kiosk-eaves-day','小卖部雨棚及柜台边'],
      ['signs',406,418,'eaves-day','旧街连续屋檐'],
      ['dating',422,438,'street-dusk','岔路至回网吧的路口'],
      ['friends',440,450,'stall-day','炸土豆摊']
    ],
    5: [['cover',365,405,'food-day','安静小店'],['dating',409,431,'food-day','小店桌边'],['friends',433,453,'food-day','小店桌边']],
    6: [['closed_echo',341,363,'street-day','约定路口'],['dating',367,397,'park-day','树影长凳'],['friends',399,419,'park-day','树影长凳']],
    7: [['half_hour',379,385,'street-day','路口'],['paperboat_return',389,389,'street-day','路口'],['signs_return',391,391,'street-day','路口'],
      ['bag_ready',393,393,'street-day','路口'],['dating',397,419,'street-day','路口'],['friends',421,439,'street-day','路口']],
    8: [['shared_time',337,355,'food-day','小店'],['dating',359,381,'clothing-day','服装店'],['friends',383,401,'food-day','小店']],
    9: [['booklet',423,441,'tea-day',''],['dating',445,473,'tea-day',''],['friends',475,497,'tea-day','']],
    10: [['dating',401,443,'tea-day','','一个休息日的下午'],['friends',445,469,'food-day','熟悉的小店','婚礼后的一个下午']]
  },
  friends: {
    3: [['tailoring',874,914,'rental-day',''],['online_game',916,938,'rental-night','文文住处'],['settling_in',940,966,'rental-day','文文出租屋']],
    4: [['own_plan',454,460,'rental-day',''],['show',464,480,'performance-shop-day','街边有小台子的店'],['walk',482,496,'street-day','老街'],
      ['crossroad',498,504,'food-front-dusk','路口面馆门外','傍晚']],
    5: [['job_name',457,483,'supermarket-day','日用品商店'],['say_it',485,501,'food-day','面馆']],
    6: [['quiet_company',423,447,'netcafe-counter-day','网吧外'],['own_invitation',449,465,'rental-day','','18:20'],['sleep',467,473,'rental-day','文文住处']],
    7: [['show_return',447,459,'performance-shop-day','有小舞台的店'],['walk_return',461,471,'game-store-day','旧游戏店'],
      ['online_game',473,479,'rental-night','','20:00'],['own_dinner',481,495,'rental-day','']],
    8: [['boundaries',405,427,'rental-day',''],['online_game',429,441,'rental-night','文文住处'],['free_afternoon',443,453,'rental-day','文文住处']],
    9: [['birthday',501,517,'food-night',''],['own_book',519,529,'bookstore-day','书店'],['call_home',531,541,'rental-day','']],
    10: [['late_host',473,489,'maolang-home-day','毛狼与飘家中','休班下午'],['friends_table',491,507,'maolang-home-day','毛狼与飘家中','休班下午'],
      ['rain_walk',509,525,'street-day','回家路上','休班下午']]
  }
};

// 仅独立引号段标记说话者；含动作、转述、多人说话的原段完整保留为旁白。
const wenwen = {3:[701,715,725,731,739,761,777,787,805,842],4:[379,400,428,434],5:[375,383,401],6:[375,383,403],7:[427],8:[349,367,399],9:[435,453],10:[407,421,429]};
const friendSpeakers = {
  3:{878:'maolang',880:'wenwen',884:'wenwen',892:'wenwen',894:'maolang',900:'maolang',906:'wenwen',908:'maolang',910:'wenwen',912:'maolang',934:'shijiang',948:'maolang',958:'wenwen',960:'maolang'},
  4:{490:'wenwen',492:'maolang'},5:{481:'wenwen',497:'shijiang',499:'wenwen'},6:{429:'maolang',431:'wenwen',441:'maolang',443:'wenwen',445:'maolang',459:'maolang',461:'wenwen'},
  7:{487:'maolang',489:'wenwen'},8:{413:'wenwen',421:'wenwen',423:'shijiang'},9:{511:'maolang'},10:{495:'shijiang',497:'maolang',499:'shijiang',513:'maolang',515:'wenwen'}
};

// 起始行、语义后缀、背景、地点、可选时段、可选明确日序。日内转场不捏造钟点。
const cuts = {
  piao: {
    3:[[699,'meeting','street-day','巷口'],[707,'jelly_shop','food-day','凉糕店靠门小桌'],[737,'puddles','street-day','积水旁小路'],
      [765,'bench','street-day','街角长凳'],[799,'river','river-day','河边小路'],[858,'crossroad','street-day','回程路口'],
      [864,'busstop','busstop-day','路口候车处'],[866,'message','rental-night','文文出租屋','晚上']],
    4:[[438,'workward','street-dusk','回网吧的路口'],[450,'parting','street-dusk','分别路口']],
    5:[[397,'soymilk','food-dusk','包子豆浆店门外','傍晚'],[453,'parting','street-dusk','小店门外','傍晚']],
    6:[[345,'closed_door','echo-closed-day','回声方向路口'],[351,'street','street-day','另一条街'],[359,'bench','park-day','树影长凳'],
      [393,'dinner','food-dusk','小饭店','饭时（钟点未注明）'],[419,'home','rental-day','文文住处','回家后']],
    7:[[413,'laundry','rental-day','文文住处','傍晚'],[415,'message','rental-night','','晚上到店前'],
      [431,'later_summary','street-day','','后续概述（饭局日序未注明）']],
    8:[[377,'street','street-day','街角']],
    9:[[497,'parting','street-day','路边','分别时']],
    10:[[439,'dinner_walk','street-day','买晚饭的路口','买晚饭时'],[465,'parting','street-day','小店外街道']]
  },
  friends: {
    3:[[888,'shop','alteration-day','改衣店']],
    4:[[486,'game_store','game-store-day','旧游戏小店'],[488,'stool','game-store-day','旧游戏店门外矮凳'],
      [494,'wall','slope-day','街道亮墙旁'],[504,'home','rental-day','文文住处','回家后']],
    5:[[467,'door','supermarket-day','日用品商店门外'],[475,'home','rental-day','文文住处'],
      [477,'call','rental-day','文文住处','晚些时候'],[495,'counter','netcafe-counter-day','网吧柜台','吃完饭后']],
    6:[[433,'eaves','eaves-day','路边屋檐'],[471,'awake','rental-day','文文住处','下午']],
    7:[[457,'after_show','street-day','店外','散场后'],[471,'message','street-day','街角'],[493,'dinner','food-dusk','','晚饭时']],
    8:[[417,'glasses','netcafe-counter-night','','晚上'],[449,'home','rental-day','文文住处']],
    9:[[525,'evening','rental-night','','晚上']],
    10:[[521,'netcafe','netcafe-counter-day','网吧门口'],[523,'homeward','street-day','回家路上']]
  }
};

function narrative(raw) {return raw.trim() && !/^(?:#|>|- \*\*|\*\*(?:选择|小选择|本线选择|回收第四章))/.test(raw);}
function clean(raw) {return raw.replace(/^\*\*如果选过[AB]：\*\*/, '');}

function buildRoute(route) {
  const spec = c.routes.find(r=>r.id===route);
  const m = {schemaVersion:1,contractVersion:c.contractVersion,contentRevision:c.contentRevision,moduleId:'routes/'+route,owner:'E06',
    scenes:{},nodes:{},imports:[],exports:{},sourceMap:[],exclusions:[],assetRequests:[]};
  const delivery = {route,readFlags:spec.readFlags,writeFlags:spec.writeFlags,chapters:[],assetMappings:[],presentationNotes:[]};
  for(const ch of spec.chapters) {
    const chapter=ch.chapter,prefix=`tc_c${pad(chapter)}_${route}_`,sp=`ts_c${pad(chapter)}_${route}_`;
    const source=c.chapters[chapter-1].sections.find(s=>s.scope===route).source;
    const lines=fs.readFileSync(path.join(root,source.file),'utf8').split('\n');
    const byName={},controlIds=[];
    function map(line,ids,kind){m.sourceMap.push({file:source.file,startLine:line,endLine:line,nodeIds:Array.isArray(ids)?ids:[ids],kind});}
    function scene(id,title,bg,location,time,day,label) {
      assert(art.assets.some(a=>a.id==='tc-bg-'+bg),'未知背景 '+bg);
      const chronology=chapter===10?{domain:'two-years-later',mode:'present',clock:time}:{domain:'story-day',mode:'present',day,clock:time};
      if(label)chronology.label=label;
      m.scenes[id]={chapter,title,bg:'tc-bg-'+bg,time,chronology,location,day:chapter===10?null:day,dayLabel:chapter===10?'两年后':`第${day}天`};
    }
    for(const [bi,b] of blocks[route][chapter].entries()) {
      const [name,start,end,bg,location,timeOverride]=b;
      const heading=lines.slice(source.startLine-1,start).reverse().find(l=>/^### (?:第\d+天·|两年后·)/.test(l));
      assert(heading,'缺少日序标题 '+route+'/'+chapter+'/'+name);
      const match=/^### 第(\d+)天·([^｜]+)｜/.exec(heading);
      let day=chapter===10?null:Number(match[1]),time=timeOverride||(chapter===10?heading.split('·')[1].split('｜')[0]:match[2]);
      let sid=sp+name;
      const title=heading.split('｜').at(-1);
      scene(sid,title,bg,location,time,day);
      const block=byName[name]={name,startLine:start,endLine:end,nodeIds:[],sceneIds:[sid]};
      for(let line=start;line<=end;line++) {
        const raw=lines[line-1];if(!narrative(raw))continue;
        assert(!/^(?:\*\*|\[|---)/.test(raw)||/^\*\*如果选过[AB]：\*\*/.test(raw),'未处理控制 '+source.file+':'+line);
        const cut=(cuts[route][chapter]||[]).find(x=>x[0]===line);
        if(cut) {
          const [,suffix,newBg,newPlace,newTime,newDay]=cut;time=newTime||time;day=newDay??day;sid=sp+name+'_'+suffix;
          scene(sid,title,newBg,newPlace,time,day, suffix==='later_summary'?'日序锚定第39天章段；几天后的饭局仅作叙述，不推定具体哪一天':undefined);
          block.sceneIds.push(sid);
        }
        // 第41天由正文明确给出；拆分同一来源段，拼接后必须与原文逐字一致。
        const parts=route==='piao'&&chapter===7&&line===419?clean(raw).split(/(?=到了第四十一天)/):[clean(raw)];
        const ids=[];
        for(const [partIndex,text] of parts.entries()) {
          if(partIndex===1){day=41;time='睡醒后（钟点未注明）';sid=sp+name+'_day41';scene(sid,'约好的下一次饭局','food-day','',time,day);block.sceneIds.push(sid);}
          const entryIsGate=chapter===10&&route==='piao'||chapter===7&&route==='friends';
          const id=bi===0&&block.nodeIds.length===0&&!entryIsGate?ch.entry:prefix+name+'_'+String(block.nodeIds.length+1).padStart(3,'0');
          const direct=/^“[^”]*”$/.test(text);
          const speaker=direct?(route==='piao'?(wenwen[chapter].includes(line)?'wenwen':'piao'):friendSpeakers[chapter][line]):'narrator';
          assert(speaker,'待核对说话者 '+source.file+':'+line);
          // 演出绑定归 E09；每段显式清除人物，避免把语音/照片或上一场角色留在现场。
          m.nodes[id]={id,type:'line',scene:sid,speaker,character:null,text,next:null};
          block.nodeIds.push(id);ids.push(id);
        }
        map(line,ids,/^“[^”]*”$/.test(clean(raw))?'dialogue':'narration');
      }
      assert(block.nodeIds.length,'空正文块 '+name);
      block.nodeIds.slice(0,-1).forEach((id,i)=>{m.nodes[id].next=block.nodeIds[i+1];});
      if(lines[start-1].startsWith('#'))map(start,block.nodeIds[0],'scene-title');
    }
    const first=name=>byName[name].nodeIds[0];
    const tail=(name,target)=>{m.nodes[byName[name].nodeIds.at(-1)].next=target;};
    function gate(name,flag,targets,anchors,publicEntry=false) {
      const id=publicEntry?ch.entry:prefix+name;
      const q=c.choices.find(q=>q.flag===flag);
      m.nodes[id]={id,type:'gate',scene:m.nodes[first(targets[0])].scene,cases:q.options.map((o,i)=>({flag,value:o.value,next:first(targets[i])})),default:null,exhaustive:true};
      anchors.forEach(line=>map(line,id,'control'));controlIds.push(id);return id;
    }
    function choice(flag,targets,before) {
      const q=c.choices.find(q=>q.route===route&&q.chapter===chapter&&q.flag===flag);assert(q);
      m.nodes[q.id]={id:q.id,type:'choice',scene:m.nodes[byName[before].nodeIds.at(-1)].scene,character:null,text:'',flag,
        choices:q.options.map((o,i)=>({label:o.label,value:o.value,next:first(targets[i]),...(o.requires.length?{requires:o.requires}:{})}))};
      [q.prompt.line,...q.options.map(o=>o.source.line)].forEach(line=>map(line,q.id,'choice'));
      controlIds.push(q.id);tail(before,q.id);return q.id;
    }
    function ending(name,relationship) {
      const e=c.endings.find(e=>e.route===route&&e.relationship===relationship);assert(e);
      m.nodes[e.id]={id:e.id,type:'end',scene:m.nodes[byName[name].nodeIds.at(-1)].scene,character:null,title:e.source.raw.split('｜').at(-1),text:'',endingId:e.id};
      tail(name,e.id);map(e.source.line,e.id,'control');m.exports[e.id]=e.id;controlIds.push(e.id);
    }
    if(route==='piao') {
      if(chapter===3){tail('sweet_jelly',first('leave_blank'));tail('leave_blank',first('say_clearly'));choice('piaoRelationship',['dating','friends'],'say_clearly');}
      else {
        const anchors=c.piaoRelationshipBlocks.filter(x=>x.chapter===chapter).map(x=>x.source.line);
        const rel=gate('relationship_gate','piaoRelationship',['dating','friends'],anchors,chapter===10);
        if(chapter===4){choice('piaoOuting',['paperboat','signs'],'two_plans');tail('paperboat',rel);tail('signs',rel);map(420,rel,'scene-title');}
        else if(chapter===7){const outing=gate('outing_gate','piaoOuting',['paperboat_return','signs_return'],[387,389,391]);tail('half_hour',outing);tail('paperboat_return',first('bag_ready'));tail('signs_return',first('bag_ready'));tail('bag_ready',rel);map(395,rel,'scene-title');}
        else if(chapter!==10){tail(blocks[route][chapter][0][0],rel);}
      }
      if(chapter===10){ending('dating','dating');ending('friends','friends');}
      else {tail('dating',ch.returnTo);tail('friends',ch.returnTo);}
    } else {
      if(chapter===4){choice('friendsOuting',['show','walk'],'own_plan');tail('show',first('crossroad'));tail('walk',first('crossroad'));tail('crossroad',ch.returnTo);}
      else if(chapter===7){gate('outing_gate','friendsOuting',['show_return','walk_return'],[443,447,461],true);tail('show_return',first('online_game'));tail('walk_return',first('online_game'));tail('online_game',first('own_dinner'));tail('own_dinner',ch.returnTo);}
      else {const names=Object.keys(byName);names.slice(0,-1).forEach((name,i)=>tail(name,first(names[i+1])));if(chapter===10)ending(names.at(-1),null);else tail(names.at(-1),ch.returnTo);}
    }
    m.exports[ch.entry]=ch.entry;if(ch.returnTo)m.imports.push(ch.returnTo);
    for(let line=source.startLine;line<=source.endLine;line++)if(lines[line-1].trim()&&!m.sourceMap.some(r=>r.file===source.file&&r.startLine===line)) {
      const raw=lines[line-1];assert(raw.startsWith('#')||raw==='**回收第四章选择，只读相应一段。**','未覆盖来源 '+source.file+':'+line);
      m.exclusions.push({file:source.file,startLine:line,endLine:line,reason:raw.startsWith('#')?'heading-only':'reading-rule'});
    }
    const artBlocks=art.chapters.find(ch=>ch.chapter===chapter).sections.filter(s=>s.route===route);
    for(const a of artBlocks){
      const rows=m.sourceMap.filter(r=>r.file===source.file&&r.startLine>=a.sourceLineStart&&r.startLine<=a.sourceLineEnd);
      const nodeIds=[...new Set(rows.flatMap(r=>r.nodeIds))],sceneIds=[...new Set(nodeIds.map(id=>m.nodes[id].scene))];
      const cgIds=art.assets.filter(x=>x.kind==='cg'&&x.cueIds?.includes(a.id)).map(x=>x.id);
      const assetIds=[...new Set([...a.scenes.flatMap(s=>s.assetIds),...sceneIds.map(id=>m.scenes[id].bg),...(a.characterAssetIds||[]),...(a.lookAssetIds||[]),...cgIds])];
      assert(nodeIds.length,'A01场段未映射 '+a.id);
      delivery.assetMappings.push({a01SectionId:a.id,file:source.file,startLine:a.sourceLineStart,endLine:a.sourceLineEnd,nodeIds,sceneIds,assetIds,bindingStatus:'requested-not-adopted',conditions:a.conditions||[],conditionAnchors:a.contractConditionAnchors||[],cgCandidates:a.cgCandidates||[],presentationNotes:a.notes||[]});
    }
    const ids=[...new Set(delivery.assetMappings.filter(a=>a.file===source.file).flatMap(a=>a.assetIds))].sort();
    m.assetRequests.push({id:'e01-art-ch'+pad(chapter),a01Ids:ids});
    delivery.chapters.push({chapter,entry:ch.entry,returnTo:ch.returnTo,endings:controlIds.filter(id=>m.nodes[id].type==='end'),source,blocks:Object.values(byName),controlIds});
  }
  delivery.presentationNotes = route==='piao' ? [
    '第三章唯一写入关系，第四至第十章只读；第七章纸船/旧店名回收与关系分流独立。',
    '第七章第419行按原句拆出明确第41天；第431—439行“几天以后”的饭局作为第39天章段的后续概述，chronology.label标明日序未给出，不推定新日期。',
    '第九章及第十章恋人桌边未点名地点，location留空；茶店背景仅沿用A01建议，待E09按内容核定。',
    '两种公共后日谈完全由E03拥有；本模块不复制，不创建婚宴，也不给朋友结局继续使用礼裙/婚宴造型。'
  ] : [
    '朋友线没有关系选择；第四章两种经历在第七章互斥回收，第十章只有独立终结。',
    '电话、群消息、线上游戏和照片不等于角色实体到场；第18天叶岚缺席，第40天在线局师匠与叶岚均缺席。',
    '第九章生日聚餐、母亲电话等未点名地点留空；A01建议背景不等于已确认场所。',
    '两年后文文仍在网吧轮班；末段仅路过网吧，今晚不是他的班，不转回工作场。'
  ];
  return {module:m,delivery};
}

function build(){validate(c);assert.equal(art.contractVersion,c.contractVersion);assert.equal(art.contentRevision,c.contentRevision);return ['piao','friends'].map(buildRoute);}
function main(){
  const results=build();fs.mkdirSync(path.join(base,'routes'),{recursive:true});
  for(const r of results)fs.writeFileSync(path.join(base,r.module.moduleId+'.json'),json(r.module));
  fs.writeFileSync(path.join(__dirname,'delivery.json'),json({contractVersion:c.contractVersion,contentRevision:c.contentRevision,scope:'E06真实路线源与来源/资产请求映射；未正式接入',formalIntegration:false,routes:results.map(r=>r.delivery)}));
  console.log(json(results.map(r=>({route:r.delivery.route,nodes:Object.keys(r.module.nodes).length,scenes:Object.keys(r.module.scenes).length,paragraphs:r.module.sourceMap.filter(s=>['dialogue','narration'].includes(s.kind)).length}))));
}
if(require.main===module)main();
module.exports={build};
