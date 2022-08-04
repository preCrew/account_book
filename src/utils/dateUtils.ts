import { TMonthYear } from 'components/Common/Button/SelectDateButton/SelectDateButton';

export const dateGenerator = (beforeMonth: number) => {
  const nowDate = new Date();
  const monthYearArr: TMonthYear[] = [];

  for (let i = 0; i < beforeMonth; i++) {
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;

    monthYearArr.push({ year, month });

    nowDate.setMonth(nowDate.getMonth() - 1);
  }
  return monthYearArr;
};
