import { fetchClient } from "./base";

export const getDashboardData = () =>
  fetchClient("/api/client/dashboard", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

export const getProjectById = (id: string) =>
  fetch(`/api/client/projects/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
