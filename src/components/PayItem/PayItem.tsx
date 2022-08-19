import { ListPrice, ListTit } from './PayItem.style';
import './PayItem.style.ts';

interface PayItemProps {
  title?: string;
  amount?: number;
  transactionBranch?: string;
}

const PayItem = ({ title, amount, transactionBranch }: PayItemProps) => {
  return (
    <>
      <ListTit>
        <p>{title}</p>
        <span>{amount?.toLocaleString('ko-KR')}원</span>
      </ListTit>
      <ListPrice>{transactionBranch}</ListPrice>
    </>
  );
};

export default PayItem;
