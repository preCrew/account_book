import { doc, getDoc } from '@firebase/firestore';
import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from 'firebaseConfig';
import { RootState } from 'store/store';
import { TUser, TuserInfo } from '../user-Slice';

const asyncReadUserInfo = createAsyncThunk(
  'userSlice/asyncReadUserInfo',
  async (_, api) => {
    const isLogin = (api.getState() as RootState).user.isLogin;
    const uid = (api.getState() as RootState).user.uid;

    // 로그인된 상태가 아닌데 시도하는경우
    if (!isLogin) {
      api.rejectWithValue({ status: 400, data: '로그인이 필요합니다.' });
    }

    try {
      const response = await getDoc(doc(db, 'users', uid.toString()));

      return response.exists()
        ? // 등록한적이 있다면
          api.fulfillWithValue({
            status: 200,
            data: response.data(),
          })
        : // 등록한적이 없다면
          api.rejectWithValue({
            status: 204,
            data: {
              name: '이름을 등록해주세요',
              budget: 0,
              character: 0,
            },
          });
    } catch (e) {
      console.log(e);
      return api.rejectWithValue({
        status: 400,
        data: '읽기 실패',
      });
    }
  },
);

const asyncReadUserInfoPending: CaseReducer<TUser> = (state, action) => {
  state.loadingState.readUserInfo.loading = true;
  state.loadingState.readUserInfo.success = false;
  state.loadingState.readUserInfo.error = false;
  state.loadingState.readUserInfo.errorMsg = null;
};

const asyncReadUserInfoFulfilled: CaseReducer<TUser> = (state, action) => {
  state.loadingState.readUserInfo.loading = false;
  state.loadingState.readUserInfo.success = true;

  state.userInfo = { ...action.payload.data };
};

const asyncReadUserInfoRejected: CaseReducer = (state, action) => {
  state.loadingState.readUserInfo.loading = false;
  state.loadingState.readUserInfo.error = true;
  state.loadingState.readUserInfo.errorMsg = action.payload.data;
};

export default asyncReadUserInfo;
export {
  asyncReadUserInfoPending,
  asyncReadUserInfoFulfilled,
  asyncReadUserInfoRejected,
};
