import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import badAvartar1Img from '../../assets/images/avatar/noname_bad.jpg';
import sosoAvartar1Img from '../../assets/images/avatar/noname_soso.jpg';
import goodAvartar1Img from '../../assets/images/avatar/noname_good.jpg';
import badAvartar2Img from '../../assets/images/avatar/rupee_bad.jpg';
import sosoAvartar2Img from '../../assets/images/avatar/rupee_soso.jpg';
import goodAvartar2Img from '../../assets/images/avatar/rupee_good.jpg';

//로그인 후 불러올 데이터
interface Tme {
  id: number;
  email: string;
}
interface TuserInfo {
  character: number | null;
  budget: number;
  totalExpense: number;
}

interface TUser {
  loginLoading: boolean;
  loginDone: boolean;
  loginError: null | string;
  me: Tme | null;
  avatar: {
    character1: {
      bad: string;
      soso: string;
      good: string;
    };
    character2: {
      bad: string;
      soso: string;
      good: string;
    };
  };
  userInfo: TuserInfo;
}

const initialUserState: TUser = {
  loginLoading: false,
  loginDone: false,
  loginError: null,
  me: null,
  avatar: {
    character1: {
      bad: badAvartar1Img,
      soso: sosoAvartar1Img,
      good: goodAvartar1Img,
    },
    character2: {
      bad: badAvartar2Img,
      soso: sosoAvartar2Img,
      good: goodAvartar2Img,
    },
  },
  userInfo: {
    character: null,
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
