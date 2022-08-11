/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from 'firebaseConfig';
import { TUserIdPassword } from './asyncCreateUser';

const asyncLoginUser = createAsyncThunk(
  'userSlice/asyncLoginUser',
  async ({
    type,
    user,
  }: {
    type: 'google' | 'idpw';
    user?: TUserIdPassword;
  }) => {
    await setPersistence(auth, browserLocalPersistence);
    if (!auth.currentUser) {
      if (type === 'google') {
        const provider = new GoogleAuthProvider();
        return (await signInWithPopup(auth, provider)).user.email;
      } else {
        return (
          await signInWithEmailAndPassword(auth, user!.email, user!.password)
        ).user.email;
      }
    }
  },
);

const asyncLoginUserPending: CaseReducer = (state, action) => {
  state.loginState.loading = true;
};

const asyncLoginUserFulfilled: CaseReducer = (state, action) => {
  state.loginState.loading = false;
  state.loginState.success = true;
  state.email = action.payload as string;
};

const asyncLoginUserRejected: CaseReducer = (state, action) => {
  state.loginState.loading = false;
  state.loginState.errorMsg = '에러!!!';
};

export default asyncLoginUser;
export {
  asyncLoginUserPending,
  asyncLoginUserFulfilled,
  asyncLoginUserRejected,
};
