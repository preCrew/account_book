import { configureStore } from '@reduxjs/toolkit';
import accountBookReducer from './accoutBook-Slice';

export const store = configureStore({
  reducer: {
    accountBook: accountBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
