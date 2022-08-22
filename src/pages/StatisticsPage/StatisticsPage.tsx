import './StatisticsPage.style.ts';
import ApexChart, { Props } from 'react-apexcharts';
import { useAppSelector } from '../../store/store';
import Header from '../../components/Common/Layout/Header';

interface StatisticsPageProps {}

const StatisticsPage: React.FC<Props> = () => {
  let spending1 = 0;
  const accountBook = useAppSelector(state => state.accountBook);

  const category1 = accountBook.receipts.filter(
    receipt => receipt.category === '놀았어',
  );

  //'놀았어'카테고리의 spending을 더한다
  for (let i = 0; i < category1.length; i++) {
    spending1 += Math.abs(category1[i].spending as number);
  }

  const options = {
    series: [50, 10, 10],
    labels: ['놀았어', '카테2', '카테3'],
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

  const series = [spending1, 15000, 2000];
  return (
    <>
      <Header title="Statistics"></Header>
      <ApexChart
        type="donut"
        options={options}
        series={series}
        height={500}
      />
    </>
  );
};

export default StatisticsPage;
