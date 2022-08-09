import Calendar from 'components/Calendar';
import MonthSelector from 'components/Common/MonthSelector';
import { useAppSelector } from 'store/store';
import './CalendarPage.style.ts';

interface CalendarPageProps {}

const CalendarPage = ({}: CalendarPageProps) => {
  const { year, month } = useAppSelector(state => state.accountBook.selectDate);

  return (
    <>
      <MonthSelector />
      <Calendar
        year={year}
        month={month}
      />
    </>
  );
};

export default CalendarPage;
