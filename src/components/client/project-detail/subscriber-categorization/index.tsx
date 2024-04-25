"use client";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { PieChart } from "@/src/components/shared/charts/pie-chart";
import { StackedBarChart } from "@/src/components/shared/charts/stacked-bar-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { lineChartData } from "@/src/mockups/chart";
import { useEffect, useState } from "react";
import { SubscriberCategorizationProps } from "./types";
import { groupBy, orderBy } from "lodash";
import { SubscriberCategory } from "../../types";
import { useCalculatedDetails } from "@/src/hooks/useCalculatedDetails";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { getPercentage } from "@/src/utils/calculate-percentage";
import moment from "moment";

const tabItems = [
  { label: "Percentage", id: "percentage" },
  { label: "Count", id: "count" },
];

const dataKeys = ["Residential", "Large Commertial", "Small Commertial"];

export function SubscriberCategorization(props: SubscriberCategorizationProps) {
  const { loading, data, setBillingPeriod } = useCalculatedDetails<
    SubscriberCategory[]
  >(props.data, props.itemId, "subscribers", "subscriberCategorization");

  const [currentSelectedTab, setCurrentSelectedTab] = useState(tabItems[0].id);
  const [piechartData, setPiechartData] = useState<any[]>([]);
  const [stackedChartData, setStackedChartData] = useState<any[]>([]);
  const [totalSubscribers, setTotalSubscribers] = useState(0);

  const processGrouping = () => {
    const grouped = groupBy(data, "category");
    const piechartD: any[] = [];
    let allSum = 0;
    let totalKwh = 0;
    Object.keys(grouped).forEach((key) => {
      if (!["n/a", "Lights"].includes(key)) {
        const items = grouped[key];
        let total = 0;
        items.forEach((item: any) => {
          total +=
            currentSelectedTab === "count"
              ? item.total
              : item.totalKwhAllocation;
        });
        if (currentSelectedTab !== "count") totalKwh += total;
        piechartD.push({ group: key, value: total });
      }
    });

    if (currentSelectedTab === "percentage") {
      for (let i = 0; i < piechartD.length; i++) {
        piechartD[i].value = (
          (piechartD[i].value / (totalKwh || 1)) *
          100
        ).toFixed(2);
        piechartD[i].value = parseFloat(piechartD[i].value);
      }
    }
    for (const pi of piechartD) {
      allSum += pi.value;
    }
    setPiechartData(orderBy(piechartD, ["value"], ["desc"]));
    setTotalSubscribers(allSum);
  };

  const processGraphData = () => {
    const subscriberGraphs = props.graphData?.map((_gd: any) => ({
      date: _gd.date,
      subscriberCategorization: _gd.subscriberCategorization || {},
    }));

    const graphD = [];
    for (const sg of subscriberGraphs) {
      const monthD: any = {};
      monthD["name"] = moment(sg.date).format("MMM");
      dataKeys.forEach((dk) => {
        monthD[dk] = sg?.subscriberCategorization?.[dk]?.total || 0;
      });
      graphD.push(monthD);
    }
    setStackedChartData(graphD);
  };

  useEffect(() => {
    processGrouping();
  }, [data, currentSelectedTab]);

  useEffect(() => {
    processGraphData();
  }, [data]);
  return (
    <Card>
      {loading && <IndeterminateProgress />}
      <CardHeading title="Subscriber Categorization">
        <div className="w-full md:w-64">
          <TabSelector
            items={tabItems}
            selectedItem={currentSelectedTab}
            onTabItemChanged={setCurrentSelectedTab}
          />
        </div>
        <DatePicker width="w-48" onDatePicked={setBillingPeriod} />
      </CardHeading>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 flex items-center">
            <PieChart
              data={piechartData as []}
              showPercentage={currentSelectedTab === "percentage"}
              dashboardType="project"
            />
          </div>
          <div className="flex-1">
            <StackedBarChart
              data={stackedChartData || []}
              dataKeys={dataKeys}
            />
          </div>
        </div>
        <div>
          <p className="text-center">Total: {totalSubscribers}</p>
        </div>
      </CardContent>
    </Card>
  );
}
