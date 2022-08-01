import Layout from 'components/Common/Layout/Layout';
import MonthSelector from 'components/Common/MonthSelector';
import CategoryModal from 'components/Common/Modal/ModalComponents/CategoryModal';
import useModal from 'hooks/useModal';

const App = () => {
  const { Modal, isOpen, closeModal, openModal } = useModal();
  const handleClickButton = () => {
    openModal();
  };
  return (
    <>
      <Layout>
        내역이 들어가요 메인페이지 에요내역이 들어가요 메인페이지 에요
        <MonthSelector />
        <button onClick={handleClickButton}>click!</button>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
        >
          <CategoryModal />
        </Modal>
      </Layout>
    </>
  );
};
export default App;
