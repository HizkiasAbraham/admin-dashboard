import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const processRedirecting = async () => {
  let result: any;

  try {
    const authToken = cookies().get("authToken");
    if (!authToken?.value) return redirect("/auth/login");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/userInfo`,
      {
        method: "GET",
        headers: {
          authorization: authToken.value,
          "Content-Type": "application/json",
        },
      }
    );
    result = await response.json();
  } catch (error) {}
  revalidatePath("/");
  const userRole = result?.role;
  if (userRole) return redirect(`/${userRole}/dashboard`);

  return redirect("/auth/login");
};

export default function Home() {
  return processRedirecting();
}
