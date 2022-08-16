import styled from 'styled-components';
import { contentsMargin } from 'components/Common/Layout/Layout.style';

export const HeaderWrap = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.417rem 0.83rem;
  margin: 0 -${contentsMargin} 20px;
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.primaryGradient()}`};
  font-size: 20px;
  color: white;
`;
