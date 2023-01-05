import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type TModalTypes = 'receipt' | 'receipts' | 'monthSelect' | 'profile';

export type TModal = {
  [key in TModalTypes]: {
    isOpen: boolean;
    isUnmount: boolean;
    isUpdate: boolean;
    // isNew: boolean;
  };
};
// interface TModal2 {
//   receipt: {
//     isOpen: boolean;
//     isUnmount: boolean;
//     isUpdate: boolean;
//     isNew: boolean;
//   };
// }

const initiaModalState: TModal = {
  receipt: {
    isOpen: false,
    isUnmount: false,
    isUpdate: false,
    // isNew: false,
  },
  receipts: {
    isOpen: false,
    isUnmount: false,
    isUpdate: false,
    // isNew: false,
  },
  monthSelect: {
    isOpen: false,
    isUnmount: false,
    isUpdate: false,
    // isNew: false,
  },
  profile: {
    isOpen: false,
    isUnmount: false,
    isUpdate: false,
    // isNew: false,
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
      state: TModal,
      action: PayloadAction<{ modal: TModalTypes; state: boolean }>,
    ) {
      state[action.payload.modal].isUpdate = action.payload.state;
    },
    // },
    // changeModalNew(
    //   state: TModal,
    //   action: PayloadAction<{ modal: TModalTypes; state: boolean }>,
    // ) {
    //   state[action.payload.modal].isNew = action.payload.state;
    // },
  },
});

export const {
  changeModalMount,
  changeModalOpen,
  changeModalUpdate,
  // changeModalNew,
} = modalSlice.actions;
export default modalSlice.reducer;
