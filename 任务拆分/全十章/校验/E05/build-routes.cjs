'use strict';

// E05 专用转录器：只写孟遥、叶岚源模块与本任务索引，不改正文、共通或正式构建器。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../../../..');
const base = path.join(root, '任务拆分/全十章');
const contract = require(path.join(base, 'contract.json'));
const art = require(path.join(base, '美术清单.json'));
const { validate } = require(path.join(base, 'verify-contract.cjs'));
const json = value => JSON.stringify(value, null, 2) + '\n';
const pad = n => String(n).padStart(2, '0');
const routes = ['mengyao', 'yelan'];

// 仅纯引号段分配说话者；含动作、归属或多人引述的段落原样保留旁白。
const wenwen = {
  mengyao: {
    3:[367,371,375,383,389,407,415,421,427,431,443,453,457,461,477,509,513,517,525],
    4:[219,235,241,247,255,279,295], 5:[225,245,251,259,267,279,289],
    6:[203,217,237,245,253], 7:[221,225,239,249,253,273,285],
    8:[191,201,205,211,215,223,233,237,241,261], 9:[257,275,289,299,315],
    10:[241,249,253,265,269,281,291,303,315]
  },
  yelan: {
    3:[565,573,583,587,597,613,623,633,661,677,683], 4:[311,315,365],
    5:[317,331,343,357], 6:[273,279,289,313,321,325,335],
    7:[301,327,353,373], 8:[273,289,305,319,329], 9:[359,363,373,383,405],
    10:[331,347,353,361,371,389]
  }
};
const otherSpeakers = {'mengyao/3/445':'shijiang'};
const names = {
  mengyao:{3:['flatbread','coop_game','new_meeting'],4:['outing','books','arcade','busstop'],
    5:['hurt_joke','listen_again'],6:['after_dinner','singing'],7:['her_friends','books_return','arcade_return','crossroad'],
    8:['rest_together'],9:['relationship','dating','friends'],10:['dating','friends']},
  yelan:{3:['second_meeting','voice_game','quiet_park'],4:['outing','kite','market','outing_end'],
    5:['hurt_comparison','both_real'],6:['after_dinner','tabletennis'],7:['her_friends','kite_return','market_return','dinner'],
    8:['meet_without_game'],9:['relationship','dating','friends'],10:['dating','friends']}
};

// 只在原文明确转场、见面、离场或换日时切场。未注明钟点则保留自然时间。
// [来源行, 稳定后缀, A01背景ID, 地点, 可选时间, 可选日序, 可选在场状态, 可选日序说明]
const cuts = {
  mengyao:{
    3:[[369,'bakery','tc-bg-bridge-day','桥头烧饼店门口'],[401,'steps','tc-bg-bridge-day','桥边干燥台阶'],
      [447,'computers','tc-bg-netcafe-pc-day','网吧相邻机位'],[481,'checkout','tc-bg-netcafe-counter-night','网吧柜台','19:30'],
      [485,'outside','tc-bg-street-dusk','网吧门外','19:30后'],[529,'crossroad','tc-bg-street-day','面馆楼梯至分路口']],
    4:[[243,'tea','tc-bg-tea-day','旧书摊旁茶店'],[253,'return','tc-bg-street-day','回程街道'],
      [283,'arcade_exit','tc-bg-street-day','街机厅门口'],[299,'leaving','tc-bg-busstop-day','公交站','天还亮着',null,false]],
    5:[[221,'porridge','tc-bg-food-day','卖粥小店'],[261,'crossroad','tc-bg-street-dusk','饭后街口','饭后'],
      [271,'tofu','tc-bg-food-day','豆花店门口及遮阳棚座']],
    6:[[209,'dawn_photo','tc-bg-netcafe-counter-night','网吧柜台','临近天亮',31,false,'夜班概述后转入第31天手机照片；不再演出饭局'],
      [251,'rain_walk','tc-bg-street-day','练歌房外雨中街道','离开练歌房后']],
    7:[],
    8:[[195,'tea','tc-bg-tea-day','可以借桌游的茶店'],[251,'checkout','tc-bg-tea-day','茶店结账处与门口','结账后']],
    9:[[253,'bakery','tc-bg-bridge-day','桥头烧饼店'],[259,'steps','tc-bg-bridge-day','桥边台阶'],
      [293,'walk','tc-bg-bridge-day','桥下步道'],
      [325,'day81','tc-bg-rental-day','群聊／私信；后续朋友约饭以旁白概述','未注明',81,false,'第81天群聊；随后约饭的日期与地点未注明，不新增精确日期']],
    10:[[245,'new_shop','tc-bg-tea-day','另一家可借双人桌游的小店'],[309,'outside','tc-bg-street-dusk','聚餐后街口','散场后'],
      [319,'parting','tc-bg-street-dusk','分路后的街道','散场后',null,false],
      [321,'bakery','tc-bg-bridge-day','烧饼店','散场后',null,false]]
  },
  yelan:{
    3:[[547,'meeting','tc-bg-street-dusk','街道路口'],[561,'fruit','tc-bg-stall-day','街边水果摊及长椅'],
      [593,'crossroad','tc-bg-street-dusk','街道岔路'],[627,'logoff','tc-bg-netcafe-pc-night','网吧机位','21:00前',null,false],
      [671,'bench','tc-bg-park-day','公园长椅'],[687,'park_exit','tc-bg-park-day','公园积水路段至门口']],
    4:[],
    5:[[351,'icecream','tc-bg-convenience-day','相邻冰棒冰柜与店门口','饭后'],[361,'street','tc-bg-street-dusk','街道路口','饭后']],
    6:[[319,'water','tc-bg-convenience-day','球馆外买水柜台','离馆后'],[329,'busstop','tc-bg-busstop-day','公交站','离馆后']],
    7:[[309,'day40','tc-bg-rental-day','文文出租屋','睡醒后的下午',40,false],
      [347,'market_meeting','tc-bg-secondhand-day','旧货市场碰面处'],[361,'market_walk','tc-bg-secondhand-day','旧杯子摊']],
    8:[[277,'dinner','tc-bg-food-day','小饭店'],[307,'supermarket','tc-bg-supermarket-day','附近小超市','饭后'],
      [309,'outside','tc-bg-street-day','小超市门口','饭后'],[313,'bench','tc-bg-street-day','街边长椅','饭后'],
      [331,'parting','tc-bg-street-dusk','各自回去的路口','天还没黑',null,false]],
    9:[[339,'meeting','tc-bg-street-day','约定街道'],[343,'eaves','tc-bg-eaves-day','新开小店外屋檐'],
      [377,'street','tc-bg-street-day','雨小后的街道','雨小后'],[379,'busstop','tc-bg-busstop-day','公交站','雨小后'],
      [389,'leaving','tc-bg-busstop-day','公交站','上车后',null,false],
      [407,'parting','tc-bg-eaves-day','小店外屋檐','分别时',null,false],
      [409,'day86','tc-bg-rental-night','文文休息处的游戏与消息','未注明',86,false]],
    10:[[329,'meeting','tc-bg-supermarket-day','超市门口'],[335,'shopping','tc-bg-supermarket-day','超市货架与米袋区'],
      [357,'bench','tc-bg-street-day','购物后的长椅','购物后'],[365,'lights','tc-bg-street-dusk','长椅与回程路','路灯刚亮'],
      [383,'rest_day','tc-bg-tabletennis-day','乒乓球馆与场边座椅','首个休息日的下午',null,true,'两年后另一天的休息日下午；不沿用当班19:20']]
  }
};
const defaults = {
  'mengyao/3/flatbread':{bg:'tc-bg-rental-day',location:'文文出租屋',present:false},
  'mengyao/4/busstop':{time:'天还亮着'},
  'mengyao/5/hurt_joke':{present:false},'mengyao/5/listen_again':{bg:'tc-bg-rental-day',location:'文文出租屋／手机消息',present:false},
  'mengyao/6/after_dinner':{mode:'flashback',titleSuffix:'（第30天饭后补叙）'},
  'mengyao/7/her_friends':{location:'饭店门口'},'mengyao/8/rest_together':{present:false},
  'mengyao/9/relationship':{present:false},'mengyao/9/dating':{location:'桥边台阶'},'mengyao/9/friends':{location:'桥边台阶'},
  'mengyao/10/dating':{location:'约定茶店门口'},
  'yelan/3/second_meeting':{bg:'tc-bg-rental-day',location:'文文出租屋／手机消息',present:false},
  'yelan/3/voice_game':{present:false},'yelan/4/outing_end':{time:'下午结束时'},
  'yelan/5/hurt_comparison':{present:false},
  'yelan/6/after_dinner':{bg:'tc-bg-street-dusk',location:'同顿饭散席后的街口',mode:'flashback',titleSuffix:'（第30天饭后补叙）'},
  'yelan/7/her_friends':{present:false},'yelan/7/market_return':{present:false},'yelan/7/dinner':{time:'晚饭时'},
  'yelan/8/meet_without_game':{present:false},'yelan/9/relationship':{bg:'tc-bg-street-day',location:'约定街道',present:false},
  'yelan/10/dating':{present:false,location:'赴约前的手机消息'},'yelan/10/friends':{present:false}
};

function buildRoute(route) {
  const spec = contract.routes.find(r => r.id === route);
  const m = {schemaVersion:1,contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,
    moduleId:'routes/'+route,owner:'E05',scenes:{},nodes:{},imports:[],exports:{},sourceMap:[],exclusions:[],assetRequests:[]};
  const delivery = {route,readFlags:spec.readFlags,writeFlags:spec.writeFlags,chapters:[],assetMappings:[],transformations:[]};
  for (const ch of spec.chapters) {
    const chapter=ch.chapter, prefix=`tc_c${pad(chapter)}_${route}_`, scenePrefix=`ts_c${pad(chapter)}_${route}_`;
    const source=contract.chapters[chapter-1].sections.find(s=>s.scope===route).source;
    const lines=fs.readFileSync(path.join(root,source.file),'utf8').split('\n');
    const artBlocks=art.chapters.find(c=>c.chapter===chapter).sections.filter(s=>s.route===route);
    assert.equal(artBlocks.length,names[route][chapter].length);
    const blocks=[], byLine=new Map(), controlIds=[], usedSpeakerLines=new Set();
    function map(line,ids,kind){m.sourceMap.push({file:source.file,startLine:line,endLine:line,nodeIds:Array.isArray(ids)?ids:[ids],kind});}
    function scene(id,title,bg,time,day,location,mode='present',label){
      assert(art.assets.some(a=>a.id===bg),'未知 A01 背景 '+bg);
      const chronology=chapter===10?{domain:'two-years-later',mode,clock:time}:{domain:'story-day',mode,day,clock:time};
      if(label)chronology.label=label;
      m.scenes[id]={chapter,title,bg,time,chronology,location,day:chapter===10?null:day,dayLabel:chapter===10?'两年后':`第${day}天`};
    }
    for(const [bi,a] of artBlocks.entries()){
      const name=names[route][chapter][bi],opts=defaults[`${route}/${chapter}/${name}`]||{};
      const heading=lines.slice(source.startLine-1,a.sourceLineStart).reverse().find(l=>/^### (第\d+天·|两年后·)/.test(l));
      const match=/^### 第(\d+)天·([^｜]+)｜/.exec(heading);
      assert(chapter===10||match,'日序标题缺失');
      let day=chapter===10?null:Number(match[1]),time=opts.time||(chapter===10?heading.split('·')[1].split('｜')[0]:match[2]);
      let present=opts.present!==false,sceneId=scenePrefix+name;
      const title=a.heading.split('｜').at(-1).replace(/^仅(?:交往|朋友)：/,'');
      scene(sceneId,title+(opts.titleSuffix||''),opts.bg||a.scenes[0].assetIds[0],time,day,opts.location||a.scenes[0].label,opts.mode);
      const block={name,a01SectionId:a.id,heading:a.heading,headingLine:a.sourceLineStart,nodeIds:[],sceneIds:[sceneId],
        source:{file:source.file,startLine:a.sourceLineStart,endLine:a.sourceLineEnd}};
      let sequence=0;
      for(let line=a.sourceLineStart;line<=a.sourceLineEnd;line++){
        const raw=lines[line-1];
        if(!raw.trim()||raw.startsWith('#')||raw.startsWith('>')||raw.startsWith('**选择：'))continue;
        const cut=(cuts[route][chapter]||[]).find(x=>x[0]===line);
        if(cut){const [,suffix,bg,location,newTime,newDay,newPresence,label]=cut;
          if(newTime)time=newTime;if(newDay!=null)day=newDay;present=newPresence!==false;
          sceneId=scenePrefix+name+'_'+suffix;scene(sceneId,title,bg,time,day,location,'present',label);block.sceneIds.push(sceneId);}
        sequence++;
        let texts=[raw],suffixes=[''];
        const callback=contract.callbackRules.find(x=>x.owner==='E05'&&x.kind==='early-callback'&&x.source.file===source.file&&x.source.line===line);
        if(callback){texts=[raw.replace(/^\*\*若[^*]+\*\*/,'')];assert.notEqual(texts[0],raw);
          delivery.transformations.push({file:source.file,line,kind:'conditional-prefix',condition:{flag:callback.flag,value:callback.value},removedPrefix:raw.slice(0,raw.length-texts[0].length)});}
        if(route==='mengyao'&&chapter===10&&line===263){
          const parts=/^若第四章去过旧书摊，(.+。)若第四章去过街机厅，(.+。)$/.exec(raw);assert(parts,'票据回收原文变化');
          texts=[parts[1],parts[2]];suffixes=['_books','_arcade'];
          delivery.transformations.push({file:source.file,line,kind:'inline-conditional-split',flag:'mengyaoOuting',
            branches:[{value:'books',removedPrefix:'若第四章去过旧书摊，'},{value:'arcade',removedPrefix:'若第四章去过街机厅，'}]});
        }
        const dialogue=/^“[^”]*”$/.test(raw),isWenwen=wenwen[route][chapter].includes(line),other=otherSpeakers[`${route}/${chapter}/${line}`];
        if(isWenwen||other){assert(dialogue,'说话者标注必须是纯对白');if(isWenwen)usedSpeakerLines.add(line);}
        const speaker=dialogue?(other||(isWenwen?'wenwen':route)):'narrator';
        const ids=texts.map((text,i)=>{
          const id=bi===0&&sequence===1&&chapter!==10?ch.entry:prefix+name+'_'+String(sequence).padStart(3,'0')+suffixes[i];
          m.nodes[id]={id,type:'line',scene:sceneId,speaker,character:present?route:null,text,next:null};
          block.nodeIds.push(id);return id;
        });
        map(line,ids,dialogue?'dialogue':'narration');byLine.set(line,ids);
      }
      assert(block.nodeIds.length,'禁止空正文块');map(a.sourceLineStart,block.nodeIds[0],'scene-title');blocks.push(block);
      delivery.assetMappings.push({a01SectionId:a.id,heading:a.heading,...block.source,nodeIds:block.nodeIds,sceneIds:block.sceneIds,
        assetIds:[...new Set([...a.scenes.flatMap(s=>s.assetIds),...block.sceneIds.map(id=>m.scenes[id].bg),...(a.characterAssetIds||[]),...(a.lookAssetIds||[])])],
        conditions:a.conditions||[],bindingStatus:'requested-not-adopted',presentationNotes:a.notes||[]});
    }
    assert.equal(usedSpeakerLines.size,wenwen[route][chapter].length,'文文对白标注漏用');
    const first=i=>blocks[i].nodeIds[0],tail=(i,next)=>{m.nodes[blocks[i].nodeIds.at(-1)].next=next;};
    blocks.forEach(b=>b.nodeIds.slice(0,-1).forEach((id,i)=>{m.nodes[id].next=b.nodeIds[i+1];}));
    if(chapter===4||chapter===9){
      const q=contract.choices.find(q=>q.route===route&&q.chapter===chapter);
      m.nodes[q.id]={id:q.id,type:'choice',scene:m.nodes[blocks[0].nodeIds.at(-1)].scene,character:route,
        text:q.prompt.raw.replace(/^\*\*选择：/,'').replace(/\*\*$/,''),flag:q.flag,
        choices:q.options.map((o,i)=>({label:o.label,value:o.value,next:first(i+1),...(o.requires.length?{requires:o.requires}:{})}))};
      map(q.prompt.line,q.id,'choice');
      q.options.forEach(o=>{map(o.source.line,q.id,'choice');if(o.sourceKind==='dialogue-excerpt')
        m.exclusions.push({file:source.file,startLine:o.source.line,endLine:o.source.line,reason:'choice-label-excerpt'});});
      controlIds.push(q.id);tail(0,q.id);tail(1,chapter===4?first(3):ch.returnTo);tail(2,chapter===4?first(3):ch.returnTo);if(chapter===4)tail(3,ch.returnTo);
    }else if(chapter===7||chapter===10){
      const flag=route+(chapter===7?'Outing':'Relationship'),q=contract.choices.find(q=>q.flag===flag);
      const id=chapter===10?ch.entry:prefix+'outing_gate';
      m.nodes[id]={id,type:'gate',scene:m.nodes[first(chapter===7?1:0)].scene,
        cases:q.options.map((o,i)=>({flag,value:o.value,next:first(chapter===10?i:i+1)})),default:null,exhaustive:true};
      (chapter===10?[0,1]:[1,2]).forEach(i=>map(blocks[i].headingLine,id,'control'));controlIds.push(id);
      if(chapter===7){tail(0,id);tail(1,first(3));tail(2,first(3));tail(3,ch.returnTo);}
      else q.options.forEach((o,i)=>{
        const ending=contract.endings.find(e=>e.route===route&&e.relationship===o.value);
        const title=ending.source.raw.split('｜').at(-1).replace(/^仅(?:交往|朋友)：/,'');
        const last=m.nodes[blocks[i].nodeIds.at(-1)];
        m.nodes[ending.id]={id:ending.id,type:'end',scene:last.scene,character:last.character,title,text:'',endingId:ending.id};
        map(ending.source.line,ending.id,'control');tail(i,ending.id);m.exports[ending.id]=ending.id;controlIds.push(ending.id);
      });
    }else blocks.forEach((b,i)=>tail(i,i+1<blocks.length?first(i+1):ch.returnTo));

    if(chapter===3){
      const callbacks=contract.callbackRules.filter(x=>x.owner==='E05'&&x.kind==='early-callback'&&x.source.file===source.file&&byLine.has(x.source.line));
      assert.equal(callbacks.length,2);
      const id=prefix+'early_callback_gate',targets=callbacks.map(cb=>byLine.get(cb.source.line)[0]);
      const nodes=blocks[0].nodeIds,index=nodes.indexOf(targets[0]),after=nodes[nodes.indexOf(targets[1])+1];
      m.nodes[id]={id,type:'gate',scene:m.nodes[targets[0]].scene,
        cases:callbacks.map((cb,i)=>({flag:cb.flag,value:cb.value,next:targets[i]})),default:null,exhaustive:true};
      m.nodes[nodes[index-1]].next=id;targets.forEach(target=>{m.nodes[target].next=after;});
      callbacks.forEach(cb=>map(cb.source.line,id,'control'));controlIds.push(id);
    }
    if(route==='mengyao'&&chapter===10){
      const ids=byLine.get(263),nodes=blocks[0].nodeIds,before=nodes[nodes.indexOf(ids[0])-1],after=nodes[nodes.indexOf(ids[1])+1];
      const id=prefix+'keepsake_gate';
      m.nodes[id]={id,type:'gate',scene:m.nodes[ids[0]].scene,
        cases:['books','arcade'].map((value,i)=>({flag:'mengyaoOuting',value,next:ids[i]})),default:null,exhaustive:true};
      m.nodes[before].next=id;ids.forEach(target=>{m.nodes[target].next=after;});map(263,id,'control');controlIds.push(id);
    }
    m.exports[ch.entry]=ch.entry;if(ch.returnTo)m.imports.push(ch.returnTo);
    for(let line=source.startLine;line<=source.endLine;line++)if(lines[line-1].trim()&&!m.sourceMap.some(r=>r.file===source.file&&r.startLine===line)){
      const reason=lines[line-1].startsWith('#')?'heading-only':lines[line-1].startsWith('>')?'reading-rule':null;
      assert(reason,'未覆盖正文或控制说明 '+source.file+':'+line);m.exclusions.push({file:source.file,startLine:line,endLine:line,reason});
    }
    const artIds=[...new Set(delivery.assetMappings.filter(x=>x.file===source.file).flatMap(x=>x.assetIds))].sort();
    m.assetRequests.push({id:`e01-art-ch${pad(chapter)}`,a01Ids:artIds});
    delivery.chapters.push({chapter,entry:ch.entry,returnTo:ch.returnTo,endings:controlIds.filter(id=>id.includes('_end_')),source,blocks,controlIds});
  }
  delivery.sourceIndex=m.sourceMap.map(row=>({...row,heading:delivery.chapters.flatMap(ch=>ch.blocks).find(b=>b.source.file===row.file&&b.source.startLine<=row.startLine&&b.source.endLine>=row.endLine)?.heading||null}));
  delivery.exclusions=m.exclusions;
  return {module:m,delivery};
}

function build(){validate(contract);assert.equal(art.contractVersion,contract.contractVersion);assert.equal(art.contentRevision,contract.contentRevision);return routes.map(buildRoute);}
function main(){
  const results=build();fs.mkdirSync(path.join(base,'routes'),{recursive:true});
  for(const r of results)fs.writeFileSync(path.join(base,r.module.moduleId+'.json'),json(r.module));
  fs.writeFileSync(path.join(__dirname,'delivery.json'),json({contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,
    scope:'E05 路线源、来源映射与资产请求；未接入正式游戏',routes:results.map(r=>r.delivery)}));
  console.log(json(results.map(r=>({route:r.delivery.route,nodes:Object.keys(r.module.nodes).length,scenes:Object.keys(r.module.scenes).length}))));
}
if(require.main===module)main();
module.exports={build};
