"use server";

import { signIn } from "@/controllers/auth/signin";
import { redirect } from "next/navigation";

export async function login(_currentState: any, formData: FormData) {
  const username = formData.get("username") || "";
  const password = formData.get("password") || "";
  if (!username && !password) return "Please provide username and password";

  try {
    const result = await signIn(username as string, password as string);
    if(result.status === 401) return 'Invalid username or password'
    console.log('result', result.data)
    redirect('/subscriber/dashboard')
  } catch (error) {
    console.log(error)
    return "Something went wrong..."
  }
}
