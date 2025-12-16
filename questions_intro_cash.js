
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Questions: Cash, Deposits, Merchandise
 */

import { Randomizer } from './data.js';

export const QUESTIONS_INTRO_CASH = [
  // ==========================================
  // 1. CASH & DEPOSITS (現金・預金)
  // ==========================================
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
    text: "決算において、現金の実際有高を調べたところ 55,000円 であったが、帳簿残高は 54,000円 であった。不一致の原因は不明のため、適切に処理する。",
    correctEntries: { debit: [{ accountName: "現金", amount: 1000 }], credit: [{ accountName: "雑益", amount: 1000 }] },
    choices: ["現金", "雑益", "雑損", "現金過不足"],
    mutate: (q) => {
      const book = Randomizer.getAmount(54000, 0.1, 100);
      const diff = 1000;
      const actual = book + diff;
      q.text = `決算において、現金の実際有高を調べたところ ${Randomizer.fmt(actual)}円 であったが、帳簿残高は ${Randomizer.fmt(book)}円 であった。不一致の原因は不明のため、適切に処理する。`;
      q.correctEntries = { debit: [{ accountName: "現金", amount: diff }], credit: [{ accountName: "雑益", amount: diff }] };
      return q;
    }
  },
  {
    id: 'n3_cash_03', major: 'intro_cash', sub: 'cash_deposits',
    text: "当座預金の口座残高は 50,000円 であるが、取引銀行と限度額 1,000,000円 の当座借越契約を結んでいるため、仕入先への買掛金 150,000円 を支払うために小切手を振り出した。なお、当店では当座預金について「一勘定制」を採用している。",
    correctEntries: { debit: [{ accountName: "買掛金", amount: 150000 }], credit: [{ accountName: "当座預金", amount: 150000 }] },
    choices: ["買掛金", "当座預金", "当座借越", "借入金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(150000, 0.2, 1000);
      q.text = `当座預金の口座残高は 50,000円 であるが、取引銀行と限度額 1,000,000円 の当座借越契約を結んでいるため、仕入先への買掛金 ${Randomizer.fmt(amt)}円 を支払うために小切手を振り出した。なお、当店では当座預金について「一勘定制」を採用している。`;
      q.correctEntries = { debit: [{ accountName: "買掛金", amount: amt }], credit: [{ accountName: "当座預金", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_cash_04', major: 'intro_cash', sub: 'cash_deposits',
    text: "当座預金口座（一勘定制、貸方残高 200,000円）に、売掛金の回収として現金 300,000円 を預け入れた。",
    correctEntries: { debit: [{ accountName: "当座預金", amount: 300000 }], credit: [{ accountName: "現金", amount: 300000 }] },
    choices: ["当座預金", "現金", "当座借越", "売掛金"],
    mutate: (q) => {
      const deposit = Randomizer.getAmount(300000, 0.2, 1000);
      const balance = Randomizer.round(deposit * 0.7, 1000);
      q.text = `当座預金口座（一勘定制、貸方残高 ${Randomizer.fmt(balance)}円）に、売掛金の回収として現金 ${Randomizer.fmt(deposit)}円 を預け入れた。`;
      q.correctEntries = { debit: [{ accountName: "当座預金", amount: deposit }], credit: [{ accountName: "現金", amount: deposit }] };
      return q;
    }
  },
  {
    id: 'n3_cash_05', major: 'intro_cash', sub: 'cash_deposits',
    text: "小口現金係から、通信費 2,000円 と消耗品費 3,000円 の支払報告を受けたため、ただちに小切手を振り出して同額を補給した。",
    correctEntries: { debit: [{ accountName: "通信費", amount: 2000 }, { accountName: "消耗品費", amount: 3000 }], credit: [{ accountName: "当座預金", amount: 5000 }] },
    choices: ["通信費", "消耗品費", "当座預金", "小口現金"],
    mutate: (q) => {
      const comm = Randomizer.getAmount(2000, 0.1, 100);
      const supp = Randomizer.getAmount(3000, 0.1, 100);
      const total = comm + supp;
      q.text = `小口現金係から、通信費 ${Randomizer.fmt(comm)}円 と消耗品費 ${Randomizer.fmt(supp)}円 の支払報告を受けたため、ただちに小切手を振り出して同額を補給した。`;
      q.correctEntries = { debit: [{ accountName: "通信費", amount: comm }, { accountName: "消耗品費", amount: supp }], credit: [{ accountName: "当座預金", amount: total }] };
      return q;
    }
  },

  // ==========================================
  // 2. MERCHANDISE BASIC (商品売買・基本)
  // ==========================================
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
    id: 'n3_md_02', major: 'intro_cash', sub: 'merch_basic',
    text: "先日掛けで仕入れた商品のうち、品違いのため 10,000円 分を返品した。",
    correctEntries: { debit: [{ accountName: "買掛金", amount: 10000 }], credit: [{ accountName: "仕入", amount: 10000 }] },
    choices: ["買掛金", "仕入", "売掛金", "売上"],
    mutate: (q) => {
      const ret = Randomizer.getAmount(10000, 0.2, 1000);
      q.text = `先日掛けで仕入れた商品のうち、品違いのため ${Randomizer.fmt(ret)}円 分を返品した。`;
      q.correctEntries = { debit: [{ accountName: "買掛金", amount: ret }], credit: [{ accountName: "仕入", amount: ret }] };
      return q;
    }
  },
  {
    id: 'n3_md_03', major: 'intro_cash', sub: 'merch_basic',
    text: "商品 500,000円 を注文し、手付金として代金の 10% を小切手を振り出して支払った。",
    correctEntries: { debit: [{ accountName: "前払金", amount: 50000 }], credit: [{ accountName: "当座預金", amount: 50000 }] },
    choices: ["前払金", "仕入", "当座預金", "買掛金"],
    mutate: (q) => {
      const total = Randomizer.getAmount(500000, 0.2, 10000);
      const deposit = total * 0.1;
      q.text = `商品 ${Randomizer.fmt(total)}円 を注文し、手付金として代金の 10% を小切手を振り出して支払った。`;
      q.correctEntries = { debit: [{ accountName: "前払金", amount: deposit }], credit: [{ accountName: "当座預金", amount: deposit }] };
      return q;
    }
  },
  {
    id: 'n3_md_04', major: 'intro_cash', sub: 'merch_basic',
    text: "商品 200,000円 を売り上げ、代金は掛けとした。なお、発送費 2,000円 は現金で支払った（当社負担）。",
    correctEntries: { debit: [{ accountName: "売掛金", amount: 200000 }, { accountName: "発送費", amount: 2000 }], credit: [{ accountName: "売上", amount: 200000 }, { accountName: "現金", amount: 2000 }] },
    choices: ["売掛金", "発送費", "売上", "現金"],
    mutate: (q) => {
      const price = Randomizer.getAmount(200000, 0.1, 1000);
      const ship = Randomizer.getAmount(2000, 0.1, 100);
      q.text = `商品 ${Randomizer.fmt(price)}円 を売り上げ、代金は掛けとした。なお、発送費 ${Randomizer.fmt(ship)}円 は現金で支払った（当社負担）。`;
      q.correctEntries = { debit: [{ accountName: "売掛金", amount: price }, { accountName: "発送費", amount: ship }], credit: [{ accountName: "売上", amount: price }, { accountName: "現金", amount: ship }] };
      return q;
    }
  },
  {
    id: 'n3_md_05', major: 'intro_cash', sub: 'merch_basic',
    text: "得意先より商品 300,000円 の注文を受け、手付金として現金 30,000円 を受け取った。",
    correctEntries: { debit: [{ accountName: "現金", amount: 30000 }], credit: [{ accountName: "前受金", amount: 30000 }] },
    choices: ["現金", "前受金", "売上", "売掛金"],
    mutate: (q) => {
      const price = Randomizer.getAmount(300000, 0.2, 10000);
      const deposit = price * 0.1;
      q.text = `得意先より商品 ${Randomizer.fmt(price)}円 の注文を受け、手付金として現金 ${Randomizer.fmt(deposit)}円 を受け取った。`;
      q.correctEntries = { debit: [{ accountName: "現金", amount: deposit }], credit: [{ accountName: "前受金", amount: deposit }] };
      return q;
    }
  },
  {
    id: 'n3_md_06', major: 'intro_cash', sub: 'merch_basic',
    text: "以前掛けで販売した商品のうち、一部汚損があったため 5,000円 の返品を受けた。",
    correctEntries: { debit: [{ accountName: "売上", amount: 5000 }], credit: [{ accountName: "売掛金", amount: 5000 }] },
    choices: ["売上", "売掛金", "仕入戻し", "現金"],
    mutate: (q) => {
      const ret = Randomizer.getAmount(5000, 0.2, 100);
      q.text = `以前掛けで販売した商品のうち、一部汚損があったため ${Randomizer.fmt(ret)}円 の返品を受けた。`;
      q.correctEntries = { debit: [{ accountName: "売上", amount: ret }], credit: [{ accountName: "売掛金", amount: ret }] };
      return q;
    }
  },

  // ==========================================
  // 3. CREDIT & GIFT CERTIFICATES (クレジット・商品券)
  // ==========================================
  {
    id: 'n3_cr_01', major: 'intro_cash', sub: 'credit_trans',
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
  {
    id: 'n3_cr_02', major: 'intro_cash', sub: 'credit_trans',
    text: "商品 30,000円 を販売し、代金のうち 10,000円 は現金で受け取り、残額は百貨店発行の商品券を受け取った。",
    correctEntries: { debit: [{ accountName: "現金", amount: 10000 }, { accountName: "受取商品券", amount: 20000 }], credit: [{ accountName: "売上", amount: 30000 }] },
    choices: ["現金", "受取商品券", "売上", "他店商品券"],
    mutate: (q) => {
      const price = Randomizer.getAmount(30000, 0.2, 1000);
      const cash = 10000;
      const cert = price - cash;
      q.text = `商品 ${Randomizer.fmt(price)}円 を販売し、代金のうち ${Randomizer.fmt(cash)}円 は現金で受け取り、残額は百貨店発行の商品券を受け取った。`;
      q.correctEntries = { debit: [{ accountName: "現金", amount: cash }, { accountName: "受取商品券", amount: cert }], credit: [{ accountName: "売上", amount: price }] };
      return q;
    }
  },
  {
    id: 'n3_cr_03', major: 'intro_cash', sub: 'credit_trans',
    text: "先日クレジット払いの条件で販売した商品 10,000円 が返品された。なお、販売時に計上していた手数料（2%）も取り消す。",
    correctEntries: { debit: [{ accountName: "売上", amount: 10000 }], credit: [{ accountName: "クレジット売掛金", amount: 9800 }, { accountName: "支払手数料", amount: 200 }] },
    choices: ["売上", "クレジット売掛金", "支払手数料", "現金"],
    mutate: (q) => {
      const price = Randomizer.getAmount(10000, 0.2, 1000);
      const fee = price * 0.02;
      const receivable = price - fee;
      q.text = `先日クレジット払いの条件で販売した商品 ${Randomizer.fmt(price)}円 が返品された。なお、販売時に計上していた手数料（2%）も取り消す。`;
      q.correctEntries = { debit: [{ accountName: "売上", amount: price }], credit: [{ accountName: "クレジット売掛金", amount: receivable }, { accountName: "支払手数料", amount: fee }] };
      return q;
    }
  },
  {
    id: 'n3_cr_04', major: 'intro_cash', sub: 'credit_trans',
    text: "当店発行の商品券 50,000円 を発行し、代金は現金で受け取った。",
    correctEntries: { debit: [{ accountName: "現金", amount: 50000 }], credit: [{ accountName: "商品券", amount: 50000 }] },
    choices: ["現金", "商品券", "受取商品券", "売上"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(50000, 0.1, 1000);
      q.text = `当店発行の商品券 ${Randomizer.fmt(amt)}円 を発行し、代金は現金で受け取った。`;
      q.correctEntries = { debit: [{ accountName: "現金", amount: amt }], credit: [{ accountName: "商品券", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_cr_05', major: 'intro_cash', sub: 'credit_trans',
    text: "商品 20,000円 を売り上げ、代金として当店発行の商品券を受け取った。",
    correctEntries: { debit: [{ accountName: "商品券", amount: 20000 }], credit: [{ accountName: "売上", amount: 20000 }] },
    choices: ["商品券", "売上", "受取商品券", "現金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(20000, 0.1, 1000);
      q.text = `商品 ${Randomizer.fmt(amt)}円 を売り上げ、代金として当店発行の商品券を受け取った。`;
      q.correctEntries = { debit: [{ accountName: "商品券", amount: amt }], credit: [{ accountName: "売上", amount: amt }] };
      return q;
    }
  }
];
