import ModalFrame from 'components/Common/Modal';
import React, { useCallback } from 'react';
import { changeSelectIdAction } from 'store/reducers/accoutBook-Slice';
import {
  changeModalMount,
  changeModalOpen,
  TModalTypes,
} from 'store/reducers/modal-Slice';
import { useAppDispatch } from 'store/store';
import { Keyframes } from 'styled-components';
import { Down100, Up100 } from 'styles/animations';
import { VoidExpression } from 'typescript';

interface useModalProps {
  openAnime?: Keyframes;
  closeAnime?: Keyframes;
  animeTimeMs?: number;
  modalName: TModalTypes;
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
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    onClose && onClose();
    dispatch(changeModalMount({ modal: modalName, state: true }));

    setTimeout(() => {
      dispatch(changeModalOpen({ modal: modalName, state: false }));
    }, animeTimeMs);
  }, [animeTimeMs, dispatch, modalName]);

  const showModal = useCallback(() => {
    onShow && onShow();
    dispatch(changeModalMount({ modal: modalName, state: false }));
    dispatch(changeModalOpen({ modal: modalName, state: true }));
  }, [dispatch, modalName]);

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
