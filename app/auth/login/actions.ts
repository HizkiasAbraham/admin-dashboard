"use server";

import { signIn } from "@/controllers/auth/signin";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(_currentState: any, formData: FormData) {
  const username = formData.get("username") || "";
  const password = formData.get("password") || "";
  if (!username && !password) return "Please provide username and password";
  let authToken = "";
  try {
    const result = await signIn(username as string, password as string);
    if (result.status === 401) return "Invalid username or password";
    authToken = result.data.token;
  } catch (error) {
    return "Something went wrong...";
  }

  const expires = new Date();
  expires.setMonth(expires.getMonth() + 1);
  cookies().set("authToken", authToken, {
    secure: process.env.NODE_ENV === "production",
    expires,
  });

  redirect("/");
}
