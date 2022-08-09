import { Link, Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'store/store';

import { AvatarWrap } from './Avatar.style';
import AvatarImg from './AvatarImg';
import Mypage from '../../../pages/MyPage';

interface AvatarProps {}

const Avatar = ({}: AvatarProps) => {
  const { loginDone } = useAppSelector(state => state.user);

  return (
    <>
      {loginDone ? (
        <AvatarWrap>
          {/* props: size */}
          <Link to="/mypage">
            <AvatarImg />
          </Link>
        </AvatarWrap>
      ) : (
        <Link to="/login"></Link>
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
