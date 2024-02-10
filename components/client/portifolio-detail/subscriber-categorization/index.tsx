import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { PieChart } from '@/components/shared/charts/pie-chart';
import { piechartData } from '@/mockups/chart';

export function SubscriberCategorization() {
  return (
    <Card>
      <CardHeading title="Subscriber Categorization" />
      <CardContent>
        <PieChart data={piechartData as []} />
      </CardContent>
    </Card>
  );
}
