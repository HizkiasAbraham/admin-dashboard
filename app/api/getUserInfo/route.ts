import { getUserInfo } from "@/controllers/auth/getUserInfo";
import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
  try {
    const authToken = cookies().get("authToken");
    if (!authToken?.value)
      return Response.json({ message: "unautorized" }, { status: 401 });
    const data = await getUserInfo(authToken.value);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
