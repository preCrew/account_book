import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Common/Layout/Layout';

import Home from 'pages/index';
import CalendarPage from 'pages/CalendarPage';
import Mypage from 'pages/MyPage';
import StatisticsPage from 'pages/StatisticsPage';

import { auth } from 'firebaseConfig';
import useUser from 'store/hooks/useUser';
import useGetCurrentDate from 'hooks/useGetCurrentDate';

const App = () => {
  const { keepingLoginState, getUserInfo } = useUser();

  useEffect(() => {
    // 만약 로그인된 상태면
    auth.onAuthStateChanged(user => {
      if (user) {
        // userinfo 서버에서 불러옴
        getUserInfo();
        // 새로고침 or 페이지 이동돼도 로그인 유지
        keepingLoginState(user.email as string, user.uid as string);
        // 서버에서 내역 읽어옴
        //readReceipts({ year, month });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //현재 날짜 값
  useGetCurrentDate();
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/statistics"
            element={<StatisticsPage />}
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
      </Layout>
    </>
  );
};
export default App;
