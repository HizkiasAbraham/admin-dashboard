"use client";

import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { SearchInput } from "@/src/components/shared/inputs/searchInput";
import { Select } from "@/src/components/shared/inputs/select";
import { usd } from "@/src/utils/format-numbers";
import { useRouter } from "next/navigation";
import { ProjectsTableInput, TableRowInput } from "./types";
import { useEffect, useState } from "react";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { getProjects } from "@/src/utils/http-requests/client";
import { Project } from "../../types";

export function ProjectsTable(props: ProjectsTableInput) {
  const [data, setData] = useState<Project[]>(props.data);
  const [loading, setLoading] = useState<boolean>(false);
  const [billingPeriod, setBillingPeriod] = useState<string>("");
  const router = useRouter();

  const fetchProjectsData = async () => {
    try {
      setLoading(true);
      const result = await getProjects(billingPeriod);
      setData(result.data?.projects);
      setLoading(false);
    } catch (error) {}
  };

  // Todo, add portfolio, state, utility and crdit type filters
  useEffect(() => {
    if (billingPeriod) {
      fetchProjectsData();
    }
  }, [billingPeriod]);

  const navigate = (projectId: string) =>
    router.push("/client/projects/" + projectId);

  return (
    <div className="w-max md:w-full">
      <Card>
        <CardHeading title="Projects">
          <DatePicker width="w-48" onDatePicked={setBillingPeriod} />
        </CardHeading>
        <CardContent>
          <div className="flex pt-2 pb-2">
            <div className="flex-auto flex">
              <SearchInput placeHolder="Search..." />
            </div>
            <div className="flex-auto flex justify-end gap-2">
              <Select
                options={[
                  { label: "Portiffolio 1", value: "er" },
                  { label: "Portiffolio 2", value: "er" },
                ]}
                placeHolder="Portifolio"
              />
              <Select options={[]} placeHolder="State" />
              <Select options={[]} placeHolder="Type" />
              <Select options={[]} placeHolder="Utility" />
            </div>
          </div>
          {loading && <IndeterminateProgress />}
          <div className="mt-2 mb-2">
            <TableHeader />
            {data.map((row, index) => (
              <TableRow key={index} row={row} navigate={navigate} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex w-full gap-1">
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey pl-4">Name and Address </p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Size kWdc</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">P50 kWh</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Total kWh</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">State</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Utility</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Type</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Subscription</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Allocation</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Revenue</p>
      </div>
      <div className="flex-1 flex justify-center">
        <p className="text-xs text-grey">A/R</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Credit Rate</p>
      </div>
      <div className="flex-1 flex justify-start">
        <p className="text-xs text-grey">Churn</p>
      </div>
    </div>
  );
}

function TableRow(props: TableRowInput) {
  const { row, navigate } = props;
  const { kpiData } = row;
  return (
    <div
      className="rounded-xl bg-white-smoke hover:bg-yellow flex mt-2 mb-4 gap-2 cursor-pointer"
      onClick={() => navigate(row?._id)}
    >
      <div className="flex-1">
        <div className="flex flex-col gap-1 pt-4 pb-4">
          <p className="font-bold text-black pl-4 text-sm">{row?.name}</p>
          <p className="font-medium text-grey pl-4 text-xs truncate overflow-hidden w-12 xl:w-24">
            {row.address}
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <p className="font-bold text-black text-sm">
          {row?.capacityKwDc?.toLocaleString("en-US")}
        </p>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <p className="font-bold text-black text-sm">
          {row?.p50kWh?.toLocaleString("en-US")}
        </p>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <p className="font-bold text-black text-sm">
          {kpiData?.totalKwhAllocation?.toLocaleString("en-US")}
        </p>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <p className="font-bold text-black text-sm">{row.state}</p>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <p className="font-bold text-black text-sm">{row.utility}</p>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <p className="font-bold text-black text-sm">{row.creditType}</p>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {kpiData?.subscription?.toFixed(2)} %
          </p>
          {!!kpiData?.subscriptionDiff?.diff && (
            <div className="flex gap-1 items-center">
              {kpiData?.subscriptionDiff?.diff > 0 ? (
                <Icon.ArrowUpRight />
              ) : (
                <Icon.ArrowDownLeft />
              )}
              <p className="font-medium text-black text-xs">
                {kpiData?.subscriptionDiff?.diff}%
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {kpiData?.allocation?.toFixed(2)} %
          </p>
          {!!kpiData?.allocationDiff?.diff && (
            <div className="flex gap-1 items-center">
              {kpiData?.allocationDiff?.diff > 0 ? (
                <Icon.ArrowUpRight />
              ) : (
                <Icon.ArrowDownLeft />
              )}
              <p className="font-medium text-black text-xs">
                {kpiData?.allocationDiff?.diff}%
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {usd(2).format(kpiData?.revenue || 0)}
          </p>
          {!!kpiData?.revenueDiff?.change && (
            <div className="flex gap-1 items-center">
              {kpiData?.revenueDiff?.change > 0 ? (
                <Icon.ArrowUpRight />
              ) : (
                <Icon.ArrowDownLeft />
              )}
              <p className="font-medium text-black text-xs">
                {usd().format(kpiData?.revenueDiff?.change)}(
                {kpiData?.revenueDiff?.diff?.toFixed(2)})%
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {kpiData?.ar ? usd().format(kpiData?.arDiff?.change || 0) : "-"}
          </p>
          {!!kpiData?.arDiff?.diff && (
            <div className="flex gap-1 items-center">
              {kpiData?.arDiff?.diff ? (
                <Icon.ArrowUpRight />
              ) : (
                <Icon.ArrowDownLeft />
              )}
              <p className="font-medium text-black text-xs">
                {usd().format(kpiData?.arDiff?.change || 0)}(
                {kpiData?.arDiff?.diff})%
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <p className="font-bold text-black text-sm">
          {/* @ts-ignore */}
          {kpiData.creditRate?.toFixed(4)}
        </p>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {row?.churn_rate_customer?.toFixed(2)} %
          </p>
          {/* {!!row?.churn?.diff && (
            <div className="flex gap-1 items-center">
              {row?.churn?.diff > 0 ? (
                <Icon.ArrowUpRight />
              ) : (
                <Icon.ArrowDownLeft />
              )}
              <p className="font-medium text-black text-xs">
                {row?.churn?.diff}%
              </p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
