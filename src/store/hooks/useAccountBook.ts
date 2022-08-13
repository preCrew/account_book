/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import asyncCreateReceipt from 'store/reducers/accountBookThunk/asyncCreateReceiptk';
import {
  changeFirstDateAction,
  changeSelectDateAction,
  changeSelectDateOneMonthAction,
  changeAmountAction,
  TReceipt,
  TDateTime,
} from 'store/reducers/accoutBook-Slice';
import { useAppDispatch } from 'store/store';

const useAccountBook = () => {
  const dispatch = useAppDispatch();

  const changeSelectDate = useCallback((loadDate: TDateTime) => {
    dispatch(changeSelectDateAction(loadDate));
  }, []);

  const changeFirstDate = useCallback((loadDate: TDateTime) => {
    dispatch(changeFirstDateAction(loadDate));
  }, []);

  const changeSelectDateOneMonth = useCallback((month: 1 | -1) => {
    dispatch(changeSelectDateOneMonthAction(month));
  }, []);
  const changeAmount = useCallback((amount: number) => {
    dispatch(changeAmountAction(amount));
  }, []);

  const addReceipt = (receipt: TReceipt) => {
    dispatch(asyncCreateReceipt(receipt));
  };

  return {
    changeSelectDate,
    changeFirstDate,
    changeSelectDateOneMonth,
    changeAmount,
    addReceipt,
  };
};

export default useAccountBook;
