import { getUserInfo } from "@/controllers/auth/getUserInfo";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const processRedirecting = async () => {
  let result: any;
  
  try {
    const authToken = cookies().get("authToken");
    if (!authToken?.value) return redirect("/auth/login");
    result = await getUserInfo(authToken.value);
  } catch (error) {}
  
  const userRole = result?.role;
  if (userRole === "subscriber") return redirect("/subscriber/dashboard");
  if (userRole === "customer") return redirect("/client/dashboard");
  
  return redirect("/auth/login");
};

export default function Home() {
  return processRedirecting();
}
