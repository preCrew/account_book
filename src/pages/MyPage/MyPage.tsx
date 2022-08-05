import React from 'react';
import useAppDispatch from '../../store/hooks/useAccountBook';
import { useAppSelector } from '../../store/store';
import Input from 'components/Common/Input';
import useModal from 'hooks/useModal';
import { Down100, Up100 } from 'styles/animations';
import SelectCharacterModal from '../../components/Common/Modal/ModalComponents/SelectCharacterModal';

import {
  StyledMyPage,
  Profile,
  Name,
  Emaile,
  AmountIcon,
  AmountBox,
  MyPageContainer,
  AmountInputBox,
  MyPageSection,
  SaveButton,
} from './MyPage.style';

// interface MyPageProps {}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const MyPage = () => {
  const MAX_AMOUNT = 10000000000;
  const MIN_AMOUNT = 0;

  const dispatch = useAppDispatch();
  const accountBook = useAppSelector(state => state.accountBook);
  const { Modal, showModal, closeModal } = useModal(Up100, Down100, 300);

  const handleChangeAmountSetting = (e: InputChangeEvent) => {
    console.log('handle: ' + e.target.valueAsNumber);
    const amount = e.target.valueAsNumber;
    if (amount <= MAX_AMOUNT && amount >= MIN_AMOUNT) {
      dispatch.changeAmount2(e.target.valueAsNumber);
    } else {
    }
  };

  return (
    <MyPageContainer>
      <MyPageSection>
        <StyledMyPage>
          <Modal>
            <SelectCharacterModal onClose={closeModal} />
          </Modal>
          <Profile onClick={showModal}></Profile>
          <Name>Name</Name>
          <Emaile>csa2676@naver.com</Emaile>
          <AmountBox>
            <AmountIcon></AmountIcon>
            <AmountInputBox>
              <Input
                type={'number'}
                value={accountBook.amount}
                onChange={handleChangeAmountSetting}
              />
            </AmountInputBox>
          </AmountBox>
          <SaveButton>저장하기</SaveButton>
        </StyledMyPage>
      </MyPageSection>
    </MyPageContainer>
  );
};

export default MyPage;
