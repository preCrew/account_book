import PayItem from 'components/PayItem';
import { useMemo } from 'react';
import { useAppSelector } from 'store/store';
import { SelectModalS } from '../Modal_Inner.style';

interface DayReceiptsModalProps {}

const DayReceiptsModal = ({}: DayReceiptsModalProps) => {
  const { year, month, date } = useAppSelector(
    state => state.accountBook.selectDate,
  );
  const { Container, Header, Body } = SelectModalS;
  const receipts = useAppSelector(state =>
    state.accountBook.receipts.filter(
      receipt => receipt.timeDate.date === date,
    ),
  );

  const day = useMemo(() => {
    const day = new Date(year, month - 1, date).getDay();
    return ['일', '월', '화', '수', '목', '금', '토'][day];
  }, [date, month, year]);

  return (
    <Container>
      <Header>
        {date}일 {day}요일
      </Header>
      <Body>
        {receipts.map(receipt => (
          <PayItem
            key={receipt.id}
            title={receipt.transactionBranch}
            amount={receipt.income ?? receipt.spending}
            transactionBranch={receipt.paymentMethod}
          />
        ))}
      </Body>
    </Container>
  );
};

export default DayReceiptsModal;
