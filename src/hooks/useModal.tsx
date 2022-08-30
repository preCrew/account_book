import ModalFrame from 'components/Common/Modal';
import React, { useCallback, useState } from 'react';
import { Keyframes } from 'styled-components';
import { Down100, Up100 } from 'styles/animations';

interface useModalProps {
  openAnime?: Keyframes;
  closeAnime?: Keyframes;
  animeTimeMs?: number;
}
const useModal = ({
  openAnime = Up100,
  closeAnime = Down100,
  animeTimeMs = 300,
}: useModalProps) => {
  const [state, setState] = useState({
    isOpen: false,
    isUnmount: false,
  });

  const closeModal = useCallback(() => {
    setState(state => ({ ...state, isUnmount: true }));
    setTimeout(() => {
      // setIsOpen(false);
      setState(state => ({ ...state, isOpen: false }));
    }, animeTimeMs);
  }, [animeTimeMs]);

  const showModal = useCallback(() => {
    // setIsUnmount(false);
    setState(state => ({ ...state, isUnmount: false, isOpen: true }));

    // setIsOpen(true);
  }, []);

  const Modal = ({ children }: { children: React.ReactNode }) => (
    <ModalFrame
      isOpen={state.isOpen}
      onClose={closeModal}
      isUnmount={state.isUnmount}
      openAnimation={openAnime}
      closeAnimation={closeAnime}
    >
      {children}
    </ModalFrame>
  );

  return { Modal, showModal, closeModal };
};

export default useModal;
