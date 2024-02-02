import { Card } from '@/components/shared/card/card';
import { DatePicker } from '@/components/shared/date-picker';
import { Icon } from '@/components/shared/icons';

export default function Client() {
  return (
    <div>
      <Card title="Projects">
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
      </Card>
    </div>
  );
}
