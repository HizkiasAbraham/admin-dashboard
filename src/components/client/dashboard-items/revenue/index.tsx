import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { usd } from "@/src/utils/format-numbers";
import { DashboardItemProps } from "../types";

export function Revenue(props: DashboardItemProps) {
  const { project, onChange } = props;
  const { kpiData } = project;

  return (
    <Card>
      <CardHeading title="Revenue">
        <DatePicker
          width="w-40 md:w-64"
          onDatePicked={(data: string) => onChange(data)}
        />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">{usd().format(kpiData?.revenue)}</p>
        </div>
        {!!kpiData.revenueDiff?.change && (
          <div className="mt-4 flex items-center gap-2">
            {kpiData?.revenueDiff?.change > 0 ? (
              <Icon.ArrowUpRight />
            ) : (
              <Icon.ArrowDownLeft />
            )}
            <p className="font-bold text-sm text-black">
              {usd(2).format(kpiData?.revenueDiff?.change)}(
              {kpiData?.revenueDiff?.diff?.toFixed(2)}%)
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
