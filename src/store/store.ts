import { configureStore } from '@reduxjs/toolkit';
import accountBookReducer from './accoutBook-Slice';
import modalReducer from './modal-Slice';

import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from './reduxStore';

export const store = configureStore({
  reducer: {
    accountBook: accountBookReducer,
    modal: modalReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
