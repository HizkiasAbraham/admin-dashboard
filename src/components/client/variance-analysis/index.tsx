"use client";

import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { LineChart } from "@/src/components/shared/charts/line-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { useEffect, useState } from "react";
import { TabContentInput, VarianceTabProps } from "./types";
import { useCalculatedDetails } from "@/src/hooks/useCalculatedDetails";
import { IndeterminateProgress } from "../../shared/indeterminate-progress";
import moment from "moment";
import { usd } from "@/src/utils/format-numbers";

const tabItemsUnitPercent = [
  { id: "unit", label: "Unit" },
  { id: "percent", label: "Percent" },
];

const tabItemsForChart = [
  {
    id: "revenue",
    label: "Revenue",
    dataKeys: ["Revenue"],
    yAxisFormatter: (value: number) => usd().format(value / 1000) + "k",
    dataItemFormatter: (value: number | bigint) => usd().format(value),
  },

  {
    id: "production",
    label: "Production",
    dataKeys: ["Production"],
    yAxisFormatter: (value: number) =>
      (value / 1000000).toLocaleString("en-US") + "M kWh",
    dataItemFormatter: (value: number | bigint) =>
      value.toLocaleString("en-US") + "kWh",
  },
  {
    id: "allocation",
    label: "Allocation",
    dataKeys: ["Allocation"],
    yAxisFormatter: (value: number) => value + "%",
    dataItemFormatter: (value: number) => value.toFixed(1) + "%",
  },
  {
    id: "subscription",
    label: "Subscription",
    dataKeys: ["Subscription"],
    yAxisFormatter: (value: number) => value + "%",
    dataItemFormatter: (value: number) => value.toFixed(2) + "%",
  },
  {
    id: "hostBank",
    label: "Host Bank",
    dataKeys: ["Host Bank"],
    yAxisFormatter: (value: number) => usd().format(value / 1000) + "k",
    dataItemFormatter: (value: number | bigint) => usd().format(value),
  },
  {
    id: "customerBank",
    label: "Customer Bank",
    dataKeys: ["Customer Bank"],
    yAxisFormatter: (value: number) => usd().format(value / 1000) + "k",
    dataItemFormatter: (value: number | bigint) => usd().format(value),
  },
  {
    id: "churnCustomerNumber",
    label: "Customer Churn #",
    dataKeys: ["Customers Churned"],
  },
  {
    id: "churnKwh",
    label: "Churn kW",
    dataKeys: ["Kwh Churned"],
    yAxisFormatter: (value: number) => value + "kW",
    dataItemFormatter: (value: number) => value.toFixed(2),
  },
];

export function VarianceAnalysis(props: VarianceTabProps) {
  const { itemId, data: varianceData, dashboardType } = props;

  const { data, loading, setBillingPeriod } = useCalculatedDetails(
    varianceData,
    itemId || "",
    "variance-analysis",
    "varianceData",
    dashboardType || "project"
  );

  const [selectedUnitTab, setSelectedUnitTab] = useState(
    tabItemsUnitPercent[0].id
  );

  const [selectedItemForchartTab, setSelectedItemForChartTab] = useState(
    tabItemsForChart[0].id
  );

  return (
    <div className="w-max md:w-full">
      <Card>
        {loading && <IndeterminateProgress />}
        <CardHeading title="Variance Analysis">
          <DatePicker
            width="w-48"
            optsMode="months"
            onDatePicked={setBillingPeriod}
          />
          <div className="w-64">
            <TabSelector
              items={tabItemsUnitPercent}
              selectedItem={selectedUnitTab}
              onTabItemChanged={setSelectedUnitTab}
            />
          </div>
        </CardHeading>
        <CardContent>
          <div className="mt-4">
            <TabSelector
              items={tabItemsForChart}
              selectedItem={selectedItemForchartTab}
              onTabItemChanged={setSelectedItemForChartTab}
            />
          </div>
          {tabItemsForChart.map((tabItem) => (
            <div key={tabItem.id}>
              {tabItem.id === selectedItemForchartTab && (
                <TabContent
                  tabId={selectedItemForchartTab}
                  parentTabId={selectedItemForchartTab}
                  tabMetaData={tabItem}
                  tabDataItem={data?.[selectedItemForchartTab]}
                  hasModelData={data?.hasModelData}
                />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function TabContent(props: TabContentInput) {
  const { tabId, parentTabId, hasModelData, tabMetaData, tabDataItem } = props;
  const [lineChartData, setLineChartData] = useState<any>([]);

  const { dataKeys, yAxisFormatter, dataItemFormatter } = tabMetaData;

  const processGraphData = () => {
    const graphD = [];
    for (const gd of tabDataItem || []) {
      const monthD: any = {};
      monthD["name"] = moment(gd.billing_month).format("MMM'YY");
      (hasModelData ? [...dataKeys, "Model Data"] : dataKeys).forEach(
        (dk: any) => {
          monthD[dk] = gd[dk];
        }
      );
      graphD.push(monthD);
    }

    setLineChartData(graphD);
  };

  useEffect(() => {
    processGraphData();
  }, [tabDataItem]);

  return (
    <div className="mt-2 mb-2">
      <LineChart
        data={lineChartData as []}
        dataKeys={[...dataKeys, "Model Data"]}
        yAxisFormatter={yAxisFormatter}
        dataItemFormatter={dataItemFormatter}
      />
    </div>
  );
}
