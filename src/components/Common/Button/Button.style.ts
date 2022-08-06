import styled from 'styled-components';
import { BeSmaller } from 'styles/animations';
import { TAlignItems, TJustifyContents } from '../Flex/Flex.style';

interface TButtonStyle {
  beSmall?: boolean;
  justifyContent?: TJustifyContents;
  alignItems?: TAlignItems;
}

export const ButtonWrapper = styled.div`
  /* margin-top: 1rem; */
  &.small,
  &.medium,
  &.large,
  &.full {
    height: 2rem;
    font-size: ${props => props.theme.fonts.size.medium};

    padding: 0 auto;
    border-radius: 0.75rem;
    color: white;

    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primaryPurple},
      ${({ theme }) => theme.colors.primaryPink}
    );
  }
  &.small {
    width: 50%;
    font-size: ${props => props.theme.fonts.size.small};
  }

  &.medium {
    width: 65%;
  }

  &.large {
    width: 80%;
  }

  &.full {
    width: 100%;
  }

  cursor: pointer;
  user-select: none;

  /* PC */
  @media (hover: hover) {
    &:hover {
      filter: brightness(95%);
    }

    &:active {
      filter: brightness(90%);
    }
  }
  /* 모바일 */
  @media (hover: none) {
    &:active {
      filter: brightness(90%);
    }
  }
`;
export const ButtonS = styled.div<TButtonStyle>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  align-items: ${({ alignItems }) => alignItems ?? 'center'};

  /* PC */
  @media (hover: hover) {
    &:hover {
      ${({ beSmall }) => (beSmall ? BeSmaller : '')}
    }
  }
  /* 모바일 */
  @media (hover: none) {
    &:active {
      ${({ beSmall }) => (beSmall ? BeSmaller : '')}
    }
  }
`;
