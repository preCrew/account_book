import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { RootState } from 'store/store';
import { getDate } from 'utils/dateUtils';
import { changeFirstDateAction, TReceipt } from '../accoutBook-Slice';

const asyncCreateReceipt = createAsyncThunk(
  'ReceiptSlice/asyncCreateReceipt',
  async (receipt: TReceipt, api) => {
    const firstDate = (api.getState() as RootState).accountBook.firstDate;
    const email = (api.getState() as RootState).user.email;
    const uid = (api.getState() as RootState).user.uid;
    const isLogin = (api.getState() as RootState).user.isLogin;

    // 로그인된 상태가 아닌데 생성하려고 시도하는경우
    if (!isLogin) {
      api.rejectWithValue({ status: 400, data: '로그인이 필요합니다.' });
    }
    // 로그인된 상태라면
    const date = getDate(receipt.timeDate);
    const timeStamp = Timestamp.now().seconds;

    const data = {
      ...receipt,
      uid: uid,
      id: timeStamp,
    };

    // console.log(data);
    try {
      // 데이터를 씀
      await setDoc(doc(db, 'receipts', timeStamp.toString()), data);

      const response = await getDoc(doc(db, 'receipts', timeStamp.toString()));
      if (response.exists()) {
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

        return api.fulfillWithValue({ status: 201, data });
      }
    } catch (e) {
      return api.rejectWithValue({ status: 400, data: '생성 실패' });
    }
  },
);

const asyncCreateReceiptPending: CaseReducer = (state, action) => {
  state.loadingState.create.loading = true;
  state.loadingState.create.success = false;
  state.loadingState.create.error = false;
  state.loadingState.create.errorMsg = null;
};

const asyncCreateReceiptFulfilled: CaseReducer = (state, action) => {
  // state.loadingState.create.loading = false;
  // state.loadingState.create.success = true;
  state.receipts.push(action.payload.data);
};

const asyncCreateReceiptRejected: CaseReducer = (state, action) => {
  state.loadingState.create.loading = false;
  state.loadingState.create.error = true;
  state.loadingState.create.errorMsg = action.payload.data;
};

export default asyncCreateReceipt;
export {
  asyncCreateReceiptPending,
  asyncCreateReceiptFulfilled,
  asyncCreateReceiptRejected,
};
