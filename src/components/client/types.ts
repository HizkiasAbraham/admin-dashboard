export type Portfolio = {
  _id: string;
  name: string;
  sizekWdc: number;
  numberOfProjects: number;
  revenue: number;
  churn_rate_customer?: number;
  churn_rate_kwh?: number;
  kpiData?: KpiData;
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
  churn_rate_kwh?: number;
  kpiData?: KpiData;
};

type KpiData = {
  subscription?: number;
  revenue?: number;
  allocation?: number;
  creditRate?: number;
  ar?: number;
  totalKwhAllocation?: number;
  subscriptionDiff?: DiffData;
  allocationDiff?: DiffData;
  revenueDiff?: DiffData;
  arDiff?: DiffData;
  billingPeriod?: string;
};

type DiffData = {
  prev?: number;
  current?: number;
  diff?: number;
  change?: number;
};
