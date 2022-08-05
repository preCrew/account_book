/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import {
  addReceiptAction,
  changeFirstDateAction,
  changeSelectDateAction,
  deleteReceiptAction,
  changeSelectDateOneMonthAction,
  TLoadDate,
  TReceipt,
  changeAmount,
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

  const changeFirstDate = useCallback((loadDate: TLoadDate) => {
    dispatch(changeFirstDateAction(loadDate));
  }, []);

  const changeSelectDateOneMonth = useCallback((month: 1 | -1) => {
    dispatch(changeSelectDateOneMonthAction(month));
  }, []);
  const changeAmount2 = useCallback((amount: number) => {
    console.log('changeAmount2 : ' + amount);
    dispatch(changeAmount(amount));
  }, []);

  return {
    addReceipt,
    deleteReceipt,
    changeSelectDate,
    changeFirstDate,
    changeSelectDateOneMonth,
    changeAmount2,
  };
};

export default useAccountBook;
