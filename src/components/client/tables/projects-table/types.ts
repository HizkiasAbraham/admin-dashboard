import { Project } from "../../types";

export type ProjectsTableInput = {
  data?: Project[];
  projectFilters?: any;
  dashboardType?: "home" | "portfolio";
  portfolioId?: string;
};

export type TableRowInput = {
  row: Project;
  navigate: Function;
};
