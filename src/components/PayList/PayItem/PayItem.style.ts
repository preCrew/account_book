import styled from 'styled-components';

export const ListItemBox = styled.li`
  font-size: ${({ theme }) => theme.fonts.size.size14};
`;
export const ListDate = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.size16};
`;
export const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListBottom = styled.span`
  display: block;
  margin-top: 0.417rem;
  font-size: 0.5rem;
`;
