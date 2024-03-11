import { Spinner } from "@/components/shared/spinner";

export function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spinner size="large" color="green" />
    </div>
  );
}
