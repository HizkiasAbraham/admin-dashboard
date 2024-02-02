import { Icon } from '../icon';
import { DatePickerInput } from './types';

export function DatePicker(props: DatePickerInput) {
  const { width } = props;

  return (
    <div className={`relative ${width || ''}`}>
      <input
        className="border border-inactive rounded-xl px-4 py-2 pl-4 pr-4 w-full cursor-pointer"
        placeholder="Last 30 days"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer">
        <Icon.Calendar className="h-5 w-5 text-grey" />
      </div>
    </div>
  );
}
