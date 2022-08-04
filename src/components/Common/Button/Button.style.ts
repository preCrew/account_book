import styled from 'styled-components';
import { BeSmaller } from 'styles/animations';

// interface ButtonInnerStyle {
//   itemColor?: string;
//   beSmall?: boolean;
// }

export const ButtonWrapper = styled.div<{ itemColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 1.8rem; */
  padding: 0 auto;
  border-radius: 0.5rem;
  color: ${({ itemColor }) => (itemColor ? itemColor : 'white')};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primaryPurple},
    ${({ theme }) => theme.colors.primaryPink}
  );

  &.small,
  &.medium,
  &.large,
  &.full {
    font-size: ${props => props.theme.fonts.size.medium};
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

  &.no {
    width: 100%;
    height: 100%;
    padding: 0;
    background: white;
    color: black;
    /* display: block; */
    justify-content: unset;
  }

  cursor: pointer;
  user-select: none;

  &:active {
    filter: brightness(90%);
  }
`;
export const ButtonInner = styled.div<{ beSmall?: boolean }>`
  /* pc에서 클릭 */
  @media (hover: hover) {
    &:hover {
      ${({ beSmall }) => (beSmall ? BeSmaller : '')}
    }
  }
  /* 모바일에서 클릭 */
  @media (hover: none) {
    &:active {
      ${({ beSmall }) => (beSmall ? BeSmaller : '')}
    }
  }
`;
