"use server";

import { signIn } from "@/controllers/auth/signin";
import { redirect } from "next/navigation";

export async function login(_currentState: any, formData: FormData) {
  const username = formData.get("username") || "";
  const password = formData.get("password") || "";
  if (!username && !password) return "Please provide username and password";
  let userRole = "";
  try {
    const result = await signIn(username as string, password as string);
    if (result.status === 401) return "Invalid username or password";
    userRole = result.data.userRole;
  } catch (error) {
    return "Something went wrong...";
  }
  if (userRole === "subscriber") return redirect("/subscriber/dashboard");
  if (userRole === "customer") return redirect("/client/dashboard")
  redirect("/")
}
