import MonthSelector from 'components/Common/MonthSelector';
import PayList from 'components/PayList';
import Profile from 'components/Profile';

const Home = () => {
  return (
    <>
      <Profile />
      <MonthSelector />
      <PayList />
    </>
  );
};

export default Home;
