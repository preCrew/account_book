import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 서버에서 불러올 년도, 월
export interface TYearMonth {
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
  income: number; // 수입
  spending: number; //지출
  memo: string; // 메모
  paymentMethod: string; // 지불방법
  isExcept?: boolean; // 제외여부
}

interface TAccountBook {
  receipts: TReceipt[]; // 영수증들
  selectDate: TYearMonth; // 선택한 년, 월
  firstDate: TYearMonth; // 가계부에 등록된 첫번쨰 영수증의 년, 월
  totalIncome: number; // 선택한 달의 총 수입
  totalSpending: number; // 선택한 달의 총 지출
  amount: number; // 선택한 달의 기준금액
}

const initialAccountBookState: TAccountBook = {
  receipts: [],
  selectDate: {
    month: 1,
    year: 2022,
  },
  firstDate: {
    month: 1,
    year: 2020,
  },
  totalIncome: 0,
  totalSpending: 0,
  amount: 0,
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
    changeSelectDateOneMonthAction(
      state: TAccountBook,
      action: PayloadAction<1 | -1>,
    ) {
      const sum = state.selectDate.month + action.payload;
      if (sum === 13) {
        state.selectDate.year += 1;
        state.selectDate.month = 1;
      } else if (sum === 0) {
        state.selectDate.year -= 1;
        state.selectDate.month = 12;
      } else {
        state.selectDate.month += action.payload;
      }
    },
    // 서버에서 불러올 월년을 변경
    changeSelectDateAction(
      state: TAccountBook,
      action: PayloadAction<TYearMonth>,
    ) {
      state.selectDate = action.payload;
    },
    changeFirstDateAction(
      state: TAccountBook,
      action: PayloadAction<TYearMonth>,
    ) {
      state.firstDate = action.payload;
    },
    changeAmountAction(state: TAccountBook, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
  },
});

export const {
  addReceiptAction,
  deleteReceiptAction,
  changeSelectDateAction,
  changeFirstDateAction,
  changeSelectDateOneMonthAction,
  changeAmountAction,
} = accountBookSlice.actions;
export default accountBookSlice.reducer;
