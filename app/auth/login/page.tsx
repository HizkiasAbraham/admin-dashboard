"use client";
import { FullFlatButton } from "@/components/shared/buttons/full-solid-button";
import { Icon } from "@/components/shared/icon";
import { CheckBox } from "@/components/shared/inputs/check-box";
import { TextInput } from "@/components/shared/inputs/text-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "./actions";
import {
  // @ts-ignore
  experimental_useFormState as useFormState,
  // @ts-ignore
  experimental_useFormStatus as useFormStatus,
} from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <FullFlatButton type={"submit"} disabled={pending}>
      {!pending ? <span>Sign In</span> : <span>Signing in...</span>}
    </FullFlatButton>
  );
};

export default function Login() {
  const [error, dispatch] = useFormState(login, undefined);
  const router = useRouter();

  return (
    <form action={dispatch}>
      <p className="text-2xl font-bold text-black w-64">
        Welcome back to Meadow
      </p>
      <p className="mt-6 text-sm text-medium text-grey">
        Sign into your account to continue
      </p>
      <div className="mt-6">
        <TextInput
          name="username"
          type="text"
          placeholder="Username"
          required
        />
      </div>
      <div className="mt-4">
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          required
          endingIcon={<Icon.VisibilityHidden className="h-5 w-5" />}
        />
      </div>
      <div className="mt-4 flex flex-col md:flex-row gap-5">
        <div className="flex-1 flex justify-start">
          <CheckBox placeholder="Remember Me" />
        </div>
        <div className="md:hidden">
          <FullFlatButton>Sign In</FullFlatButton>
        </div>
        <div className="flex-1 flex justify-center md:justify-end text-blue">
          <Link href="/auth/reset-password">Forgot password?</Link>
        </div>
      </div>
      {error && <p className="text-red mt-1">{error}</p>}
      <div className="invisible md:visible mt-8">
        <SubmitButton />
      </div>
    </form>
  );
}
