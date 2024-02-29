import { FullButtonProps } from "./types";

export function FullFlatButton(props: FullButtonProps) {
  const { children } = props;
  return (
    <button className="w-full bg-green text-white h-12 rounded-xl font-bold text-xs hover:bg-green-hover">
      {children}
    </button>
  );
}
