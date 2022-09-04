import React, { useCallback, useState } from 'react';
import PayItem from 'components/PayItem';
import { TReceipt } from 'store/reducers/accoutBook-Slice';
import useModal from 'hooks/useModal';
import useAccountBook from 'store/hooks/useAccountBook';
import AddReceiptModal from '../Common/Modal/ModalComponents/AddReceiptModal';
import { PayListWrap } from './PayList.style';

interface PayListInterface {
  receiptData: TReceipt[];
  date?: {
    month: number;
    date: number;
  };
}

const PayList = ({ receiptData, date }: PayListInterface) => {
  const [isUpdateReceipt, setIsUpdateReceipt] = useState(false);
  const { changeSelectId } = useAccountBook();
  const { Modal, showModal, closeModal } = useModal({
    modalName: 'receipt',
    onClose: () => {
      setIsUpdateReceipt(false);
    },
  });
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
      <PayListWrap>
        {receiptData.map(receipt => (
          <PayItem
            key={receipt.id}
            title={receipt.transactionBranch}
            amount={(receipt.income as number) ?? (receipt.spending as number)}
            transactionBranch={receipt.paymentMethod}
            onClick={() => handleClickPayItem(receipt.id as number)}
          />
        ))}
      </PayListWrap>
      {/* 내역 추가 및 수정 모달 */}
      <Modal>
        <AddReceiptModal
          onClose={closeModal}
          update={isUpdateReceipt}
          date={date}
        />
      </Modal>
    </>
  );
};

export default PayList;
