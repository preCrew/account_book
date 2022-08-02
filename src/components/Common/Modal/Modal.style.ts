import styled, { Keyframes } from 'styled-components';

interface TModalInner {
  openAnimation?: Keyframes;
  closeAnimation?: Keyframes;
  isUnmount: boolean;
}

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  z-index: 1050;
  width: 100%;
  height: 100%;

  background-color: #0b0b0bb8;
`;

export const ModalInner = styled.div<TModalInner>`
  position: relative;
  width: 100%;
  height: 100%;

  max-width: ${({ theme }) => theme.deviceSizes.mobile};
  margin: 0 auto;

  animation: ${({ isUnmount, openAnimation, closeAnimation }) =>
      isUnmount ? closeAnimation : openAnimation}
    0.3s ease-in-out;
  /* animation-fill-mode: fo; */
`;
