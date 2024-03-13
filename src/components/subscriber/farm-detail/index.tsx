"use client";
import { Card } from "@/src/components/shared/card";
import { LineChart } from "@/src/components/shared/charts/line-chart";
import { Carousel } from "@/src/components/shared/crousel";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { lineChartData } from "@/src/mockups/chart";
import { crouselItems } from "@/src/mockups/crousel-items";
import { useState } from "react";

const tabViewItems = [
  { id: "production", label: "Production" },
  { id: "photo", label: "Site Photos" },
  { id: "map", label: "Map View" },
];

export function FarmDetailAnalytics() {
  const [selectedItem, setSelectedItem] = useState(tabViewItems[1].id);

  return (
    <div>
      <TabSelector
        items={tabViewItems}
        selectedItem={selectedItem}
        onTabItemChanged={setSelectedItem}
      />
      <div className="mt-6">
        {selectedItem === "production" && (
          <div className="border-2 rounded-xl border-inactive">
            <div className="p-1">
              <LineChart data={lineChartData as []} dataKeys={["pv"]} />
            </div>
          </div>
        )}

        {selectedItem === "photo" && (
          <Carousel autoSlide={false} items={crouselItems} />
        )}
      </div>
    </div>
  );
}
