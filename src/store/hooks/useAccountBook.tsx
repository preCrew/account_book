import { useCallback } from 'react';
import asyncCreateReceipt from 'store/reducers/accountBookThunk/asyncCreateReceiptk';
import asyncDeleteReceipt from 'store/reducers/accountBookThunk/asyncDeleteReceipt';
import asyncReadReceipt from 'store/reducers/accountBookThunk/asyncReadReceipt';
import asyncUpdateReceipt from 'store/reducers/accountBookThunk/asyncUpdateReceipt';
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

  const seleceDateReceiptsSum = (seleceDateReceipts: TReceipt[]) => {
    if (seleceDateReceipts.length === 0) {
      return '';
    }
    return seleceDateReceipts
      .map(receipt => receipt.income || receipt.spending)
      .reduce((sum, cur) => ((sum as number) += cur as number));
  };

  const changeSelectDate = useCallback((loadDate: Partial<TDateTime>) => {
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

  const addReceipt = useCallback((receipt: TReceipt) => {
    dispatch(asyncCreateReceipt(receipt));
  }, []);
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
