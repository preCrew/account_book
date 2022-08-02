import Layout from 'components/Common/Layout/Layout';
import SelectMonthModal from 'components/Common/Modal/ModalComponents/SelectMonthModal';
import MonthSelector from 'components/Common/MonthSelector';
import useModal from 'hooks/useModal';

const App = () => {
  const { Modal, isOpen, closeModal, openModal } = useModal();
  return (
    <>
      <Layout>
        내역이 들어가요 메인페이지 에요내역이 들어가요 메인페이지 에요
        <MonthSelector />
        <Modal
          isOpen
          onClose={closeModal}
        >
          <SelectMonthModal />
        </Modal>
      </Layout>
    </>
  );
};
export default App;
