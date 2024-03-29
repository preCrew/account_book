import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { RootState } from 'store/store';
import { TYearMonth } from '../reducerCommonTypes';

const asyncReadReceipt = createAsyncThunk(
  'accountBookSlice/asyncReadReceipt',
  async (yearMonth: TYearMonth, api) => {
    const { email, isLogin, uid } = (api.getState() as RootState).user;

    // 로그인된 상태가 아닌데 생성하려고 시도하는경우
    if (!isLogin) {
      api.rejectWithValue({
        status: 400,
        data: '로그인이 필요합니다.',
      });
    }
    // 문서의 경로 설정receipts
    const collec = collection(db, 'receipts');
    const q = query(
      collec,
      where('uid', '==', uid.toString()),
      where('timeDate.year', '==', yearMonth.year),
      where('timeDate.month', '==', yearMonth.month),
    );
    const snap = await getDocs(q);

    if (snap.empty) {
      return api.rejectWithValue({
        status: 204,
        data: '받아올 데이터가 존재하지 않습니다',
      });
    }
    const result: unknown[] = [];
    snap.forEach(res => {
      result.push(res.data());
    });
    return {
      status: 200,
      data: result,
    };
  },
);

const asyncReadReceiptPending: CaseReducer = (state, action) => {
  state.loadingState.read.loading = true;
  state.loadingState.read.success = false;
  state.loadingState.read.error = false;
  state.loadingState.read.errorMsg = null;
};

const asyncReadReceiptFulfilled: CaseReducer = (state, action) => {
  state.loadingState.read.loading = false;
  state.loadingState.read.success = true;
  state.receipts = action.payload.data;
};

const asyncReadReceiptRejected: CaseReducer = (state, action) => {
  state.loadingState.read.loading = false;
  state.loadingState.read.error = true;
  state.loadingState.read.errorMsg = action.payload.data;
  state.receipts = [];
};

export default asyncReadReceipt;
export {
  asyncReadReceiptPending,
  asyncReadReceiptFulfilled,
  asyncReadReceiptRejected,
};
