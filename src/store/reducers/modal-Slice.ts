import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type TModalTypes = 'receipt' | 'receipts' | 'monthSelect' | 'profile';

export type TModal = {
  [key in TModalTypes]: {
    isOpen: boolean;
    isUnmount: boolean;
  };
};
interface TModal2 {
  receipt: {
    isOpen: boolean;
    isUnmount: boolean;
    isUpdate: boolean;
    isNew: boolean;
  };
}

const initiaModalState: TModal & TModal2 = {
  receipt: {
    isOpen: false,
    isUnmount: false,
    isUpdate: false,
    isNew: false,
  },
  receipts: {
    isOpen: false,
    isUnmount: false,
  },
  monthSelect: {
    isOpen: false,
    isUnmount: false,
  },
  profile: {
    isOpen: false,
    isUnmount: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initiaModalState,
  reducers: {
    changeModalOpen(
      state: TModal,
      action: PayloadAction<{ modal: TModalTypes; state: boolean }>,
    ) {
      state[action.payload.modal].isOpen = action.payload.state;
    },
    changeModalMount(
      state: TModal,
      action: PayloadAction<{ modal: TModalTypes; state: boolean }>,
    ) {
      state[action.payload.modal].isUnmount = action.payload.state;
    },
    changeModalUpdate(
      state: TModal & TModal2,
      action: PayloadAction<{ state: boolean }>,
    ) {
      state.receipt.isUpdate = action.payload.state;
    },
    changeModalNew(
      state: TModal & TModal2,
      action: PayloadAction<{ state: boolean }>,
    ) {
      state.receipt.isNew = action.payload.state;
    },
  },
});

export const {
  changeModalMount,
  changeModalOpen,
  changeModalUpdate,
  changeModalNew,
} = modalSlice.actions;
export default modalSlice.reducer;
