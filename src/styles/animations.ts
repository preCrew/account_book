import { css, keyframes } from 'styled-components';

export const Up100 = keyframes`
  0% {transform: translateY(100%); }
  100% {transform: translateY(0); }
`;

export const Down100 = keyframes`
  0% {transform: translateY(0%); }
  100% {transform: translateY(100%); }
`;

export const BeSmaller = css`
  transform: scaleX(0.98) scaleY(0.95);
  transition: transform 0.1s;
`;
