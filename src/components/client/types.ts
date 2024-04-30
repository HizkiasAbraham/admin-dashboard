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
  churn_rate_kwh?: number;
  churn_rate_customer?: number;
  total_canceled_customers?: number;
  canceled_kwh?: number;
  ar?: number;
  totalKwhAllocation?: number;
  subscriptionDiff?: DiffData;
  allocationDiff?: DiffData;
  revenueDiff?: DiffData;
  arDiff?: DiffData;
  churnRateKwhDiff?: DiffData;
  churnRateCustomerDiff?: DiffData;
  billingPeriod?: string;
  totalP50kWh?: number;
  numberOfProjects?: number;
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
  totalKwhAllocation: number;
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

type UsdAndKwh = {
  usd?: MtcStack;
  usdKwh?: MtcStack;
  [index: string]: any;
};

export type MtcCreditRate = {
  residential?: UsdAndKwh;
  small_commertial?: UsdAndKwh;
  large_commertial?: UsdAndKwh;
  blended_rate?: UsdAndKwh;
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

export type BillingDataItem = {
  gross: number;
  subscriberDiscount: number;
  paymentProcessFees: number;
  net: number;
};

export type BillingAndAging = {
  grossRevenue?: BillingDataItem;
  collected?: BillingDataItem;
  accountReceivable?: BillingDataItem;
};

export type PortfolioDetailsPageData = {
  portfolio?: Portfolio;
  projects?: Project[];
  subscriberCategorization?: SubscriberCategory[];
  bankedCreditData?: BankedCredit;
};

export type ProjectDetailsPageData = {
  project?: Project;
  subscriberCategorization?: SubscriberCategory[];
  creditRateData?: MtcCreditRate;
  bankedCreditData?: BankedCredit;
  billingAndAgingData?: BillingAndAging;
  customersData?: Customer[];
  graphsData?: any;
  churnData?: ChurnData;
};

export type Customer = {
  accountNumber?: number;
  serviceClass?: string;
  customerType?: string;
  allocationOfProject?: number;
  customerBank?: number;
  historical12MonthkWh?: number;
  discount?: number;
};

type ChurnItem = {
  count: number;
  kwh: number;
};

export type ChurnData = {
  null?: ChurnItem;
  "Move Out"?: ChurnItem;
  "Already Solar"?: ChurnItem;
  "Cancellation Request"?: ChurnItem;
  "Going Rooftop"?: ChurnItem;
  [index: string]: any;
};
