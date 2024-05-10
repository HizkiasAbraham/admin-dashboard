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
  kpiData?: KpiData;
};

type KpiData = {
  subscription?: number;
  revenue?: number;
  allocation?: number;
  creditRate?: number;
  churn_kWdc: number;
  churn_customer_count: number;
  churn_rate_project: number;
  ar?: number;
  totalKwhAllocation?: number;
  subscriptionDiff?: DiffData;
  allocationDiff?: DiffData;
  revenueDiff?: DiffData;
  arDiff?: DiffData;
  creditRateDiff?: DiffData;
  churn_rate_projectDiff?: DiffData;
  billingPeriod?: string;
  totalP50kWh?: number;
  numberOfProjects?: number;
};

type DiffData = {
  prev?: number;
  current?: number;
  diff?: number;
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
  churnData?: ChurnData;
  varianceData?: any;
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
  varianceData?: any;
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
  churnReasons?: ChurnReasons;
  graphData?: ChurnGraphData[];
  totalCustomers?: number;
  totalKw?: number;
  churnRateProject?: number;
  projectComparisions?: ProjectCompData[];
};

type ChurnGraphData = {
  bill_month?: Date;
  Customer?: number;
  kwdc?: number;
  [index: string]: any;
};

export type ProjectCompData = {
  name?: string;
  state?: string;
  churn_customer_count?: string;
  churn_rate_kW?: number;
  churn_rate_project?: number;
};

export type ChurnReasons = {
  null?: ChurnItem;
  "Move Out"?: ChurnItem;
  "Already Solar"?: ChurnItem;
  "Cancellation Request"?: ChurnItem;
  "Going Rooftop"?: ChurnItem;
  [index: string]: any;
};
