import ModalFrame from 'components/Common/Modal';
import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import modalAtom from 'recoil/modalAtom';
import { Keyframes } from 'styled-components';
import { Down100, Up100 } from 'styles/animations';

interface useModalProps {
  openAnime?: Keyframes;
  closeAnime?: Keyframes;
  animeTimeMs?: number;
  modalName: string;
  onClose?: () => void;
  onShow?: () => void;
}
const useModal = ({
  openAnime = Up100,
  closeAnime = Down100,
  animeTimeMs = 300,
  modalName,
  onClose,
  onShow,
}: useModalProps) => {
  const setModalState = useSetRecoilState(modalAtom);

  const closeModal = useCallback(() => {
    setModalState(prev =>
      prev.map(modal =>
        modal.name === modalName ? { ...modal, willUnmount: true } : modal,
      ),
    );

    setTimeout(() => {
      setModalState(prev => prev.filter(modal => modal.name !== modalName));
      onClose && onClose();
    }, animeTimeMs);
  }, []);

  const showModal = useCallback(() => {
    setModalState(prev => [
      ...prev,
      { name: modalName, willUnmount: false, isOpen: true },
    ]);
    onShow && onShow();
  }, []);

  const Modal = ({ children }: { children: React.ReactNode }) => (
    <ModalFrame
      onClose={closeModal}
      openAnimation={openAnime}
      closeAnimation={closeAnime}
      modalName={modalName}
    >
      {children}
    </ModalFrame>
  );

  return { Modal, showModal, closeModal };
};

export default useModal;
