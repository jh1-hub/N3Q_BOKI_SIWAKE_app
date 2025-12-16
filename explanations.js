
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Explanations: Other Genres
 */

export const EXPLANATIONS_OTHERS = {
  // --- Notes & Electronic Claims ---
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
    explanation: "従業員にお金を貸した場合は「従業員貸付金」で処理します。",
    steps: [
      { comment: "従業員に対する債権なので、通常の「貸付金」と区別して「従業員貸付金」とします。", highlight: "従業員に対して...貸し付け", debit: true, debitKey: "従業員貸付金" },
      { comment: "現金で貸し渡したので「現金」が減少します。", highlight: "現金を手渡した", credit: true, creditKey: "現金" }
    ]
  },

  // --- Fixed Assets ---
  'n3_fa_01': { 
    explanation: "間接法の売却処理です。取得原価と累計額を相殺し、差額で損益を計算します。",
    steps: [
      { comment: "代金は後受けなので「未収金」（資産）を計上します。", highlight: "代金は月末に受け取る", debit: true, debitKey: "未収金" },
      { comment: "間接法なので、積み立ててきた「減価償却累計額」を借方にして消滅させます。", highlight: "減価償却累計額 450,000円", debit: true, debitKey: "減価償却累計額" },
      { comment: "売却した「備品」を取得原価で貸方に記入して消滅させます。", highlight: "取得原価 500,000円", credit: true, creditKey: "備品" },
      { comment: "貸借差額を計算します。帳簿価額(5万)より安く(1万)売ったので、4万円の「固定資産売却損」です。", highlight: "10,000円 で売却", debit: true, debitKey: "固定資産売却損" }
    ]
  },
  'n3_fa_02': { 
    explanation: "固定資産の購入に伴う付随費用は、取得原価に含めます。",
    steps: [
      { comment: "車両本体価格に諸費用（付随費用）を足した金額を「車両運搬具」として計上します。\n2,000,000 + 100,000 = 2,100,000円", highlight: "購入に伴う諸費用", debit: true, debitKey: "車両運搬具" },
      { comment: "全額を小切手で支払ったので「当座預金」を減らします。", highlight: "小切手を振り出した", credit: true, creditKey: "当座預金" }
    ]
  },

  // --- Tax ---
  'n3_tx_01': { 
    explanation: "税抜方式の仕入では、消費税分を「仮払消費税」とします。",
    steps: [
      { comment: "商品本体価格のみを「仕入」とします。", highlight: "商品 200,000円（税抜）", debit: true, debitKey: "仕入" },
      { comment: "消費税分は「仮払消費税」（資産）として計上します。", highlight: "消費税 10%", debit: true, debitKey: "仮払消費税" },
      { comment: "相手先には税込金額を支払う義務があるため、「買掛金」は税込合計額になります。", highlight: "220,000円 を掛けとした", credit: true, creditKey: "買掛金" }
    ]
  },
  'n3_tx_02': { 
    explanation: "税抜方式の売上では、消費税分を「仮受消費税」とします。",
    steps: [
      { comment: "税込合計額を受け取る権利があるため、「売掛金」は税込額です。", highlight: "330,000円 を掛けとした", debit: true, debitKey: "売掛金" },
      { comment: "商品本体価格のみを「売上」とします。", highlight: "商品 300,000円（税抜）", credit: true, creditKey: "売上" },
      { comment: "預かった消費税は「仮受消費税」（負債）として計上します。", highlight: "消費税 10%", credit: true, creditKey: "仮受消費税" }
    ]
  },
  'n3_tx_03': { 
    explanation: "法人税等の確定仕訳です。仮払分を精算し、不足分を未払計上します。",
    steps: [
      { comment: "当期の税金費用として確定額を「法人税等」に計上します。", highlight: "180,000円 と確定した", debit: true, debitKey: "法人税等" },
      { comment: "中間納付していた「仮払法人税等」を貸方にして消します。", highlight: "中間申告分 80,000円", credit: true, creditKey: "仮払法人税等" },
      { comment: "差額（これから払う分）を「未払法人税等」とします。", highlight: "未払法人税等", credit: true, creditKey: "未払法人税等" }
    ]
  },
  'n3_tx_04': { 
    explanation: "固定資産税などの税金は「租税公課」勘定（費用）で処理します。",
    steps: [
      { comment: "固定資産税と都市計画税は、事業に必要な経費なので「租税公課」として計上します。", highlight: "固定資産税...都市計画税", debit: true, debitKey: "租税公課" },
      { comment: "現金で納付したので、貸方は「現金」です。", highlight: "現金で納付", credit: true, creditKey: "現金" }
    ]
  },

  // --- Settlement ---
  'n3_st_01': { 
    explanation: "差額補充法による貸倒引当金の設定です。",
    steps: [
      { comment: "設定目標額：2,000,000 × 2% = 40,000円", highlight: "2% の貸倒引当金を設定", debit: false, credit: false },
      { comment: "繰入額：目標 40,000 - 残高 15,000 = 25,000円", highlight: "残高は 15,000円", debit: false, credit: false },
      { comment: "不足分を「貸倒引当金繰入」（費用）として計上し、引当金を増やします。", highlight: "差額補充法", debit: true, credit: true }
    ]
  },
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
  'n3_st_04': { 
    explanation: "株式会社の決算振替仕訳です。純利益を資本金ではなく「繰越利益剰余金」に移します。",
    steps: [
      { comment: "損益勘定の残高（純利益）を消すために借方に記入します。", highlight: "損益勘定の貸方残高", debit: true, debitKey: "損益" },
      { comment: "その分、会社の蓄積利益である「繰越利益剰余金」（純資産）を増やします。", highlight: "繰越利益剰余金勘定へ振り替える", credit: true, creditKey: "繰越利益剰余金" }
    ]
  },
  'n3_st_05': { 
    explanation: "決算整理における現金過不足の処理です。",
    steps: [
      { comment: "期中の「現金過不足」（借方）を消すため、貸方に記入します。", highlight: "現金過不足（借方）...について", credit: true, creditKey: "現金過不足" },
      { comment: "原因不明の不足分なので、「雑損」（費用）として処理します。", highlight: "雑損として処理する", debit: true, debitKey: "雑損" }
    ]
  },
  'n3_st_06': { 
    explanation: "売上原価算定の仕訳（しーくり・くりし）です。",
    steps: [
      { comment: "【期首分】前期からの繰越商品を仕入（費用）に加えます（しー・くり）。\n借方：仕入 100,000 / 貸方：繰越商品 100,000", highlight: "期首商品棚卸高は 100,000円", debit: true, debitKey: "仕入" },
      { comment: "【期末分】売れ残った商品を仕入から引いて、資産に戻します（くり・し）。\n借方：繰越商品 80,000 / 貸方：仕入 80,000", highlight: "期末商品棚卸高は 80,000円", credit: true, creditKey: "仕入" }
    ]
  },
  'n3_st_07': { 
    explanation: "定額法による減価償却費の計算：取得原価 ÷ 耐用年数",
    steps: [
      { comment: "計算：6,000,000円 ÷ 30年 = 200,000円（1年分）", highlight: "取得原価...耐用年数 30年", debit: false, credit: false },
      { comment: "「減価償却費」（費用）を借方に計上します。", highlight: "建物の減価償却を行う", debit: true, debitKey: "減価償却費" },
      { comment: "間接法なので、貸方は「減価償却累計額」を使用します。", highlight: "記帳方法は間接法", credit: true, creditKey: "減価償却累計額" }
    ]
  },
  'n3_st_08': { 
    explanation: "収益の見越し（未収収益の計上）です。",
    steps: [
      { comment: "当月分のサービス（部屋の貸出）は完了しているので、収益「受取家賃」を計上します。", highlight: "今月分の家賃 50,000円", credit: true, creditKey: "受取家賃" },
      { comment: "まだお金をもらっていないので、後で受け取る権利「未収家賃」（または未収収益）を借方に計上します。", highlight: "未収となっている", debit: true, debitKey: "未収家賃" }
    ]
  },
  'n3_st_09': { 
    explanation: "配当決議時の仕訳です。まだ支払っていないため「未払配当金」となります。",
    steps: [
      { comment: "純資産である「繰越利益剰余金」を減らして配当の原資にします。", highlight: "繰越利益剰余金を財源", debit: true, debitKey: "繰越利益剰余金" },
      { comment: "株主に支払う義務が生じたので、「未払配当金」（負債）を計上します。", highlight: "支払うことを決議した", credit: true, creditKey: "未払配当金" }
    ]
  }
};
