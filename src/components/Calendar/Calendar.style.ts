import styled from 'styled-components';

export const CalendarS = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;

  table {
    width: 100%;
    font-size: 0.6rem;
  }
  tr {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  thead > tr {
    height: 2rem;
  }
  td {
    width: calc(100% / 7);
    text-align: center;
  }
`;
