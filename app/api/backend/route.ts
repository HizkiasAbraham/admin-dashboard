import { cookies } from "next/headers";

export async function POST(req: Request): Promise<Response> {
  try {
    const authToken = cookies().get("authToken");

    const body = await req.json();
    const { method, path, data } = body;

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/${path}`,
      {
        method,
        headers: {
          authorization: authToken?.value as string,
          "Content-Type": "application/json",
        },
        cache: "no-store",
        ...(method !== "GET" && { body: JSON.stringify(data) }),
      }
    );

    const json = await result.json();

    return Response.json({ data: json });
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
