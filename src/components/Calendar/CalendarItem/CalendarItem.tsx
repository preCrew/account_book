import { useAppSelector } from 'store/store';
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
    const receipts = state.accountBook.receipts.find(
      receipt =>
        receipt.timeDate?.day === date && receipt.timeDate.month === month,
    );
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
