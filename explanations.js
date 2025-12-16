
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Explanation Definitions
 * React 19 Migration: ES Module Format
 */

export const EXPLANATIONS = {
  // --- Cash & Deposits ---
  'n3_cash_01': { 
    explanation: "決算時の現金不足は、原因不明なら「雑損」で処理します。",
    steps: [
      { comment: "まず、実際有高と帳簿残高の差額を計算します。\n83,500 - 82,000 = 1,500円 足りません。", highlight: "82,000円...83,500円", debit: false, credit: false },
      { comment: "実際有高に合わせて帳簿の「現金」を減らします。", highlight: "適切に処理する", credit: true, creditKey: "現金" },
      { comment: "決算日になっても原因が不明なので、費用として「雑損」を計上します。", highlight: "原因は不明", debit: true, debitKey: "雑損" }
    ]
  },
  'n3_cash_02': { 
    explanation: "「一勘定制」では、当座借越になっても「当座預金」勘定のマイナス（貸方）として処理します。",
    steps: [
      { comment: "買掛金を支払ったので「買掛金」を減らします（借方）。", highlight: "買掛金 150,000円 を支払うため", debit: true, debitKey: "買掛金" },
      { comment: "当座預金口座から支払われますが、残高(5万)を超えても「一勘定制」なので、そのまま「当座預金」勘定を減らします。", highlight: "当座預金について「一勘定制」を採用している", credit: true, creditKey: "当座預金" },
      { comment: "もし「二勘定制」なら、残高を超える分(10万)を「当座借越」とします。", highlight: "", debit: false, credit: false }
    ]
  },

  // --- Merchandise ---
  'n3_md_01': { 
    explanation: "仕入諸掛（引取運賃）は、仕入原価に含めます。",
    steps: [
      { comment: "商品代金 300,000円 に引取運賃 5,000円 を加算して「仕入」とします。", highlight: "商品 300,000円...引取運賃 5,000円", debit: true, debitKey: "仕入" },
      { comment: "現金で支払ったのは、商品代の一部(10万)と運賃(5千)の合計 105,000円 です。", highlight: "100,000円 は現金...引取運賃 5,000円 は現金", credit: true, creditKey: "現金" },
      { comment: "残りの商品代金 200,000円 は掛けなので「買掛金」とします。", highlight: "残額は掛けとした", credit: true, creditKey: "買掛金" }
    ]
  },
  'n3_md_02': { 
    explanation: "クレジット売上は「クレジット売掛金」とし、手数料は「支払手数料」で処理します。",
    steps: [
      { comment: "売り上げたので「売上」を計上します。", highlight: "売上", credit: true, creditKey: "売上" },
      { comment: "信販会社への手数料（60,000 × 2% = 1,200円）を費用計上します。", highlight: "手数料...販売時に計上する", debit: true, debitKey: "支払手数料" },
      { comment: "売上代金から手数料を引いた残額を、後で受け取る権利「クレジット売掛金」とします。", highlight: "クレジット払いの条件", debit: true, debitKey: "クレジット売掛金" }
    ]
  },

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
  }
};
