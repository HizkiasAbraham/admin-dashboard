"use client";
import { FullFlatButton } from "@/src/components/shared/buttons/full-solid-button";
import { Icon } from "@/src/components/shared/icon";
import { useRouter } from "next/navigation";

export default function PasswordChanged() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center flex-col ">
        <div className="w-full flex md:justify-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-light-green">
            <Icon.CheckCircle className="h-10 w-10 text-green" />
          </div>
        </div>
        <div className="flex md:justify-center mt-6">
          <p className="md:text-center text-2xl font-bold text-black w-64">
            Password Changed!
          </p>
        </div>
        <div className="flex md:justify-center mt-6">
          <p className="md:text-center text-base font-medium text-grey">
            Your password has been changed successfully.
          </p>
        </div>
        <div className="mt-6">
          <FullFlatButton onClick={() => router.push("/auth/login")}>
            Sign In
          </FullFlatButton>
        </div>
      </div>
    </div>
  );
}
