export const getDashboardData = () =>
  fetch("/api/client/dashboard", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
