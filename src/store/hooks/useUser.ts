import { useCallback } from 'react';
import asyncCreateUser, {
  TUserIdPassword,
} from 'store/reducers/userThunk/asyncCreateUser';
import asyncLoginUser from 'store/reducers/userThunk/asyncLoginUser';
import asyncLogoutUser from 'store/reducers/userThunk/asyncLogoutUser';
import { useAppDispatch } from 'store/store';
import {
  chageCaracterAction,
  keepingLoginStateAction,
} from '../reducers/user-Slice';

const useUser = () => {
  const dispatch = useAppDispatch();

  const chageCaracter = useCallback((characterNumber: number) => {
    dispatch(chageCaracterAction(characterNumber));
  }, []);
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

  return {
    chageCaracter,
    createUser,
    loginUser,
    logoutUser,
    keepingLoginState,
  };
};

export default useUser;
