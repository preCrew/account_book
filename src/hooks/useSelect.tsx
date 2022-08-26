import { useState } from 'react';

type onChageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => void;
// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValue = '') => {
  const [selected, setSelected] = useState(initialValue);
  const onChageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  return [selected, setSelected, onChageSelect] as [
    string,
    typeof setSelected,
    onChageSelect,
  ];
};
