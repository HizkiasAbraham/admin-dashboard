import { ChurnWithChartsCard } from "@/src/components/client/churn-w-charts-card";
import { ARDashboardItem } from "@/src/components/client/dashboard-items/ar";
import { Churn } from "@/src/components/client/dashboard-items/churn";
import { CreditRate } from "@/src/components/client/dashboard-items/credit-rate";
import { Revenue } from "@/src/components/client/dashboard-items/revenue";
import { SubscribedAllocated } from "@/src/components/client/dashboard-items/subscribed-allocated";
import { SubscriberCategorization } from "@/src/components/client/project-detail/subscriber-categorization";
import { BankedCredits } from "@/src/components/client/tables/banked-credits";
import { BillingAndAging } from "@/src/components/client/tables/billing-and-aging";
import { CustomersTable } from "@/src/components/client/tables/customers";
import { ProjectDetails } from "@/src/components/client/tables/project-details";
import { RateTable } from "@/src/components/client/tables/rate-table";
import { VarianceAnalysis } from "@/src/components/client/variance-analysis";
import { bankedCredits } from "@/src/mockups/bank-credits";
import { billingAndAging } from "@/src/mockups/billingAndAging";
import { customers } from "@/src/mockups/customers";
import { rateTable } from "@/src/mockups/rate-table";

export default function ProjectDetailPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <SubscribedAllocated />
        </div>
        <div className="flex-1">
          <Revenue />
        </div>
        <div className="flex-1">
          <ARDashboardItem />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-3 gap-3">
        <div className="flex-1">
          <Churn />
        </div>
        <div className="flex-1">
          <CreditRate />
        </div>
        <div className="flex-1">
          <ARDashboardItem />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-3 gap-3">
        <div className="flex-1">
          <ProjectDetails />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-3 gap-3">
        <div className="flex-1">one</div>
        <div className="flex-1">
          <ChurnWithChartsCard />
        </div>
      </div>
      <div className="mt-5">
        <BankedCredits
          customerBankCredits={bankedCredits.customerBankCredits}
          hostBankCredits={bankedCredits.hostBankCredits}
        />
      </div>
      <div className="mt-3">
        <SubscriberCategorization />
      </div>
      <div className="mt-3">
        <RateTable data={rateTable as []} />
      </div>
      <div className="mt-3">
        <BillingAndAging data={billingAndAging as []} />
      </div>
      <div className="mt-3">
        <VarianceAnalysis />
      </div>
      <div className="mt-3">
        <CustomersTable data={customers as []} />
      </div>
    </>
  );
}
