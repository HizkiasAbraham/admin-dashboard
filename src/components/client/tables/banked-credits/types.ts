import { BankedCredit, BankedCreditItem } from "../../types";

export type BankedCreditsInput = {
  data?: BankedCredit
  itemId: string;
  dashboardType?: string;
};

export type HeaderProp = { label: string };

export type RowProp = { item?: BankedCreditItem };
