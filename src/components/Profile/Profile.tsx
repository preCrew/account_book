import { useAppDispatch, useAppSelector } from 'store/store';
import Avatar from './Avatar';
import { useCallback, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { ProfileWrap, ProfileInfo, AddListButton } from './Profile.style';
import AddReceiptModal from '../Common/Modal/ModalComponents/AddReceiptModal';
import useModal from 'hooks/useModal';
import { changeModalUpdate } from 'store/reducers/modal-Slice';
// import useAccountBook from 'store/hooks/useAccountBook';

const Profile = () => {
  // const { changeSelectDate } = useAccountBook();
  const { userInfo } = useAppSelector(state => state.user);
  const { receipts } = useAppSelector(state => state.accountBook);
  const dispatch = useAppDispatch();
  const { Modal, showModal, closeModal } = useModal({
    modalName: 'receipts',
  });

  const MonthSpending =
    receipts &&
    receipts
      .map(receipt => receipt.spending)
      .reduce((acc, current) => acc! + current!, 0);

  const onClickAdd = useCallback(() => {
    showModal();
    dispatch(
      changeModalUpdate({
        state: false,
        modal: 'receipt',
      }),
    );
  }, []);

  return (
    <>
      <ProfileWrap>
        <Avatar />
        <ProfileInfo>
          <dl>
            <dt>총예산</dt>
            <dd>{userInfo.budget}</dd>
          </dl>
          <dl>
            <dt>지출</dt>
            <dd>{MonthSpending && MonthSpending}</dd>
          </dl>
        </ProfileInfo>
        <AddListButton onClick={onClickAdd}>
          <AiOutlinePlus />
        </AddListButton>
        <Modal>
          <AddReceiptModal onClose={closeModal} />
        </Modal>
      </ProfileWrap>
    </>
  );
};

export default Profile;
