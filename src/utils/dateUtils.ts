import { TLoadDate } from 'store/accoutBook-Slice';

export const dateGenerator = (nowDate: Date, firstDate: Date) => {
  const dates: TLoadDate[] = [];
  // 월이 0 ~ 11까지므로 이를 보정하기위해 1달을 빼줌.
  firstDate.setMonth(firstDate.getMonth() - 1);

  while (nowDate.getTime() >= firstDate.getTime()) {
    dates.push({
      year: nowDate.getFullYear(),
      month: nowDate.getMonth() + 1,
    });
    nowDate.setMonth(nowDate.getMonth() - 1);
  }

  return dates;
};
