import { logOut } from "./auth";

export const fetchClient = (path: string, method = "GET", data: {} = {}) => {
  return fetch("/api/backend", {
    method: "POST",
    body: JSON.stringify({
      path,
      method,
      data,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  }).then(async (res) => {
    if (res.status === 401) {
      await logOut();
      window.location.href = "/auth/login";
    }
    const data = await res.json();
    return { ...data, status: res.status };
  });
};
