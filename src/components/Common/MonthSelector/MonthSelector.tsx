import React, { useCallback, useMemo } from 'react';

import useModal from 'hooks/useModal';

import useAccountBook from 'store/hooks/useAccountBook';
import { useAppSelector } from 'store/store';

import { dateGenerator } from 'utils/dateUtils';

import Button from '../Button';
import ArrowButton from '../Button/ArrowButton';
import SelectMonthModal from '../Modal/ModalComponents/SelectMonthModal';
import { StyledMonthSelector } from './MonthSelector.style';

const MonthSelector = () => {
  const { changeSelectDateOneMonth } = useAccountBook();
  const { Modal, showModal, closeModal } = useModal({
    modalName: 'monthSelect',
  });

  const month = useAppSelector(state => state.accountBook.selectDate.month);
  const firstYear = useAppSelector(state => state.accountBook.firstDate.year);
  const firstMonth = useAppSelector(state => state.accountBook.firstDate.month);

  const dates = useMemo(() => {
    const firstDate = new Date(firstYear, firstMonth);
    return dateGenerator(new Date(), firstDate);
  }, [firstMonth, firstYear]);

  const handleClickLeft = useCallback(() => {
    changeSelectDateOneMonth(-1);
  }, [changeSelectDateOneMonth]);

  const handleClickMonth = useCallback(() => {
    showModal();
  }, [showModal]);

  const handleClickRight = useCallback(() => {
    changeSelectDateOneMonth(+1);
  }, [changeSelectDateOneMonth]);
  return (
    <>
      <StyledMonthSelector>
        <ArrowButton
          direction="left"
          onClick={handleClickLeft}
        />
        <Button onClick={handleClickMonth}>
          <span>{month}</span>
          <span>{'월'}</span>
        </Button>
        <ArrowButton
          direction="right"
          onClick={handleClickRight}
        />
      </StyledMonthSelector>
      <Modal>
        <SelectMonthModal
          dates={dates}
          onClose={closeModal}
        />
      </Modal>
    </>
  );
};

export default React.memo(MonthSelector);
