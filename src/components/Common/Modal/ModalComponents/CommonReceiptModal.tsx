import React from 'react';
import styled from 'styled-components';
interface CommonReceiptModalProps {}

const BottomUpModal = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 30%;
  background-color: white;

  z-index: 1050;
`;
const CommonReceiptModal = ({}: CommonReceiptModalProps) => {
  return <BottomUpModal>2번째 모달</BottomUpModal>;
};

export default CommonReceiptModal;
