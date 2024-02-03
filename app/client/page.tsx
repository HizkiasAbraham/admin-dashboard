import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { Icon } from '@/components/shared/icon';
import { Select } from '@/components/shared/inputs/select';
import { SearchInput } from '@/components/shared/inputs/searchInput';
import { ProjectsTable } from '@/components/client/tables/projects-table';
import { projects } from '@/mockups/projects';

export default function Client() {
  return (
    <div>
      <ProjectsTable data={projects as []} />

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
          <div className="flex">
            <div className="flex-auto flex justify-start">
              <SearchInput placeHolder="Search..." />
            </div>
            <div className="flex-auto flex justify-end">hello</div>
          </div>
          <div className="mt-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              magni cupiditate provident dicta mollitia cum saepe eius, ratione
              accusantium quam labore sed! Laborum porro neque similique ratione
              accusantium eveniet saepe!
            </p>
          </div>
          <Icon.ArrowDownLeft />
          <Icon.ArrowUpRight />
        </CardContent>
      </Card>
    </div>
  );
}
