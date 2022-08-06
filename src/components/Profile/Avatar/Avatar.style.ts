import styled from 'styled-components';

export const AvatarWrap = styled.div<{ styleBg?: string }>`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 100%;
  & a {
    display: block;
    height: 100%;
    background: url(${props => props.styleBg});
    background-size: cover;
    background-position: center;
  }
`;
