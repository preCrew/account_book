import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/store';
import Input from 'components/Common/Input';
import useModal from 'hooks/useModal';
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

// interface MyPageProps {}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const MyPage = () => {
  const { logoutUser } = useUser();
  const MAX_AMOUNT = 9999999999;

  const user = useAppSelector(state => state.user);
  const { Modal, showModal, closeModal } = useModal({ modalName: 'profile' });
  const { updateUserInfo, getUserInfo, changeBudget, changeName } = useUser();
  const serverName = user.userInfo.name;
  const serverBudget = user.userInfo.budget;

  //초기화
  useEffect(() => {
    getUserInfo();
    if (serverName !== '' || serverBudget !== 0) {
      changeName(user.userInfo.name);
      changeBudget(user.userInfo.budget);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeAmountSetting = (e: InputChangeEvent) => {
    const amount = e.target.valueAsNumber;
    changeBudget(amount);

    //Amount유효성 검사
    if (amount > -1) {
      if (amount > MAX_AMOUNT || amount < 0) {
        alert('입력할 수 있는 단위가 아닙니다.');
        changeBudget(NaN);
      }
    } else {
      changeBudget(0);
    }
  };

  const handleChangeNameSetting = (e: InputChangeEvent) => {
    const name = e.target.value;
    changeName(name);

    //Name유효성 검사
    if (name.length > 10) {
      alert('최대 10글자 까지 가능합니다.');
      changeName(name.substring(0, 10));
    }
  };

  const handleClickSave = () => {
    console.log(serverName.length);

    if (serverName.length !== 0) {
      //유저정보 Update
      changeName(user.userInfo.name as string);
      changeBudget(user.userInfo.budget as number);
      updateUserInfo();
      //유저정보 Fetch
      getUserInfo();
      alert('저장되었습니다.');
    } else {
      alert('빈값을 저장할수 없습니다.');
    }
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
              value={user.userInfo.name}
              onChange={handleChangeNameSetting}
            />
          </Name>
          <Emaile>{user.email}</Emaile>
          <SubTitle>예산을 입력해주세요</SubTitle>
          <AmountBox>
            <AmountIcon></AmountIcon>
            <AmountInputBox>
              <Input
                type={'number'}
                value={user.userInfo.budget}
                onChange={e => {
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
