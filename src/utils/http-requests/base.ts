import { logOut } from "./auth";

export const fetchClient = (url: string, opts: {}) => {
  return fetch(url, opts).then(async (res) => {
    if (res.status === 401) {
      await logOut();
      window.location.href = "/auth/login";
    }
    return res;
  });
};
