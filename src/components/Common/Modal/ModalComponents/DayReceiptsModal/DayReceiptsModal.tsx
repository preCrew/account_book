import PayItem from 'components/PayItem';
import useModal from 'hooks/useModal';
import { useCallback, useMemo, useState } from 'react';
import useAccountBook from 'store/hooks/useAccountBook';
import { changeSelectIdAction } from 'store/reducers/accoutBook-Slice';
import { useAppDispatch, useAppSelector } from 'store/store';
import AddReceiptModal from '../AddReceiptModal';
import { ModalS } from '../Modal_Inner.style';
import {
  DayReceiptModalBody,
  DayReceiptsModalHeader,
} from './DayReceiptsModal.style';

const DayReceiptsModal = () => {
  const dispatch = useAppDispatch();
  const { Container, Header, Body } = ModalS;
  const [isUpdateReceipt, setIsUpdateReceipt] = useState(false);
  const { Modal, showModal, closeModal } = useModal({
    modalName: 'receipt',
    onClose: () => {
      setIsUpdateReceipt(false);
    },
  });
  const { seleceDateReceiptsSum, changeSelectId } = useAccountBook();

  const { year, month, date } = useAppSelector(
    state => state.accountBook.selectDate,
  );
  const seleceDateReceipts = useAppSelector(state =>
    state.accountBook.receipts.filter(
      receipt => receipt.timeDate.date === date,
    ),
  );

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

  const handleClickAddButton = useCallback(() => {
    showModal();
  }, [showModal]);

  const handleClickPayItem = useCallback(
    (id: number) => {
      showModal();
      changeSelectId(id);
      setIsUpdateReceipt(true);
    },
    [changeSelectId, showModal],
  );

  return (
    <>
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
                onClick={() => handleClickPayItem(receipt.id as number)}
              />
            ))}
            <PayItem
              title="추가하기"
              onClick={handleClickAddButton}
            />
          </DayReceiptModalBody>
        </Body>
      </Container>

      <Modal>
        <AddReceiptModal
          onClose={closeModal}
          update={isUpdateReceipt}
          date={{ month, date }}
        />
      </Modal>
    </>
  );
};

export default DayReceiptsModal;
