import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Common/Layout/Layout';

import Home from 'pages/index';
import CalendarPage from 'pages/CalendarPage';
import Mypage from 'pages/MyPage';

import useAccountBook from 'store/hooks/useAccountBook';

import { auth } from 'firebaseConfig';
import useUser from 'store/hooks/useUser';
import { TReceipt } from 'store/reducers/accoutBook-Slice';

const App = () => {
  const { keepingLoginState, loginUser, logoutUser } = useUser();
  const { changeSelectDate, readReceipts } = useAccountBook();

  useEffect(() => {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;

    // 최초 렌더링시 현재 월을 변경
    changeSelectDate({ year, month });
    // 만약 로그인된 상태면 새로고침 or 페이지 이동돼도 로그인 유지
    auth.onAuthStateChanged(user => {
      if (user) {
        keepingLoginState(user.email as string, user.uid as string);
        readReceipts({ year, month });
      }
    });
  }, []);

  const handleClickLogin = () => {
    loginUser('google');
  };
  const handleClickLogout = () => {
    logoutUser();
  };
  const dev = true;

  return (
    <>
      <Layout>
        {dev && (
          <>
            <button onClick={handleClickLogin}>임시 로그인</button>
            <button onClick={handleClickLogout}>임시 로그아웃</button>
          </>
        )}

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
      </Layout>
    </>
  );
};
export default App;
