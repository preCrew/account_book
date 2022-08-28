import PayItem from 'components/PayItem';
import useModal from 'hooks/useModal';
import { useCallback, useMemo } from 'react';
import useAccountBook from 'store/hooks/useAccountBook';
import { TReceipt } from 'store/reducers/accoutBook-Slice';
import { useAppSelector } from 'store/store';
import { Down100, Up100 } from 'styles/animations';
import AddReceiptModal from '../AddReceiptModal';
import { ModalS } from '../Modal_Inner.style';
import {
  DayReceiptModalBody,
  DayReceiptsModalHeader,
} from './DayReceiptsModal.style';

const DayReceiptsModal = () => {
  const { Container, Header, Body } = ModalS;

  const { Modal, showModal, closeModal } = useModal(Up100, Down100, 300);
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

  // const handleClickAdd = () => {
  const handleClickAdd = useCallback(() => {
    showModal();
  }, [showModal]);
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

      <Modal>
        <AddReceiptModal
          onClose={closeModal}
          date={{ month, date }}
        />
      </Modal>
    </Container>
  );
};

export default DayReceiptsModal;
