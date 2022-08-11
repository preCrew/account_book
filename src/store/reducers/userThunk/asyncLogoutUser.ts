/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import {
  browserLocalPersistence,
  setPersistence,
  signOut,
} from 'firebase/auth';
import { auth } from 'firebaseConfig';

const asyncLogoutUser = createAsyncThunk(
  'userSlice/asyncLogoutUser',
  async () => {
    await setPersistence(auth, browserLocalPersistence);
    if (auth.currentUser) {
      await signOut(auth);
    }
  },
);

const asyncLogoutUserPending: CaseReducer = (state, action) => {
  state.loginState.loading = true;
};

const asyncLogoutUserFulfilled: CaseReducer = (state, action) => {
  state.loginState.loading = false;
  state.loginState.success = true;
  state.email = '';
};

const asyncLogoutUserRejected: CaseReducer = (state, action) => {
  state.loginState.loading = false;
  state.loginState.errorMsg = '에러!!!';
};

export default asyncLogoutUser;
export {
  asyncLogoutUserPending,
  asyncLogoutUserFulfilled,
  asyncLogoutUserRejected,
};
