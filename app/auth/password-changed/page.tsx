import { FullFlatButton } from "@/components/shared/buttons/full-solid-button";
import { Icon } from "@/components/shared/icon";

export default function PasswordChanged() {
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
          <FullFlatButton>Sign In</FullFlatButton>
        </div>
      </div>
    </div>
  );
}
