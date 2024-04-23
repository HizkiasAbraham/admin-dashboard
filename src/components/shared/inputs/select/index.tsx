import { SelectInput } from "./types";

export function Select(props: SelectInput) {
  const { placeHolder, value, width, options, onChange } = props;

  return (
    <select
      value={value}
      className={`border border-inactive rounded-xl ${width || ""}`}
      onChange={(e) => onChange(e.target.value)}
    >
      {placeHolder && (
        <option disabled value="" className="text-grey">
          {placeHolder}
        </option>
      )}
      {options.map((opt, index) =>
        typeof opt === "object" ? (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ) : (
          <option key={index} value={opt}>
            {opt}
          </option>
        )
      )}
    </select>
  );
}
