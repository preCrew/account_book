import React from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from 'store/store';
import {
  CalendarDateS,
  CalendarIncomeS,
  CalendarItemS,
  CalendarSpendingS,
} from './CalendarItem.style';

interface CalendarItemProps {
  year: number;
  month: number;
  date: number;
}

const CalendarItem = ({ year, month, date }: CalendarItemProps) => {
  const { income, spending } = useAppSelector(state => {
    const dateReceipts = state.accountBook?.receipts.filter(
      receipt =>
        receipt.timeDate.date === date &&
        receipt.timeDate.month === month &&
        receipt.timeDate.year === year,
    );
    let income = 0;
    let spending = 0;
    if (dateReceipts) {
      dateReceipts.forEach(receipt => {
        if (receipt.income) {
          income += receipt.income;
        }
        if (receipt.spending) {
          spending += receipt.spending;
        }
      });
    }
    return { income, spending };
  }, shallowEqual);

  return (
    <>
      <CalendarItemS>
        <CalendarDateS>{date}</CalendarDateS>
        <CalendarIncomeS>
          {income !== 0 && `+${income?.toLocaleString('ko-KR')}원`}
        </CalendarIncomeS>
        <CalendarSpendingS>
          {spending !== 0 && `${spending?.toLocaleString('ko-KR')}원`}
        </CalendarSpendingS>
      </CalendarItemS>
    </>
  );
};

export default React.memo(CalendarItem);
