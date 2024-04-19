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
import { useProjectDetail } from "@/src/hooks/useProjectDetail";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";

const tabItems = [
  { label: "QTY", id: "qty" },
  { label: "kWdc", id: "kWdc" },
];

export function SubscriberCategorization(props: SubscriberCategorizationProps) {
  const { loading, data, setBillingPeriod } = useProjectDetail<
    SubscriberCategory[]
  >(props.data, props.projectId, "subscribers", "subscriberCategorization");

  const [currentSelectedTab, setCurrentSelectedTab] = useState(tabItems[0].id);
  const [piechartData, setPiechartData] = useState<any[]>([]);
  const [totalSubscribers, setTotalSubscribers] = useState(0);

  const processGrouping = () => {
    const grouped = groupBy(data, "category");
    const piechartD: any[] = [];
    let allSum = 0;

    Object.keys(grouped).forEach((key) => {
      const items = grouped[key];
      let total = 0;
      items.forEach((item: any) => {
        total += item.total;
      });
      piechartD.push({ group: key, value: total });
    });
    for (const pi of piechartD) {
      allSum += pi.value;
    }
    setPiechartData(
      orderBy(
        piechartD.filter((p) => !["n/a", "Lights"].includes(p.group)),
        ["value"],
        ["desc"]
      )
    );
    setTotalSubscribers(allSum);
  };

  useEffect(() => {
    processGrouping();
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
            <PieChart data={piechartData as []} />
          </div>
          <div className="flex-1">
            <StackedBarChart
              data={lineChartData as []}
              dataKeys={["uv", "pv", "amt"]}
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
