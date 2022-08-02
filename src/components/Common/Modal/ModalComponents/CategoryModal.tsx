import useModal from 'hooks/useModal';
import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import CommonReceiptModal from './CommonReceiptModal';

interface CategoryModalProps {}

const BottomUpModal = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50%;
  background-color: white;
`;

const CategoryModal = ({}: CategoryModalProps) => {
  const { Modal, showModal } = useModal();
  const handleClickButton = () => {
    showModal();
  };
  return (
    <BottomUpModal>
      222
      <button onClick={handleClickButton}>2번째 모달 띄우기</button>
      <Modal>
        <CommonReceiptModal />
      </Modal>
    </BottomUpModal>
  );
};

export default CategoryModal;
