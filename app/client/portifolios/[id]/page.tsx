import { ChurnWithChartsCard } from "@/src/components/client/churn-w-charts-card";
import { ARDashboardItem } from "@/src/components/client/dashboard-items/ar";
import { Revenue } from "@/src/components/client/dashboard-items/revenue";
import { SubscribedAllocated } from "@/src/components/client/dashboard-items/subscribed-allocated";
import { SubscriberCategorization } from "@/src/components/client/portifolio-detail/subscriber-categorization";
import { BankedCredits } from "@/src/components/client/tables/banked-credits";
import { ProjectsTable } from "@/src/components/client/tables/projects-table";
import { VarianceAnalysis } from "@/src/components/client/variance-analysis";
import { bankedCredits } from "@/src/mockups/bank-credits";
import { projects } from "@/src/mockups/projects";

export default function PortiFolioDetail() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          {/* <SubscribedAllocated data={{}} /> */}
        </div>
        <div className="flex-1">
          {/* <Revenue project={{}} /> */}
        </div>
        <div className="flex-1">
          <ARDashboardItem />
        </div>
      </div>
      <div className=" flex flex-col mt-3 md:flex-row gap-3">
        <div className="flex-1">
          <SubscriberCategorization />
        </div>
        <div className="flex-1">
          <ChurnWithChartsCard />
        </div>
      </div>
      <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
        <ProjectsTable data={[...projects] as []} />
      </div>
      <div>
        <BankedCredits
          customerBankCredits={bankedCredits.customerBankCredits}
          hostBankCredits={bankedCredits.hostBankCredits}
        />
      </div>
      <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
        <VarianceAnalysis />
      </div>
    </>
  );
}
