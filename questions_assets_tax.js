
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Questions: Assets & Tax (固定資産・税金)
 */

import { Randomizer } from './data.js';

export const QUESTIONS_ASSETS_TAX = [
  // --- 1. FIXED ASSETS PURCHASE/SALE (固定資産の購入・売却) ---
  {
    id: 'n3_fa_01', major: 'assets_tax', sub: 'fixed_assets_buy',
    text: "不要となった備品（取得原価 500,000円、減価償却累計額 450,000円、間接法）を 10,000円 で売却し、代金は月末に受け取ることにした。",
    correctEntries: { debit: [{ accountName: "未収金", amount: 10000 }, { accountName: "減価償却累計額", amount: 450000 }, { accountName: "固定資産売却損", amount: 40000 }], credit: [{ accountName: "備品", amount: 500000 }] },
    choices: ["未収金", "減価償却累計額", "固定資産売却損", "備品"],
    mutate: (q) => {
      const cost = Randomizer.getAmount(500000, 0.1, 10000);
      const accDep = cost * 0.9;
      const sell = 10000;
      const bookValue = cost - accDep;
      const loss = bookValue - sell;
      q.text = `不要となった備品（取得原価 ${Randomizer.fmt(cost)}円、減価償却累計額 ${Randomizer.fmt(accDep)}円、間接法）を ${Randomizer.fmt(sell)}円 で売却し、代金は月末に受け取ることにした。`;
      q.correctEntries = { debit: [{ accountName: "未収金", amount: sell }, { accountName: "減価償却累計額", amount: accDep }, { accountName: "固定資産売却損", amount: loss }], credit: [{ accountName: "備品", amount: cost }] };
      return q;
    }
  },
  {
    id: 'n3_fa_02', major: 'assets_tax', sub: 'fixed_assets_buy',
    text: "営業用の車両 2,000,000円 を購入し、代金は購入に伴う諸費用 100,000円 とともに小切手を振り出して支払った。",
    correctEntries: { debit: [{ accountName: "車両運搬具", amount: 2100000 }], credit: [{ accountName: "当座預金", amount: 2100000 }] },
    choices: ["車両運搬具", "当座預金", "租税公課", "修繕費"],
    mutate: (q) => {
      const cost = Randomizer.getAmount(2000000, 0.1, 10000);
      const exp = 100000;
      const total = cost + exp;
      q.text = `営業用の車両 ${Randomizer.fmt(cost)}円 を購入し、代金は購入に伴う諸費用 ${Randomizer.fmt(exp)}円 とともに小切手を振り出して支払った。`;
      q.correctEntries = { debit: [{ accountName: "車両運搬具", amount: total }], credit: [{ accountName: "当座預金", amount: total }] };
      return q;
    }
  },
  {
    id: 'n3_fa_03', major: 'assets_tax', sub: 'fixed_assets_buy',
    text: "建物の修繕を行い、代金 500,000円 を小切手を振り出して支払った。なお、このうち 300,000円 は建物の価値を高めるための改良（資本的支出）であり、残りは通常の維持管理（収益的支出）である。",
    correctEntries: { debit: [{ accountName: "建物", amount: 300000 }, { accountName: "修繕費", amount: 200000 }], credit: [{ accountName: "当座預金", amount: 500000 }] },
    choices: ["建物", "修繕費", "当座預金", "備品"],
    mutate: (q) => {
      const total = Randomizer.getAmount(500000, 0.2, 10000);
      const capital = Randomizer.round(total * 0.6, 10000);
      const expense = total - capital;
      q.text = `建物の修繕を行い、代金 ${Randomizer.fmt(total)}円 を小切手を振り出して支払った。なお、このうち ${Randomizer.fmt(capital)}円 は建物の価値を高めるための改良（資本的支出）であり、残りは通常の維持管理（収益的支出）である。`;
      q.correctEntries = { debit: [{ accountName: "建物", amount: capital }, { accountName: "修繕費", amount: expense }], credit: [{ accountName: "当座預金", amount: total }] };
      return q;
    }
  },
  {
    id: 'n3_fa_04', major: 'assets_tax', sub: 'fixed_assets_buy',
    text: "店舗建設のための土地 10,000,000円 を購入し、仲介手数料 300,000円 とともに普通預金から振り込んだ。",
    correctEntries: { debit: [{ accountName: "土地", amount: 10300000 }], credit: [{ accountName: "普通預金", amount: 10300000 }] },
    choices: ["土地", "普通預金", "支払手数料", "建物"],
    mutate: (q) => {
      const land = Randomizer.getAmount(10000000, 0.1, 100000);
      const fee = 300000;
      const total = land + fee;
      q.text = `店舗建設のための土地 ${Randomizer.fmt(land)}円 を購入し、仲介手数料 ${Randomizer.fmt(fee)}円 とともに普通預金から振り込んだ。`;
      q.correctEntries = { debit: [{ accountName: "土地", amount: total }], credit: [{ accountName: "普通預金", amount: total }] };
      return q;
    }
  },

  // --- 2. CONSUMPTION TAX (消費税) ---
  {
    id: 'n3_tx_01', major: 'assets_tax', sub: 'consumption_tax',
    text: "商品 200,000円（税抜）を仕入れ、消費税 10% を合わせた 220,000円 を掛けとした（税抜方式）。",
    correctEntries: { debit: [{ accountName: "仕入", amount: 200000 }, { accountName: "仮払消費税", amount: 20000 }], credit: [{ accountName: "買掛金", amount: 220000 }] },
    choices: ["仕入", "仮払消費税", "買掛金", "税込仕入"],
    mutate: (q) => {
      const price = Randomizer.getAmount(200000, 0.2, 1000);
      const tax = price * 0.1;
      const total = price + tax;
      q.text = `商品 ${Randomizer.fmt(price)}円（税抜）を仕入れ、消費税 10% を合わせた ${Randomizer.fmt(total)}円 を掛けとした（税抜方式）。`;
      q.correctEntries = { debit: [{ accountName: "仕入", amount: price }, { accountName: "仮払消費税", amount: tax }], credit: [{ accountName: "買掛金", amount: total }] };
      return q;
    }
  },
  {
    id: 'n3_tx_02', major: 'assets_tax', sub: 'consumption_tax',
    text: "商品 300,000円（税抜）を売り上げ、消費税 10% を合わせた 330,000円 を掛けとした（税抜方式）。",
    correctEntries: { debit: [{ accountName: "売掛金", amount: 330000 }], credit: [{ accountName: "売上", amount: 300000 }, { accountName: "仮受消費税", amount: 30000 }] },
    choices: ["売掛金", "売上", "仮受消費税", "現金"],
    mutate: (q) => {
      const price = Randomizer.getAmount(300000, 0.2, 1000);
      const tax = price * 0.1;
      const total = price + tax;
      q.text = `商品 ${Randomizer.fmt(price)}円（税抜）を売り上げ、消費税 10% を合わせた ${Randomizer.fmt(total)}円 を掛けとした（税抜方式）。`;
      q.correctEntries = { debit: [{ accountName: "売掛金", amount: total }], credit: [{ accountName: "売上", amount: price }, { accountName: "仮受消費税", amount: tax }] };
      return q;
    }
  },
  {
    id: 'n3_tx_05', major: 'assets_tax', sub: 'consumption_tax',
    text: "決算につき、当期の消費税の納付額を計算する。仮受消費税残高 500,000円、仮払消費税残高 350,000円 であり、差額を未払消費税として計上する。",
    correctEntries: { debit: [{ accountName: "仮受消費税", amount: 500000 }], credit: [{ accountName: "仮払消費税", amount: 350000 }, { accountName: "未払消費税", amount: 150000 }] },
    choices: ["仮受消費税", "仮払消費税", "未払消費税", "雑益"],
    mutate: (q) => {
      const received = Randomizer.getAmount(500000, 0.1, 10000);
      const paid = Randomizer.round(received * 0.7, 10000);
      const diff = received - paid;
      q.text = `決算につき、当期の消費税の納付額を計算する。仮受消費税残高 ${Randomizer.fmt(received)}円、仮払消費税残高 ${Randomizer.fmt(paid)}円 であり、差額を未払消費税として計上する。`;
      q.correctEntries = { debit: [{ accountName: "仮受消費税", amount: received }], credit: [{ accountName: "仮払消費税", amount: paid }, { accountName: "未払消費税", amount: diff }] };
      return q;
    }
  },

  // --- 3. CORPORATE TAX & OTHERS (法人税等・租税公課) ---
  {
    id: 'n3_tx_03', major: 'assets_tax', sub: 'corporate_tax',
    text: "決算において、当期の法人税、住民税及び事業税が 180,000円 と確定した。なお、中間申告分 80,000円 は既に納付済み（仮払法人税等）である。",
    correctEntries: { debit: [{ accountName: "法人税等", amount: 180000 }], credit: [{ accountName: "仮払法人税等", amount: 80000 }, { accountName: "未払法人税等", amount: 100000 }] },
    choices: ["法人税等", "仮払法人税等", "未払法人税等", "当座預金"],
    mutate: (q) => {
      const total = Randomizer.getAmount(180000, 0.2, 10000);
      const prepaid = Randomizer.round(total * 0.4, 10000);
      const unpaid = total - prepaid;
      q.text = `決算において、当期の法人税、住民税及び事業税が ${Randomizer.fmt(total)}円 と確定した。なお、中間申告分 ${Randomizer.fmt(prepaid)}円 は既に納付済み（仮払法人税等）である。`;
      q.correctEntries = { debit: [{ accountName: "法人税等", amount: total }], credit: [{ accountName: "仮払法人税等", amount: prepaid }, { accountName: "未払法人税等", amount: unpaid }] };
      return q;
    }
  },
  {
    id: 'n3_tx_04', major: 'assets_tax', sub: 'corporate_tax',
    text: "店舗兼倉庫の固定資産税 150,000円 と都市計画税 30,000円 の納付通知書を受け取り、現金で納付した。",
    correctEntries: { debit: [{ accountName: "租税公課", amount: 180000 }], credit: [{ accountName: "現金", amount: 180000 }] },
    choices: ["租税公課", "現金", "法人税等", "未払金"],
    mutate: (q) => {
      const fixed = Randomizer.getAmount(150000, 0.1, 1000);
      const city = 30000;
      const total = fixed + city;
      q.text = `店舗兼倉庫の固定資産税 ${Randomizer.fmt(fixed)}円 と都市計画税 ${Randomizer.fmt(city)}円 の納付通知書を受け取り、現金で納付した。`;
      q.correctEntries = { debit: [{ accountName: "租税公課", amount: total }], credit: [{ accountName: "現金", amount: total }] };
      return q;
    }
  },
  {
    id: 'n3_tx_06', major: 'assets_tax', sub: 'corporate_tax',
    text: "収入印紙 2,000円 を現金で購入し、直ちに費用として処理した。",
    correctEntries: { debit: [{ accountName: "租税公課", amount: 2000 }], credit: [{ accountName: "現金", amount: 2000 }] },
    choices: ["租税公課", "現金", "消耗品費", "貯蔵品"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(2000, 0.5, 100);
      q.text = `収入印紙 ${Randomizer.fmt(amt)}円 を現金で購入し、直ちに費用として処理した。`;
      q.correctEntries = { debit: [{ accountName: "租税公課", amount: amt }], credit: [{ accountName: "現金", amount: amt }] };
      return q;
    }
  }
];
