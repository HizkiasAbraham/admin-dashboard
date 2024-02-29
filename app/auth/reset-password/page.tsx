"use client";
import { FullOutlinedButton } from "@/components/shared/buttons/full-outlined-button";
import { FullFlatButton } from "@/components/shared/buttons/full-solid-button";
import { Icon } from "@/components/shared/icon";
import { TextInput } from "@/components/shared/inputs/text-input";
import { useRouter } from "next/navigation";
export default function ResetPassword() {
  const router = useRouter();
  return (
    <form>
      <div
        className="invisible md:visible flex gap-2 items-center cursor-pointer"
        onClick={() => router.back()}
      >
        <p className="text-sm text-medium text-grey">
          <Icon.ArrowLeft className="h-4 w-4 text-green" />
        </p>
        <p className="text-sm text-medium text-grey">Back</p>
      </div>

      <p className="text-2xl font-bold text-black mt-6 w-48 md:w-full">
        Reset your password
      </p>
      <p className="mt-6 text-sm text-medium text-grey">
        Enter your email and we’ll send you instructions on how to reset your
        password.
      </p>
      <div className="mt-10">
        <TextInput type="email" placeholder="Email address" />
      </div>
      <div className="mt-10">
        <FullFlatButton>Send instructions</FullFlatButton>
      </div>
      <div className="mt-4 md:hidden">
        <FullOutlinedButton>
          <Icon.ArrowLeft className="h-4 w-5" /> Go back
        </FullOutlinedButton>
      </div>
    </form>
  );
}
