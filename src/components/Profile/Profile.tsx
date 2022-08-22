import { useAppSelector } from 'store/store';
import Avatar from './Avatar';
import { ProfileWrap, ProfileInfo } from './Profile.style';

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const { loadingState, userInfo } = useAppSelector(state => state.user);
  const totalExpense = 0;

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
      </ProfileWrap>
    </>
  );
};

export default Profile;
