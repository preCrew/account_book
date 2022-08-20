import ButtonX from 'components/Common/Button/ButtonX';
import { useEffect, useRef } from 'react';
import { TDateTime } from 'store/reducers/accoutBook-Slice';
import useAccountBook from 'store/hooks/useAccountBook';
import SelectDateBox from '../../../SelectableList';
import { ModalS } from '../Modal_Inner.style';
import { useAppSelector } from 'store/store';

interface SelectMonthModalProps {
  onClose: () => void;
  dates: TDateTime[];
}

const SelectMonthModal = ({ onClose, dates }: SelectMonthModalProps) => {
  const { Container, Header, Body } = ModalS;
  const { year, month } = useAppSelector(state => state.accountBook.selectDate);
  const goRef = useRef<HTMLDivElement>(null);
  const { changeSelectDate } = useAccountBook();

  useEffect(() => {
    goRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleClickDateButton = (date: TDateTime) => {
    changeSelectDate(date);
    onClose();
  };

  return (
    <>
      <Container>
        <Header>
          {'월 선택하기'}
          <ButtonX onClick={onClose} />
        </Header>
        <Body>
          {dates.map(date => (
            <SelectDateBox
              ref={goRef}
              key={`${date.year}${date.month}`}
              onClick={() => {
                handleClickDateButton(date);
              }}
              selectCondition={month === date.month && year === date.year}
            >
              {date.year}년 {date.month}월
            </SelectDateBox>
          ))}
        </Body>
      </Container>
    </>
  );
};

export default SelectMonthModal;
