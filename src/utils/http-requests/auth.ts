import { fetchClient } from "./base";

export const getUserInfo = () =>
  fetchClient("/api/getUserInfo", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

export const logOut = () => fetch("/api/logout", { method: "Post" });
