import React from 'react';
import { InputField } from './Input.style';

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
  accept?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  ({ type, value, accept, onChange }: InputProps) => {
    return (
      <InputField
        type={type}
        value={value}
        accept={accept}
        onChange={onChange}
      ></InputField>
    );
  },
);

export default Input;
