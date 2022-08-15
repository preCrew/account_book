/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import asyncCreateReceipt from 'store/reducers/accountBookThunk/asyncCreateReceiptk';
import asyncDeleteReceipt from 'store/reducers/accountBookThunk/asyncDeleteReceipt';
import asyncReadReceipt from 'store/reducers/accountBookThunk/asyncReadReceipt';
import {
  changeFirstDateAction,
  changeSelectDateAction,
  changeSelectDateOneMonthAction,
  changeAmountAction,
  TReceipt,
  TDateTime,
} from 'store/reducers/accoutBook-Slice';
import { TYearMonth } from 'store/reducers/reducerCommonTypes';
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
  const readReceipts = (yearMonth: TYearMonth) => {
    dispatch(asyncReadReceipt(yearMonth));
  };
  const deleteReceipt = (id: number) => {
    dispatch(asyncDeleteReceipt(id));
  };

  return {
    changeSelectDate,
    changeFirstDate,
    changeSelectDateOneMonth,
    changeAmount,
    addReceipt,
    readReceipts,
    deleteReceipt,
  };
};

export default useAccountBook;
