import { Portfolio } from "../../types";

export type PortfoliosTableInput = {
  data?: Portfolio[];
};

export type TableRowInput = {
  row?: Portfolio;
  navigate: Function;
};
