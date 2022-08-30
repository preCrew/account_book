import React, { useMemo } from 'react';

import Button from 'components/Common/Button';
import Table, { TTableColumns, TTableData } from 'components/Common/Table';

import { calendarGenerator } from 'utils/calendarUtils';

import { CalendarS } from './Calendar.style';
import CalendarItem from './CalendarItem';

interface CalendarProps {
  year: number;
  month: number;
  handleClickCalendarDate: (date: number) => void;
}

const titles = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = ({ year, month, handleClickCalendarDate }: CalendarProps) => {
  console.log('calendar rendered', year, month);

  // 캘린더 아이템을 만들어주는 함수
  const calendar = useMemo(() => {
    const datas = calendarGenerator(year, month);
    const components: TTableData[] = [];

    // 주 반복
    datas.forEach((week, idx) => {
      const weeks: TTableColumns[] = [];

      // 일 반복
      week.forEach((date, idx) => {
        // date -> 배열 한줄에서 출력할 날짜가 있다면 true 아니면 false
        weeks.push({
          key: date ? `y_${month}_${date}` : `null${idx}`,
          render: date ? (
            <Button
              onClick={() => {
                console.log('!');
                handleClickCalendarDate(date);
              }}
            >
              <CalendarItem
                year={year}
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
  }, [handleClickCalendarDate, month, year]);

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

export default React.memo(Calendar);
