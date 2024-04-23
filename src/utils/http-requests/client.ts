import { fetchClient } from "./base";

export const getDashboardData = () => fetchClient("client/dashboard");

export const getPortfolios = (billingPeriod: string) =>
  fetchClient(`client/portfolios?billingPeriod=${billingPeriod}`);

export const getPortfolioById = (id: string, billingPeriod: string) =>
  fetchClient(`client/portfolios/${id}?billingPeriod=${billingPeriod}`);

export const getProjects = (billingPeriod: string) => {
  return fetchClient(`client/projects?billingPeriod=${billingPeriod}`);
};

export const getProjectById = (id: string, billingPeriod: string) =>
  fetchClient(`client/projects/${id}?billingPeriod=${billingPeriod}`);

export const getCalculatedDetail = (
  id: string,
  dashboard: "portfolio" | "project" = "project",
  path: string,
  billingPeriod: string
) =>
  fetchClient(
    `client/${dashboard}s/${id}/${path}?billingPeriod=${billingPeriod}`
  );
