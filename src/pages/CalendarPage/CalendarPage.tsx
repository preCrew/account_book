import Calendar from 'components/Calendar';
import MonthSelector from 'components/Common/MonthSelector';
import './CalendarPage.style.ts';
import Header from '../../components/Common/Layout/Header';
import useModal from 'hooks/useModal';
import { useCallback } from 'react';
import AddReceiptModal from 'components/Common/Modal/ModalComponents/AddReceiptModal';
import DayReceiptsModal from 'components/Common/Modal/ModalComponents/DayReceiptsModal';
import { useAppDispatch, useAppSelector } from 'store/store';
import useAccountBook from 'store/hooks/useAccountBook';
import { changeModalUpdate } from 'store/reducers/modal-Slice';

const CalendarPage = () => {
  // const [isUpdateReceipt, setIsUpdateReceipt] = useState(false);

  const { changeSelectDate } = useAccountBook();
  const { changeSelectId } = useAccountBook();
  const dispatch = useAppDispatch();

  const year = useAppSelector(state => state.accountBook.selectDate.year);
  const month = useAppSelector(state => state.accountBook.selectDate.month);

  const { Modal, showModal } = useModal({ modalName: 'receipts' });
  const {
    Modal: Modal2,
    showModal: showModal2,
    closeModal: closeModal2,
  } = useModal({ modalName: 'receipt' });

  const handleClickCalendarDate = useCallback((date: number) => {
    showModal();
    changeSelectDate({ date });
  }, []);

  const handleClickAddButton = useCallback(() => {
    showModal2();
  }, []);

  const handleClickPayItem = useCallback((id: number, date: number) => {
    changeSelectId(id);
    showModal2();
  }, []);

  return (
    <>
      <Header title="Calendar" />
      <MonthSelector />
      <Calendar
        year={year}
        month={month}
        handleClickCalendarDate={handleClickCalendarDate}
      />

      <Modal>
        <DayReceiptsModal
          handleClickAddButton={handleClickAddButton}
          handleClickPayItem={handleClickPayItem}
        />
      </Modal>

      <Modal2>
        <AddReceiptModal onClose={closeModal2} />
      </Modal2>
    </>
  );
};

export default CalendarPage;
