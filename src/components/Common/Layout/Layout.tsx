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
          <h1>📚가계부✏️</h1>
          <LoginBtn
            type="button"
            onClick={handleClickLogin}
          >
            <FcGoogle size="30px" /> 구글 아이디 로그인
          </LoginBtn>
        </LoginBox>
      )}
    </LayoutWrap>
  );
};

export default Layout;
