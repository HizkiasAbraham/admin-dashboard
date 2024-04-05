import { Portfolio, Project } from "../types";

export type DashboardItemProps = {
  data: Portfolio | Project; // Will be updated to typed ones
  dashboardType?: "portfolio" | "project";
};
