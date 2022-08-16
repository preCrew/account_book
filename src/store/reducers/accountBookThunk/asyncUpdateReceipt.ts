import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { RootState } from 'store/store';
import { TReceipt } from '../accoutBook-Slice';

export interface TUpdateReceiptData {
  receiptNew: Partial<TReceipt>;
  id: number;
}
const asyncUpdateReceipt = createAsyncThunk(
  'userSlice/asyncUpdateReceipt',
  async ({ receiptNew, id }: TUpdateReceiptData, api) => {
    const receiptOld = (api.getState() as RootState).accountBook.receipts.find(
      receipt => receipt.id === id,
    );
    const { isLogin } = (api.getState() as RootState).user;

    // 로그인된 상태가 아닌데 업데이트하려고 시도하는경우
    if (!isLogin) {
      api.rejectWithValue({ status: 400, data: '로그인이 필요합니다.' });
    }

    const requestData = {
      ...receiptOld,
      ...receiptNew,
    };
    const docu = doc(db, 'receipts', id.toString());

    try {
      await setDoc(docu, { ...requestData });
      return api.fulfillWithValue({
        status: 204,
        data: requestData,
      });
    } catch (e) {
      return api.rejectWithValue({
        status: 400,
        data: '업데이트 실패',
      });
    }
  },
);
const asyncUpdateReceiptPending: CaseReducer = (state, action) => {
  state.loadingState.success = false;
  state.loadingState.loading = true;
  state.loadingState.error = false;
  state.loadingState.errorMsg = null;
};

const asyncUpdateReceiptFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;

  console.log(action);
  state.receipts = state.receipts.map((receipt: TReceipt) =>
    receipt.id === action.payload.data.id
      ? { ...action.payload.data }
      : receipt,
  );
};

const asyncUpdateReceiptRejected: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.error = true;
  state.loadingState.errorMsg = action.payload.data;
};

export default asyncUpdateReceipt;
export {
  asyncUpdateReceiptPending,
  asyncUpdateReceiptFulfilled,
  asyncUpdateReceiptRejected,
};
