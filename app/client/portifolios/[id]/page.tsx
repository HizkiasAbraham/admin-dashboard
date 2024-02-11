import { ChurnWithChartsCard } from '@/components/client/churn-w-charts-card';
import { ARDashboardItem } from '@/components/client/dashboard-items/ar';
import { Revenue } from '@/components/client/dashboard-items/revenue';
import { SubscribedAllocated } from '@/components/client/dashboard-items/subscribed-allocated';
import { SubscriberCategorization } from '@/components/client/portifolio-detail/subscriber-categorization';
import { BankedCredits } from '@/components/client/tables/banked-credits';
import { ProjectsTable } from '@/components/client/tables/projects-table';
import { VarianceAnalysis } from '@/components/client/variance-analysis';
import { BarChart } from '@/components/shared/charts/bar-chart';
import { bankedCredits } from '@/mockups/bank-credits';
import { barChartData } from '@/mockups/chart';
import { projects } from '@/mockups/projects';

export default function PortiFolioDetail() {
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
