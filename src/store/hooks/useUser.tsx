import { useCallback } from 'react';
import asyncCreateUser, {
  TUserIdPassword,
} from 'store/reducers/userThunk/asyncCreateUser';
import asyncLoginUser from 'store/reducers/userThunk/asyncLoginUser';
import asyncLogoutUser from 'store/reducers/userThunk/asyncLogoutUser';
import asyncReadUserInfo from 'store/reducers/userThunk/asyncReadUserInfo';
import asyncUpdateUserInfo from 'store/reducers/userThunk/asyncUpdateUserInfo';
import { useAppDispatch } from 'store/store';
import {
  chageCaracterAction,
  changebudgetAction,
  changeNameAction,
  keepingLoginStateAction,
} from '../reducers/user-Slice';

const useUser = () => {
  const dispatch = useAppDispatch();

  const chageCaracter = useCallback(
    (characterNumber: number) => {
      dispatch(chageCaracterAction(characterNumber));
    },
    [dispatch],
  );

  const changeBudget = useCallback(
    (userBudget: number) => {
      dispatch(changebudgetAction(userBudget));
    },
    [dispatch],
  );

  const changeName = useCallback(
    (userName: string) => {
      dispatch(changeNameAction(userName));
    },
    [dispatch],
  );

  const createUser = (email: string, password: string) => {
    dispatch(
      asyncCreateUser({
        email,
        password,
      }),
    );
  };

  const loginUser = (type: 'google' | 'idpw', user?: TUserIdPassword) => {
    dispatch(
      asyncLoginUser({
        type,
        user,
      }),
    );
  };

  const logoutUser = () => {
    dispatch(asyncLogoutUser());
  };

  const keepingLoginState = (email: string, uid: string) => {
    dispatch(keepingLoginStateAction({ email, uid }));
  };

  const getUserInfo = () => {
    dispatch(asyncReadUserInfo());
  };

  const updateUserInfo = () => {
    dispatch(asyncUpdateUserInfo());
  };

  return {
    chageCaracter,
    changeName,
    changeBudget,
    createUser,
    loginUser,
    logoutUser,
    keepingLoginState,
    getUserInfo,
    updateUserInfo,
  };
};

export default useUser;
