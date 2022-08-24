import PayItem from 'components/PayItem';
import { useAppSelector } from 'store/store';
import { PayListWrap, ListTit, ListPrice } from './PayList.style';

const PayList = () => {
  const { receipts } = useAppSelector(state => state.accountBook);
  return (
    <PayListWrap>
      {receipts.map(receipt => (
        <PayItem
          key={receipt.id}
          amount={receipt.spending}
          title={receipt.transactionBranch}
        />
      ))}
    </PayListWrap>
  );
};

export default PayList;
