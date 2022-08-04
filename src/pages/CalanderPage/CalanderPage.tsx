import SelectMonthModal from 'components/Common/Modal/ModalComponents/SelectMonthModal';
import useModal from 'hooks/useModal';
import { useEffect, useMemo } from 'react';
import useAccountBook from 'store/hooks/useAccountBook';
import { useAppSelector } from 'store/store';
import { Down100, Up100 } from 'styles/animations';
import { dateGenerator } from 'utils/dateUtils';
import './CalanderPage.style.ts';

interface CalanderPageProps {}

const CalanderPage = ({}: CalanderPageProps) => {
  const { Modal, showModal, closeModal } = useModal(Up100, Down100, 300);

  const dates = useMemo(() => {
    return dateGenerator(20);
  }, []);

  return (
    <>
      <button onClick={showModal}>click!!</button>
      <Modal>
        <SelectMonthModal dates={dates} />
      </Modal>
    </>
  );
};

export default CalanderPage;
