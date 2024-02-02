import { Card, CardContent, CardHeading } from '@/components/shared/card/card';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { Icon } from '@/components/shared/icon';
import { Select } from '@/components/shared/inputs/select';

export default function Client() {
  return (
    <div>
      <Card>
        <CardHeading title="Projects">
          <Select
            width="w-48"
            placeHolder="Select Your batch"
            options={[
              { label: 'One', value: 1 },
              { label: 'Two', value: 2 },
            ]}
          />
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
