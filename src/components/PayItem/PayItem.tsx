import React from 'react';
import { ListPrice, ListTit, PayListWrap } from './PayItem.style';
import './PayItem.style.ts';

interface PayItemProps {
  title?: string;
  amount?: number;
  transactionBranch?: string;
  onClick?: () => void;
}

const PayItem = ({
  title,
  amount,
  transactionBranch,
  onClick,
}: PayItemProps) => {
  console.log('otem');
  return (
    <PayListWrap onClick={onClick}>
      <ListTit>
        <p>{title}</p>
        <span>{amount && `${amount?.toLocaleString('ko-KR')}원`}</span>
      </ListTit>
      <ListPrice>{transactionBranch}</ListPrice>
    </PayListWrap>
  );
};

export default React.memo(PayItem);
