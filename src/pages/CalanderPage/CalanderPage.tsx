import SelectMonthModal from 'components/Common/Modal/ModalComponents/SelectMonthModal';
import useModal from 'hooks/useModal';
import { useMemo } from 'react';
import { useAppSelector } from 'store/store';
import { Down100, Up100 } from 'styles/animations';
import { dateGenerator } from 'utils/dateUtils';
import './CalanderPage.style.ts';

interface CalanderPageProps {}

const CalanderPage = ({}: CalanderPageProps) => {
  const { Modal, showModal, closeModal } = useModal(Up100, Down100, 300);
  const firstDateOrigin = useAppSelector(state => state.accountBook.firstDate);

  const dates = useMemo(() => {
    const firstDate = new Date(firstDateOrigin.year, firstDateOrigin.month);
    return dateGenerator(new Date(), firstDate);
  }, [firstDateOrigin]);

  return (
    <>
      <button onClick={showModal}>click!!</button>
      <Modal>
        <SelectMonthModal
          dates={dates}
          onClose={closeModal}
        />
      </Modal>
    </>
  );
};

export default CalanderPage;
