import PayItem from 'components/PayItem';
import { useMemo } from 'react';
import useAccountBook from 'store/hooks/useAccountBook';
import { TReceipt } from 'store/reducers/accoutBook-Slice';
import { useAppSelector } from 'store/store';
import { ModalS } from '../Modal_Inner.style';
import {
  DayReceiptModalBody,
  DayReceiptsModalHeader,
} from './DayReceiptsModal.style';

interface DayReceiptsModalProps {}

const DayReceiptsModal = ({}: DayReceiptsModalProps) => {
  const { Container, Header, Body } = ModalS;
  const { year, month, date } = useAppSelector(
    state => state.accountBook.selectDate,
  );
  const { seleceDateReceipts, seleceDateReceiptsSum, addReceipt } =
    useAccountBook();

  const day = useMemo(() => {
    const day = new Date(year, month - 1, date).getDay();
    return ['일', '월', '화', '수', '목', '금', '토'][day];
  }, [date, month, year]);

  const receiptsSum = useMemo(() => {
    const sum = seleceDateReceiptsSum();
    return sum ? sum.toLocaleString('ko-KR') : '';
  }, [seleceDateReceiptsSum]);

  const receiptsCount = useMemo(
    () => seleceDateReceipts.length,
    [seleceDateReceipts],
  );

  // const handleClickAdd = () => {
  const handleClickAdd = () => {
    const receipt: TReceipt = {
      category: '놀았어',
      transactionBranch: '피시방',
      spending: -1000,
      // income: 1000,
      memo: 'test Memo',
      timeDate: {
        year: 2022,
        month: 8,
        date: 14,
        hours: 12,
        minutes: 25,
      },
      paymentMethod: '카드!',
    };
    addReceipt(receipt);
  };
  // };
  return (
    <Container height="auto">
      <Header flexDirection="column">
        <DayReceiptsModalHeader.Wrap>
          <DayReceiptsModalHeader.Main>
            {date}일 {day}요일
          </DayReceiptsModalHeader.Main>
          <DayReceiptsModalHeader.Sub>
            <div className="totCases">총 {receiptsCount} 건</div>
            <div className="totAmountDay">
              {receiptsSum && `${receiptsSum}원`}
            </div>
          </DayReceiptsModalHeader.Sub>
        </DayReceiptsModalHeader.Wrap>
      </Header>
      <Body>
        <DayReceiptModalBody>
          {seleceDateReceipts.map(receipt => (
            <PayItem
              key={receipt.id}
              title={receipt.transactionBranch}
              amount={receipt.income ?? receipt.spending}
              transactionBranch={receipt.paymentMethod}
            />
          ))}
          <PayItem
            title="추가하기"
            onClick={handleClickAdd}
          />
        </DayReceiptModalBody>
      </Body>
    </Container>
  );
};

export default DayReceiptsModal;
