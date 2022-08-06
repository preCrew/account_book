import styled from 'styled-components';
import theme from 'styles/theme';

export const HeaderWrap = styled.div`
  position: static;
  color: white;
  max-width: inherit;
  height: 100px;
  background: linear-gradient(
    to right,
    ${theme.colors.primaryPurple},
    ${theme.colors.primaryPink}
  );
`;
