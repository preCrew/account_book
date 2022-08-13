import { CaseReducer, createAsyncThunk } from '@reduxjs/toolkit';
import {
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from 'firebaseConfig';
import { RootState } from 'store/store';
import { getDate } from 'utils/dateUtils';
import { changeFirstDateAction, TReceipt } from '../accoutBook-Slice';

const asyncCreateReceipt = createAsyncThunk(
  'ReceiptSlice/asyncCreateReceipt',
  async (receipt: TReceipt, api) => {
    const { accountBook: state } = api.getState() as RootState;

    auth.onAuthStateChanged(async user => {
      if (user && user.email) {
        const date = getDate(receipt.timeDate);
        const timeStamp = Timestamp.now().seconds;

        const docu = doc(
          db,
          user.email,
          'receipts',
          'years',
          date.getFullYear().toString(),
          'months',
          date.getMonth().toString(),
        );

        const makeReceipt: TReceipt = {
          ...receipt,
          id: timeStamp,
        };

        // 문서가 존재하는지 여부
        const isExistsDoc = (await getDoc(docu)).exists();
        isExistsDoc
          ? // 업데이트 해줌
            await updateDoc(docu, {
              lists: arrayUnion({ ...makeReceipt }),
            })
          : // 새로 생성해줌
            await setDoc(docu, {
              lists: arrayUnion({ ...makeReceipt }),
            });

        // 방금 추가한게 이전 처음 날짜보다 앞선날자면 첫날짜를 업데이트해줌
        if (getDate(state.firstDate) > getDate(receipt.timeDate)) {
          const docuFirstDate = doc(db, user.email, 'date');
          // 서버값도 업데이트
          setDoc(docuFirstDate, {
            firstDate: date,
          });
          // 클라이언트값도 업데이트
          api.dispatch(changeFirstDateAction(receipt.timeDate));
        }
      }
    });
  },
);

const asyncCreateReceiptPending: CaseReducer = (state, action) => {
  state.loadingState.loading = true;
};

const asyncCreateReceiptFulfilled: CaseReducer = (state, action) => {
  state.loadingState.loading = false;
  state.loadingState.success = true;
};

const asyncCreateReceiptRejected: CaseReducer = state => {
  state.loadingState.loading = false;
  state.loadingState.errorMsg = 'todtjd';
};

export default asyncCreateReceipt;
export {
  asyncCreateReceiptPending,
  asyncCreateReceiptFulfilled,
  asyncCreateReceiptRejected,
};
