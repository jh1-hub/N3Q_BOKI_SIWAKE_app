
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Explanations: Notes & Claims
 */

export const EXPLANATIONS_NOTES_CLAIMS = {
  'n3_nt_01': { 
    explanation: "電子記録債権の発生記録は、売掛金からの振替処理となります。",
    steps: [
      { comment: "「電子記録債権」（資産）が発生しました。", highlight: "電子記録債権の発生記録", debit: true, debitKey: "電子記録債権" },
      { comment: "売掛金の回収手段として発生したので、「売掛金」を減らします。", highlight: "掛代金...の回収として", credit: true, creditKey: "売掛金" }
    ]
  },
  'n3_nt_02': { 
    explanation: "支払側は「電子記録債務」として処理します。",
    steps: [
      { comment: "買掛金を支払ったので「買掛金」を減らします。", highlight: "買掛金...の支払いとして", debit: true, debitKey: "買掛金" },
      { comment: "手形の代わりに電子的な支払義務を負ったので、「電子記録債務」（負債）を計上します。", highlight: "電子記録債務の発生記録", credit: true, creditKey: "電子記録債務" }
    ]
  },
  'n3_nt_03': { 
    explanation: "売掛金の回収として手形を受け取った場合は「受取手形」が増加します。",
    steps: [
      { comment: "手形債権が発生したので「受取手形」（資産）を借方に計上します。", highlight: "約束手形を受け取った", debit: true, debitKey: "受取手形" },
      { comment: "売掛金が回収されたので「売掛金」を貸方で減らします。", highlight: "売掛金...を回収するため", credit: true, creditKey: "売掛金" }
    ]
  },
  'n3_nt_04': { 
    explanation: "手形の裏書譲渡は、保有している「受取手形」を相手に渡す処理です。",
    steps: [
      { comment: "買掛金を支払ったので、借方に「買掛金」を計上します。", highlight: "買掛金...を支払うため", debit: true, debitKey: "買掛金" },
      { comment: "手持ちの「受取手形」を他人に譲ったので、貸方で減らします。", highlight: "約束手形を裏書譲渡した", credit: true, creditKey: "受取手形" }
    ]
  },
  'n3_nt_05': { 
    explanation: "電子記録債権の現金化（割引に近い処理）では、手数料を売却損として処理します。",
    steps: [
      { comment: "債権を現金化したので「電子記録債権」が消滅します。", highlight: "電子記録債権...を、...現金化した", credit: true, creditKey: "電子記録債権" },
      { comment: "手数料は「電子記録債権売却損」（費用）として処理します。", highlight: "手数料...が差し引かれ", debit: true, debitKey: "電子記録債権売却損" },
      { comment: "残額が当座預金に入金されました。", highlight: "残額が当座預金口座に入金", debit: true, debitKey: "当座預金" }
    ]
  },
  'n3_nt_06': { 
    explanation: "電子記録債権の譲渡は、手形の裏書譲渡と同様に資産の減少として処理します。",
    steps: [
      { comment: "買掛金を支払ったので借方に「買掛金」。", highlight: "買掛金...を支払うため", debit: true, debitKey: "買掛金" },
      { comment: "電子記録債権を譲渡したので、貸方で「電子記録債権」を減らします。", highlight: "電子記録債権を譲渡する記録", credit: true, creditKey: "電子記録債権" }
    ]
  },
  
  // --- Other Receivables ---
  'n3_ot_01': { 
    explanation: "旅費などの概算払いは、金額が確定するまで「仮払金」として処理します。",
    steps: [
      { comment: "用途や金額が未確定な支出は「仮払金」（資産）とします。", highlight: "旅費の概算額として", debit: true, debitKey: "仮払金" },
      { comment: "現金を渡したので「現金」を減らします。", highlight: "現金で手渡した", credit: true, creditKey: "現金" }
    ]
  },
  'n3_ot_02': { 
    explanation: "仮払金の精算仕訳です。確定した費用を計上し、仮払金を消去します。",
    steps: [
      { comment: "旅費の金額が確定したので「旅費交通費」（費用）を計上します。", highlight: "旅費 28,000円 を使った", debit: true, debitKey: "旅費交通費" },
      { comment: "精算したので、先に計上していた「仮払金」を貸方で消します。", highlight: "概算払額", credit: true, creditKey: "仮払金" },
      { comment: "余ったお金が戻ってきたので「現金」を増やします。", highlight: "差額を現金で受け取った", debit: true, debitKey: "現金" }
    ]
  },
  'n3_ot_03': { 
    explanation: "給料支払時の源泉徴収分は、会社が一時的に預かるので「預り金」とします。",
    steps: [
      { comment: "給料総額を費用として計上します。", highlight: "給料 250,000円", debit: true, debitKey: "給料" },
      { comment: "従業員から税金を預かったので「預り金」（負債）を計上します。", highlight: "所得税の源泉徴収分", credit: true, creditKey: "預り金" },
      { comment: "手取り額（差額）を当座預金から支払いました。", highlight: "当座預金口座から振り込んだ", credit: true, creditKey: "当座預金" }
    ]
  },
  'n3_ot_04': { 
    explanation: "商品以外のものを後払いで購入した場合は「未払金」を使用します。",
    steps: [
      { comment: "備品を購入したので資産計上します。", highlight: "備品...を購入", debit: true, debitKey: "備品" },
      { comment: "商品ではないので買掛金ではなく「未払金」（負債）とします。", highlight: "代金は翌月末払い", credit: true, creditKey: "未払金" }
    ]
  },
  'n3_ot_05': { 
    explanation: "内容不明の入金は、判明するまで「仮受金」として処理します。",
    steps: [
      { comment: "入金があったので「当座預金」を増やします。", highlight: "当座預金口座に入金", debit: true, debitKey: "当座預金" },
      { comment: "内容が不明なので、一時的に「仮受金」（負債）としておきます。", highlight: "内容不明...一時的に処理", credit: true, creditKey: "仮受金" }
    ]
  },

  // --- Loans ---
  'n3_ln_01': { 
    explanation: "従業員にお金を貸した場合は「従業員貸付金」で処理します。",
    steps: [
      { comment: "従業員に対する債権なので、通常の「貸付金」と区別して「従業員貸付金」とします。", highlight: "従業員に対して...貸し付け", debit: true, debitKey: "従業員貸付金" },
      { comment: "現金で貸し渡したので「現金」が減少します。", highlight: "現金を手渡した", credit: true, creditKey: "現金" }
    ]
  },
  'n3_ln_02': { 
    explanation: "借入時に利息を先払い（天引き）された場合、その額を「支払利息」とします。",
    steps: [
      { comment: "手元に入るのは利息を引かれた残額です。", highlight: "残額が当座預金に振り込まれた", debit: true, debitKey: "当座預金" },
      { comment: "引かれた利息は費用の発生として処理します。", highlight: "利息...を差し引かれた", debit: true, debitKey: "支払利息" },
      { comment: "返済義務のある借入額は総額のままです。", highlight: "1,000,000円 を借り入れ", credit: true, creditKey: "借入金" }
    ]
  },
  'n3_ln_03': { 
    explanation: "手形を受け取って貸し付けた場合は「手形貸付金」となります。",
    steps: [
      { comment: "手形による貸付なので「手形貸付金」（資産）を計上します。", highlight: "手形を受け取った", debit: true, debitKey: "手形貸付金" },
      { comment: "小切手で貸したので「当座預金」が減少します。", highlight: "小切手を振り出した", credit: true, creditKey: "当座預金" }
    ]
  },
  'n3_ln_04': { 
    explanation: "借入金の返済仕訳です。元本と利息を同時に支払います。",
    steps: [
      { comment: "借入金を返済したので、負債を減らします（借方）。", highlight: "借入金...の返済期日", debit: true, debitKey: "借入金" },
      { comment: "利息は費用として計上します。", highlight: "利息 5,000円", debit: true, debitKey: "支払利息" },
      { comment: "合計額が口座から引き落とされました。", highlight: "当座預金口座から引き落とされた", credit: true, creditKey: "当座預金" }
    ]
  }
};
