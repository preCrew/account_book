import { TLoadDate } from 'store/accoutBook-Slice';

export const dateGenerator = (beforeMonth: number) => {
  const nowDate = new Date();
  const monthYearArr: TLoadDate[] = [];

  for (let i = 0; i < beforeMonth; i++) {
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;

    monthYearArr.push({ year, month });

    nowDate.setMonth(nowDate.getMonth() - 1);
  }
  return monthYearArr;
};
