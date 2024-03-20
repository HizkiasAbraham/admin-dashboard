import { cookies } from "next/headers";
import { getRequest } from "../../config";

export async function GET(): Promise<Response> {
  try {
    const authToken = cookies().get("authToken");

    const result = await getRequest("client/dashboard", authToken?.value as string);
    const data = await result.json();
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
