import { useMemo } from 'react';

import useModal from 'hooks/useModal';

import useAccountBook from 'store/hooks/useAccountBook';
import { useAppSelector } from 'store/store';

import { Down100, Up100 } from 'styles/animations';
import { dateGenerator } from 'utils/dateUtils';

import Button from '../Button';
import ArrowButton from '../Button/ArrowButton';
import SelectMonthModal from '../Modal/ModalComponents/SelectMonthModal';
import { StyledMonthSelector } from './MonthSelector.style';

const MonthSelector = () => {
  const { changeSelectDateOneMonth } = useAccountBook();
  const month = useAppSelector(state => state.accountBook.selectDate.month);

  const { Modal, showModal, closeModal } = useModal(Up100, Down100, 300);
  const firstDateOrigin = useAppSelector(state => state.accountBook.firstDate);
  const dates = useMemo(() => {
    const firstDate = new Date(firstDateOrigin.year, firstDateOrigin.month);
    return dateGenerator(new Date(), firstDate);
  }, [firstDateOrigin]);

  const handleClickLeft = () => {
    changeSelectDateOneMonth(-1);
  };
  const handleClickMonth = () => {
    showModal();
  };
  const handleClickRight = () => {
    changeSelectDateOneMonth(+1);
  };
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

export default MonthSelector;
