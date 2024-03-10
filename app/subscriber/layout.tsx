"use client";
import { Icon } from "@/components/shared/icon";
import { Spinner } from "@/components/shared/spinner";
import Drawer from "@/components/subscriber/drawer";
import { SideBar } from "@/components/subscriber/side-bar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SubscriberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const getUserInfo = async () => {
    try {
      setLoading(true);
      const result = await fetch("/api/getUserInfo", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.status === 200) {
        const userInfo = await result.json();
        localStorage.setItem("userInfo", JSON.stringify(userInfo.data));
        setLoading(false)
      }
      if (result.status === 401) {
        localStorage.clear();
        router.push("/");
      }
    } catch (error) {
      setError("something went wrong...");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return loading ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spinner size="large" color="green" />
    </div>
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
