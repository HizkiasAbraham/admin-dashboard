import { SpinnerInput } from "./types";
const sizeClasses = {
  small: {
    svg: "h-6 w-6",
    font: "text-lg",
  },
  medium: {
    svg: "h-8 w-8",
    font: "text-xl ",
  },
  large: {
    svg: "h-10 w-10",
    font: "text-2xl",
  },
};
export function Spinner(props: SpinnerInput) {
  const { size, message, color } = props;

  return (
    <div className="flex gap-4 items-center">
      <svg
        className={`animate-spin bg-${color || "green"} ${
          sizeClasses[size || "small"].svg
        }`}
      ></svg>
      <p
        className={`font-bold text-${color || "green"} ${
          sizeClasses[size || "small"].font
        }`}
      >
        {message || "Loading..."}
      </p>
    </div>
  );
}
