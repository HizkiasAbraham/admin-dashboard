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
import { VarianceAnalysis } from "@/src/components/client/variance-analysis";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { bankedCredits } from "@/src/mockups/bank-credits";
import { billingAndAging } from "@/src/mockups/billingAndAging";
import { customers } from "@/src/mockups/customers";
import { getProjectById } from "@/src/utils/http-requests/client";
import { useEffect, useState } from "react";

export default function ProjectDetailPage(props: { params: { id: string } }) {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [queryPeriod, setQueryPeriod] = useState("last_30_days");
  const [error, setError] = useState("");

  const fetchProjctDetail = async () => {
    try {
      setLoading(true);
      const result = await getProjectById(props.params.id, queryPeriod);
      setData({ ...data, [queryPeriod]: result.data });
      setLoading(false);
    } catch (error) {
      setError("Error while getting project details");
    }
  };

  useEffect(() => {
    fetchProjctDetail();
  }, []);

  useEffect(() => {
    if (!data[queryPeriod]) {
      fetchProjctDetail();
    }
  }, [queryPeriod]);

  return (
    <div>
      {loading && <IndeterminateProgress />}
      {!loading && !!data[queryPeriod] && (
        <>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <SubscribedAllocated project={data?.[queryPeriod]?.project} />
            </div>
            <div className="flex-1">
              <Revenue
                project={data?.[queryPeriod]?.project}
                onChange={setQueryPeriod}
              />
            </div>
            <div className="flex-1">
              <Churn project={data?.[queryPeriod]?.project} onChange={setQueryPeriod}/>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-3 gap-3">
            <div className="flex-1">
              <CreditRate project={data?.[queryPeriod]?.project} onChange={setQueryPeriod} />
            </div>
            <div className="flex-1">
              <ARDashboardItem />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-3 gap-3">
            <div className="flex-1">
              <ProjectDetails project={data?.[queryPeriod]?.project} />
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
              data={data?.[queryPeriod]?.subscriberCategorization}
            />
          </div>
          <div className="mt-3">
            <RateTable data={data?.[queryPeriod]} />
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
