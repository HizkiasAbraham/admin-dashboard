import { fetchClient } from "./base";

export const getDashboardData = () =>
  fetchClient("/api/client/dashboard", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
