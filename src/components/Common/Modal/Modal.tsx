import React, { MouseEvent } from 'react';
import { ModalInner, ModalWrapper } from './Modal.style';
import ModalPortal from './ModalPortal';
import './Modal.style.ts';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const handleClickInnerModal = (e: MouseEvent<HTMLDivElement>) => {
    // ModalWrapper로 이벤트 전파 방지
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <ModalPortal>
          <ModalWrapper onClick={onClose}>
            <ModalInner onClick={onClose}>
              <div onClick={handleClickInnerModal}>{children}</div>
            </ModalInner>
          </ModalWrapper>
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;
