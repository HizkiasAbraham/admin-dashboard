import { fetchClient } from "./base";

export const getDashboardData = () =>
  fetchClient("/api/client/dashboard", {
    cache: "no-store",
  });

export const getProjects = (billingPeriod: string) => {
  return fetchClient(`/api/client/projects?billingPeriod=${billingPeriod}`);
};

export const getProjectById = (id: string, billingPeriod: string) =>
  fetchClient(`/api/client/projects/${id}?billingPeriod=${billingPeriod}`);
