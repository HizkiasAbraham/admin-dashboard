"use client";
import { ChurnWithChartsCard } from "@/src/components/client/churn-w-charts-card";
import { ARDashboardItem } from "@/src/components/client/dashboard-items/ar";
import { Revenue } from "@/src/components/client/dashboard-items/revenue";
import { SubscribedAllocated } from "@/src/components/client/dashboard-items/subscribed-allocated";
import { SubscriberCategorization } from "@/src/components/client/portifolio-detail/subscriber-categorization";
import { BankedCredits } from "@/src/components/client/tables/banked-credits";
import { ProjectsTable } from "@/src/components/client/tables/projects-table";
import { PortfolioDetailsPageData } from "@/src/components/client/types";
import { VarianceAnalysis } from "@/src/components/client/variance-analysis";
import { BreadCrumb } from "@/src/components/shared/breadcrumb";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { getPortfolioById } from "@/src/utils/http-requests/client";
import { useEffect, useState } from "react";

export default function PortiFolioDetail(props: { params: { id: string } }) {
  const [data, setData] = useState<PortfolioDetailsPageData>();
  const [loading, setLoading] = useState(false);

  const fetchPortfolioDetail = async () => {
    try {
      setLoading(true);
      const result = await getPortfolioById(props.params.id, "last_30_days");
      setData(result.data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPortfolioDetail();
  }, []);

  return (
    <div>
      {loading && <IndeterminateProgress />}
      {!loading && (
        <>
          <BreadCrumb
            paths={[
              { name: "Dashboard", url: "/client/dashboard" },
              { name: data?.portfolio?.name || "Portfolio", url: "" },
            ]}
            showSearchAndUpload
          />
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <SubscribedAllocated
                data={data?.portfolio}
                dashboardType="portfolio"
              />
            </div>
            <div className="flex-1">
              <Revenue data={data?.portfolio} dashboardType="portfolio" />
            </div>
            <div className="flex-1">
              <ARDashboardItem />
            </div>
          </div>
          <div className=" flex flex-col mt-3 md:flex-row gap-3">
            <div className="flex-1">
              <SubscriberCategorization
                data={data?.subscriberCategorization || []}
                itemId={data?.portfolio?._id || ""}
                dashboardType="portfolio"
              />
            </div>
            <div className="flex-1">
              <ChurnWithChartsCard
                churnData={data?.churnData}
                itemId={data?.portfolio?._id}
                dashboardType="portfolio"
              />
            </div>
          </div>
          <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
            <ProjectsTable
              portfolioId={data?.portfolio?._id}
              data={data?.projects}
              dashboardType="portfolio"
              projectFilters={data?.projectFilters}
            />
          </div>
          <div>
            <BankedCredits
              dashboardType="portfolio"
              itemId={data?.portfolio?._id || ""}
              data={data?.bankedCreditData}
            />
          </div>
          <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
            <VarianceAnalysis
              itemId={data?.portfolio?._id}
              data={data?.varianceData}
              dashboardType="portfolio"
            />
          </div>
        </>
      )}
    </div>
  );
}
