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
  (
    { type, value, accept, onChange }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    //예외 처리
    // value 값으로 NaN이 들어올경우 text로 타입변환
    if (!value) {
      value = value + ' ';
    }

    return (
      <InputField
        ref={ref}
        type={type}
        value={value}
        accept={accept}
        placeholder={'0'}
        onChange={onChange}
      ></InputField>
    );
  },
);

export default Input;
