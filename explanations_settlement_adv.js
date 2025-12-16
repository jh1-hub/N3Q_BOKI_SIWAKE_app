
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Explanations: Settlement II
 */

export const EXPLANATIONS_SETTLEMENT_ADV = {
  // --- Accruals & Deferrals ---
  'n3_st_02': { 
    explanation: "費用の繰延べ（前払費用の計上）です。",
    steps: [
      { comment: "翌期分を支払済みの状態なので、当期の「保険料」（費用）から除外します（貸方）。", highlight: "翌期分 20,000円 を繰り延べる", credit: true, creditKey: "保険料" },
      { comment: "その分を「前払保険料」（資産）として次期に繰り越します。", highlight: "翌期分", debit: true, debitKey: "前払保険料" }
    ]
  },
  'n3_st_03': { 
    explanation: "費用の見越し（未払費用の計上）です。",
    steps: [
      { comment: "当期に発生しているが未払いの利息を、「支払利息」（費用）として計上します。", highlight: "利息の未払分 5,000円", debit: true, debitKey: "支払利息" },
      { comment: "まだ払っていないので「未払利息」（負債）とします。", highlight: "計上する", credit: true, creditKey: "未払利息" }
    ]
  },
  'n3_st_08': { 
    explanation: "収益の見越し（未収収益の計上）です。",
    steps: [
      { comment: "当月分のサービス（部屋の貸出）は完了しているので、収益「受取家賃」を計上します。", highlight: "今月分の家賃 50,000円", credit: true, creditKey: "受取家賃" },
      { comment: "まだお金をもらっていないので、後で受け取る権利「未収家賃」（または未収収益）を借方に計上します。", highlight: "未収となっている", debit: true, debitKey: "未収家賃" }
    ]
  },
  'n3_st_15': { 
    explanation: "収益の繰延べ（前受収益の計上）です。",
    steps: [
      { comment: "当期の適正額は10万ですが、受取額は12万。つまり2万円貰いすぎています。", highlight: "当期分は 100,000円...受け取った金額は 120,000円", debit: false, credit: false },
      { comment: "貰いすぎた分は次期の収益なので、当期の「受取地代」から減らします（借方）。", highlight: "次期分を適切に処理", debit: true, debitKey: "受取地代" },
      { comment: "その分を「前受地代」（負債）として次期に繰り越します。", highlight: "", credit: true, creditKey: "前受地代" }
    ]
  },
  'n3_st_22': { 
    explanation: "継続的なサービス提供契約に基づく費用の見越し計上です。",
    steps: [
      { comment: "当月分の労働は提供されているので、費用として「給料」を計上します。", highlight: "従業員の給料（当月分）", debit: true, debitKey: "給料" },
      { comment: "まだ支払っていないので「未払給料」（負債）とします。", highlight: "未払いとなっている", credit: true, creditKey: "未払給料" }
    ]
  },

  // --- Cash Shortage & Supplies ---
  'n3_st_05': { 
    explanation: "決算整理における現金過不足の処理です。",
    steps: [
      { comment: "期中の「現金過不足」（借方）を消すため、貸方に記入します。", highlight: "現金過不足（借方）...について", credit: true, creditKey: "現金過不足" },
      { comment: "原因不明の不足分なので、「雑損」（費用）として処理します。", highlight: "雑損として処理する", debit: true, debitKey: "雑損" }
    ]
  },
  'n3_st_16': { 
    explanation: "未使用の切手や印紙は、資産である「貯蔵品」に振り替えます。",
    steps: [
      { comment: "未使用分の合計（5,000+3,000=8,000円）を「貯蔵品」（資産）として計上します。", highlight: "貯蔵品に振り替える", debit: true, debitKey: "貯蔵品" },
      { comment: "その分、当期の費用（通信費、租税公課）を取り消します（貸方）。", highlight: "未使用の切手...収入印紙", credit: true, creditKey: "通信費" }
    ]
  },
  'n3_st_23': { 
    explanation: "購入時に「資産」処理していた消耗品のうち、使った分を「費用」に振り替えます。",
    steps: [
      { comment: "使用した分は消費されたので、「消耗品費」（費用）に変わります。", highlight: "当期に使用した分", debit: true, debitKey: "消耗品費" },
      { comment: "その分、資産計上していた「消耗品」を減らします（貸方）。", highlight: "資産（消耗品）として処理していた", credit: true, creditKey: "消耗品" }
    ]
  },
  'n3_st_24': { 
    explanation: "現金過不足（貸方）は、現金が帳簿より多かった状態。原因不明なら「雑益」とします。",
    steps: [
      { comment: "「現金過不足」（貸方残高）を消すために借方に記入します。", highlight: "現金過不足（貸方）", debit: true, debitKey: "現金過不足" },
      { comment: "原因不明の余剰分は、利益として「雑益」に計上します。", highlight: "原因が判明しない", credit: true, creditKey: "雑益" }
    ]
  },
  'n3_st_28': { 
    explanation: "期中処理を経ずに、決算でいきなり現金不足が判明した場合の処理です。",
    steps: [
      { comment: "実際有高に合わせて「現金」を減らします（貸方）。", highlight: "実際有高が帳簿残高より...少ない", credit: true, creditKey: "現金" },
      { comment: "決算なので「現金過不足」は使わず、直接「雑損」で処理します。", highlight: "原因は不明", debit: true, debitKey: "雑損" }
    ]
  },

  // --- Closing Entries ---
  'n3_st_04': { 
    explanation: "株式会社の決算振替仕訳です。純利益を資本金ではなく「繰越利益剰余金」に移します。",
    steps: [
      { comment: "損益勘定の残高（純利益）を消すために借方に記入します。", highlight: "損益勘定の貸方残高", debit: true, debitKey: "損益" },
      { comment: "その分、会社の蓄積利益である「繰越利益剰余金」（純資産）を増やします。", highlight: "繰越利益剰余金勘定へ振り替える", credit: true, creditKey: "繰越利益剰余金" }
    ]
  },
  'n3_st_17': { 
    explanation: "純損失の場合は、繰越利益剰余金が減少します。",
    steps: [
      { comment: "純損失（借方残高）を消すため、損益勘定を貸方に記入します。", highlight: "損益勘定の借方残高", credit: true, creditKey: "損益" },
      { comment: "損失の分だけ「繰越利益剰余金」を減らします（借方）。", highlight: "繰越利益剰余金勘定へ振り替える", debit: true, debitKey: "繰越利益剰余金" }
    ]
  },
  'n3_st_09': { 
    explanation: "配当決議時の仕訳です。まだ支払っていないため「未払配当金」となります。",
    steps: [
      { comment: "純資産である「繰越利益剰余金」を減らして配当の原資にします。", highlight: "繰越利益剰余金を財源", debit: true, debitKey: "繰越利益剰余金" },
      { comment: "株主に支払う義務が生じたので、「未払配当金」（負債）を計上します。", highlight: "支払うことを決議した", credit: true, creditKey: "未払配当金" }
    ]
  },
  'n3_st_18': { 
    explanation: "決算振替の第一段階：収益勘定の振替です。",
    steps: [
      { comment: "収益（貸方科目）をゼロにするため、借方に記入します。", highlight: "収益の各勘定残高", debit: true, debitKey: "売上" },
      { comment: "その合計を「損益」勘定の貸方に集めます。", highlight: "損益勘定に振り替える", credit: true, creditKey: "損益" }
    ]
  },
  'n3_st_29': { 
    explanation: "決算振替の第二段階：費用勘定の振替です。",
    steps: [
      { comment: "費用（借方科目）をゼロにするため、貸方に記入します。", highlight: "費用の各勘定残高", credit: true, creditKey: "仕入" },
      { comment: "その合計を「損益」勘定の借方に集めます。", highlight: "損益勘定に振り替える", debit: true, debitKey: "損益" }
    ]
  }
};
