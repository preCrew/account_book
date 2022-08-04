import { css, keyframes } from 'styled-components';

export const Up100 = keyframes`
  0% {bottom: -100%; }
  100% {bottom: 0; }
`;

export const Down100 = keyframes`
  0% {bottom: 0%; }
  100% {bottom: -100%; }
`;

export const BeSmaller = css`
  transform: scaleX(0.98) scaleY(0.95);
  transition: transform 0.1s;
`;
