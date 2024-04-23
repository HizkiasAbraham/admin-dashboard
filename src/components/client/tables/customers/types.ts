import { ColumnDef } from "@tanstack/react-table";
import { Customer } from "../../types";

export type CustomersInput = {
  data?: Customer[];
};

export type TableProps = {
  columns: ColumnDef<Customer>[];
  data: Customer[];
};

export type CustomerRow = {
  row?: Customer;
};
