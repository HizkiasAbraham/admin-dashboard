import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { usd } from "@/src/utils/format-numbers";
import { DashboardItemProps } from "../types";

export function Revenue(props: DashboardItemProps) {
  const { project } = props;

  return (
    <Card>
      <CardHeading title="Revenue">
        <DatePicker width="w-40 md:w-64" />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">
            {usd().format(project?.kpis?.[0].revenue)}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Icon.ArrowUpRight />
          <p className="font-bold text-sm text-black">
            {usd(2).format(50450)}(5.45%)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
