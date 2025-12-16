
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Question Definitions - Nissho Grade 3 Scope
 * React 19 Migration: ES Module Format
 */

import { Randomizer } from './data.js';

export const RAW_QUESTIONS = [
  // --- 1. CASH & DEPOSITS (現金・預金) ---
  {
    id: 'n3_cash_01', major: 'intro_cash', sub: 'cash_deposits',
    text: "決算において、現金の実際有高を調べたところ 82,000円 であったが、帳簿残高は 83,500円 であった。不一致の原因は不明のため、適切に処理する。",
    correctEntries: { debit: [{ accountName: "雑損", amount: 1500 }], credit: [{ accountName: "現金", amount: 1500 }] },
    choices: ["雑損", "現金", "雑益", "現金過不足"],
    mutate: (q) => {
      const book = Randomizer.getAmount(83500, 0.1, 100);
      const diff = 1500;
      const actual = book - diff;
      q.text = `決算において、現金の実際有高を調べたところ ${Randomizer.fmt(actual)}円 であったが、帳簿残高は ${Randomizer.fmt(book)}円 であった。不一致の原因は不明のため、適切に処理する。`;
      q.correctEntries = { debit: [{ accountName: "雑損", amount: diff }], credit: [{ accountName: "現金", amount: diff }] };
      return q;
    }
  },
  {
    id: 'n3_cash_02', major: 'intro_cash', sub: 'cash_deposits',
    text: "当座預金の口座残高は 50,000円 であるが、取引銀行と限度額 1,000,000円 の当座借越契約を結んでいるため、仕入先への買掛金 150,000円 を支払うために小切手を振り出した。",
    correctEntries: { debit: [{ accountName: "買掛金", amount: 150000 }], credit: [{ accountName: "当座預金", amount: 150000 }] },
    choices: ["買掛金", "当座預金", "当座借越", "借入金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(150000, 0.2, 1000);
      q.text = `当座預金の口座残高は 50,000円 であるが、取引銀行と限度額 1,000,000円 の当座借越契約を結んでいるため、仕入先への買掛金 ${Randomizer.fmt(amt)}円 を支払うために小切手を振り出した。`;
      q.correctEntries = { debit: [{ accountName: "買掛金", amount: amt }], credit: [{ accountName: "当座預金", amount: amt }] };
      return q;
    }
  },
  
  // --- 2. MERCHANDISE (商品売買・クレジット) ---
  {
    id: 'n3_md_01', major: 'intro_cash', sub: 'merch_basic',
    text: "商品 300,000円 を仕入れ、代金のうち 100,000円 は現金で支払い、残額は掛けとした。なお、引取運賃 5,000円 は現金で支払った。",
    correctEntries: { debit: [{ accountName: "仕入", amount: 305000 }], credit: [{ accountName: "現金", amount: 105000 }, { accountName: "買掛金", amount: 200000 }] },
    choices: ["仕入", "現金", "買掛金", "発送費"],
    mutate: (q) => {
      const goods = Randomizer.getAmount(300000, 0.1, 1000);
      const cashPart = 100000;
      const ship = 5000;
      const credit = goods - cashPart;
      const totalDebit = goods + ship;
      const totalCash = cashPart + ship;
      q.text = `商品 ${Randomizer.fmt(goods)}円 を仕入れ、代金のうち ${Randomizer.fmt(cashPart)}円 は現金で支払い、残額は掛けとした。なお、引取運賃 ${Randomizer.fmt(ship)}円 は現金で支払った。`;
      q.correctEntries = { debit: [{ accountName: "仕入", amount: totalDebit }], credit: [{ accountName: "現金", amount: totalCash }, { accountName: "買掛金", amount: credit }] };
      return q;
    }
  },
  {
    id: 'n3_md_02', major: 'intro_cash', sub: 'credit_trans',
    text: "商品 60,000円 をクレジット払いの条件で販売した。なお、信販会社への手数料（代金の2%）を見積もり、販売時に計上する。",
    correctEntries: { debit: [{ accountName: "クレジット売掛金", amount: 58800 }, { accountName: "支払手数料", amount: 1200 }], credit: [{ accountName: "売上", amount: 60000 }] },
    choices: ["クレジット売掛金", "支払手数料", "売上", "売掛金"],
    mutate: (q) => {
      const price = Randomizer.getAmount(60000, 0.2, 1000);
      const fee = price * 0.02;
      const receivable = price - fee;
      q.text = `商品 ${Randomizer.fmt(price)}円 をクレジット払いの条件で販売した。なお、信販会社への手数料（代金の2%）を見積もり、販売時に計上する。`;
      q.correctEntries = { debit: [{ accountName: "クレジット売掛金", amount: receivable }, { accountName: "支払手数料", amount: fee }], credit: [{ accountName: "売上", amount: price }] };
      return q;
    }
  },

  // --- 3. NOTES & ELECTRONIC CLAIMS (手形・電子記録債権) ---
  {
    id: 'n3_nt_01', major: 'notes_claims', sub: 'notes_elec',
    text: "掛代金 400,000円 の回収として、取引銀行を通じて電子記録債権の発生記録の通知を受けた。",
    correctEntries: { debit: [{ accountName: "電子記録債権", amount: 400000 }], credit: [{ accountName: "売掛金", amount: 400000 }] },
    choices: ["電子記録債権", "売掛金", "受取手形", "当座預金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(400000, 0.2, 1000);
      q.text = `掛代金 ${Randomizer.fmt(amt)}円 の回収として、取引銀行を通じて電子記録債権の発生記録の通知を受けた。`;
      q.correctEntries = { debit: [{ accountName: "電子記録債権", amount: amt }], credit: [{ accountName: "売掛金", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_nt_02', major: 'notes_claims', sub: 'notes_elec',
    text: "買掛金 250,000円 の支払いとして、取引銀行を通じて電子記録債務の発生記録を行った。",
    correctEntries: { debit: [{ accountName: "買掛金", amount: 250000 }], credit: [{ accountName: "電子記録債務", amount: 250000 }] },
    choices: ["買掛金", "電子記録債務", "支払手形", "当座預金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(250000, 0.2, 1000);
      q.text = `買掛金 ${Randomizer.fmt(amt)}円 の支払いとして、取引銀行を通じて電子記録債務の発生記録を行った。`;
      q.correctEntries = { debit: [{ accountName: "買掛金", amount: amt }], credit: [{ accountName: "電子記録債務", amount: amt }] };
      return q;
    }
  },

  // --- 4. FIXED ASSETS (固定資産) ---
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

  // --- 5. TAX (税金) ---
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

  // --- 6. SETTLEMENT (決算整理) ---
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
    id: 'n3_st_02', major: 'settlement', sub: 'accrual_deferral',
    text: "決算につき、支払保険料（１年分）のうち、翌期分 20,000円 を繰り延べる。",
    correctEntries: { debit: [{ accountName: "前払保険料", amount: 20000 }], credit: [{ accountName: "保険料", amount: 20000 }] },
    choices: ["前払保険料", "保険料", "未払金", "現金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(20000, 0.2, 1000);
      q.text = `決算につき、支払保険料（１年分）のうち、翌期分 ${Randomizer.fmt(amt)}円 を繰り延べる。`;
      q.correctEntries = { debit: [{ accountName: "前払保険料", amount: amt }], credit: [{ accountName: "保険料", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_st_03', major: 'settlement', sub: 'accrual_deferral',
    text: "借入金に対する利息の未払分 5,000円 を計上する。",
    correctEntries: { debit: [{ accountName: "支払利息", amount: 5000 }], credit: [{ accountName: "未払利息", amount: 5000 }] },
    choices: ["支払利息", "未払利息", "未払金", "現金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(5000, 0.2, 100);
      q.text = `借入金に対する利息の未払分 ${Randomizer.fmt(amt)}円 を計上する。`;
      q.correctEntries = { debit: [{ accountName: "支払利息", amount: amt }], credit: [{ accountName: "未払利息", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_st_04', major: 'settlement_adv', sub: 'closing_entries',
    text: "損益勘定の貸方残高（当期純利益）350,000円 を、繰越利益剰余金勘定へ振り替える。",
    correctEntries: { debit: [{ accountName: "損益", amount: 350000 }], credit: [{ accountName: "繰越利益剰余金", amount: 350000 }] },
    choices: ["損益", "繰越利益剰余金", "資本金", "当期純利益"],
    mutate: (q) => {
      const profit = Randomizer.getAmount(350000, 0.2, 10000);
      q.text = `損益勘定の貸方残高（当期純利益）${Randomizer.fmt(profit)}円 を、繰越利益剰余金勘定へ振り替える。`;
      q.correctEntries = { debit: [{ accountName: "損益", amount: profit }], credit: [{ accountName: "繰越利益剰余金", amount: profit }] };
      return q;
    }
  },
  {
    id: 'n3_st_05', major: 'settlement_adv', sub: 'cash_shortage',
    text: "期中に現金過不足（借方）として処理していた 1,000円 について、決算になっても原因が判明しないため、雑損として処理する。",
    correctEntries: { debit: [{ accountName: "雑損", amount: 1000 }], credit: [{ accountName: "現金過不足", amount: 1000 }] },
    choices: ["雑損", "現金過不足", "雑益", "現金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(1000, 0.5, 100);
      q.text = `期中に現金過不足（借方）として処理していた ${Randomizer.fmt(amt)}円 について、決算になっても原因が判明しないため、雑損として処理する。`;
      q.correctEntries = { debit: [{ accountName: "雑損", amount: amt }], credit: [{ accountName: "現金過不足", amount: amt }] };
      return q;
    }
  }
];
