import { FullButtonProps } from "./types";

export function FullFlatButton(props: FullButtonProps) {
  const { type, children, onClick, disabled } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-green disabled:bg-inactive disabled:border-green disabled:text-grey text-white h-12 rounded-xl font-bold text-xs hover:bg-green-hover"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
