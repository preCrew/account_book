import { doc, setDoc } from '@firebase/firestore';
import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from 'firebaseConfig';
import { RootState } from 'store/store';

const asyncUpdateUserInfo = createAsyncThunk(
  'userSlice/asyncUpdateUserInfo',
  async (_, api) => {
    const isLogin = (api.getState() as RootState).user.isLogin;
    const email = (api.getState() as RootState).user.email;

    const { budget, character, name } = (api.getState() as RootState).user
      .userInfo;

    const uid = (api.getState() as RootState).user.uid;
    const docu = doc(db, 'users', uid.toString());

    // 로그인된 상태가 아닌데 시도하는경우
    if (!isLogin) {
      api.rejectWithValue({ status: 400, data: '로그인이 필요합니다.' });
    }

    try {
      await setDoc(docu, {
        uid,
        email,
        budget,
        character,
        name,
      });
      return api.fulfillWithValue({
        status: 200,
        data: 'success update',
      });
    } catch (e) {
      return api.rejectWithValue({
        status: 400,
        data: '업데이트 실패',
      });
    }
  },
);

const asyncUpdateUserInfoPending: CaseReducer = (state, action) => {
  state.loadingState.loading = true;
  state.loadingState.success = false;
  state.loadingState.error = false;
  state.loadingState.errorMsg = null;
};

const asyncUpdateUserInfoFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;
};

const asyncUpdateUserInfoRejected: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.error = true;
  state.loadingState.errorMsg = action.payload.data;
};

export default asyncUpdateUserInfo;
export {
  asyncUpdateUserInfoPending,
  asyncUpdateUserInfoFulfilled,
  asyncUpdateUserInfoRejected,
};
