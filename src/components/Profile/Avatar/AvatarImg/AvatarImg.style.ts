import styled from 'styled-components';

export const AvatarInnerImg = styled.div<{ styleBg?: string }>`
  display: block;
  width: 100%;
  height: 100%;
  background: url(${props => props.styleBg});
  background-size: cover;
  background-position: center;
`;
