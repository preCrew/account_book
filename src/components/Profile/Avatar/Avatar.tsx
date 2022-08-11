import { Link, Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'store/store';

import { AvatarWrap } from './Avatar.style';
import AvatarImg from './AvatarImg';
import Mypage from '../../../pages/MyPage';

interface AvatarProps {
  size: string;
}

const Avatar = ({ size }: AvatarProps) => {
  const { loginDone } = useAppSelector(state => state.user);

  return (
    <>
      <AvatarWrap>
        {/* props: size */}
        <Link to="/mypage">
          <AvatarImg size={size} />
        </Link>
      </AvatarWrap>
      {/* <Routes>
        <Route
          path="/mypage"
          element={<Mypage />}
        />
      </Routes> */}
    </>
  );
};

export default Avatar;
