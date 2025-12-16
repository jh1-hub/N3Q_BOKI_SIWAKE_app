
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Questions: Settlement II (決算整理 II)
 */

import { Randomizer } from './data.js';

export const QUESTIONS_SETTLEMENT_ADV = [
  // --- 1. ACCRUALS & DEFERRALS (見越・繰延) ---
  {
    id: 'n3_st_02', major: 'settlement_adv', sub: 'accrual_deferral',
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
    id: 'n3_st_03', major: 'settlement_adv', sub: 'accrual_deferral',
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
    id: 'n3_st_08', major: 'settlement_adv', sub: 'accrual_deferral',
    text: "所有するビルの一室を賃貸しており、今月分の家賃 50,000円 が未収となっているため、これを計上する。",
    correctEntries: { debit: [{ accountName: "未収家賃", amount: 50000 }], credit: [{ accountName: "受取家賃", amount: 50000 }] },
    choices: ["未収家賃", "受取家賃", "前受家賃", "現金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(50000, 0.1, 1000);
      q.text = `所有するビルの一室を賃貸しており、今月分の家賃 ${Randomizer.fmt(amt)}円 が未収となっているため、これを計上する。`;
      q.correctEntries = { debit: [{ accountName: "未収家賃", amount: amt }], credit: [{ accountName: "受取家賃", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_st_15', major: 'settlement_adv', sub: 'accrual_deferral',
    text: "決算につき、受取地代の当期分は 100,000円 であるが、当期中に受け取った金額は 120,000円 であるため、次期分を適切に処理する。",
    correctEntries: { debit: [{ accountName: "受取地代", amount: 20000 }], credit: [{ accountName: "前受地代", amount: 20000 }] },
    choices: ["受取地代", "前受地代", "未収地代", "現金"],
    mutate: (q) => {
      const received = Randomizer.getAmount(120000, 0.1, 1000);
      const earned = received - 20000; 
      const prepaid = 20000;
      q.text = `決算につき、受取地代の当期分は ${Randomizer.fmt(earned)}円 であるが、当期中に受け取った金額は ${Randomizer.fmt(received)}円 であるため、次期分を適切に処理する。`;
      q.correctEntries = { debit: [{ accountName: "受取地代", amount: prepaid }], credit: [{ accountName: "前受地代", amount: prepaid }] };
      return q;
    }
  },
  {
    id: 'n3_st_22', major: 'settlement_adv', sub: 'accrual_deferral',
    text: "従業員の給料（当月分）200,000円 が未払いとなっているため、これを計上する。",
    correctEntries: { debit: [{ accountName: "給料", amount: 200000 }], credit: [{ accountName: "未払給料", amount: 200000 }] },
    choices: ["給料", "未払給料", "未払金", "預り金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(200000, 0.1, 10000);
      q.text = `従業員の給料（当月分）${Randomizer.fmt(amt)}円 が未払いとなっているため、これを計上する。`;
      q.correctEntries = { debit: [{ accountName: "給料", amount: amt }], credit: [{ accountName: "未払給料", amount: amt }] };
      return q;
    }
  },

  // --- 2. CASH SHORTAGE & SUPPLIES (現金過不足・貯蔵品) ---
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
  },
  {
    id: 'n3_st_16', major: 'settlement_adv', sub: 'cash_shortage',
    text: "決算において、未使用の切手 5,000円 と収入印紙 3,000円 が残っているため、これを貯蔵品に振り替える。なお、購入時に全額費用（通信費・租税公課）として処理している。",
    correctEntries: { debit: [{ accountName: "貯蔵品", amount: 8000 }], credit: [{ accountName: "通信費", amount: 5000 }, { accountName: "租税公課", amount: 3000 }] },
    choices: ["貯蔵品", "通信費", "租税公課", "消耗品費"],
    mutate: (q) => {
      const stamps = Randomizer.getAmount(5000, 0.2, 100);
      const revStamps = Randomizer.getAmount(3000, 0.2, 100);
      const total = stamps + revStamps;
      q.text = `決算において、未使用の切手 ${Randomizer.fmt(stamps)}円 と収入印紙 ${Randomizer.fmt(revStamps)}円 が残っているため、これを貯蔵品に振り替える。なお、購入時に全額費用（通信費・租税公課）として処理している。`;
      q.correctEntries = { debit: [{ accountName: "貯蔵品", amount: total }], credit: [{ accountName: "通信費", amount: stamps }, { accountName: "租税公課", amount: revStamps }] };
      return q;
    }
  },
  {
    id: 'n3_st_23', major: 'settlement_adv', sub: 'cash_shortage',
    text: "購入時に資産（消耗品）として処理していたコピー用紙等のうち、当期に使用した分 40,000円 を費用に振り替える。",
    correctEntries: { debit: [{ accountName: "消耗品費", amount: 40000 }], credit: [{ accountName: "消耗品", amount: 40000 }] },
    choices: ["消耗品費", "消耗品", "雑費", "備品"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(40000, 0.2, 1000);
      q.text = `購入時に資産（消耗品）として処理していたコピー用紙等のうち、当期に使用した分 ${Randomizer.fmt(amt)}円 を費用に振り替える。`;
      q.correctEntries = { debit: [{ accountName: "消耗品費", amount: amt }], credit: [{ accountName: "消耗品", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_st_24', major: 'settlement_adv', sub: 'cash_shortage',
    text: "期中に現金過不足（貸方）として処理していた 500円 について、決算になっても原因が判明しないため、適切に処理する。",
    correctEntries: { debit: [{ accountName: "現金過不足", amount: 500 }], credit: [{ accountName: "雑益", amount: 500 }] },
    choices: ["現金過不足", "雑益", "雑損", "現金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(500, 0.5, 100);
      q.text = `期中に現金過不足（貸方）として処理していた ${Randomizer.fmt(amt)}円 について、決算になっても原因が判明しないため、適切に処理する。`;
      q.correctEntries = { debit: [{ accountName: "現金過不足", amount: amt }], credit: [{ accountName: "雑益", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_st_28', major: 'settlement_adv', sub: 'cash_shortage',
    text: "決算において、現金の実際有高が帳簿残高より 1,000円 少ないことが判明した。原因は不明である。",
    correctEntries: { debit: [{ accountName: "雑損", amount: 1000 }], credit: [{ accountName: "現金", amount: 1000 }] },
    choices: ["雑損", "現金", "現金過不足", "雑益"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(1000, 0.2, 100);
      q.text = `決算において、現金の実際有高が帳簿残高より ${Randomizer.fmt(amt)}円 少ないことが判明した。原因は不明である。`;
      q.correctEntries = { debit: [{ accountName: "雑損", amount: amt }], credit: [{ accountName: "現金", amount: amt }] };
      return q;
    }
  },

  // --- 3. CLOSING ENTRIES (決算振替・配当) ---
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
    id: 'n3_st_17', major: 'settlement_adv', sub: 'closing_entries',
    text: "当期純損失 150,000円（損益勘定の借方残高）を、繰越利益剰余金勘定へ振り替える。",
    correctEntries: { debit: [{ accountName: "繰越利益剰余金", amount: 150000 }], credit: [{ accountName: "損益", amount: 150000 }] },
    choices: ["繰越利益剰余金", "損益", "当期純損失", "資本金"],
    mutate: (q) => {
      const loss = Randomizer.getAmount(150000, 0.2, 10000);
      q.text = `当期純損失 ${Randomizer.fmt(loss)}円（損益勘定の借方残高）を、繰越利益剰余金勘定へ振り替える。`;
      q.correctEntries = { debit: [{ accountName: "繰越利益剰余金", amount: loss }], credit: [{ accountName: "損益", amount: loss }] };
      return q;
    }
  },
  {
    id: 'n3_st_09', major: 'settlement_adv', sub: 'closing_entries',
    text: "株主総会において、繰越利益剰余金を財源として、配当金 300,000円 を支払うことを決議した。",
    correctEntries: { debit: [{ accountName: "繰越利益剰余金", amount: 300000 }], credit: [{ accountName: "未払配当金", amount: 300000 }] },
    choices: ["繰越利益剰余金", "未払配当金", "利益準備金", "現金"],
    mutate: (q) => {
      const div = Randomizer.getAmount(300000, 0.1, 10000);
      q.text = `株主総会において、繰越利益剰余金を財源として、配当金 ${Randomizer.fmt(div)}円 を支払うことを決議した。`;
      q.correctEntries = { debit: [{ accountName: "繰越利益剰余金", amount: div }], credit: [{ accountName: "未払配当金", amount: div }] };
      return q;
    }
  },
  {
    id: 'n3_st_18', major: 'settlement_adv', sub: 'closing_entries',
    text: "収益の各勘定残高の合計 5,000,000円 を損益勘定に振り替える。",
    correctEntries: { debit: [{ accountName: "売上", amount: 5000000 }], credit: [{ accountName: "損益", amount: 5000000 }] },
    choices: ["売上", "損益", "仕入", "繰越利益剰余金"],
    mutate: (q) => {
      const total = Randomizer.getAmount(5000000, 0.1, 100000);
      q.text = `収益の各勘定残高の合計（売上など） ${Randomizer.fmt(total)}円 を損益勘定に振り替える。`;
      q.correctEntries = { debit: [{ accountName: "売上", amount: total }], credit: [{ accountName: "損益", amount: total }] };
      return q;
    }
  },
  {
    id: 'n3_st_29', major: 'settlement_adv', sub: 'closing_entries',
    text: "費用の各勘定残高の合計 4,500,000円 を損益勘定に振り替える。",
    correctEntries: { debit: [{ accountName: "損益", amount: 4500000 }], credit: [{ accountName: "仕入", amount: 4500000 }] },
    choices: ["損益", "仕入", "売上", "繰越利益剰余金"],
    mutate: (q) => {
      const total = Randomizer.getAmount(4500000, 0.1, 100000);
      q.text = `費用の各勘定残高の合計（仕入など） ${Randomizer.fmt(total)}円 を損益勘定に振り替える。`;
      q.correctEntries = { debit: [{ accountName: "損益", amount: total }], credit: [{ accountName: "仕入", amount: total }] };
      return q;
    }
  }
];
