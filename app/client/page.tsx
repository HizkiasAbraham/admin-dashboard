import { Card, CardContent, CardHeading } from '@/components/shared/card/card';
import { DatePicker } from '@/components/shared/date-picker';
import { Icon } from '@/components/shared/icon';

export default function Client() {
  return (
    <div>
      <Card>
        <CardHeading title="Projects">
          <DatePicker width="w-48" />
        </CardHeading>
        <CardContent>
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              magni cupiditate provident dicta mollitia cum saepe eius, ratione
              accusantium quam labore sed! Laborum porro neque similique ratione
              accusantium eveniet saepe!
            </p>
          </>
          <div>
            <DatePicker />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
