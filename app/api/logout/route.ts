import { cookies } from "next/headers";

export async function POST(): Promise<Response> {
  cookies().delete("authToken");
  return Response.json({ message: "logged out" }, { status: 201 });
}
