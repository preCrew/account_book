/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import {
  addReceiptAction,
  changeSelectDateAction,
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
  const changeSelectDate = useCallback((loadDate: TLoadDate) => {
    dispatch(changeSelectDateAction(loadDate));
  }, []);

  return { addReceipt, deleteReceipt, changeSelectDate };
};

export default useAccountBook;
