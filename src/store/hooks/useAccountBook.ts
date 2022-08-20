/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import asyncCreateReceipt from 'store/reducers/accountBookThunk/asyncCreateReceiptk';
import asyncDeleteReceipt from 'store/reducers/accountBookThunk/asyncDeleteReceipt';
import asyncReadReceipt from 'store/reducers/accountBookThunk/asyncReadReceipt';
import asyncUpdateReceipt, {
  TUpdateReceiptData,
} from 'store/reducers/accountBookThunk/asyncUpdateReceipt';
import {
  changeFirstDateAction,
  changeSelectDateAction,
  changeSelectDateOneMonthAction,
  changeAmountAction,
  TReceipt,
  TDateTime,
} from 'store/reducers/accoutBook-Slice';
import { TYearMonth } from 'store/reducers/reducerCommonTypes';
import { useAppDispatch, useAppSelector } from 'store/store';

const useAccountBook = () => {
  const dispatch = useAppDispatch();
  const selectDate = useAppSelector(state => state.accountBook.selectDate);
  const seleceDateReceipts = useAppSelector(state =>
    state.accountBook.receipts.filter(
      receipt =>
        receipt.timeDate.date === selectDate.date &&
        receipt.timeDate.month === selectDate.month &&
        receipt.timeDate.year === selectDate.year,
    ),
  );

  console.log('useAccountBook');
  const seleceDateReceiptsSum = () => {
    if (seleceDateReceipts.length === 0) {
      return '';
    }
    return seleceDateReceipts
      .map(receipt => receipt.income || receipt.spending)
      .reduce((sum, cur) => (sum! += cur!)!);
  };

  const changeSelectDate = useCallback((loadDate: Partial<TDateTime>) => {
    dispatch(changeSelectDateAction({ ...selectDate, ...loadDate }));
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
  const updateReceipt = (id: number, changeReceipt: TReceipt) => {
    dispatch(asyncUpdateReceipt({ id, receiptNew: changeReceipt }));
  };

  return {
    seleceDateReceipts,
    changeSelectDate,
    changeFirstDate,
    changeSelectDateOneMonth,
    changeAmount,
    addReceipt,
    readReceipts,
    deleteReceipt,
    updateReceipt,
    seleceDateReceiptsSum,
  };
};

export default useAccountBook;
