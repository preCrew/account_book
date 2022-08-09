export const calendarGenerator = (year: number, month: number) => {
  const { endDate, startDay } = getMonthInfo(year, month);
  const weekNumber = Math.ceil((startDay + endDate) / 7);
  const calendar: number[][] = [];

  let nowDate = 0;
  let nowDay = 0;

  for (let i = 0; i < weekNumber; i++) {
    const nowWeek = [];
    for (let j = 0; j < 7; j++) {
      if (startDay <= nowDay && nowDate < endDate) {
        nowDate++;
        nowWeek.push(nowDate);
      } else {
        nowWeek.push(0);
      }
      nowDay++;
    }
    calendar.push(nowWeek);
  }

  console.log(calendar);
  return calendar;
};

const getMonthInfo = (year: number, month: number) => {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0);

  const startDate = start.getDate();
  const startDay = start.getDay();
  const endDate = end.getDate();
  const endDay = end.getDay();

  return { startDate, endDate, startDay, endDay };
};
