import { fetchClient } from "./base";

export const getDashboardData = () => fetchClient("client/dashboard");

export const getProjects = (billingPeriod: string) => {
  return fetchClient(`client/projects?billingPeriod=${billingPeriod}`);
};

export const getProjectById = (id: string, billingPeriod: string) =>
  fetchClient(`client/projects/${id}?billingPeriod=${billingPeriod}`);

export const getProjectDetail = (
  id: string,
  path: string,
  billingPeriod: string
) =>
  fetchClient(`client/projects/${id}/${path}?billingPeriod=${billingPeriod}`);
