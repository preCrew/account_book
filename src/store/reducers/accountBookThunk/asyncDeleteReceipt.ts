import { createAsyncThunk } from '@reduxjs/toolkit';
import { TReceipt } from '../accoutBook-Slice';

const asyncDeleteAccountBook = createAsyncThunk(
  'accountBookSlice/asyncDeleteAccountBook',
  async (accountBook: TReceipt) => {
    console.log(accountBook);
  },
);

export default asyncDeleteAccountBook;
