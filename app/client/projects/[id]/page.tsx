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
import {
  MtcCreditRate,
  Project,
  SubscriberCategory,
} from "@/src/components/client/types";
import { VarianceAnalysis } from "@/src/components/client/variance-analysis";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { bankedCredits } from "@/src/mockups/bank-credits";
import { billingAndAging } from "@/src/mockups/billingAndAging";
import { customers } from "@/src/mockups/customers";
import { getProjectById } from "@/src/utils/http-requests/client";
import { useEffect, useState } from "react";

export default function ProjectDetailPage(props: { params: { id: string } }) {
  const [data, setData] = useState<{
    project?: Project;
    subscriberCategorization?: SubscriberCategory[];
    creditRateData?: MtcCreditRate;
  }>({});
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
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <SubscribedAllocated data={data?.project} />
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
            <SubscriberCategorization
              data={data?.subscriberCategorization || []}
              projectId={data.project?._id}
            />
          </div>
          <div className="mt-3">
            <RateTable
              data={data?.creditRateData || {}}
              projectId={data.project?._id || ""}
              creditType={data.project?.creditType || ""}
            />
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
      )}
    </div>
  );
}
