"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(_currentState: any, formData: FormData) {
  const username = formData.get("username") || "";
  const password = formData.get("password") || "";
  if (!username && !password) return "Please provide username and password";
  let authToken = "";
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify({ username, password }),
      }
    );
    if (result.status === 401) return "Invalid username or password";
    const data = await result.json();
    authToken = data.token;
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
