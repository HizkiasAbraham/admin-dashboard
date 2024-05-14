export type ChartInput = {
  data: any[];
  dataKeys?: string[];
  height?: string;
  dashboardType?: "portfolio" | "project";
  showPercentage?: boolean;
  yAxisFormatter?: any;
  dataItemFormatter?: any;
};

export const chartColorVariants = [
  "#5F4B8B",
  "#FAD02C",
  "#FF4040",
  "#698DEB",
  "#5F4B8B",
];
