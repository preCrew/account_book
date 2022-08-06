import { Link } from 'react-router-dom';
import { useAppSelector } from 'store/store';

import { BsPersonCircle } from 'react-icons/bs';
import { AvatarWrap } from './Avatar.style';

interface AvatarProps {}

const Avatar = ({}: AvatarProps) => {
  const { loginDone, userInfo } = useAppSelector(state => state.user);
  const { bad, good, soso } = useAppSelector(state => state.user.avatar);

  const avatarSetting = () => {
    const myBudget = userInfo.budget;
    const myTotalExpense = userInfo.totalExpense;
    if (myBudget > myTotalExpense) {
      return good;
    }
    if (myBudget < myTotalExpense) {
      return bad;
    }
    return soso;
  };

  return (
    <>
      {loginDone ? (
        <AvatarWrap styleBg={avatarSetting()}>
          <Link to="/mypage"></Link>
        </AvatarWrap>
      ) : (
        <Link to="/login">
          <BsPersonCircle
            fontSize={40}
            color="gray"
          />
        </Link>
      )}
    </>
  );
};

export default Avatar;
