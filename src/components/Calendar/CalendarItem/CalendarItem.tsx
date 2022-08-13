import { useAppSelector } from 'store/store';
import { getDate } from 'utils/dateUtils';
import {
  CalendarDateS,
  CalendarIncomeS,
  CalendarItemS,
  CalendarSpendingS,
} from './CalendarItem.style';

interface CalendarItemProps {
  month: number;
  date: number;
}

const CalendarItem = ({ month, date }: CalendarItemProps) => {
  const { income, spending } = useAppSelector(state => {
    const receipts = state.accountBook.receipts.find(receipt => {
      const newDate = getDate(receipt.timeDate);
      return newDate.getDate() === date && newDate.getMonth() === month;
    });
    return {
      income: receipts?.income,
      spending: receipts?.spending,
    };
  });

  return (
    <>
      <CalendarItemS>
        <CalendarDateS>{date}</CalendarDateS>
        <CalendarIncomeS>
          {income && `+${income?.toLocaleString('ko-KR')}원`}
        </CalendarIncomeS>
        <CalendarSpendingS>
          {spending && `${spending.toLocaleString('ko-KR')}원`}
        </CalendarSpendingS>
      </CalendarItemS>
    </>
  );
};

export default CalendarItem;
