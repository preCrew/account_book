import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from 'firebaseConfig';
import { RootState } from 'store/store';
import { TYearMonth } from '../reducerCommonTypes';

const asyncReadReceipt = createAsyncThunk(
  'accountBookSlice/asyncReadReceipt',
  async (yearMonth: TYearMonth, api) => {
    const { email } = (api.getState() as RootState).user;

    // 로그인된 상태가 아닌데 생성하려고 시도하는경우
    if (!email) {
      api.rejectWithValue({
        status: 400,
        data: '로그인이 필요합니다.',
      });
    }
    // 로그인된 상태라면
    else {
      // 문서의 경로 설정
      const docu = doc(
        db,
        email,
        'receipts',
        'years',
        yearMonth.year.toString(),
        'months',
        yearMonth.month.toString(),
      );
      const response = await getDoc(docu);
      // 받아온 데이터가 있다면
      return response.exists()
        ? { status: 200, data: response.data() }
        : { status: 204, data: '받아올 데이터가 존재하지 않습니다' };
    }
  },
);

const asyncReadReceiptPending: CaseReducer = (state, action) => {
  state.loadingState.loading = true;
};

const asyncReadReceiptFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;
  state.receipts = action.payload.data.lists;
};

const asyncReadReceiptRejected: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.errorMsg = action.payload.data;
};

export default asyncReadReceipt;
export {
  asyncReadReceiptPending,
  asyncReadReceiptFulfilled,
  asyncReadReceiptRejected,
};
