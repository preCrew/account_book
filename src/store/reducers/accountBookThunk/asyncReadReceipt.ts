import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  where,
} from 'firebase/firestore';
import { auth, db } from 'firebaseConfig';
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
    // 로그인된 상태라면

    // // 문서의 경로 설정
    // const docu = doc(
    //   db,
    //   email,
    //   'receipts',
    //   'years',
    //   yearMonth.year.toString(),
    //   'months',
    //   yearMonth.month.toString(),
    // );
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
    const result: any[] = [];
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
  state.loadingState.loading = true;
  state.loadingState.success = false;
};

const asyncReadReceiptFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;
  state.receipts = action.payload.data;
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
