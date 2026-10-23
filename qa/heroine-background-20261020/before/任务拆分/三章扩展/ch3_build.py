import json
from pathlib import Path

OUT = Path(__file__).with_name("chapter3.json")
data = {"scenes": {}, "nodes": {}, "start": "ch3_open_01", "ends": [], "notes": {
    "chapter": 3,
    "scope": "第15—21天，四条常规关系线、一条朋友与职业线、一条条件隐藏线；全部为阶段收束。",
    "assets": "只使用既有六种背景和已存在人物差分；不借旧CG冒充新事件。",
    "continuity": "第14天可公开初版已完成；28日贵阳行程、30日回声停业尚未到来；旧监听异常仍未查明。",
    "routePolicy": "第10天preview不锁第三章route；隐藏入口仅检验qiuSignal=record及qiuReply=reply。",
    "choices": {},
}}
N = data["nodes"]

def scene(key, title, day, time, location, bg):
    data["scenes"][key] = dict(title=title, chapter=3, day=day, time=time, location=location, bg=bg)

def chain(prefix, scene_id, rows, nxt):
    parsed = [r.split("|") for r in rows.strip().splitlines() if r.strip()]
    ids = [f"{prefix}_{i:02d}" for i in range(1, len(parsed) + 1)]
    for i, parts in enumerate(parsed):
        speaker, text = parts[:2]
        speaker = "narrator" if speaker == "n" else speaker
        character = (parts[2] or None) if len(parts) > 2 else (None if speaker == "narrator" else speaker)
        node = dict(id=ids[i], type="line", scene=scene_id, speaker=speaker, character=character,
                    text=text, next=ids[i + 1] if i + 1 < len(ids) else nxt)
        if len(parts) > 3 and parts[3]:
            node["expression"] = parts[3]
        N[ids[i]] = node
    return ids[0]

def gate(key, scene_id, cases, default):
    N[key] = dict(id=key, type="gate", scene=scene_id,
                  cases=[dict(flag=f, value=v, next=n) for f,v,n in cases], default=default)

def choice(key, scene_id, character, text, flag, options):
    N[key] = dict(id=key, type="choice", scene=scene_id, character=character, text=text, flag=flag,
                  choices=[dict(label=l, value=v, next=n, **extra) for l,v,n,extra in options])
    data["notes"]["choices"][key] = {"flag": flag, "values": [o[1] for o in options]}

def end(key, scene_id, character, title, text, after):
    N[key] = dict(id=key, type="end", scene=scene_id, character=character, title=title, text=text,
                  nextChapter=after)
    data["ends"].append(key)

scene("ch3_open", "一段片子以后的日子", 15, "下午", "回声大厅", "lobby")
chain("ch3_open", "ch3_open", """
n|第十五天下午，我到回声时，大厅的灯只开了一半。窗外雨歇了十分钟，地砖上却还留着来往的湿鞋印。
n|昨日确认的短片初版已经发出。开始有人把那十二秒之外的话看完，旧转发仍在，却不再是我们唯一能说的版本。
maolang|有人说片名土。你们看，我最开始那个至少洋气。|maolang|expression-displeased
zhouzhi|《最后一夜，回声不灭》？听起来像音箱坏了。|zhouzhi|expression-smile
maolang|你怎么还背得下来。
wenwen|受过伤的耳朵记得牢。
n|毛狼把我手里的纸杯拿走，换成一只没有漏底的。他的回击晚了一步，我们却都笑出来了。|maolang|expression-smile
mengyao|初版别继续加东西了。后面有补拍，另存一版。|mengyao|expression-serious
yelan|月底还没到，收尾也还要做。今天先各自过日子，别全堵在这儿。|yelan|expression-smile
n|她说完，自己还在看群里的排班，周栀伸手在她眼前晃了一下，提醒“各自”也包括她。
n|小满发来一张第十八天考核的通知，附了一句“看到的请假装没看到”。毛狼回她：“已转发至我的大脑。”|
n|贵阳发来的补充材料要求，我已经记进日历。第二十八天的行程仍在，尚无录用结果；第三十天回声停业，也不会因片子完成就往后挪。
n|旧监听还在待查清单上。我和师匠约好按空档复测，不能因为它安静几晚就划掉。
n|这半个月，我很擅长问“还有哪儿要帮忙”。问题问多了，想见谁也像一张等着接的工单。
n|今天下午却没有急修。接下来几天，我能把一段时间提前留出来，去见一个人，或者先把自己的事和朋友的约定做好。
wenwen|我先走一趟。到时候有变动，我提前说。
maolang|行。别又把“走一趟”走成失踪人口。还有，你杯子在我这儿。
n|我拿回纸杯，把刚想说的“有事找我”咽下去。手机握在手里，这次先由我开口。
""", "ch3_route_choice")
choice("ch3_route_choice", "ch3_open", None, "接下来的几天空档，我想怎样安排？", "route", [
    ("约小满见面，陪她走过考核前后。", "xiaoman", "ch3_xiaoman_a_01", {}),
    ("赴周栀的试菜之约，也留一点两个人的时间。", "zhouzhi", "ch3_zhouzhi_a_01", {}),
    ("把与孟遥约好的话谈完，再一起完成一段新作品。", "mengyao", "ch3_mengyao_a_01", {}),
    ("去看叶岚的新工作准备，下班以后再一起走走。", "yelan", "ch3_yelan_a_01", {}),
    ("先和毛狼、师匠把职业准备做完，认真过朋友的日常。", "solo", "ch3_solo_a_01", {}),
    ("回应黄球球的邀约，去听她今天想聊的小事。", "huangqiuqiu", "ch3_qiu_a_01",
     {"requires": [{"flag": "qiuSignal", "value": "record"}, {"flag": "qiuReply", "value": "reply"}]}),
])

# 小满：不理想的结果、她自己的复练决定，以及脱离工作理由的见面。
scene("ch3_xiaoman15", "镜子前的两种准备", 15, "下午", "罗小满工作的理发店", "salon")
scene("ch3_xiaoman18", "还没剪顺的那一道", 18, "下午", "罗小满工作的理发店", "salon")
scene("ch3_xiaoman21", "今天不剪头发", 21, "下午", "罗小满工作的理发店", "salon")
chain("ch3_xiaoman_a", "ch3_xiaoman15", """
n|我问小满下午能不能去坐一会儿。她回“可以”，又补“别穿白领子”，过两秒才说今天不会拿我练手。
n|到店时，她正在收练习用的围布，发梢粘在袖口上。我指了指，她却先拍自己的另一只手。
xiaoman|哪儿？你说左边，是你的左边还是我的左边？|xiaoman|expression-surprised
wenwen|以后我随身带个箭头。
n|她终于掸掉那撮头发，笑了一下，随即把第十八天的安排推给我看。限时修剪、整理，再说明自己的处理思路。|xiaoman|expression-hesitant
xiaoman|前两项我能练。讲怎么做的，我一着急就说“反正就这样”。
wenwen|评的人会不会回答“反正不行”？
xiaoman|所以才找你。你负责坐对面，脸尽量欠一点。
n|我拉开椅子。镜子里她扶正作品夹，手指在封皮上来回划，迟迟没有翻第一页。
""", "ch3_xiaoman_memory")
gate("ch3_xiaoman_memory", "ch3_xiaoman15", [("salon", "portfolio", "ch3_xiaoman_memory_p_01")],
     "ch3_xiaoman_memory_m_01")
chain("ch3_xiaoman_memory_p", "ch3_xiaoman15", """
xiaoman|上回挑照片，你说光太亮就看不清过渡。我后来换了灯拍，确实差好多。
n|她翻到那张没加滤镜的图。旁边的修改记录又多了几行，已经不是我们那天一起写下的那一点。
""", "ch3_xiaoman_b_01")
chain("ch3_xiaoman_memory_m", "ch3_xiaoman15", """
xiaoman|你上回剪完那张侧后面，我留着了。这几天又找人练，不能逮着一个脑袋薅。
wenwen|谢谢，我的头终于有了休息日。
""", "ch3_xiaoman_b_01")
chain("ch3_xiaoman_b", "ch3_xiaoman15", """
n|她终于摊开两张记录，问我先陪她做哪一项。我看见另一页已经写着今后几天的练习时间。
xiaoman|别劝我今天歇了。我不是累得拿不动剪刀，是越拖越不敢做。|xiaoman|expression-serious
wenwen|那我今天当个管用的观众。
xiaoman|观众可以，别鼓掌。店里人会以为我考上驾照了。
""", "ch3_xiaoman_choice")
choice("ch3_xiaoman_choice", "ch3_xiaoman15", "xiaoman", "她想先练一件真正卡住她的事，我陪她怎样准备？", "ch3XiaomanSupport", [
    ("做一次限时讲解演练，记下我确实没听懂的地方。", "rehearse", "ch3_xiaoman_pick_r_01", {}),
    ("陪她逐张比较作品，让她自己选出要解释的变化。", "compare", "ch3_xiaoman_pick_c_01", {}),
])
chain("ch3_xiaoman_pick_r", "ch3_xiaoman15", """
n|我把手机计时放到镜子旁。第一遍她讲得比剪刀还快，到了处理耳后那一步，自己也停住了。
wenwen|等会儿。前面说留长，这里为什么又剪掉？
xiaoman|不是同一层。我得先说这个……行，重来，别替我接。|xiaoman|expression-serious
n|第三遍，她仍会看时间，但能把那处说明白。我在纸角写“听懂了”，她拿过去看了两次才收好。
""", "ch3_xiaoman_c_01")
chain("ch3_xiaoman_pick_c", "ch3_xiaoman15", """
n|我把照片按拍摄次序摆开，先遮住她写的评价。小满指着一张说进步最大，又把手挪回来。
xiaoman|等一下，这张只是吹得好看。湿的时候，右边还是厚。
wenwen|那要不要换一张？
xiaoman|不换。我得会说它哪儿不好，不能每次都把最好看的摆在最前面。|xiaoman|expression-serious
""", "ch3_xiaoman_c_01")
chain("ch3_xiaoman_c", "ch3_xiaoman15", """
n|练完已经超过半小时。客人推门进来，小满立刻把椅子让出去；我替她收起照片，没再占着她上班的地方。
xiaoman|第十八天考完我告诉你。要是没过，你不许隔着手机“哈哈哈”。
wenwen|我见面笑。
xiaoman|你试试。|xiaoman|expression-smile
""", "ch3_xiaoman_d_01")
chain("ch3_xiaoman_d", "ch3_xiaoman18", """
n|第十八天下午，小满发来一句“出来了”。我走到店里时，考核用的围布已经叠好，她坐在镜子最边上。
xiaoman|没过。左后区过渡有道坎，时间也超了。不是考官眼神不好。|xiaoman|expression-downcast
n|她把记录递给我。纸上圈了两个地方，合格栏空着；我没伸手去翻她收在下面的照片。
wenwen|我能看看你觉得最可惜的地方吗？
xiaoman|现在不想看。脑袋里已经放了八百遍。
n|我在旁边坐下来。店里的吹风机响着，她盯住镜子，先把扎头发的皮筋扯松，又重新扎了一遍。|xiaoman|expression-downcast
xiaoman|我还以为这次能顺便把那句“助理”拿掉。挺好笑的，连改名片都想过了。
wenwen|不好笑。你准备那么久，会想很正常。
xiaoman|我知道你要说什么。“下次一定”是吧？
wenwen|我不知道。想问你等会儿吃什么，又怕显得我只会惦记饭。
n|她鼻子里轻轻笑了一声，没抬头。过了一阵，她自己把记录翻回来，用笔圈出左后区。
xiaoman|这部分得重新练。只是今天不剪了，我怕带着气把谁剪成土豆。|xiaoman|expression-serious
wenwen|我的圆脸承受不起第二次加工。
xiaoman|你本来就是成品。
n|她给店里的师傅发了一条请教消息，问第二十天能否帮看一次专项练习。发完，她把笔盖按上，声音终于不那么绷。
xiaoman|我自己报名复练。下次考期还没出，不用你帮我催。
wenwen|那我再待一会儿。走的时候叫我。
n|她用鞋尖把我椅子旁的碎发拢到一处，像终于找到一个不必立刻做好的小动作。
xiaoman|那先坐五分钟。等会儿再去吃，你现在起身我就以为你真饿坏了。
n|我把外套重新搭回椅背。镜子里两个人都没看成绩单，那五分钟比刚才安静，也没有那么难熬。
""", "ch3_xiaoman_e_01")
chain("ch3_xiaoman_e", "ch3_xiaoman21", """
n|第二十一天下午，我在坡口买了两个热饼，到店时小满刚把练习记录发给师傅，手指上还压着一道皮筋印。
xiaoman|右边这回稳了，左边慢。你看，我已经从到处不行进化成指定区域不行。|xiaoman|expression-smile
wenwen|业务范围缩小了，可喜可贺。
n|她接过纸袋，先问我是不是没吃饭。听说我只是想送来，她捏着袋口，声音忽然小了一点。
xiaoman|那你坐会儿。今天真不剪，你别习惯性低头。
n|我坐在那把已经熟悉的椅子上。她把一张旧纸放到镜前，是第十五天我们用过的那张。
""", "ch3_xiaoman_payoff")
gate("ch3_xiaoman_payoff", "ch3_xiaoman21", [("ch3XiaomanSupport", "rehearse", "ch3_xiaoman_pay_r_01")],
     "ch3_xiaoman_pay_c_01")
chain("ch3_xiaoman_pay_r", "ch3_xiaoman21", """
xiaoman|考核讲解那项过了。你问的那一句，后来师傅也问了，我居然没卡住。|xiaoman|expression-smile
n|她点了点我写的“听懂了”。那三个字旁边多了一条提醒：先分清层次，再说处理。
wenwen|下次还需要一个欠揍的考官吗？
xiaoman|需要。但今天不考，你的脸可以恢复正常。
""", "ch3_xiaoman_f_01")
chain("ch3_xiaoman_pay_c", "ch3_xiaoman21", """
xiaoman|我把那张右边厚的也给师傅看了。他一下就找到我总爱漏掉哪一层。|xiaoman|expression-smile
n|她没有把旧图撤掉，新图贴在旁边。我这次不用她指，也看得出两张之间有了区别。
wenwen|你以后作品夹会不会厚得能垫桌子？
xiaoman|那你来帮我搬。只准搬，不准挑最好看的替我藏丑。
""", "ch3_xiaoman_f_01")
chain("ch3_xiaoman_f", "ch3_xiaoman21", """
n|热饼吃到一半，工作已经谈完了。我看着她把纸屑折进袋里，忽然舍不得现在站起来。
wenwen|我第二十八天还得去贵阳，结果没定。我想走之前再见你一次，不是来问考核。
xiaoman|你这句话，前面听着像要借钱。|xiaoman|expression-hesitant
wenwen|后面呢？
n|她把纸袋折了两遍才放下，随后伸手在日历上点了一下。耳边的碎发落下来，她没有马上别回去。|xiaoman|expression-hesitant
xiaoman|第二十四天我早班。你五点来，我不拿剪刀。
wenwen|行。你没东西要修，我也来。
xiaoman|我也没坏到每天都得修。……五点，别太早，我会分心。|xiaoman|expression-smile
n|我把时间记进手机。这一次，那把空椅子没有被算进练习时长里，我仍然有了下次坐下的理由。
""", "end_ch3_xiaoman")
end("end_ch3_xiaoman", "ch3_xiaoman21", "xiaoman", "不剪头发也能见面",
    "考核没有因为我的陪伴就变成合格。她已经选好要复练的地方，也给我留出一段不拿剪刀的时间。我喜欢看她认真，也想知道她不必证明自己时会说些什么。第二十四天五点，这次是我们两个人的约。",
    "第三章阶段收束 · 复练与下一次见面已经约定；第二十八天行程、月底停业仍待后续推进。")

# 周栀：自主试菜，有疲倦与口味偏好，不把生意做成男主的拯救。
scene("ch3_zhouzhi15", "开门前借一张桌", 15, "夜间", "坡口面馆", "noodles")
scene("ch3_zhouzhi18", "没有全票通过的味道", 18, "傍晚", "坡口面馆 · 营业前", "noodles")
scene("ch3_zhouzhi21", "今天由我来约", 21, "夜间", "坡口面馆", "noodles")
chain("ch3_zhouzhi_a", "ch3_zhouzhi15", """
n|周栀约我到面馆时，我先把工具包寄在柜台后面。她看见我两手空空，朝对面的椅子抬了一下下巴。
zhouzhi|今天不用看型号。先吃，不然等会儿试味，你会觉得什么都香。|zhouzhi|expression-smile
n|她朋友已经和老板商量好，第十八天开门前借一张桌做小份试菜。只请几位认识的人，东西由她们提前备好。
wenwen|不直接摆摊了？
zhouzhi|先知道自己做得出几份、谁真想再吃。摊位没签，冰柜也先不买，钱又不会捂坏。
n|她把纸摊开，上面不是大计划，只有两种调味、分量和准备时间。一个数字被划了三遍。
zhouzhi|我原来写十二份。她说我们两个不是长了十二只手，改成六份。
wenwen|六份，两个人，听起来还是每人三只手。
zhouzhi|所以请你来当嘴。手先不用借，嘴倒有现成的。|zhouzhi|expression-smile
n|老板把面端来，她先挑出一截不喜欢的葱。做这件事时，她没有问我会不会介意。
zhouzhi|我其实有点烦。上完班再准备，连“换个活法”都像给自己加班。
wenwen|你还想做吗？
zhouzhi|想。烦也想。只是你到时别问我怎么不笑，我可能忙得想把人和碗一起摞起来。|zhouzhi|expression-serious
n|我笑着答应。她低头吃了几口，才把还没填完的反馈页推给我，让我选一种她们比较缺的反馈。
""", "ch3_zhouzhi_choice")
choice("ch3_zhouzhi_choice", "ch3_zhouzhi15", "zhouzhi", "第十八天的试菜，我怎样参与？", "ch3ZhouzhiSupport", [
    ("当一名普通食客，仔细描述自己想不想再吃。", "taste", "ch3_zhouzhi_pick_t_01", {}),
    ("帮记等餐和份量，让她们集中照顾出品。", "observe", "ch3_zhouzhi_pick_o_01", {}),
])
chain("ch3_zhouzhi_pick_t", "ch3_zhouzhi15", """
wenwen|我只负责我的舌头。要是好吃，我说哪儿好；不合口，也不假装替所有人投票。
zhouzhi|行。你要是只写“不错”，我就回你“收到”。
n|她在名单上给我留了两个空格，提醒我两份先别混着吃，喝口水再尝下一份。
wenwen|这么正式，我突然担心自己没资格有舌头。
""", "ch3_zhouzhi_b_01")
chain("ch3_zhouzhi_pick_o", "ch3_zhouzhi15", """
wenwen|我记什么时候出第一份、最后一份。你们忙起来，我不挤在旁边问好没好。
zhouzhi|也帮看碗底剩什么。有时候人说好吃，筷子比嘴诚实。
n|她给我画了个很歪的碗。我问是不是要另收插画费，她说这是标明我的工作对象。
zhouzhi|别把自己也写进表里。你晚上还得正常吃饭。
""", "ch3_zhouzhi_b_01")
chain("ch3_zhouzhi_b", "ch3_zhouzhi15", """
n|谈完，她把那页纸收起来，问我最近最想吃什么。我想了一会儿，才发现自己答不出“随便”以外的话。
wenwen|热的，吃完不用马上搬东西的。
zhouzhi|要求真低。今晚满足你，但吃完自己擦嘴。
n|我看她在自己的汤里添了辣椒，忽然觉得她这会儿比在上班时更像我想认识的人。
""", "ch3_zhouzhi_c_01")
chain("ch3_zhouzhi_c", "ch3_zhouzhi18", """
n|第十八天，我按约提前到面馆。门口仍挂着稍后营业的小牌，试菜就摆在平时那张桌上，没弄出开业的架势。
n|周栀和朋友轮流分装，六个小碗排开。朋友去后面取最后一份配料，她让我先把桌边让出来。
zhouzhi|借过。今天走路带风，碰着你就算工伤。|zhouzhi|expression-serious
n|第一轮比预计慢，第二种调味又添得太满。有人说香，也有人刚尝两口就去找水，桌上没有期待中的一片夸声。
n|周栀听到“还是淡一点好卖”时停了半拍。她看向自己留的那一小份，没有立刻把意见抄下来。|zhouzhi|expression-hesitant
zhouzhi|我自己就喜欢重一点。要是全改淡，最后怎么知道来吃的是不是喜欢我们的味道？
wenwen|那就先记下来。六个人也替不了整条街。
n|她朋友从后面出来，和她站在桌边小声商量。我端起水杯等着，没有挤过去替她们定一种口味。
zhouzhi|我们想先保留两种，底味不再加，辣的单放。下次再看备料来不来得及。|zhouzhi|expression-serious
n|她朝我解释完，又转回去补一句“是我们想的，不算正式菜单”。朋友听着笑了，拿走她差点洗第二遍的空碗。
n|最后一位试吃的人走后，周栀靠着椅背坐下。她的手机又亮起来，是回声的排班提醒。
zhouzhi|我现在谁的消息都不想回。连恭喜我都有点吵。|zhouzhi|expression-downcast
wenwen|那我也先不恭喜。
zhouzhi|你倒可以说。说短点。
wenwen|辛苦了。
n|她闭了两秒眼睛，再睁开时伸手拿水。朋友已经约好先把借用的桌面清干净，我们把剩下的碗一一摞回去。
zhouzhi|今天没挣钱，还多洗了碗。第一步大概就长这样吧。
wenwen|至少现在知道六份不是随手就出。
zhouzhi|嗯。也知道累的时候，我不太温柔。你要记录这个，记准确点。
n|我把她递来的空杯接住。她没有勉强笑，我也没有试着把这次疲倦讲成什么特别漂亮的开始。
""", "ch3_zhouzhi_d_01")
chain("ch3_zhouzhi_d", "ch3_zhouzhi21", """
n|第二十一天，我先给周栀发消息，说想请她吃一碗不用给意见的面。她回得很快：“七点半。我今天想吃酸一点。”
n|她来时头发刚重新扎过，拉开椅子就问我是不是已经点了。我把菜单推过去，说只点了自己的。
zhouzhi|好。我不想因为别人替我想好了，就配合着喜欢。|zhouzhi|expression-smile
wenwen|酸的在这页。你想不想我陪你去下次试菜，再另外说。
n|她笑着在菜单上点了两下。等面的时候，她拿出第十八天的记录，其中一页是我交给她的。
""", "ch3_zhouzhi_payoff")
gate("ch3_zhouzhi_payoff", "ch3_zhouzhi21", [("ch3ZhouzhiSupport", "taste", "ch3_zhouzhi_pay_t_01")],
     "ch3_zhouzhi_pay_o_01")
chain("ch3_zhouzhi_pay_t", "ch3_zhouzhi21", """
zhouzhi|你写第二种前几口香，后面有点抢味。我们照这个又试了，香料减一点，辣椒还留着。|zhouzhi|expression-smile
wenwen|所以我下次可以吃完整版了？
zhouzhi|可以。但我记住你不爱那个味了，给你盛自己的那份，省得你又很认真地喝三杯水。
n|她说得随意。我看着那张纸，才发现她把我吃到一半去找水的事也记住了。
""", "ch3_zhouzhi_e_01")
chain("ch3_zhouzhi_pay_o", "ch3_zhouzhi21", """
zhouzhi|你记的时间帮上忙了。我们最慢那段不是做菜，是一边装一边找盖子，后来先摆好就快了。|zhouzhi|expression-smile
wenwen|我的职业生涯第一次败给盒盖。
zhouzhi|还有，你最后才顾上尝，吃的是凉的。下次给你留热的一份，不让你抱着表当饭吃。
n|她说这句时把记录折起来，不再继续核对时间。我也把自己那句“没事，我习惯了”咽回去。
""", "ch3_zhouzhi_e_01")
chain("ch3_zhouzhi_e", "ch3_zhouzhi21", """
wenwen|下次我想来。不过今天约你，主要是我想见你。
n|周栀抬眼看我。蒸汽从刚端来的面碗上升起，她等老板走开，才把水杯往旁边挪了一点。|zhouzhi|expression-hesitant
zhouzhi|我看出来一点了。你今天连“顺路”都没说。
wenwen|第二十八天的车还在。我有结果就告诉你，没结果也说，不把这顿饭当告别饭。
zhouzhi|那就好好吃。告别饭应该更贵，至少多加个蛋。|zhouzhi|expression-smile
n|我笑着问现在能不能加，她摇头，说今天这碗刚好。后来她又主动提起第二十三天的休息空档。
zhouzhi|到时候我可能不想说摊子的事。也可能什么都没做好，纯出来透口气。
wenwen|那我照样来。
zhouzhi|行。我也想。今晚这句回得够短吧？
n|她低头吃面，没有替我调汤。我也没有伸手替她拿辣椒。两只碗贴得不远，我们各自吃着喜欢的味道，约好了下一次。
""", "end_ch3_zhouzhi")
end("end_ch3_zhouzhi", "ch3_zhouzhi21", "zhouzhi", "两个人，各自的口味",
    "试菜有了能调整的记录，也留下没做完的计划。她会累，会不想回复，会坚持自己喜欢的味道。我开始期待这些具体的她；她也记住了我的那一份，并答应下一次见面不必带着工作。",
    "第三章阶段收束 · 小规模试菜完成、下一次私人见面已约定；生意与关系都仍在继续。")

# 孟遥：旧约要谈完，但共同创作也要有她自己的审美与欲望。
scene("ch3_mengyao15", "镜头先放在包里", 15, "下午", "老街屋檐下", "street")
scene("ch3_mengyao18", "两个人都留下的意见", 18, "下午", "回声大厅", "lobby")
scene("ch3_mengyao21", "没有结果也发出去", 21, "下午", "老街坡口", "street")
chain("ch3_mengyao_a", "ch3_mengyao15", """
n|我和孟遥把见面定在下午四点，地点还是老街屋檐下。她比我早到，手里拿着一瓶拧过盖却没喝的水。
wenwen|等久了？
mengyao|七分钟。我也早来了，不算你迟到。|mengyao|expression-hesitant
n|她说完自己笑了一下，像也觉得第一句话太像核对时间。相机留在包里，她没有先拿工作来填空。
""", "ch3_mengyao_preview")
gate("ch3_mengyao_preview", "ch3_mengyao15", [("preview", "mengyao", "ch3_mengyao_mem_yes_01")],
     "ch3_mengyao_mem_no_01")
chain("ch3_mengyao_mem_yes", "ch3_mengyao15", """
mengyao|第十天那条回答我没忘。你说怕我知道没有结果，所以不回。可你有没有想过，我那时到底在等什么？
n|我记得那段对话停在哪里。今天她站在面前，我不能把说过一句对不起当成已经谈完。
""", "ch3_mengyao_b_01")
chain("ch3_mengyao_mem_no", "ch3_mengyao15", """
mengyao|你后来把车票告诉大家了。我们之间那件事，我还是想单独谈完。
wenwen|当时我不回，是不想让你知道工作还没结果，连会不会走都答不上。我怕你失望，就让你一直等。
""", "ch3_mengyao_b_01")
chain("ch3_mengyao_b", "ch3_mengyao15", """
wenwen|我以前一直以为，你等的是一个安排好了的答案。
mengyao|我也想知道你会不会想见我。哪怕你要走。|mengyao|expression-downcast
n|雨顺着屋檐落到两步之外。我张了张嘴，第一次意识到自己准备好的解释，没有回答她刚才这一句。
wenwen|想过。我当时想等自己像样一点再见你，后来连这句话都不好意思说。
mengyao|你上次回来，我路过这个地方还想好了怎么开口。真见到你，第一句却变成问设备。|mengyao|expression-hesitant
n|她低头旋了一下瓶盖。我本来以为只有我会做这种准备，忽然很想接住她停下来的那一点声音。
wenwen|那今天我先说。我想见你，不只是想把以前解释清楚。
mengyao|我听见了。但我还没办法直接回到以前那种亲近。
wenwen|不用今天做到。今天这些话，我会记得。
n|我们安静站了一阵。她终于喝了口水，嫌水被握得太温，问我是不是也觉得这场见面需要一点不那么严肃的结尾。
wenwen|我可以表演从台阶上正常走下去，不摔。
mengyao|先别。那会成为我今天最难剪掉的画面。|mengyao|expression-smile
n|她说最近想做一个六十秒的小练习，只拍自己有权使用的街景与声音，不放进回声的片子，也不急着发布。
mengyao|我想试试不用“舍不得”就能讲离开。有一段节奏总不对，你愿不愿意跟我做一次？
""", "ch3_mengyao_choice")
choice("ch3_mengyao_choice", "ch3_mengyao15", "mengyao", "这次共同创作，我想从哪里加入？", "ch3MengyaoWork", [
    ("一起看片段排序，直说我看见的故事。", "image", "ch3_mengyao_pick_i_01", {}),
    ("一起录坡口的声音，从听见的节奏开始。", "sound", "ch3_mengyao_pick_s_01", {}),
])
chain("ch3_mengyao_pick_i", "ch3_mengyao15", """
wenwen|我不懂怎么剪，但能告诉你哪一段让我想继续看。
mengyao|够了。你别一见我皱眉就把意见收回去，我还没说服你呢。
n|她给我看两段没有行人的街景，一段水向台阶下流，一段门被风吹得轻轻碰上。我选了后者开头。
mengyao|我想反过来。先留着，第十八天我们各排一版，看完整再争。
""", "ch3_mengyao_c_01")
chain("ch3_mengyao_pick_s", "ch3_mengyao15", """
wenwen|我想录那边卷帘门落下去的声音。每次听见，就知道这条街又有一家准备歇了。
mengyao|我想要开门声。你听，后面那一下抖动，像人犹豫了一下才出去。
n|我们约好第十八天各带一段，录的时候不收清楚的路人谈话。她把手机录音点开，先让我听此刻屋檐落水的间隔。
wenwen|光在这儿站着，我还真没认真听过。
""", "ch3_mengyao_c_01")
chain("ch3_mengyao_c", "ch3_mengyao15", """
n|分开时，她提起一直放在脚边的相机包。我也没问今天谈得算不算好，只确认第十八天下午我能准时到。
mengyao|行。那天可以说我剪得不好，但要说哪儿。
wenwen|我尽量比“反正不好”多说几个字。
""", "ch3_mengyao_d_01")
chain("ch3_mengyao_d", "ch3_mengyao18", """
n|第十八天下午，孟遥借回声大厅一角摆电脑。我到时，她正在反复拖动同一段，进度条像被一根橡皮筋拉回来。
mengyao|你先看，别看我。我现在脸上写的不是答案，是没睡够。|mengyao|expression-serious
n|六十秒放完，我说中间停得太久。她立刻摇头，说那段停顿就是她最想留下的东西。
wenwen|我以为已经放完了。不是不喜欢静，是不知道还要等什么。
mengyao|可我不想每次都先提醒观众“马上有重点”。那样一点都不意外。
n|我把耳机放回桌上。两个人谁也没笑，空气里突然有了我们都熟悉的硬。
wenwen|我刚才差点说，你是专业的，就按你的来。
mengyao|我刚才差点说，那下次不用你看了。|mengyao|expression-hesitant
n|她轻轻呼了一口气，把进度条往前挪。我们从头又看一次，这回谁都没有在中间打断。
mengyao|这里。如果让前面的声音拖进来，观众可能知道它还没完。但画面我还是想留长一点。
wenwen|可以试。我的意见也不用全留下，我想知道改完是什么样。
n|她照这个试了一次，又撤销一次。我看着她在两种节奏之间切换，慢慢分出哪些停顿是我不懂，哪些是真让人丢了方向。
mengyao|刚才你说等不下去，我第一反应是把前面都删了。删完又不甘心，好像只是为了快点让你点头。
n|她把光标移到那句解释字幕上，按了删除。回放到争执的空镜时，她的手还搭在撤销键旁，最后没有按。|mengyao|expression-serious
wenwen|少了那句，我反而想再看一次。
mengyao|这句我信。你已经盯着它六遍了，应该不是客气。
n|天色亮着，大厅的桌子还要让给下一班人。我们导出一个能完整播放的版本，文件名里谁也没写“最终最终”。
mengyao|第二十一天再看。三天以后还能喜欢，才知道不是今天剪晕了。
wenwen|好。那之前有消息，我也照样告诉你。
n|她抬眼看了我一下，没有追问是哪一种消息。我把椅子推回原位，出门时第一次不急着猜她有没有原谅我。
""", "ch3_mengyao_e_01")
chain("ch3_mengyao_e", "ch3_mengyao21", """
n|第二十一天下午，去见孟遥的路上，我又看了遍早晨的消息：贵阳那边收到了补交材料，录用尚未确认。
n|过去这种没有答案的消息，我会等它长成好消息再给人看。早晨拇指停在转发上时，我改为写了自己的话，告诉孟遥目前就是这样。
n|她中午才回：“看到了。下午的六十秒还看吗？”我回“看”，把手机放下，没有拿她回复的速度猜别的。
n|见面时，她拿来两只耳机。我提到早上的消息，她说当时在忙着交另一个活，看到后先记住了。
mengyao|我没法替你决定去不去。但知道你现在卡在哪儿，跟什么都不知道，是两回事。|mengyao|expression-serious
n|我们靠在屋檐内侧，把那段小片子又看了一遍。三天前争过的地方还在，这一次我没有急着等它过去。
""", "ch3_mengyao_payoff")
gate("ch3_mengyao_payoff", "ch3_mengyao21", [("ch3MengyaoWork", "image", "ch3_mengyao_pay_i_01")],
     "ch3_mengyao_pay_s_01")
chain("ch3_mengyao_pay_i", "ch3_mengyao21", """
mengyao|门的画面还是用了你的顺序。你说像有人刚刚出去，我后来越看越喜欢。|mengyao|expression-smile
wenwen|中间那段水声呢？
mengyao|我的。别想把整个导演位置都占了。
n|片尾出现两个人的名字，我负责的只是片段讨论。可那一点点也被写清了，我看完又把进度条拉回去。
""", "ch3_mengyao_f_01")
chain("ch3_mengyao_pay_s", "ch3_mengyao21", """
mengyao|结尾留了你录的关门声。开头是我那一下，两个人听见的同一条街，还真不一样。|mengyao|expression-smile
wenwen|我那段最后夹着一声打喷嚏，你剪掉了吧？
mengyao|剪了。本来有意保留，后来想到署名会很难写。
n|她指给我看“现场声音”后面的两个名字。我知道自己留下的不多，却第一次希望这一分钟慢一点过去。
""", "ch3_mengyao_f_01")
chain("ch3_mengyao_f", "ch3_mengyao21", """
wenwen|我想把它存着。也想再和你做下一段。
mengyao|可以。不过下一段别从怎么离开开始，我最近拍够门了。
n|我看向她。她没躲开，过了一会儿才把耳机线绕好，重新开口。|mengyao|expression-hesitant
mengyao|我还是会怕你又不说话。今天见到你，也确实高兴。两个都是真的。
wenwen|我也高兴。下次没消息，我不会把自己一起藏起来。
n|她点头，把自己的那只耳机收进包里，另一只还在我手上。我递回去，她却让我先别动。
mengyao|再听一次吧。刚才你一直在讲话，最后几秒都没听全。|mengyao|expression-smile
n|我戴好耳机，和她并排看向坡口。街上的人照常赶路，那一分钟终于从第一秒完整走到了最后一秒。
""", "end_ch3_mengyao")
end("end_ch3_mengyao", "ch3_mengyao21", "mengyao", "没有答案的消息也抵达了",
    "旧话谈完一段，并没有让旧伤立刻消失。我们争过一处剪辑，也共同留下了一分钟的新作品。我把尚未录用的消息告诉她，她说仍会害怕，也说今天见我很高兴。关系往前走了一步，靠的是接下来还会说话。",
    "第三章阶段收束 · 旧约已履行、新共同作品已完成；亲近正在重建，尚未确定恋爱关系。")

# 叶岚：接单准备不是一人兜底，私人愿望用实际交接腾出时间。
scene("ch3_yelan15", "把试单先搭出来", 15, "下午", "回声大厅", "lobby")
scene("ch3_yelan18", "钥匙也能交到别人手里", 18, "下午", "回声大厅", "lobby")
scene("ch3_yelan21", "下班以后没有流程表", 21, "下午", "回声门外的老街", "street")
chain("ch3_yelan_a", "ch3_yelan15", """
n|叶岚约我第十五天下午看一份布置方案。回声大厅那片空地已经获准借用，只做设备和流程演练，不接待外面的活动。
yelan|有人问我能不能接月底以后的执行小单。我没先说能，约了第十八天把方案给他们看。|yelan|expression-serious
wenwen|我负责看设备这块？
yelan|嗯，按我们之前说好的工时。我自己把流程说清，你不用替我接客户的话。
n|她在椅子上放了两张纸，分别写来宾位置和设备区。纸角还没压好，毛狼路过顺手扶住，被她叫住借了两分钟。
maolang|叶老师，我已经站成观众席了，后面是不是得收门票？|maolang|expression-smile
yelan|先别表演。你把那边的通道留出来，就能走了。
n|毛狼把椅子挪好，真的走了。叶岚看着他的背影，像刚想再交代一句，最后只在纸上划掉完成项。
""", "ch3_yelan_memory")
gate("ch3_yelan_memory", "ch3_yelan15", [("inventory", "full", "ch3_yelan_mem_f_01")],
     "ch3_yelan_mem_l_01")
chain("ch3_yelan_mem_f", "ch3_yelan15", """
yelan|上次清单整单让你接了，你后来才赶自己的材料。这回你给我一个能到场的时间，不用把空档全填上。
wenwen|今天到五点，第十八天下午另留两小时。够我负责的那部分。
""", "ch3_yelan_b_01")
chain("ch3_yelan_mem_l", "ch3_yelan15", """
yelan|上回你只做两小时，余项交得清楚，同事接上也没乱。这次我想按那种办法排。
wenwen|那我先写我能到场的时间。今天五点得走，第十八天下午另留两小时。
""", "ch3_yelan_b_01")
chain("ch3_yelan_b", "ch3_yelan15", """
n|她点头，把我的时间写上，接着给自己填了一整段。我看着那条几乎不留空的线，她已经先把笔停住。
yelan|我知道。总觉得写上自己的名字，就不用再解释。
wenwen|你第十八天要做讲解，不能同时守在每条线边上。
yelan|所以我得练这个。我人离开两分钟，事情还照样往下走。|yelan|expression-hesitant
n|她把交接页摊开，又看了看桌上的流程。我能帮她把一处做扎实，但没有时间两件都重新过一遍。
""", "ch3_yelan_choice")
choice("ch3_yelan_choice", "ch3_yelan15", "yelan", "我用这段时间帮她做好哪一种准备？", "ch3YelanSupport", [
    ("做一次缺席演练，让接手的人按交接页找齐东西。", "handoff", "ch3_yelan_pick_h_01", {}),
    ("听她完整讲一遍方案，再问客户可能会问的问题。", "pitch", "ch3_yelan_pick_p_01", {}),
])
chain("ch3_yelan_pick_h", "ch3_yelan15", """
n|她请同事照交接页找设备，自己退到桌子另一侧。第一个柜号就有两种理解，她的手立刻伸向那把钥匙。
wenwen|先让他找完，我们才知道哪句没写清。
n|她把钥匙放回桌上，等同事问出口，才在页边画了位置。第二次找，柜门很快就打开了。
yelan|原来不是每回都得我带着走。早知道刚才少紧张两分钟。|yelan|expression-smile
""", "ch3_yelan_c_01")
chain("ch3_yelan_pick_p", "ch3_yelan15", """
n|我坐在观众位置，先问如果客户临时添一个节目怎么办。她下意识说可以协调，说完又自己停住。
yelan|不对。我得先问添多长、用什么，再看人和时间。你再问一遍。
wenwen|那能不能顺便多加三个？
yelan|现在不能。先把原来那一个说清。……这句说出来也没那么难。|yelan|expression-smile
""", "ch3_yelan_c_01")
chain("ch3_yelan_c", "ch3_yelan15", """
n|到五点我收工具，她也没有临时再添一项。送我到大厅门口时，她忽然问我下班以后一般做什么。
wenwen|最近？找地方吃饭，走慢一点。
yelan|听起来简单。我先把第十八天过完，再学走慢一点。
wenwen|到时候我可以陪你。
n|她说了声好，比确认工时轻很多。我出门以后，还在想她那一瞬间没看流程表的眼神。
""", "ch3_yelan_d_01")
chain("ch3_yelan_d", "ch3_yelan18", """
n|第十八天下午，我提前十分钟到大厅。叶岚已经换过流程顺序，借用的设备各有标签，旧监听仍留在待查那一栏，没有混进去。
n|对方按约在线上看演示。叶岚把手机架稳，先说明这里只是布置演练，正式场地仍须确认。
yelan|现在给您看通道和设备位置。人手与时长按这版，临时变更另核。|yelan|expression-serious
n|她讲得不慢，也没有不停回头看我。演示到一半，回声同事拿来一张需要核对的收尾单，站在门边等她。
n|她差一点伸手去接，目光在那张纸上停住。接着，她指了指桌上留出的交接页，让同事先按编号查。|yelan|expression-hesitant
yelan|这一段你先核。找不到的圈出来，我演示结束再一起看。
n|同事点头走开，讲解继续。没有人因为她没亲自去开柜子就停在原地，我也终于能专心看自己的设备项。
n|对方提出多加一段互动。叶岚没说“尽量”，问完时长后，把需要多一人的部分明确写进待确认。
wenwen|设备这部分我核过，现有这套能支持原方案。新增那项要再看，今天不能一起算进去。
n|叶岚接过我的话，把报价和变更分开说明。那几分钟她像仍在熟悉一个新姿势，但没有又把所有事揽回自己名下。
n|通话结束，对方确认愿意继续对接，请她第二十一天发修改后的方案，尚未定正式订单。她盯着屏幕笑了一下，又坐回椅子。
yelan|我刚才有两句说得乱。他问到费用那儿，差点开始解释我自己为什么紧张。|yelan|expression-hesitant
wenwen|我没听出来后半段。
yelan|因为忍住了。你还以为我天生就会？
n|我摇头。她把杯里的水喝完，伸手去拿门边那张单，又看见同事已经圈出两处疑问，其他地方都核好了。
yelan|比我自己来回跑还快。就是心里总有一点不踏实。
wenwen|剩下这两处我陪你核。已经做完的，让他自己签。
n|她没回答，先把两处问题问清，然后让同事把钥匙按交接放回去。完成页上有三个名字，不再只是一条她自己的长线。
yelan|第二十一天方案交出去以后，留一小段时间吧。我想请你走走，不是帮我跑下一家。
n|我答应下来。她看着我，似乎还想给这次散步排一个起止时间，最后笑着把笔放下了。
""", "ch3_yelan_e_01")
chain("ch3_yelan_e", "ch3_yelan21", """
n|第二十一天下午，叶岚把修改方案发完，回声的当班同事也接走了收尾工作。我在门外等，她抱着一本薄薄的文件夹出来，没有再回头交代。
yelan|东西都带齐了。别问钥匙，我再摸一遍就又想回去了。|yelan|expression-hesitant
wenwen|那问今天想往哪边走？
n|她看了看左右，竟然比刚才确认报价还迟疑。站了几秒，她指向坡上，说那边路灯亮得慢，想看看天。
""", "ch3_yelan_payoff")
gate("ch3_yelan_payoff", "ch3_yelan21", [("ch3YelanSupport", "handoff", "ch3_yelan_pay_h_01")],
     "ch3_yelan_pay_p_01")
chain("ch3_yelan_pay_h", "ch3_yelan21", """
yelan|今天他照那张交接页自己找到了。上午还给我改了一个更好认的写法。
wenwen|那页可以退休了？
yelan|是我可以离开柜子远一点了。刚才他让我下班，语气跟我以前催别人一模一样。|yelan|expression-smile
n|她往回声门口瞥了一眼，却没有停脚。我看见她把想掏手机的手收了回来。
""", "ch3_yelan_f_01")
chain("ch3_yelan_pay_p", "ch3_yelan21", """
yelan|客户今天又问能不能“顺便”加一点。我照我们练的问完，他自己说那就下次。
wenwen|你听起来有点得意。
yelan|有一点。我以前总怕这一句说不好，人家就不找我了。今天发现，可以先把话讲完。|yelan|expression-smile
n|她把收到的确认消息给我看了一眼，随即锁屏。那一点得意没变成新的工作汇报，留在了她脸上。
""", "ch3_yelan_f_01")
chain("ch3_yelan_f", "ch3_yelan21", """
n|走过第一个路口，她问我饿不饿，又说附近哪家开到几点。我笑着提醒她，今晚不用负责照顾同行者。
yelan|我不是负责。我就是……想再走一段，又怕你饿。|yelan|expression-hesitant
wenwen|那我想和你再走一段。饿了我自己说。
n|她点头，脚步慢下来。路边的水从砖缝往下流，我们都得绕过同一块松动的砖，肩膀短暂靠近，又各自站稳。
yelan|我以前下班常想去坡口坐十分钟。真有空了又觉得坐着干什么，不如回去睡。
wenwen|今天可以先试十分钟。不好坐再走。
yelan|你怎么连闲逛都能说得像试机。
n|我自己也笑了。她这次没等我再问，主动指了指前面的屋檐，说就在那里停一会儿。|yelan|expression-smile
yelan|你第二十八天走之前，我还想这样见你一次。等我把班换好，自己来约。
wenwen|好。我等你约，也会把我的安排说清楚。
n|手机在她包里震了一次，她没有立即拿出来。我们并排站着，先把眼前那十分钟慢慢过完。
""", "end_ch3_yelan")
end("end_ch3_yelan", "ch3_yelan21", "yelan", "不用等人叫她的名字",
    "试单方案进入下一步，正式订单还没有落定。她让同事接走了工作，也主动留下与我散步的时间。谈起自己的愿望，她比安排一屋子人更笨拙一点；我想继续认识这样的叶岚，等她下一次主动来约。",
    "第三章阶段收束 · 执行方案已演练并交付修订，交接实际生效；下班后的关系继续展开。")

# 朋友与职业：没有恋爱也有完整主动选择，竞争不靠一人退出化解。
scene("ch3_solo15", "先把自己的名字写清", 15, "晚上", "师匠的维修柜台", "repair")
scene("ch3_solo18", "这次真的交到别人手里", 18, "晚上", "师匠的维修柜台", "repair")
scene("ch3_solo21", "各凭本事，也一起吃饭", 21, "夜间", "坡口面馆", "noodles")
chain("ch3_solo_a", "ch3_solo15", """
n|这几天的空档，我先留给自己的补充材料，也约毛狼把公开岗位要求一起过一遍。第十五天晚上，我们在师匠柜台边各占了一角。
maolang|你这份自我介绍，“能吃苦、肯学习”，是人就能往上贴。|maolang|expression-displeased
wenwen|你那份“具有丰富舞台经验”，下面列了三场，其中两场你搬音箱。
maolang|搬音箱也是站在舞台上。空间上没有问题。
n|他说完先笑，随后把那行划掉了。我也删掉两句套话，把这半个月自己具体做过的事情往里填。
n|两份申请各放在自己面前，我们只聊愿意拿出来的那部分，没有把竞争当成一种应该假装不存在的误会。
maolang|我还是想去。要是真撞上同一个位置，我不会因为这顿夜宵就让。
wenwen|还没吃呢，你先把我的饭钱扣了。
maolang|提前声明，便于你决定加不加蛋。|maolang|expression-smile
n|师匠把一套备用话筒和旧工作单放上桌。不是回声那套待查的监听；那一项依旧要按已约时间继续复查。
shijiang|我这边下一份固定维护报价，得把交付写得让人看懂。你俩拿这套正常机练，别只把材料写漂亮。|shijiang|expression-serious
wenwen|做一次从检查到交接的完整演练？
shijiang|第十八天给我看。做了哪一段，就写哪一段，没做过的别替自己补履历。
""", "ch3_solo_film_memory")
gate("ch3_solo_film_memory", "ch3_solo15", [("filmEnding", "people", "ch3_solo_film_p_01")],
     "ch3_solo_film_r_01")
chain("ch3_solo_film_p", "ch3_solo15", """
n|毛狼提起短片最后留下的收工身影，说自己头一次发现搬完最后一把椅子，也能算一个值得被看见的动作。
maolang|下次拍帅点。我那天蹲下去，好像在跟椅子求婚。
""", "ch3_solo_b_01")
chain("ch3_solo_film_r", "ch3_solo15", """
n|毛狼提起短片结尾的空房间，说拍之前他还在地上找漏掉的纸，生怕一颗瓜子壳抢走所有人的注意。
maolang|结果最后谁也看不出我多忙。伟大的幕后英雄通常没有镜头。
""", "ch3_solo_b_01")
chain("ch3_solo_b", "ch3_solo15", """
wenwen|那这回我给你记上，搬运与收场。英雄名字写本名。
n|他推了一下我的肩，力道很轻。师匠把桌子中间清出来，让我们选一个最想补上的短处，别又把整晚填满。
""", "ch3_solo_choice")
choice("ch3_solo_choice", "ch3_solo15", "maolang", "这次演练，我先把哪一件事做扎实？", "ch3SoloPractice", [
    ("练习向不懂设备的人说明检查结果。", "explain", "ch3_solo_pick_e_01", {}),
    ("整理一份别人能独立接手的交付记录。", "delivery", "ch3_solo_pick_d_01", {}),
])
chain("ch3_solo_pick_e", "ch3_solo15", """
n|毛狼扮演着急走的客户，刚听我讲完第一个术语就举手问：“所以我今晚到底能不能用？”
wenwen|原方案能用。新加那一路还没测，要另留时间。
maolang|这不就听懂了？你前面像要把我培养成你同事。
n|我把绕远的解释划掉，先说结论，再说条件。师匠没有点头夸我，只让我下一次也照这样讲。
""", "ch3_solo_c_01")
chain("ch3_solo_pick_d", "ch3_solo15", """
n|我把记录推给毛狼，让他只照纸上内容找配件。他一上手就拿错一个袋子，抬头瞪我。
maolang|你写“左边那袋”。你家左边会跟着人转啊？
n|我把位置换成编号，再把已测与未测分开。他第二次取对了，拿笔在漏写的数量后面画了一只特别丑的眼睛。
wenwen|知道了，检查员。下次请使用汉字。
""", "ch3_solo_c_01")
chain("ch3_solo_c", "ch3_solo15", """
n|快收工时，毛狼问我第二十八天住处看了没有。我说还在比较，他把公开能查到的交通页发过来，没追问我的面试材料。
maolang|我行程还没定，定了再说。别指望我给你拖箱子。
wenwen|我也不预支你的肩膀。
n|我们各自保存文件，约好第十八天再来。没有谁退出，那一点能继续并肩做事的地方却比前几天宽了。
""", "ch3_solo_d_01")
chain("ch3_solo_d", "ch3_solo18", """
n|第十八天晚上，师匠空出柜台给我们演练。我一进门先把自己的东西摆齐，毛狼看了看，说这阵势像准备接受搜查。
wenwen|不许临时加题。
maolang|那还有什么意思。
n|我们从收件信息开始走一遍。正常机的检查结果清楚，真正卡住的却是最后交接：他问不在柜台时找谁，我写了自己的名字。
shijiang|第二十八天以后呢？你人在贵阳，东西不会跟着你过去。|shijiang|expression-serious
n|我停住。这不是一道要猜的题；我已经跟大家说了行程，却仍习惯把每个后续都留给自己处理。
wenwen|我得把需要接的人和时间写上，先问对方能不能接，不能自己填完算数。
maolang|那你现在问。我月底这几天能来，但我定了行程，你也得再换人。
n|我们把可接时段列清，交给师匠确认。师匠接下剩下的维护安排，让我把报价草页重做一处，终于愿意往下看。
n|到毛狼介绍现场工作时，他把“出现情况及时处理”说了三遍。我问具体是哪一种，他脸上的笑慢慢收起来。
maolang|我知道听着空。但真写搬椅子、带人走流程，感觉又不像什么本事。|maolang|expression-downcast
wenwen|第十二天你挨个联系了已知的转发者，没回复的也记着。写清你怎么处理、还差什么，比“及时处理”有用。
maolang|发错片那段也写？
wenwen|你愿意写，就把改了什么一起写。不想写进申请，也别装自己以后不会出错。
n|他盯着屏幕一会儿，开始改那段经历。我没有替他组织措辞，只把自己听不明白的地方问出来。
n|最后师匠把我们确认过的交接表留了下来，说明会放进固定维护报价的附件，具体工时按已经做完的记。
shijiang|这张能用。下次设备不一样，别直接照抄。|shijiang|expression-serious
maolang|听见没，最高评价：能用。
wenwen|比我原来那份“积极上进”高得多。
n|我把自己的最终材料存好。第十八天夜里，没有录用通知突然掉下来，桌上却确实多了别人接得住的东西。
""", "ch3_solo_e_01")
chain("ch3_solo_e", "ch3_solo21", """
n|第二十一天晚上，我们到面馆吃饭。师匠迟了几分钟，坐下前先确认两人的材料都各自提交妥当，才把手机放在桌角。
maolang|我提交完又发现一个标点，盯了十分钟。后来想明白了，他们不是招逗号。
wenwen|我刷新了三次邮箱。第三次连广告都没有。
shijiang|面来了。先别把录用等在碗里。|shijiang|expression-smile
n|我把手机翻过去，毛狼照着做了。老板问加不加蛋，他指向我，说今天这位的工作记录终于能见人了。
""", "ch3_solo_payoff")
gate("ch3_solo_payoff", "ch3_solo21", [("ch3SoloPractice", "explain", "ch3_solo_pay_e_01")],
     "ch3_solo_pay_d_01")
chain("ch3_solo_pay_e", "ch3_solo21", """
shijiang|昨天客户问维护内容，我按你那种先说能做什么的顺序讲，少来回问一轮。
wenwen|那是不是可以写进我的经历？
shijiang|写你实际做的说明演练和那页摘要。客户是我接的，别顺手抢走。
maolang|完了，我刚准备帮你写“独立拿下大客户”。
""", "ch3_solo_f_01")
chain("ch3_solo_pay_d", "ch3_solo21", """
shijiang|你那页编号表，今天别人照着把配件找齐了。没有打电话问我左边是哪边。
maolang|丑话说前面，我画的眼睛也有功劳。
wenwen|已经删了，正式文件上不能留恐吓标记。
n|毛狼说我过河拆桥，师匠喝着水笑了一下。我知道那份记录真被别人用过，心里比看到一句空夸还踏实。
""", "ch3_solo_f_01")
chain("ch3_solo_f", "ch3_solo21", """
n|吃到一半，毛狼忽然问，如果最后只录用一个，我们还吃不吃这顿。他看着碗，没再拿笑话把问题盖住。
wenwen|吃。落下那个可以先骂两句，但别失联。|wenwen|expression-serious
maolang|你是说你自己吧。
wenwen|先给自己报备。真没成，我肯定不太高兴。
n|他点点头，说自己也是。我们没有提前把所有难受都讲成没关系，只约好结果来了各自说。
n|师匠吃完先走，临走前把月底的维护安排发给我们。清单里有我的交付，也有毛狼能接的那几段，没写成谁替谁兜底。
maolang|第二十四天再吃？不聊岗位。我想找人听我那个新笑话，免费内测。
wenwen|你至少先保证能退场。
maolang|做不到。友情就是这点缺点。
n|我答应了。回去的坡路还湿着，车票还在手机里；这一周我没有急着开始恋爱，也没有因此少过一种值得期待的日子。
""", "end_ch3_solo")
end("end_ch3_solo", "ch3_solo21", "wenwen", "各凭本事，也一起吃饭",
    "申请材料已经提交，交付记录也被真正用上。毛狼仍想争同一个机会，我仍会怕输；我们约好结果来了照说，没结果时照样吃饭。这段时间没有被写成等待恋爱的空白，我开始能带着自己的名字往前走。",
    "第三章阶段收束 · 职业准备和一次可用交付已完成；录用未定，朋友关系有独立的发展与约定。")

# 黄球球：有限空间内的双向认识，不用谜底或死亡替代关系。
scene("ch3_qiu15", "今天先叫我的名字", 15, "夜间", "回声 · 已结束接待的空包厢", "room")
scene("ch3_qiu18", "带来一件普通的小事", 18, "夜间", "回声 · 已结束接待的空包厢", "room")
scene("ch3_qiu21", "这次由她先问", 21, "夜间", "回声 · 已结束接待的空包厢", "room")
chain("ch3_qiu_a", "ch3_qiu15", """
n|第十五天夜里，我按先前约好的空档回到包厢。接待已经结束，叶岚确认过使用时间，我也记好了离开的点。
n|我推门时惯性地瞥向设备，又先把目光收回来。调音台旁的黄球球缓缓转向我，抬起一只小手。|huangqiuqiu|expression-smile
wenwen|晚上好，黄球球。
huangqiuqiu|晚上好。今天我排在那张标签前面了，进步很快。|huangqiuqiu|expression-smile
wenwen|我记得。那张纸也没请我坐下来聊十分钟。
n|我笑了一下，把工具包放到门边。她没有往标签那边看，只问我今天是从哪条路走过来的。
wenwen|坡口，面馆那边。
huangqiuqiu|那边今天有没有吵架？
wenwen|我没听见。倒有人很认真地讨论面该不该加醋。
huangqiuqiu|这不就是吵架的准备阶段。
n|我拉过椅子坐下，才发现她今晚一句来历也没提。她想知道的都是具体小事，连我鞋底为什么多了一块泥都问了。
wenwen|绕水坑的时候踩的。躲开大的，没看见小的。
huangqiuqiu|聪明。解决了一个湿脚的问题，增加了一个刷鞋的问题。|huangqiuqiu|expression-smile
n|她说完盯着我看。我以为自己脸上也沾了泥，抬手擦了一下，她却让我的手先停住。
huangqiuqiu|你今天有点累。这个不用猜，你坐下以后肩膀都掉了一截。
wenwen|是有一点。白天大家都在准备下一步。我第二十八天要去贵阳，工作还没结果，也一直在想这件事。
n|她轻轻点头，没有说她早就知道。她听到了我说出口的安排，没说出来的部分，仍然等我自己讲。
huangqiuqiu|第十八天你还来吗？别带答案。带一件你自己愿意讲的小事。
""", "ch3_qiu_choice")
choice("ch3_qiu_choice", "ch3_qiu15", "huangqiuqiu", "下一次见面，我想带什么给她？", "ch3QiuShare", [
    ("带一小段我在街上听见的声音，让她挑喜欢的。", "sound", "ch3_qiu_pick_s_01", {}),
    ("讲一件我自己也觉得丢脸的日常小事。", "story", "ch3_qiu_pick_t_01", {}),
])
chain("ch3_qiu_pick_s", "ch3_qiu15", """
wenwen|我录一段屋檐落雨，或者卷帘门的声音。只录环境，不把别人说话带进来。
huangqiuqiu|别故意找最动听的。你自己会停下来听的就行。
wenwen|那我得先学会停下来。
huangqiuqiu|已经会了。你刚才在门口看设备看得可久。
""", "ch3_qiu_b_01")
chain("ch3_qiu_pick_t", "ch3_qiu15", """
wenwen|我讲今天差点坐错车的事。还没想好从哪儿讲比较不丢脸。
huangqiuqiu|就从最丢脸的地方讲，节省铺垫。
wenwen|你还没听就开始喜欢了？
huangqiuqiu|我喜欢的是你终于也有故事。主角不必每次都是一个黄色的圆。
""", "ch3_qiu_b_01")
chain("ch3_qiu_b", "ch3_qiu15", """
n|走廊有人推车经过，她等轮子的响动远了，才告诉我今晚想先聊到这里。那句结束说得很平常。
wenwen|好。第十八天还是我先问能不能进来。
huangqiuqiu|嗯。那天你讲，我听。别让我只知道你还有什么没修好。
n|我把椅子推回原位。门合上以前，她抬起一只小手。我也挥了一下，没有把最后几秒都花在盯着设备上。
""", "ch3_qiu_c_01")
chain("ch3_qiu_c", "ch3_qiu18", """
n|第十八天夜里，我再次确认包厢的空闲时间才进去。黄球球仍在调音台旁，我这次先叫了她的名字。
huangqiuqiu|通过。现在开始检查来宾有没有带敷衍的礼物。|huangqiuqiu|expression-smile
wenwen|没有礼物，只有一件普通小事。
huangqiuqiu|普通也可以很难得。你坐。
n|我坐在前次那把椅子上，打开手机。她抬起头，一副准备挑错的神情，反而让我没那么紧张。
""", "ch3_qiu_mid")
gate("ch3_qiu_mid", "ch3_qiu18", [("ch3QiuShare", "sound", "ch3_qiu_mid_s_01")], "ch3_qiu_mid_t_01")
chain("ch3_qiu_mid_s", "ch3_qiu18", """
n|我放了一段屋檐雨声。前面很匀，后面突然快了两下，是积水终于从伞沿冲下去，我没来得及停录。
wenwen|这里录坏了。我本来想重来。
huangqiuqiu|我喜欢这两下。前面像在数数，这里像终于数烦了。|huangqiuqiu|expression-smile
n|我又放一次，这回没有提前解释哪里坏了。她用小手在脸边轻点，跟上那两下以后，低低笑了一声。
wenwen|我还以为你会想听更远一点的地方。
huangqiuqiu|现在这段就很好。你今天站在这里听过，我现在也听见了。
""", "ch3_qiu_d_01")
chain("ch3_qiu_mid_t", "ch3_qiu18", """
n|我告诉她，我在站牌下看了半天线路，最后问旁边的人车往哪边走。对方指了指我的背后：你想去的店就在那儿。
huangqiuqiu|所以你还排了队？
wenwen|排了。为了显得自己只是顺便问路，我又在原地站了两分钟。
n|她盯着我，先是很轻地哼了一声，后来终于笑起来。我也没继续给自己找理由，等她笑完。
huangqiuqiu|下回可以直接转身。你离开队伍以后，大家的人生还能继续。|huangqiuqiu|expression-smile
wenwen|谢谢，受教。我当时最希望有人替我宣布这句。
""", "ch3_qiu_d_01")
chain("ch3_qiu_d", "ch3_qiu18", """
n|聊到一半，设备里有一下很轻的杂响。我下意识转头，右手已经碰到门边的工具包带子。
huangqiuqiu|你今天要继续查那个，也可以说。我不想聊一半，忽然只剩我自己等。|huangqiuqiu|expression-downcast
wenwen|对不起。我刚才听见声音就走神了。今晚复查不是这个时间，现在先把你的话听完。
n|她没马上接下去，脸上的笑也没立刻回来。我把手机扣在膝上，等她决定还想不想继续。
huangqiuqiu|我想问，你真要去贵阳的话，会不会有时候也只是心情不好，不想回消息？
wenwen|会。我以前还觉得，没好消息就没有必要说话。
huangqiuqiu|那你可以说“今天不想讲”。我听得懂这句，比一个一直不响的头像好猜。|huangqiuqiu|expression-serious
n|她把话说完，又看了一眼我。那一刻我没有找到能让一切都稳妥的回答，只能承认自己还在学。
wenwen|我会先把第二十一天这次约定做好。后面的安排，变化了再直接告诉你。
huangqiuqiu|好。那天我也有一件要问你的事。不是考试，别提前写满三页。
n|我想追问，她却把两只小手重新托回腮边，说今晚的好奇心额度用完了。我只好把问题留到下次。
n|离开时我看了一眼时钟，没有超出约好的时间。旧设备的原因仍未查明，但这次见面已经不是等一个谜底的空档。
""", "ch3_qiu_e_01")
chain("ch3_qiu_e", "ch3_qiu21", """
n|第二十一天夜里，我到门外先发了一句“现在方便吗”。黄色头像很快回“方便，记得把那把椅子转正”。
n|我进门叫她的名字，低头才发现椅子果然偏着。黄球球看着我挪好它，露出一点像是早有准备的笑。|huangqiuqiu|expression-smile
huangqiuqiu|今天轮到我先问。你最近有没有一件做得不错，却一直没提的小事？
wenwen|这题比上次难。我差点又想答“没有”。
huangqiuqiu|那就想一会儿。我没装倒计时。
n|我想起师匠留下的那份记录，也想起自己这些天发出的几条没有结果的消息。它们太小，小到我从没当成值得讲的事。
wenwen|有人照我的编号找到了东西，没再打电话来问。还有，我这次没有等好消息才告诉人自己的安排。
huangqiuqiu|听起来都挺好。你看，也不一定非得带一件丢脸的来。
n|她说完，主动提起第十八天我带来的小事。这次不是我提醒她，连我停顿过的地方她都记住了。
""", "ch3_qiu_payoff")
gate("ch3_qiu_payoff", "ch3_qiu21", [("ch3QiuShare", "sound", "ch3_qiu_pay_s_01")], "ch3_qiu_pay_t_01")
chain("ch3_qiu_pay_s", "ch3_qiu21", """
huangqiuqiu|那段雨声，你还留着吗？我想再听最后两下，今天不用从头解释。
n|我找到原文件，放在我们之间。她听到快起来的地方就轻轻点了两下，这回我的指尖也跟着落在椅沿。
wenwen|你下次想听什么？
huangqiuqiu|你选。然后你也挑一段最喜欢的告诉我，别每次只问我的答案。
""", "ch3_qiu_f_01")
chain("ch3_qiu_pay_t", "ch3_qiu21", """
huangqiuqiu|你后来再经过那个站牌，转身了吗？
wenwen|转了。没排队，少丢两分钟的人。
n|她轻轻笑了一声，然后说自己今天的问题其实想了很久，怕问出来像要审我的一整天。
wenwen|我喜欢你问。不知道怎么答的时候，我就想一会儿。
""", "ch3_qiu_f_01")
chain("ch3_qiu_f", "ch3_qiu21", """
n|那一点笑慢慢停下来。离第三十天越来越近，我仍不知道她与旧设备到底有什么联系，也不知道之后的空间会怎样安排。
wenwen|月底停业的事，我没有忘。知道能确定的安排，我会告诉你。现在还不知道的，我不想装成知道。
huangqiuqiu|我也是。有能说清的，我会说。今天还有几分钟，我想先听你自己最喜欢刚才哪一件事。|huangqiuqiu|expression-serious
n|我认真选了一个，她听完说自己会选另一个。我们为这种没有标准答案的小事争了半分钟，谁都没把对方说服。
huangqiuqiu|第二十四天，还来吗？我想继续认识你，不只听你查出什么问题。|huangqiuqiu|expression-hesitant
wenwen|来。时间照旧先确认，到时候从你想讲的开始。
huangqiuqiu|也可以从你想讲的开始。文文，你这个人比你的工具包难打开一点。
n|我笑起来，向她道了晚安。她先叫了一次我的名字，再回我一句晚安。走出房门以后，那句话一直比设备的杂音清楚。
""", "end_ch3_huangqiuqiu")
end("end_ch3_huangqiuqiu", "ch3_qiu21", "huangqiuqiu", "这次由她先问",
    "她仍是调音台旁那个托腮的黄色圆球，来历与设备的联系仍未解开。我们却已经有了一件会共同想起的小事，也有了她主动提出的下一次见面。我不再只问她是什么，她也开始认真问我是怎样的人。",
    "第三章阶段收束 · 第二十四天的再次见面已经约定；月底停业将近，旧设备与她的来历仍有未解之处。")

OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {OUT}: {len(data['scenes'])} scenes, {len(N)} nodes, {len(data['ends'])} endings")
