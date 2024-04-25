import { SubscriberCategory } from "../../types";

export type SubscriberCategorizationProps = {
  data: SubscriberCategory[];
  itemId: string;
  dashboardType?: "portfolio" | "project";
  graphData?: any;
};
