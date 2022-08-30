import PayItem from 'components/PayItem';
import { useAppSelector } from 'store/store';
import { PayListWrap, ListTit, ListPrice } from './PayList.style';

const PayList = () => {
  const { receipts } = useAppSelector(state => state.accountBook);
  console.log(receipts[11].income);
  return (
    <PayListWrap>
      {receipts.map(receipt => (
        <PayItem
          key={receipt.id}
          amount={(receipt.income as number) ?? (receipt.spending as number)}
          title={receipt.transactionBranch}
        />
      ))}
    </PayListWrap>
  );
};

export default PayList;
