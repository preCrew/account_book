import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';

import accountBookReducer from './reducers/accoutBook-Slice';
import userReducer from './reducers/user-Slice';
import modalReducer from './reducers/modal-Slice';

export const store = configureStore({
  reducer: {
    accountBook: accountBookReducer,
    user: userReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
