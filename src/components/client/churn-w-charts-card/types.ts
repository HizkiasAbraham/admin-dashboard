import { ChurnData, ChurnReasons, ProjectCompData } from "../types";

export type ChurnChartProps = {
  dashboardType?: "portfolio" | "project";
  churnData?: ChurnData;
  itemId?: string;
};

export type ChurnReasonsProps = {
  churnData?: ChurnReasons;
};

export type ProjectComparisionProp = {
  item?: ProjectCompData;
  color?: string;
  margin?: number;
};
