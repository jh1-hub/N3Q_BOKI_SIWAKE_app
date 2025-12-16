
/**
 * Nissho Bookkeeping Grade 3 Practice App
 * Questions: Notes & Claims (手形・債権債務)
 */

import { Randomizer } from './data.js';

export const QUESTIONS_NOTES_CLAIMS = [
  // --- 1. NOTES & ELECTRONIC CLAIMS (手形・電子記録債権) ---
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
  {
    id: 'n3_nt_03', major: 'notes_claims', sub: 'notes_elec',
    text: "Ａ社に対する売掛金 600,000円 を回収するため、同社振出しの約束手形を受け取った。",
    correctEntries: { debit: [{ accountName: "受取手形", amount: 600000 }], credit: [{ accountName: "売掛金", amount: 600000 }] },
    choices: ["受取手形", "売掛金", "電子記録債権", "現金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(600000, 0.2, 1000);
      q.text = `Ａ社に対する売掛金 ${Randomizer.fmt(amt)}円 を回収するため、同社振出しの約束手形を受け取った。`;
      q.correctEntries = { debit: [{ accountName: "受取手形", amount: amt }], credit: [{ accountName: "売掛金", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_nt_04', major: 'notes_claims', sub: 'notes_elec',
    text: "買掛金 150,000円 を支払うため、所有するB社振出しの約束手形を裏書譲渡した。",
    correctEntries: { debit: [{ accountName: "買掛金", amount: 150000 }], credit: [{ accountName: "受取手形", amount: 150000 }] },
    choices: ["買掛金", "受取手形", "支払手形", "電子記録債務"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(150000, 0.2, 1000);
      q.text = `買掛金 ${Randomizer.fmt(amt)}円 を支払うため、所有するB社振出しの約束手形を裏書譲渡した。`;
      q.correctEntries = { debit: [{ accountName: "買掛金", amount: amt }], credit: [{ accountName: "受取手形", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_nt_05', major: 'notes_claims', sub: 'notes_elec',
    text: "電子記録債権 100,000円 を、取引銀行で現金化した。なお、手数料 2,000円 が差し引かれ、残額が当座預金口座に入金された。",
    correctEntries: { debit: [{ accountName: "当座預金", amount: 98000 }, { accountName: "電子記録債権売却損", amount: 2000 }], credit: [{ accountName: "電子記録債権", amount: 100000 }] },
    choices: ["当座預金", "電子記録債権売却損", "電子記録債権", "支払手数料"],
    mutate: (q) => {
      const total = Randomizer.getAmount(100000, 0.2, 1000);
      const fee = Randomizer.getAmount(2000, 0.1, 100);
      const net = total - fee;
      q.text = `電子記録債権 ${Randomizer.fmt(total)}円 を、取引銀行で現金化した。なお、手数料 ${Randomizer.fmt(fee)}円 が差し引かれ、残額が当座預金口座に入金された。`;
      q.correctEntries = { debit: [{ accountName: "当座預金", amount: net }, { accountName: "電子記録債権売却損", amount: fee }], credit: [{ accountName: "電子記録債権", amount: total }] };
      return q;
    }
  },
  {
    id: 'n3_nt_06', major: 'notes_claims', sub: 'notes_elec',
    text: "買掛金 200,000円 を支払うため、所有する電子記録債権を譲渡する記録を行った。",
    correctEntries: { debit: [{ accountName: "買掛金", amount: 200000 }], credit: [{ accountName: "電子記録債権", amount: 200000 }] },
    choices: ["買掛金", "電子記録債権", "電子記録債務", "売掛金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(200000, 0.2, 1000);
      q.text = `買掛金 ${Randomizer.fmt(amt)}円 を支払うため、所有する電子記録債権を譲渡する記録を行った。`;
      q.correctEntries = { debit: [{ accountName: "買掛金", amount: amt }], credit: [{ accountName: "電子記録債権", amount: amt }] };
      return q;
    }
  },

  // --- 2. OTHER RECEIVABLES/PAYABLES (未収・未払・仮払) ---
  {
    id: 'n3_ot_01', major: 'notes_claims', sub: 'other_receivables',
    text: "従業員の出張にあたり、旅費の概算額として 30,000円 を現金で手渡した。",
    correctEntries: { debit: [{ accountName: "仮払金", amount: 30000 }], credit: [{ accountName: "現金", amount: 30000 }] },
    choices: ["仮払金", "現金", "旅費交通費", "立替金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(30000, 0.2, 1000);
      q.text = `従業員の出張にあたり、旅費の概算額として ${Randomizer.fmt(amt)}円 を現金で手渡した。`;
      q.correctEntries = { debit: [{ accountName: "仮払金", amount: amt }], credit: [{ accountName: "現金", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_ot_02', major: 'notes_claims', sub: 'other_receivables',
    text: "出張から戻った従業員より、旅費 28,000円 を使ったとの報告を受け、概算払額 30,000円 との差額を現金で受け取った。",
    correctEntries: { debit: [{ accountName: "旅費交通費", amount: 28000 }, { accountName: "現金", amount: 2000 }], credit: [{ accountName: "仮払金", amount: 30000 }] },
    choices: ["旅費交通費", "現金", "仮払金", "雑益"],
    mutate: (q) => {
      const advance = Randomizer.getAmount(30000, 0.2, 1000);
      const expense = advance - 2000;
      const diff = 2000;
      q.text = `出張から戻った従業員より、旅費 ${Randomizer.fmt(expense)}円 を使ったとの報告を受け、概算払額 ${Randomizer.fmt(advance)}円 との差額を現金で受け取った。`;
      q.correctEntries = { debit: [{ accountName: "旅費交通費", amount: expense }, { accountName: "現金", amount: diff }], credit: [{ accountName: "仮払金", amount: advance }] };
      return q;
    }
  },
  {
    id: 'n3_ot_03', major: 'notes_claims', sub: 'other_receivables',
    text: "従業員の給料 250,000円 を支払うにあたり、所得税の源泉徴収分 10,000円 を差し引き、手取り額を当座預金口座から振り込んだ。",
    correctEntries: { debit: [{ accountName: "給料", amount: 250000 }], credit: [{ accountName: "預り金", amount: 10000 }, { accountName: "当座預金", amount: 240000 }] },
    choices: ["給料", "預り金", "当座預金", "所得税預り金"],
    mutate: (q) => {
      const salary = Randomizer.getAmount(250000, 0.1, 10000);
      const tax = Randomizer.round(salary * 0.05, 100);
      const net = salary - tax;
      q.text = `従業員の給料 ${Randomizer.fmt(salary)}円 を支払うにあたり、所得税の源泉徴収分 ${Randomizer.fmt(tax)}円 を差し引き、手取り額を当座預金口座から振り込んだ。`;
      q.correctEntries = { debit: [{ accountName: "給料", amount: salary }], credit: [{ accountName: "預り金", amount: tax }, { accountName: "当座預金", amount: net }] };
      return q;
    }
  },
  {
    id: 'n3_ot_04', major: 'notes_claims', sub: 'other_receivables',
    text: "商品以外の備品 50,000円 を購入し、代金は翌月末払いとした。",
    correctEntries: { debit: [{ accountName: "備品", amount: 50000 }], credit: [{ accountName: "未払金", amount: 50000 }] },
    choices: ["備品", "未払金", "買掛金", "当座預金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(50000, 0.2, 1000);
      q.text = `商品以外の備品 ${Randomizer.fmt(amt)}円 を購入し、代金は翌月末払いとした。`;
      q.correctEntries = { debit: [{ accountName: "備品", amount: amt }], credit: [{ accountName: "未払金", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_ot_05', major: 'notes_claims', sub: 'other_receivables',
    text: "当座預金口座に内容不明の入金 100,000円 があったため、一時的に処理する。",
    correctEntries: { debit: [{ accountName: "当座預金", amount: 100000 }], credit: [{ accountName: "仮受金", amount: 100000 }] },
    choices: ["当座預金", "仮受金", "雑益", "売掛金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(100000, 0.2, 1000);
      q.text = `当座預金口座に内容不明の入金 ${Randomizer.fmt(amt)}円 があったため、一時的に処理する。`;
      q.correctEntries = { debit: [{ accountName: "当座預金", amount: amt }], credit: [{ accountName: "仮受金", amount: amt }] };
      return q;
    }
  },

  // --- 3. LOANS (貸付・借入) ---
  {
    id: 'n3_ln_01', major: 'notes_claims', sub: 'loans',
    text: "従業員に対して 100,000円 を貸し付け、現金を手渡した。なお、返済期限は半年後である。",
    correctEntries: { debit: [{ accountName: "従業員貸付金", amount: 100000 }], credit: [{ accountName: "現金", amount: 100000 }] },
    choices: ["従業員貸付金", "現金", "貸付金", "給料"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(100000, 0.2, 1000);
      q.text = `従業員に対して ${Randomizer.fmt(amt)}円 を貸し付け、現金を手渡した。なお、返済期限は半年後である。`;
      q.correctEntries = { debit: [{ accountName: "従業員貸付金", amount: amt }], credit: [{ accountName: "現金", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_ln_02', major: 'notes_claims', sub: 'loans',
    text: "取引銀行より 1,000,000円 を借り入れ、利息 20,000円 を差し引かれた残額が当座預金に振り込まれた。",
    correctEntries: { debit: [{ accountName: "当座預金", amount: 980000 }, { accountName: "支払利息", amount: 20000 }], credit: [{ accountName: "借入金", amount: 1000000 }] },
    choices: ["当座預金", "支払利息", "借入金", "手形借入金"],
    mutate: (q) => {
      const total = Randomizer.getAmount(1000000, 0.1, 10000);
      const interest = Randomizer.getAmount(20000, 0.1, 1000);
      const net = total - interest;
      q.text = `取引銀行より ${Randomizer.fmt(total)}円 を借り入れ、利息 ${Randomizer.fmt(interest)}円 を差し引かれた残額が当座預金に振り込まれた。`;
      q.correctEntries = { debit: [{ accountName: "当座預金", amount: net }, { accountName: "支払利息", amount: interest }], credit: [{ accountName: "借入金", amount: total }] };
      return q;
    }
  },
  {
    id: 'n3_ln_03', major: 'notes_claims', sub: 'loans',
    text: "取引先に対して 500,000円 を貸し付け、同社振出しの約束手形を受け取った。代金は小切手を振り出して支払った。",
    correctEntries: { debit: [{ accountName: "手形貸付金", amount: 500000 }], credit: [{ accountName: "当座預金", amount: 500000 }] },
    choices: ["手形貸付金", "当座預金", "受取手形", "貸付金"],
    mutate: (q) => {
      const amt = Randomizer.getAmount(500000, 0.2, 10000);
      q.text = `取引先に対して ${Randomizer.fmt(amt)}円 を貸し付け、同社振出しの約束手形を受け取った。代金は小切手を振り出して支払った。`;
      q.correctEntries = { debit: [{ accountName: "手形貸付金", amount: amt }], credit: [{ accountName: "当座預金", amount: amt }] };
      return q;
    }
  },
  {
    id: 'n3_ln_04', major: 'notes_claims', sub: 'loans',
    text: "借入金 1,000,000円 の返済期日が到来し、元本と利息 5,000円 を合わせて当座預金口座から引き落とされた。",
    correctEntries: { debit: [{ accountName: "借入金", amount: 1000000 }, { accountName: "支払利息", amount: 5000 }], credit: [{ accountName: "当座預金", amount: 1005000 }] },
    choices: ["借入金", "支払利息", "当座預金", "現金"],
    mutate: (q) => {
      const principal = Randomizer.getAmount(1000000, 0.1, 10000);
      const interest = Randomizer.getAmount(5000, 0.1, 100);
      const total = principal + interest;
      q.text = `借入金 ${Randomizer.fmt(principal)}円 の返済期日が到来し、元本と利息 ${Randomizer.fmt(interest)}円 を合わせて当座預金口座から引き落とされた。`;
      q.correctEntries = { debit: [{ accountName: "借入金", amount: principal }, { accountName: "支払利息", amount: interest }], credit: [{ accountName: "当座預金", amount: total }] };
      return q;
    }
  }
];
