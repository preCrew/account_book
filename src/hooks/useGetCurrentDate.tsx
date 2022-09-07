import React, { useEffect, useState } from 'react';
import useAccountBook from 'store/hooks/useAccountBook';
import { useAppSelector } from 'store/store';

interface TgetDate {
  year: number;
  month: number;
}
const useGetCurrentDate = ({ year, month }: TgetDate) => {
  const { changeSelectDate, readReceipts } = useAccountBook();
  const { uid } = useAppSelector(state => state.user);

  // const nowDate = new Date();
  // const year = nowDate.getFullYear();
  // const month = nowDate.getMonth() + 1;

  useEffect(() => {
    changeSelectDate({ year, month });
    readReceipts({ year, month });
  }, [uid]);
};

export default useGetCurrentDate;
