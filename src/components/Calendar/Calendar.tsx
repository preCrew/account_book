import Table, { TTableColumns, TTableData } from 'components/Common/Table';
import React, { useCallback, useMemo } from 'react';
import { calendarGenerator } from 'utils/calendarUtils';

import { CalendarS } from './Calendar.style';
import CalendarItem from './CalendarItem';

interface CalendarProps {
  year: number;
  month: number;
}

const data: TTableData[] = [
  {
    id: '첫번째',
    columns: [
      {
        key: '1',
        render: <div>111</div>,
      },
      {
        key: '2',
        render: <div>2222</div>,
      },
    ],
  },
  {
    id: '2',
    columns: [
      {
        key: '4',
        render: <div>444</div>,
      },
      {
        key: '5',
        render: <div>555</div>,
      },
    ],
  },
];
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
          render: date ? <CalendarItem date={date} /> : <span />,
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

  // const dsf: TTableData[] = [{}];

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
