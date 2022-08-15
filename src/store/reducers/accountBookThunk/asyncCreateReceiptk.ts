import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { RootState } from 'store/store';
import { getDate } from 'utils/dateUtils';
import { changeFirstDateAction, TReceipt } from '../accoutBook-Slice';
import asyncReadReceipt from './asyncReadReceipt';

const asyncCreateReceipt = createAsyncThunk(
  'ReceiptSlice/asyncCreateReceipt',
  async (receipt: TReceipt, api) => {
    const { firstDate } = (api.getState() as RootState).accountBook;
    const { email, uid, isLogin } = (api.getState() as RootState).user;

    // 로그인된 상태가 아닌데 생성하려고 시도하는경우
    if (!isLogin) {
      api.rejectWithValue({ status: 400, data: '로그인이 필요합니다.' });
    }
    // 로그인된 상태라면
    const date = getDate(receipt.timeDate);
    const timeStamp = Timestamp.now().seconds;

    const response = await addDoc(collection(db, 'receipts'), {
      ...receipt,
      uid: uid,
      id: timeStamp,
    });

    // 성공적으로 추가했다면
    if (response.id) {
      // 방금 추가한게 이전 처음 날짜보다 앞선날자면 첫날짜를 업데이트해줌
      if (getDate(firstDate) > getDate(receipt.timeDate)) {
        const docuFirstDate = doc(db, email, 'date');
        // 서버값도 업데이트
        setDoc(docuFirstDate, {
          firstDate: date,
        });
        // 클라이언트값도 업데이트
        api.dispatch(changeFirstDateAction(receipt.timeDate));
      }

      // 업데이트된 최신정보를 받아옴
      api.dispatch(
        asyncReadReceipt({
          year: date.getFullYear(),
          month: date.getMonth(),
        }),
      );
      return { status: 201, data: '생성 성공' };
    } else {
      return api.rejectWithValue({ status: 400, data: '생성 실패' });
    }
  },
);

const asyncCreateReceiptPending: CaseReducer = (state, action) => {
  state.loadingState.loading = true;
};

const asyncCreateReceiptFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;
};

const asyncCreateReceiptRejected: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  console.log(action);
  state.loadingState.errorMsg = action.payload.data;
};

export default asyncCreateReceipt;
export {
  asyncCreateReceiptPending,
  asyncCreateReceiptFulfilled,
  asyncCreateReceiptRejected,
};
