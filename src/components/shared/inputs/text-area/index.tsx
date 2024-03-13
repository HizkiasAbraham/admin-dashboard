import { TextInputProps } from "./types";

export function TextArea(props: TextInputProps) {
  const { value, onChange, placeholder, disabled } = props;
  return (
    <div className="w-full">
      <div className="relative w-full h-full rounded-full ">
        <textarea
          placeholder={placeholder}
          className="rounded-xl w-full border-inactive resize-y"
          rows={5}
          value={value}
          onChange={onChange}
          disabled={disabled}
        ></textarea>
      </div>
    </div>
  );
}
