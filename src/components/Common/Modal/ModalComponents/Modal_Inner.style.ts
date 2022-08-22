import {
  TAlignItems,
  TFlexDirection,
  TJustifyContents,
} from 'components/Common/Flex/Flex.style';
import styled from 'styled-components';

const HeaderHeight = `${100}px`;

const Container = styled.div<{ height?: string }>`
  width: 100%;
  background-color: white;

  position: absolute;
  bottom: 0;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  word-break: keep-all;
  user-select: none;

  overflow-y: visible;
`;

const Header = styled.div<{
  flexDirection?: TFlexDirection;
  justifyContent?: TJustifyContents;
  alignItems?: TAlignItems;
}>`
  padding: 20px;
  width: 100%;
  height: ${HeaderHeight};

  font-size: ${props => props.theme.fonts.size.large};

  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  align-items: ${({ alignItems }) => alignItems || 'space-between'};
  overflow-y: hidden;
`;

const Body = styled.div`
  width: 100%;
  max-height: 70vh;
  padding: 20px;
  height: calc(100% - ${HeaderHeight});
  font-size: ${props => props.theme.fonts.size.medium};
  overflow-y: scroll;
`;

export const ModalS = {
  Container,
  Header,
  Body,
};
