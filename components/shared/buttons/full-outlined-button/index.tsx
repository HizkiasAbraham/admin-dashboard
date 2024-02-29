import { FullButtonProps } from "./types";

export function FullOutlinedButton(props: FullButtonProps) {
  const { children } = props;
  return (
    <button className="w-full bg-white text-green h-12 border-2 border-green rounded-xl font-bold text-xs hover:bg-white-smoke">
      <div className="flex gap-2 items-center justify-center">{children}</div>
    </button>
  );
}
