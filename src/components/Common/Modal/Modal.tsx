import React, { MouseEvent } from 'react';
import { ModalInner, ModalWrapper } from './Modal.style';
import ModalPortal from './ModalPortal';
import { Keyframes } from 'styled-components';

interface ModalProps {
  openAnimation?: Keyframes;
  closeAnimation?: Keyframes;
  isUnmount: boolean;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  openAnimation,
  closeAnimation,
  isUnmount,
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  const handleClickInnerModal = (e: MouseEvent<HTMLDivElement>) => {
    // ModalWrapper로 이벤트 전파 방지
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <ModalPortal>
          <ModalWrapper onClick={onClose}>
            <ModalInner
              onClick={onClose}
              openAnimation={openAnimation}
              closeAnimation={closeAnimation}
              isUnmount={isUnmount}
            >
              <div onClick={handleClickInnerModal}>{children}</div>
            </ModalInner>
          </ModalWrapper>
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;
