"use client";
import Header from "@/src/components/client/header";
import { BreadCrumb } from "@/src/components/shared/breadcrumb";
import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { Icon } from "@/src/components/shared/icon";
import { Loading } from "@/src/components/shared/loading";
import { getUserInfo } from "@/src/utils/http-requests/auth";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<any>();
  const router = useRouter();
  const pathname = usePathname();

  const initialize = async () => {
    try {
      setLoading(true);
      const result = await getUserInfo();
      if (result.status !== 200) return router.push("/");
      const userData = await result.json();
      const { role, profile } = userData.data;
      setUserData(userData.data);
      if (role !== "client") return router.push("/");
      localStorage.setItem("userInfo", JSON.stringify({ profile, role }));
      setLoading(false);
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!!userData && !pathname.startsWith("/client")) router.push("/");
  }, [pathname, userData]);

  useEffect(() => {
    initialize();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <div className="m-5">
        <div className="flex pb-2">
          <div className="flex-auto flex justify-start">
            <BreadCrumb paths={["Portifolio 1"]} />
          </div>
          <div className="flex-auto flex justify-end aligin-center gap-4">
            <OutlinedButton color="inactive">
              <Icon.Search className="text-grey h-5 w-5" />
            </OutlinedButton>
            <OutlinedButton color="inactive">
              <Icon.Upload className="text-grey h-5 w-5" />
            </OutlinedButton>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
