import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from 'store/store';
import PayItem from './PayItem';
import { PayListWrap } from './PayList.style';

const PayList = () => {
  //해당 월 영수증내역
  const { receipts } = useAppSelector(state => state.accountBook);

  return (
    <PayListWrap>
      {receipts.map((receipt, i) => (
        <PayItem
          key={receipt.id}
          receipts={receipt}
        />
      ))}
    </PayListWrap>
  );
};

export default PayList;
