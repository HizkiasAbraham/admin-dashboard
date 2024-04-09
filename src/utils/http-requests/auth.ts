import { fetchClient } from "./base";

export const getUserInfo = () => fetchClient("auth/userInfo");

export const logOut = () => fetch("/api/logout", { method: "Post" });
