import styled from 'styled-components';
import { navHeightVal } from './Layout.style';

export const iconStyle = { color: 'black', fontSize: '1.2rem' };

export const NavWrap = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: ${({ theme }) => theme.deviceSizes.mobile};
  height: ${navHeightVal};
  background: rgb(255, 255, 255);
`;
export const NavInner = styled.ul`
  display: flex;
  height: 100%;
  & li {
    width: 25%;
    text-align: center;
    height: 100%;
    > a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
