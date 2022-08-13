import { createAsyncThunk } from '@reduxjs/toolkit';
import { TReceipt } from '../accoutBook-Slice';

const asyncCreateUser = createAsyncThunk(
  'userSlice/asyncCreateUser',
  async (accountBook: TReceipt) => {
    console.log(accountBook);
  },
);

export default asyncCreateUser;
