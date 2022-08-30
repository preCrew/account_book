import Calendar from 'components/Calendar';
import MonthSelector from 'components/Common/MonthSelector';
import './CalendarPage.style.ts';
import Header from '../../components/Common/Layout/Header';
import useModal from 'hooks/useModal';
import { Down100, Up100 } from 'styles/animations';
import React, { useCallback } from 'react';
import AddReceiptModal from 'components/Common/Modal/ModalComponents/AddReceiptModal';
import DayReceiptsModal from 'components/Common/Modal/ModalComponents/DayReceiptsModal';
import { TReceipt } from 'store/reducers/accoutBook-Slice';
import { useAppSelector } from 'store/store';

const CalendarPage = () => {
  console.log('calPage render');
  const year = useAppSelector(state => state.accountBook.selectDate.year);
  const month = useAppSelector(state => state.accountBook.selectDate.month);

  // const;
  const { Modal, showModal } = useModal({});
  const {
    Modal: Modal2,
    showModal: showModal2,
    closeModal: closeModal2,
  } = useModal({});

  const handleClickCalendarDate = useCallback(
    (date: number) => {
      showModal();
      // changeSelectDate({ date });
    },
    [showModal],
  );
  const handleClickAddButton = useCallback(() => {
    showModal2();
  }, []);

  const handleClickPayItem = useCallback((receipt: TReceipt) => {
    console.log(receipt);
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
          onClickAddButton={handleClickAddButton}
          onClickPayItem={handleClickAddButton}
        />
      </Modal>
      <Modal2>
        <AddReceiptModal onClose={closeModal2} />
      </Modal2>
    </>
  );
};

export default CalendarPage;
