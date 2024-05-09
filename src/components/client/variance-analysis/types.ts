export type VarianceTabProps = {
  itemId?: string;
  dashboardType?: "portfolio" | "project";
  data?: any;
};

export type TabContentInput = {
  parentTabId: string;
  tabId: string;
  tabMetaData?: any; // TODO: convert all any to typed
  tabDataItem?: any;
  hasModelData?: boolean;
};
