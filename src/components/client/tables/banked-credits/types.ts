import { BankedCredit, BankedCreditItem } from "../../types";

export type BankedCreditsInput = {
  data?: BankedCredit;
  itemId: string;
  dashboardType?: "portfolio" | "project";
};

export type HeaderProp = { label: string };

export type RowProp = { item?: BankedCreditItem };
