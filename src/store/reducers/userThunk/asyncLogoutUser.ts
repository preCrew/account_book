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
  state.loadingState.loading = true;
};

const asyncLogoutUserFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;
  state.email = '';
};

const asyncLogoutUserRejected: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.errorMsg = '에러!!!';
};

export default asyncLogoutUser;
export {
  asyncLogoutUserPending,
  asyncLogoutUserFulfilled,
  asyncLogoutUserRejected,
};
