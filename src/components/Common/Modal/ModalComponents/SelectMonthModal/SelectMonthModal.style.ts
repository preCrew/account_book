import styled from 'styled-components';

const SelectMonthModalContainer = styled.div`
  width: 100%;
  height: 70%;
  background-color: white;

  position: absolute;
  bottom: 0;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding-bottom: 75px;

  word-break: keep-all;
  user-select: none;

  overflow-y: visible;
`;

const SelectMonthModalHeader = styled.div`
  padding: 20px;
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow-y: hidden;
  font-size: ${props => props.theme.fonts.size.large};
`;

const SelectMonthModalBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 20px;
  font-size: ${props => props.theme.fonts.size.medium};

  overflow-y: auto;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectMonthModalS = {
  Container: SelectMonthModalContainer,
  Header: SelectMonthModalHeader,
  Body: SelectMonthModalBody,
};
