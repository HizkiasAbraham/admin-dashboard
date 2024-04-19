"use client";

import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { LineChart } from "@/src/components/shared/charts/line-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { useState } from "react";
import { TabContentInput } from "./types";
import { lineChartData } from "@/src/mockups/chart";

const tabItemsUnitPercent = [
  { id: "unit", label: "Unit" },
  { id: "percent", label: "Percent" },
];

const tabItemsForChart = [
  { id: "revenue", label: "Revenue" },
  { id: "production", label: "Production" },
  { id: "allocation", label: "Allocation" },
  { id: "subscription", label: "Subscription" },
  { id: "hostBank", label: "Host Bank" },
  { id: "customerBank", label: "Customer Bank" },
  { id: "customerChurn", label: "Customer Churn #" },
  { id: "churnKw", label: "Churn kW" },
];

export function VarianceAnalysis() {
  const [selectedUnitTab, setSelectedUnitTab] = useState(
    tabItemsUnitPercent[0].id
  );

  const [selectedItemForchartTab, setSelectedItemForChartTab] = useState(
    tabItemsForChart[0].id
  );

  return (
    <div className="w-max md:w-full">
      <Card>
        <CardHeading title="Variance Analysis">
          <DatePicker />
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
          <TabContent
            tabId={selectedItemForchartTab}
            parentTabId={selectedItemForchartTab}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function TabContent(props: TabContentInput) {
  const { tabId, parentTabId } = props;
  return (
    <div className="mt-2 mb-2">
      <LineChart data={lineChartData as []} dataKeys={["pv"]} />
    </div>
  );
}
