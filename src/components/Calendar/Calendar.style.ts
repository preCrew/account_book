import styled from 'styled-components';

export const CalendarS = styled.div`
  table {
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
  td {
    text-align: center;
  }
`;
