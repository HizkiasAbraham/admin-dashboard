"use client";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { PieChart } from "@/src/components/shared/charts/pie-chart";
import { SubscriberCategorizationProps } from "../../project-detail/subscriber-categorization/types";
import { useEffect, useState } from "react";
import { groupBy, orderBy } from "lodash";
import { SubscriberCategory } from "../../types";
import { useCalculatedDetails } from "@/src/hooks/useCalculatedDetails";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";

// TODO: Should refactor and reuse with project details subscriber categorization component
export function SubscriberCategorization(props: SubscriberCategorizationProps) {
  const { loading, data, setBillingPeriod } = useCalculatedDetails<
    SubscriberCategory[]
  >(
    props.data,
    props.itemId,
    "subscribers",
    "subscriberCategorization",
    props.dashboardType || "portfolio"
  );

  const [piechartData, setPiechartData] = useState<any[]>([]);
  const [totalSubscribers, setTotalSubscribers] = useState(0);

  const processGrouping = () => {
    const grouped = groupBy(data, "category");
    const piechartD: any[] = [];
    let allSum = 0;

    Object.keys(grouped).forEach((key) => {
      if (!["n/a", "Lights"].includes(key)) {
        const items = grouped[key];
        let total = 0;
        items.forEach((item: any) => {
          total += item.total;
        });
        piechartD.push({ group: key, value: total });
      }
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
        <DatePicker width="w-48" onDatePicked={setBillingPeriod} />
      </CardHeading>
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
