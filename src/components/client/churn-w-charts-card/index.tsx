"use client";
import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { BarChart } from "@/src/components/shared/charts/bar-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { useEffect, useState } from "react";
import { ChurnChartProps, ChurnReasonsProps } from "./types";
import { useCalculatedDetails } from "@/src/hooks/useCalculatedDetails";
import { IndeterminateProgress } from "../../shared/indeterminate-progress";
import moment from "moment";
import { ProjectComparisionItem } from "./project-comp-item";

const churnGraphTabItems = [
  { id: "customerNumberKWC", label: "Customer # and kWdc" },
  { id: "projectsComparision", label: "Projects Comparision" },
  { id: "churnReasons", label: "Churn Reasons" },
];

const dataKeys = ["kWdc", "Customers"];

export function ChurnWithChartsCard(props: ChurnChartProps) {
  const { dashboardType, churnData, itemId } = props;
  const { data, loading, setBillingPeriod } = useCalculatedDetails(
    churnData,
    itemId || "",
    "churn-data",
    "churnData",
    dashboardType
  );
  const [selectedItem, setSelectedItem] = useState(churnGraphTabItems[0].id);
  const [barChartData, setBarchartData] = useState<any[]>([]);

  const processGraphData = () => {
    const graphD = [];
    for (const gd of data?.graphData || []) {
      const monthD: any = {};
      monthD["name"] = moment(gd.bill_month).format("MMM'YY");
      dataKeys.forEach((dk) => {
        monthD[dk] =
          dk === "kWdc" ? gd?.["kwdc"]?.toFixed(2) || 0 : gd?.[dk] || 0;
      });

      graphD.push(monthD);
    }
    setBarchartData(graphD);
  };

  useEffect(() => {
    processGraphData();
  }, [data]);

  return (
    <Card>
      {loading && <IndeterminateProgress />}
      <CardHeading title="Churn">
        <DatePicker
          width="w-40 md:w-48"
          onDatePicked={setBillingPeriod}
          optsMode="months"
        />
        <OutlinedButton color="green">Export .csv</OutlinedButton>
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4 flex items-center">
          <p className="text-2xl font-bold">
            {(Math.round(data?.totalKw || 0) || 0).toLocaleString("en-US")} kW{" "}
            <span>,</span>
            {data?.totalCustomers} <span>,</span>
            {data?.churnRateProject?.toFixed(2)}%
          </p>
        </div>
        <div className="mt-2">
          <TabSelector
            items={
              dashboardType === "project"
                ? churnGraphTabItems.filter(
                    (i) => i.id !== "projectsComparision"
                  )
                : churnGraphTabItems
            }
            selectedItem={selectedItem}
            onTabItemChanged={setSelectedItem}
          />
          <div>
            <div className="mt-2">
              {selectedItem === "customerNumberKWC" && (
                <BarChart
                  data={barChartData as []}
                  height="80"
                  dataKeys={dataKeys}
                />
              )}
              {selectedItem === "projectsComparision" ? (
                <div className="flex flex-col justify-center p-4 mt-8">
                  {data?.projectComparisions?.map((pc) => (
                    <ProjectComparisionItem
                      key={pc.name}
                      item={pc}
                      margin={5}
                    />
                  ))}
                </div>
              ) : (
                <></>
              )}
              {selectedItem === "churnReasons" && (
                <ChurnReasonsTab churnData={data?.churnReasons} />
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ChurnReasonsTab(props: ChurnReasonsProps) {
  const { churnData } = props;
  const reasonNames = [
    "Move Out",
    "Going Rooftop",
    "Cancellation Request",
    "null",
  ];
  let totalKwdc = 0;
  Object.keys(churnData || {}).forEach((k) => {
    totalKwdc += churnData?.[k].kwdc || 0;
  });

  return (
    <div className="mt-4">
      <div className="flex w-full gap-1 pl-4">
        <div className="w-full flex-justify-start">
          <p className="text-xs text-grey">Reason</p>
        </div>
        <div className="w-full flex-justify-start">
          <p className="text-xs text-grey">Customer #</p>
        </div>
        <div className="w-full flex-justify-start">
          <p className="text-xs text-grey">Customer kWdc</p>
        </div>
        <div className="w-full flex-justify-start">
          <p className="text-xs text-grey">% of kWdc</p>
        </div>
      </div>{" "}
      <div className="mt-4">
        {reasonNames.map((reason) => (
          <div
            key={reason}
            className="rounded-xl bg-white-smoke flex mt-2 mb-3 gap-2 cursor-pointer"
          >
            <div className="w-full flex p-4">
              <p className="font-bold text-black text-sm">
                {reason === "null" ? "Uknown" : reason}
              </p>
            </div>
            <div className="w-full flex p-4">
              <p className="font-bold text-black text-sm">
                {churnData?.[reason]?.count || "-"}
              </p>
            </div>
            <div className="w-full flex p-4">
              <p className="font-bold text-black text-sm">
                {churnData?.[reason]?.kwdc || "-"}
              </p>
            </div>
            <div className="w-full flex p-4">
              <p className="font-bold text-black text-sm">
                {churnData?.[reason]?.kwdc
                  ? (
                      ((churnData?.[reason]?.kwdc || 0) / (totalKwdc || 1)) *
                      100
                    ).toFixed(2) + "%"
                  : "-"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
