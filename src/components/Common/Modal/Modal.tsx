import React, { MouseEvent, useEffect, useLayoutEffect } from 'react';
import { ModalInner, ModalWrapper } from './Modal.style';
import ModalPortal from './ModalPortal';
import { Keyframes } from 'styled-components';
import { TModalTypes } from 'store/reducers/modal-Slice';
import { useAppSelector } from 'store/store';
import useBackgroundBlockScroll from 'hooks/useBackgroundBlockScroll';
import ModalContent from './ModalInner';

interface ModalProps {
  animationMs?: number;
  openAnimation?: Keyframes;
  closeAnimation?: Keyframes;
  onClose: () => void;
  children: React.ReactNode;
  modalName: TModalTypes;
}

const Modal = ({
  animationMs,
  openAnimation,
  closeAnimation,
  onClose,
  children,
  modalName,
}: ModalProps) => {
  const { isOpen, isUnmount } = useAppSelector(state => state.modal[modalName]);
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
