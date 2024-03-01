"use client";
import { Icon } from "@/components/shared/icon";
import Drawer from "@/components/subscriber/drawer";
import { SideBar } from "@/components/subscriber/side-bar";
import Image from "next/image";
import { useState } from "react";

export default function SubscriberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
