"use client";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { LineChart } from "@/src/components/shared/charts/line-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { SearchInput } from "@/src/components/shared/inputs/searchInput";
import { usd } from "@/src/utils/format-numbers";
import { RateTableProp } from "./types";
import { lineChartData } from "@/src/mockups/chart";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { useState } from "react";
import { useProjectDetail } from "@/src/hooks/useProjectDetail";
import { MtcCreditRate } from "../../types";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";

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
  { name: "blendedRate", field: "blendedRate" },
];

export function RateTable(props: RateTableProp) {
  const [currentSelectedTab, setCurrentSelectedTab] = useState(tabItems[0].id);
  const { data, loading, setBillingPeriod } = useProjectDetail<MtcCreditRate>(
    props.data,
    props.projectId,
    "credit-rate",
    "creditRateData"
  );

  const getComputedValue = (numinator: number, denominator: number = 1) => {
    return currentSelectedTab === "usdKwh"
      ? numinator / denominator
      : numinator;
  };

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
              const { residential, large_commertial, small_commertial } = data;

              const residentialTotalKwh = residential?.kwh_allocation || 1;
              const largeTotalKwh = large_commertial?.kwh_allocation || 1;
              const smallTotalKwh = small_commertial?.kwh_allocation || 1;

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
                          {residential?.[row?.field]
                            ? usd(5).format(
                                getComputedValue(
                                  residential?.[row.field],
                                  residentialTotalKwh
                                )
                              )
                            : "-"}
                        </p>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <p className="font-medium text-black text-sm">
                          {small_commertial?.[row?.field]
                            ? usd(5).format(
                                getComputedValue(
                                  small_commertial?.[row?.field],
                                  smallTotalKwh
                                )
                              )
                            : "-"}
                        </p>
                      </div>
                      <div className="w-full flex justify-center items-center ">
                        <p className="font-medium text-black text-sm">
                          {large_commertial?.[row?.field]
                            ? usd(5).format(
                                getComputedValue(
                                  large_commertial?.[row?.field],
                                  largeTotalKwh
                                )
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
                          -
                          {/* {row?.blendedRate
                            ? usd(5).format(row?.blendedRate)
                            : "-"} */}
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
              data={lineChartData as []}
              dataKeys={["pv"]}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
