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
import asyncReadReceipt from './asyncReadReceipt';

const asyncCreateReceipt = createAsyncThunk(
  'ReceiptSlice/asyncCreateReceipt',
  async (receipt: TReceipt, api) => {
    const { firstDate } = (api.getState() as RootState).accountBook;
    const { email } = (api.getState() as RootState).user;

    // 로그인된 상태가 아닌데 생성하려고 시도하는경우
    if (!email) {
      throw new Error('로그인이 필요합니다.');
    }
    // 로그인된 상태라면
    else {
      const date = getDate(receipt.timeDate);
      const timeStamp = Timestamp.now().seconds;

      // 문서의 경로 설정
      const docu = doc(
        db,
        email,
        'receipts',
        'years',
        date.getFullYear().toString(),
        'months',
        date.getMonth().toString(),
      );

      // 영수증 정보에 id 추가
      const makeReceipt: TReceipt = {
        ...receipt,
        id: timeStamp,
      };

      // 문서경로에 문서가 존재하는지 여부
      const isExistsDoc = (await getDoc(docu)).exists();
      isExistsDoc
        ? // 만약 문서가 하나라도 존재한다면 추가해줌
          await updateDoc(docu, {
            [date.getDate()]: arrayUnion({ ...makeReceipt }),
          })
        : // 문서가 존재하지 않는다면 해당 경로에 새로 생성해줌
          await setDoc(docu, {
            [date.getDate()]: [{ ...makeReceipt }],
          });

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
        asyncReadReceipt({ year: date.getFullYear(), month: date.getMonth() }),
      );
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
