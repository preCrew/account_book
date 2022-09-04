import styled from 'styled-components';

const Wrap = styled.div`
  border-bottom: solid 0.07rem ${({ theme }) => theme.colors.gray1};
  padding-bottom: 0.7rem;
  /* padding: 0 20px 20px 20px; */
`;
const Main = styled.div`
  margin-bottom: 0.5rem;
`;
const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fonts.size.small};

  .totCases {
    color: ${({ theme }) => theme.colors.gray2};
  }
  /* .totAmountDay {
  } */
`;

export const DayReceiptModalBody = styled.ul`
  /* overflow-y: scroll; */
  width: 100%;
  height: 100%;
  /* padding: 0 20px 20px 20px; */
`;
export const DayReceiptsModalHeader = { Wrap, Main, Sub };
