
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Data Module
 * React 19 Migration: ES Module Format
 */

// --- Helpers for Randomization ---
export const Randomizer = {
  round: (num, precision = 1000) => Math.round(num / precision) * precision,
  getAmount: (base, variation = 0.2, precision = 1000) => {
    const min = base * (1 - variation);
    const max = base * (1 + variation);
    const raw = Math.random() * (max - min) + min;
    return Randomizer.round(raw, precision);
  },
  fmt: (num) => num.toLocaleString(),
  updateSteps: (steps, mapObj) => { return steps; } 
};

// --- Collection Items (Updated for Nissho 3 Scope with Humor) ---
export const COLLECTION_ITEMS = [
  // Common (15) - Basic Items
  { 
    id: 1, name: "現金", rarity: 1, icon: "💰", 
    desc: "みんな大好き諭吉さん（あるいは栄一さん）。他人振出小切手や配当金領収証もここ。なお、自分が振り出した小切手が戻ってきた時は「当座預金」が増える。ややこしいけど、自分のミスは自分で帳消しってこと。" 
  },
  { 
    id: 2, name: "当座預金", rarity: 1, icon: "🏦", 
    desc: "小切手専用の口座。利息がつかないかわいそうな子。でも残高マイナスになっても銀行が立て替えてくれる（当座借越契約）という、実はVIP待遇を受けている。" 
  },
  { 
    id: 3, name: "売掛金", rarity: 1, icon: "📓", 
    desc: "「ツケ」で売った代金を回収する権利。口約束に近いが、簿記の世界では絶対的な拘束力を持つ。クレカ払いの時は「クレジット売掛金」という別名で呼ばれる。" 
  },
  { 
    id: 4, name: "電子記録債権", rarity: 1, icon: "💾", 
    desc: "手形のデジタル進化版。紙じゃないから無くさないし、収入印紙も不要でエコ。最強の債権だが、名前が長くて画数が多いのが唯一の欠点。" 
  },
  { 
    id: 5, name: "仕入", rarity: 1, icon: "🚚", 
    desc: "商品を仕入れた費用。三分法では「仕入」、分記法では「商品」と名前が変わるカメレオン。引取運賃などの諸掛（しょがかり）は、嫌でもここに含めなければならない。" 
  },
  { 
    id: 6, name: "売上", rarity: 1, icon: "🏷️", 
    desc: "商品が売れた喜びの瞬間。発送費を負担する場合、売上から引かずに「発送費」として別に計上するのは、売上の数字を少しでも大きく見せたい商売人の意地かもしれない。" 
  },
  { 
    id: 7, name: "受取手形", rarity: 1, icon: "📜", 
    desc: "「◯月◯日に払います」という約束が書かれた紙。電子化の波に押され気味だが、試験ではまだまだ現役。裏書して他人に押し付ける（譲渡する）ことも可能。" 
  },
  { 
    id: 8, name: "通信費", rarity: 1, icon: "📮", 
    desc: "切手、電話、ネット代。決算時に未使用の切手が残っていると、資産（貯蔵品）に強制連行される。使い切っておけば面倒な仕訳をしなくて済むのに。" 
  },
  { 
    id: 9, name: "消耗品費", rarity: 1, icon: "✏️", 
    desc: "コピー用紙やペンなど。買った瞬間に「費用」にするか、一旦「資産」にするかで派閥が分かれるが、3級試験界隈では「購入時費用処理→決算時資産振替」派が最大勢力。" 
  },
  { 
    id: 10, name: "旅費交通費", rarity: 1, icon: "🚕", 
    desc: "出張費や電車賃。Suicaへのチャージは一旦「仮払金」にしておき、何に使ったか白状させてからこの科目に振り替えるのが鉄則。" 
  },
  { 
    id: 11, name: "未払金", rarity: 1, icon: "💳", 
    desc: "商品「以外」のモノを買って、代金を後払いにした状態。「買掛金」との違いは、買ったものが商売のネタ（商品）か、それ以外（備品など）か。この区別は死ぬほど重要。" 
  },
  { 
    id: 12, name: "未収金", rarity: 1, icon: "🤲", 
    desc: "商品「以外」を売って、代金を後で回収する権利。土地や建物を売った時によく登場する。売掛金と間違えると試験官に冷たい目で見られる。" 
  },
  { 
    id: 13, name: "借入金", rarity: 1, icon: "💸", 
    desc: "借金。手形を渡して借りると「手形借入金」にランクアップする。返すアテがあるなら健全な資金調達、アテがないなら..." 
  },
  { 
    id: 14, name: "貸付金", rarity: 1, icon: "🤝", 
    desc: "お金を貸した時の債権。従業員に貸すときは「従業員貸付金」、役員なら「役員貸付金」と相手によって呼び名を変えることもある。" 
  },
  { 
    id: 15, name: "租税公課", rarity: 1, icon: "🏛️", 
    desc: "税金（租税）と公的な負担金（公課）。固定資産税や印紙税はここ。なお、消費税と法人税は仲間に入れてもらえず、専用の勘定科目がある。" 
  },

  // Rare (10) - Intermediate Items
  { 
    id: 16, name: "クレジット売掛金", rarity: 2, icon: "💳", 
    desc: "クレカで売った時の債権。後で信販会社から入金されるが、手数料という名のショバ代を引かれる運命にある。最近の実務では必須の知識。" 
  },
  { 
    id: 17, name: "仮払消費税", rarity: 2, icon: "🛒", 
    desc: "仕入れの時に「とりあえず」払った消費税。決算の時に、売上で預かった消費税と相殺バトルを行い、勝った（払いすぎた）分は還付される。" 
  },
  { 
    id: 18, name: "仮受消費税", rarity: 2, icon: "🧾", 
    desc: "お客さんから「とりあえず」預かっている消費税。会社のお金ではないので、使い込んではいけない（負債）。決算で国に納めるために待機している。" 
  },
  { 
    id: 19, name: "減価償却累計額", rarity: 2, icon: "📉", 
    desc: "建物や備品が古くなって価値が減った分の合計額。直接資産を減らさずに「あえて別勘定で記録する（間接法）」というツンデレな手法で管理される。" 
  },
  { 
    id: 20, name: "貸倒引当金", rarity: 2, icon: "🛡️", 
    desc: "「もし貸した金が返ってこなかったら...」というネガティブな想像から生まれるマイナスの資産。これを計上しておくのが大人のリスク管理（保守主義）。" 
  },
  { 
    id: 21, name: "法定福利費", rarity: 2, icon: "🏥", 
    desc: "会社が負担する社会保険料。給料から天引きした従業員負担分（預り金）と合体して年金事務所に払う。会社にとっては結構重い負担。" 
  },
  { 
    id: 22, name: "法人税等", rarity: 2, icon: "🏢", 
    desc: "会社が儲かった分だけ持っていかれる税金。中間納付で先に払わされ（仮払）、決算で残りを払わされる（未払）。逃れることはできない。" 
  },
  { 
    id: 23, name: "現金過不足", rarity: 2, icon: "⚖️", 
    desc: "金庫の中身と帳簿が合わない非常事態に使う仮の勘定。決算までに原因を突き止めないと「雑損」や「雑益」に強制変更され、闇に葬られる。" 
  },
  { 
    id: 24, name: "貯蔵品", rarity: 2, icon: "🗄️", 
    desc: "決算の時点で使いきれなかった切手や印紙の避難所。金券ショップに売れる価値があるので、ゴミ箱（費用）から拾い上げて資産計上する。" 
  },
  { 
    id: 25, name: "前払費用", rarity: 2, icon: "⏳", 
    desc: "「来年の分も先に払っといたよ」という状態。サービスを受ける権利があるので資産扱い。経過勘定項目の中で一番イメージしやすい優等生。" 
  },

  // Super Rare (5) - Advanced/Closing Items
  { 
    id: 26, name: "繰越利益剰余金", rarity: 3, icon: "💎", 
    desc: "会社の歴史そのもの。過去に稼ぎ出した利益の蓄積。「損益」という戦場を生き残った純利益たちが、最後にここに集結する。" 
  },
  { 
    id: 27, name: "当座借越", rarity: 3, icon: "📉", 
    desc: "当座預金の残高を超えて小切手を振り出した状態。要するに銀行への借金。一勘定制なら「当座預金」のマイナス、二勘定制なら「当座借越」という負債になる。" 
  },
  { 
    id: 28, name: "土地・建物", rarity: 3, icon: "🏯", 
    desc: "固定資産四天王の筆頭。土地は腐らないので減価償却しないが、建物はボロくなるので償却する。売却時の仕訳は3級のラスボス級難易度。" 
  },
  { 
    id: 29, name: "損益", rarity: 3, icon: "⚖️", 
    desc: "決算の時だけ現れる幻の勘定。全ての収益と費用を吸い込み、プラスなら純利益、マイナスなら純損失を吐き出して消えるブラックホール。" 
  },
  { 
    id: 30, name: "配当金", rarity: 3, icon: "🧧", 
    desc: "株主へのお小遣い。繰越利益剰余金を削って支払う。配当を決議した瞬間はまだ払っていないので「未払配当金」となるのがポイント。" 
  }
];

// --- Genre Configuration (Nissho 3 Structure) ---
export const GENRE_STRUCTURE = [
  {
    id: 'intro_cash',
    title: '💰 現金・預金・商品',
    subs: [
      { id: 'cash_deposits', title: '現金・過不足・当座' },
      { id: 'merch_basic', title: '商品売買(諸掛・返品)' },
      { id: 'credit_trans', title: 'クレジット・商品券' }
    ]
  },
  {
    id: 'notes_claims',
    title: '💳 手形・債権債務',
    subs: [
      { id: 'notes_elec', title: '手形・電子記録債権' },
      { id: 'other_receivables', title: '未収・未払・仮払' },
      { id: 'loans', title: '貸付・借入・手形貸借' }
    ]
  },
  {
    id: 'assets_tax',
    title: '🏢 固定資産・税金',
    subs: [
      { id: 'fixed_assets_buy', title: '固定資産の購入・売却' },
      { id: 'consumption_tax', title: '消費税の処理' },
      { id: 'corporate_tax', title: '法人税等の処理' }
    ]
  },
  {
    id: 'settlement',
    title: '📊 決算整理 I',
    subs: [
      { id: 'inventory_closing', title: '売上原価の算定' },
      { id: 'bad_debts_closing', title: '貸倒引当金' },
      { id: 'depreciation_closing', title: '減価償却(間接法)' }
    ]
  },
  {
    id: 'settlement_adv',
    title: '📑 決算整理 II',
    subs: [
      { id: 'accrual_deferral', title: '見越・繰延' },
      { id: 'cash_shortage', title: '現金過不足・貯蔵品' },
      { id: 'closing_entries', title: '決算振替・配当' }
    ]
  }
];
