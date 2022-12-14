import React from 'react';
import useUser from 'store/hooks/useUser';
import { useAppSelector } from 'store/store';
import { FcGoogle } from 'react-icons/fc';
import { LayoutWrap, ContentsBox, LoginBox, LoginBtn } from './Layout.style';

import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { loginUser } = useUser();
  const { isLogin } = useAppSelector(state => state.user);

  const handleClickLogin = () => {
    loginUser('google');
  };

  return (
    <LayoutWrap>
      {/* <Header /> */}
      {isLogin ? (
        <>
          <ContentsBox>{children}</ContentsBox>
          <Nav />
        </>
      ) : (
        <LoginBox>
          <h1>๐๊ฐ๊ณ๋ถโ๏ธ</h1>
          <LoginBtn
            type="button"
            onClick={handleClickLogin}
          >
            <FcGoogle size="30px" /> ๊ตฌ๊ธ ์์ด๋ ๋ก๊ทธ์ธ
          </LoginBtn>
        </LoginBox>
      )}
    </LayoutWrap>
  );
};

export default Layout;
