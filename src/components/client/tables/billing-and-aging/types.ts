import { BillingAndAging, BillingDataItem } from "../../types";

export type BillingAndAgingInput = {
  data?: BillingAndAging;
  itemId: string
};

export type BillingRowInput = {
  type: string;
  row?: BillingDataItem;
};
