import React from 'react';
import { HeaderWrap } from './Header.style';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <HeaderWrap>{title}</HeaderWrap>
    </>
  );
};

export default React.memo(Header);
