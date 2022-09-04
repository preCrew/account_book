import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLoadingState } from './reducerCommonTypes';

import asyncCreateUser, {
  asyncCreateUserFulfilled,
  asyncCreateUserPending,
  asyncCreateUserRejected,
} from './userThunk/asyncCreateUser';
import asyncLoginUser, {
  asyncLoginUserFulfilled,
  asyncLoginUserPending,
  asyncLoginUserRejected,
} from './userThunk/asyncLoginUser';
import asyncLogoutUser, {
  asyncLogoutUserFulfilled,
  asyncLogoutUserPending,
  asyncLogoutUserRejected,
} from './userThunk/asyncLogoutUser';
import asyncUpdateUserInfo, {
  asyncUpdateUserInfoFulfilled,
  asyncUpdateUserInfoPending,
  asyncUpdateUserInfoRejected,
} from './userThunk/asyncUpdateUserInfo';
import asyncReadUserInfo, {
  asyncReadUserInfoFulfilled,
  asyncReadUserInfoPending,
  asyncReadUserInfoRejected,
} from './userThunk/asyncReadUserInfo';

export interface TuserInfo {
  name: string;
  character: number;
  budget: number;
}

export interface TUser {
  isLogin: boolean;
  email: string;
  uid: string;
  loadingState: {
    createUser: TLoadingState | Record<string, unknown>;
    loginUser: TLoadingState | Record<string, unknown>;
    logoutUser: TLoadingState | Record<string, unknown>;
    readUserInfo: TLoadingState | Record<string, unknown>;
    updateUserInfo: TLoadingState | Record<string, unknown>;
  };
  userInfo: TuserInfo;
}

const initialUserState: TUser = {
  isLogin: false,
  uid: '',
  loadingState: {
    createUser: {},
    loginUser: {},
    logoutUser: {},
    readUserInfo: {},
    updateUserInfo: {},
  },
  userInfo: {
    name: '',
    budget: 0,
    character: 0,
  },
  email: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  reducers: {
    keepingLoginStateAction: (
      state: TUser,
      action: PayloadAction<{ email: string; uid: string }>,
    ) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.isLogin = true;
    },
    chageCaracterAction(state: TUser, action: PayloadAction<number>) {
      state.userInfo.character = action.payload;
    },
    changeNameAction(state: TUser, action: PayloadAction<string>) {
      state.userInfo.name = action.payload;
    },
    changebudgetAction(state: TUser, action: PayloadAction<number>) {
      state.userInfo.budget = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(asyncCreateUser.pending, asyncCreateUserPending);
    builder.addCase(asyncCreateUser.fulfilled, asyncCreateUserFulfilled);
    builder.addCase(asyncCreateUser.rejected, asyncCreateUserRejected);

    builder.addCase(asyncLoginUser.pending, asyncLoginUserPending);
    builder.addCase(asyncLoginUser.fulfilled, asyncLoginUserFulfilled);
    builder.addCase(asyncLoginUser.rejected, asyncLoginUserRejected);

    builder.addCase(asyncLogoutUser.pending, asyncLogoutUserPending);
    builder.addCase(asyncLogoutUser.fulfilled, asyncLogoutUserFulfilled);
    builder.addCase(asyncLogoutUser.rejected, asyncLogoutUserRejected);

    builder.addCase(asyncUpdateUserInfo.pending, asyncUpdateUserInfoPending);
    builder.addCase(
      asyncUpdateUserInfo.fulfilled,
      asyncUpdateUserInfoFulfilled,
    );
    builder.addCase(asyncUpdateUserInfo.rejected, asyncUpdateUserInfoRejected);

    builder.addCase(asyncReadUserInfo.pending, asyncReadUserInfoPending);
    builder.addCase(asyncReadUserInfo.fulfilled, asyncReadUserInfoFulfilled);
    builder.addCase(asyncReadUserInfo.rejected, asyncReadUserInfoRejected);
  },
});

export const {
  keepingLoginStateAction,
  changeNameAction,
  changebudgetAction,
  chageCaracterAction,
} = userSlice.actions;
export default userSlice.reducer;
