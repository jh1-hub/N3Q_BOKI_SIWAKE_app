
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Explanations: Assets & Tax
 */

export const EXPLANATIONS_ASSETS_TAX = {
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
  'n3_fa_03': { 
    explanation: "資本的支出（改良）は資産の増加、収益的支出（維持）は修繕費とします。",
    steps: [
      { comment: "価値を高める改良分は、資産である「建物」に追加計上します（資本的支出）。", highlight: "価値を高めるための改良", debit: true, debitKey: "建物" },
      { comment: "通常の維持管理分は「修繕費」（費用）とします（収益的支出）。", highlight: "通常の維持管理", debit: true, debitKey: "修繕費" },
      { comment: "代金は小切手で支払ったので「当座預金」を減らします。", highlight: "小切手を振り出した", credit: true, creditKey: "当座預金" }
    ]
  },
  'n3_fa_04': { 
    explanation: "土地の購入手数料も、土地の取得原価に含めます。",
    steps: [
      { comment: "土地代金に仲介手数料を加算して「土地」（資産）とします。", highlight: "仲介手数料...とともに", debit: true, debitKey: "土地" },
      { comment: "普通預金から支払ったので貸方に「普通預金」。", highlight: "普通預金から振り込んだ", credit: true, creditKey: "普通預金" }
    ]
  },
  'n3_fa_05': { 
    explanation: "直接法の売却処理です。固定資産勘定が既に帳簿価額になっている点に注意します。",
    steps: [
      { comment: "現金を受け取ったので借方に「現金」。", highlight: "代金は現金で受け取った", debit: true, debitKey: "現金" },
      { comment: "直接法の場合、貸方は「備品」（帳簿価額）そのものになります。", highlight: "帳簿価額 30,000円、直接法", credit: true, creditKey: "備品" },
      { comment: "帳簿価額(3万)より安く(1万)売ったので、差額は「固定資産売却損」です。", highlight: "10,000円 で売却", debit: true, debitKey: "固定資産売却損" }
    ]
  },

  // --- Consumption Tax ---
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
  'n3_tx_05': { 
    explanation: "決算時に仮受消費税と仮払消費税を相殺し、納付額を確定させます。",
    steps: [
      { comment: "「仮受消費税」（負債）を借方にして消滅させます。", highlight: "仮受消費税残高", debit: true, debitKey: "仮受消費税" },
      { comment: "「仮払消費税」（資産）を貸方にして消滅させます。", highlight: "仮払消費税残高", credit: true, creditKey: "仮払消費税" },
      { comment: "預かった税金の方が多いので、差額を国に納める義務として「未払消費税」とします。", highlight: "差額を未払消費税", credit: true, creditKey: "未払消費税" }
    ]
  },
  'n3_tx_07': { 
    explanation: "消費税の中間納付時は、支払額を「仮払消費税」で処理します。",
    steps: [
      { comment: "確定申告前の一時払いなので「仮払消費税」として計上します。", highlight: "消費税の中間納付", debit: true, debitKey: "仮払消費税" },
      { comment: "現金を支払ったので貸方は「現金」。", highlight: "現金...を支払った", credit: true, creditKey: "現金" }
    ]
  },
  'n3_tx_09': { 
    explanation: "支払った消費税（仮払）の方が多い場合、差額は還付されるため「未収還付法人税等」となります。",
    steps: [
      { comment: "「仮受消費税」を借方にして消します。", highlight: "仮受消費税 350,000円", debit: true, debitKey: "仮受消費税" },
      { comment: "「仮払消費税」を貸方にして消します。", highlight: "仮払消費税 400,000円", credit: true, creditKey: "仮払消費税" },
      { comment: "払いすぎている状態なので、後で返してもらう権利「未収還付法人税等」を計上します。", highlight: "差額を未収還付法人税等", debit: true, debitKey: "未収還付法人税等" }
    ]
  },

  // --- Corporate Tax & Others ---
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
  'n3_tx_06': { 
    explanation: "収入印紙は、購入時に「租税公課」として費用処理するのが一般的です（貯蔵品処理する場合を除く）。",
    steps: [
      { comment: "印紙税という税金の支払いなので「租税公課」とします。", highlight: "費用として処理した", debit: true, debitKey: "租税公課" },
      { comment: "現金で購入したので貸方は「現金」です。", highlight: "現金で購入", credit: true, creditKey: "現金" }
    ]
  },
  'n3_tx_08': { 
    explanation: "前期に計上した未払法人税等の納付仕訳です。",
    steps: [
      { comment: "納付義務を果たしたので、負債である「未払法人税等」を減らします（借方）。", highlight: "未払法人税等 100,000円", debit: true, debitKey: "未払法人税等" },
      { comment: "現金で支払ったので貸方は「現金」。", highlight: "現金で納付", credit: true, creditKey: "現金" }
    ]
  },
  'n3_tx_10': { 
    explanation: "法人税の中間納付時は「仮払法人税等」として処理します。",
    steps: [
      { comment: "確定前の一時払いなので「仮払法人税等」として資産計上します。", highlight: "法人税等の中間申告", debit: true, debitKey: "仮払法人税等" },
      { comment: "当座預金から支払ったので貸方は「当座預金」。", highlight: "当座預金口座から納付", credit: true, creditKey: "当座預金" }
    ]
  }
};
