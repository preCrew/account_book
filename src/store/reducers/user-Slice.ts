import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import badAvartar1Img from '../../assets/images/avatar/noname_bad.jpg';
import sosoAvartar1Img from '../../assets/images/avatar/noname_soso.jpg';
import goodAvartar1Img from '../../assets/images/avatar/noname_good.jpg';
import badAvartar2Img from '../../assets/images/avatar/rupee_bad.jpg';
import sosoAvartar2Img from '../../assets/images/avatar/rupee_soso.jpg';
import goodAvartar2Img from '../../assets/images/avatar/rupee_good.jpg';
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

interface TLoginState {
  loading: boolean;
  success: boolean;
  errorMsg: null | string;
}
interface TuserInfo {
  character: number | null;
  budget: number;
  totalExpense: number;
}

interface TUser {
  loginState: TLoginState;
  email: string;
  avatar: [
    {
      name: string;
      bad: string;
      soso: string;
      good: string;
    },
    {
      name: string;
      bad: string;
      soso: string;
      good: string;
    },
  ];
}

const initialUserState: TUser = {
  loginState: {
    loading: false,
    success: false,
    errorMsg: null,
  },
  email: '',
  avatar: [
    {
      name: '외국인',
      bad: badAvartar1Img,
      soso: sosoAvartar1Img,
      good: goodAvartar1Img,
    },
    {
      name: '루피',
      bad: badAvartar2Img,
      soso: sosoAvartar2Img,
      good: goodAvartar2Img,
    },
  ],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  reducers: {
    keepingLoginStateAction: (state: TUser, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(asyncCreateUser.pending, asyncCreateUserPending);
    builder.addCase(asyncCreateUser.fulfilled, asyncCreateUserFulfilled);
    builder.addCase(asyncCreateUser.rejected, asyncCreateUserRejected);

    builder.addCase(asyncLoginUser.pending, asyncLoginUserPending);
    builder.addCase(asyncLoginUser.fulfilled, asyncLoginUserFulfilled);
    builder.addCase(asyncLoginUser.rejected, asyncLoginUserRejected);

    builder.addCase(asyncLogoutUser.prototype, asyncLogoutUserPending);
    builder.addCase(asyncLogoutUser.fulfilled, asyncLogoutUserFulfilled);
    builder.addCase(asyncLogoutUser.rejected, asyncLogoutUserRejected);
  },
});

export const { keepingLoginStateAction } = userSlice.actions;
export { asyncCreateUser };
export default userSlice.reducer;
