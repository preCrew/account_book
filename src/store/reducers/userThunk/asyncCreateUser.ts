import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { checkDuplicateId } from 'apis/service/userService';
import {
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth';
import { auth } from 'firebaseConfig';

export interface TUserIdPassword {
  email: string;
  password: string;
}
const asyncCreateUser = createAsyncThunk(
  'userSlice/asyncCreateUser',
  async (user: TUserIdPassword) => {
    const isDuplicate = await checkDuplicateId(user.email);
    if (!isDuplicate) {
      await setPersistence(auth, browserLocalPersistence);
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password,
      );
      return res.user.email;
    }
  },
);

const asyncCreateUserPending: CaseReducer = (state, action) => {
  state.loadingState.loading = true;
};

const asyncCreateUserFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;
  state.email = action.payload as string;
};

const asyncCreateUserRejected: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.errorMsg = '이미 존재하는 이메일입니다.';
};

export default asyncCreateUser;
export {
  asyncCreateUserPending,
  asyncCreateUserFulfilled,
  asyncCreateUserRejected,
};
