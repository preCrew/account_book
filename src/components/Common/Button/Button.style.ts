import styled from 'styled-components';
import { BeSmaller } from 'styles/animations';

interface ButtonWrapperStyle {
  itemColor?: string;
  beSmall?: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperStyle>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.5rem;

  color: ${({ itemColor }) => (itemColor ? itemColor : 'white')};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primaryPurple},
    ${({ theme }) => theme.colors.primaryPink}
  );

  &.small {
    width: 50%;
    font-size: ${props => props.theme.fonts.size.small};
  }

  &.medium {
    width: 65%;
    font-size: ${props => props.theme.fonts.size.medium};
  }

  &.large {
    width: 80%;
    font-size: ${props => props.theme.fonts.size.medium};
  }

  &.full {
    width: 100%;
    font-size: ${props => props.theme.fonts.size.medium};
  }

  &.no {
    width: 100%;
    height: 100%;
    background: none;
    color: black;
  }

  /* pc에서 클릭 */
  @media (hover: hover) {
    &:hover {
      ${({ beSmall }) => (beSmall ? BeSmaller : '')}
    }
    &:active {
      filter: brightness(95%);
    }
  }
  /* 모바일에서 클릭 */
  @media (hover: none) {
    &:active {
      ${({ beSmall }) => (beSmall ? BeSmaller : '')}
      filter: brightness(95%);
    }
  }

  cursor: pointer;
  user-select: none;
`;
