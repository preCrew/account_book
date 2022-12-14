import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import asyncCreateReceipt, {
  asyncCreateReceiptFulfilled,
  asyncCreateReceiptPending,
  asyncCreateReceiptRejected,
} from './accountBookThunk/asyncCreateReceiptk';
import asyncDeleteReceipt, {
  asyncDeleteReceiptFulfilled,
  asyncDeleteReceiptPending,
  asyncDeleteReceiptRejected,
} from './accountBookThunk/asyncDeleteReceipt';
import asyncReadReceipt, {
  asyncReadReceiptFulfilled,
  asyncReadReceiptPending,
  asyncReadReceiptRejected,
} from './accountBookThunk/asyncReadReceipt';
import asyncUpdateReceipt, {
  asyncUpdateReceiptFulfilled,
  asyncUpdateReceiptPending,
  asyncUpdateReceiptRejected,
} from './accountBookThunk/asyncUpdateReceipt';
import { TLoadingState } from './reducerCommonTypes';

// 서버에서 불러올 년도, 월
export interface TDateTime {
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
}

export interface TReceipt {
  id?: number;
  category: string; // 카테고리
  transactionBranch: string; //거래처
  timeDate: TDateTime;
  income?: number | null; // 수입
  spending?: number | null; //지출
  memo?: string; // 메모
  paymentMethod?: string; // 지불방법
  depositMethod?: string; //입금방법
  isExcept?: boolean; // 제외여부
}

// 영수증 내역
export interface TAccountBook {
  loadingState: {
    create: TLoadingState | Record<string, unknown>;
    delete: TLoadingState | Record<string, unknown>;
    read: TLoadingState | Record<string, unknown>;
    update: TLoadingState | Record<string, unknown>;
  };
  receipts: TReceipt[];
  selectId: number;
  selectDate: TDateTime; // 선택한 년, 월
  firstDate: TDateTime; // 가계부에 등록된 첫번쨰 영수증의 년, 월
  totalIncome: number; // 선택한 달의 총 수입
  totalSpending: number; // 선택한 달의 총 지출
  amount: number; // 선택한 달의 기준금액
}

const initialAccountBookState: TAccountBook = {
  loadingState: {
    create: {},
    delete: {},
    read: {},
    update: {},
  },
  receipts: [],
  selectDate: {
    year: 2022,
    month: 8,
    date: 1,
    hours: 0,
    minutes: 0,
  },
  selectId: 0,
  firstDate: {
    year: 2020,
    month: 1,
    date: 1,
    hours: 0,
    minutes: 0,
  },
  totalIncome: 0,
  totalSpending: 0,
  amount: 0,
};

const accountBookSlice = createSlice({
  name: 'accountBookSlice',
  initialState: initialAccountBookState,
  reducers: {
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
      action: PayloadAction<Partial<TDateTime>>,
    ) {
      state.selectDate = { ...state.selectDate, ...action.payload };
    },
    changeFirstDateAction(
      state: TAccountBook,
      action: PayloadAction<TDateTime>,
    ) {
      state.firstDate = action.payload;
    },
    changeAmountAction(state: TAccountBook, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
    changeSelectIdAction(state: TAccountBook, action: PayloadAction<number>) {
      state.selectId = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(asyncCreateReceipt.pending, asyncCreateReceiptPending);
    builder.addCase(asyncCreateReceipt.fulfilled, asyncCreateReceiptFulfilled);
    builder.addCase(asyncCreateReceipt.rejected, asyncCreateReceiptRejected);

    builder.addCase(asyncReadReceipt.pending, asyncReadReceiptPending);
    builder.addCase(asyncReadReceipt.fulfilled, asyncReadReceiptFulfilled);
    builder.addCase(asyncReadReceipt.rejected, asyncReadReceiptRejected);

    builder.addCase(asyncDeleteReceipt.pending, asyncDeleteReceiptPending);
    builder.addCase(asyncDeleteReceipt.fulfilled, asyncDeleteReceiptFulfilled);
    builder.addCase(asyncDeleteReceipt.rejected, asyncDeleteReceiptRejected);

    builder.addCase(asyncUpdateReceipt.pending, asyncUpdateReceiptPending);
    builder.addCase(asyncUpdateReceipt.fulfilled, asyncUpdateReceiptFulfilled);
    builder.addCase(asyncUpdateReceipt.rejected, asyncUpdateReceiptRejected);
  },
});

export const {
  changeSelectDateAction,
  changeFirstDateAction,
  changeSelectDateOneMonthAction,
  changeAmountAction,
  changeSelectIdAction,
} = accountBookSlice.actions;
export default accountBookSlice.reducer;
