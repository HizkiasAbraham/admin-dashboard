import { portifiolios } from '@/mockups/protfolios';

export type PortfoliosTableInput = {
  data: [];
};

export type TableRowInput = {
  row: (typeof portifiolios)[0];
  navigate: Function;
};
