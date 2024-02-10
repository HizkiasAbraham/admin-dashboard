import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { Icon } from '@/components/shared/icon';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { SearchInput } from '@/components/shared/inputs/searchInput';
import { Select } from '@/components/shared/inputs/select';
import { usd } from '@/utils/format-numbers';
import { ProjectsTableInput, TableRowInput } from './types';

export function ProjectsTable(props: ProjectsTableInput) {
  const { data } = props;
  return (
    <div className="w-max md:w-full">
      <Card>
        <CardHeading title="Projects">
          <DatePicker width="w-48" />
        </CardHeading>
        <CardContent>
          <div className="flex pt-2 pb-2">
            <div className="flex-auto flex">
              <SearchInput placeHolder="Search..." />
            </div>
            <div className="flex-auto flex justify-end gap-2">
              <Select
                options={[
                  { label: 'Portiffolio 1', value: 'er' },
                  { label: 'Portiffolio 2', value: 'er' },
                ]}
                placeHolder="Portifolio"
              />
              <Select options={[]} placeHolder="State" />
              <Select options={[]} placeHolder="Type" />
              <Select options={[]} placeHolder="Utility" />
            </div>
          </div>
          <div className="mt-2 mb-2">
            <TableHeader />
            {data.map((row, index) => (
              <TableRow key={index} row={row} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex w-full gap-1">
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Name and Address </p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Size kWdc</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">State</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Utility</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Type</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Subscription</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Allocation</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Production kWh</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Revenue</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">A/R</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Credit Rate</p>
      </div>
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey">Churn</p>
      </div>
    </div>
  );
}

function TableRow(props: TableRowInput) {
  const { row } = props;

  return (
    <div className="rounded-xl bg-white-smoke flex mt-2 mb-4 gap-2 cursor-pointer">
      <div className="w-full">
        <div className="flex flex-col gap-1 p-4">
          <p className="font-bold text-black text-sm">{row?.name}</p>
          <p className="font-medium text-grey text-xs truncate overflow-hidden w-12 xl:w-24">
            {row.address}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-start items-center">
        <p className="font-bold text-black text-sm">
          {row?.kwcSize?.toLocaleString('en-US')}
        </p>
      </div>
      <div className="w-full flex justify-start items-center">
        <p className="font-bold text-black text-sm">{row.state}</p>
      </div>
      <div className="w-full flex justify-start items-center">
        <p className="font-bold text-black text-sm">{row.utility}</p>
      </div>
      <div className="w-full flex justify-start items-center">
        <p className="font-bold text-black text-sm">{row.type}</p>
      </div>
      <div className="w-full flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {row?.subscription?.current} %
          </p>
          <div className="flex gap-1 items-center">
            {row?.subscription?.diff > 0 ? (
              <Icon.ArrowUpRight />
            ) : (
              <Icon.ArrowDownLeft />
            )}
            <p className="font-medium text-black text-xs">
              {row?.subscription?.diff}%
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {row?.allocation?.current} %
          </p>
          <div className="flex gap-1 items-center">
            {row?.allocation?.diff > 0 ? (
              <Icon.ArrowUpRight />
            ) : (
              <Icon.ArrowDownLeft />
            )}
            <p className="font-medium text-black text-xs">
              {row?.allocation?.diff}%
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-center">
        <p className="font-bold text-black text-sm">
          {row?.kwhProduction?.toLocaleString('en-US')}
        </p>
      </div>
      <div className="w-full flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {usd().format(row?.revenue?.current)}
          </p>
          <div className="flex gap-1 items-center">
            {row?.revenue?.diff > 0 ? (
              <Icon.ArrowUpRight />
            ) : (
              <Icon.ArrowDownLeft />
            )}
            <p className="font-medium text-black text-xs">
              {usd().format(row?.revenue?.diffAmount)}({row?.revenue?.diff})%
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {usd().format(row?.ar?.current)}
          </p>
          <div className="flex gap-1 items-center">
            {row?.ar?.diff > 0 ? <Icon.ArrowUpRight /> : <Icon.ArrowDownLeft />}
            <p className="font-medium text-black text-xs">
              {usd().format(row?.ar?.diffAmount)}({row?.ar?.diff})%
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-center">
        <p className="font-bold text-black text-sm">{row.creditRate}</p>
      </div>
      <div className="w-full flex justify-start items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-black text-sm">
            {row?.churn?.current} %
          </p>
          <div className="flex gap-1 items-center">
            {row?.churn?.diff > 0 ? (
              <Icon.ArrowUpRight />
            ) : (
              <Icon.ArrowDownLeft />
            )}
            <p className="font-medium text-black text-xs">
              {row?.churn?.diff}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
