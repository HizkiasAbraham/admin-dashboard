"use client";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { PieChart } from "@/src/components/shared/charts/pie-chart";
import { SubscriberCategorizationProps } from "../../project-detail/subscriber-categorization/types";
import { useEffect, useState } from "react";
import { groupBy, orderBy } from "lodash";

// TODO: Should refactor and reuse with project details subscriber categorization component
export function SubscriberCategorization(props: SubscriberCategorizationProps) {
  const { data } = props;
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
    setPiechartData(orderBy(piechartD, ["value"], ["desc"]));
    setTotalSubscribers(allSum);
  };

  useEffect(() => {
    processGrouping();
  }, []);
  return (
    <Card>
      <div className="mt-4">
        <CardHeading title="Subscriber Categorization" />
      </div>
      <CardContent>
        <div className="flex items-center">
          <PieChart data={piechartData as []} />
        </div>
        <div>
          <p className="text-center">Total: {totalSubscribers}</p>
        </div>
      </CardContent>
    </Card>
  );
}
