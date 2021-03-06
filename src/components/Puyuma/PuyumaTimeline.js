export const TIMELINE =  [
  {
    stationPrev: '貢寮',
    stationNext: '福隆',
    time: '16:05:59',
    status: '',
    conversations: [
      {
        character: 'driver',
        message: '6432 機車有問題，有時候動力會自動的消失，麻煩報告一下調度員'
      }
    ]
  },
  {
    stationPrev: '貢寮',
    stationNext: '福隆',
    time: '16:06:13',
    status: '',
    conversations: [
      {
        character: 'driver',
        message: '6432 機車有問題，有時候動力會自動消失'
      }
    ]
  },
  {
    stationPrev: '貢寮',
    stationNext: '福隆',
    time: '16:06:23',
    status: '',
    conversations: [
      {
        character: 'driver',
        message: '時好時壞'
      }
    ]
  },
  {
    stationPrev: '貢寮',
    stationNext: '福隆',
    time: '16:06:33',
    status: '',
    conversations: [
      {
        character: 'driver',
        message: '2008'
      }
    ]
  },
  {
    stationPrev: '福隆',
    stationNext: '大里',
    time: '16:07:55',
    status: '1、8 主風泵停止運轉',
    conversations: [
      {
        character: 'driver',
        message: '6432 您好。'
      },
      {
        character: 'scheduler',
        message: '6432 請問你車子怎麼樣？'
      },
      {
        character: 'driver',
        message: '6432 機車動力時好時壞。'
      },
      {
        character: 'scheduler',
        message: '什麼意思？什麼時好時壞？'
      },
      {
        character: 'driver',
        message: '就是有時候動力會自動切斷。'
      },
      {
        character: 'scheduler',
        message: '動力會自動切斷？有什麼故障指示燈嗎？'
      },
      {
        character: 'driver',
        message: '故障指示燈，就是 1 車和 8 車空壓機那個跳開。'
      },
      {
        character: 'scheduler',
        message: '空壓機跳開，1 車到 8 車空壓機跳開。'
      },
      {
        character: 'driver',
        message: '對呀，那個應該不會影響。'
      },
      {
        character: 'scheduler',
        message: '空壓機跳開就是你的空調，就是你的冷氣嘛。對不對？'
      },
      {
        character: 'driver',
        message: '對。但是我的動力有時候就是會切掉就沒有了。'
      },
      {
        character: 'scheduler',
        message: '這樣子厚，你現在開沒有問題嘛。'
      },
      {
        character: 'driver',
        message: '沒有問題，就是花蓮的時候，列檢可不可以上來看一下。'
      },
      {
        character: 'scheduler',
        message: '你宜蘭有沒有停？'
      },
      {
        character: 'driver',
        message: '或是檢查員。'
      },
      {
        character: 'scheduler',
        message: '你宜蘭有沒有停？'
      },
      {
        character: 'driver',
        message: '我宜蘭有停吔。'
      },
      {
        character: 'scheduler',
        message: '好，宜蘭有停我請宜蘭列檢上去看一下。'
      },
      {
        character: 'driver',
        message: '好，收到，謝謝。'
      },
      {
        character: 'scheduler',
        message: '好，謝謝。'
      },
    ]
  },
  {
    stationPrev: '大里',
    stationNext: '大溪',
    time: '16:13:48',
    status: 'MR 過低造成 MRPS 和 PBPS 未閉合，動力抑制',
    conversations: [
      {
        character: 'checker',
        message: '喂。喂。'
      },
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'checker',
        message: '師傅你好，請問你車子有什麼問題？'
      },
      {
        character: 'driver',
        message: '那個，電門自己會歸零，然後停留軔機會作用。'
      },
      {
        character: 'checker',
        message: '你說電門自己會歸零？什麼東西會歸零？喂，不好意思，我沒聽懂你說的話。'
      },
      {
        character: 'driver',
        message: '6432 機車有問題。'
      },
      {
        character: 'checker',
        message: '機車，嘿，你說什麼東西會歸零？'
      },
      {
        character: 'driver',
        message: '電門，電門就會自動切掉。動力。'
      },
      {
        character: 'checker',
        message: '動力，那如果把第 7 車馬達隔離呢？'
      },
      {
        character: 'driver',
        message: '電氣車的馬達隔離？'
      },
      {
        character: 'checker',
        message: '對，就把那一台，你是說某一車，你是說哪一車的馬達？是第 7 車馬達有問題嗎？'
      },
      {
        character: 'driver',
        message: '第 7 車馬達沒問題，是空壓機。'
      },
      {
        character: 'checker',
        message: '喂，所以說，你現在車子是不能動是不是？喂～收訊號好差。'
      },
      {
        character: 'driver',
        message: '現在停留軔機整個是作用。'
      },
      {
        character: 'checker',
        message: '停留軔機作用，好，那你現在隔離，他能跑嗎？'
      },
      {
        character: 'driver',
        message: '現在沒辦法啊，他現在電門都拉不起來啊。'
      },
      {
        character: 'checker',
        message: '拉不起來，好，好，我等一下回撥給你。'
      },
    ]
  },
  {
    // single
    stationPrev: '大里',
    stationNext: '大溪',
    time: '16:16:19',
    status: 'MR 恢復並請機班重新昇弓，疑似司機員重新啟動未開啟 ATP',
    conversations: [
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'checker',
        message: '喂～師傅你好，你現在處理狀況是如何？'
      },
      {
        character: 'driver',
        message: '我現在停留軔機駕駛端這還有一個沒辦法鬆軔。'
      },
      {
        character: 'checker',
        message: '那你是開車開到一半這個樣子，還是停站後起來變這個樣子？'
      },
      {
        character: 'driver',
        message: '就過中性區間，拉電門就都沒有速度。'
      },
      {
        character: 'checker',
        message: '經過中性區間是不是，疑？你會不會是 VCB 沒有閉合？對'
      },
      {
        character: 'driver',
        message: 'VCB 有閉合啊。'
      },
      {
        character: 'checker',
        message: '經過中性區間，那你車況是你還在處理就對了？'
      },
      {
        character: 'driver',
        message: '還是我給他重新降弓再一次？'
      },
      {
        character: 'checker',
        message: '沒關係，好，你再重新降弓再一次，如果真的不行有沒有，上面有杜檢查員的電話，這樣比較快。'
      },
      {
        character: 'driver',
        message: '0928？'
      },
      {
        character: 'checker',
        message: '對，0928xxxxxx 那一支，好那你先處理，我先不吵你。'
      },
      {
        character: 'driver',
        message: '好。'
      },
      {
        character: 'checker',
        message: '好，你先處理，你先處理。'
      },
    ]
  },
  {
    stationPrev: '大溪',
    stationNext: '龜山',
    time: '16:19:51',
    status: 'MR 曾回復至 6.0 bar 以上，此時 MRPS 未動作，動力抑制',
    conversations: [
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'scheduler',
        message: '請問你有沒有在移動啊？'
      },
      {
        character: 'driver',
        message: '有在移動，但是他現在是在滑行，沒有動力。速度 49，可是是在滑行。'
      },
      {
        character: 'scheduler',
        message: '沒有動力喔？'
      },
      {
        character: 'driver',
        message: '沒有動力。'
      },
      {
        character: 'scheduler',
        message: '哇～沒有動力，那你至少溜到龜山站內啊。看能不能啊。溜到龜山站內。'
      },
      {
        character: 'driver',
        message: '溜到龜山站內。'
      },
      {
        character: 'scheduler',
        message: '你後面 6234 跟著吶。'
      },
      {
        character: 'driver',
        message: '好。'
      },
    ]
  },
  {
    stationPrev: '大溪',
    stationNext: '龜山',
    time: '16:20:21',
    status: '此時 MR 過低 MRPS 切開動力抑制。',
    conversations: [
      {
        character: 'scheduler',
        message: '你～你～不要，可以動就溜到站內啦。'
      },
      {
        character: 'driver',
        message: '好。'
      },
      {
        character: 'scheduler',
        message: '如果沒有動力的話。'
      },
    ]
  },
  {
    stationPrev: '大溪',
    stationNext: '龜山',
    time: '16:20:33',
    status: 'MR 回復至 6.0 bar 以上。',
    conversations: [
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'scheduler',
        message: '你現在車子怎麼樣？'
      },
      {
        character: 'driver',
        message: '現在就是動力時有時無。'
      },
      {
        character: 'scheduler',
        message: '時有時無，那你拉的時候…'
      },
      {
        character: 'driver',
        message: '就是你電門拉，有的時候沒有，有時候又有。'
      },
      {
        character: 'scheduler',
        message: '那你現在呢？現在退回去再拉怎樣？'
      },
      {
        character: 'driver',
        message: '現在目前有。'
      },
      {
        character: 'scheduler',
        message: '有，有趕快速度加起來'
      },
      {
        character: 'driver',
        message: 'OK，好'
      },
    ]
  },
  {
    stationPrev: '大溪',
    stationNext: '龜山',
    time: '16:22:17',
    status: '此時 MR 過低造成 MRPS、PBPS 切開動力抑制。',
    conversations: [
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'scheduler',
        message: '你好，剛剛檢查員有叫你升降弓對不對。'
      },
    ]
  },
  {
    stationPrev: '大溪',
    stationNext: '龜山',
    time: '16:22:17',
    status: 'MR 曾恢復 MRPS 及 PBPS 動作，建立動力，隨後 MR 下降 MRPS 切開動力抑制。',
    conversations: [
      {
        character: 'driver',
        message: '剛剛有降弓再重新啟動，對。'
      },
      {
        character: 'scheduler',
        message: '好好好，那你現在可以了厚？我跟你講厚…'
      },
      {
        character: 'driver',
        message: '欸欸，現在還是不行。'
      },
    ]
  },
  {
    stationPrev: '大溪',
    stationNext: '龜山',
    time: '16:22:17',
    status: '傾斜系統確認進入備援傾斜狀態及主風泵強制停止。',
    conversations: [
      {
        character: 'scheduler',
        message: '還是不行？'
      },
      {
        character: 'driver',
        message: '現在又沒有動力了。'
      },
      {
        character: 'scheduler',
        message: '這樣子喔。'
      },
    ]
  },
  {
    stationPrev: '大溪',
    stationNext: '龜山',
    time: '16:22:17',
    status: 'MR 過低使 MRPS 及 PBPS 切開，動力抑制。',
    conversations: [
      {
        character: 'driver',
        message: '等一下看能不能溜到頭城。'
      },
      {
        character: 'scheduler',
        message: '好啦，你再拉拉看，再回去再復位再拉拉看。'
      },
      {
        character: 'driver',
        message: '時有時無。'
      },
      {
        character: 'scheduler',
        message: '還是時有時無？無的時候是顯示什麼？'
      },
      {
        character: 'driver',
        message: '是傾斜式，對啊。'
      },
      {
        character: 'scheduler',
        message: '蛤？'
      },
      {
        character: 'driver',
        message: '2008 跟 2007。'
      },
      {
        character: 'scheduler',
        message: '我是說你顯示什麼？顯示什麼故障。'
      },
      {
        character: 'driver',
        message: '好，目前顯示的故障，他是傾斜裝置車間通訊異常。'
      },
      {
        character: 'scheduler',
        message: '傾斜怎樣？'
      },
      {
        character: 'driver',
        message: '通訊異常，還有空壓機強制停止。'
      },
      {
        character: 'scheduler',
        message: '空壓機喔？好好好，那我暸解，你剛剛有降弓再升弓過了就對吧？'
      },
      {
        character: 'driver',
        message: '對，剛剛降弓升弓一次。'
      },
      {
        character: 'scheduler',
        message: '這樣子厚，你頭城有停車嗎？'
      },
      {
        character: 'driver',
        message: '呃～現在停車軔機的燈又亮了。'
      },
      {
        character: 'scheduler',
        message: '停留軔機的燈也亮？'
      },
      {
        character: 'driver',
        message: '對啊。'
      },
      {
        character: 'scheduler',
        message: '那你現在車子還能動嗎？'
      },
      {
        character: 'driver',
        message: '現在是在滑行。就不要再動了。'
      },
      {
        character: 'scheduler',
        message: '這樣子，那你復位一下看看，看能不能復位的起來，好，OK。'
      },
    ]
  },
  {
    stationPrev: '大溪',
    stationNext: '龜山',
    time: '16:22:17',
    status: '',
    conversations: [
      {
        character: 'driver',
        message: '好～好～。'
      },
    ]
  },
  {
    stationPrev: '龜山',
    stationNext: '頭城',
    time: '16:25:15',
    status: '',
    conversations: [
      {
        character: 'driver',
        message: '頭城，6432 呼叫。'
      },
    ]
  },
  {
    stationPrev: '龜山',
    stationNext: '頭城',
    time: '16:25:28',
    status: '',
    conversations: [
      {
        character: 'driver',
        message: '頭城，6432 呼叫'
      },
    ]
  },
  {
    stationPrev: '龜山',
    stationNext: '頭城',
    time: '16:25:28',
    status: '',
    conversations: [
      {
        character: 'driver',
        message: '6432呼叫頭城。'
      },
    ]
  },
  {
    stationPrev: '龜山',
    stationNext: '頭城',
    time: '16:25:33',
    status: '列車位於頭城附近。',
    conversations: [
      {
        character: 'driver',
        message: '啊，請問調度員報備一下 6432 請求頭城停車。'
      },
    ]
  },
  {
    stationPrev: '龜山',
    stationNext: '頭城',
    time: '16:26:54',
    status: 'MR 逐漸回升使 MRPS 閉合建立動力。',
    conversations: [
      {
        character: 'checker',
        message: '喂，6432 嗎？'
      },
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'checker',
        message: '嘿。'
      },
      {
        character: 'driver',
        message: '嘿你好。'
      },
      {
        character: 'checker',
        message: '啊你現在車子是怎樣？有問題嗎？我檢查股。'
      },
      {
        character: 'driver',
        message: '剛剛電門速有時候拉的起來，有時候沒有，時有時無。'
      },
      {
        character: 'checker',
        message: '啊你停軔機的燈有亮嗎？'
      },
      {
        character: 'checker',
        message: '有時候會有有時候會沒有喔？'
      },
      {
        character: 'driver',
        message: '有時候變零，有時候停留軔機會自動作用。'
      },
      {
        character: 'checker',
        message: '那你，那你知道哪一車的停留軔機嗎？TCMS 有沒有顯示？'
      },
      {
        character: 'driver',
        message: '全部都作用，然後車子就會停下來。'
      },
      {
        character: 'checker',
        message: '那你車子還在開嗎？'
      },
      {
        character: 'driver',
        message: '現在又有動力啊，現在車子在開，對啊。'
      },
      {
        character: 'checker',
        message: '啊你有沒有辦法確認哪一車的停留軔機有問題？'
      },
      {
        character: 'driver',
        message: '他每一車停留軔機都會亮啦。'
      },
      {
        character: 'checker',
        message: '每一車停留，嘿…'
      },
      {
        character: 'driver',
        message: '停留軔機都亮，對嘿。那ㄨㄛ'
      },
      {
        character: 'checker',
        message: '每一車停留軔機都會亮？'
      },
      {
        character: 'driver',
        message: '都亮，我就叫列車長把他鬆軔。'
      },
      {
        character: 'checker',
        message: '那你每一車都去鬆軔啊。'
      },
      {
        character: 'driver',
        message: '對，電門有時候拉有，有時候拉沒有。'
      },
      {
        character: 'checker',
        message: '怎麼可能會這樣子，不可能，那你有沒有看見綠色車側燈都會亮，你看他，如果真的作用，每一車車側燈都會亮。'
      },
      {
        character: 'driver',
        message: '對，DDU 都亮，DDU 停留軔機都亮。'
      },
      {
        character: 'checker',
        message: '蛤？'
      },
      {
        character: 'driver',
        message: '叫列車長去看。'
      },
      {
        character: 'checker',
        message: '你看 DDU 不準，DDU 只是看顯示啦，你要看看車側的有沒有。'
      },
      {
        character: 'driver',
        message: '亮起來，車子就停下來了。'
      },
      {
        character: 'checker',
        message: '嘿嘿嘿，你要看看是哪一車，你 TCMS 上面是全部都跳起來嗎？'
      },
      {
        character: 'driver',
        message: '看哪一車就對了？'
      },
      {
        character: 'checker',
        message: '應該不可能吧？'
      },
      {
        character: 'driver',
        message: '因為我現在是電門，他速度就變零，就拉不起來。'
      },
    ]
  },
  {
    stationPrev: '龜山',
    stationNext: '頭城',
    time: '16:26:54',
    status: 'MR 回升，但隨後下降後 MRPS 切開動力抑制。',
    conversations: [
      {
        character: 'checker',
        message: '怎麼可能會這樣？你就繼續跑，如果他亮的話，你就叫列車長，你先探頭，先探頭到車窗外面看看，看是哪一車綠色燈亮起來，不然你這樣沒辦法抓，不然你這樣怎麼抓呢？'
      },
    ]
  },
  {
    stationPrev: '龜山',
    stationNext: '頭城',
    time: '16:26:54',
    status: '傾斜系統進入備援傾斜，原因不明。',
    conversations: [
      {
        character: 'driver',
        message: '就亮起來，就全部都亮。'
      },
      {
        character: 'checker',
        message: '拉不起來停留軔機的燈就亮起來了嗎？那個燈啊，駕駛台停留軔機的燈。'
      },
    ]
  },
  {
    stationPrev: '龜山',
    stationNext: '頭城',
    time: '16:26:54',
    status: 'MR 過低，動力抑制。',
    conversations: [
      {
        character: 'driver',
        message: '車長也在這邊看，還有宜蘭工務段的啊。'
      },
      {
        character: 'checker',
        message: '再來，你就探頭看看哪一車，你要確定哪一車，不然這樣很難抓。'
      },
      {
        character: 'driver',
        message: '看哪一車就對啦？'
      },
      {
        character: 'checker',
        message: '好，有問題再跟我回報，你下一停靠站是哪裡？'
      },
      {
        character: 'driver',
        message: '好…'
      },
      {
        character: 'driver',
        message: '宜蘭'
      },
      {
        character: 'checker',
        message: '宜蘭喔，好你先開吧，你先開，那你有沒有晚點？'
      },
      {
        character: 'checker',
        message: '今天有沒有晚點？喂～你現在有沒晚點？'
      },
      {
        character: 'driver',
        message: '有啊，有晚點啊，我現在動力又不見了，現在電門又沒有速度。'
      },
      {
        character: 'checker',
        message: '趕快看啊，你現在趕快看車側綠燈有沒有亮起來？'
      },
      {
        character: 'driver',
        message: '車側的綠燈，那我請列車長幫我看車側的燈有沒有亮。'
      },
      {
        character: 'checker',
        message: '探頭就知道了。'
      },
      {
        character: 'driver',
        message: '我怎麼探頭，我探頭警醒就會卡掉啊。'
      },
      {
        character: 'checker',
        message: '好，叫列車長看一下，你現在還在走嗎？車子還在走嗎？'
      },
      {
        character: 'driver',
        message: '那個車側燈，不是不是，那個車側旁邊，不要摔下去，有亮嗎？'
      },
      {
        character: 'checker',
        message: '在車窗注意一下就好啦。'
      },
      {
        character: 'driver',
        message: '看不到…不要看了，太危險了。'
      },
      {
        character: 'checker',
        message: '現在還有動力嗎？還有動力是不是？'
      },
      {
        character: 'driver',
        message: '沒有吶，現在每一車車側燈都沒有亮啊，都正常啊。'
      },
      {
        character: 'checker',
        message: '那就不是停留軔機的問題吧。'
      },
      {
        character: 'driver',
        message: '應該不是停留軔機的問題，應該是電門吧。因為電門有時拉有，有時候拉沒有，這樣，有時候拉到一半，速度又自己變零這樣。'
      },
      {
        character: 'checker',
        message: '那…那你是全列車都一樣嗎？那你看馬達，馬達有沒有隔離掉。'
      },
      {
        character: 'driver',
        message: '對，我現在駕駛端這邊變成備援傾斜。'
      },
      {
        character: 'checker',
        message: '電源阻絕，那個是風泵的問題，電源阻絕那是哪一車你知道嗎？'
      },
      {
        character: 'driver',
        message: '這是駕駛端。'
      },
      {
        character: 'checker',
        message: '哪一車他應該會有哪一車，你最下面那一行有哪一車。'
      },
      {
        character: 'driver',
        message: '8 車'
      },
      {
        character: 'checker',
        message: '8 車，那你壓 8 車的，手壓 5 秒看會不會復原。'
      },
      {
        character: 'checker',
        message: '壓車的位置，看他會不會復原，不然電源阻絕也是可以用。'
      },
      {
        character: 'driver',
        message: '還是一樣黃的啊。'
      },
      {
        character: 'checker',
        message: '現在電門又可以了吧？'
      },
      {
        character: 'driver',
        message: '有時候有，有時候沒有，現在有。'
      },
      {
        character: 'driver',
        message: '現在宜蘭要停車，現在電門收掉。'
      },
      {
        character: 'checker',
        message: '現在又有電了是不是？電門又可以了吧？'
      },
      {
        character: 'driver',
        message: '對，現在到宜蘭。'
      },
      {
        character: 'checker',
        message: '好好，原則我會幫你換車，我會叫花蓮換車'
      },
      {
        character: 'driver',
        message: '花蓮要換車，對。'
      },
      {
        character: 'checker',
        message: '那你就盡量這樣開厚。'
      },
    ]
  },
  {
    stationPrev: '頭城',
    stationNext: '宜蘭',
    time: '16:35:51',
    status: '礁溪通過後滑行 MR 過低 MRPS、BPPS 切開，動力抑制。停車後，MR 恢復解除抑制。',
    conversations: [
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'scheduler',
        message: '請問現在有沒有問題。'
      },
      {
        character: 'driver',
        message: '現在宜蘭停車。'
      },
      {
        character: 'scheduler',
        message: '我知道，現在有沒有再有問題。你礁溪過來以後呢？'
      },
      {
        character: 'driver',
        message: '有啊，還是有啊，電門還是有時候會自動切掉。'
      },
      {
        character: 'scheduler',
        message: '還是會自動切掉？那停一下就會復位了？'
      },
      {
        character: 'driver',
        message: '沒有復位，就滑行，滑了一陣子停留軔機就全部都亮。就車子停住。就重新來一次，有時候又拉速度又起來。'
      },
      {
        character: 'scheduler',
        message: '喔，這樣子喔，那停留軔機他會熄掉嗎？'
      },
      {
        character: 'driver',
        message: '會啊，會熄掉啊，很慢。'
      },
    ]
  },
  {
    stationPrev: '頭城',
    stationNext: '宜蘭',
    time: '16:35:51',
    status: '宜蘭停車。',
    conversations: [
      {
        character: 'scheduler',
        message: '很慢就會熄掉就對了？好，好，那我暸解了。那就是你這樣滑行滑行他就會好了，好了就會再來就對了。'
      },
      {
        character: 'driver',
        message: '再來，對對對。'
      },
      {
        character: 'scheduler',
        message: '那你剛剛過中性區間的時候有沒有手動復位？'
      },
      {
        character: 'driver',
        message: '就是手動切。'
      },
      {
        character: 'scheduler',
        message: '手動切還是一樣嗎？'
      },
      {
        character: 'driver',
        message: '還是一樣。'
      },
      {
        character: 'scheduler',
        message: '礁溪過來還是一樣嗎？一樣有這個現象是不是？'
      },
      {
        character: 'driver',
        message: '對，還是一樣這種情形。時有時無。'
      },
      {
        character: 'scheduler',
        message: '時有時無要多久時間？'
      },
      {
        character: 'yilan',
        message: '6432 可以開車嗎？'
      },
      {
        character: 'scheduler',
        message: '你跟他說可以開車，我先把電話掛掉。'
      },
    ]
  },
  {
    stationPrev: '宜蘭',
    stationNext: '二結',
    time: '16:40:29',
    status: '宜蘭開車後。',
    conversations: [
      {
        character: 'checker',
        message: '喂…'
      },
      {
        character: 'driver',
        message: '6432 你好'
      },
      {
        character: 'checker',
        message: '6432 你好。'
      },
      {
        character: 'checker',
        message: '6432 嗎？你現車子還有動力嗎？'
      },
      {
        character: 'driver',
        message: '現在有啊。'
      },
      {
        character: 'checker',
        message: '現在又有，那你看看你現在 MR 是多少？'
      },
      {
        character: 'driver',
        message: '現在 MR 7 點多。'
      },
      {
        character: 'checker',
        message: '7 點多，那他會不會上來？'
      },
      {
        character: 'driver',
        message: '會呀，會上來很慢。'
      },
      {
        character: 'checker',
        message: '很慢喔…那你看空壓機有沒有亮起來？有沒有顯示故障？第幾車知道嗎？'
      },
    ]
  },
  {
    stationPrev: '宜蘭',
    stationNext: '二結',
    time: '16:40:29',
    status: 'MR>7 bar 但 1、8 車空壓機強制停止中。',
    conversations: [
      {
        character: 'driver',
        message: '空壓機有起來。第 1 跟第 8，第 8 車'
      },
      {
        character: 'checker',
        message: '第 8 車，我跟你講，很簡單，你第 8 車對不對，你叫列車長把你駕駛室後面右邊第 3 排，BOA、BOUN 把那個扳下來再扳上去。'
      },
      {
        character: 'checker',
        message: '嘿，那你現在這一車除了你還有誰？'
      },
      {
        character: 'driver',
        message: '工務已經在宜蘭下車了'
      },
      {
        character: 'checker',
        message: '那你叫列車長幫你扳一下。'
      },
      {
        character: 'driver',
        message: '叫他復位就對了。'
      },
      {
        character: 'checker',
        message: '最上面那一排，從右邊算來第 3 個 BOUN。'
      },
      {
        character: 'checker',
        message: '在後面，對，你車上除了你沒有其他人嗎，沒有了嗎？'
      },
      {
        character: 'driver',
        message: '旁邊沒有人'
      },
      {
        character: 'checker',
        message: '那你叫列車長過來好了，他是在第8車還是你這車還是第1車？'
      },
      {
        character: 'driver',
        message: '第 1 車，列車長他在後面，現在慢行。'
      },
      {
        character: 'checker',
        message: '第 1 車沒關係叫他先做後面那車，先做第 1 車駕駛室進去，後面電氣室配電盤電打開，最上面那一排，右邊算來最後一個 BOUN 扳下來再扳上去，你這一車你不能做，等車長來做啦。'
      },
    ]
  },
  {
    stationPrev: '羅東',
    stationNext: '冬山',
    time: '16:46:54',
    status: '8 車 BOUN OFF 位後再 ON 位，強制停止訊號再次產生，1 車未執行復位動作。',
    conversations: [
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'scheduler',
        message: '請問你有去復位主風泵的斷路器嗎？'
      },
      {
        character: 'driver',
        message: '強制空壓機的斷路器？'
      },
      {
        character: 'scheduler',
        message: '是，你有去復位嗎？'
      },
      {
        character: 'driver',
        message: '第 8 車而已，又跳。'
      },
      {
        character: 'scheduler',
        message: '復位後又跳是不是？'
      },
      {
        character: 'driver',
        message: '1 車沒有去復。'
      },
      {
        character: 'scheduler',
        message: '我跟你講，等等去復位起來，1 車叫列車長去復位，他在哪裡？'
      },
    ]
  },
  {
    stationPrev: '羅東',
    stationNext: '冬山',
    time: '16:46:54',
    status: '8 車 BOUN OFF 位後再 ON 位，強制停止訊號再次產生，1 車未執行復位動作。',
    conversations: [
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'scheduler',
        message: '請問你有去復位主風泵的斷路器嗎？'
      },
      {
        character: 'driver',
        message: '強制空壓機的斷路器？'
      },
      {
        character: 'scheduler',
        message: '是，你有去復位嗎？'
      },
      {
        character: 'driver',
        message: '第 8 車而已，又跳。'
      },
      {
        character: 'scheduler',
        message: '復位後又跳是不是？'
      },
      {
        character: 'driver',
        message: '1 車沒有去復。'
      },
      {
        character: 'scheduler',
        message: '我跟你講，等等去復位起來，1 車叫列車長去復位，他在哪裡？'
      },
    ]
  },
  {
    stationPrev: '羅東',
    stationNext: '冬山',
    time: '16:46:54',
    status: 'ATP 關機中',
    conversations: [
      {
        character: 'driver',
        message: '他現在應該在 1 車。'
      },
      {
        character: 'scheduler',
        message: '我是說你知不知那個斷路器在哪？能不能叫列車長復位。'
      },
      {
        character: 'driver',
        message: '那個 1 車的第 3 排 BOUN 關起來再打開。'
      },
      {
        character: 'scheduler',
        message: '我叫他去找你好了，你再教他。'
      },
      {
        character: 'driver',
        message: '好的，收到。'
      },
      {
        character: 'scheduler',
        message: '你 8 車復位起來又掉，是嗎？'
      },
      {
        character: 'driver',
        message: '現在變成 ATP 關起來。'
      },
      {
        character: 'scheduler',
        message: 'ATP 關起來會好嗎？'
      },
      {
        character: 'driver',
        message: 'ATP 關起來現在速度是有的。'
      },
      {
        character: 'scheduler',
        message: '不是，ATP 關起來他會是好的嗎？'
      },
      {
        character: 'driver',
        message: '目前關起來速度是有的，觀察看看。'
      },
      {
        character: 'scheduler',
        message: '好好好，那我叫列車長去你那邊，你教他復位。'
      },
      {
        character: 'driver',
        message: '好的，收到。'
      },
      {
        character: 'scheduler',
        message: 'OK！OK。'
      },
    ]
  },
  {
    stationPrev: '冬山',
    stationNext: '新馬',
    time: '16:48:52',
    status: '8 車 BOUN OFF 位後再 ON 位，強制停止訊號再次產生，1 車未執行復位動作。',
    conversations: [
      {
        character: 'driver',
        message: '6432 你好。'
      },
      {
        character: 'checker',
        message: '6432 你現在 BOU 有叫列車長幫你復位嗎？'
      },
      {
        character: 'driver',
        message: '1 車沒復位，8 車復位還是跳開。'
      },
      {
        character: 'checker',
        message: '怎樣？'
      },
      {
        character: 'driver',
        message: '1 車沒有復位，8 車復位還是跳。'
      },
      {
        character: 'checker',
        message: '跳開？你說什麼東西跳開。'
      },
      {
        character: 'driver',
        message: '那個，就是空壓機強制停止。'
      },
      {
        character: 'checker',
        message: '好，你再去復位一次。'
      },
      {
        character: 'checker',
        message: '你再去叫列車長扳一次。'
      },
      {
        character: 'checker',
        message: '有聽到嗎？'
      },
      {
        character: 'checker',
        message: '喂…'
      },
    ]
  },
]