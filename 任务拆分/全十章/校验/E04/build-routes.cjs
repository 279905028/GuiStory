'use strict';

// E04 专用正文转录器。只写本任务两份 JSON 与自身交付索引，不修改正文或全局构建器。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../../../..');
const base = path.join(root, '任务拆分/全十章');
const contract = require(path.join(base, 'contract.json'));
const art = require(path.join(base, '美术清单.json'));
const { validate } = require(path.join(base, 'verify-contract.cjs'));
const json = x => JSON.stringify(x, null, 2) + '\n';
const pad = n => String(n).padStart(2, '0');

// 独立引号段已逐段核对：这里只列文文，其余独立对白属于本路线角色。
// 带叙述、引述或说话动作的混合段整段保留为旁白，不删除“我说／她说”等原文。
const wenwen = {
  xiaoman: {
    3: [47,51,61,65,69,81,87,91,109,117,125,131,135,143,155,177,187,191,201,209],
    4: [41,55,103,117,129], 5: [59,67,83,93,105,113,125],
    6: [63,73,77,83,91,101,105,117], 7: [35,47,59,71,75,89,93,117],
    8: [59,65,73,77,101,107,115], 9: [43,51,61,81,93,101,115,125,131],
    10: [77,91,129]
  },
  zhouzhi: {
    3: [229,247,255,275,281,303,321,339,345], 4: [143,151,185],
    5: [195,199,211], 6: [143,147,163,173,183], 7: [137,151,155,173,179,195],
    8: [135,147,157,163], 9: [177,191,195,201,217,241], 10: [179,183,215]
  }
};

// 块名与段内序号构成稳定 ID；来源行号只用于锁定基线与人工核对，不用作节点 ID。
const names = {
  xiaoman: {
    3: ['salon_visit','present_day','old_sketch'], 4: ['outing','basketball','books','before_bus'],
    5: ['parcel','new_coat'], 6: ['rest_day'], 7: ['her_weekend','basketball_return','books_return','crossroad'],
    8: ['voice_call','badminton'], 9: ['relationship','dating','friends'], 10: ['dating','friends']
  },
  zhouzhi: {
    3: ['umbrella','bookstore','invitation'], 4: ['outing','river','cinema','before_work'],
    5: ['unexpected_company','two_seats'], 6: ['after_closing'],
    7: ['her_plans','river_return','cinema_return','crossroad'], 8: ['dinner_budget'],
    9: ['relationship','dating','friends'], 10: ['dating','friends']
  }
};

// 只在正文明确转场／转日处拆场。未给出钟点时保留“下午／傍晚／未注明”，不编造时间。
// 元组：起始来源行、场景后缀、A01 背景 ID、实际地点、可选时间、可选日序、是否面对面。
const cuts = {
  xiaoman: {
    3: [
      [113,'street','tc-bg-street-day','街道与服装店橱窗'],
      [159,'busstop','tc-bg-busstop-dusk','拐角公交站','傍晚前'],
      [197,'convenience','tc-bg-convenience-day','便利店外座椅']
    ],
    4: [
      [37,'crossroad','tc-bg-street-day','两条街的岔路口'],
      [79,'arcade_exit','tc-bg-street-day','游戏厅外路口'],
      [125,'busstop','tc-bg-busstop-dusk','公交站','傍晚前']
    ],
    5: [],
    6: [[61,'river','tc-bg-river-day','河边避雨台阶'],[113,'dinner','tc-bg-food-dusk','小面馆','傍晚']],
    7: [[45,'street','tc-bg-street-dusk','街口','傍晚',null,false],[53,'meeting','tc-bg-street-dusk','街口','傍晚']],
    8: [],
    9: [[137,'busstop','tc-bg-busstop-day','公交站'],[139,'day82','tc-bg-badminton-day','球馆','未注明',82],
      [141,'day82_crossroad','tc-bg-street-day','球馆外路口','散场后',82]],
    10: [[121,'noodles','tc-bg-food-day','面馆'],[139,'street','tc-bg-street-day','面馆外街道'],
      [145,'homeward','tc-bg-street-day','回家路上',null,null,false]]
  },
  zhouzhi: {
    3: [[225,'meeting','tc-bg-echo-day','回声门外街边'],[235,'umbrella_shop','tc-bg-convenience-day','卖伞小店门口'],
      [243,'potstickers','tc-bg-stall-day','锅贴摊外'],[259,'street','tc-bg-street-dusk','街口','傍晚前'],
      [297,'drinks','tc-bg-mall-day','商场热饮座位','傍晚']],
    4: [[189,'mall','tc-bg-mall-day','商场电梯与一楼','散场后'],[205,'crossroad','tc-bg-street-dusk','人行路口','傍晚']],
    5: [[181,'busstop','tc-bg-busstop-dusk','车站','傍晚']],
    6: [[137,'closed_echo','tc-bg-echo-closed-day','通向回声的路口'],[151,'supermarket','tc-bg-supermarket-day','超市日用品区'],
      [159,'soymilk','tc-bg-street-day','超市外座位'],[177,'accessories','tc-bg-clothing-day','饰品店门口']],
    7: [],
    8: [[161,'simple_dinner','tc-bg-food-dusk','小锅饭店','傍晚'],[169,'soymilk','tc-bg-street-dusk','小锅饭店外街边','傍晚']],
    9: [[199,'eaves','tc-bg-eaves-day','河边小馆外屋檐','饭后'],[233,'day88','tc-bg-food-dusk','朋友聚餐的小店','未注明',88],
      [237,'day88_crossroad','tc-bg-street-dusk','聚餐后的路口','散场后',88]],
    10: [[187,'homeward','tc-bg-street-dusk','去周栀住处的路上','饭后'],[189,'eaves','tc-bg-eaves-day','周栀住处外屋檐','饭后'],
      [225,'street','tc-bg-street-dusk','夜宵摊外街口','夜间',null,false],
      [229,'back_to_stall','tc-bg-stall-night','夜宵摊','夜间']]
  }
};

const defaults = {
  'xiaoman/4/outing': { location:'文文出租屋至约定路口', present:false },
  'xiaoman/4/before_bus': {time:'17:30'},
  'xiaoman/7/her_weekend': {present:false},
  'xiaoman/7/basketball_return': {time:'傍晚'},
  'xiaoman/7/books_return': {time:'傍晚'},
  'xiaoman/7/crossroad': {time:'19:30'},
  'xiaoman/8/voice_call': {present:false},
  'xiaoman/10/dating': {time:'下午'},
  'xiaoman/10/friends': {time:'下午'},
  'zhouzhi/3/umbrella': {bg:'tc-bg-rental-day',location:'文文出租屋',present:false},
  'zhouzhi/3/bookstore': {location:'商场书店靠窗阅读座'},
  'zhouzhi/4/before_work': {time:'傍晚'},
  'zhouzhi/7/crossroad': {time:'傍晚'},
  'zhouzhi/8/dinner_budget': {location:'漂亮饭店门口'},
  'zhouzhi/10/dating': {time:'傍晚'},
  'zhouzhi/10/friends': {time:'夜间'}
};

function buildRoute(route) {
  const spec = contract.routes.find(r => r.id === route);
  const m = {schemaVersion:1,contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,
    moduleId:'routes/'+route,owner:'E04',scenes:{},nodes:{},imports:[],exports:{},sourceMap:[],exclusions:[],assetRequests:[]};
  const delivery = {route,readFlags:spec.readFlags,writeFlags:spec.writeFlags,chapters:[],assetMappings:[]};
  for (const ch of spec.chapters) {
    const chapter = ch.chapter, prefix = `tc_c${pad(chapter)}_${route}_`, scenePrefix = `ts_c${pad(chapter)}_${route}_`;
    const source = contract.chapters[chapter-1].sections.find(s => s.scope === route).source;
    const lines = fs.readFileSync(path.join(root,source.file),'utf8').split('\n');
    const artBlocks = art.chapters.find(c => c.chapter === chapter).sections.filter(s => s.route === route);
    assert.equal(artBlocks.length, names[route][chapter].length);
    const blocks = [];
    const usedSpeakerLines = new Set();
    function map(line,nodeId,kind) {m.sourceMap.push({file:source.file,startLine:line,endLine:line,nodeIds:[nodeId],kind});}
    function scene(id,title,bg,time,day,location) {
      assert(art.assets.some(a => a.id === bg), '未登记 A01 背景 '+bg);
      m.scenes[id] = {chapter,title,bg,time,chronology:chapter===10?{domain:'two-years-later',mode:'present',clock:time}:
        {domain:'story-day',mode:'present',day,clock:time},location,day:chapter===10?null:day,dayLabel:chapter===10?'两年后':`第${day}天`};
    }
    for (const [bi,a] of artBlocks.entries()) {
      const name = names[route][chapter][bi];
      const heading = lines.slice(source.startLine-1,a.sourceLineStart).reverse().find(l=>l.startsWith('### '));
      const match = /^### 第(\d+)天·([^｜]+)｜(.+)$/.exec(heading);
      assert(chapter===10 || match, '日序标题缺失');
      let day = chapter===10?null:Number(match[1]);
      let time = chapter===10?heading.split('·')[1].split('｜')[0]:match[2];
      const options = defaults[`${route}/${chapter}/${name}`] || {};
      time = options.time || time;
      let present = options.present !== false;
      let sceneId = scenePrefix+name;
      scene(sceneId,a.heading.split('｜').at(-1),options.bg||a.scenes[0].assetIds[0],time,day,options.location||a.scenes[0].label);
      const block = {name,artId:a.id,headingLine:a.sourceLineStart,nodeIds:[],source:{file:source.file,startLine:a.sourceLineStart,endLine:a.sourceLineEnd},sceneIds:[sceneId]};
      for (let n=a.sourceLineStart;n<=a.sourceLineEnd;n++) {
        const raw = lines[n-1];
        if (!raw.trim() || raw.startsWith('#')) continue;
        assert(!/^(?:>|---|\[)/.test(raw),'待人工处理的正文控制标记 '+source.file+':'+n);
        const cut = (cuts[route][chapter] || []).find(x=>x[0]===n);
        if (cut) {
          const [,suffix,bg,location,newTime,newDay,newPresence]=cut;
          if (newTime) time=newTime;
          if (newDay!=null) day=newDay;
          present=newPresence!==false;
          sceneId=scenePrefix+name+'_'+suffix;
          scene(sceneId,a.heading.split('｜').at(-1),bg,time,day,location);
          block.sceneIds.push(sceneId);
        }
        const id = bi===0 && block.nodeIds.length===0 && chapter!==10?ch.entry:prefix+name+'_'+String(block.nodeIds.length+1).padStart(3,'0');
        const dialogue = /^“[^”]*”$/.test(raw);
        const isWenwen = wenwen[route][chapter].includes(n);
        if (isWenwen) {assert(dialogue,'说话者登记不是独立对白');usedSpeakerLines.add(n);}
        const speaker = dialogue?(isWenwen?'wenwen':route):'narrator';
        m.nodes[id]={id,type:'line',scene:sceneId,speaker,character:present?route:null,text:raw,next:null};
        map(n,id,dialogue?'dialogue':'narration');
        block.nodeIds.push(id);
      }
      assert(block.nodeIds.length,'禁止空正文块');
      map(a.sourceLineStart,block.nodeIds[0],'scene-title');
      blocks.push(block);
      // A01 的通用衣装列表跨段复用了围裙；私人会面按原文去掉该请求，工作场仍保留。
      const lookAssetIds=(a.lookAssetIds||[]).filter(id=>!(id==='tc-look-xiaoman-work-apron'&&chapter===3&&name!=='salon_visit'));
      delivery.assetMappings.push({a01SectionId:a.id,...block.source,nodeIds:block.nodeIds,sceneIds:block.sceneIds,
        assetIds:[...new Set([...a.scenes.flatMap(s=>s.assetIds),...block.sceneIds.map(id=>m.scenes[id].bg),...(a.characterAssetIds||[]),...lookAssetIds])],
        bindingStatus:'requested-not-adopted',presentationNotes:a.notes||[]});
    }
    assert.equal(usedSpeakerLines.size,wenwen[route][chapter].length,'说话者登记漏用');
    const first = i => blocks[i].nodeIds[0];
    const tail = (i,next) => {m.nodes[blocks[i].nodeIds.at(-1)].next=next;};
    for (const b of blocks) b.nodeIds.slice(0,-1).forEach((id,i)=>{m.nodes[id].next=b.nodeIds[i+1];});
    const controlIds=[];
    if ([4,9].includes(chapter)) {
      const q=contract.choices.find(q=>q.route===route&&q.chapter===chapter);
      m.nodes[q.id]={id:q.id,type:'choice',scene:m.nodes[blocks[0].nodeIds.at(-1)].scene,character:route,text:'',flag:q.flag,
        choices:q.options.map((o,i)=>({label:o.label,value:o.value,next:first(i+1),...(o.requires.length?{requires:o.requires}:{})}))};
      q.options.forEach(o=>map(o.source.line,q.id,'choice'));controlIds.push(q.id);
      tail(0,q.id);
      if(chapter===4){tail(1,first(3));tail(2,first(3));tail(3,ch.returnTo);}
      else {tail(1,ch.returnTo);tail(2,ch.returnTo);}
    } else if(chapter===7 || chapter===10) {
      const flag=route+(chapter===7?'Outing':'Relationship');
      const q=contract.choices.find(q=>q.flag===flag);
      const id=chapter===10?ch.entry:prefix+'outing_gate';
      m.nodes[id]={id,type:'gate',scene:m.nodes[first(0)].scene,cases:q.options.map((o,i)=>({flag,value:o.value,next:first(chapter===10?i:i+1)})),default:null,exhaustive:true};
      const targetBlocks=chapter===10?[0,1]:[1,2];
      targetBlocks.forEach(i=>map(blocks[i].headingLine,id,'control'));controlIds.push(id);
      if(chapter===7){tail(0,id);tail(1,first(3));tail(2,first(3));tail(3,ch.returnTo);}
      else q.options.forEach((o,i)=>{
        const ending=contract.endings.find(e=>e.route===route&&e.relationship===o.value);
        const title=ending.source.raw.split('结局：')[1];
        m.nodes[ending.id]={id:ending.id,type:'end',scene:m.nodes[blocks[i].nodeIds.at(-1)].scene,character:route,title,text:'',endingId:ending.id};
        map(ending.source.line,ending.id,'control');tail(i,ending.id);m.exports[ending.id]=ending.id;controlIds.push(ending.id);
      });
    } else blocks.forEach((b,i)=>tail(i,i+1<blocks.length?first(i+1):ch.returnTo));
    m.exports[ch.entry]=ch.entry;
    if(ch.returnTo)m.imports.push(ch.returnTo);
    for(let n=source.startLine;n<=source.endLine;n++)if(lines[n-1].trim()&&!m.sourceMap.some(r=>r.file===source.file&&r.startLine===n)){
      assert(lines[n-1].startsWith('#'),'未覆盖正文 '+source.file+':'+n);
      m.exclusions.push({file:source.file,startLine:n,endLine:n,reason:'heading-only'});
    }
    const artIds=[...new Set(delivery.assetMappings.filter(x=>x.file===source.file).flatMap(x=>x.assetIds))].sort();
    m.assetRequests.push({id:`e01-art-ch${pad(chapter)}`,a01Ids:artIds});
    delivery.chapters.push({chapter,entry:ch.entry,returnTo:ch.returnTo,endings:controlIds.filter(id=>id.includes('_end_')),source,blocks,controlIds});
  }
  return {module:m,delivery};
}

function build() {
  validate(contract);
  assert.equal(art.contractVersion,contract.contractVersion);assert.equal(art.contentRevision,contract.contentRevision);
  return ['xiaoman','zhouzhi'].map(buildRoute);
}
function main() {
  const results=build();
  fs.mkdirSync(path.join(base,'routes'),{recursive:true});
  for(const r of results) fs.writeFileSync(path.join(base,r.module.moduleId+'.json'),json(r.module));
  fs.writeFileSync(path.join(__dirname,'delivery.json'),json({contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,
    scope:'E04 路线源数据与来源／资产请求映射；未接入正式游戏',routes:results.map(r=>r.delivery)}));
  console.log(json(results.map(r=>({route:r.delivery.route,nodes:Object.keys(r.module.nodes).length,scenes:Object.keys(r.module.scenes).length}))));
}
if(require.main===module)main();
module.exports={build};
