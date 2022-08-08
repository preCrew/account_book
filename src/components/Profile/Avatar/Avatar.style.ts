import styled from 'styled-components';

export const AvatarWrap = styled.div<{ size?: number }>`
  width: ${props => (props.size ? `${props.size}px` : '80px')};
  height: ${props => (props.size ? `${props.size}px` : '80px')};
  overflow: hidden;
  border-radius: 100%;
`;
