import Layout from 'components/Common/Layout/Layout';
import SelectMonthModal from 'components/Common/Modal/ModalComponents/SelectMonthModal';
import MonthSelector from 'components/Common/MonthSelector';
import useModal from 'hooks/useModal';
import { Down100, Up100 } from 'styles/animations';

const App = () => {
  const { Modal, showModal } = useModal(Up100, Down100, 300);
  return (
    <>
      <Layout>
        내역이 들어가요 메인페이지 에요내역이 들어가요 메인페이지 에요
        <MonthSelector />
        <Modal>
          <SelectMonthModal />
        </Modal>
        <button onClick={showModal}>모달</button>
      </Layout>
    </>
  );
};
export default App;
