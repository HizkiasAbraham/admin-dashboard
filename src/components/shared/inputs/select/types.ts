type Option = {
  label: string;
  value: string | number;
};

export type SelectInput = {
  width?: string;
  value?: any;
  placeHolder?: string;
  options: Option[] | number[];
  onChange?: any;
};
