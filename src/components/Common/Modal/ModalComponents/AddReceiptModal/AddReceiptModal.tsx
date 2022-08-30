import React, { ReactNode } from 'react';
import ButtonX from 'components/Common/Button/ButtonX';
import { ModalS } from '../Modal_Inner.style';

import { AddReceiptFormWrap } from './AddReceiptModal.style';
import AddReceiptForm from './AddReceiptForm';
import { TReceipt } from 'store/reducers/accoutBook-Slice';

export interface Tdata {
  group: string[];
  category: string[];
  payment: string[];
}
export const SelectData: Tdata = {
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
  onClose: () => void | ReactNode;
  receipt?: TReceipt;
  date?: {
    month: number;
    date: number;
  };
}

const AddReceiptModal = ({ onClose, receipt, date }: AddReceiptModalProps) => {
  const { Container, Header, Body } = ModalS;

  return (
    <AddReceiptFormWrap>
      <Container>
        <Header>
          {receipt && '내역 수정하기'}
          {!receipt && '내역 추가하기'}
          <ButtonX onClick={onClose} />
        </Header>
        <Body>
          <AddReceiptForm
            data={SelectData}
            onClose={onClose}
            receipt={receipt}
            date={date}
            // update={update}
          />
        </Body>
      </Container>
    </AddReceiptFormWrap>
  );
};

export default React.memo(AddReceiptModal);
