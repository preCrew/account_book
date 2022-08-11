import { useAppSelector } from 'store/store';
import Avatar from './Avatar';
import { ProfileWrap, ProfileInfo } from './Profile.style';

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const { loginDone, userInfo } = useAppSelector(state => state.user);

  return (
    <>
      <ProfileWrap>
        <Avatar size="50" />
        <ProfileInfo>
          <dl>
            <dt>예산</dt>
            <dd>{userInfo.budget}</dd>
          </dl>
          <dl>
            <dt>지출</dt>
            <dd>{userInfo.totalExpense}</dd>
          </dl>
        </ProfileInfo>
      </ProfileWrap>
    </>
  );
};

export default Profile;
