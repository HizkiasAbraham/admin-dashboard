import { Icon } from "../../icon";
import { DatePickerInput } from "./types";

export function DatePicker(props: DatePickerInput) {
  const { width, onDatePicked } = props;

  return (
    <div className={`relative ${width || ""}`}>
      <select
        onChange={(e) => (!!onDatePicked ? onDatePicked(e.target.value) : "")}
        className="bg-none display-none background-none border border-inactive rounded-xl px-4 py-2 pl-4 pr-4 w-full cursor-pointer"
      >
        <option value="last_30_days">Last 30 days</option>
        <option value="last_60_days">Last 60 days</option>
        <option value="last_90_days">Last 90 days</option>
        <option value="last_6_months">Last 6 months</option>
        <option value="last_12_months">Last 12 months</option>
      </select>
      <div className="z-10 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer">
        <Icon.Calendar className="h-5 w-5 text-grey" />
      </div>
    </div>
  );
}
