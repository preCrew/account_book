import { useAppSelector } from 'store/store';
import Avatar from './Avatar';
import { AiOutlinePlus } from 'react-icons/ai';
import { ProfileWrap, ProfileInfo, AddListButton } from './Profile.style';
import AddReceiptModal from '../Common/Modal/ModalComponents/AddReceiptModal';
import useModal from 'hooks/useModal';
import { TReceipt } from 'store/reducers/accoutBook-Slice';

const Profile = () => {
  const { userInfo } = useAppSelector(state => state.user);
  const { receipts } = useAppSelector(state => state.accountBook);
  const { Modal, showModal, closeModal } = useModal({ modalName: 'profile' });
  const MonthSpending = receipts
    .map(receipt => receipt.spending)
    .reduce((acc, current) => acc! + current!);

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
            <dd>{MonthSpending}</dd>
          </dl>
        </ProfileInfo>
        <AddListButton onClick={showModal}>
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
