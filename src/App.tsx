import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Common/Layout/Layout';

import Home from 'pages/index';
import CalendarPage from 'pages/CalendarPage';
import Mypage from 'pages/MyPage';

import useAccountBook from 'store/hooks/useAccountBook';
import { getUsers, googleLogin, logout } from './firebase/firebase';

const App = () => {
  const { changeSelectDate } = useAccountBook();

  useEffect(() => {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;

    changeSelectDate({ year, month });
  }, []);

  const handle = async () => {
    const a = await getUsers();
    console.log(a);
    googleLogin();
  };
  const handle2 = () => {
    logout();
    console.log('logout');
  };
  return (
    <>
      <button onClick={handle}>click</button>
      <button onClick={handle2}>click2</button>
      {/* <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/statistics"
            element={<></>}
          />
          <Route
            path="/calendar"
            element={<CalendarPage />}
          />
          <Route
            path="/mypage"
            element={<Mypage />}
          />
        </Routes>
      </Layout> */}
    </>
  );
};
export default App;
