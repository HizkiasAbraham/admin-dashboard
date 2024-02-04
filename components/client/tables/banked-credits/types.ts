export type BankedCreditsInput = {
  hostBankCredits: RowItem[];
  customerBankCredits: RowItem[];
};

export type BankedCreditRowInput = {
  row: RowItem;
};

export type TableHeaderInput = {
  label: string;
};

type RowItem = {
  label?: string;
  value: number;
};
