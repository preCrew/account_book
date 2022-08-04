import Layout from 'components/Common/Layout/Layout';
import SelectMonthModal from 'components/Common/Modal/ModalComponents/SelectMonthModal';
import MonthSelector from 'components/Common/MonthSelector';
import useModal from 'hooks/useModal';
import { Down100, Up100 } from 'styles/animations';

import { Route, Router, Routes } from 'react-router-dom';
import CalanderPage from 'pages/CalanderPage';
const App = () => {
  const { Modal, showModal, closeModal } = useModal(Up100, Down100, 300);
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
