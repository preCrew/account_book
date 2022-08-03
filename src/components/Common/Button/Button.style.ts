import styled from 'styled-components';

interface ButtonWrapperStyle {
  itemColor?: string;
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
  cursor: pointer;
  user-select: none;
`;
