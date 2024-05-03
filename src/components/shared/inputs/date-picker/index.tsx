import { Icon } from "../../icon";
import { DatePickerInput } from "./types";

const opts = {
  default: [
    { value: "last_30_days", label: "Last 30 days" },
    { value: "last_60_days", label: "Last 60 days" },
    { value: "last_90_days", label: "Last 90 days" },
    { value: "last_6_months", label: "Last 6 months" },
    { value: "last_12_months", label: "Last 12 months" },
  ],
  months: [
    { value: "last_90_days", label: "Last 3 months" },
    { value: "last_6_months", label: "Last 6 months" },
    { value: "last_12_months", label: "Last 12 months" },
  ],
};

export function DatePicker(props: DatePickerInput) {
  const { width, onDatePicked, optsMode } = props;

  return (
    <div className={`relative ${width || ""}`}>
      <select
        onChange={(e) => (!!onDatePicked ? onDatePicked(e.target.value) : "")}
        className="bg-none display-none background-none border border-inactive rounded-xl px-4 py-2 pl-4 pr-4 w-full cursor-pointer"
      >
        {opts?.[optsMode || "default"].map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="z-10 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer">
        <Icon.Calendar className="h-5 w-5 text-grey" />
      </div>
    </div>
  );
}
