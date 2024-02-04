import { OutlinedButton } from '@/components/shared/buttons/outlined-button';
import { Card, CardContent } from '@/components/shared/card';
import { SearchInput } from '@/components/shared/inputs/searchInput';
import { Paginator } from '@/components/shared/paginator';
import { usd } from '@/utils/format-numbers';
import { CustomersInput, CustomersRow } from './types';

export function CustomersTable(props: CustomersInput) {
  const { data } = props;

  return (
    <Card>
      <CardContent>
        <div className="flex mb-1">
          <div className="flex items-center gap-4">
            <p className="uppercase font-medium text-sm text-grey">Customers</p>
            <SearchInput placeHolder="Search..." width="w-64" />
          </div>
          <div className="flex w-full justify-end">
            <OutlinedButton color="green">Export .csv</OutlinedButton>
          </div>
        </div>
        <div className="mt-4">
          <TableHeading />
          {[...data, ...data].map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
          <div className="mt-4">
            <Paginator alignment="end" />
          </div>{' '}
        </div>
      </CardContent>
    </Card>
  );
}

function TableHeading() {
  return (
    <div className="flex w-full gap-1">
      <div className="w-full flex justify-start p-2 pl-4 pb-0">
        <p className="text-xs text-grey">Account Number </p>
      </div>
      <div className="w-full flex justify-start p-2 pb-0">
        <p className="text-xs text-grey pl-4"> Customer Type</p>
      </div>
      <div className="w-full flex justify-end p-2 pr-4 pb-0">
        <p className="text-xs text-grey">Service Class</p>
      </div>
      <div className="w-full flex justify-end p-2 pr-4 pb-0">
        <p className="text-xs text-grey">Discount %</p>
      </div>
      <div className="w-full flex justify-end p-2 pr-4 pb-0">
        <p className="text-xs text-grey">Customer Bank</p>
      </div>
      <div className="w-full flex justify-end p-2 pr-4 pb-0">
        <p className="text-xs text-grey">Historical 12 Month kWh</p>
      </div>
      <div className="w-full flex justify-end p-2 pr-4 pb-0">
        <p className="text-xs text-grey">Allocation % of Project</p>
      </div>
    </div>
  );
}

function TableRow(props: CustomersRow) {
  const { row } = props;
  return (
    <div className="rounded-xl bg-white-smoke flex mt-2 mb-3 gap-2 cursor-pointer">
      <div className="w-full flex p-4 pl-4">
        <div className="w-full flex justify-start items-center border-r-2 border-inactive">
          <p className="font-bold text-black text-sm">{row.accountNumber}</p>
        </div>
        <div className="w-full flex justify-start items-center border-r-2 border-inactive">
          <p className="font-bold text-black text-sm pl-4">
            {row.customerType}
          </p>
        </div>
        <div className="w-full flex justify-end items-center border-r-2 border-inactive">
          <p className="font-medium text-black text-sm pr-4">
            {row.serviceClass}
          </p>
        </div>
        <div className="w-full flex justify-end items-center border-r-2 border-inactive">
          <p className="font-medium text-black text-sm pr-4">{row.discount}%</p>
        </div>
        <div className="w-full flex justify-end items-center border-r-2 border-inactive">
          <p className="font-medium text-black text-sm pr-4">
            {usd(2).format(row.customerBank)}
          </p>
        </div>
        <div className="w-full flex justify-end items-center border-r-2 border-inactive">
          <p className="font-medium text-black text-sm pr-4">
            {row.historic12MonthKwh.toLocaleString('en-US')}
          </p>
        </div>
        <div className="w-full flex justify-end items-center pr-2">
          <p className="font-bold text-black text-sm">
            {row.allocationOfProject}
          </p>
        </div>
      </div>
    </div>
  );
}
