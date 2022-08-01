/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import {
  addReceiptAction,
  changeLoadMonthAction,
  deleteReceiptAction,
  TLoadDate,
  TReceipt,
} from 'store/accoutBook-Slice';
import { useAppDispatch } from 'store/store';

const useAccountBook = () => {
  const dispatch = useAppDispatch();

  const addReceipt = useCallback((receipt: TReceipt) => {
    dispatch(addReceiptAction(receipt));
  }, []);
  const deleteReceipt = useCallback((id: number) => {
    dispatch(deleteReceiptAction(id));
  }, []);
  const changeLoadMonth = useCallback((loadDate: TLoadDate) => {
    dispatch(changeLoadMonthAction(loadDate));
  }, []);

  return { addReceipt, deleteReceipt, changeLoadMonth };
};

export default useAccountBook;
