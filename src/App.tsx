import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Common/Layout/Layout';
import Profile from 'components/Profile';

import CalanderPage from 'pages/CalanderPage';
import Mypage from 'pages/MyPage';

import useAccountBook from 'store/hooks/useAccountBook';

const App = () => {
  const { changeSelectDate } = useAccountBook();

  useEffect(() => {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;

    changeSelectDate({ year, month });
  }, []);

  return (
    <>
      <Layout>
        {/* <Profile /> */}
        <Routes>
          <Route
            path="/home"
            element={<></>}
          />
          <Route
            path="/home"
            element={<></>}
          />
          <Route
            path="/calander"
            element={<CalanderPage />}
          />
          <Route
            path="/settings"
            element={<Mypage />}
          />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
