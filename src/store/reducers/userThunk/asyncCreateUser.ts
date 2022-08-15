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
  async (user: TUserIdPassword, api) => {
    const isDuplicate = await checkDuplicateId(user.email);

    if (isDuplicate) {
      return api.rejectWithValue('중복되는 이메일입니다.');
    }
    await setPersistence(auth, browserLocalPersistence);
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );

    // 계정 생성에 성공하면
    return res.user.email
      ? {
          status: 200,
          data: res.user.email,
        }
      : {
          status: 409,
          data: '중복되는 메일입니다.',
        };
  },
);

const asyncCreateUserPending: CaseReducer = (state, action) => {
  state.loadingState.loading = true;
};

const asyncCreateUserFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;

  state.email = action.payload.data as string;
  state.isLogin = true;
};

const asyncCreateUserRejected: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.errorMsg = action.payload.data;
};

export default asyncCreateUser;
export {
  asyncCreateUserPending,
  asyncCreateUserFulfilled,
  asyncCreateUserRejected,
};
