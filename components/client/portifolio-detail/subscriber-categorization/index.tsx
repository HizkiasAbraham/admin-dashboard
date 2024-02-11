import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { PieChart } from '@/components/shared/charts/pie-chart';
import { piechartData } from '@/mockups/chart';

export function SubscriberCategorization() {
  return (
    <Card>
      <div className="mt-4">
        <CardHeading title="Subscriber Categorization" />
      </div>
      <CardContent>
        <div className="flex items-center">
          <PieChart data={piechartData as []} />
        </div>
      </CardContent>
    </Card>
  );
}
