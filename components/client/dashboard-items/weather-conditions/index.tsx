import { Card, CardHeading } from '@/components/shared/card';

export function WeatherCondition() {
  return (
    <Card>
      <div className="mt-4">
        <CardHeading title="Weather conditions" />
      </div>
    </Card>
  );
}
