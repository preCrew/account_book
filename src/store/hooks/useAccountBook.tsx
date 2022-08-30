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
  changeSelectIdAction,
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

  const changeSelectDate = useCallback(
    (loadDate: Partial<TDateTime>) => {
      dispatch(changeSelectDateAction(loadDate));
    },
    [dispatch],
  );

  const changeFirstDate = useCallback(
    (loadDate: TDateTime) => {
      dispatch(changeFirstDateAction(loadDate));
    },
    [dispatch],
  );

  const changeSelectDateOneMonth = useCallback(
    (month: 1 | -1) => {
      dispatch(changeSelectDateOneMonthAction(month));
    },
    [dispatch],
  );
  const changeAmount = useCallback(
    (amount: number) => {
      dispatch(changeAmountAction(amount));
    },
    [dispatch],
  );
  const changeSelectId = useCallback(
    (id: number) => {
      dispatch(changeSelectIdAction(id));
    },
    [dispatch],
  );

  const addReceipt = useCallback(
    (receipt: TReceipt) => {
      dispatch(asyncCreateReceipt(receipt));
    },
    [dispatch],
  );
  const readReceipts = useCallback(
    (yearMonth: TYearMonth) => {
      dispatch(asyncReadReceipt(yearMonth));
    },
    [dispatch],
  );
  const deleteReceipt = useCallback(
    (id: number) => {
      dispatch(asyncDeleteReceipt(id));
    },
    [dispatch],
  );
  const updateReceipt = useCallback(
    (id: number, changeReceipt: TReceipt) => {
      dispatch(asyncUpdateReceipt({ id, receiptNew: changeReceipt }));
    },
    [dispatch],
  );

  return {
    changeSelectDate,
    changeFirstDate,
    changeSelectDateOneMonth,
    changeAmount,
    changeSelectId,
    addReceipt,
    readReceipts,
    deleteReceipt,
    updateReceipt,
    seleceDateReceiptsSum,
  };
};

export default useAccountBook;
