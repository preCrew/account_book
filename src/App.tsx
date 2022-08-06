import Layout from 'components/Common/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CalanderPage from 'pages/CalanderPage';
import useAccountBook from 'store/hooks/useAccountBook';
import { useEffect } from 'react';
import Mypage from 'pages/MyPage';
import Profile from 'components/Profile';

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
        <Profile />
        <>
          <Routes>
            <Route
              path="/home"
              element={<></>}
            />
          </Routes>
        </>
        <Routes>
          <Route
            path="/home"
            element={<></>}
          />
        </Routes>
        <Route
          path="/calander"
          element={<CalanderPage />}
        />
        <Routes>
          <Route
            path="/settings"
            element={<Mypage />}
          />
        </Routes>
        <>
          <Routes>
            <Route
              path="/settings"
              element={<Mypage />}
            />
          </Routes>
        </>
      </Layout>
    </>
  );
};
export default App;
