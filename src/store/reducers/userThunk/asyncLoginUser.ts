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
    // 현재 로그인되지 않은 상태라면
    if (!auth.currentUser) {
      let response;
      // 로그인을 구글로 할경우
      if (type === 'google') {
        const provider = new GoogleAuthProvider();
        response = await signInWithPopup(auth, provider);
        // 일반 메일로 로그인 할경우
      } else {
        response = await signInWithEmailAndPassword(
          auth,
          user!.email,
          user!.password,
        );
      }

      return response.user.email
        ? {
            status: 200,
            data: response.user.email,
          }
        : {
            status: 401,
            data: '이메일 혹은 암호가 잘못됨',
          };
    }
  },
);

const asyncLoginUserPending: CaseReducer = (state, action) => {
  state.loadingState.loading = true;
};

const asyncLoginUserFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;
  state.email = action.payload.data as string;
};

const asyncLoginUserRejected: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.errorMsg = action.payload.data;
};

export default asyncLoginUser;
export {
  asyncLoginUserPending,
  asyncLoginUserFulfilled,
  asyncLoginUserRejected,
};
