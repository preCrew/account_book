import styled from 'styled-components';

const HeaderHeight = `${75}px`;

const SelectMonthModalContainer = styled.div`
  width: 100%;
  height: 70%;
  background-color: white;

  position: absolute;
  bottom: 0;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  word-break: keep-all;
  user-select: none;

  overflow-y: visible;
`;

const SelectMonthModalHeader = styled.div`
  padding: 20px;
  width: 100%;
  height: ${HeaderHeight};

  font-size: ${props => props.theme.fonts.size.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
`;

const SelectMonthModalBody = styled.div`
  width: 100%;
  height: calc(100% - ${HeaderHeight}); /* IE */
  height: -webkit-calc(100% - ${HeaderHeight}); /* for Chrome, Safari */
  height: -moz-calc(100% - ${HeaderHeight}); /* for Firefox */

  padding: 0 20px; /* 상하 / 좌우 */
  font-size: ${props => props.theme.fonts.size.medium};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`;

export const SelectMonthModalS = {
  Container: SelectMonthModalContainer,
  Header: SelectMonthModalHeader,
  Body: SelectMonthModalBody,
};
