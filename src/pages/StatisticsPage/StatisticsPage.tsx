import './StatisticsPage.style.ts';
import ApexChart, { Props } from 'react-apexcharts';
import { useAppSelector } from '../../store/store';
import Header from '../../components/Common/Layout/Header';
import { SelectData } from '../../components/Common/Modal/ModalComponents/AddReceiptModal/AddReceiptModal';
import { TReceipt } from 'store/reducers/accoutBook-Slice';

const StatisticsPage: React.FC<Props> = () => {
  const spending: number[] = [];
  const accountBook = useAppSelector(state => state.accountBook);

  //지출 배열 초기화
  spending.length = 10;
  spending.fill(0);

  //category1
  const category1 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[0],
  );

  //category2
  const category2 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[1],
  );

  //category3
  const category3 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[2],
  );

  //category4
  const category4 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[3],
  );

  //category5
  const category5 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[4],
  );

  //category6
  const category6 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[5],
  );

  //category7
  const category7 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[6],
  );

  //category8
  const category8 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[7],
  );

  //category9
  const category9 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[8],
  );

  //category10
  const category10 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[9],
  );

  const catgory_check = (category: TReceipt[], num: number) => {
    for (let i = 0; i < category.length; i++) {
      spending[num] += Math.abs(category[i].spending as number);
    }
  };

  catgory_check(category1, 0);
  catgory_check(category2, 1);
  catgory_check(category3, 2);
  catgory_check(category4, 3);
  catgory_check(category5, 4);
  catgory_check(category6, 5);
  catgory_check(category7, 6);
  catgory_check(category8, 7);
  catgory_check(category9, 8);
  catgory_check(category10, 9);

  const options = {
    series: [50, 10, 10],
    labels: [
      SelectData.category[0],
      SelectData.category[1],
      SelectData.category[2],
      SelectData.category[3],
      SelectData.category[4],
      SelectData.category[5],
      SelectData.category[6],
      SelectData.category[7],
      SelectData.category[8],
      SelectData.category[9],
    ],
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

  const series = [
    spending[0],
    spending[1],
    spending[2],
    spending[3],
    spending[4],
    spending[5],
    spending[6],
    spending[7],
    spending[8],
    spending[9],
  ];
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
