export type TextInputProps = {
  type: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: any;
  placeholder?: string;
  disabled?: boolean;
  endingIcon?: React.ReactNode;
};
