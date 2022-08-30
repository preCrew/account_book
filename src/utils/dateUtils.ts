import { TDateTime } from 'store/reducers/accoutBook-Slice';

export const dateGenerator = (inputDate: Date, firstDate: Date) => {
  const nowDate = new Date(
    `${inputDate.getFullYear()}-${inputDate.getMonth() + 1}-1`,
  );

  const dates: TDateTime[] = [];
  // 월이 0 ~ 11까지므로 이를 보정하기위해 1달을 빼줌.
  firstDate.setMonth(firstDate.getMonth() - 1);

  while (nowDate.getTime() >= firstDate.getTime()) {
    dates.push({
      year: nowDate.getFullYear(),
      month: nowDate.getMonth() + 1,
      date: 0,
      hours: 0,
      minutes: 0,
    });
    nowDate.setMonth(nowDate.getMonth() - 1);
  }
  console.log(dates);
  return dates;
};

export const getDate = (date: TDateTime) => {
  return new Date(date.year, date.month, date.date, date.hours, date.minutes);
};
