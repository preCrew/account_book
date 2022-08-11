import { Link, Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'store/store';

import { BsPersonCircle } from 'react-icons/bs';
import { AvatarWrap } from './Avatar.style';
import AvatarImg from './AvatarImg';
import Mypage from '../../../pages/MyPage';

interface AvatarProps {}

const Avatar = ({}: AvatarProps) => {
  const { success } = useAppSelector(state => state.user.loginState);

  return (
    <>
      {success ? (
        <AvatarWrap>
          {/* props: size */}
          <Link to="/mypage">
            <AvatarImg />
          </Link>
        </AvatarWrap>
      ) : (
        <Link to="/login">
          <BsPersonCircle
            fontSize={40}
            color="gray"
          />
        </Link>
      )}
      <Routes>
        <Route
          path="/mypage"
          element={<Mypage />}
        />
      </Routes>
    </>
  );
};

export default Avatar;
