import { SelectInput } from './types';

export function Select(props: SelectInput) {
  const { placeHolder, width, options } = props;

  return (
    <select className={`border border-inactive rounded-xl ${width || ''}`}>
      <option disabled value="" className="text-grey">
        {placeHolder}
      </option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
