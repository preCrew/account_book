import styled, { Keyframes } from 'styled-components';

const HeaderHeight = `${100}px`;

const SelectModalContainer = styled.div`
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

const SelectModalHeader = styled.div`
  padding: 20px;
  width: 100%;
  height: ${HeaderHeight};

  font-size: ${props => props.theme.fonts.size.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
`;

const SelectModalBody = styled.div`
  width: 100%;
  height: calc(100% - ${HeaderHeight});
  padding: 0 20px; /* 상하 / 좌우 */
  font-size: ${props => props.theme.fonts.size.medium};
  overflow-y: auto;
`;

export const SelectModalS = {
  Container: SelectModalContainer,
  Header: SelectModalHeader,
  Body: SelectModalBody,
};
