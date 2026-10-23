// v0.1 剧情定稿，沿用 R2 数据契约：显式节点、离线文本；条件只由 gate 与 requires 表达。
window.RAIN_STORY = {
  "version": 1,
  "title": "毕节，雨停之前",
  "start": "s1_arrive_01",
  "previewChoice": "c6",
  "characters": {
    "wenwen": {
      "name": "文文",
      "age": 23,
      "image": "assets/char-wenwen.png",
      "color": "#99b7cb",
      "presentation": "human"
    },
    "xiaoman": {
      "name": "罗小满",
      "age": 22,
      "image": "assets/char-xiaoman.png",
      "color": "#d48768",
      "presentation": "human"
    },
    "zhouzhi": {
      "name": "周栀",
      "age": 25,
      "image": "assets/char-zhouzhi.png",
      "color": "#69b9b1",
      "presentation": "human"
    },
    "mengyao": {
      "name": "孟遥",
      "age": 23,
      "image": "assets/char-mengyao.png",
      "color": "#d2b693",
      "presentation": "human"
    },
    "yelan": {
      "name": "叶岚",
      "age": 27,
      "image": "assets/char-yelan.png",
      "color": "#9ba7bc",
      "presentation": "human"
    },
    "maolang": {
      "name": "毛狼",
      "age": 24,
      "image": "assets/char-maolang.png",
      "color": "#9ba471",
      "presentation": "human"
    },
    "shijiang": {
      "name": "师匠",
      "age": 32,
      "image": "assets/char-shijiang.png",
      "color": "#7391b4",
      "presentation": "human"
    },
    "huangqiuqiu": {
      "name": "黄球球",
      "age": 24,
      "image": "assets/char-huangqiuqiu.png",
      "color": "#e5bf45",
      "presentation": "orb"
    }
  },
  "backgrounds": {
    "street": "assets/bg-street.png",
    "repair": "assets/bg-repair.png",
    "lobby": "assets/bg-lobby.png",
    "room": "assets/bg-room.png",
    "noodles": "assets/bg-noodles.png",
    "salon": "assets/bg-salon.png"
  },
  "scenes": {
    "s1": {
      "title": "雨把归期写湿了",
      "day": 1,
      "time": "下午",
      "location": "毕节 · 老街坡口",
      "bg": "street"
    },
    "s2": {
      "title": "先查问题，再给承诺",
      "day": 1,
      "time": "晚上",
      "location": "师匠的维修柜台",
      "bg": "repair"
    },
    "s3": {
      "title": "夜宵摊的末班车",
      "day": 3,
      "time": "夜间",
      "location": "老街夜宵摊",
      "bg": "noodles"
    },
    "s4": {
      "title": "下班以后，名字归自己",
      "day": 4,
      "time": "凌晨",
      "location": "回声门外",
      "bg": "street"
    },
    "s5": {
      "title": "镜子前也有正经事",
      "day": 5,
      "time": "下午",
      "location": "罗小满工作的理发店",
      "bg": "salon"
    },
    "s6": {
      "title": "汤面可以分开调味",
      "day": 6,
      "time": "夜间",
      "location": "坡口面馆",
      "bg": "noodles"
    },
    "s7": {
      "title": "镜头没有替人道歉的功能",
      "day": 7,
      "time": "下午",
      "location": "老街屋檐下",
      "bg": "street"
    },
    "s8": {
      "title": "清单最后一格",
      "day": 8,
      "time": "晚上",
      "location": "回声 · 空包厢",
      "bg": "room"
    },
    "s9": {
      "title": "开拍以前",
      "day": 10,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby"
    },
    "s10": {
      "title": "还没说完的晚安",
      "day": 10,
      "time": "夜间",
      "location": "回声门外的屋檐",
      "bg": "street"
    }
  },
  "nodes": {
    "s1_arrive_01": {
      "id": "s1_arrive_01",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "大巴驶走时，水溅上我的鞋面。三年没回毕节，雨倒没生分，先替我检查了一遍鞋底。",
      "next": "s1_arrive_02"
    },
    "s1_arrive_02": {
      "id": "s1_arrive_02",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "站牌玻璃里，短寸被压平，圆脸陷在旧夹克里。二十三岁的文文，带回来一个箱子和一包怕湿的工具。",
      "next": "s1_arrive_03",
      "cg": "cg01"
    },
    "s1_arrive_03": {
      "id": "s1_arrive_03",
      "type": "line",
      "scene": "s1",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "回来了。接风也不用连盆端吧。",
      "next": "s1_arrive_04",
      "cg": "cg01"
    },
    "s1_arrive_04": {
      "id": "s1_arrive_04",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "上一份工作的尾款刚到账。我划走提醒，下面露出贵阳的车票。日期是返乡后的第二十八天。",
      "next": "s1_arrive_05"
    },
    "s1_arrive_05": {
      "id": "s1_arrive_05",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "演出队还没回简历，票先买了。退票钱我算过，不多。算完，就像已经替自己想清了去处。",
      "next": "s1_arrive_06"
    },
    "s1_arrive_06": {
      "id": "s1_arrive_06",
      "type": "line",
      "scene": "s1",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "妈，我到老街了。先去看看活，晚饭留一碗。",
      "next": "s1_arrive_07"
    },
    "s1_arrive_07": {
      "id": "s1_arrive_07",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "母亲问工具包里的本子湿没湿。我摸了摸，说没有。她没问我怎么提前回来了，备好的解释反而没处放。",
      "next": "s1_arrive_08"
    },
    "s1_arrive_08": {
      "id": "s1_arrive_08",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "坡上的“回声”少亮一笔。停业通知被雨打卷，寄存物品领取期限下面，是返乡后第三十天的日期。",
      "next": "s1_arrive_09"
    },
    "s1_arrive_09": {
      "id": "s1_arrive_09",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "我又看一眼车票。这次离开会比这里关门早两天——如果我真照那张票走。",
      "next": "s1_arrive_10"
    },
    "s1_arrive_10": {
      "id": "s1_arrive_10",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼发来柜台定位：“有活，带手，别只带嘴。”我打了“第二十八天要去贵阳”，又删掉。",
      "next": "s1_arrive_11"
    },
    "s1_arrive_11": {
      "id": "s1_arrive_11",
      "type": "line",
      "scene": "s1",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "回来了，先接点活。嘴留给你。",
      "next": "s1_arrive_12"
    },
    "s1_arrive_12": {
      "id": "s1_arrive_12",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "我锁上屏幕，把箱子寄在小卖部。等有回信再说吧，没定的事，总不能让大家跟着猜。",
      "next": "s2_counter_01"
    },
    "s2_counter_01": {
      "id": "s2_counter_01",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼贴完话筒序号，抬头看我。微卷的头发被雨压塌，嘴倒还精神。",
      "next": "s2_counter_02"
    },
    "s2_counter_02": {
      "id": "s2_counter_02",
      "type": "line",
      "scene": "s2",
      "speaker": "maolang",
      "character": "maolang",
      "text": "文师傅，归乡限量版。带工具了？",
      "next": "s2_counter_03"
    },
    "s2_counter_03": {
      "id": "s2_counter_03",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "带了。没带给你修嘴的。",
      "next": "s2_counter_04"
    },
    "s2_counter_04": {
      "id": "s2_counter_04",
      "type": "line",
      "scene": "s2",
      "speaker": "maolang",
      "character": "maolang",
      "text": "回声缺临时维护。叶岚等你试机，按班结。人我给你介绍，价你自己谈。",
      "next": "s2_counter_05"
    },
    "s2_counter_05": {
      "id": "s2_counter_05",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "他把话筒按单号摆齐，拿手机拍照。屏幕上刚才还是贵阳演出队的招聘页。",
      "next": "s2_recruit_01"
    },
    "s2_counter_06": {
      "id": "s2_counter_06",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "师匠用笔压住故障单。黑框眼镜后，他先看机器，再看我。",
      "next": "s2_counter_07",
      "cg": "cg09"
    },
    "s2_counter_07": {
      "id": "s2_counter_07",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "查过再填。回声你自己交接，我按约复核。",
      "next": "s2_counter_08",
      "cg": "cg09"
    },
    "s2_counter_08": {
      "id": "s2_counter_08",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "柜台另一头摊着固定维护的报价草页。他划掉“临时上门”，重新算路程。",
      "next": "s2_counter_09",
      "cg": "cg09"
    },
    "s2_counter_09": {
      "id": "s2_counter_09",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "我想接固定维护，不能每晚等人叫。有不明白的现在问，别等关门。",
      "next": "s2_notes_01",
      "cg": "cg09"
    },
    "s2_counter_10": {
      "id": "s2_counter_10",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "行，空着那格先别勾。",
      "next": "s2_counter_11",
      "cg": "cg09"
    },
    "s2_counter_11": {
      "id": "s2_counter_11",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "柜台旁是回声送修的旧监听设备。测试灯亮着，旋钮没动，扬声口忽然响了三下。毛狼挪椅子的声音压过来，我刚抬头，又听见半句女声。",
      "next": "s2_counter_12"
    },
    "s2_counter_12": {
      "id": "s2_counter_12",
      "type": "line",
      "scene": "s2",
      "speaker": "陌生的声音",
      "character": null,
      "text": "能不能……先让我说……",
      "next": "s2_counter_13"
    },
    "s2_counter_13": {
      "id": "s2_counter_13",
      "type": "line",
      "scene": "s2",
      "speaker": "maolang",
      "character": "maolang",
      "text": "旧录音吧。这断句，比我的提词器还会吊胃口。",
      "next": "s2_counter_14"
    },
    "s2_counter_14": {
      "id": "s2_counter_14",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "先别替它定原因。测试还剩两分钟，已确认的也要登记完。",
      "next": "h1"
    },
    "h1": {
      "id": "h1",
      "type": "choice",
      "scene": "s2",
      "character": null,
      "text": "测试结束前，我怎样处理这段声音？",
      "flag": "qiuSignal",
      "choices": [
        {
          "label": "先听完，把三拍节奏记进维修本。",
          "value": "record",
          "next": "s2_record_01"
        },
        {
          "label": "先登记明确故障，把声音留待复查。",
          "value": "work",
          "next": "s2_work_01"
        }
      ]
    },
    "s2_record_01": {
      "id": "s2_record_01",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "我先没合本子。扬声口又响了一遍：轻、轻——停半拍——重。我在纸上画了三个点，把第二、第三个点之间的空隙特意留宽。",
      "next": "s2_record_02"
    },
    "s2_record_02": {
      "id": "s2_record_02",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "那半句话没有再接下去。我在记号旁照抄听见的几个字，注明时间和“来源未明”，再把接头松动的位置补进故障栏。",
      "next": "s2_record_03"
    },
    "s2_record_03": {
      "id": "s2_record_03",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "这回留下的是现象。原因等复查，走吧，回声那边还等着试机。",
      "next": "s2_trial_01"
    },
    "s2_work_01": {
      "id": "s2_work_01",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "我先核接头型号，把松动的位置写清。那句话没再响，我只在另一行记下“三下轻响、半句人声”，圈出待复查。",
      "next": "s2_work_02"
    },
    "s2_work_02": {
      "id": "s2_work_02",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "接头这项能确认。声音还没查清，我先不写原因。",
      "next": "s2_work_03"
    },
    "s2_work_03": {
      "id": "s2_work_03",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "行，先交清这些。待查的留着，下回接着看。",
      "next": "s2_trial_01"
    },
    "s2_trial_01": {
      "id": "s2_trial_01",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "到回声时，叶岚用夹板挡着滴水的伞尖。西装袖口沾着搬箱子的灰，她指了间空包厢。",
      "next": "s2_trial_02",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_02": {
      "id": "s2_trial_02",
      "type": "line",
      "scene": "s2",
      "speaker": "yelan",
      "character": "yelan",
      "text": "叶岚，领班。先试两小时，照算工时。毛狼说你能查接线？",
      "next": "s2_trial_03",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_03": {
      "id": "s2_trial_03",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "接线和基础排查。要换板子的，我先停下跟你说。",
      "next": "s2_trial_04",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_04": {
      "id": "s2_trial_04",
      "type": "line",
      "scene": "s2",
      "speaker": "yelan",
      "character": "yelan",
      "text": "客人在用的机器别动。",
      "next": "s2_trial_05",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_05": {
      "id": "s2_trial_05",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "周栀拿来两只话筒，把红点那只放远。青色袖口卷了两道。",
      "next": "s2_trial_06",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_06": {
      "id": "s2_trial_06",
      "type": "line",
      "scene": "s2",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我叫周栀。红点这只会刺，另一只没事。我唱歌吃饭，不兼练躲啸叫。",
      "next": "s2_trial_07",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_07": {
      "id": "s2_trial_07",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "知道了，今晚不加运动项目。",
      "next": "s2_trial_08",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_08": {
      "id": "s2_trial_08",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "她试半句，我换线再测。“好了”出口前，我又听了一遍，叶岚才落笔。",
      "next": "s2_trial_09",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_recruit_01": {
      "id": "s2_recruit_01",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那边还没回我。先把眼前的活接住。",
      "next": "s2_recruit_02"
    },
    "s2_recruit_02": {
      "id": "s2_recruit_02",
      "type": "line",
      "scene": "s2",
      "speaker": "maolang",
      "character": "maolang",
      "text": "设备要求往下翻，还有场务那页。别只看第一屏。",
      "next": "s2_recruit_03"
    },
    "s2_recruit_03": {
      "id": "s2_recruit_03",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "他说得太顺。没等我问，手机已经扣住。我以为他替我看得仔细，喊了声谢。",
      "next": "s2_counter_06"
    },
    "s2_notes_01": {
      "id": "s2_notes_01",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这项只写偶发杂音，没写什么时候。我先补问。",
      "next": "s2_counter_10"
    },
    "s2_trial_09": {
      "id": "s2_trial_09",
      "type": "line",
      "scene": "s2",
      "speaker": "yelan",
      "character": "yelan",
      "text": "停业前，我想给回声留段记录，拍它还开着的时候。先帮我看看哪些设备能用。",
      "next": "s2_trial_10",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_10": {
      "id": "s2_trial_10",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先列能用和待查的。那套旧监听不算。片子什么时候做？",
      "next": "s2_trial_11",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_11": {
      "id": "s2_trial_11",
      "type": "line",
      "scene": "s2",
      "speaker": "yelan",
      "character": "yelan",
      "text": "先问人，再凑时间。今天不赶这个。",
      "next": "s2_trial_12",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_12": {
      "id": "s2_trial_12",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "我在本子背面写下“短片”，手机里的车票仍没拿出来。",
      "next": "s3_stall_01",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s3_stall_01": {
      "id": "s3_stall_01",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "第三天夜里，塑料帘扑进来，我伸手救蘸水。对面的罗小满先笑出了声。",
      "next": "s3_stall_02"
    },
    "s3_stall_02": {
      "id": "s3_stall_02",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你小时候抢最后一块洋芋，也是这个姿势。",
      "next": "s3_stall_03"
    },
    "s3_stall_03": {
      "id": "s3_stall_03",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "她把砖红外套往椅背一搭，分区练习图压在碗边。手背有一点没擦掉的染膏。",
      "next": "s3_stall_04"
    },
    "s3_stall_04": {
      "id": "s3_stall_04",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "成年了，能不能更新一下证据？",
      "next": "s3_stall_05"
    },
    "s3_stall_05": {
      "id": "s3_stall_05",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "盘子刚端上来，小满就把练习图挪开，免得蘸水溅到纸上。图里的头画得很圆，耳朵一高一低。",
      "next": "s3_stall_06",
      "cg": "cg13"
    },
    "s3_stall_06": {
      "id": "s3_stall_06",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "店里这次考核，我想自己剪完一颗头，不用师傅半路接剪刀。",
      "next": "s3_stall_07",
      "cg": "cg13"
    },
    "s3_stall_07": {
      "id": "s3_stall_07",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "一颗？你们还兼卖白菜？",
      "next": "s3_stall_08",
      "cg": "cg13"
    },
    "s3_stall_08": {
      "id": "s3_stall_08",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "一位，尊贵的顾客。",
      "next": "s3_stall_09",
      "cg": "cg13"
    },
    "s3_stall_09": {
      "id": "s3_stall_09",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "我提起回声想留记录短片。她把图扣住，说等练像样了再谈。我还没接话，她先看过来。",
      "next": "s3_stall_10"
    },
    "s3_stall_10": {
      "id": "s3_stall_10",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你这回待多久？能不能等到我考完？",
      "next": "s3_stall_11"
    },
    "s3_stall_11": {
      "id": "s3_stall_11",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "回声那边还有一堆设备，我先把眼前的活做完。",
      "next": "s3_stall_12"
    },
    "c1": {
      "id": "c1",
      "type": "choice",
      "scene": "s3",
      "character": "xiaoman",
      "text": "饭后，我怎么安排这一段路？",
      "flag": "ride",
      "choices": [
        {
          "label": "和小满走到岔路口，再去核接头型号。",
          "value": "walk",
          "next": "s3_walk_01"
        },
        {
          "label": "一起确认车牌，叫车送她回去。",
          "value": "taxi",
          "next": "s3_taxi_01"
        },
        {
          "label": "说明取件时间，先去办事。",
          "value": "leave",
          "next": "s3_leave_01"
        }
      ]
    },
    "s3_walk_01": {
      "id": "s3_walk_01",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "问过老板还能等多久，我才陪她上坡。她把练习图撑在伞下，一直折着的那一角终于展开了。",
      "next": "s3_walk_02",
      "bg": "street",
      "location": "老街岔路口"
    },
    "s3_walk_02": {
      "id": "s3_walk_02",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "练习头不会突然问我“这边是不是歪了”。真人会。我一紧张，就老想再修一点。",
      "next": "s3_walk_03",
      "bg": "street",
      "location": "老街岔路口"
    },
    "s3_walk_03": {
      "id": "s3_walk_03",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那你先别给我剪。我问题可多。",
      "next": "s3_walk_04",
      "bg": "street",
      "location": "老街岔路口"
    },
    "s3_walk_04": {
      "id": "s3_walk_04",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "知道，所以先拿你练习怎么让顾客闭嘴。",
      "next": "s3_walk_05",
      "bg": "street",
      "location": "老街岔路口"
    },
    "s3_taxi_01": {
      "id": "s3_taxi_01",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "小满自己填好目的地。我陪她核对车牌，她刚把练习图翻到背面，车就到了。",
      "next": "s3_taxi_02"
    },
    "s3_taxi_02": {
      "id": "s3_taxi_02",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "车费我付。你负责看车牌，别顺便给自己加一张好人证。",
      "next": "s3_taxi_03"
    },
    "s3_taxi_03": {
      "id": "s3_taxi_03",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "五星评价总能有吧？",
      "next": "s3_taxi_04"
    },
    "s3_taxi_04": {
      "id": "s3_taxi_04",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "四星。剩下一星，等你不催着收再说。",
      "next": "s3_taxi_05"
    },
    "s3_leave_01": {
      "id": "s3_leave_01",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "老板等我核接头，收摊前得去。我先过去，你准备怎么回？",
      "next": "s3_leave_02"
    },
    "s3_leave_02": {
      "id": "s3_leave_02",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "同事刚下班，我跟她拼车。你早说啊，我还以为你嫌我吃得慢。",
      "next": "s3_leave_03"
    },
    "s3_leave_03": {
      "id": "s3_leave_03",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "她当着我的面确认了上车处，把练习图夹回袋里。我到配件铺时，时间还够把两种型号各核一遍。",
      "next": "s3_leave_04"
    },
    "s3_leave_04": {
      "id": "s3_leave_04",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "取完件，她发来同事撑歪伞的照片：“到家了。还有，是你吃得慢。”那张没看完的练习图，我记着下次问。",
      "next": "s4_shift_01"
    },
    "s3_stall_12": {
      "id": "s3_stall_12",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "她看了我一下，把纸角压平。我按灭手机，没接她问的那个“多久”。",
      "next": "s3_stall_13"
    },
    "s3_stall_13": {
      "id": "s3_stall_13",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "末班车已经过了。配件铺老板发来消息，等我收摊前去核接头型号；我算了算路，还留着一点余量。",
      "next": "s3_stall_14"
    },
    "s3_stall_14": {
      "id": "s3_stall_14",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你有事就说。我又不会连回家的办法都没有。先吃，洋芋都凉了。",
      "next": "c1"
    },
    "s3_walk_05": {
      "id": "s3_walk_05",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "到岔路口，我把预留的缓冲用得差不多了。配件铺还没收摊，型号照常核完；小满也发来到家消息：“顾客练习结束。”",
      "next": "s4_shift_01",
      "bg": "street",
      "location": "老街岔路口"
    },
    "s3_taxi_05": {
      "id": "s3_taxi_05",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "她收起图坐进车里，没来得及讲背面画了什么。我赶去核型号，后来收到她的消息：“到了，四星没变。”",
      "next": "s4_shift_01"
    },
    "s4_shift_01": {
      "id": "s4_shift_01",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "接头送到回声，已经是第四天凌晨。周栀蹲在侧门系鞋带，细跟鞋装进布袋，像替自己卸下一小班人。",
      "next": "s4_shift_02"
    },
    "s4_shift_02": {
      "id": "s4_shift_02",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "别看。人下班了，脚也得下班。",
      "next": "s4_shift_03"
    },
    "s4_shift_03": {
      "id": "s4_shift_03",
      "type": "line",
      "scene": "s4",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我还没开口，夸奖名额就没了。",
      "next": "s4_shift_04"
    },
    "s4_shift_04": {
      "id": "s4_shift_04",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "她笑过以后就不说话了。手机上是一张还没填完的夜宵摊成本表。",
      "next": "s4_shift_05"
    },
    "s4_shift_05": {
      "id": "s4_shift_05",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "回声一关，我跟朋友那句“改天试试”，就真得找个日子了。她出摊车，我管备料和收摊。",
      "next": "s4_shift_06"
    },
    "s4_shift_06": {
      "id": "s4_shift_06",
      "type": "line",
      "scene": "s4",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "位置找好了？",
      "next": "s4_shift_07"
    },
    "s4_shift_07": {
      "id": "s4_shift_07",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "还在问。总不能锅先热了，才发现没地方摆。",
      "next": "s4_shift_08"
    },
    "s4_shift_08": {
      "id": "s4_shift_08",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "她熄了屏幕，揉揉眉心。街对面的面馆还开着，我没把她的沉默急着填满。",
      "next": "c2"
    },
    "c2": {
      "id": "c2",
      "type": "choice",
      "scene": "s4",
      "character": "zhouzhi",
      "text": "临分别前，我对她说：",
      "flag": "noodles",
      "choices": [
        {
          "label": "要不要吃碗面？困了就改天。",
          "value": "invite",
          "next": "s4_invite_01"
        },
        {
          "label": "今晚先各自歇着，有空再聊。",
          "value": "space",
          "next": "s4_space_01"
        }
      ]
    },
    "s4_invite_01": {
      "id": "s4_invite_01",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "行，清汤小份。先说好，面能吃，话不一定接得上。",
      "next": "s4_invite_02",
      "bg": "noodles",
      "location": "坡口面馆"
    },
    "s4_invite_02": {
      "id": "s4_invite_02",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "我们各自付了钱。她挑掉葱花，问我的夹克多久洗一次。我说修不好东西的时候，就抽空洗。",
      "next": "s4_invite_03",
      "bg": "noodles",
      "location": "坡口面馆"
    },
    "s4_invite_03": {
      "id": "s4_invite_03",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "难怪看着旧，原来你手艺还行。",
      "next": "s4_invite_04",
      "bg": "noodles",
      "location": "坡口面馆"
    },
    "s4_invite_04": {
      "id": "s4_invite_04",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "我加了两勺辣椒，喝掉半壶水。她捧着碗歇了一会儿，我也没急着找话。两个人安静喝完热汤，各自回去睡觉。",
      "next": "s5_mirror_01",
      "bg": "noodles",
      "location": "坡口面馆"
    },
    "s4_space_01": {
      "id": "s4_space_01",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "好。我今晚连“再见”都快说成上班的调子了。",
      "next": "s4_space_02"
    },
    "s4_space_02": {
      "id": "s4_space_02",
      "type": "line",
      "scene": "s4",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那这句省着，回去歇吧。",
      "next": "s4_space_03"
    },
    "s4_space_03": {
      "id": "s4_space_03",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "她把鞋袋换到另一只手，往等车的地方走。我也去等自己的车，没有再把她叫住。",
      "next": "s4_space_04"
    },
    "s4_space_04": {
      "id": "s4_space_04",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "到家后，她发来一条：“表明天再填，先睡了。”我回了关灯的表情，把手机放远。",
      "next": "s5_mirror_01"
    },
    "s5_mirror_01": {
      "id": "s5_mirror_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "第五天下午，我送回推剪充电座。镜子照出三个我，三个都像没睡够。",
      "next": "s5_mirror_02"
    },
    "s5_mirror_02": {
      "id": "s5_mirror_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "别靠，消毒还没干。这把椅子比你会休息。",
      "next": "s5_mirror_03"
    },
    "s5_mirror_03": {
      "id": "s5_mirror_03",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "她接上推剪试了试，才把底座收进去。作品夹放在镜边，压住一个空着的练习时段。",
      "next": "g_s5_ride",
      "cg": "cg02"
    },
    "g_s5_ride": {
      "id": "g_s5_ride",
      "type": "gate",
      "scene": "s5",
      "cases": [
        {
          "flag": "ride",
          "value": "walk",
          "next": "s5_ride_walk_01"
        },
        {
          "flag": "ride",
          "value": "taxi",
          "next": "s5_ride_taxi_01"
        }
      ],
      "default": "s5_ride_leave_01"
    },
    "s5_ride_walk_01": {
      "id": "s5_ride_walk_01",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你上次说问题多，我想好了。顾客问，我就停一下给他看，不一着急又多剪一刀。",
      "next": "s5_ride_walk_02",
      "cg": "cg02"
    },
    "s5_ride_walk_02": {
      "id": "s5_ride_walk_02",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我今天连闭嘴都算配合练习。",
      "next": "s5_work_01",
      "cg": "cg02"
    },
    "s5_ride_taxi_01": {
      "id": "s5_ride_taxi_01",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "四星顾客，底座放这儿。上回等车没讲完的图，还想看吗？",
      "next": "s5_ride_taxi_02",
      "cg": "cg02"
    },
    "s5_ride_taxi_02": {
      "id": "s5_ride_taxi_02",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "想。先让我看看那一星到底扣在哪儿。",
      "next": "s5_work_01",
      "cg": "cg02"
    },
    "s5_ride_leave_01": {
      "id": "s5_ride_leave_01",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "接头装好了。上回顾着取件，你那个考核还没讲完，现在能给我看看吗？",
      "next": "s5_ride_leave_02",
      "cg": "cg02"
    },
    "s5_ride_leave_02": {
      "id": "s5_ride_leave_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "能啊。我还以为你只记得那晚吃了几块洋芋。图在这儿，别压着。",
      "next": "s5_work_01",
      "cg": "cg02"
    },
    "s5_work_01": {
      "id": "s5_work_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "小满把作品夹推过来，手又在剪刀旁停了一下。临时少了个练习模特，她没有直接把我按进椅子。",
      "next": "s5_work_02"
    },
    "s5_work_02": {
      "id": "s5_work_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "有完整时间就坐。赶着走，就帮我看这几页。先说好，不收“都挺好”。",
      "next": "s5_work_03"
    },
    "s5_work_03": {
      "id": "s5_work_03",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这家店现在连客套都收费？",
      "next": "s5_work_04"
    },
    "s5_work_04": {
      "id": "s5_work_04",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "不收费，退回去。",
      "next": "c3"
    },
    "c3": {
      "id": "c3",
      "type": "choice",
      "scene": "s5",
      "character": "xiaoman",
      "text": "我空出了这一段时间，选哪件事？",
      "flag": "salon",
      "choices": [
        {
          "label": "一起整理作品页，讨论她想留下的风格。",
          "value": "portfolio",
          "next": "s5_portfolio_01"
        },
        {
          "label": "确认时长和方案，当一次剪发模特。",
          "value": "model",
          "next": "s5_model_01"
        }
      ]
    },
    "s5_portfolio_01": {
      "id": "s5_portfolio_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "她把两页照片推过来。最亮的一张放在前面，后面那张没加滤镜，处理过的地方反倒更清楚。",
      "next": "s5_portfolio_02"
    },
    "s5_portfolio_02": {
      "id": "s5_portfolio_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "封面用前面这张？看着比较像那么回事。",
      "next": "s5_portfolio_03"
    },
    "s5_portfolio_03": {
      "id": "s5_portfolio_03",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我第一眼先看见灯，找了半天才找到头发。后面这张，我能看明白你改了哪儿。",
      "next": "s5_portfolio_04"
    },
    "s5_portfolio_04": {
      "id": "s5_portfolio_04",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "让你看作品，你还真敢挑。",
      "next": "s5_portfolio_05"
    },
    "s5_model_01": {
      "id": "s5_model_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "说好四十分钟、只修两侧。她问过头皮情况，给师傅看了分区，才把围布扣好。",
      "next": "s5_model_02"
    },
    "s5_model_02": {
      "id": "s5_model_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "头摆正。你现在一转，我就得把左右重新找一遍。",
      "next": "s5_model_03"
    },
    "s5_model_03": {
      "id": "s5_model_03",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我尽量保持一个合格杯子的形状。",
      "next": "s5_model_04"
    },
    "s5_model_04": {
      "id": "s5_model_04",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "她笑了一声，落剪前又停住，把梳子换到另一只手里。我没再逗她。",
      "next": "s5_model_05"
    },
    "s5_portfolio_05": {
      "id": "s5_portfolio_05",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我改成“挺好”？",
      "next": "s5_portfolio_06"
    },
    "s5_portfolio_06": {
      "id": "s5_portfolio_06",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "别。刚才那句留着。",
      "next": "s5_portfolio_07"
    },
    "s5_portfolio_07": {
      "id": "s5_portfolio_07",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "她抽走主要由师傅完成的那页，把自己的处理过程放到前面。我去送下一单时，她还在比对两张原图。",
      "next": "s6_table_01"
    },
    "s5_model_05": {
      "id": "s5_model_05",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "手有点出汗。等我擦一下，不赶这几秒。",
      "next": "s5_model_06"
    },
    "s5_model_06": {
      "id": "s5_model_06",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "那处过渡由师傅复核后，她才让我看后面。四十分钟用得满满当当，下一单仍来得及。",
      "next": "s5_model_07"
    },
    "s5_model_07": {
      "id": "s5_model_07",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "这儿我还想再练。能留张后脑勺的照片作对照吗？",
      "next": "s5_model_08"
    },
    "s5_model_08": {
      "id": "s5_model_08",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "拍吧。杯子有把手了，值得纪念。",
      "next": "s6_table_01"
    },
    "s6_table_01": {
      "id": "s6_table_01",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "第六天夜里，周栀把布袋挂到膝边，给对面腾出位置。窗上有一层水汽，桌子中间那块倒是干的。",
      "next": "g_s6_noodles"
    },
    "g_s6_noodles": {
      "id": "g_s6_noodles",
      "type": "gate",
      "scene": "s6",
      "cases": [
        {
          "flag": "noodles",
          "value": "invite",
          "next": "s6_second_01"
        }
      ],
      "default": "s6_first_01"
    },
    "s6_second_01": {
      "id": "s6_second_01",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "第二顿了，今天还加两勺辣椒？上回你喝了半壶水。",
      "next": "s6_second_02"
    },
    "s6_second_02": {
      "id": "s6_second_02",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那是为了让老板少洗一只水壶。",
      "next": "s6_second_03"
    },
    "s6_second_03": {
      "id": "s6_second_03",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "她把辣椒罐往中间推。我问她今天还去不去葱，她点点头，先喝了一口热汤。",
      "next": "s6_plan_01"
    },
    "s6_first_01": {
      "id": "s6_first_01",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "今天是我约的。睡够了，能聊；要是突然没声，就是面太烫。",
      "next": "s6_first_02"
    },
    "s6_first_02": {
      "id": "s6_first_02",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "第一次吃面，注意事项还挺齐。",
      "next": "s6_first_03"
    },
    "s6_first_03": {
      "id": "s6_first_03",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "她点清汤不加葱，我要红汤。坐下来以后，谁也没拿那晚没吃成的面当一笔欠账。",
      "next": "s6_plan_01"
    },
    "s6_plan_01": {
      "id": "s6_plan_01",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "朋友想一次租几个月，我想先短租。吵了半天，决定明天各问两处。",
      "next": "s6_plan_02"
    },
    "s6_plan_02": {
      "id": "s6_plan_02",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你们吵架还分工？",
      "next": "s6_plan_03"
    },
    "s6_plan_03": {
      "id": "s6_plan_03",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "不然呢，吵完摊位就自己长出来？",
      "next": "s6_plan_04"
    },
    "s6_plan_04": {
      "id": "s6_plan_04",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "她用碗压住报价单，只指给我看照明那一栏。我把要核的地方圈出，余下的纸仍在她手边。",
      "next": "s6_plan_05",
      "cg": "cg03"
    },
    "s6_plan_05": {
      "id": "s6_plan_05",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "现场得另找时间看。我把要查的东西和收费发你，你们先商量。",
      "next": "s6_plan_06",
      "cg": "cg03"
    },
    "s6_plan_06": {
      "id": "s6_plan_06",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "行。你最近柜台是不是也忙？",
      "next": "s6_plan_07",
      "cg": "cg03"
    },
    "s6_plan_07": {
      "id": "s6_plan_07",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "还有几单。我也投了贵阳那支演出队，没回音。",
      "next": "s6_plan_08",
      "cg": "cg03"
    },
    "s6_plan_08": {
      "id": "s6_plan_08",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "有动静告诉我。别发六十秒语音，锅一开，我听不清。",
      "next": "s6_plan_09",
      "cg": "cg03"
    },
    "s6_plan_09": {
      "id": "s6_plan_09",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "我点头，夹克口袋抵着桌沿。买票的事到了嘴边，又被我借着喝汤咽回去。",
      "next": "s6_plan_10"
    },
    "s6_plan_10": {
      "id": "s6_plan_10",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "等你们试营业，给我留张正常高度的凳子吧。",
      "next": "s6_plan_11"
    },
    "s6_plan_11": {
      "id": "s6_plan_11",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "有。你别再拿维修箱冒充贵宾席。",
      "next": "s7_camera_01"
    },
    "s7_camera_01": {
      "id": "s7_camera_01",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "第七天下午，孟遥看清我以后，把相机放低。镜头盖还是塞左口袋，栗色头发在肩边湿了一小块。",
      "next": "s7_camera_02",
      "cg": "cg04"
    },
    "s7_camera_02": {
      "id": "s7_camera_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "文文？你回来了，还是我对焦坏了？",
      "next": "s7_camera_03",
      "cg": "cg04"
    },
    "s7_camera_03": {
      "id": "s7_camera_03",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这项不归我修。",
      "next": "s7_camera_04",
      "cg": "cg04"
    },
    "s7_camera_04": {
      "id": "s7_camera_04",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "她和我同岁。分手后，我看过不少她做的短片，赞却一个没点，好像这样就没人知道我停留过。",
      "next": "s7_camera_05",
      "cg": "cg04"
    },
    "s7_camera_05": {
      "id": "s7_camera_05",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "叶岚跟我说了留记录的事。第十天下午先碰筹备，核设备、场地和人能来的时间。今天不开拍。",
      "next": "s7_camera_06",
      "cg": "cg04"
    },
    "s7_camera_06": {
      "id": "s7_camera_06",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "设备表我整理。那套旧监听还不能用，先别算它。",
      "next": "s7_camera_07",
      "cg": "cg04"
    },
    "s7_camera_07": {
      "id": "s7_camera_07",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "她记下一笔，把相机收进包里。我正想再说句柜台多乱，她抬起头。",
      "next": "s7_camera_08"
    },
    "s7_camera_08": {
      "id": "s7_camera_08",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "上次我问你什么时候走，你回了“再说”。后来还是在别人的照片里看见你走了。",
      "next": "s7_camera_09"
    },
    "s7_camera_09": {
      "id": "s7_camera_09",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "衣袋里的手机抵着腿。我这回连票都买好了，小满问的时候，却只听见我说眼前的活。",
      "next": "s7_camera_10"
    },
    "s7_camera_10": {
      "id": "s7_camera_10",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "我看向那块不滴雨的地方。她没有让开，也没有继续问别的。",
      "next": "c4"
    },
    "c4": {
      "id": "c4",
      "type": "choice",
      "scene": "s7",
      "character": "mengyao",
      "text": "我怎样接住这句迟到的问题？",
      "flag": "reunion",
      "choices": [
        {
          "label": "承认那时在逃避，先把这句歉意说清。",
          "value": "apologize",
          "next": "s7_apologize_01"
        },
        {
          "label": "约一段完整时间，把当时的事认真谈完。",
          "value": "appointment",
          "next": "s7_appointment_01"
        },
        {
          "label": "顺着老同学的口吻开个玩笑，再接回正题。",
          "value": "joke",
          "next": "s7_joke_01"
        }
      ]
    },
    "s7_apologize_01": {
      "id": "s7_apologize_01",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那时我怕你问下一步，我答不上，就干脆不回。是我在逃避，对不起。",
      "next": "s7_apologize_02"
    },
    "s7_apologize_02": {
      "id": "s7_apologize_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我听见了。可我现在说不出“没关系”。",
      "next": "s7_apologize_03"
    },
    "s7_apologize_03": {
      "id": "s7_apologize_03",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "不用勉强说。",
      "next": "s7_apologize_04"
    },
    "s7_apologize_04": {
      "id": "s7_apologize_04",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "她翻过被雨打潮的背带。我站在旁边，没有拿另一句解释去催她接话。",
      "next": "s7_terms_01"
    },
    "s7_appointment_01": {
      "id": "s7_appointment_01",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我半小时后要交机。能不能找一段不用说到一半就走的时间？我现在把空档发你。",
      "next": "s7_appointment_02"
    },
    "s7_appointment_02": {
      "id": "s7_appointment_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "可以。我看排期，你先别只写“有空再说”。",
      "next": "s7_appointment_03"
    },
    "s7_appointment_03": {
      "id": "s7_appointment_03",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "我发去第十天之后的两段完整空档。她核过排期，选了第二段。我回了“确定”，把那段留了出来。",
      "next": "s7_appointment_04"
    },
    "s7_joke_01": {
      "id": "s7_joke_01",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "老同学见面，第一题就查出勤啊？",
      "next": "s7_joke_02"
    },
    "s7_joke_02": {
      "id": "s7_joke_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我没查出勤。我问过你什么时候走，一直没等到回答。",
      "next": "s7_joke_03"
    },
    "s7_joke_03": {
      "id": "s7_joke_03",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "笑话落下去，没人接。我捏住工具包带子，没再补第二句。",
      "next": "s7_joke_04"
    },
    "s7_joke_04": {
      "id": "s7_joke_04",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "刚才又想躲过去。这个问题我记着，可我现在还没说清。",
      "next": "s7_joke_05"
    },
    "s7_terms_01": {
      "id": "s7_terms_01",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "先看场地吧。我们的事，不放进片子里。",
      "next": "s7_terms_02"
    },
    "s7_terms_02": {
      "id": "s7_terms_02",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。设备有什么问题，我能先给你说清。",
      "next": "s7_terms_03"
    },
    "s7_terms_03": {
      "id": "s7_terms_03",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "她摊开勘景表，我把工具包挪走，给纸留出一块干地方。",
      "next": "s8_count_01"
    },
    "s7_appointment_04": {
      "id": "s7_appointment_04",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "时间定了。刚才那个问题，还是等你答。",
      "next": "s7_appointment_05"
    },
    "s7_appointment_05": {
      "id": "s7_appointment_05",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "我点头。日历上多了一格，屋檐下的那句话并没有因此少掉。",
      "next": "s7_terms_01"
    },
    "s7_joke_05": {
      "id": "s7_joke_05",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "那就先留着。别当成已经谈过。",
      "next": "s7_terms_01"
    },
    "s8_count_01": {
      "id": "s8_count_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "第八天晚上，叶岚把空纸箱倒扣，铺开清单。柜里正常机和故障机已经分开摆好。",
      "next": "s8_count_02",
      "cg": "cg05"
    },
    "s8_count_02": {
      "id": "s8_count_02",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "先看编号，别让同型号的混了。",
      "next": "s8_count_03",
      "cg": "cg05"
    },
    "s8_count_03": {
      "id": "s8_count_03",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我认出柜台那套旧监听，已经随维修单送回，待复查标签还在。",
      "next": "s8_count_04",
      "cg": "cg05"
    },
    "s8_count_04": {
      "id": "s8_count_04",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这张表的“待处理”，是设备没好，还是没人签收？",
      "next": "s8_count_05",
      "cg": "cg05"
    },
    "s8_count_05": {
      "id": "s8_count_05",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "设备没好、东西找不到、没人签收，别都写“待处理”。停业后我想接活动执行，这账得理清。",
      "next": "s8_count_06",
      "cg": "cg05"
    },
    "s8_count_06": {
      "id": "s8_count_06",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "她拆开几项，笔停在自己名字边。同事的名字就在下一行。",
      "next": "s8_count_07",
      "cg": "cg05"
    },
    "s8_count_07": {
      "id": "s8_count_07",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "这些可以接整单，也可以只做今晚两小时。你说能做多少，我把后面的排好。",
      "next": "s8_count_08",
      "cg": "cg05"
    },
    "s8_count_08": {
      "id": "s8_count_08",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你自己的工时呢？",
      "next": "s8_count_09",
      "cg": "cg05"
    },
    "s8_count_09": {
      "id": "s8_count_09",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "她收回表：“看到了，待会儿补。”笔却先去找柜号。",
      "next": "c5"
    },
    "c5": {
      "id": "c5",
      "type": "choice",
      "scene": "s8",
      "character": "yelan",
      "text": "我怎么接下这份清点工作？",
      "flag": "inventory",
      "choices": [
        {
          "label": "承接完整清单，约好明天交付并安排工时。",
          "value": "full",
          "next": "s8_full_01"
        },
        {
          "label": "今晚只帮两小时，把余项清楚交接。",
          "value": "limited",
          "next": "s8_limited_01"
        }
      ]
    },
    "s8_full_01": {
      "id": "s8_full_01",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我接整单。明早的柜台急修照做，余项明天下午两点前交。归属不清的，你跟我一起找旧单。",
      "next": "s8_full_02"
    },
    "s8_full_02": {
      "id": "s8_full_02",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "她坐到纸箱另一边，和我翻出同型号设备的旧编号。我把原留给求职材料的那段下午挪了挪，这份收入也正用得上。",
      "next": "s8_full_03"
    },
    "s8_full_03": {
      "id": "s8_full_03",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "这台对上了。剩下两项，我明午前补给你。整单就按整单结。",
      "next": "s8_full_04"
    },
    "s8_full_04": {
      "id": "s8_full_04",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "两小时快到，我把当晚已核的页码圈好，余项另放。我们等师匠按约来电复核，明天交全表的安排仍在单上。",
      "next": "s8_hours_01"
    },
    "s8_limited_01": {
      "id": "s8_limited_01",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我今晚两小时。先核编号和状态，余项交给明天接班的人，柜号和联系人都写齐。",
      "next": "s8_limited_02"
    },
    "s8_limited_02": {
      "id": "s8_limited_02",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "接班同事确认能接，照着那几行找到了空架位。叶岚刚想起身跟过去，他已经把对应柜号报了回来。",
      "next": "s8_limited_03"
    },
    "s8_limited_03": {
      "id": "s8_limited_03",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "对，就是那边。剩下的按这个找，有不清楚的再问。",
      "next": "s8_limited_04"
    },
    "s8_limited_04": {
      "id": "s8_limited_04",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "她坐回去，把那几页交到同事手里。两小时快到，留出的收尾时间还够师匠电话复核，再做最后的离场确认。",
      "next": "s8_hours_01"
    },
    "s8_handoff_01": {
      "id": "s8_handoff_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "师匠按约打来电话。我念过已核设备的单号，他又问了一遍，哪套仍不能签“正常”。",
      "next": "s8_handoff_02"
    },
    "s8_handoff_02": {
      "id": "s8_handoff_02",
      "type": "line",
      "scene": "s8",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "旧监听继续待查，别和能用的混在一起。我明天照这个记录接着看。",
      "next": "s8_handoff_03"
    },
    "s8_handoff_03": {
      "id": "s8_handoff_03",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "分开了。工具也点清了，等叶岚核完钥匙，再做最后确认。",
      "next": "s8_handoff_04"
    },
    "s8_handoff_04": {
      "id": "s8_handoff_04",
      "type": "line",
      "scene": "s8",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "行，电话先到这里。我也该锁柜台了。",
      "next": "s8_handoff_05"
    },
    "s8_handoff_05": {
      "id": "s8_handoff_05",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚去门口核钥匙，工具包还摊在桌边。柜里忽然响了三下，清洁车从外面经过，盖住了尾音。我没能听清它们之间的间隔。",
      "next": "s8_handoff_06"
    },
    "s8_handoff_06": {
      "id": "s8_handoff_06",
      "type": "line",
      "scene": "s8",
      "speaker": "陌生的声音",
      "character": null,
      "text": "这次……还在吗？",
      "next": "h2"
    },
    "h2": {
      "id": "h2",
      "type": "choice",
      "scene": "s8",
      "character": null,
      "text": "工具已经点清，离场确认前还有片刻。柜里又响了三下，我选择：",
      "flag": "qiuReply",
      "choices": [
        {
          "label": "试着用三下轻敲回应。",
          "value": "reply",
          "next": "g_s8_signal"
        },
        {
          "label": "收好工具，按约完成交接。",
          "value": "finish",
          "next": "s8_finish_01"
        }
      ]
    },
    "g_s8_signal": {
      "id": "g_s8_signal",
      "type": "gate",
      "scene": "s8",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "s8_echo_record_01"
        }
      ],
      "default": "s8_echo_work_01"
    },
    "s8_echo_record_01": {
      "id": "s8_echo_record_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我翻开维修本，照那三个点在柜侧轻敲：轻、轻——停半拍——重。最后一下落定，柜里接上了一句很低的声音。",
      "next": "s8_echo_record_02"
    },
    "s8_echo_record_02": {
      "id": "s8_echo_record_02",
      "type": "line",
      "scene": "s8",
      "speaker": "陌生的声音",
      "character": null,
      "text": "好。这回，没被盖过去。",
      "next": "s8_echo_record_03"
    },
    "s8_echo_record_03": {
      "id": "s8_echo_record_03",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我把时间添在记号旁，没有拆柜子。叶岚核完钥匙回来，我拉好工具包，递过签收单。她签好名字，我们确认门锁，按约离开。",
      "next": "s9_prepare_01"
    },
    "s8_echo_work_01": {
      "id": "s8_echo_work_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我试着敲了三下。维修本上只有“三下轻响”，没有间隔；我拿不准该在哪里停。屋里留下普通的回声，没有别的话。",
      "next": "s8_echo_work_02"
    },
    "s8_echo_work_02": {
      "id": "s8_echo_work_02",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我记下“轻敲后未复现人声”，把本子合上。叶岚回来，我拉好工具包，递过签收单。她签好名字，我和她确认门锁后离开。",
      "next": "s9_prepare_01"
    },
    "s8_finish_01": {
      "id": "s8_finish_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我看了眼待查标签，补上声音出现的时间，把最后一件工具放回包里。",
      "next": "s8_finish_02"
    },
    "s8_finish_02": {
      "id": "s8_finish_02",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "异常记在这行了。复查时再看，今晚的先交给你。",
      "next": "s8_finish_03"
    },
    "s8_finish_03": {
      "id": "s8_finish_03",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚接过签收单，核对工具数量，落笔签名。钥匙在她另一只手里轻轻碰了一下。",
      "next": "s8_finish_04"
    },
    "s8_finish_04": {
      "id": "s8_finish_04",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我拉好包，和她核过门锁。雨还没停，我们各自撑伞离开。",
      "next": "s9_prepare_01"
    },
    "s8_hours_01": {
      "id": "s8_hours_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚终于把自己的工时补上，才把清单推给我。",
      "next": "s8_handoff_01"
    },
    "s9_prepare_01": {
      "id": "s9_prepare_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "第十天下午，相机还在包里。孟遥铺开筹备纸，毛狼用线箱压住纸角。",
      "next": "s9_prepare_02"
    },
    "s9_prepare_02": {
      "id": "s9_prepare_02",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "先碰试音这段。设备能用吗，人什么时候能来？",
      "next": "s9_prepare_03"
    },
    "s9_prepare_03": {
      "id": "s9_prepare_03",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我翻开清单，旧监听仍在待查栏。",
      "next": "s9_prepare_04"
    },
    "s9_prepare_04": {
      "id": "s9_prepare_04",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "它还不能用，先别排进试音。",
      "next": "s9_prepare_05"
    },
    "s9_prepare_05": {
      "id": "s9_prepare_05",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满还在店里，往群里发来一句：“参考马上发。”",
      "next": "g_s9_inventory"
    },
    "g_s9_ride": {
      "id": "g_s9_ride",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "ride",
          "value": "walk",
          "next": "s9_ride_walk_01"
        },
        {
          "flag": "ride",
          "value": "taxi",
          "next": "s9_ride_taxi_01"
        }
      ],
      "default": "s9_ride_leave_01"
    },
    "s9_ride_walk_01": {
      "id": "s9_ride_walk_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满圈出我们那晚走过的坡口：“别抬器材走台阶，拐旁边。”我把搬运路线往外挪了一格，那晚绕的路用上了。",
      "next": "g_s9_salon"
    },
    "s9_ride_taxi_01": {
      "id": "s9_ride_taxi_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满发来那晚的上车点：“车能停这儿，别堵店门。四星先生，没忘吧？”我把临停位置补上。",
      "next": "g_s9_salon"
    },
    "s9_ride_leave_01": {
      "id": "s9_ride_leave_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满问过那晚拼车的同事，把下班车多的时段发进群。我把器材搬运那一栏错开，没拿临收摊取件的办法赌这一次。",
      "next": "g_s9_salon"
    },
    "g_s9_noodles": {
      "id": "g_s9_noodles",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "noodles",
          "value": "invite",
          "next": "s9_noodles_invite_01"
        }
      ],
      "default": "s9_noodles_space_01"
    },
    "s9_noodles_invite_01": {
      "id": "s9_noodles_invite_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "周栀拎着包等在桌边。我把设备表推近，停下正要念给她听的话，让她自己看。",
      "next": "s9_noodles_invite_02"
    },
    "s9_noodles_invite_02": {
      "id": "s9_noodles_invite_02",
      "type": "line",
      "scene": "s9",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "跟吃面一样，先让我安静看完。确认完这段，我还得去问摊位。",
      "next": "s9_noodles_invite_03"
    },
    "s9_noodles_space_01": {
      "id": "s9_noodles_space_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "周栀拉过空椅，按住差点被风卷走的纸，笔先拿到了自己手里。",
      "next": "s9_noodles_space_02"
    },
    "s9_noodles_space_02": {
      "id": "s9_noodles_space_02",
      "type": "line",
      "scene": "s9",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "这次也我先来。能来的时段圈这儿，晚班后面不添。",
      "next": "s9_noodles_space_03"
    },
    "g_s9_salon": {
      "id": "g_s9_salon",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "salon",
          "value": "portfolio",
          "next": "s9_salon_portfolio_01"
        }
      ],
      "default": "s9_salon_model_01"
    },
    "s9_salon_portfolio_01": {
      "id": "s9_salon_portfolio_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满发来重排过的一页作品：“先看处理过程，灯在后面。”孟遥把它夹进参考资料，原先笼统的“拍手艺”有了可讨论的步骤。",
      "next": "s9_ready_01"
    },
    "s9_salon_model_01": {
      "id": "s9_salon_model_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满发来我的剪发前后对照，附着当时的步骤和用时。我确认这次先作筹备参考，孟遥照着标出需要等动作完成的地方。",
      "next": "s9_ready_01"
    },
    "g_s9_reunion": {
      "id": "g_s9_reunion",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "reunion",
          "value": "apologize",
          "next": "s9_reunion_apologize_01"
        },
        {
          "flag": "reunion",
          "value": "appointment",
          "next": "s9_reunion_appointment_01"
        }
      ],
      "default": "s9_reunion_joke_01"
    },
    "s9_reunion_apologize_01": {
      "id": "s9_reunion_apologize_01",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "票的事听到了。上次你说怕答不上下一步，我还有一句想问。先不用急着再道歉。",
      "next": "s9_reunion_apologize_02"
    },
    "s9_reunion_apologize_02": {
      "id": "s9_reunion_apologize_02",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。我等你问。",
      "next": "s9_measure_01"
    },
    "s9_reunion_appointment_01": {
      "id": "s9_reunion_appointment_01",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "第二十八天的票，我听见了。我们留的那段时间还算数？",
      "next": "s9_reunion_appointment_02"
    },
    "s9_reunion_appointment_02": {
      "id": "s9_reunion_appointment_02",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "算数。没挪，也不拿今天这几句话抵掉。",
      "next": "s9_measure_01"
    },
    "s9_reunion_joke_01": {
      "id": "s9_reunion_joke_01",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这次是你自己说要走的可能。那天的问题，还没答。",
      "next": "s9_reunion_joke_02"
    },
    "s9_reunion_joke_02": {
      "id": "s9_reunion_joke_02",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我记得。这次不用“再说”挡过去。",
      "next": "s9_measure_01"
    },
    "g_s9_inventory": {
      "id": "g_s9_inventory",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "inventory",
          "value": "full",
          "next": "s9_inventory_full_01"
        }
      ],
      "default": "s9_inventory_limited_01"
    },
    "s9_inventory_full_01": {
      "id": "s9_inventory_full_01",
      "type": "line",
      "scene": "s9",
      "speaker": "yelan",
      "character": "yelan",
      "text": "昨天两点前交的，我核完了。午后咱们一起对的最后两项也齐了，整单款一并结。",
      "next": "s9_inventory_full_02"
    },
    "s9_inventory_full_02": {
      "id": "s9_inventory_full_02",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "她推来签过的表。昨天下午我们对了两遍的编号，我还记得。",
      "next": "s9_inventory_full_03"
    },
    "s9_inventory_limited_01": {
      "id": "s9_inventory_limited_01",
      "type": "line",
      "scene": "s9",
      "speaker": "yelan",
      "character": "yelan",
      "text": "同事昨天核完了，照你的柜号找的。两小时的款结好了，余项也都有人签。",
      "next": "s9_inventory_limited_02"
    },
    "s9_inventory_limited_02": {
      "id": "s9_inventory_limited_02",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "她原想把接班那页再抄一遍，看到签名，又放了回去。我昨天下午整理好了求职材料，这张表也没因为我不在就停住。",
      "next": "s9_inventory_limited_03"
    },
    "s9_compete_01": {
      "id": "s9_compete_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼的尺寸还剩两处没核。他放下笔，朝我抬抬下巴。",
      "next": "s9_compete_02"
    },
    "s9_compete_02": {
      "id": "s9_compete_02",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "贵阳那队，我也投了。主持、场务都报了，可能跟你争。",
      "next": "s9_compete_03"
    },
    "s9_compete_03": {
      "id": "s9_compete_03",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "介绍我来接活的时候，就投了？",
      "next": "s9_compete_04"
    },
    "s9_compete_04": {
      "id": "s9_compete_04",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "那天还没。后来看完要求，想试。一直没找着时候说。",
      "next": "s9_compete_05"
    },
    "s9_compete_05": {
      "id": "s9_compete_05",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "第一晚那张招聘页闪过脑海。我差点质问他，手却碰到装着车票的手机。",
      "next": "s9_compete_06"
    },
    "s9_compete_06": {
      "id": "s9_compete_06",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "贵阳的票，我早买了。第二十八天。还没录用，一直没告诉你。",
      "next": "s9_compete_07"
    },
    "s9_compete_07": {
      "id": "s9_compete_07",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "你倒比我敢花钱。",
      "next": "s9_compete_08"
    },
    "s9_compete_08": {
      "id": "s9_compete_08",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我没笑，他也停住。大厅那头翻纸声很清楚。",
      "next": "s9_compete_09",
      "cg": "cg06"
    },
    "s9_compete_09": {
      "id": "s9_compete_09",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我想等有结果再说。可没结果，也可能走。这个我应该先讲。",
      "next": "s9_compete_10",
      "cg": "cg06"
    },
    "s9_compete_10": {
      "id": "s9_compete_10",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我打开筹备群。小满在店里，周栀刚走，不能让她们只听到半截。",
      "next": "s9_compete_11"
    },
    "s9_compete_11": {
      "id": "s9_compete_11",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "第二十八天去贵阳，票早买了，工作还没结果。眼前的活照做，之后有变化，我自己告诉大家。",
      "next": "s9_compete_12"
    },
    "s9_inventory_full_03": {
      "id": "s9_inventory_full_03",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "昨天交表后，求职材料到晚上才顾得上。",
      "next": "s9_inventory_full_04"
    },
    "s9_inventory_full_04": {
      "id": "s9_inventory_full_04",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚翻到我们核过的归属页，我直接找到待查那套。",
      "next": "s9_review_01"
    },
    "s9_inventory_limited_03": {
      "id": "s9_inventory_limited_03",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我先读清同事补的那页，再按柜号对上原机。",
      "next": "s9_review_01"
    },
    "s9_review_01": {
      "id": "s9_review_01",
      "type": "line",
      "scene": "s9",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "昨天复查过，杂音还没定位。这段先别押它，我后面还有维护要做。",
      "next": "s9_review_02"
    },
    "s9_review_02": {
      "id": "s9_review_02",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "师匠来取线材，顺手翻过我刚抄的筹备表，指住两个倒写的数字。",
      "next": "s9_review_03"
    },
    "s9_review_03": {
      "id": "s9_review_03",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我照原单改正，他才签名，把报价草页收回包里。",
      "next": "s9_review_04"
    },
    "s9_review_04": {
      "id": "s9_review_04",
      "type": "line",
      "scene": "s9",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "记录格式我留着，下一份固定维护报价用得上。工时另算。",
      "next": "s9_review_05"
    },
    "s9_review_05": {
      "id": "s9_review_05",
      "type": "line",
      "scene": "s9",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我过会儿还得问摊位。试音另凑空，不能一直等到大家满意。",
      "next": "s9_adjust_01"
    },
    "s9_adjust_01": {
      "id": "s9_adjust_01",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "依赖旧监听的声音段先撤下，复查后再约。今天只定路线和时间。",
      "next": "s9_adjust_02"
    },
    "s9_adjust_02": {
      "id": "s9_adjust_02",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚划开连成一片的时段，让大家各填能来的空档。",
      "next": "g_s9_noodles"
    },
    "s9_noodles_invite_03": {
      "id": "s9_noodles_invite_03",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "行，你看完先走。",
      "next": "g_s9_ride"
    },
    "s9_noodles_space_03": {
      "id": "s9_noodles_space_03",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你先画，我再补设备时间。",
      "next": "g_s9_ride"
    },
    "s9_ready_01": {
      "id": "s9_ready_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥分开两张纸：已能做的，和等答复的。相机仍在包里。",
      "next": "s9_ready_02"
    },
    "s9_ready_02": {
      "id": "s9_ready_02",
      "type": "line",
      "scene": "s9",
      "speaker": "yelan",
      "character": "yelan",
      "text": "今天先到这儿。没定的，别往谁头上放。",
      "next": "s9_ready_03"
    },
    "s9_ready_03": {
      "id": "s9_ready_03",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "周栀圈好时间就拎包走了。剩下的在群里说。",
      "next": "s9_ready_04"
    },
    "s9_ready_04": {
      "id": "s9_ready_04",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "师匠提走线材。叶岚没再喊他，毛狼收起空椅。",
      "next": "s9_compete_01"
    },
    "s9_compete_12": {
      "id": "s9_compete_12",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我没有撤回。叶岚看完，在后续联系人旁留了一条备注。",
      "next": "s9_compete_13"
    },
    "s9_compete_13": {
      "id": "s9_compete_13",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥和我站到桌子另一侧。毛狼去拿卷尺，她压低了声音。",
      "next": "g_s9_reunion"
    },
    "s9_measure_01": {
      "id": "s9_measure_01",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "公开的设备要求，我转你。场务的，你发我。",
      "next": "s9_measure_02"
    },
    "s9_measure_02": {
      "id": "s9_measure_02",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "行。各凭本事。",
      "next": "s9_measure_03"
    },
    "s9_measure_03": {
      "id": "s9_measure_03",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "两份文件传过来，谁都没拿自己的申请给对方看。毛狼转了半圈笔，报出尺寸。",
      "next": "s9_measure_04"
    },
    "s9_measure_04": {
      "id": "s9_measure_04",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我扶着卷尺后退，他按住另一端。我们继续量，没再谈求职，也没拍肩说这就算了。",
      "next": "s10_messages_01"
    },
    "s10_messages_01": {
      "id": "s10_messages_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "第十天夜里，我在回声门外拉好工具包。大厅留着两张筹备纸，待答复的还在那里。",
      "next": "s10_messages_02"
    },
    "s10_messages_02": {
      "id": "s10_messages_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "车票没有变成录用通知，也不再只归我一个人知道。",
      "next": "s10_messages_03"
    },
    "g_s10_salon": {
      "id": "g_s10_salon",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "salon",
          "value": "portfolio",
          "next": "s10_salon_portfolio_01"
        }
      ],
      "default": "s10_salon_model_01"
    },
    "s10_salon_portfolio_01": {
      "id": "s10_salon_portfolio_01",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "今天那页师傅看了，让补侧面。我还有一页拿不准，没发群里。你有空帮我看吗？这次不收“挺好”。",
      "next": "s10_zhouzhi_01"
    },
    "s10_salon_model_01": {
      "id": "s10_salon_model_01",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你那次的照片我又看了，有一处还是不顺眼。不是说你的头。方便的话，帮我看看我圈的地方？",
      "next": "s10_zhouzhi_01"
    },
    "s10_zhouzhi_01": {
      "id": "s10_zhouzhi_01",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "今天能来的时段记好了，晚班后留着歇。摊位还在比价，旧冰柜的照片拍清楚了。你有空，我发来问两句，问完不加题。",
      "next": "s10_zhouzhi_02"
    },
    "s10_zhouzhi_02": {
      "id": "s10_zhouzhi_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥的消息没有表情，她好像总能把光标停在必须回答的位置。",
      "next": "g_s10_reunion"
    },
    "g_s10_reunion": {
      "id": "g_s10_reunion",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "reunion",
          "value": "apologize",
          "next": "s10_reunion_apologize_01"
        },
        {
          "flag": "reunion",
          "value": "appointment",
          "next": "s10_reunion_appointment_01"
        }
      ],
      "default": "s10_reunion_joke_01"
    },
    "s10_reunion_apologize_01": {
      "id": "s10_reunion_apologize_01",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "今天没问的那一句，我想再问问。三天前的道歉我听到了，这次不用从头说。",
      "next": "s10_yelan_01"
    },
    "s10_reunion_appointment_01": {
      "id": "s10_reunion_appointment_01",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我们定好的空档不变。如果今晚方便，我想先问清一件事，剩下的当面说。",
      "next": "s10_yelan_01"
    },
    "s10_reunion_joke_01": {
      "id": "s10_reunion_joke_01",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "今天说车票的时候，你没有开玩笑。我想把那天的问题再问一次，方便就回我。",
      "next": "s10_yelan_01"
    },
    "s10_yelan_01": {
      "id": "s10_yelan_01",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "清单回执发你了，我的工时也补上了。你如果还在门口，等我出来走一段？今天不聊预算。",
      "next": "s10_yelan_02"
    },
    "s10_yelan_02": {
      "id": "s10_yelan_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我往檐里挪了一步，把屏幕擦干。今晚先认真回一条，其他人的事，不会因此从我的生活里消失。",
      "next": "g_s10_signal"
    },
    "g_s10_signal": {
      "id": "g_s10_signal",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "g_s10_reply"
        }
      ],
      "default": "c6"
    },
    "g_s10_reply": {
      "id": "g_s10_reply",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "qiuReply",
          "value": "reply",
          "next": "s10_anonymous_01"
        }
      ],
      "default": "c6"
    },
    "s10_anonymous_01": {
      "id": "s10_anonymous_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "列表底端又亮起一个没有昵称的黄色头像。我想起维修本上被特意留宽的那处空隙，把屏幕凑近了些。",
      "next": "s10_anonymous_02"
    },
    "s10_anonymous_02": {
      "id": "s10_anonymous_02",
      "type": "line",
      "scene": "s10",
      "speaker": "陌生的声音",
      "character": null,
      "text": "那句没说完的话，我想接着说。接待结束以后，你愿意回来听吗？",
      "next": "c6"
    },
    "c6": {
      "id": "c6",
      "type": "choice",
      "scene": "s10",
      "character": null,
      "text": "今晚先回复谁，把这段话接下去？",
      "flag": "preview",
      "choices": [
        {
          "label": "回复小满，认真看她拿不准的作品。",
          "value": "xiaoman",
          "next": "preview_xiaoman_01"
        },
        {
          "label": "回复周栀，听听她今晚想说什么。",
          "value": "zhouzhi",
          "next": "preview_zhouzhi_01"
        },
        {
          "label": "回复孟遥，先回答那个没说清的问题。",
          "value": "mengyao",
          "next": "preview_mengyao_01"
        },
        {
          "label": "回复叶岚，陪她走一段不谈工作的路。",
          "value": "yelan",
          "next": "preview_yelan_01"
        },
        {
          "label": "回复那个黄色头像",
          "value": "huangqiuqiu",
          "next": "preview_qiu_01",
          "requires": [
            {
              "flag": "qiuSignal",
              "value": "record"
            },
            {
              "flag": "qiuReply",
              "value": "reply"
            }
          ]
        }
      ]
    },
    "preview_xiaoman_01": {
      "id": "preview_xiaoman_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回了“发来”，把屏幕放大。",
      "next": "g_preview_xiaoman"
    },
    "preview_xiaoman_02": {
      "id": "preview_xiaoman_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "过了一会儿，她发来一张作品夹的照片。那张不满意的图还在，旁边多了一行要补看的地方。",
      "next": "preview_xiaoman_03"
    },
    "preview_xiaoman_03": {
      "id": "preview_xiaoman_03",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "这页先留着。还有，你刚才挑的，不许明天装没说过。",
      "next": "preview_xiaoman_04"
    },
    "preview_xiaoman_04": {
      "id": "preview_xiaoman_04",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "记着呢。",
      "next": "preview_xiaoman_05"
    },
    "end_xiaoman": {
      "id": "end_xiaoman",
      "type": "end",
      "scene": "s10",
      "character": "xiaoman",
      "title": "镜子留了一个位置",
      "text": "她把那张还不满意的图留在作品夹里，也留下了我的具体意见。我第一次不用靠夸她让谈话继续。镜子边的空位还在，这回她没有急着把一切收拾得像已经做好。",
      "nextChapter": "下一章预告：她敢不敢让更多人看见仍在练习的自己？本次回复不锁定后续路线。"
    },
    "preview_zhouzhi_01": {
      "id": "preview_zhouzhi_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "周栀发来冰柜铭牌。我看完照片，把看不出来、需要现场核的几项圈给她。",
      "next": "preview_zhouzhi_02"
    },
    "preview_zhouzhi_02": {
      "id": "preview_zhouzhi_02",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "现在只能先认型号，机器好不好还得看实物。你们决定要看了，再定时间。",
      "next": "preview_zhouzhi_03"
    },
    "preview_zhouzhi_03": {
      "id": "preview_zhouzhi_03",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "明白，我拿去跟她商量。工作先到这儿。",
      "next": "preview_zhouzhi_04"
    },
    "preview_zhouzhi_04": {
      "id": "preview_zhouzhi_04",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我以为她要说晚安，新的消息却比熄屏快了一步。",
      "next": "preview_zhouzhi_05"
    },
    "end_zhouzhi": {
      "id": "end_zhouzhi",
      "type": "end",
      "scene": "s10",
      "character": "zhouzhi",
      "title": "下一碗面，汤还热着",
      "text": "摊位还在比价，冰柜还没定。她把这些事放在一边，说想和我吃面。我也把“有事再找我”换成了“愿意”。下一碗汤还没端上来，这次邀约已经说清了。",
      "nextChapter": "下一章预告：她为自己争取的新生活里，准备给另一个人留多少位置？本次回复不锁定后续路线。"
    },
    "preview_mengyao_01": {
      "id": "preview_mengyao_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回她：“现在方便。”她没有发工作表，也没有打来需要立刻接起的电话。",
      "next": "preview_mengyao_02"
    },
    "preview_mengyao_02": {
      "id": "preview_mengyao_02",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "你那天不回消息，是没有答案，还是不想让我知道答案？",
      "next": "g_preview_mengyao"
    },
    "end_mengyao": {
      "id": "end_mengyao",
      "type": "end",
      "scene": "s10",
      "character": "mengyao",
      "title": "镜头之外的约定",
      "text": "那句回答留在对话框里，我没有撤回。她没说“没关系”，我也没有把她的回复当成原谅。雨水落到檐外，手机暗下去；这次，说出口的话还在。",
      "nextChapter": "下一章预告：这次回答之后，我能否在事情尚无结果时继续说话，而不再失联？本次回复不锁定后续路线。"
    },
    "preview_yelan_01": {
      "id": "preview_yelan_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回了“还在”。叶岚从门里出来，把补过工时的那张表压进夹板。最下面一行，她的名字和别人的写在一起。",
      "next": "g_preview_yelan"
    },
    "preview_yelan_02": {
      "id": "preview_yelan_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "钥匙在她指间碰了两声。我刚想问设备租赁表，她抬起手。",
      "next": "preview_yelan_03"
    },
    "preview_yelan_03": {
      "id": "preview_yelan_03",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "那张明天再说。今天看够数字了。",
      "next": "preview_yelan_04"
    },
    "preview_yelan_04": {
      "id": "preview_yelan_04",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她走到檐边，又回头看了一眼大厅。",
      "next": "preview_yelan_05"
    },
    "end_yelan": {
      "id": "end_yelan",
      "type": "end",
      "scene": "s10",
      "character": "yelan",
      "title": "把自己的名字也写上",
      "text": "路口到了，租赁表还在包里。她把伞转向另一边，我没有追着把工作说完。今晚有一小段路，不用等谁叫她的名字，她也可以自己选着走。",
      "nextChapter": "下一章预告：不必一直留下照顾别人的时候，她想把自己的时间用在哪里？本次回复不锁定后续路线。"
    },
    "preview_qiu_01": {
      "id": "preview_qiu_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回了句“你还在吗”。黄色头像发来一个包厢号码，后面跟着“别带观众”。",
      "next": "preview_qiu_02",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_02": {
      "id": "preview_qiu_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我问叶岚，能不能在收钥匙前回空包厢待几分钟。她确认接待已经结束，给我留了五分钟。我把湿伞靠在门外，推开门。",
      "next": "preview_qiu_03",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_03": {
      "id": "preview_qiu_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "调音台旁，一个黄色圆球缓缓转过来。深色眉毛向下垂着，大圆眼看着我，短红嘴抿成一小道，两只小手托着腮。我的手下意识摸向口袋里的螺丝刀。",
      "next": "preview_qiu_04",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_04": {
      "id": "preview_qiu_04",
      "type": "line",
      "scene": "s10",
      "speaker": "陌生的声音",
      "character": null,
      "text": "眉毛没坏，放回去。你们第一次见谁，都先找能拧的地方吗？",
      "next": "preview_qiu_05",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_05": {
      "id": "preview_qiu_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "抱歉。我是来听那句话的。就是没想到，说话的会坐在这里。",
      "next": "preview_qiu_06",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_06": {
      "id": "preview_qiu_06",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我把手摊开，螺丝刀留在口袋里。她盯了两秒，才挪开一只托腮的小手，指指旁边的椅子。",
      "next": "preview_qiu_07",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_07": {
      "id": "preview_qiu_07",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我先问一句。你需要我帮什么？",
      "next": "preview_qiu_08",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_08": {
      "id": "preview_qiu_08",
      "type": "line",
      "scene": "s10",
      "speaker": "陌生的声音",
      "character": null,
      "text": "先别修。我叫黄球球，女性，自称二十四岁。成年这件事不用猜，也不用翻底下找出厂日期。",
      "next": "preview_qiu_09",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_09": {
      "id": "preview_qiu_09",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "至于要你帮什么，先别把我填进设备表。我想说的话，和那台机器的毛病不是一回事。",
      "next": "preview_qiu_10",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_10": {
      "id": "preview_qiu_10",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我叫文文。表收起来了，你接着说。",
      "next": "preview_qiu_11",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_11": {
      "id": "preview_qiu_11",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "文文。行，名字比“维修那个”好记。椅子给你留着，不收费，坐下的时候别把布也披上。",
      "next": "preview_qiu_12",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_12": {
      "id": "preview_qiu_12",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我把布叠到椅背上，拉开椅子坐下。她仍托着腮，圆球轻轻偏过来，看我坐稳。",
      "next": "preview_qiu_13",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_13": {
      "id": "preview_qiu_13",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "柜台那天，你说“能不能，先让我说”。我记到这里。后半句是什么？",
      "next": "preview_qiu_14",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_14": {
      "id": "preview_qiu_14",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "能不能先让我说完，再决定要不要修。就这一句。听起来不长，我却老在“说”字后面被盖过去。",
      "next": "preview_qiu_15",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_15": {
      "id": "preview_qiu_15",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "听完了。你要说的也未必是哪里坏了，是我一听见不寻常的声音，就想赶紧找个原因。",
      "next": "preview_qiu_16",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_16": {
      "id": "preview_qiu_16",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "找原因可以。别找到一半，连我还要不要继续说都替我定了。还有，你坐下以后，比站着顺眼一点。",
      "next": "preview_qiu_17",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_17": {
      "id": "preview_qiu_17",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我没有抢着接话。门外有人收走水桶，她等那阵响动过去，才重新看向我。",
      "next": "preview_qiu_18",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_18": {
      "id": "preview_qiu_18",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我刚才还以为，你想让我……",
      "next": "preview_qiu_19",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_19": {
      "id": "preview_qiu_19",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "让我什么？后面没说，我听不见。别看着我，好像答案贴在我眉毛上。",
      "next": "preview_qiu_20",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_20": {
      "id": "preview_qiu_20",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我把那半句话想了一遍。她没催，只用小手换了一边托腮。椅子被我坐得吱了一声。",
      "next": "preview_qiu_21",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_21": {
      "id": "preview_qiu_21",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你是不是能听见我在想什么？刚才那三拍，又像是早知道我会敲。",
      "next": "preview_qiu_22",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_22": {
      "id": "preview_qiu_22",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "不能。你敲了，我才接；你说出口、还没讲完的话，我能听见。没说出来的，我不知道。你现在又皱眉，是嫌椅子硬还是别的，我也只能猜。",
      "next": "preview_qiu_23",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_23": {
      "id": "preview_qiu_23",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我补上。我以为你要我拆开机器，找出一个能解释你的零件。现在想问的是，你为什么留在这里？",
      "next": "preview_qiu_24",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_24": {
      "id": "preview_qiu_24",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "这个问题，我今天还不想答。你可以先记住我的名字，别忙着替我写来历。我也没问你为什么一副刚淋完雨的插头的样子。",
      "next": "preview_qiu_25",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_25": {
      "id": "preview_qiu_25",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我点头。她把我的名字低低念了一次，像确认自己听清了。我也跟着念了一遍她的，直到她抬起眼。",
      "next": "preview_qiu_26",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_26": {
      "id": "preview_qiu_26",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "门外传来收钥匙的声音，我起身把椅子扶正。“下次来，我先问你还想不想聊。”她松开一只托腮的小手，没有跟着往门口挪。",
      "next": "preview_qiu_27",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_27": {
      "id": "preview_qiu_27",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "想。文文，如果有一天雨停了，你还会听见我吗？",
      "next": "end_huangqiuqiu",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "end_huangqiuqiu": {
      "id": "end_huangqiuqiu",
      "type": "end",
      "scene": "s10",
      "character": "huangqiuqiu",
      "title": "你终于听我说完",
      "text": "我起身时，她仍托着腮。那句断在杂音里的话，今晚有了完整的后半句。门外的雨还在下。我记住了一个名字，也留下了一个还答不了的问题。",
      "nextChapter": "下一章预告：她与这套旧设备有什么联系？雨停以后，还能听见她吗？本次回复只开启隐藏序章，不锁定恋爱关系。",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "s10_messages_03": {
      "id": "s10_messages_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "手机接连亮起。小满先发来消息，头像旁挂着一个剪刀表情。",
      "next": "g_s10_salon"
    },
    "preview_xiaoman_05": {
      "id": "preview_xiaoman_05",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "照片边缘照到半面镜子和一把空椅子。她没再用贴纸把没做好的地方盖起来。",
      "next": "end_xiaoman"
    },
    "g_preview_xiaoman": {
      "id": "g_preview_xiaoman",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "salon",
          "value": "portfolio",
          "next": "preview_xiaoman_portfolio_01"
        }
      ],
      "default": "preview_xiaoman_model_01"
    },
    "preview_xiaoman_portfolio_01": {
      "id": "preview_xiaoman_portfolio_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她传来的不是群里那页。最下方一张照片被揭下又贴回去，边缘留着一小圈胶印。",
      "next": "preview_xiaoman_portfolio_02"
    },
    "preview_xiaoman_portfolio_02": {
      "id": "preview_xiaoman_portfolio_02",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "这张后面不够整齐，但确实是我做的。放进去怕丢人，删掉又像我只会挑灯光。",
      "next": "preview_xiaoman_portfolio_03"
    },
    "preview_xiaoman_portfolio_03": {
      "id": "preview_xiaoman_portfolio_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先别删。我能看出前后变了哪里，可第三张侧面太暗，我看不清。要补拍的应该是这张。",
      "next": "preview_xiaoman_portfolio_04"
    },
    "preview_xiaoman_portfolio_04": {
      "id": "preview_xiaoman_portfolio_04",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "原来真能比“挺好”多说几个字。",
      "next": "preview_xiaoman_portfolio_05"
    },
    "preview_xiaoman_portfolio_05": {
      "id": "preview_xiaoman_portfolio_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你还要我挑吗？",
      "next": "preview_xiaoman_portfolio_06"
    },
    "preview_xiaoman_portfolio_06": {
      "id": "preview_xiaoman_portfolio_06",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "要。等会儿，我把原图发你。",
      "next": "preview_xiaoman_02"
    },
    "preview_xiaoman_model_01": {
      "id": "preview_xiaoman_model_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她把我的后脑勺发过来，在一处过渡上画了圈。那是她剪完后请师傅复核的地方。",
      "next": "preview_xiaoman_model_02"
    },
    "preview_xiaoman_model_02": {
      "id": "preview_xiaoman_model_02",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "后来照镜子，这里是不是还显得硬？你别怕我不高兴，先说看见什么。",
      "next": "preview_xiaoman_model_03"
    },
    "preview_xiaoman_model_03": {
      "id": "preview_xiaoman_model_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "正面看不出来。这张侧后面有一道，但另一张没有。光太不一样，我不能硬说是你没剪好。",
      "next": "preview_xiaoman_model_04"
    },
    "preview_xiaoman_model_04": {
      "id": "preview_xiaoman_model_04",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "我就卡在这里。想再练，又怕把能看的地方越修越短。",
      "next": "preview_xiaoman_model_05"
    },
    "preview_xiaoman_model_05": {
      "id": "preview_xiaoman_model_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这次先把光拍一样，再比？至少别让我的头一张圆、一张方。",
      "next": "preview_xiaoman_model_06"
    },
    "preview_xiaoman_model_06": {
      "id": "preview_xiaoman_model_06",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "行。下次只比图，你先不用英勇就座。",
      "next": "preview_xiaoman_02"
    },
    "preview_zhouzhi_05": {
      "id": "preview_zhouzhi_05",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "刚才说的是工作。吃面那件事，是我想约你。",
      "next": "g_preview_zhouzhi"
    },
    "preview_zhouzhi_06": {
      "id": "preview_zhouzhi_06",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "愿意。到时候我先把工具包放下。",
      "next": "preview_zhouzhi_07"
    },
    "preview_zhouzhi_07": {
      "id": "preview_zhouzhi_07",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "对，凳子给人坐。",
      "next": "preview_zhouzhi_08"
    },
    "preview_zhouzhi_08": {
      "id": "preview_zhouzhi_08",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她发来一个面碗的表情。下面没有再跟设备照片，我也没接着往上翻那张铭牌。",
      "next": "end_zhouzhi"
    },
    "g_preview_zhouzhi": {
      "id": "g_preview_zhouzhi",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "noodles",
          "value": "invite",
          "next": "preview_zhouzhi_invite_01"
        }
      ],
      "default": "preview_zhouzhi_space_01"
    },
    "preview_zhouzhi_invite_01": {
      "id": "preview_zhouzhi_invite_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这回也能吃到一半不说话？",
      "next": "preview_zhouzhi_invite_02"
    },
    "preview_zhouzhi_invite_02": {
      "id": "preview_zhouzhi_invite_02",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "能。不过辣了就喝水，别再说替老板省洗壶。",
      "next": "preview_zhouzhi_06"
    },
    "preview_zhouzhi_space_01": {
      "id": "preview_zhouzhi_space_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "第六天是你约，这次又让你先开口了。",
      "next": "preview_zhouzhi_space_02"
    },
    "preview_zhouzhi_space_02": {
      "id": "preview_zhouzhi_space_02",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我想约就约了。你愿不愿意，还是得你说。",
      "next": "preview_zhouzhi_06"
    },
    "g_preview_mengyao": {
      "id": "g_preview_mengyao",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "reunion",
          "value": "apologize",
          "next": "preview_mengyao_apologize_01"
        },
        {
          "flag": "reunion",
          "value": "appointment",
          "next": "preview_mengyao_appointment_01"
        }
      ],
      "default": "preview_mengyao_joke_01"
    },
    "preview_mengyao_apologize_01": {
      "id": "preview_mengyao_apologize_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "上次说怕答不上，是真的。但我看到了消息，也知道你在等。我只是更想躲过那场谈话。",
      "next": "preview_mengyao_apologize_02"
    },
    "preview_mengyao_apologize_02": {
      "id": "preview_mengyao_apologize_02",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这次的票也早买了。又是在等事情确定了，才觉得可以告诉别人？",
      "next": "preview_mengyao_apologize_03"
    },
    "preview_mengyao_apologize_03": {
      "id": "preview_mengyao_apologize_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是。工作没结果，就想假装还用不着说。今天才把这件事讲出来，不能算我以前没有瞒着。",
      "next": "preview_mengyao_apologize_04"
    },
    "preview_mengyao_apologize_04": {
      "id": "preview_mengyao_apologize_04",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她隔了好一会儿才回。那几秒，我没补一个笑脸，也没问她是不是生气了。",
      "next": "preview_mengyao_apologize_05"
    },
    "preview_mengyao_apologize_05": {
      "id": "preview_mengyao_apologize_05",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这句我需要想想。你说清了，我也不会马上就不难受。",
      "next": "preview_mengyao_apologize_06"
    },
    "preview_mengyao_apologize_06": {
      "id": "preview_mengyao_apologize_06",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。",
      "next": "end_mengyao"
    },
    "preview_mengyao_appointment_01": {
      "id": "preview_mengyao_appointment_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是不想让你知道。我没有一个让自己满意的答案，就连“我可能会走”也不肯告诉你，让你一直等。",
      "next": "preview_mengyao_appointment_02"
    },
    "preview_mengyao_appointment_02": {
      "id": "preview_mengyao_appointment_02",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这句你当时也可以说。",
      "next": "preview_mengyao_appointment_03"
    },
    "preview_mengyao_appointment_03": {
      "id": "preview_mengyao_appointment_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是。所以现在不该再把它拖到见面那天。对不起。",
      "next": "preview_mengyao_appointment_04"
    },
    "preview_mengyao_appointment_04": {
      "id": "preview_mengyao_appointment_04",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这句先留着。我们定好的那段时间照旧，剩下的当面说。",
      "next": "preview_mengyao_appointment_05"
    },
    "preview_mengyao_appointment_05": {
      "id": "preview_mengyao_appointment_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "照旧。",
      "next": "preview_mengyao_appointment_06"
    },
    "preview_mengyao_appointment_06": {
      "id": "preview_mengyao_appointment_06",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我看了一眼已经留出的空档，没有又发一遍截图。时间早就确认了，今晚终于多了一句回答。",
      "next": "end_mengyao"
    },
    "preview_mengyao_joke_01": {
      "id": "preview_mengyao_joke_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是不想让你知道。我以为不回答，就暂时不用承认自己可能会走。那天拿老同学开玩笑，也是在躲。对不起。",
      "next": "preview_mengyao_joke_02"
    },
    "preview_mengyao_joke_02": {
      "id": "preview_mengyao_joke_02",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这是你第一次答这个问题。",
      "next": "preview_mengyao_joke_03"
    },
    "preview_mengyao_joke_03": {
      "id": "preview_mengyao_joke_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我差点接一句“迟到总比缺席好”，打出两个字，又全删掉。",
      "next": "preview_mengyao_joke_04"
    },
    "preview_mengyao_joke_04": {
      "id": "preview_mengyao_joke_04",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "嗯。你那时等了很久。",
      "next": "preview_mengyao_joke_05"
    },
    "preview_mengyao_joke_05": {
      "id": "preview_mengyao_joke_05",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我看到了。今晚先到这里吧。",
      "next": "preview_mengyao_joke_06"
    },
    "preview_mengyao_joke_06": {
      "id": "preview_mengyao_joke_06",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回了“好”，没有趁她还在线，把下一次见面也追问出来。",
      "next": "end_mengyao"
    },
    "preview_yelan_05": {
      "id": "preview_yelan_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "忘东西了？",
      "next": "preview_yelan_06"
    },
    "preview_yelan_06": {
      "id": "preview_yelan_06",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "没有。就是总觉得，还该有个人叫我。",
      "next": "preview_yelan_07"
    },
    "preview_yelan_07": {
      "id": "preview_yelan_07",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "门里安静着。她把钥匙放进包底，拉上拉链，手终于空下来。",
      "next": "preview_yelan_08"
    },
    "preview_yelan_08": {
      "id": "preview_yelan_08",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我陪你走到坡口？",
      "next": "preview_yelan_09"
    },
    "preview_yelan_09": {
      "id": "preview_yelan_09",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "到路口吧。后面那段，我想自己慢慢走。",
      "next": "preview_yelan_10"
    },
    "preview_yelan_10": {
      "id": "preview_yelan_10",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她撑开伞，走了两步，又回头等我收好工具包。到了路口，她看看两边，没有先去摸手机。",
      "next": "preview_yelan_11",
      "cg": "cg07"
    },
    "preview_yelan_11": {
      "id": "preview_yelan_11",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我再走一会儿。你到家也早点歇。",
      "next": "end_yelan"
    },
    "g_preview_yelan": {
      "id": "g_preview_yelan",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "inventory",
          "value": "full",
          "next": "preview_yelan_full_01"
        }
      ],
      "default": "preview_yelan_limited_01"
    },
    "preview_yelan_full_01": {
      "id": "preview_yelan_full_01",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "你求职材料后来弄完了？",
      "next": "preview_yelan_full_02"
    },
    "preview_yelan_full_02": {
      "id": "preview_yelan_full_02",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "昨晚弄完的。翻了半天旧单，再看自己的名字都差点想找柜号。",
      "next": "preview_yelan_full_03"
    },
    "preview_yelan_full_03": {
      "id": "preview_yelan_full_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她笑了一下，把我们一起翻过的那叠纸压平，连夹板一起收进包里。",
      "next": "preview_yelan_02"
    },
    "preview_yelan_limited_01": {
      "id": "preview_yelan_limited_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "同事从里面示意，最后那页已经放回柜里。叶岚抬了抬手，像还要接过来，最后只点了一下头。",
      "next": "preview_yelan_limited_02"
    },
    "preview_yelan_limited_02": {
      "id": "preview_yelan_limited_02",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "好，明天再看。",
      "next": "preview_yelan_limited_03"
    },
    "preview_yelan_limited_03": {
      "id": "preview_yelan_limited_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她把夹板收进包。这次没有站在门口再核一次。",
      "next": "preview_yelan_02"
    }
  },
  "cgs": {
    "cg01": {
      "image": "assets/cg/cg-01-rain-return.png",
      "alt": "阴雨下午，文文的倒影映在站牌玻璃上，箱子和工具包在旁。"
    },
    "cg02": {
      "image": "assets/cg/cg-02-xiaoman-mirror.png",
      "alt": "理发镜旁，小满站在作品夹和空练习椅边。"
    },
    "cg03": {
      "image": "assets/cg/cg-03-zhouzhi-noodles.png",
      "alt": "雨夜桌边，周栀用汤碗压住报价单，指向照明一栏。"
    },
    "cg04": {
      "image": "assets/cg/cg-04-mengyao-camera.png",
      "alt": "阴雨下午，屋檐下的孟遥放低相机，看向文文。"
    },
    "cg05": {
      "image": "assets/cg/cg-05-yelan-inventory.png",
      "alt": "夜间包厢里，叶岚在倒扣纸箱上铺开清单，设备分开摆放。"
    },
    "cg06": {
      "image": "assets/cg/cg-06-maolang-confession.png",
      "alt": "下午的大厅，文文与毛狼在尺寸纸、笔和线箱旁停住。"
    },
    "cg07": {
      "image": "assets/cg/cg-07-yelan-off-duty.png",
      "alt": "雨夜，叶岚撑伞回头，等文文收好工具包。"
    },
    "cg08": {
      "image": "assets/cg/cg-08-huangqiuqiu-listening.png",
      "alt": "空包厢调音台旁，黄球球托腮，文文坐下倾听。"
    },
    "cg09": {
      "image": "assets/cg/cg-09-repair-handoff.png",
      "alt": "雨夜维修柜台前，师匠用笔压住故障单，毛狼与文文一起听交接要求。"
    },
    "cg13": {
      "image": "assets/cg/cg-13-xiaoman-night-stall.png",
      "alt": "雨夜摊桌边，小满将练习图从洋芋盘与蘸水旁挪开，砖红外套搭在椅背上。"
    }
  }
};
