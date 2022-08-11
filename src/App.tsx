import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Common/Layout/Layout';

import Home from 'pages/index';
import CalendarPage from 'pages/CalendarPage';
import Mypage from 'pages/MyPage';

import useAccountBook from 'store/hooks/useAccountBook';

import { auth } from 'firebaseConfig';
import useUser from 'store/hooks/useUser';

const App = () => {
  console.log(auth.currentUser);
  const { changeSelectDate } = useAccountBook();
  const { loginUser, createUser, logoutUser } = useUser();

  useEffect(() => {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;

    changeSelectDate({ year, month });
  }, []);

  const handle = () => {
    loginUser('google');
  };
  const handle2 = () => {
    logoutUser();
  };
  const handle3 = async () => {
    createUser('song96101ssffffff2303@sbs.ser', '124434');
  };
  const handle4 = async () => {
    loginUser('idpw', {
      email: 'song96101ssffffff2303@sbs.ser',
      password: '124434',
    });
  };
  return (
    <>
      <Layout>
        <button onClick={handle}>google</button>
        <button onClick={handle2}>logout</button>
        <button onClick={handle3}>signUp</button>
        <button onClick={handle4}>login</button>
        {/* <Routes>
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
        </Routes> */}
      </Layout>
    </>
  );
};
export default App;
