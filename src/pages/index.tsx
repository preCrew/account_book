import MonthSelector from 'components/Common/MonthSelector';
import PayList from 'components/PayList/';
import Profile from 'components/Profile';
import { useAppSelector } from 'store/store';

const Home = () => {
  const { receipts } = useAppSelector(state => state.accountBook);

  return (
    <>
      <Profile />
      <MonthSelector />
      <PayList receiptData={receipts} />
    </>
  );
};

export default Home;
