import { FullFlatButton } from "@/components/shared/buttons/full-solid-button";
import { Icon } from "@/components/shared/icon";
import { CheckBox } from "@/components/shared/inputs/check-box";
import { TextInput } from "@/components/shared/inputs/text-input";

export default function Login() {
  return (
    <form>
      <p className="text-2xl font-bold text-black w-64">
        Welcome back to Meadow
      </p>
      <p className="mt-6 text-sm text-medium text-grey">
        Sign into your account to continue
      </p>
      <div className="mt-6">
        <TextInput type="text" placeholder="Username" />
      </div>
      <div className="mt-4">
        <TextInput
          type="password"
          placeholder="Password"
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
          <a href="/auth/reset-password">Forgot password?</a>
        </div>
      </div>
      <div className="invisible md:visible mt-8">
        <FullFlatButton>Sign In</FullFlatButton>
      </div>
    </form>
  );
}
