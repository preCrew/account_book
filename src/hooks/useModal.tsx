import ModalFrame from 'components/Common/Modal';
import React, { useState } from 'react';
import { Keyframes } from 'styled-components';

const useModal = (
  openAnime?: Keyframes,
  closeAnime?: Keyframes,
  animeTimeMs?: number,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnmount, setIsUnmount] = useState(false);

  const closeModal = () => {
    setIsUnmount(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const showModal = () => {
    setIsUnmount(false);
    setIsOpen(true);
  };

  const Modal = ({ children }: { children: React.ReactNode }) => (
    <ModalFrame
      isOpen={isOpen}
      onClose={closeModal}
      isUnmount={isUnmount}
      openAnimation={openAnime}
      closeAnimation={closeAnime}
    >
      {children}
    </ModalFrame>
  );

  return { Modal, showModal, closeModal };
};

export default useModal;
