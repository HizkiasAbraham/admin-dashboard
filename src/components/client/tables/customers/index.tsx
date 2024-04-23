import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { Card, CardContent } from "@/src/components/shared/card";
import { SearchInput } from "@/src/components/shared/inputs/searchInput";
import { Paginator } from "@/src/components/shared/paginator";
import { usd } from "@/src/utils/format-numbers";
import { CustomersInput, TableProps } from "./types";
import { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Customer } from "../../types";

export function CustomersTable(props: CustomersInput) {
  const { data: initialData } = props;
  const [data, _setData] = useState(initialData);

  const columns = useMemo<ColumnDef<Customer>[]>(
    () => [
      {
        accessorKey: "accountNumber",
        header: () => "Account Number",
        cell: (info) => `#${info.getValue()}`,
      },
      {
        accessorKey: "customerType",
        header: () => "Customer Type",
      },
      {
        accessorKey: "serviceClass",
        header: () => "Service Class",
      },
      {
        accessorKey: "discount",
        header: () => "Discount %",
        cell: (info) => `${info.getValue()}%`,
      },
      {
        accessorKey: "customerBank",
        header: () => "Customer Bank",
        cell: (info) => `${usd(2).format((info.getValue() as number) || 0)}`,
      },
      {
        accessorKey: "historical12MonthkWh",
        header: () => "Historical 12 Month kWh",
        cell: (info) =>
          `${(info.getValue() as number).toLocaleString("en-US")}`,
      },
      {
        accessorKey: "allocationOfProject",
        header: () => "Allocation % of Project",
        cell: (info) => `${(info.getValue() as number).toFixed(2)}%`,
      },
    ],
    []
  );

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
        <Table columns={columns} data={data || []} />
      </CardContent>
    </Card>
  );
}

function Table({ data, columns }: TableProps) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <>
      <div className="mt-4">
        {table.getHeaderGroups().map((headerGroup) => (
          <div key={headerGroup.id} className="flex w-full gap-1">
            {headerGroup.headers.map((header, i) => (
              <div
                key={header.id}
                className={`w-full flex justify-start ${!i ? "pl-4" : ""}`}
              >
                <p className="text-xs text-grey">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4">
        {table.getRowModel().rows.map((row) => {
          return (
            <div
              key={row.id}
              className="rounded-xl bg-white-smoke flex mt-2 mb-3 gap-2 cursor-pointer"
            >
              {row.getVisibleCells().map((cell, i) => {
                return (
                  <div key={cell.id} className="w-full flex p-4 pl-4">
                    <div
                      className={`w-full flex justify-start items-center ${
                        i !== row.getAllCells().length - 1 ? "border-r-2" : ""
                      } border-inactive`}
                    >
                      <p className="font-bold text-black text-sm">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <Paginator alignment="end" table={table} />
      </div>
    </>
  );
}
