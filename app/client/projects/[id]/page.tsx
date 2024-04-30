"use client";

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
import { ProjectDetailsPageData } from "@/src/components/client/types";
import { VarianceAnalysis } from "@/src/components/client/variance-analysis";
import { BreadCrumb } from "@/src/components/shared/breadcrumb";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { customers } from "@/src/mockups/customers";
import { getProjectById } from "@/src/utils/http-requests/client";
import { useEffect, useState } from "react";

export default function ProjectDetailPage(props: { params: { id: string } }) {
  const [data, setData] = useState<ProjectDetailsPageData>({});
  const [loading, setLoading] = useState(false);

  const fetchProjctDetail = async () => {
    try {
      setLoading(true);
      const result = await getProjectById(props.params.id, "last_30_days");
      setData(result.data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProjctDetail();
  }, []);

  return (
    <div>
      {loading && <IndeterminateProgress />}
      {!loading && !!data.project && (
        <>
          <BreadCrumb
            classes="mb-2"
            paths={[
              { name: "Dashboard", url: "/client/dashboard" },
              {
                name: data.project.portfolio?.name || "",
                url: `/client/portifolios/${data.project?.portfolio?._id}`,
              },
              { name: data.project.name || "", url: "" },
            ]}
            showSearchAndUpload
          />
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <SubscribedAllocated
                data={data?.project}
                dashboardType="project"
              />
            </div>
            <div className="flex-1">
              <Revenue data={data?.project} dashboardType="project" />
            </div>
            <div className="flex-1">
              <Churn data={data?.project} dashboardType="project" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-3 gap-3">
            <div className="flex-1">
              <CreditRate data={data?.project} />
            </div>
            <div className="flex-1">
              <ARDashboardItem />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-3 gap-3">
            <div className="flex-1">
              <ProjectDetails project={data?.project} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-3 gap-3">
            <div className="flex-1">one</div>
            <div className="flex-1">
              <ChurnWithChartsCard
                itemId={data?.project._id}
                dashboardType="project"
                churnData={data?.churnData}
              />
            </div>
          </div>
          <div className="mt-5">
            <BankedCredits
              data={data?.bankedCreditData}
              itemId={data?.project?._id}
              dashboardType="project"
              graphData={data?.graphsData}
            />
          </div>
          <div className="mt-3">
            <SubscriberCategorization
              data={data?.subscriberCategorization || []}
              itemId={data.project?._id}
              graphData={data?.graphsData}
            />
          </div>
          <div className="mt-3">
            <RateTable
              data={data?.creditRateData || {}}
              projectId={data.project?._id || ""}
              creditType={data.project?.creditType || ""}
              graphData={data?.graphsData}
            />
          </div>
          <div className="mt-3">
            <BillingAndAging
              itemId={data?.project?._id || ""}
              data={data?.billingAndAgingData}
            />
          </div>
          <div className="mt-3">
            <VarianceAnalysis />
          </div>
          <div className="mt-3">
            <CustomersTable data={data?.customersData} />
          </div>
        </>
      )}
    </div>
  );
}
