import { customers } from '@/mockups/customers';

const item = customers[0];

export type CustomersInput = {
  data: [];
};

export type CustomersRow = {
  row: typeof item;
};
