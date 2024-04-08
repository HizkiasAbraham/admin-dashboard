import { cookies } from "next/headers";
import { getRequest } from "../../config";

export async function GET(req: Request): Promise<Response> {
  const search = new URL(req.url).searchParams;
  const authToken = cookies().get("authToken");

  const result = await getRequest(
    `client/projects?${search.toString()}`,
    authToken?.value as string
  );

  const data = await result.json();

  return Response.json({ data});
}
