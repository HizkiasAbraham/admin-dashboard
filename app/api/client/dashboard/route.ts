import { cookies } from "next/headers";
import { getRequest } from "../../config";

export async function GET(req: Request): Promise<Response> {
  try {
    const authToken = cookies().get("authToken");
    const { searchParams } = new URL(req.url);
    const result = await getRequest(
      "client/dashboard?" + searchParams.toString(),
      authToken?.value as string
    );
    const data = await result.json();
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
