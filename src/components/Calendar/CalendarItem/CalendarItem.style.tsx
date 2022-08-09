import styled from 'styled-components';

export const CalendarItemS = styled.div`
  width: 100%;
  height: 2.5rem;
  font-size: 0.55rem;
  background: white;
`;
export const CalendarDateS = styled.div`
  height: 1rem;
`;

const CalenderCommonStyle = styled.div`
  width: 100%;
  font-size: 0.38rem;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const CalendarIncomeS = styled(CalenderCommonStyle)`
  color: ${({ theme }) => theme.colors.purple};
`;
export const CalendarSpendingS = styled(CalenderCommonStyle)`
  color: ${({ theme }) => theme.colors.pink};
`;
