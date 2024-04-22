import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { Card, CardContent } from "@/src/components/shared/card";
import { SearchInput } from "@/src/components/shared/inputs/searchInput";
import { Paginator } from "@/src/components/shared/paginator";
import { usd } from "@/src/utils/format-numbers";
import { CustomerRow, CustomersInput } from "./types";
import { useState } from "react";

export function CustomersTable(props: CustomersInput) {
  const { data: initialData } = props;
  const [data, setData] = useState(initialData);

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
          {data?.map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
          <div className="mt-4">
            <Paginator alignment="end" />
          </div>{" "}
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

function TableRow(props: CustomerRow) {
  const { row } = props;
  return (
    <div className="rounded-xl bg-white-smoke flex mt-2 mb-3 gap-2 cursor-pointer">
      <div className="w-full flex p-4 pl-4">
        <div className="w-full flex justify-start items-center border-r-2 border-inactive">
          <p className="font-bold text-black text-sm">#{row?.accountNumber}</p>
        </div>
        <div className="w-full flex justify-start items-center border-r-2 border-inactive">
          <p className="font-bold text-black text-sm pl-4">
            {row?.customerType}
          </p>
        </div>
        <div className="w-full flex justify-end items-center border-r-2 border-inactive">
          <p className="font-medium text-black text-sm pr-4">
            {row?.serviceClass}
          </p>
        </div>
        <div className="w-full flex justify-end items-center border-r-2 border-inactive">
          <p className="font-medium text-black text-sm pr-4">
            {row?.discount}%
          </p>
        </div>
        <div className="w-full flex justify-end items-center border-r-2 border-inactive">
          <p className="font-medium text-black text-sm pr-4">
            {usd(2).format(row?.customerBank || 0)}
          </p>
        </div>
        <div className="w-full flex justify-end items-center border-r-2 border-inactive">
          <p className="font-medium text-black text-sm pr-4">
            {row?.historical12MonthkWh?.toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-full flex justify-end items-center pr-2">
          <p className="font-bold text-black text-sm">
            {row?.allocationOfProject?.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
}
