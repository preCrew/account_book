import Button from 'components/Common/Button';
import MonthSelector from 'components/Common/MonthSelector';
import Table, { TTableColumns, TTableData } from 'components/Common/Table';
import React, { useMemo } from 'react';
import { calendarGenerator } from 'utils/calendarUtils';

import { CalendarS } from './Calendar.style';
import CalendarItem from './CalendarItem';

interface CalendarProps {
  year: number;
  month: number;
}

const titles = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = ({ year, month }: CalendarProps) => {
  const calendar = useMemo(() => {
    const datas = calendarGenerator(year, month);
    const components: TTableData[] = [];

    // 주 반복
    datas.forEach((week, idx) => {
      const weeks: TTableColumns[] = [];

      // 일 반복
      week.forEach((date, idx) => {
        weeks.push({
          key: date ? `y_${month}_${date}` : `null${idx}`,
          render: date ? (
            <Button
              onClick={() => {
                //TODO: receipt 모달 띄우기!!
                console.log(month, date);
              }}
            >
              <CalendarItem
                month={month}
                date={date}
              />
            </Button>
          ) : (
            <span />
          ),
        });
      });

      // 해당 주의 컴포넌트들
      const weekData: TTableData = {
        id: `w_$${month}${idx}`,
        columns: weeks,
      };
      components.push(weekData);
    });

    return components;
  }, [year, month]);

  return (
    <>
      <CalendarS>
        <Table
          headers={titles}
          rows={calendar}
        />
      </CalendarS>
    </>
  );
};

export default Calendar;
