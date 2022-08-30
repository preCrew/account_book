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

interface DayReceiptsModalProps {
  onClickAddButton: () => void;
  onClickPayItem: (receipt: TReceipt) => void;
}

const DayReceiptsModal = ({
  onClickAddButton,
  onClickPayItem,
}: DayReceiptsModalProps) => {
  console.log('day');
  const { Container, Header, Body } = ModalS;

  const { year, month, date } = useAppSelector(
    state => state.accountBook.selectDate,
  );
  const seleceDateReceipts = useAppSelector(state =>
    state.accountBook.receipts.filter(
      receipt => receipt.timeDate.date === date,
    ),
  );
  const { seleceDateReceiptsSum } = useAccountBook();

  const day = useMemo(() => {
    const day = new Date(year, month - 1, date).getDay();
    return ['일', '월', '화', '수', '목', '금', '토'][day];
  }, [date, month, year]);

  const receiptsSum = useMemo(() => {
    const sum = seleceDateReceiptsSum(seleceDateReceipts);
    return sum ? sum.toLocaleString('ko-KR') : '';
  }, [seleceDateReceipts, seleceDateReceiptsSum]);

  const receiptsCount = useMemo(
    () => seleceDateReceipts.length,
    [seleceDateReceipts],
  );

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
              amount={
                (receipt.income as number) ?? (receipt.spending as number)
              }
              transactionBranch={receipt.paymentMethod}
              onClick={() => onClickPayItem(receipt)}
            />
          ))}
          <PayItem
            title="추가하기"
            onClick={onClickAddButton}
          />
        </DayReceiptModalBody>
      </Body>
    </Container>
  );
};

export default DayReceiptsModal;
