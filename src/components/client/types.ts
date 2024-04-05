export type Portfolio = {
  _id: string;
  name: string;
  sizekWdc: number;
  numberOfProjects: number;
  revenue: number;
};

export type Project = {
  _id: string;
  name?: string;
  address?: string;
  capacityKwDc?: number;
  p50kWh?: number;
  state?: string;
  utility?: string;
  creditType?: string;
  churn_rate_customer?: number;
  kpiData?: KpiData;
};

type KpiData = {
  subscription?: number;
  revenue?: number;
  allocation?: number;
  creditRate?: number;
  totalKwhAllocation?: number;
  subscriptionDiff?: DiffData;
  allocationDiff?: DiffData;
  revenueDiff?: DiffData;
  billingPeriod?: string;
};

type DiffData = {
  prev?: number;
  current?: number;
  diff?: number;
  change?: number;
};
