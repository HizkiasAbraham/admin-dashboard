export type TabSelectorInput = {
  items: TabItem[];
  selectedItem?: string;
  onTabItemChanged?: Function;
};

export type TabItem = {
  label: string;
  id: string;
};
