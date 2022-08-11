import React from 'react';

import { LayoutWrap, ContentsBox } from './Layout.style';

import Header from './Header';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrap>
      {/* <Header /> */}
      <ContentsBox>{children}</ContentsBox>
      <Nav />
    </LayoutWrap>
  );
};

export default Layout;
