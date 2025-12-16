
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Explanations: Cash, Deposits, Merchandise
 */

export const EXPLANATIONS_INTRO_CASH = {
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
    explanation: "現金が帳簿より多い場合、原因不明なら「雑益」でお祝いします。",
    steps: [
      { comment: "実際有高(55,000) > 帳簿残高(54,000) なので、現金が1,000円多い状態です。", highlight: "55,000円...54,000円", debit: false, credit: false },
      { comment: "帳簿を実際有高に合わせるため、「現金」を増やします。", highlight: "適切に処理する", debit: true, debitKey: "現金" },
      { comment: "増えた理由は不明ですが、会社にとっては得なので収益の「雑益」とします。", highlight: "原因は不明", credit: true, creditKey: "雑益" }
    ]
  },
  'n3_cash_03': { 
    explanation: "「一勘定制」では、当座借越になっても「当座預金」勘定のマイナス（貸方）として処理します。",
    steps: [
      { comment: "買掛金を支払ったので「買掛金」を減らします（借方）。", highlight: "買掛金 150,000円 を支払うため", debit: true, debitKey: "買掛金" },
      { comment: "当座預金口座から支払われますが、残高(5万)を超えても「一勘定制」なので、そのまま「当座預金」勘定を減らします。", highlight: "当座預金について「一勘定制」を採用している", credit: true, creditKey: "当座預金" },
      { comment: "もし「二勘定制」なら、残高を超える分(10万)を「当座借越」とします。", highlight: "", debit: false, credit: false }
    ]
  },
  'n3_cash_04': { 
    explanation: "当座借越状態（マイナス）の口座に入金すると、まずはマイナスの解消（貸方の減少）になります。",
    steps: [
      { comment: "売掛金を回収したので、資産である「現金」は手元から無くなり、口座へ移動します。いや、問題文は「現金を預け入れた」なので、手元の現金が減ります。", highlight: "現金 300,000円 を預け入れた", credit: true, creditKey: "現金" },
      { comment: "当座預金が増えます。一勘定制なので、借方残高だろうが貸方残高だろうが「当座預金」の借方に記入して残高を増やします。", highlight: "当座預金口座...に", debit: true, debitKey: "当座預金" }
    ]
  },
  'n3_cash_05': { 
    explanation: "小口現金の補給は、報告を受けた費用の発生と、小切手振出による預金の減少を同時に行います（インプレスト・システム）。",
    steps: [
      { comment: "報告された費用（通信費、消耗品費）を計上します。", highlight: "通信費 2,000円 と消耗品費 3,000円", debit: true, debitKey: "通信費" },
      { comment: "同額を小切手で補給したので、「当座預金」が減少します。", highlight: "小切手を振り出して...補給した", credit: true, creditKey: "当座預金" }
    ]
  },

  // --- Merchandise Basic ---
  'n3_md_01': { 
    explanation: "仕入諸掛（引取運賃）は、仕入原価に含めます。",
    steps: [
      { comment: "商品代金 300,000円 に引取運賃 5,000円 を加算して「仕入」とします。", highlight: "商品 300,000円...引取運賃 5,000円", debit: true, debitKey: "仕入" },
      { comment: "現金で支払ったのは、商品代の一部(10万)と運賃(5千)の合計 105,000円 です。", highlight: "100,000円 は現金...引取運賃 5,000円 は現金", credit: true, creditKey: "現金" },
      { comment: "残りの商品代金 200,000円 は掛けなので「買掛金」とします。", highlight: "残額は掛けとした", credit: true, creditKey: "買掛金" }
    ]
  },
  'n3_md_02': { 
    explanation: "仕入れ戻し（返品）は、仕入れた時の逆仕訳を行います。",
    steps: [
      { comment: "返品したので、支払う義務（買掛金）がなくなります。", highlight: "返品した", debit: true, debitKey: "買掛金" },
      { comment: "商品が手元からなくなるので、「仕入」（費用）を取り消します。", highlight: "品違いのため", credit: true, creditKey: "仕入" }
    ]
  },
  'n3_md_03': { 
    explanation: "商品注文時に支払う手付金（内金）は「前払金」勘定で処理します。",
    steps: [
      { comment: "手付金は「商品を受け取る権利」なので、資産である「前払金」を計上します。", highlight: "手付金として", debit: true, debitKey: "前払金" },
      { comment: "代金は小切手で支払ったので「当座預金」を減らします。", highlight: "小切手を振り出した", credit: true, creditKey: "当座預金" }
    ]
  },
  'n3_md_04': { 
    explanation: "売上諸掛（発送費）を当社が負担する場合は、売上から引かずに「発送費」勘定を使います。",
    steps: [
      { comment: "売上代金は全額掛けなので「売掛金」を計上します。", highlight: "代金は掛けとした", debit: true, debitKey: "売掛金" },
      { comment: "当社負担の送料は「発送費」（費用）として計上します。", highlight: "発送費...（当社負担）", debit: true, debitKey: "発送費" },
      { comment: "商品の販売額を「売上」とします。", highlight: "商品 200,000円 を売り上げ", credit: true, creditKey: "売上" },
      { comment: "送料は現金で払ったので「現金」を減らします。", highlight: "現金で支払った", credit: true, creditKey: "現金" }
    ]
  },
  'n3_md_05': { 
    explanation: "注文時に受け取った手付金は「前受金」勘定（負債）で処理します。",
    steps: [
      { comment: "現金を受け取ったので借方は「現金」です。", highlight: "現金...を受け取った", debit: true, debitKey: "現金" },
      { comment: "商品を渡す義務が生じたので、「前受金」を貸方に計上します。", highlight: "手付金として", credit: true, creditKey: "前受金" }
    ]
  },
  'n3_md_06': { 
    explanation: "売上戻り（返品）は、売り上げた時の逆仕訳を行います。",
    steps: [
      { comment: "返品されたので「売上」を取り消します。", highlight: "返品を受けた", debit: true, debitKey: "売上" },
      { comment: "代金を請求する権利（売掛金）もなくなります。", highlight: "以前掛けで販売した", credit: true, creditKey: "売掛金" }
    ]
  },

  // --- Credit & Gift Certificates ---
  'n3_cr_01': { 
    explanation: "クレジット売上は「クレジット売掛金」とし、手数料は「支払手数料」で処理します。",
    steps: [
      { comment: "売り上げたので「売上」を計上します。", highlight: "売上", credit: true, creditKey: "売上" },
      { comment: "信販会社への手数料（60,000 × 2% = 1,200円）を費用計上します。", highlight: "手数料...販売時に計上する", debit: true, debitKey: "支払手数料" },
      { comment: "売上代金から手数料を引いた残額を、後で受け取る権利「クレジット売掛金」とします。", highlight: "クレジット払いの条件", debit: true, debitKey: "クレジット売掛金" }
    ]
  },
  'n3_cr_02': { 
    explanation: "他店発行の商品券を受け取った場合は「受取商品券」勘定を使用します。",
    steps: [
      { comment: "売上が発生したので貸方に「売上」を計上します。", highlight: "商品 30,000円 を販売", credit: true, creditKey: "売上" },
      { comment: "代金の一部は現金で受け取りました。", highlight: "10,000円 は現金", debit: true, debitKey: "現金" },
      { comment: "残りは商品券を受け取ったので、「受取商品券」を借方に計上します。", highlight: "商品券を受け取った", debit: true, debitKey: "受取商品券" }
    ]
  },
  'n3_cr_03': { 
    explanation: "クレジット売上の返品では、手数料の取消しも忘れずに行います。",
    steps: [
      { comment: "売上が取り消されるので借方に「売上」を計上します。", highlight: "返品された", debit: true, debitKey: "売上" },
      { comment: "債権である「クレジット売掛金」を減らします。", highlight: "クレジット払いの条件", credit: true, creditKey: "クレジット売掛金" },
      { comment: "販売時に計上した「支払手数料」も、売上がなくなったので取り消します（貸方へ）。", highlight: "手数料（2%）も取り消す", credit: true, creditKey: "支払手数料" }
    ]
  },
  'n3_cr_04': { 
    explanation: "当店が商品券を発行した場合、後で商品を渡す義務として「商品券」勘定（負債）で処理します。",
    steps: [
      { comment: "代金を受け取ったので「現金」が増えます。", highlight: "代金は現金で受け取った", debit: true, debitKey: "現金" },
      { comment: "商品券を発行した義務として「商品券」を貸方に計上します。", highlight: "商品券...を発行し", credit: true, creditKey: "商品券" }
    ]
  },
  'n3_cr_05': { 
    explanation: "当店発行の商品券で商品が購入された場合、「商品券」という負債が減少します。",
    steps: [
      { comment: "商品券が戻ってきたので、商品を渡す義務（負債）がなくなります。借方に「商品券」。", highlight: "当店発行の商品券を受け取った", debit: true, debitKey: "商品券" },
      { comment: "商品は売れているので、通常通り「売上」を計上します。", highlight: "商品...を売り上げ", credit: true, creditKey: "売上" }
    ]
  }
};
