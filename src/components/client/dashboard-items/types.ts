import { Portfolio, Project } from "../types";

export type DashboardItemProps = {
  data?: Portfolio | Project;
  dashboardType?: "portfolio" | "project";
};
