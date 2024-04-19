"use client";
import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { BarChart } from "@/src/components/shared/charts/bar-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { useState } from "react";
import { ChurnChartProps, TabContentInput } from "./types";
import { barChartData } from "@/src/mockups/chart";

const churnGraphTabItems = [
  { id: "customerNumberKWC", label: "Customer # and kWdc" },
  { id: "projectsComparision", label: "Projects Comparision" },
  { id: "churnReasons", label: "Churn Reasons" },
];

const TabItemComponents = {};

export function ChurnWithChartsCard(props: ChurnChartProps) {
  const { dashboardType } = props;
  const [selectedItem, setSelectedItem] = useState(churnGraphTabItems[0].id);

  return (
    <Card>
      <CardHeading title="Churn">
        <DatePicker width="w-40 md:w-48" />
        <OutlinedButton color="green">Export .csv</OutlinedButton>
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4 flex items-center">
          <p className="text-2xl font-bold">
            {(3250).toLocaleString("en-US")} kW <span>.</span>153 <span>.</span>
            2%
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
            <TabContent tabId={selectedItem} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TabContent(props: TabContentInput) {
  const { tabId } = props;
  return (
    <div>
      <div className="mt-2">
        <BarChart
          data={barChartData as []}
          height="80"
          dataKeys={["pv", "uv"]}
        />
      </div>
    </div>
  );
}
