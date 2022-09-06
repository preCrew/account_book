import ModalFrame from 'components/Common/Modal';
import React, { useCallback } from 'react';
import { changeSelectIdAction } from 'store/reducers/accoutBook-Slice';
import {
  changeModalMount,
  changeModalNew,
  changeModalOpen,
  TModalTypes,
} from 'store/reducers/modal-Slice';
import { useAppDispatch, useAppSelector } from 'store/store';
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
  const { receipt } = useAppSelector(state => state.modal);
  const closeModal = useCallback(() => {
    dispatch(changeModalMount({ modal: modalName, state: true }));

    setTimeout(() => {
      dispatch(changeModalOpen({ modal: modalName, state: false }));
      onClose && onClose();
    }, animeTimeMs);

    if (receipt.isNew) dispatch(changeModalNew({ state: false }));
  }, [animeTimeMs, dispatch, modalName, onClose]);

  const showModal = useCallback(() => {
    dispatch(changeModalMount({ modal: modalName, state: false }));
    dispatch(changeModalOpen({ modal: modalName, state: true }));
    onShow && onShow();
  }, [dispatch, modalName, onShow]);

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
