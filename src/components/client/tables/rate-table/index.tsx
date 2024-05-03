"use client";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { LineChart } from "@/src/components/shared/charts/line-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { SearchInput } from "@/src/components/shared/inputs/searchInput";
import { usd } from "@/src/utils/format-numbers";
import { RateTableProp } from "./types";
import { lineChartData } from "@/src/mockups/chart";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { useEffect, useState } from "react";
import { useCalculatedDetails } from "@/src/hooks/useCalculatedDetails";
import { MtcCreditRate } from "../../types";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import moment from "moment";

const tabItems = [
  { label: "USD/kWh", id: "usdKwh" },
  { label: "USD", id: "usd" },
];

const vrdeStackItems = [
  { name: "MTC / CC", field: "mtc" },
  { name: "E-Value", field: "eValue" },
  { name: "Capacity", field: "capacity" },
  { name: "Energy", field: "energy" },
  { name: "DRV", field: "drv" },
  { name: "LSRV", field: "lsrv" },
  { name: "Total", field: "total" },
];

const dataKeys = ["Blended Rate"];

export function RateTable(props: RateTableProp) {
  const [currentSelectedTab, setCurrentSelectedTab] = useState(tabItems[0].id);
  const { data, graphData, loading, setBillingPeriod } =
    useCalculatedDetails<MtcCreditRate>(
      props.data,
      props.projectId,
      "credit-rate",
      "creditRateData",
      "project",
      props.graphData
    );
  const [blendedRateChartData, setBlendedRateChartData] = useState<any[]>([]);

  const getRateValue = (value?: number) => {
    return currentSelectedTab === "usd"
      ? usd(2).format(value || 0)
      : "$" + value?.toFixed(4);
  };

  const processGraphData = () => {
    const blendedRateGraph =
      graphData?.map((_gd: any) => ({
        date: _gd.date,
        blendedRate: _gd.blendedRate || {},
      })) || [];

    const graphD = [];
    for (const sg of blendedRateGraph) {
      const monthD: any = {};
      monthD["name"] = moment(sg.date).format("MMM");
      dataKeys.forEach((dk) => {
        monthD[dk] = (sg?.blendedRate?.usd?.total || 0).toFixed(2);
      });
      graphD.push(monthD);
    }
    setBlendedRateChartData(graphD);
  };

  useEffect(() => {
    processGraphData();
  }, [data]);

  return (
    <Card>
      {loading && <IndeterminateProgress />}
      <CardHeading title="Rate table">
        <SearchInput width="w-64" placeHolder="Search..." />
        <DatePicker onDatePicked={setBillingPeriod} width="w-64" />
        <div className="w-64">
          <TabSelector
            items={tabItems}
            selectedItem={currentSelectedTab}
            onTabItemChanged={setCurrentSelectedTab}
          />
        </div>
      </CardHeading>
      <CardContent>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 overflow-x-scroll md:overflow-x-hidden w-full">
            <div className="mt-4 flex w-max md:w-full">
              <div className="w-4/5 flex w-full gap-1 p-2">
                <div className="w-full flex justify-center">
                  <p className="text-xs text-grey">{props.creditType} Stack</p>
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-xs text-grey">Residential</p>
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-xs text-grey">Small Cml</p>
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-xs text-grey">Large Cml</p>
                </div>
              </div>
              <div className="flex w-64 gap-1 p-2 pr-8">
                <div className="w-full flex justify-center">
                  <p className="text-xs text-grey">Blended Rate</p>
                </div>
              </div>
            </div>
            {vrdeStackItems.map((row, index) => {
              const {
                residential,
                large_commertial,
                small_commertial,
                blended_rate,
              } = data;

              return (
                <div key={index} className="flex w-max md:w-full">
                  <div className="w-4/5 flex w-full gap-1 p-2">
                    <div className="rounded-xl w-full bg-white-smoke flex gap-2 cursor-pointer">
                      <div className="w-full flex justify-center items-center ">
                        <p className="font-bold text-black text-sm">
                          {row?.name}
                        </p>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <p className="font-medium text-black text-sm">
                          {residential?.[currentSelectedTab]?.[row?.field]
                            ? getRateValue(
                                residential?.[currentSelectedTab]?.[row?.field]
                              )
                            : "-"}
                        </p>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <p className="font-medium text-black text-sm">
                          {residential?.[currentSelectedTab]?.[row?.field]
                            ? getRateValue(
                                residential?.[currentSelectedTab]?.[row?.field]
                              )
                            : "-"}
                        </p>
                      </div>
                      <div className="w-full flex justify-center items-center ">
                        <p className="font-medium text-black text-sm">
                          {residential?.[currentSelectedTab]?.[row?.field]
                            ? getRateValue(
                                residential?.[currentSelectedTab]?.[row?.field]
                              )
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-64 flex gap-1 p-2 justify-end">
                    <div className="rounded-xl w-full bg-dark-grey flex gap-2 cursor-pointer justify-end">
                      <div className="w-full flex justify-center items-center p-4">
                        <p className="font-bold text-purple text-sm">
                          {blended_rate?.[currentSelectedTab]?.[row?.field]
                            ? getRateValue(
                                blended_rate?.[currentSelectedTab]?.[row?.field]
                              )
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-1">
            <LineChart
              height="full"
              data={blendedRateChartData as []}
              dataKeys={dataKeys}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
