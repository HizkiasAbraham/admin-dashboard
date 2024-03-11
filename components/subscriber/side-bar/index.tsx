"use client";
import { Icon } from "@/components/shared/icon";
import Image from "next/image";
import { SidebarProps } from "./types";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { logOut } from "@/utils/http-requests/auth";

const subscriberPages = [
  { path: "dashboard", label: "Dashboard" },
  { path: "profile", label: "Profile" },
  { path: "billing", label: "Billing" },
  { path: "faqs", label: "FAQs" },
  { path: "contact-us", label: "Contact Us" },
];

export function SideBar(props: SidebarProps) {
  const [userData, setUserData] = useState<any>();
  const { setIsOpen } = props;
  const router = useRouter();
  const pathName = usePathname();

  const navigate = (path: string) => {
    router.push(`/subscriber/${path}`);
    if (setIsOpen) setIsOpen(false);
  };
  const isActive = (path: string) => pathName.includes(path);

  const doLogout = async () => {
    try {
      await logOut();
      window.location.pathname = "/";
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("userInfo");
    if (!userData) return;
    setUserData(JSON.parse(userData));
  }, []);

  return (
    <div className="h-screen bg-green w-full flex flex-col text-white">
      <div className="mt-8">
        <div className="flex justify-between items-center pl-8 pr-8 md:pl-6 md:pr-8">
          <Image
            alt=""
            width={135}
            height={20}
            src={"/images/meadow-white.png"}
          />
          <div className="md:hidden">
            <Icon.Cancel className="w-6 h-6" onClick={() => setIsOpen(false)} />
          </div>
        </div>
        <div className="bg-green-hover rounded-xl m-2 mt-8 flex gap-4 cursor-pointer">
          <div className="p-4 flex gap-2 w-full items-center justify-between">
            <div className="flex flex-col">
              <p className="font-semibold md:font-medium text-xs">Account</p>
              <p className="font-bold md:font-semibold text-sm">
                {userData?.profile?.location}
              </p>
            </div>
            <div>
              <Icon.ArrowDown className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col">
        {subscriberPages.map((page) => (
          <div
            key={page.path}
            className="flex h-10 items-center justify-between hover:bg-green-hover cursor-pointer"
            onClick={() => navigate(page.path)}
          >
            <div className="pl-6">
              <p className="font-bold text-base md:text-sm md:font-medium">
                {page.label}
              </p>
            </div>
            {isActive(page.path) && (
              <div className="h-full w-2 bg-white rounded-l-xl"></div>
            )}
          </div>
        ))}
        <div
          onClick={doLogout}
          className="flex h-10 items-center justify-between hover:bg-green-hover cursor-pointer"
        >
          <div className="pl-6">
            <p className="font-bold text-base md:text-sm md:font-medium">
              Logout
            </p>
          </div>
        </div>
      </div>
      <div className="left-8 bottom-10 md:bottom-8 absolute">
        <div className="flex gap-5 md:gap-2 items-center cursor-pointer">
          <Image
            alt=""
            width={50}
            height={34}
            src={"/images/user-account.png"}
            className="md:hidden rounded"
          />

          <Image
            alt=""
            width={40}
            height={34}
            src={"/images/user-account.png"}
            className="hidden md:block rounded"
          />
          <p className="font-bold md:font-medium">{userData?.profile?.name}</p>
        </div>
      </div>
    </div>
  );
}
