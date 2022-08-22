import PayItem from 'components/PayItem';
import React, { useCallback, useMemo } from 'react';
import useAccountBook from 'store/hooks/useAccountBook';
import asyncCreateReceipt from 'store/reducers/accountBookThunk/asyncCreateReceiptk';
import { TReceipt } from 'store/reducers/accoutBook-Slice';
import { useAppDispatch, useAppSelector } from 'store/store';
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
  const seleceDateReceipts = useAppSelector(state =>
    state.accountBook.receipts.filter(
      receipt => receipt.timeDate.date === date,
    ),
  );
  const { seleceDateReceiptsSum, addReceipt } = useAccountBook();

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

  // const handleClickAdd = () => {
  const handleClickAdd = useCallback(() => {
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
    // TODO: 위의 내용들음 임시임
    // 추가버튼 클릭시 새로운 입력을 위해 새로운 모달창을 띄워준다.
  }, []);
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