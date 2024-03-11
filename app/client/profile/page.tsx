"use client";
import { SolidButton } from "@/components/shared/buttons/solid-button";
import { logOut } from "@/utils/http-requests/auth";
import { useRouter } from "next/navigation";

export default function Project() {
  const router = useRouter();

  const doLogout = async () => {
    try {
      await logOut();
      localStorage.clear();
      window.location.pathname = "/";
    } catch (error) {}
  };
  return (
    <div>
      Here goes the Profile page{" "}
      <SolidButton bg="red" onClick={doLogout}>
        <p className="text-white">Logout</p>
      </SolidButton>
    </div>
  );
}
