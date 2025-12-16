
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

// --- Collection Items (Updated for Nissho 3 Scope) ---
export const COLLECTION_ITEMS = [
  // Common (15) - Basic Items
  { 
    id: 1, name: "現金", rarity: 1, icon: "💰", 
    desc: "通貨および通貨代用証券（他人振出小切手、送金小切手、郵便為替証書など）。日商簿記では、自己振出小切手の回収は当座預金の増加となる点に注意。" 
  },
  { 
    id: 2, name: "当座預金", rarity: 1, icon: "🏦", 
    desc: "小切手の支払いに使用する口座。日商3級では「当座借越」契約を結び、残高を超えて振り出した場合（貸方残高）の処理が重要論点。" 
  },
  { 
    id: 3, name: "売掛金", rarity: 1, icon: "📓", 
    desc: "商品販売の未収代金。クレジットカード決済の場合は「クレジット売掛金」として区別することが多いのが最近のトレンド。" 
  },
  { 
    id: 4, name: "電子記録債権", rarity: 1, icon: "💾", 
    desc: "手形に代わる新しい決済手段。紛失リスクがなく、印紙代も不要。「発生記録」を行うことで債権が発生する。日商3級の必須項目。" 
  },
  { 
    id: 5, name: "仕入", rarity: 1, icon: "🚚", 
    desc: "商品を買った費用。三分法（仕入・売上・繰越商品）が基本。仕入諸掛（引取運賃など）は取得原価に含めるのが鉄則。" 
  },
  { 
    id: 6, name: "売上", rarity: 1, icon: "🏷️", 
    desc: "商品を売った収益。発送費（売上諸掛）を当社が負担する場合は、売上から引かず「発送費」として別途費用計上する。" 
  },
  { 
    id: 7, name: "受取手形", rarity: 1, icon: "📜", 
    desc: "手形代金を受け取る権利。電子記録債権への移行が進んでいるが、依然として試験には頻出。裏書譲渡や割引も範囲内。" 
  },
  { 
    id: 8, name: "通信費", rarity: 1, icon: "📮", 
    desc: "切手、電話代、ネット代。決算時に未使用の切手がある場合は「貯蔵品」への振替が必要。" 
  },
  { 
    id: 9, name: "消耗品費", rarity: 1, icon: "✏️", 
    desc: "事務用品など。購入時に全額費用処理する方法と、資産計上する方法があるが、3級では購入時費用処理→決算時貯蔵品振替が一般的。" 
  },
  { 
    id: 10, name: "旅費交通費", rarity: 1, icon: "🚕", 
    desc: "従業員の移動費。Suica等へのチャージ時は「仮払金」とし、使用報告時にこの科目に振り替える処理も問われる。" 
  },
  { 
    id: 11, name: "未払金", rarity: 1, icon: "💳", 
    desc: "商品以外のモノ（備品など）を買った代金の未払い。商品売買の「買掛金」と明確に区別すること。" 
  },
  { 
    id: 12, name: "未収金", rarity: 1, icon: "🤲", 
    desc: "商品以外のモノ（固定資産など）を売った代金の未回収分。「未収入金」とも呼ぶ。売掛金との区別が絶対。" 
  },
  { 
    id: 13, name: "借入金", rarity: 1, icon: "💸", 
    desc: "手形を用いた「手形借入金」と区別する。役員からの借入は「役員借入金」とすることもある。" 
  },
  { 
    id: 14, name: "貸付金", rarity: 1, icon: "🤝", 
    desc: "お金を貸した場合の債権。従業員への貸付は「従業員貸付金」として区別することがある。" 
  },
  { 
    id: 15, name: "租税公課", rarity: 1, icon: "🏛️", 
    desc: "固定資産税、印紙税（収入印紙）、自動車税など。消費税や法人税はここには含めない。" 
  },

  // Rare (10) - Intermediate Items
  { 
    id: 16, name: "クレジット売掛金", rarity: 2, icon: "💳", 
    desc: "クレカ払いで商品を販売した場合の債権。信販会社への手数料を差し引いて入金される処理とセットで覚える必須科目。" 
  },
  { 
    id: 17, name: "仮払消費税", rarity: 2, icon: "🛒", 
    desc: "仕入れや経費支払時に支払った消費税。決算時に「仮受消費税」と相殺し、差額を納付または還付する。" 
  },
  { 
    id: 18, name: "仮受消費税", rarity: 2, icon: "🧾", 
    desc: "売上時に顧客から預かった消費税。負債の性質を持つ。税抜方式での記帳が日商3級のスタンダード。" 
  },
  { 
    id: 19, name: "減価償却累計額", rarity: 2, icon: "📉", 
    desc: "固定資産の価値減少分を蓄積する勘定（間接法）。日商3級では、有形固定資産は原則として間接法で記帳する。" 
  },
  { 
    id: 20, name: "貸倒引当金", rarity: 2, icon: "🛡️", 
    desc: "将来の貸倒れに備えるマイナスの資産。差額補充法での計算が基本。期中の貸倒れ処理との組み合わせが頻出。" 
  },
  { 
    id: 21, name: "法定福利費", rarity: 2, icon: "🏥", 
    desc: "会社が負担する社会保険料。従業員負担分（預り金）と合わせて納付する仕訳は、給料支払いの応用問題として重要。" 
  },
  { 
    id: 22, name: "法人税等", rarity: 2, icon: "🏢", 
    desc: "会社の利益にかかる税金。中間納付（仮払法人税等）と決算時の確定額（未払法人税等）の差額調整がポイント。" 
  },
  { 
    id: 23, name: "現金過不足", rarity: 2, icon: "⚖️", 
    desc: "実際有高と帳簿残高が合わない時の一時的な勘定。決算までに原因が判明しなければ、雑損または雑益に振り替える。" 
  },
  { 
    id: 24, name: "貯蔵品", rarity: 2, icon: "🗄️", 
    desc: "決算時に未使用の切手や収入印紙を資産に振り替える際に使用。翌期首に再振替仕訳を行う。" 
  },
  { 
    id: 25, name: "前払費用", rarity: 2, icon: "⏳", 
    desc: "「費用収益の見越し・繰延べ」の代表格。保険料の前払い分などを次期に繰り越すための経過勘定資産。" 
  },

  // Super Rare (5) - Advanced/Closing Items
  { 
    id: 26, name: "繰越利益剰余金", rarity: 3, icon: "💎", 
    desc: "株式会社における、過去の利益の蓄積。日商3級では「損益」勘定からここへ純利益を振り替える決算振替仕訳がゴール。" 
  },
  { 
    id: 27, name: "当座借越", rarity: 3, icon: "📉", 
    desc: "当座預金の残高を超えて小切手を振り出した状態（銀行からの借金）。「当座預金」勘定のマイナス（貸方残高）として管理することも多い。" 
  },
  { 
    id: 28, name: "土地・建物", rarity: 3, icon: "🏯", 
    desc: "固定資産の売却は難関論点。取得原価、減価償却累計額を消し込み、売却額との差額を売却益・売却損とする一連の流れが必要。" 
  },
  { 
    id: 29, name: "損益", rarity: 3, icon: "⚖️", 
    desc: "決算振替仕訳でのみ登場する集合勘定。全ての収益と費用を集め、その差額（純利益）を繰越利益剰余金へ送る。" 
  },
  { 
    id: 30, name: "配当金", rarity: 3, icon: "🧧", 
    desc: "株主への利益還元。繰越利益剰余金を財源とし、同時に「利益準備金」の積立も行う（3級では準備金積立は範囲外だが配当は出る）。" 
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
