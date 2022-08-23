import styled from 'styled-components';

export const PayListWrap = styled.ul`
  > li {
    &:first-child {
      margin-top: 0.583rem;
      border-top: 0;
    }
    padding: 0.583rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.gray1};
  }
`;
