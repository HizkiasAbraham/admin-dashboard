import { SelectInput } from './types';

export function Select(props: SelectInput) {
  const { placeHolder, width, options } = props;

  return (
    <select className={`border border-inactive rounded-xl ${width || ''}`}>
      <option disabled value="" selected>
        <p className="text-grey">{placeHolder}</p>
      </option>
      {options.map((opt) => (
        <option value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
