import { useAppSelector } from 'store/store';
import Avatar from './Avatar';
import { AiOutlinePlus } from 'react-icons/ai';
import { ProfileWrap, ProfileInfo, AddListButton } from './Profile.style';
import AddReceiptModal from '../Common/Modal/ModalComponents/AddReceiptModal';
import useModal from 'hooks/useModal';

const Profile = () => {
  const { userInfo } = useAppSelector(state => state.user);
  // const totalExpense = 0;
  const { Modal, showModal, closeModal } = useModal({ modalName: 'profile' });
  // const [] = useState();

  return (
    <>
      <ProfileWrap>
        <Avatar />
        <ProfileInfo>
          <dl>
            <dt>예산</dt>
            <dd>{userInfo.budget}</dd>
          </dl>
          <dl>
            <dt>지출</dt>
            <dd>{0}</dd>
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
