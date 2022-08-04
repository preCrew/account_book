import Layout from 'components/Common/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CalanderPage from 'pages/CalanderPage';
import useAccountBook from 'store/hooks/useAccountBook';
import { useEffect } from 'react';

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
        <Routes>
          <Route
            path="/calander"
            element={<CalanderPage />}
          />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
