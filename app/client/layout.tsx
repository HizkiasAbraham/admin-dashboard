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
      const { role, profile } = result.data;
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
      <div className="fixed w-full bg-white-opaque z-20 top-0">
        <Header />
      </div>
      <div className="m-5 top-16 pb-2 relative">{children}</div>
    </>
  );
}
