import styled from 'styled-components';
export const PayListBox = styled.ul``;

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

export const ListTit = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.583rem;
`;

export const ListPrice = styled.span`
  display: block;
  margin-top: 0.417rem;
  font-size: 0.5rem;
`;
