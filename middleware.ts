import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken");
  if (request.nextUrl.pathname.startsWith("/api") && !authToken?.value) {
    return Response.json({ message: "unautorized" }, { status: 401 });
  }
}
