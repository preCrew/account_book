import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 서버에서 불러올 년도, 월
export interface TLoadDate {
  month: number;
  year: number;
}
// 영수증 내역의 시간
interface TReceipTimeDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}
// 영수증 내역
export interface TReceipt {
  id: number;
  category: string; // 카테고리
  account: string; //거래처
  timeDate: TReceipTimeDate;
  memo: string; // 메모
  paymentMethod: string; // 지불방법
  isExcept?: boolean; // 제외여부
}

interface TAccountBook {
  receipts: TReceipt[];
  income: number; //소득
  spending: number; // 지출
  loadDate: TLoadDate;
}

const initialAccountBookState: TAccountBook = {
  receipts: [],
  income: 0,
  spending: 0,
  loadDate: {
    month: 1,
    year: 2022,
  },
};

const accountBookSlice = createSlice({
  name: 'accountBookSlice',
  initialState: initialAccountBookState,
  reducers: {
    addReceiptAction(state: TAccountBook, action: PayloadAction<TReceipt>) {
      state.receipts.concat(action.payload);
    },
    deleteReceiptAction(state: TAccountBook, action: PayloadAction<number>) {
      state.receipts.filter(receipt => receipt.id !== action.payload);
    },
    // 서버에서 불러올 월년을 변경
    changeLoadMonthAction(
      state: TAccountBook,
      action: PayloadAction<TLoadDate>,
    ) {
      state.loadDate = action.payload;
    },
  },
});

export const { addReceiptAction, deleteReceiptAction, changeLoadMonthAction } =
  accountBookSlice.actions;
export default accountBookSlice.reducer;
