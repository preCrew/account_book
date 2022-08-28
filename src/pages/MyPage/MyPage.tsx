import React, { useEffect } from 'react';
import useAppDispatch from '../../store/hooks/useAccountBook';
import { useAppSelector } from '../../store/store';
import Input from 'components/Common/Input';
import useModal from 'hooks/useModal';
import { Down100, Up100 } from 'styles/animations';
import SelectCharacterModal from '../../components/Common/Modal/ModalComponents/SelectCharacterModal';
import Header from '../../components/Common/Layout/Header';
import SaveButton from '../../components/Common/Button/Button';

import {
  StyledMyPage,
  Profile,
  Name,
  Emaile,
  SubTitle,
  AmountIcon,
  AmountBox,
  MyPageContainer,
  AmountInputBox,
  MyPageSection,
  LogoutBtn,
} from './MyPage.style';

import AvatarImg from 'components/Profile/Avatar/AvatarImg';
import useUser from 'store/hooks/useUser';
import useInput from 'hooks/useInput';

// interface MyPageProps {}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const MyPage = () => {
  const { logoutUser } = useUser();
  const MAX_AMOUNT = 9999999999;

  const user = useAppSelector(state => state.user);
  const { Modal, showModal, closeModal } = useModal(Up100, Down100, 300);
  const [value, setValue, onChange] = useInput('Name');
  const [amount, setAmount, onChangeAmount] = useInput(0);
  const { getUserInfo } = useUser();
  const { updateUserInfo, changeBudget, changeName } = useUser();

  useEffect(() => {
    getUserInfo();
    if (user.userInfo.name !== '') {
      setValue(user.userInfo.name);
      setAmount(user.userInfo.budget);
    }
  }, []);

  const handleChangeAmountSetting = (e: InputChangeEvent) => {
    setAmount(e.target.valueAsNumber);

    //Amount유효성 검사
    if (amount > -1) {
      if (amount > MAX_AMOUNT || amount < 0) {
        alert('입력할 수 있는 단위가 아닙니다.');
        setAmount(NaN);
      }
    } else {
      setAmount(0);
    }
  };

  const handleClickSave = () => {
    changeName(value as string);
    changeBudget(amount as number);
    updateUserInfo();

    getUserInfo();
    setValue(user.userInfo.name);
    setAmount(user.userInfo.budget);
  };
  const handleClickLogout = () => {
    logoutUser();
  };
  return (
    <MyPageContainer>
      <Header title="MyPage" />
      <MyPageSection>
        <StyledMyPage>
          <Modal>
            <SelectCharacterModal onClose={closeModal} />
          </Modal>
          <Profile onClick={showModal}>
            <AvatarImg size="100" />
          </Profile>
          <Name>
            <Input
              type={'text'}
              value={value}
              onChange={onChange}
            />
          </Name>
          <Emaile>{user.email}</Emaile>
          <SubTitle>예산을 입력해주세요</SubTitle>
          <AmountBox>
            <AmountIcon></AmountIcon>
            <AmountInputBox>
              <Input
                type={'number'}
                value={amount}
                onChange={e => {
                  onChangeAmount(e);
                  handleChangeAmountSetting(e);
                }}
              />
            </AmountInputBox>
          </AmountBox>
          <SaveButton
            size="full"
            onClick={handleClickSave}
          >
            저장하기
          </SaveButton>
          <LogoutBtn
            type="button"
            onClick={handleClickLogout}
          >
            로그아웃
          </LogoutBtn>
        </StyledMyPage>
      </MyPageSection>
    </MyPageContainer>
  );
};

export default MyPage;
