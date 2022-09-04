import styled from 'styled-components';

export const AvatarWrap = styled.div<{ size?: number }>`
  width: ${props => (props.size ? `${props.size}px` : '80px')};
  height: ${props => (props.size ? `${props.size}px` : '80px')};
  overflow: hidden;
  border-radius: 100%;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
