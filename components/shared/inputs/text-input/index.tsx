import { TextInputProps } from "./types";

export function TextInput(props: TextInputProps) {
  const { type, value, onChange, placeholder, disabled, endingIcon } = props;
  return (
    <div className="w-full">
      <div className="relative w-full h-14 rounded-full ">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`peer w-full h-full border-inactive ${
            disabled ? "bg-light-grey" : ""
          } rounded-xl pb-0 mb-0 bg-transparent text-black outline outline-0 focus:outline-0 transition-all`}
          placeholder=" "
          disabled={disabled}
        />
        <label
          className="
            flex w-full h-full
            top-1
            text-grey
            text-medium
            select-none pointer-events-none absolute left-0
            !overflow-visible truncate leading-tight peer-focus:leading-tight transition-all
            peer-placeholder-shown:text-sm text-sm
            peer-focus:text-sm before:content[' ']
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
        <div className="absolute inset-y-0 right-0 flex text-grey items-center pr-3 pointer-events-none cursor-pointer">
          {endingIcon}
        </div>
      </div>
    </div>
  );
}
