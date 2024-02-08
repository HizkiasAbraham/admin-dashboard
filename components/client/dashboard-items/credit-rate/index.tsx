import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { Icon } from '@/components/shared/icon';
import { DatePicker } from '@/components/shared/inputs/date-picker';

export function CreditRate() {
  return (
    <Card>
      <CardHeading title="Credit rate">
        <DatePicker width="w-48" />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">0.0877 $/Kwh</p>
        </div>
        <div className="mt-6 mb-4 flex items-center gap-2">
          <Icon.ArrowUpRight />
          <p className="font-bold text-sm text-black">0.0451 %/kWh</p>
        </div>
      </CardContent>
    </Card>
  );
}
