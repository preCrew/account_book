import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Common/Layout/Layout';

import Home from 'pages/index';
import CalendarPage from 'pages/CalendarPage';
import Mypage from 'pages/MyPage';

import useAccountBook from 'store/hooks/useAccountBook';

import { app, auth } from 'firebaseConfig';
import useUser from 'store/hooks/useUser';
import { useAppSelector } from 'store/store';

const App = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { changeSelectDate } = useAccountBook();
  const { loginUser, createUser, logoutUser, keepingLoginState } = useUser();
  const email = useAppSelector(state => state.user.email);

  useEffect(() => {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;
    changeSelectDate({ year, month });

    // 만약 로그인된 상태면 새로고침 or 페이지 이동돼도 로그인 유지
    auth.onAuthStateChanged(user => {
      if (user) {
        keepingLoginState(user.email as string);
      }
    });
  }, []);

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const loginGoogle = () => {
    loginUser('google');
  };
  const logout = () => {
    logoutUser();
  };
  const signUpUser = async () => {
    createUser(user.email, user.password);
  };
  const loginUserHandler = async () => {
    loginUser('idpw', {
      email: user.email,
      password: user.password,
    });
  };
  return (
    <>
      <Layout>
        <input
          name="email"
          type="name"
          onChange={handleChangeUser}
        />
        <input
          name="password"
          type="text"
          onChange={handleChangeUser}
        />
        <button onClick={loginGoogle}>google</button>
        <button onClick={logout}>logout</button>
        <button onClick={signUpUser}>signUp</button>
        <button onClick={loginUserHandler}>login</button>
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
