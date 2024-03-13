import { CheckBoxProps } from "./types";

export function CheckBox(props: CheckBoxProps) {
  const { placeholder } = props;
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        className="h-5 w-5 rounded bg-white-opaque border-inactive"
      />
      <p className="text-sm text-black font-medium">{placeholder}</p>
    </div>
  );
}
