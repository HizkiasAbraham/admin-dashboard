import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { usd } from "@/src/utils/format-numbers";
import { DashboardItemProps } from "../types";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { useUpdateDashboardItem } from "@/src/hooks/useUpdateDashboardItem";

export function Revenue(props: DashboardItemProps) {
  const { kpiData, loading, setQueryPeriod } = useUpdateDashboardItem(
    props.data,
    props.dashboardType
  );

  return (
    <Card>
      {loading && <IndeterminateProgress />}
      <CardHeading title="Revenue">
        <DatePicker width="w-40 md:w-64" onDatePicked={setQueryPeriod} />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">
            {usd().format(kpiData?.revenue || 0)}
          </p>
        </div>
        {!!kpiData?.revenueDiff?.diff && (
          <div className="mt-4 flex items-center gap-2">
            {kpiData?.revenueDiff?.diff > 0 ? (
              <Icon.ArrowUpRight />
            ) : (
              <Icon.ArrowDownLeft />
            )}
            <p className="font-bold text-sm text-black">
              {usd(2).format(kpiData?.revenueDiff?.diff ?? 0)}(
              {(
                (kpiData?.revenueDiff?.diff /
                  (kpiData?.revenueDiff?.current || 1)) *
                100
              )?.toFixed(2)}
              %)
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
