
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Explanations: Settlement I
 */

export const EXPLANATIONS_SETTLEMENT = {
  // --- COGS ---
  'n3_st_06': { 
    explanation: "売上原価算定の仕訳（しーくり・くりし）です。",
    steps: [
      { comment: "【期首分】前期からの繰越商品を仕入（費用）に加えます（しー・くり）。\n借方：仕入 100,000 / 貸方：繰越商品 100,000", highlight: "期首商品棚卸高は 100,000円", debit: true, debitKey: "仕入" },
      { comment: "【期末分】売れ残った商品を仕入から引いて、資産に戻します（くり・し）。\n借方：繰越商品 80,000 / 貸方：仕入 80,000", highlight: "期末商品棚卸高は 80,000円", credit: true, creditKey: "仕入" }
    ]
  },
  'n3_st_10': { 
    explanation: "「仕入」勘定で売上原価を算定する基本パターン（しーくり・くりし）です。",
    steps: [
      { comment: "【期首】古い在庫を仕入に加算：借方「仕入」/貸方「繰越商品」", highlight: "期首商品棚卸高", debit: true, debitKey: "仕入" },
      { comment: "【期末】新しい在庫を仕入から控除：借方「繰越商品」/貸方「仕入」", highlight: "期末商品棚卸高", credit: true, creditKey: "仕入" }
    ]
  },

  // --- Bad Debts ---
  'n3_st_01': { 
    explanation: "差額補充法による貸倒引当金の設定です。",
    steps: [
      { comment: "設定目標額：2,000,000 × 2% = 40,000円", highlight: "2% の貸倒引当金を設定", debit: false, credit: false },
      { comment: "繰入額：目標 40,000 - 残高 15,000 = 25,000円", highlight: "残高は 15,000円", debit: false, credit: false },
      { comment: "不足分を「貸倒引当金繰入」（費用）として計上し、引当金を増やします。", highlight: "差額補充法", debit: true, credit: true }
    ]
  },
  'n3_st_11': { 
    explanation: "引当金残高が目標額より多い場合、「貸倒引当金戻入」で減らします。",
    steps: [
      { comment: "設定目標額：1,000,000 × 3% = 30,000円", highlight: "3% の貸倒引当金", debit: false, credit: false },
      { comment: "残高が 35,000円 なので、5,000円 多すぎます。", highlight: "残高は 35,000円", debit: false, credit: false },
      { comment: "多すぎる分を取り崩して、収益の「貸倒引当金戻入」とします。", highlight: "差額補充法", credit: true, creditKey: "貸倒引当金戻入" },
      { comment: "借方で「貸倒引当金」を減らします。", highlight: "", debit: true, debitKey: "貸倒引当金" }
    ]
  },
  'n3_st_12': { 
    explanation: "前期以前に処理した貸倒れの回収は「償却債権取立益」で処理します。",
    steps: [
      { comment: "現金を受け取ったので借方に「現金」。", highlight: "現金で回収された", debit: true, debitKey: "現金" },
      { comment: "前期の損失は確定済みなので取消しはできません。代わりに「償却債権取立益」（収益）を計上します。", highlight: "前期に貸倒れとして処理", credit: true, creditKey: "償却債権取立益" }
    ]
  },

  // --- Depreciation ---
  'n3_st_07': { 
    explanation: "定額法による減価償却費の計算：取得原価 ÷ 耐用年数",
    steps: [
      { comment: "計算：6,000,000円 ÷ 30年 = 200,000円（1年分）", highlight: "取得原価...耐用年数 30年", debit: false, credit: false },
      { comment: "「減価償却費」（費用）を借方に計上します。", highlight: "建物の減価償却を行う", debit: true, debitKey: "減価償却費" },
      { comment: "間接法なので、貸方は「減価償却累計額」を使用します。", highlight: "記帳方法は間接法", credit: true, creditKey: "減価償却累計額" }
    ]
  },
  'n3_st_13': { 
    explanation: "直接法では、減価償却費を固定資産勘定から直接減額します。",
    steps: [
      { comment: "計算：480,000 ÷ 5 = 96,000円", highlight: "定額法", debit: false, credit: false },
      { comment: "借方は通常通り「減価償却費」。", highlight: "減価償却を行う", debit: true, debitKey: "減価償却費" },
      { comment: "直接法なので、貸方は累計額ではなく「備品」を直接減らします。", highlight: "記帳方法は直接法", credit: true, creditKey: "備品" }
    ]
  },
  'n3_st_14': { 
    explanation: "期中に取得した固定資産は、月割りで減価償却計算を行います。",
    steps: [
      { comment: "1年分の償却費：1,200,000 ÷ 10 = 120,000円", highlight: "定額法", debit: false, credit: false },
      { comment: "当期の使用期間：10月1日〜3月31日 ＝ 6ヶ月", highlight: "10月1日に購入...決算整理（3月31日）", debit: false, credit: false },
      { comment: "当期償却額：120,000 × 6/12 = 60,000円", highlight: "月割計算", debit: true, debitKey: "減価償却費" },
      { comment: "間接法なので貸方は「減価償却累計額」。", highlight: "間接法", credit: true, creditKey: "減価償却累計額" }
    ]
  }
};
