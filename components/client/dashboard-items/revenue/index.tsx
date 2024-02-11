import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { Icon } from '@/components/shared/icon';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { usd } from '@/utils/format-numbers';

export function Revenue() {
  return (
    <Card>
      <CardHeading title="Revenue">
        <DatePicker width="w-40 md:w-64" />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">{usd().format(1230500)}</p>
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
