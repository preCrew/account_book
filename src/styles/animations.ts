import { keyframes } from 'styled-components';

export const UpFadeOut = (height: string) => keyframes`
  0% {bottom: -${height}}
  100% {bottom: 0;}
`;
