import React, { ChangeEvent, useState } from 'react';

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return [value, onChangeInput] as [string, onChangeType];
};
