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
  selectDate: TLoadDate; // 선택한 년, 월
  firstDate: TLoadDate; // 가계부에 등록된 첫번쨰 영수증의 년, 월
}

const initialAccountBookState: TAccountBook = {
  receipts: [],
  income: 0,
  spending: 0,
  selectDate: {
    month: 1,
    year: 2022,
  },
  firstDate: {
    month: 1,
    year: 2020,
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
      action: PayloadAction<TLoadDate>,
    ) {
      state.selectDate = action.payload;
    },
    changeFirstDateAction(
      state: TAccountBook,
      action: PayloadAction<TLoadDate>,
    ) {
      state.firstDate = action.payload;
    },
  },
});

export const {
  addReceiptAction,
  deleteReceiptAction,
  changeSelectDateAction,
  changeFirstDateAction,
  changeSelectDateOneMonthAction,
} = accountBookSlice.actions;
export default accountBookSlice.reducer;
