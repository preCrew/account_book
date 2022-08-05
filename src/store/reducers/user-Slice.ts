import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import badAvartar1Img from '../../assets/images/bad.jpg';
import sosoAvartar1Img from '../../assets/images/soso.jpg';
import goodAvartar1Img from '../../assets/images/good.jpg';

//로그인 후 불러올 데이터
interface Tme {
  id: number;
  email: string;
}

interface TUser {
  loginLoading: boolean;
  loginDone: boolean;
  loginError: null | string;
  me: Tme | null;
  avatar: {
    bad: string;
    good: string;
    soso: string;
  };
  userInfo: {
    budget: number;
    totalExpense: number;
  };
}

const initialUserState: TUser = {
  loginLoading: false,
  loginDone: false,
  loginError: null,
  me: null,
  avatar: {
    bad: badAvartar1Img,
    soso: sosoAvartar1Img,
    good: goodAvartar1Img,
  },
  userInfo: {
    budget: 0,
    totalExpense: 0,
  },
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  reducers: {
    // addReceiptAction(state: TAccountBook, action: PayloadAction<TReceipt>) {
    //   state.receipts.concat(action.payload);
    // },
  },
});

// export const { addReceiptAction } = userSlice.actions;
export default userSlice.reducer;
