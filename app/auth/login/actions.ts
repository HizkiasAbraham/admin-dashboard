"use server";

export async function login(_currentState: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "Invalid username and password";
}
