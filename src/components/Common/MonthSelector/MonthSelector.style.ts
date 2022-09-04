import styled from 'styled-components';

export const StyledMonthSelector = styled.div`
  width: 4rem;
  height: 1.5rem;
  font-size: ${({ theme }) => theme.fonts.size.medium};

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  user-select: none;
`;
