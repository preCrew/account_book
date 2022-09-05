import React, { useEffect } from 'react';
import useAccountBook from 'store/hooks/useAccountBook';
import { useAppSelector } from 'store/store';

const useGetCurrentDate = () => {
  const { changeSelectDate, readReceipts } = useAccountBook();
  const { uid } = useAppSelector(state => state.user);

  useEffect(() => {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;

    // 최초 렌더링시 현재 월을 변경
    changeSelectDate({ year, month });
    readReceipts({ year, month });
  }, [uid]);
};

export default useGetCurrentDate;
