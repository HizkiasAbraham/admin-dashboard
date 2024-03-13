"use client";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { LineChart } from "@/src/components/shared/charts/line-chart";
import { lineChartData } from "@/src/mockups/chart";

export function TotalSavings() {
  return (
    <Card>
      <CardHeading title="Solar Energy Credits" />
      <CardContent>
        <p className="text-xs font-medium">
          Your solar energy credits have saved you $76
        </p>
        <div className="mt-2">
          <LineChart data={lineChartData as []} dataKeys={["pv", "uv"]} />
        </div>
      </CardContent>
    </Card>
  );
}
