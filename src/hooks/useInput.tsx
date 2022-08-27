import React, { ChangeEvent, useState } from 'react';

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValue: string | number = '') => {
  const [value, setValue] = useState<string | number>(initialValue);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return [value, setValue, onChangeInput] as [
    string | number,
    typeof setValue,
    onChangeType,
  ];
};
