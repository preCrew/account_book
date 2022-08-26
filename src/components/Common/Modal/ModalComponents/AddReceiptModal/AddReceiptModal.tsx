import React from 'react';
import ButtonX from 'components/Common/Button/ButtonX';
import { ModalS } from '../Modal_Inner.style';
import { useAppDispatch, useAppSelector } from 'store/store';

import { AddReceiptFormWrap } from './AddReceiptModal.style';
import AddReceiptForm from './AddReceiptForm';

export interface Tdata {
  group: string[];
  category: string[];
  payment: string[];
}
const SelectData: Tdata = {
  group: ['지출', '수입', '이체'],
  category: [
    '식비',
    '카페/간식',
    '온라인쇼핑',
    '뷰티/미용',
    '교통',
    '생활',
    '주거/통신',
    '문화/여가',
    '교육/학습',
    '여행',
  ],
  payment: ['카드', '현금'],
};

interface AddReceiptModalProps {
  onClose: () => void;
}

const AddReceiptModal = ({ onClose }: AddReceiptModalProps) => {
  const { Container, Header, Body } = ModalS;

  return (
    <AddReceiptFormWrap>
      <Container>
        <Header>
          {'내역 추가하기'}
          <ButtonX onClick={onClose} />
        </Header>
        <Body>
          <AddReceiptForm
            data={SelectData}
            onClose={onClose}
          />
        </Body>
      </Container>
    </AddReceiptFormWrap>
  );
};

export default AddReceiptModal;
