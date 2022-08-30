import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type TModalTypes = 'receipt' | 'receipts' | 'monthSelect' | 'profile';

export type TModal = {
  [key in TModalTypes]: {
    isOpen: boolean;
    isUnmount: boolean;
  };
};

const initiaModalState: TModal = {
  receipt: {
    isOpen: false,
    isUnmount: false,
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
  },
});

export const { changeModalMount, changeModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
