type Option = {
  label: string;
  value: string | number;
};

export type SelectInput = {
  width?: string;
  placeHolder?: string;
  options: Option[];
};
