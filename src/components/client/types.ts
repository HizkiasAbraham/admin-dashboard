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
  portfolio?: Partial<Portfolio>;
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

export type SubscriberCategory = {
  category: string;
  total: number;
};

export type MtcStack = {
  mtc?: number;
  eValue?: number;
  capacity?: number;
  energy?: number;
  drv?: number;
  lsrv?: number;
  kwh_allocation?: number;
  [index: string]: any;
};

export type MtcCreditRate = {
  residential?: MtcStack;
  small_commertial?: MtcStack;
  large_commertial?: MtcStack;
  [index: string]: any;
};

export type BankedCreditItem = {
  previousBank: number;
  currentBank: number;
  newBankAdditions: number;
  newBankRelease: number;
  newAllocableCredits: number;
  newAppliedCredits: number;
  [index: string]: any;
};

export type BankedCredit = {
  hostBankReport?: BankedCreditItem;
  customerBankReport?: BankedCreditItem;
};
