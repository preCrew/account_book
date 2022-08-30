import './StatisticsPage.style.ts';
import ApexChart, { Props } from 'react-apexcharts';
import { useAppSelector } from '../../store/store';
import Header from '../../components/Common/Layout/Header';
import { SelectData } from '../../components/Common/Modal/ModalComponents/AddReceiptModal/AddReceiptModal';

const StatisticsPage: React.FC<Props> = () => {
  let spending1 = 0,
    spending2 = 0,
    spending3 = 0,
    spending4 = 0,
    spending5 = 0,
    spending6 = 0,
    spending7 = 0,
    spending8 = 0,
    spending9 = 0,
    spending10 = 0;
  const accountBook = useAppSelector(state => state.accountBook);

  const category1 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[0],
  );

  for (let i = 0; i < category1.length; i++) {
    spending1 += Math.abs(category1[i].spending as number);
  }

  const category2 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[1],
  );

  for (let i = 0; i < category2.length; i++) {
    spending2 += Math.abs(category2[i].spending as number);
  }

  const category3 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[2],
  );

  for (let i = 0; i < category3.length; i++) {
    spending3 += Math.abs(category3[i].spending as number);
  }

  //4
  const category4 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[3],
  );

  for (let i = 0; i < category4.length; i++) {
    spending4 += Math.abs(category4[i].spending as number);
  }

  //5
  const category5 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[4],
  );

  for (let i = 0; i < category5.length; i++) {
    spending5 += Math.abs(category5[i].spending as number);
  }

  //6
  const category6 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[5],
  );

  for (let i = 0; i < category6.length; i++) {
    spending6 += Math.abs(category6[i].spending as number);
  }

  //7
  const category7 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[6],
  );

  for (let i = 0; i < category7.length; i++) {
    spending7 += Math.abs(category7[i].spending as number);
  }

  //8
  const category8 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[7],
  );

  for (let i = 0; i < category8.length; i++) {
    spending8 += Math.abs(category8[i].spending as number);
  }
  //9
  const category9 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[8],
  );

  for (let i = 0; i < category9.length; i++) {
    spending9 += Math.abs(category9[i].spending as number);
  }
  //10
  const category10 = accountBook.receipts.filter(
    receipt => receipt.category === SelectData.category[9],
  );

  for (let i = 0; i < category10.length; i++) {
    spending10 += Math.abs(category10[i].spending as number);
  }

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
    spending1,
    spending2,
    spending3,
    spending4,
    spending5,
    spending6,
    spending7,
    spending8,
    spending9,
    spending10,
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
