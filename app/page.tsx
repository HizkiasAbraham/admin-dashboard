import { getUserInfo } from "@/controllers/auth/getUserInfo";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const processRedirecting = async () => {
  let result: any;
  
  try {
    const authToken = cookies().get("authToken");
    if (!authToken?.value) return redirect("/auth/login");
    result = await getUserInfo(authToken.value);
  } catch (error) {}
  
  revalidatePath('/')
  const userRole = result?.role;
  if (userRole) return redirect(`/${userRole}/dashboard`);

  return redirect("/auth/login");
};

export default function Home() {
  return processRedirecting();
}
