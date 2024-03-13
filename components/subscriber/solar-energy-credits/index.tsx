"use client";
import { Card, CardContent, CardHeading } from "@/components/shared/card";
import { BarChart } from "@/components/shared/charts/bar-chart";
import { lineChartData } from "@/src/mockups/chart";

export function SolarEnergyCredits() {
  return (
    <Card>
      <CardHeading title="Solar Energy Credits" />
      <CardContent>
        <p className="text-xs font-medium">
          You last reveived 150 kWh of credits on 12/31/2023
        </p>
        <div className="mt-2">
          <BarChart data={lineChartData as []} dataKeys={["pv"]} />
        </div>
      </CardContent>
    </Card>
  );
}
