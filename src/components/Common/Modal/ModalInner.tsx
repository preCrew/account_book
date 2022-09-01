import useBackgroundBlockScroll from 'hooks/useBackgroundBlockScroll';
import React from 'react';

interface ModalContentProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

const ModalContent = ({ onClick, children }: ModalContentProps) => {
  useBackgroundBlockScroll();
  return <div onClick={onClick}>{children}</div>;
};

export default ModalContent;
