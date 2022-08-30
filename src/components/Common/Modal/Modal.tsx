import React, { MouseEvent } from 'react';
import { ModalInner, ModalWrapper } from './Modal.style';
import ModalPortal from './ModalPortal';
import { Keyframes } from 'styled-components';

interface ModalProps {
  animationMs?: number;
  openAnimation?: Keyframes;
  closeAnimation?: Keyframes;
  isUnmount: boolean;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  name?: string;
}

const Modal = ({
  animationMs,
  openAnimation,
  closeAnimation,
  isUnmount,
  isOpen,
  onClose,
  children,
  name,
}: ModalProps) => {
  console.log(name, isOpen, isUnmount);
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
              animatinoMs={animationMs}
            >
              <div onClick={handleClickInnerModal}>{children}</div>
            </ModalInner>
          </ModalWrapper>
        </ModalPortal>
      )}
    </>
  );
};

export default React.memo(Modal);
