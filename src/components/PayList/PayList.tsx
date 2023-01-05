import PayItem from 'components/PayItem';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store';
import { PayListWrap } from './PayList.style';
import { changeModalUpdate } from 'store/reducers/modal-Slice';
import useModal from 'hooks/useModal';
import AddReceiptModal from 'components/Common/Modal/ModalComponents/AddReceiptModal';
import { changeSelectIdAction } from 'store/reducers/accoutBook-Slice';
import useAccountBook from 'store/hooks/useAccountBook';

const PayList = () => {
  const { receipts, selectDate } = useAppSelector(state => state.accountBook);
  const { changeSelectId } = useAccountBook();
  const dispatch = useAppDispatch();
  const { Modal, showModal, closeModal } = useModal({ modalName: 'receipt' });

  const currentReceipts = receipts.filter(
    receipt => receipt.timeDate.month === selectDate.month,
  );
  const onClickModal = useCallback(
    (id: number) => () => {
      dispatch(
        changeModalUpdate({
          state: true,
          modal: 'receipt',
        }),
      );
      changeSelectId(id);
      showModal();
      return;
    },
    [],
  );

  return (
    <>
      <PayListWrap>
        {currentReceipts.map(receipt => (
          <PayItem
            key={receipt.id}
            amount={(receipt.income as number) ?? (receipt.spending as number)}
            title={receipt.transactionBranch}
            onClick={onClickModal(receipt.id as number)}
          />
        ))}
      </PayListWrap>

      <Modal>
        <AddReceiptModal onClose={closeModal} />
      </Modal>
    </>
  );
};

export default PayList;
