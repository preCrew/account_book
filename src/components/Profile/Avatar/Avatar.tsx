import { Link, Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'store/store';

import { BsPersonCircle } from 'react-icons/bs';
import { AvatarWrap } from './Avatar.style';
import Mypage from '../../../pages/MyPage';
import AvatarImg from './AvatarImg';

const Avatar = () => {
  return (
    <>
      <AvatarWrap>
        {/* props: size */}
        <Link to="/mypage">
          <AvatarImg size="50px" />
        </Link>
      </AvatarWrap>
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
