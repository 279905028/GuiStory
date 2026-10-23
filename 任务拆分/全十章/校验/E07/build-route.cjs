'use strict';

// E07 转录器：只写黄球球模块及本任务交付索引；不修改冻结正文、共通、构建器或正式游戏。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '../../../..');
const base = path.join(root, '任务拆分/全十章');
const c = require(path.join(base, 'contract.json'));
const art = require(path.join(base, '美术清单.json'));
const forms = require(path.join(root, 'assets/ten-chapter/huangqiuqiu/forms-index.json'));
const {validate} = require(path.join(base, 'verify-contract.cjs'));
const route = 'huangqiuqiu';
const spec = c.routes.find(r => r.id === route);
const pad = n => String(n).padStart(2, '0');
const json = x => JSON.stringify(x, null, 2) + '\n';
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex');

// 独立引号段逐句核对；混合叙述与对白保留完整原文，归旁白。
const wenwen = {
  3:[992,1002,1010,1020,1032,1040,1056,1092], 4:[535],
  5:[515,537,553,557], 6:[485,497,519,529,537],
  7:[545], 8:[481,503,511,531], 9:[584], 10:[537,575,587,595]
};
const names = {
  3:['second_meeting','not_all_knowing','ordinary_visit'],
  4:['outing','portrait','story','higher_seat'],
  5:['no_compensation','unfinished_yawn'],
  6:['after_dinner','slow_joke'],
  7:['quiet_company','outing_return','another_form'],
  8:['trial_roster','her_decision'],
  9:['relationship','dating','friends'], 10:['dating','friends']
};
// 段内明确的空间变化。门外声音不会提前显示实体立绘。
const cuts = {
  3:{978:['side_door','tc-bg-courtyard-day','网吧后院侧门外',false],
     980:['inside','tc-bg-courtyard-day','网吧后院门内干处',true],
     1080:['inside','tc-bg-courtyard-day','网吧后院门内干处',true]},
  9:{549:['inside','tc-bg-courtyard-day','网吧后院门内干处',true],
     594:['outside','tc-bg-courtyard-day','网吧后院侧门外',false],
     610:['days_later','tc-bg-courtyard-day','网吧后院门内干处',true,'数日后·时间未注明']},
  10:{541:['inside','tc-bg-courtyard-day','网吧后院门内干处',true],
      567:['outside','tc-bg-courtyard-day','网吧后院侧门外',false],
      577:['inside','tc-bg-courtyard-day','网吧后院门内干处',true],
      593:['doorway','tc-bg-courtyard-day','网吧后院门内门边',true],
      599:['inside_again','tc-bg-courtyard-day','网吧后院门内干处',true],
      603:['outside','tc-bg-courtyard-day','网吧后院侧门外',false]}
};
const expression = {
  3:{1004:'expression-smile',1046:'expression-serious',1060:'expression-smile',1104:'expression-smile'},
  4:{543:'action-hand',557:'expression-smile',565:'action-hand',567:'action-hand'},
  5:{523:'expression-serious',525:'expression-smile',549:'expression-serious',561:'expression-smile',571:'action-hand'},
  6:{517:'expression-smile',535:'action-hand'},
  7:{531:'expression-serious',541:'expression-smile',551:'expression-hesitant'},
  8:{473:'action-hand',475:'action-hand',487:'action-hand',493:'expression-hesitant',499:'action-hand',505:'expression-smile',521:'expression-serious',
     527:'base',529:'expression-hesitant',533:'expression-serious',539:'expression-smile',543:'action-wave'},
  9:{553:'expression-serious',572:'expression-hesitant',588:'expression-smile',592:'action-wave',598:'expression-downcast',608:'expression-smile',616:'action-wave'},
  10:{541:'action-wave',551:'expression-smile',555:'expression-smile',559:'action-thinking',577:'action-thinking',589:'expression-smile',597:'expression-smile',601:'action-wave'}
};

function build() {
  validate(c);
  assert.equal(art.contractVersion,c.contractVersion);
  assert.equal(art.contentRevision,c.contentRevision);
  assert.equal(forms.contentRevision,c.contentRevision);
  const m={schemaVersion:1,contractVersion:c.contractVersion,contentRevision:c.contentRevision,moduleId:'routes/'+route,owner:'E07',
    scenes:{},nodes:{},imports:[],exports:{},sourceMap:[],exclusions:[],assetRequests:[]};
  const d={task:'E07',contractVersion:c.contractVersion,contentRevision:c.contentRevision,formalIntegration:false,
    route,readFlags:spec.readFlags,writeFlags:spec.writeFlags,chapters:[],assetMappings:[],paragraphs:[]};
  const p={task:'E07',contractVersion:c.contractVersion,contentRevision:c.contentRevision,status:'requested-not-adopted',formalIntegration:false,
    formFlag:'qiuForm',formsIndex:'assets/ten-chapter/huangqiuqiu/forms-index.json',formsIndexSha256:hash('assets/ten-chapter/huangqiuqiu/forms-index.json'),
    registrationOwner:'E09',adoptionOwner:'A06',playerOwner:'E08',
    integrationRules:[
      'expression=base表示使用该form的image/avatarImage；绑定时省略expression，不查找expressions.base。',
      '每行character=null须清除上一行实体立绘；公共章节和婚宴不得残留球球立绘。',
      '立绘与说话头像均读取该节点onEnter提交后的qiuForm，禁止跨形态回退。',
      '回顾、恢复与重选按完整历史前缀重放；第三章重选保留相识、清除后续人形，第九章重选保留人形。',
      '人形仅腰部镜头，不以照片外的下装或公开登场补足画面。'
    ],nodeRequests:[],sceneRequests:[],sequence:[],relativeTimeNotes:[]};
  for(const ch of spec.chapters) {
    const chapter=ch.chapter, prefix=`tc_c${pad(chapter)}_${route}_`, sp=`ts_c${pad(chapter)}_${route}_`;
    const source=c.chapters[chapter-1].sections.find(s=>s.scope===route).source;
    const lines=fs.readFileSync(path.join(root,source.file),'utf8').split('\n');
    const arts=art.chapters.find(x=>x.chapter===chapter).sections.filter(s=>s.route===route);
    assert.equal(arts.length,names[chapter].length);
    const blocks=[], controls=[];
    function map(line,id,kind){m.sourceMap.push({file:source.file,startLine:line,endLine:line,nodeIds:[id],kind});}
    function scene(id,title,bg,time,day,location,relative=false){
      const chronology=chapter===10?{domain:'two-years-later',mode:'present',clock:time}:{domain:'story-day',mode:'present',day,clock:time};
      if(relative)chronology.label='第76天后的数日（具体日序未注明）';
      m.scenes[id]={chapter,title,bg,time,chronology,location,day:chapter===10?null:day,dayLabel:chapter===10?'两年后':`第${day}天`};
      p.sceneRequests.push({sceneId:id,backgroundAssetId:bg,location,status:'requested-not-adopted'});
    }
    for(const [bi,a] of arts.entries()) {
      const name=names[chapter][bi];
      const heading=lines.slice(source.startLine-1,a.sourceLineStart).reverse().find(l=>l.startsWith('### '));
      const match=/^### 第(\d+)天·([^｜]+)｜(.+)$/.exec(heading);
      assert(chapter===10||match,'场段缺日序标题');
      const day=chapter===10?null:Number(match[1]);
      let time=chapter===10?'休息日的下午':match[2];
      let bg='tc-bg-courtyard-day',location='网吧后院门内干处',present=true;
      if(chapter===3&&bi===0){bg='tc-bg-rental-day';location='文文出租屋';present=false;}
      if(chapter===3&&bi===2 || chapter===9&&bi===0 || chapter===10){location='网吧后院侧门外';present=false;}
      let sid=sp+name;
      scene(sid,a.heading.split('｜').at(-1),bg,time,day,location);
      const b={name,a01SectionId:a.id,heading:a.heading,source:{file:source.file,startLine:a.sourceLineStart,endLine:a.sourceLineEnd},nodeIds:[],sceneIds:[sid]};
      for(let n=a.sourceLineStart;n<=a.sourceLineEnd;n++) {
        const raw=lines[n-1];
        if(!raw.trim()||raw.startsWith('#'))continue;
        const q=c.choices.find(q=>q.route===route&&q.chapter===chapter);
        if(q&&(n===q.prompt.line||q.options.some(o=>o.source.line===n)))continue;
        let text=raw;
        if(chapter===7&&[519,521].includes(n))text=raw.replace(/^\*\*如果选过[AB]：\*\*/, '');
        assert(!/^(?:\*\*|>|---|\[|- )/.test(text),'未解析的控制标记 '+chapter+':'+n);
        const cut=(cuts[chapter]||{})[n];
        if(cut){const [suffix,newBg,newLocation,newPresent,newTime]=cut;bg=newBg;location=newLocation;present=newPresent;if(newTime)time=newTime;
          sid=sp+name+'_'+suffix;scene(sid,a.heading.split('｜').at(-1),bg,time,day,location,suffix==='days_later');b.sceneIds.push(sid);}
        let id=bi===0&&b.nodeIds.length===0&&chapter!==10?ch.entry:prefix+name+'_'+String(b.nodeIds.length+1).padStart(3,'0');
        const event=c.automaticEvents.find(e=>e.owner==='E07'&&e.chapter===chapter&&e.source.line===n);
        if(event)id=event.nodeId;
        const dialogue=/^“[^”]*”$/.test(text),isWenwen=wenwen[chapter].includes(n);
        if(isWenwen)assert(dialogue,'文文登记必须为独立对白 '+chapter+':'+n);
        const speaker=dialogue?(isWenwen?'wenwen':route):'narrator';
        const node={id,type:'line',scene:sid,speaker,character:present?route:null,text,next:null};
        if(chapter===9&&n>=610)node.time='第76天后的数日·具体时刻未注明';
        if(event)node.onEnter={requires:event.requires,setFlags:event.setFlags};
        m.nodes[id]=node;map(n,id,dialogue?'dialogue':'narration');b.nodeIds.push(id);
        const form=chapter>8||chapter===8&&n>=527?'human':'sphere';
        const ex=(expression[chapter]||{})[n]||'base';
        const formData=forms.characters.huangqiuqiu.forms[form];
        assert(ex==='base'||formData.expressions[ex],'A03没有所需形态表情 '+form+':'+ex);
        const binding=Object.entries(forms.assetBindings).find(([,v])=>v.form===form&&(v.expression||'base')===ex);
        assert(binding,'A03资源ID缺失');
        p.nodeRequests.push({nodeId:id,source:{file:source.file,line:n},form,character:node.character,
          expression:ex,avatarExpression:speaker===route?ex:null,assetId:binding[0],
          image:binding[1].image,avatarImage:binding[1].avatarImage,
          rendering:n===525&&chapter===8?'transition-without-early-human-reveal':present?'physical':'no-physical-sprite',
          framing:form==='human'?'waist-up-no-new-lower-clothing':'sphere-contain',status:'requested-not-adopted'});
        d.paragraphs.push({file:source.file,line:n,heading:a.heading,nodeId:id,sceneId:sid,kind:dialogue?'dialogue':'narration',
          ...(raw!==text?{removedReadingPrefix:raw.slice(0,raw.length-text.length)}:{})});
      }
      assert(b.nodeIds.length);map(a.sourceLineStart,b.nodeIds[0],'scene-title');blocks.push(b);
      const requestIds=p.nodeRequests.filter(x=>b.nodeIds.includes(x.nodeId)).map(x=>x.assetId);
      d.assetMappings.push({a01SectionId:a.id,...b.source,heading:a.heading,nodeIds:b.nodeIds,sceneIds:b.sceneIds,
        assetIds:[...new Set([...a.scenes.flatMap(s=>s.assetIds),...b.sceneIds.map(id=>m.scenes[id].bg),...(a.characterAssetIds||[]),...(a.lookAssetIds||[]),...requestIds])],
        bindingStatus:'requested-not-adopted'});
    }
    const first=i=>blocks[i].nodeIds[0];
    const tail=(i,next)=>{m.nodes[blocks[i].nodeIds.at(-1)].next=next;};
    blocks.forEach(b=>b.nodeIds.slice(0,-1).forEach((id,i)=>{m.nodes[id].next=b.nodeIds[i+1];}));
    if([4,9].includes(chapter)) {
      const q=c.choices.find(q=>q.route===route&&q.chapter===chapter);
      m.nodes[q.id]={id:q.id,type:'choice',scene:m.nodes[blocks[0].nodeIds.at(-1)].scene,character:route,text:'',flag:q.flag,
        choices:q.options.map((o,i)=>({label:o.label,value:o.value,next:first(i+1),...(o.requires.length?{requires:o.requires}:{})}))};
      map(q.prompt.line,q.id,'control');q.options.forEach(o=>map(o.source.line,q.id,'choice'));controls.push(q.id);tail(0,q.id);
      if(chapter===4){tail(1,first(3));tail(2,first(3));tail(3,ch.returnTo);}else{tail(1,ch.returnTo);tail(2,ch.returnTo);}
    }else if(chapter===7) {
      const id=prefix+'outing_gate',q=c.choices.find(q=>q.route===route&&q.chapter===4);
      assert.equal(blocks[1].nodeIds.length,2);
      m.nodes[id]={id,type:'gate',scene:m.nodes[first(1)].scene,cases:q.options.map((o,i)=>({flag:q.flag,value:o.value,next:blocks[1].nodeIds[i]})),default:null,exhaustive:true};
      map(517,id,'control');controls.push(id);tail(0,id);
      blocks[1].nodeIds.forEach(id=>{m.nodes[id].next=first(2);});tail(2,ch.returnTo);
    }else if(chapter===10) {
      const q=c.choices.find(q=>q.route===route&&q.chapter===9),id=ch.entry;
      m.nodes[id]={id,type:'gate',scene:m.nodes[first(0)].scene,cases:q.options.map((o,i)=>({flag:q.flag,value:o.value,next:first(i)})),default:null,exhaustive:true};
      blocks.forEach(b=>map(b.source.startLine,id,'control'));controls.push(id);
      q.options.forEach((o,i)=>{const e=c.endings.find(e=>e.route===route&&e.relationship===o.value);
        // 结局卡回用门内场景；不把已离门外的叙述背景误配为球球公开现身。
        const endingScene=blocks[i].sceneIds.find(s=>s.endsWith('_inside'));
        assert(endingScene,'结局卡必须有本分支门内场景');
        m.nodes[e.id]={id:e.id,type:'end',scene:endingScene,character:route,title:e.source.raw.split('｜')[1],text:'',endingId:e.id};
        map(e.source.line,e.id,'control');tail(i,e.id);m.exports[e.id]=e.id;controls.push(e.id);
      });
    }else blocks.forEach((b,i)=>tail(i,i+1<blocks.length?first(i+1):ch.returnTo));
    m.exports[ch.entry]=ch.entry;if(ch.returnTo)m.imports.push(ch.returnTo);
    for(let n=source.startLine;n<=source.endLine;n++)if(lines[n-1].trim()&&!m.sourceMap.some(r=>r.file===source.file&&r.startLine===n)){
      assert(lines[n-1].startsWith('#'),'有未覆盖正文 '+chapter+':'+n);
      m.exclusions.push({file:source.file,startLine:n,endLine:n,reason:'heading-only'});
    }
    m.assetRequests.push({id:`e01-art-ch${pad(chapter)}`,a01Ids:[...new Set(d.assetMappings.filter(x=>x.file===source.file).flatMap(x=>x.assetIds))].sort()});
    d.chapters.push({chapter,entry:ch.entry,returnTo:ch.returnTo,source,blocks,controlIds:controls});
  }
  const at=(chapter,line)=>d.paragraphs.find(p=>p.file===c.chapters[chapter-1].sections.find(s=>s.scope===route).source.file&&p.line===line).nodeId;
  p.sequence=[
    {nodeId:at(7,553),chapter:7,day:42,form:'sphere',meaning:'只提出另一副模样，未变身'},
    {nodeId:at(8,487),chapter:8,day:55,time:'17:00',form:'sphere',meaning:'先轻搭手'},
    {nodeId:at(8,505),form:'sphere',meaning:'她自行松开，不触发告白或变身'},
    {nodeId:at(8,521),form:'sphere',meaning:'她主动提出今天试试'},
    {nodeId:at(8,523),form:'sphere',meaning:'文文收手退凳并留出空间'},
    {nodeId:at(8,525),form:'sphere',rendering:'transition-without-early-human-reveal',meaning:'过渡行保持球形状态；可淡出球形，不提前露人形、不新增下装'},
    {nodeId:at(8,527),form:'human',meaning:'onEnter提交后首次展示人形立绘及对应头像'},
    {nodeId:at(8,543),form:'human',meaning:'挥手告别'},
    {nodeId:'tc_c09_huangqiuqiu_relationship_choice',form:'human',meaning:'变身已完成，交往／朋友不影响形态'},
    ...c.endings.filter(e=>e.route===route).map(e=>({nodeId:e.id,form:'human',meaning:'两年后人形结局'}))
  ];
  p.relativeTimeNotes.push({nodeIds:d.paragraphs.filter(x=>x.file.endsWith('第九章-把明天说具体.md')&&x.line>=610).map(x=>x.nodeId),
    anchorDay:76,label:'第76天后的数日（具体日序未注明）',
    note:'冻结接口要求数值day，76仅为本段日期锚点，不能把此处当作第76天同日。chronology.label与time保留相对日序；E08/E09显示时使用该相对文字，不编造第几天。'});
  p.controlRequests=Object.values(m.nodes).filter(n=>['choice','end'].includes(n.type)).map(n=>({nodeId:n.id,
    form:n.id.includes('_c04_')?'sphere':'human',character:route,expression:'base',
    rendering:n.type==='end'?'ending-card-private-courtyard':'physical',status:'requested-not-adopted'}));
  d.hiddenContract={owner:'E03',initialFlags:c.interface.initialFlags,entranceRequires:spec.entranceRequires,
    meetEvent:c.automaticEvents.find(e=>e.id==='qiu-met'),routeChoiceId:c.interface.routeChoice,
    notes:['第8天回应始终可选，未记录时不获回应；只有记录加回应完成第14天相识。','相识前不显示姓名、立绘或头像；第三章选项还需qiuMet=true。','球球不参加公共婚宴；本模块从唯一适用后日谈之后接续。']};
  d.callbackRules=c.callbackRules.filter(x=>JSON.stringify(x).includes(route));
  d.automaticEvent=c.automaticEvents.find(e=>e.owner==='E07');
  d.exclusions=m.exclusions;
  d.counts={chapters:8,nodes:Object.keys(m.nodes).length,scenes:Object.keys(m.scenes).length,paragraphs:d.paragraphs.length,
    choices:2,automaticEvents:1,endings:2,a01Sections:d.assetMappings.length};
  return {module:m,delivery:d,presentation:p};
}
function main(){const r=build();fs.writeFileSync(path.join(base,'routes/huangqiuqiu.json'),json(r.module));
  fs.writeFileSync(path.join(__dirname,'delivery.json'),json(r.delivery));fs.writeFileSync(path.join(__dirname,'presentation.json'),json(r.presentation));console.log(json(r.delivery.counts));}
if(require.main===module)main();
module.exports={build};
