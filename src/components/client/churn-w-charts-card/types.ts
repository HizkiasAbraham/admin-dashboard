import { ChurnData, ChurnReasons } from "../types";

export type ChurnChartProps = {
  dashboardType?: "portfolio" | "project";
  churnData?: ChurnData;
  itemId?: string
};

export type ChurnReasonsProps = {
  churnData?: ChurnReasons;
};
