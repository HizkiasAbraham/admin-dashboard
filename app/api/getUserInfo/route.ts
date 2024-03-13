import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
  try {
    const authToken = cookies().get("authToken");

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/userInfo`,
      {
        method: "GET",
        headers: {
          authorization: authToken?.value as string,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
