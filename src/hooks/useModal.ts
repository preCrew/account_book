import { useState } from 'react';
import Modal from 'components/Common/Modal';

const useModal = (onClose?: () => void) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    onClose && onClose();
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return { isOpen, openModal, closeModal, Modal };
};

export default useModal;
