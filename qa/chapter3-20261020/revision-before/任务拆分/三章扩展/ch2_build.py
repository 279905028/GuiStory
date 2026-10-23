import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
nodes = {}
scenes = {
    "ch2_take": {"title": "先拍一段会笑的", "chapter": 2, "day": 11, "time": "下午", "location": "回声大厅", "bg": "lobby"},
    "ch2_sample": {"title": "十二秒以外", "chapter": 2, "day": 11, "time": "晚上", "location": "师匠的维修柜台", "bg": "repair"},
    "ch2_alarm": {"title": "已经发出去的画面", "chapter": 2, "day": 12, "time": "下午", "location": "回声大厅", "bg": "lobby"},
    "ch2_after": {"title": "今晚先吃饭", "chapter": 2, "day": 12, "time": "夜间", "location": "坡口面馆", "bg": "noodles"},
    "ch2_edit": {"title": "谁留在片尾", "chapter": 2, "day": 13, "time": "晚上", "location": "回声 · 暂未安排接待的包厢", "bg": "room"},
    "ch2_show": {"title": "这一次，从头看完", "chapter": 2, "day": 14, "time": "下午", "location": "回声大厅", "bg": "lobby"},
    "ch2_night": {"title": "给明天留一点空", "chapter": 2, "day": 14, "time": "夜间", "location": "回声门外的屋檐", "bg": "street"},
    "ch2_qiu": {"title": "先跟我打招呼", "chapter": 2, "day": 14, "time": "夜间", "location": "回声 · 已结束接待的空包厢", "bg": "room"},
}


def block(prefix, scene, lines, next_id):
    parsed = [line.split("|", 1) for line in lines.strip().splitlines()]
    for i, (spec, text) in enumerate(parsed, 1):
        node_id = f"{prefix}_{i:02d}"
        expression = None
        if "@" in spec:
            spec, expression = spec.split("@", 1)
            if not expression.startswith(("expression-", "action-")):
                expression = "expression-" + expression
        if ">" in spec:
            speaker, character = spec.split(">", 1)
            character = character or None
        else:
            speaker = spec
            character = None if speaker == "narrator" else speaker
        node = {
            "id": node_id, "type": "line", "scene": scene,
            "speaker": speaker, "character": character, "text": text,
            "next": f"{prefix}_{i + 1:02d}" if i < len(parsed) else next_id,
        }
        if expression:
            node["expression"] = expression
        nodes[node_id] = node


def gate(node_id, scene, flag, cases, default):
    nodes[node_id] = {
        "id": node_id, "type": "gate", "scene": scene,
        "cases": [{"flag": flag, "value": value, "next": to} for value, to in cases],
        "default": default,
    }


def choice(node_id, scene, text, flag, choices):
    nodes[node_id] = {
        "id": node_id, "type": "choice", "scene": scene, "character": None,
        "text": text, "flag": flag,
        "choices": [{"label": label, "value": value, "next": to} for label, value, to in choices],
    }


block("ch2_open", "ch2_take", """
narrator|第十一天下午，毛狼的胳膊伸进镜头三次。第一次递线，第二次捡线，第三次专程进来问前两次拍着没有。
mengyao@serious|拍着了。素材里你出现得比店名多。
maolang@smile|昨天片名被否决了，今天我申请一行字幕：现场指导，毛狼。
zhouzhi@smile|你刚才问我线要绕哪边。可以，现场需要指导，毛狼。
narrator|《回声，还开着》先留作临时片名。筹备群里，小满发来语音，推剪声在背景里响，她午休只能看我们聊天。
xiaoman>|那我也申请一个，远程围观，罗小满。只拿字幕，不收拾你们的线。
maolang@action-explaining|这就不公平了，我至少带着手——
mengyao@smile|这段别删。我刚才录着声音，比你想的片名好。
narrator>maolang@hesitant|毛狼把线盘摆端正，装作没有笑。两秒以后，他又问自己的声音有没有破。
wenwen@wry|嘴没破，收音正常。可惜是两回事。
narrator|叶岚拿来当天的拍摄名单，只排愿意出镜的人。有人不想露脸，她把座位挪到画面外，还给他留下通道。
yelan@serious|营业照常。三点半前收线，员工先休息，不能为了拍上班，把休息拍没了。
mengyao@action-explaining|我不想拍一排人站着说舍不得。柜子怎么关、话筒怎么收，这些有人天天做，我想让它们留在片子里。
zhouzhi@smile|收话筒可以。擦桌子别让我重来八遍，桌子比我都要累。
narrator|我试着举起收音杆。毛狼在后面比了个再高一点的手势，这回没趁机替自己抢镜。
wenwen@serious|周栀接班前那段访问已经约好。余下的时间只够认真拍一组，先拍动作，还是让其他人说两句？
""", "ch2_c7")

choice("ch2_c7", "ch2_take", "第一组镜头，把时间留给哪一种真实？", "shootFocus", [
    ("先拍工作中的手，等大家习惯镜头再采访。", "hands", "ch2_hands_01"),
    ("先录每个人想留下的话，动作镜头随后补。", "voices", "ch2_voices_01"),
])
block("ch2_hands", "ch2_take", """
wenwen@serious|先拍手。我把机器放远点，你们照常做，漏了哪一步就下次再补。
narrator|周栀拢好话筒线，毛狼却把最后一圈绕反了。她没有叫停，等他自己发现，又把那一圈松开给他看。
zhouzhi@smile|别剪成我拯救同事。他明天能自己绕好，我也有绕错的时候。
mengyao@smile|保留你等他的那几秒。这个比一个漂亮动作有意思。
""", "ch2_record_01")
block("ch2_voices", "ch2_take", """
wenwen@serious|先录想说的话。谁还没想好就先听，不需要每个人都凑一句。
narrator|毛狼准备了一句“青春永不散场”。周栀看着他，直到他自己笑出声，把稿子揉在手里。
maolang@hesitant|那我就说，别总把坏话筒塞回好话筒那格。我下次找起来，真的很想骂人。
mengyao@smile|这句留下。你说“下次”的时候，听起来才像平时会来上班的人。
""", "ch2_record_01")
block("ch2_record", "ch2_take", """
narrator|轮到周栀，她先问我领夹麦有没有歪。我指了方向，等她自己调整好，才重新戴上耳机。
zhouzhi@serious|我想把摊支起来，先试两晚，看自己接不接得住。这里的班我会照常唱完，第三十天才停业。
zhouzhi@action-explaining|菜还在试，也没定开摊时间。以后哪天真摆了，想唱歌还是会唱，嗓子又不用交回店里。
narrator>mengyao@hesitant|孟遥按住停止键，没有立刻说好。她把前一句倒回去，又听了一遍。
mengyao@serious|想拍你在两件事之间怎么过日子。可我刚才差点只留下“把摊支起来”，那句更像一个漂亮的结尾。
zhouzhi@serious|结尾挺好听，我后面的班还得上。都留给我看一遍，我挑自己的话。
wenwen@smile|可以把试菜也记下来吗？不一定用，等你觉得合适再拿出来。
zhouzhi@smile|先吃过再提拍摄。你要是只会说“挺好”，试菜席不留给你。
narrator|她离开镜头去接班。毛狼把记事纸摊平，在临时片名下面写下“先吃过再说”。我们留下的第一段，竟然已经约到下一顿饭。
""", "ch2_sample_01")

block("ch2_sample", "ch2_sample", """
narrator|晚上，我回维修柜台交接设备。孟遥发来一段十二秒的工作样片，只想让我们听压缩后的人声有没有失真。
narrator|画面是无人使用的包厢，接周栀那句“把摊支起来”。文件名写了“样片”，小屏幕只露出前半截。
mengyao>|只是试听，还没给出镜的人审。画面和句子不完整，先留在筹备群里。
wenwen@serious|人声清楚，尾音没糊。内容我明天带耳机再从头看。
narrator|我回完才发现，“清楚”很容易被扫成“可以”。于是又补了一句“我只听了声音”，消息落在毛狼发来的尺寸表下面。
shijiang@serious|这只接头收进合格那栏。你手机里的事，忙完再看，别拿着两边都只看半截。
narrator|我把手机扣下，核完最后一个编号。师匠采用了我补的排查记录，没有再誊一份自己的。
narrator|毛狼在群里回了个“收到”。后来我才知道，他收到的是试听结果，并没把上面的用途看完整。
""", "ch2_alarm_01")

block("ch2_alarm", "ch2_alarm", """
narrator|第十二天下午，我刚到回声，周栀就把手机递过来。一位熟客问，今晚是不是不用来了，寄存的东西现在能不能取。
zhouzhi@serious|还有人要先订我摊上的十份晚饭。我连下周试哪道菜都没定。
narrator|聊天里转着昨天那十二秒。包厢空着，周栀说要摆摊。停业日期和“还没定时间”，都在视频外面。
yelan@serious|今天能正常接待，寄存也按原来的日期。前台已经回了几位，不能让后面的人一直猜。
maolang@downcast|我发的。老客群有人问片子进度，我把那个当预告转了。不是谁偷走的。
wenwen@surprised|你看到孟遥前面说——
narrator>maolang@downcast|毛狼点头又摇头。他往上翻，看到“只是试听”那句，手指停住。大厅的音乐还在放，比平时显得响。
maolang@serious|现在看到了。昨晚我只看见你说人声清楚，以为后面就在对尺寸。我没问就发，算我的。
mengyao@downcast|我把一个没上下文的片段做得像预告，还用了普通文件名。用途发在前一条，很容易跟文件分开。
wenwen@guilty|我回复也没把“只验声音”放在第一句。后来补的那条，你没看到。我当时该直接回在文件下面。
zhouzhi@serious|先别一人替一人分。毛狼，你发出去这件事要说清楚；我的话，我自己补，不用谁替我宣布新生活。
narrator>maolang@serious|毛狼把手机放到桌上，没再解锁又锁上。他抬头看周栀，等她把话说完。
zhouzhi@action-explaining|唱歌是我的工作，摆摊也是我想试的事。都没什么需要遮住。问题是那十二秒替我答应了一个还没定的日期。
maolang@serious|我跟群里说明是我误发。已经有两个人转出去，我一个个问到哪里了，能联系到的我来联系。
yelan@serious|我发店里的准确安排，周栀确认她那段。原视频超过撤回时间了，我们能请人删除，不能保证副本全没了。
mengyao@serious|先暂停继续发样片。我保存原始版本和修改记录，今天剪好的先给周栀看，她说不合适就不用。
wenwen@serious|现在可以先发简短的事实说明，再去逐个找人；也可以先找已知转发者补正，整理好同一段说明再公开。
zhouzhi@serious|两种都行。先发就先别带我的长回答；先找人也别拖到明天。今晚我要把自己的话写完。
""", "ch2_c8")

choice("ch2_c8", "ch2_alarm", "周栀确认两种顺序都可以，先做哪一步？", "spreadResponse", [
    ("先发已确认的事实说明，再逐个联系转发者。", "notice", "ch2_notice_01"),
    ("先联系已知转发者补正，今晚统一公开说明。", "contact", "ch2_contact_01"),
])
block("ch2_notice", "ch2_alarm", """
wenwen@serious|先让正在问的人看到日期。我陪毛狼整理联系人，说明由叶岚确认后发。
narrator|叶岚发出“今日照常营业、第三十天停业”。周栀加上“摊位仍在筹备，没有开放预订”，没有被催着解释更多。
maolang@serious|我在原群说清楚了：我把工作样片误当预告转发，内容没审过。请别继续转，已经转出的帮我补上这条。
narrator|回复很快安静下来，却又冒出一句“到底出了什么事”。短说明止住了眼前的误会，也留下更多人等着看完整解释。
wenwen@serious|这些问题我记下来，今晚一起回应。现在去找那两位，不能发完就当送到了。
""", "ch2_account_01")
block("ch2_contact", "ch2_alarm", """
wenwen@serious|先找已经转出去的两位。店里照常回复询问，晚上把同一段说明发全，别让几版说法互相打架。
narrator|毛狼当着我们拨通电话，一遍遍说明是自己误发。有人愿意补转，也有人只记得发给了几个朋友。
maolang@serious|不用替我说是剪辑的问题。我没确认就发，这句请留着。周栀还没开摊，回声今天也照常营业。
narrator|我们知道了几份副本的去向，也花掉整个午休。前台仍要逐个答复新来的询问，叶岚把水喝到一半，又接起电话。
wenwen@serious|够晚了，余下的记下继续找。现在合并说明给周栀看，不能让她一直等着。
""", "ch2_account_01")
block("ch2_account", "ch2_alarm", """
narrator|当晚，周栀写好自己的补充，自己按下发送。她保留唱完最后一班、继续试菜的打算，也明确现在不收预订。
zhouzhi>|想来唱歌照常来，想尝菜等我通知。那段视频没说完的就是这些。谢谢惦记，也别先替我把锅烧起来。
narrator|毛狼在原群补齐说明和出错经过，请看过旧版的人带上更正。一位熟客回了句“那我周末还是照常来”。
maolang@hesitant|明天我自己再问一遍补转的情况。你们不用替我盯着，也不用替我说算了。
zhouzhi@serious|好。片子继续拍，但下一次发出去以前，先给我看见。
""", "ch2_after_01")

block("ch2_after", "ch2_after", """
narrator|夜里下过一阵雨。我在面馆看见毛狼，他面前那碗面没怎么动，手机倒摆在最方便接电话的位置。
wenwen@tired|先吃一口。再看，面能直接给你织围巾。
maolang@hesitant|你骂两句也行，今天你那句“你看到前面说”，我听着就知道后面是什么。
wenwen@serious|后面是我也发过没看全的东西。但这回是你发的，我不会拿自己以前的事把它抵掉。
narrator>maolang@downcast|他低头把黏在一起的面挑开，没有笑。我把自己那碗往旁边挪了挪，给他手机留出一块不会溅汤的位置。
maolang@serious|我不是想抢谁的功劳。老客问起，我就想让他们知道，这次我也真在做点事。然后觉得问一句显得很外行。
wenwen@serious|我知道你在做。昨天收线没拍到的那半小时，也不是就不算了。
narrator|毛狼抬头看我。我等他自己拿起筷子，才把昨天抢镜的那段给他看。他伸着胳膊申请字幕，周栀在画外笑，后面还有我的声音。
maolang@smile|这段留着吧。以后我说自己从没想过出名，你拿这个堵我。
narrator|他笑了一下，又低头回复联系人。竞争的那点别扭还在，今天的错也没被笑过去，但这碗面终于有人认真吃了。
""", "ch2_edit_01")

block("ch2_edit", "ch2_edit", """
narrator|第十三天晚上，孟遥在空包厢里剪片。屏幕的光照着她的手，她把周栀的两句原话调到一起，来回听了三遍。
mengyao@serious|这一版先留给出镜的人审。昨天的公开说明已经有了，片子不用假装是一封更长的道歉信。
wenwen@serious|那你现在最想留下什么？
mengyao@hesitant|人还在做事。可我一想到停业，手就总想往空房间上拖。那种画面太容易替我说“结束”了。
narrator>mengyao@hesitant|她第一次把鼠标推到一边，没有用进度条填满停顿。我也没伸手替她决定。
mengyao@serious|我怕拍得普通。怕花这么久，最后只有几个人上班、下班，什么漂亮的句子都没有。
wenwen@smile|昨天毛狼说面能织围巾，你拍了没有？
mengyao@surprised|那不是你说的吗？
wenwen@wry|那先不用。太漂亮，影响你的真实。
narrator>mengyao@smile|她终于笑出来，又在笑到一半时看了我一眼。我忽然很想让她多笑一会儿，已经不是为了片子能顺利剪完。
yelan@serious|我只能再留二十分钟。片尾的事今天定吧，后面营业需要这间。
""", "ch2_g_focus")

gate("ch2_g_focus", "ch2_edit", "shootFocus", [("hands", "ch2_focus_hands_01")], "ch2_focus_voices_01")
block("ch2_focus_hands", "ch2_edit", """
mengyao@serious|第一天先拍的那组手很有用。周栀等毛狼重新绕线那几秒，我想留完整，不用音乐催它。
""", "ch2_ending_01")
block("ch2_focus_voices", "ch2_edit", """
mengyao@serious|第一天先录的那几句话，我想留毛狼说“下次”。它很普通，但听得出大家并没有把今天当最后一天。
""", "ch2_ending_01")
block("ch2_ending", "ch2_edit", """
yelan@hesitant|片尾能不能等人收完这一个班？别让他们从镜头里消失得比店还快。
mengyao@serious|可以。也可以保留空房间，让他们已经同意使用的话留在声音里。一个拍今天还在继续，一个留这个地方本来的样子。
wenwen@serious|拍收工，就得再约一次愿意出镜的人；留空房，这版能更早完成，但不把它剪成今天就已停业。
""", "ch2_c9")

choice("ch2_c9", "ch2_edit", "片尾怎样记住回声，也不替谁提前结束？", "filmEnding", [
    ("保留空房与获准使用的声音，明确拍摄和停业日期。", "room", "ch2_ending_room_01"),
    ("补拍愿意出镜的人收工，为这一个普通班次结尾。", "people", "ch2_ending_people_01"),
])
block("ch2_ending_room", "ch2_edit", """
wenwen@serious|留空房吧。结尾写清那是营业间隙拍的，让人知道空着一会儿，和已经结束不是一回事。
yelan@hesitant|那把日期留够久一点。别一闪过去，别人只记得那扇门关了。
mengyao@serious|门不关。镜头停在房间里，最后听见人叫下一位，声音用已经得到同意的那条。
narrator|她把一段悲伤的临时配乐拖走。房间忽然没有那么空，画外有人笑着问，谁又把笔拿跑了。
""", "ch2_cut_join_01")
block("ch2_ending_people", "ch2_edit", """
wenwen@serious|再拍一次收工吧。愿意留下的人先确认时间，不要求谁为了结尾重新上班。
yelan@serious|明天下午有一组换班。只拍愿意出镜的人，提前休息的照常走，别在门口把谁等住。
mengyao@serious|那初版推迟到换班后一起看。我只要一段他们走出画面的过程，不喊“再有感情一点”。
narrator|叶岚发出邀请，又给自己标了离开的时间。她也愿意出镜，这一回，却没把自己写成最后一个必须留下的人。
""", "ch2_cut_join_01")
block("ch2_cut_join", "ch2_edit", """
narrator|大家各自确认自己的画面和声音。有人要求剪掉一句，我把原文件留好，只在审阅版上做修改，没有劝他再想想。
mengyao@serious|十二秒样片我们留在内部，正式这一版换新编号。以后别人拿旧的来问，至少能说明白是哪一段。
wenwen@serious|我明天来放片和验收音。要是有人临时不能来，先发给本人看，没回就不算同意。
narrator|散场时，孟遥把相机装回包里。我替她撑着门，她走过门槛，又转身叫了我一声。
mengyao@hesitant|刚才我说怕拍得普通，你没有马上告诉我，我一定能拍得很好。谢谢，那个保证我也知道你给不了。
""", "ch2_show_01")

block("ch2_show", "ch2_show", """
narrator|第十四天下午，回声大厅摆了几把朝向屏幕的椅子。没有红布，也没有人用麦克风宣布开始。
""", "ch2_g_ending_shoot")
gate("ch2_g_ending_shoot", "ch2_show", "filmEnding", [("people", "ch2_shoot_people_01")], "ch2_shoot_room_01")
block("ch2_shoot_people", "ch2_show", """
narrator|愿意出镜的同事换完班，一起走过大厅。周栀停下来等叶岚拉好包，毛狼想摆手，被两人同时笑着赶开。镜头只拍了一次。
""", "ch2_watch_01")
block("ch2_shoot_room", "ch2_show", """
narrator|孟遥补全了日期，空包厢后接上下一段接待的声音。我们确认画面里没有客人的物品，才把它放进今天的审阅版。
""", "ch2_watch_01")
block("ch2_watch", "ch2_show", """
narrator|片子从毛狼伸进来的胳膊开始。旁边的人认出声音，笑起来；毛狼没替自己解释，抬手让我们接着看。
zhouzhi@smile|这次我终于把后半句说完了。还有，第三十天最后一班结束以后别都围着我问试菜，先让我睡觉。
yelan@smile|记住了。短片完成，不增加临时工作内容。
narrator|孟遥等大家看完才开口。她没有问感不感动，只问有没有谁被剪成了自己不愿意成为的样子。
maolang@serious|这版我认。给我发发布用的那份就好，内部样片我不再往别的群里搬。
mengyao@serious|这份是两分钟的初版，今天确认的内容可以公开。后面还有拍摄，更新时照样先给本人看。
narrator|叶岚按大家确认的范围发布短片初版，附上停业日期、寄存安排和旧样片更正。周栀的补充原文也得到她再次确认。
""", "ch2_g_response")
gate("ch2_g_response", "ch2_show", "spreadResponse", [("notice", "ch2_result_notice_01")], "ch2_result_contact_01")
block("ch2_result_notice", "ch2_show", """
narrator|前天先发的短说明下面，终于补上这段完整内容。还有人追问为什么突然澄清，叶岚把同一份经过回复过去，没有再剪一版刺激的标题。
""", "ch2_result_01")
block("ch2_result_contact", "ch2_show", """
narrator|前天逐个联系过的人里，有人主动补转了新版；也有人一直没回。毛狼在名单上保留“未确认”，没有为了好看把那一格打勾。
""", "ch2_result_01")
block("ch2_result", "ch2_show", """
narrator|一份旧副本仍在我们看不到的聊天里。能确认补正的，我们逐一记下；看不到的，没有人保证已经消失。
zhouzhi@smile|反正下一位再问我摊开没开，我就发这份。再问菜好不好吃，我也得先知道。
narrator|屏幕暗了。小满在群里发来一张举着推剪的贴纸，说片子收到了，自己今天的练习也终于没被师傅中途接过去。
xiaoman>|你们看完片了？我这边还有一张没拍好。明天午后有空再说，今天别加班看我的头发。
wenwen@smile|我想自己去看。不是送充电座，也不是路过。明天的空档排好，我给你一个准话。
narrator|她隔了一会儿回了个“行”。那把镜子边的椅子，终于不需要一台坏机器替我留出位置。还差一个双方都合适的时间。
""", "ch2_night_01")

block("ch2_night", "ch2_night", """
narrator|夜里，贵阳演出队发来资料补充通知：我的申请仍在筛选，符合条件的候选人可以选择到场测评。录用栏依然空着。
narrator|我把需要补交的材料列在自己的本子上，没拿这封信给今天的短片添一个大团圆。第二十八天的行程，还得逐项安排。
wenwen@determined|明天先把答应的事做完，再留时间准备测评。两件事都不能只写“尽量”。
narrator|手机里有试菜的时间，有小满留下的午后，也有孟遥尚未说完的话。叶岚发完今天的回执，第一次在群里说自己已经下班。
narrator|我站在檐下，发现自己在意的不只是有没有被需要。我开始想知道，工作结束以后，还能和谁多待一会儿。
""", "ch2_g_signal")

gate("ch2_g_signal", "ch2_night", "qiuSignal", [("record", "ch2_g_reply")], "ch2_leave_01")
gate("ch2_g_reply", "ch2_night", "qiuReply", [("reply", "ch2_qiu_invite_01")], "ch2_leave_01")
block("ch2_qiu_invite", "ch2_night", """
narrator|那个黄色头像又亮了，问我走了没有。我回了“还在”，它发来空包厢的号码。我先问过叶岚，得到收钥匙前十分钟的空档。
""", "ch2_g_qiu_known")
gate("ch2_g_qiu_known", "ch2_qiu", "preview", [("huangqiuqiu", "ch2_qiu_known_01")], "ch2_qiu_first_01")
block("ch2_qiu_known", "ch2_qiu", """
narrator>huangqiuqiu@hesitant|黄球球还是那个托着腮的圆球。看见我先望向调音台，她的小手敲了敲椅背。
huangqiuqiu@displeased|认识过了也不算吗？今天能先跟我打招呼，再看那台机器吗？
wenwen@embarrassed|晚上好，黄球球。今天还想聊吗？
huangqiuqiu@smile|想。这次轮到我问一句。
""", "ch2_qiu_talk_01")
block("ch2_qiu_first", "ch2_qiu", """
narrator|我推门进去。调音台旁有个黄色圆球，深色眉毛下的大眼睛望着我，两只小手托住腮。它先指了指空椅子。
陌生的声音>|先别找螺丝。我叫黄球球，成年女性，二十四岁。你可以坐下问，但今晚不开放拆机参观。
wenwen@surprised|我是文文。那天我敲过三下，听见你接上了。后半句话，你还想说吗？
huangqiuqiu@serious|想。我想说“先让我说完，再决定要不要修”。你没说出来的，我听不见，也猜不到；我自己的来历，今天不想讲。
wenwen@serious|好，黄球球。椅子我坐这把，可以吗？
huangqiuqiu@smile|可以。下次来，先跟我打招呼，别让那台机器每次都排我前面。今天轮到我问一句。
""", "ch2_qiu_talk_01")
block("ch2_qiu_talk", "ch2_qiu", """
huangqiuqiu@hesitant|你没有东西要修的时候，会干什么？别答“等着修下一样”，这不算休息。
narrator|我原本想讲今天的短片，话到嘴边又停住。她问的很具体，却不是我已经准备好的一份工作汇报。
wenwen@smile|小时候会在雨停后踩水。挑看着最深的，结果鞋漏了，回家挨说。现在会站旁边先判断鞋能不能扛住。
huangqiuqiu@smile|原来你从小就在做泡水测试。那你现在，还想踩吗？
wenwen@hesitant|有时候想。也会想跟人再坐一会儿，不用等她有什么事交给我。
narrator>huangqiuqiu@hesitant|她没追问那个人是谁，圆球往椅子这边偏了些。我第一次看见她想接话，又自己等了一下。
huangqiuqiu@smile|那坐完这十分钟。你不拆我，我也不替你修今天。
narrator|门外有人轻轻敲门提醒时间。我起身前说了“下次见，黄球球”，这次她先松开手，向我摆了一下。
""", "ch2_leave_01")
block("ch2_leave", "ch2_night", """
narrator|回家的路上，雨短暂地小了。路灯下还有积水，我绕开最深的那一处，把明天的一段空闲认真留了下来。
""", "end_ch2")
nodes["end_ch2"] = {
    "id": "end_ch2", "type": "end", "scene": "ch2_night", "character": None,
    "title": "第二章 · 镜头没有拍到的",
    "text": "工作样片已经无法全部收回，完整的话却终于由当事人说了出来。短片有了能公开的初版，回声还在营业，大家各自的生活也还在继续。明天，我想亲自赴一个约。",
    "nextChapter": "第三章 · 想见你，不必有事：第十五天起，为一段关系留出具体的时间。",
    "next": "ch3_open_01",
}

# Small, factual callbacks preserve the different work the player actually did.
nodes["ch2_open_12"]["next"] = "ch2_g_inventory"
gate("ch2_g_inventory", "ch2_take", "inventory", [("full", "ch2_inventory_full_01")], "ch2_inventory_limited_01")
block("ch2_inventory_full", "ch2_take", """
narrator|叶岚翻到我交的整张清单，指着我们一起找出的旧编号。我照表取出线材，这回不用再猜哪一套能上。
""", "ch2_open_13")
block("ch2_inventory_limited", "ch2_take", """
narrator|接班同事照我留下的柜号找出线材，把他补完签名的那页交给叶岚。清单已经走到另一个人手里，照样能用。
""", "ch2_open_13")
nodes["ch2_result_03"]["next"] = "ch2_g_salon"
del nodes["ch2_result_04"]
gate("ch2_g_salon", "ch2_show", "salon", [("portfolio", "ch2_salon_portfolio_01")], "ch2_salon_model_01")
block("ch2_salon_portfolio", "ch2_show", """
xiaoman>|上次作品页缺的侧面补上了，还有一张不满意。明天午后有空再说，今天别加班看我的头发。
""", "ch2_result_05")
block("ch2_salon_model", "ch2_show", """
xiaoman>|你上次当模特的照片我留着了，今天拍的想放旁边比比。明天午后有空再说，今天别加班看头发。
""", "ch2_result_05")

result = {
    "scenes": scenes, "nodes": nodes, "start": "ch2_open_01", "end": "end_ch2",
    "notes": [
        "第二章覆盖第11—14天，新增三次选择但不引入好感分数。工作样片误发为有限范围的熟客群误读，没有新增恶人或职业污名。",
        "shootFocus=hands/voices：首组拍摄不同，day13剪辑依据回调；两种路径均录周栀完整陈述。",
        "spreadResponse=notice/contact：事实短说明与已知转发者联系的先后顺序不同、时间代价不同，均在day12发布本人确认的完整补充，day14回收。",
        "filmEnding=room/people：片尾空房+获准声音或普通换班，day14素材与放映安排回调；全部为现有背景与立绘，不冒用旧CG。",
        "旧flag inventory/salon各有一次事实回调，不把整单与两小时交接、作品页与真人模特写成同一经历。",
        "qiuSignal=record且qiuReply=reply的玩家必经day14隐藏会面；preview=huangqiuqiu承接相识，其余首次会面先由本人说出黄球球、成年女性24岁，随后才显示角色和立绘。其余路径不显示姓名、立绘或新增线索。",
        "贵阳仍是筛选中的候选资格、可选择到场测评，不等于录用；回声仍在返乡后第三十天停业。",
        "整章外部节点引用只有end_ch2.next=ch3_open_01。第三章可据三个新flag作真实回调。"
    ]
}

for node in nodes.values():
    assert node["scene"] in scenes
    refs = ([node["next"]] if "next" in node else [])
    refs += ([node["default"]] if "default" in node else [])
    refs += [item["next"] for item in node.get("cases", [])]
    refs += [item["next"] for item in node.get("choices", [])]
    for ref in refs:
        assert ref in nodes or (node["id"] == "end_ch2" and ref == "ch3_open_01"), (node["id"], ref)
    if node["type"] == "line":
        assert len(node["text"]) <= 100, (node["id"], len(node["text"]))

out = HERE / "chapter2.json"
out.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
print(json.dumps({"file": str(out), "scenes": len(scenes), "nodes": len(nodes),
                  "lines": sum(n["type"] == "line" for n in nodes.values()),
                  "choices": sum(n["type"] == "choice" for n in nodes.values())}, ensure_ascii=False))
