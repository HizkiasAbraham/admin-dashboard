"use client";
import { FullOutlinedButton } from "@/components/shared/buttons/full-outlined-button";
import { FullFlatButton } from "@/components/shared/buttons/full-solid-button";
import { Icon } from "@/components/shared/icon";
import { TextInput } from "@/components/shared/inputs/text-input";
import { useRouter } from "next/navigation";

export default function NewPassword() {
  const router = useRouter();
  return (
    <form>
      <div
        className="flex gap-2 items-center cursor-pointer invisible md:visible"
        onClick={() => router.back()}
      >
        <p className="text-sm text-medium text-grey">
          <Icon.ArrowLeft className="h-4 w-4 text-green" />
        </p>
        <p className="text-sm text-medium text-grey">Back</p>
      </div>

      <p className="text-2xl font-bold text-black mt-6 w-48 md:w-full">
        New password
      </p>
      <p className="mt-6 text-sm text-medium text-grey">
        The password should be at least 8 characters long. Use upper and lower
        case letters, numbers and symbols.
      </p>
      <div className="mt-10">
        <TextInput
          type="password"
          placeholder="New password"
          endingIcon={<Icon.VisibilityHidden className="h-5 w-5" />}
        />
      </div>
      <div className="mt-10">
        <FullFlatButton>Reset Password</FullFlatButton>
      </div>
      <div className="mt-4 md:hidden">
        <FullOutlinedButton>
          <Icon.ArrowLeft className="h-4 w-5" />
          Go Back
        </FullOutlinedButton>
      </div>
    </form>
  );
}
