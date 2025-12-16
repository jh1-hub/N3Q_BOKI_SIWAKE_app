
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Questions: Settlement I (決算整理 I)
 */

import { Randomizer } from './data.js';

export const QUESTIONS_SETTLEMENT = [
  // --- 1. COGS (売上原価) ---
  {
    id: 'n3_st_06', major: 'settlement', sub: 'inventory_closing',
    text: "決算整理を行う。期首商品棚卸高は 100,000円、期末商品棚卸高は 80,000円 であった。売上原価は「仕入」の行で計算する。",
    correctEntries: { 
      debit: [{ accountName: "仕入", amount: 100000 }, { accountName: "繰越商品", amount: 80000 }], 
      credit: [{ accountName: "繰越商品", amount: 100000 }, { accountName: "仕入", amount: 80000 }] 
    },
    choices: ["仕入", "繰越商品", "売上原価", "棚卸減耗損"],
    mutate: (q) => {
      const opening = Randomizer.getAmount(100000, 0.1, 1000);
      const closing = Randomizer.getAmount(80000, 0.1, 1000);
      q.text = `決算整理を行う。期首商品棚卸高は ${Randomizer.fmt(opening)}円、期末商品棚卸高は ${Randomizer.fmt(closing)}円 であった。売上原価は「仕入」の行で計算する。`;
      q.correctEntries = { 
        debit: [{ accountName: "仕入", amount: opening }, { accountName: "繰越商品", amount: closing }], 
        credit: [{ accountName: "繰越商品", amount: opening }, { accountName: "仕入", amount: closing }] 
      };
      return q;
    }
  },
  {
    id: 'n3_st_10', major: 'settlement', sub: 'inventory_closing',
    text: "決算整理を行う。期首商品棚卸高 50,000円、当期商品仕入高 400,000円、期末商品棚卸高 60,000円。売上原価勘定を用いて計算する。",
    correctEntries: { 
      debit: [{ accountName: "売上原価", amount: 450000 }], 
      credit: [{ accountName: "繰越商品", amount: 50000 }, { accountName: "仕入", amount: 400000 }] 
    },
    // Note: The second part (Transferring closing inventory) is often separate or combined. 
    // For simplicity in this app, let's assume standard "Shi-Kuri/Kuri-Shi" method is preferred, 
    // but this question specifies "Using Cost of Goods Sold Account" (UriageGenka).
    // Let's implement the specific transfer: Opening + Purchase -> COGS, then COGS -> Closing (Credit side).
    // Actually in 3rd grade, usually "Shi-Kuri/Kuri-Shi" is dominant. 
    // Let's stick to "Shi-Kuri/Kuri-Shi" but with a slight variation in numbers.
    text: "決算につき、売上原価を算定する。期首商品棚卸高 30,000円、期末商品棚卸高 45,000円。なお、売上原価は「仕入」勘定で算定する。",
    correctEntries: { 
      debit: [{ accountName: "仕入", amount: 30000 }, { accountName: "繰越商品", amount: 45000 }], 
      credit: [{ accountName: "繰越商品", amount: 30000 }, { accountName: "仕入", amount: 45000 }] 
    },
    choices: ["仕入", "繰越商品", "売上", "損益"],
    mutate: (q) => {
      const opening = Randomizer.getAmount(30000, 0.1, 1000);
      const closing = Randomizer.getAmount(45000, 0.1, 1000);
      q.text = `決算につき、売上原価を算定する。期首商品棚卸高 ${Randomizer.fmt(opening)}円、期末商品棚卸高 ${Randomizer.fmt(closing)}円。なお、売上原価は「仕入」勘定で算定する。`;
      q.correctEntries = { 
        debit: [{ accountName: "仕入", amount: opening }, { accountName: "繰越商品", amount: closing }], 
        credit: [{ accountName: "繰越商品", amount: opening }, { accountName: "仕入", amount: closing }] 
      };
      return q;
    }
  },

  // --- 2. BAD DEBTS (貸倒引当金) ---
  {
    id: 'n3_st_01', major: 'settlement', sub: 'bad_debts_closing',
    text: "決算につき、売掛金期末残高 2,000,000円 に対して 2% の貸倒引当金を設定する。なお、貸倒引当金の残高は 15,000円 である（差額補充法）。",
    correctEntries: { debit: [{ accountName: "貸倒引当金繰入", amount: 25000 }], credit: [{ accountName: "貸倒引当金", amount: 25000 }] },
    choices: ["貸倒引当金繰入", "貸倒引当金", "売掛金", "貸倒損失"],
    mutate: (q) => {
      const receivable = Randomizer.getAmount(2000000, 0.1, 100000);
      const rate = 0.02;
      const target = receivable * rate;
      const balance = 15000;
      const provision = target - balance;
      q.text = `決算につき、売掛金期末残高 ${Randomizer.fmt(receivable)}円 に対して 2% の貸倒引当金を設定する。なお、貸倒引当金の残高は ${Randomizer.fmt(balance)}円 である（差額補充法）。`;
      q.correctEntries = { debit: [{ accountName: "貸倒引当金繰入", amount: provision }], credit: [{ accountName: "貸倒引当金", amount: provision }] };
      return q;
    }
  },
  {
    id: 'n3_st_11', major: 'settlement', sub: 'bad_debts_closing',
    text: "決算につき、受取手形と売掛金の期末残高合計 1,000,000円 に対して 3% の貸倒引当金を設定する。なお、貸倒引当金の残高は 35,000円 である（差額補充法）。",
    correctEntries: { debit: [{ accountName: "貸倒引当金", amount: 5000 }], credit: [{ accountName: "貸倒引当金戻入", amount: 5000 }] },
    choices: ["貸倒引当金", "貸倒引当金戻入", "貸倒引当金繰入", "貸倒損失"],
    mutate: (q) => {
      const receivables = Randomizer.getAmount(1000000, 0.1, 10000);
      const rate = 0.03;
      const target = receivables * rate;
      const balance = target + 5000; // Force reversal
      const reversal = balance - target;
      q.text = `決算につき、受取手形と売掛金の期末残高合計 ${Randomizer.fmt(receivables)}円 に対して 3% の貸倒引当金を設定する。なお、貸倒引当金の残高は ${Randomizer.fmt(balance)}円 である（差額補充法）。`;
      q.correctEntries = { debit: [{ accountName: "貸倒引当金", amount: reversal }], credit: [{ accountName: "貸倒引当金戻入", amount: reversal }] };
      return q;
    }
  },
  {
    id: 'n3_st_12', major: 'settlement', sub: 'bad_debts_closing',
    text: "前期に貸倒れとして処理した売掛金 10,000円 が、当期になって現金で回収された。",
    correctEntries: { debit: [{ accountName: "現金", amount: 10000 }], credit: [{ accountName: "償却債権取立益", amount: 10000 }] },
    choices: ["現金", "償却債権取立益", "売掛金", "貸倒引当金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(10000, 0.2, 1000);
      q.text = `前期に貸倒れとして処理した売掛金 ${Randomizer.fmt(amt)}円 が、当期になって現金で回収された。`;
      q.correctEntries = { debit: [{ accountName: "現金", amount: amt }], credit: [{ accountName: "償却債権取立益", amount: amt }] };
      return q;
    }
  },

  // --- 3. DEPRECIATION (減価償却) ---
  {
    id: 'n3_st_07', major: 'settlement', sub: 'depreciation_closing',
    text: "建物の減価償却を行う。取得原価 6,000,000円、耐用年数 30年、残存価額ゼロ、定額法、記帳方法は間接法とする。",
    correctEntries: { debit: [{ accountName: "減価償却費", amount: 200000 }], credit: [{ accountName: "減価償却累計額", amount: 200000 }] },
    choices: ["減価償却費", "減価償却累計額", "建物", "損益"],
    mutate: (q) => {
      const cost = 6000000;
      const years = 30;
      const dep = cost / years;
      q.text = `建物の減価償却を行う。取得原価 ${Randomizer.fmt(cost)}円、耐用年数 ${years}年、残存価額ゼロ、定額法、記帳方法は間接法とする。`;
      q.correctEntries = { debit: [{ accountName: "減価償却費", amount: dep }], credit: [{ accountName: "減価償却累計額", amount: dep }] };
      return q;
    }
  },
  {
    id: 'n3_st_13', major: 'settlement', sub: 'depreciation_closing',
    text: "当期首に購入した備品（取得原価 480,000円、耐用年数 5年、残存価額ゼロ、定額法）の減価償却を行う。記帳方法は直接法とする。",
    correctEntries: { debit: [{ accountName: "減価償却費", amount: 96000 }], credit: [{ accountName: "備品", amount: 96000 }] },
    choices: ["減価償却費", "備品", "減価償却累計額", "損益"],
    mutate: (q) => {
      const cost = Randomizer.getAmount(480000, 0.1, 12000); // 12000 divisible by 12 months for safety
      const years = 5;
      const dep = cost / years;
      q.text = `当期首に購入した備品（取得原価 ${Randomizer.fmt(cost)}円、耐用年数 ${years}年、残存価額ゼロ、定額法）の減価償却を行う。記帳方法は直接法とする。`;
      q.correctEntries = { debit: [{ accountName: "減価償却費", amount: dep }], credit: [{ accountName: "備品", amount: dep }] };
      return q;
    }
  },
  {
    id: 'n3_st_14', major: 'settlement', sub: 'depreciation_closing',
    text: "当期の10月1日に購入した営業用車両（取得原価 1,200,000円、耐用年数 10年、残存価額ゼロ、定額法）の決算整理（3月31日）を行う。記帳方法は間接法とし、月割計算すること。",
    correctEntries: { debit: [{ accountName: "減価償却費", amount: 60000 }], credit: [{ accountName: "減価償却累計額", amount: 60000 }] },
    choices: ["減価償却費", "減価償却累計額", "車両運搬具", "未払金"],
    mutate: (q) => {
      const cost = 1200000;
      const annualDep = cost / 10;
      const months = 6; // Oct to Mar
      const dep = annualDep * months / 12;
      q.text = `当期の10月1日に購入した営業用車両（取得原価 ${Randomizer.fmt(cost)}円、耐用年数 10年、残存価額ゼロ、定額法）の決算整理（3月31日）を行う。記帳方法は間接法とし、月割計算すること。`;
      q.correctEntries = { debit: [{ accountName: "減価償却費", amount: dep }], credit: [{ accountName: "減価償却累計額", amount: dep }] };
      return q;
    }
  }
];
