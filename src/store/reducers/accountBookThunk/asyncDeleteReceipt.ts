import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { RootState } from 'store/store';
import { TReceipt } from '../accoutBook-Slice';

const asyncDeleteReceipt = createAsyncThunk(
  'accountBookSlice/asyncDeleteAccountBook',
  async (id: number, api) => {
    const { isLogin } = (api.getState() as RootState).user;

    // 로그인된 상태가 아닌데 삭제하려고 시도하는경우
    if (!isLogin) {
      return api.rejectWithValue({ status: 400, data: '로그인이 필요합니다.' });
    }

    try {
      await deleteDoc(doc(db, 'receipts', id.toString()));
      return api.fulfillWithValue({ status: 200, data: id });
    } catch (e) {
      return api.rejectWithValue({ status: 400, data: '삭제 실패' });
    }
  },
);

const asyncDeleteReceiptPending: CaseReducer = (state, action) => {
  state.loadingState.delete.loading = true;
  state.loadingState.delete.success = false;
  state.loadingState.delete.error = false;
  state.loadingState.delete.errorMsg = null;
};

const asyncDeleteReceiptFulfilled: CaseReducer = (state, action) => {
  state.loadingState.delete.loading = false;
  state.loadingState.delete.success = true;

  state.receipts = state.receipts.filter(
    (receipt: TReceipt) => receipt.id !== action.payload.data,
  );
};

const asyncDeleteReceiptRejected: CaseReducer = (state, action) => {
  state.loadingState.delete.loading = false;
  state.loadingState.delete.error = true;
  state.loadingState.delete.errorMsg = action.payload.data;
  console.log('fail');
};

export default asyncDeleteReceipt;
export {
  asyncDeleteReceiptPending,
  asyncDeleteReceiptFulfilled,
  asyncDeleteReceiptRejected,
};
