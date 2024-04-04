import { logOut } from "./auth";

export const fetchClient = (url: string, opts: {}) => {
  return fetch(url, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    if (res.status === 401) {
      await logOut();
      window.location.href = "/auth/login";
    }
    return await res.json();
  });
};
