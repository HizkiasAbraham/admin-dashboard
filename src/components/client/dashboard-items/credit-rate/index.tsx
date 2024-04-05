import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { DashboardItemProps } from "../types";

export function CreditRate(props: DashboardItemProps) {
  const { project, onChange } = props;
  return (
    <Card>
      <CardHeading title="Credit rate">
        <DatePicker
          width="w-48"
          onDatePicked={(date: string) => onChange(date)}
        />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">
            {project?.kpiData?.creditRate.toFixed(4)} $/Kwh
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
