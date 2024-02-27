import { TextInputProps } from "./types";

export function TextInput(props: TextInputProps) {
  const {placeholder, disabled} = props
  return (
    <div className="w-full">
      <div className="relative w-full h-12 rounded-xl">
        <input
          className="peer w-full h-full rounded-xl  bg-transparent outline outline-0 focus:outline-0 transition-all"
          placeholder=" "
          disabled={disabled}
        />
        <label
          className="
            flex w-full h-full
            top-0
            peer-focus:top-1
            select-none pointer-events-none absolute left-0
            !overflow-visible truncate leading-tight peer-focus:leading-tight transition-all
            peer-placeholder-shown:text-sm text-[11px]
            peer-focus:text-xs before:content[' ']
            before:block before:box-border before:w-2.5
            before:h-1.5 before:mt-[6.5px] before:mr-1
            before:rounded-tl-md before:pointer-events-none
            before:transition-all after:content[' '] 
            after:block after:flex-grow after:box-border
            after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1
            after:rounded-tr-md after:pointer-events-none after:transition-all
            peer-placeholder-shown:leading-[3.75]"
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
}
