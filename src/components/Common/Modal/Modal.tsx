import React, { MouseEvent } from 'react';
import { ModalInner, ModalWrapper } from './Modal.style';
import ModalPortal from './ModalPortal';
import { Keyframes } from 'styled-components';
import ModalContent from './ModalInner';
import { useRecoilValue } from 'recoil';
import modalAtom from 'recoil/modalAtom';

interface ModalProps {
  animationMs?: number;
  openAnimation?: Keyframes;
  closeAnimation?: Keyframes;
  onClose: () => void;
  children: React.ReactNode;
  modalName: string;
}

const Modal = ({
  animationMs,
  openAnimation,
  closeAnimation,
  onClose,
  children,
  modalName,
}: ModalProps) => {
  const handleClickInnerModal = (e: MouseEvent<HTMLDivElement>) => {
    // ModalWrapper로 이벤트 전파 방지
    e.stopPropagation();
  };
  const modalState = useRecoilValue(modalAtom);
  const nowModal = modalState.find(modal => modal.name === modalName);

  return (
    <>
      {nowModal?.isOpen && (
        <ModalPortal>
          <ModalWrapper onClick={onClose}>
            <ModalInner
              onClick={onClose}
              openAnimation={openAnimation}
              closeAnimation={closeAnimation}
              isUnmount={nowModal?.willUnmount || false}
              animatinoMs={animationMs}
            >
              <ModalContent onClick={handleClickInnerModal}>
                {children}
              </ModalContent>
            </ModalInner>
          </ModalWrapper>
        </ModalPortal>
      )}
    </>
  );
};

export default React.memo(Modal);
