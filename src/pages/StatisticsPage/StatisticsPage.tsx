import './StatisticsPage.style.ts';
import ApexChart, { Props } from 'react-apexcharts';
import { useAppSelector } from '../../store/store';
import Header from '../../components/Common/Layout/Header';

const StatisticsPage: React.FC<Props> = () => {
  const spending: number[] = [];
  const receipts = useAppSelector(state => state.accountBook.receipts);
  const categories: string[] = [];

  const items: {
    [idx: string]: number[];
  } = {
    식비: [10000, 21124, 123123, 1223123, 123, 123, 3123],
    교통: [10000],
  };

  receipts.forEach(receipt => {
    receipt.spending && items[receipt.category]
      ? items[receipt.category].push(receipt.spending)
      : (items[receipt.category] = [receipt.spending as number]);
  });
  const getSum = (arr: number[]) => arr.reduce((sum, cur) => (sum += cur));

  // eslint-disable-next-line array-callback-return
  Object.keys(items).map(key => {
    categories.push(key);
    const sum = getSum(items[key]);
    spending.push(Math.abs(sum));
  });

  const options = {
    labels: categories,
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
  };

  return (
    <>
      <Header title="Statistics"></Header>
      <ApexChart
        type="donut"
        options={options}
        series={spending}
        height={500}
      />
    </>
  );
};

export default StatisticsPage;
