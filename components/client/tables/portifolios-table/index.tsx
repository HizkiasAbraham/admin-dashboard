import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { DatePicker } from '@/components/shared/inputs/date-picker';

export function PortifoliosTable() {
  return (
    <Card>
      <CardHeading title="Protifolios">
        <DatePicker width="w-40" />
      </CardHeading>
      <CardContent></CardContent>
    </Card>
  );
}
