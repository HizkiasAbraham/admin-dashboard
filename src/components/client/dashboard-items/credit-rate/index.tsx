import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { DashboardItemProps } from "../types";
import { useUpdateDashboardItem } from "@/src/hooks/useUpdateDashboardItem";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";

export function CreditRate(props: DashboardItemProps) {
  const { kpiData, loading, setQueryPeriod } = useUpdateDashboardItem(
    props.data,
    props.dashboardType
  );
  return (
    <Card>
      {loading && <IndeterminateProgress />}
      <CardHeading title="Credit rate">
        <DatePicker width="w-48" onDatePicked={setQueryPeriod} />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">
            {kpiData?.creditRate?.toFixed(4)} $/Kwh
          </p>
        </div>
        <div className="mt-6 mb-4 flex items-center gap-2">
          <Icon.ArrowUpRight />
          <p className="font-bold text-sm text-black">0.0451 %/kWh</p>
        </div>
      </CardContent>
    </Card>
  );
}
