"use client";
import { Icon } from "@/components/shared/icon";
import Drawer from "@/components/subscriber/drawer";
import { Loading } from "@/components/shared/loading";
import { SideBar } from "@/components/subscriber/side-bar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/utils/http-requests/auth";

export default function SubscriberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>();
  const [error, setError] = useState("");
  const router = useRouter();

  const pathname = usePathname();

  const initialize = async () => {
    setLoading(true);
    let statusCode;
    let userData;
    try {
      const result = await getUserInfo();
      statusCode = result.status;
      userData = await result.json();
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
    if (statusCode !== 200) window.location.pathname = "/";
    const { role, profile } = userData.data;
    if (role !== "subscriber") return (window.location.pathname = "/");
    localStorage.setItem("userInfo", JSON.stringify({ profile, role }));
    setUserData({ profile, role });
    setLoading(false);
  };

  useEffect(() => {
    if (!!userData && !pathname.startsWith("/subscriber")) router.push("/");
  }, [pathname]);

  useEffect(() => {
    initialize();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Drawer isOpen={isOpen}>
        <SideBar setIsOpen={setIsOpen} />
      </Drawer>
      <div className="md:hidden flex p-4">
        <div className="flex-1 flex items-center">
          <Image alt="" width={135} height={10} src={"/images/logo.png"} />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <Icon.DrawerToggler
            onClick={() => setIsOpen(true)}
            className="h-10 w-10 text-grey cursor-pointer"
          />
        </div>
      </div>
      <div className="flex">
        <div className="hidden md:block w-72 grow-0">
          <SideBar />
        </div>
        <div className="w-full h-screen grow overflow-auto">
          <div className="w-full p-6 pt-0 md:pt-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
