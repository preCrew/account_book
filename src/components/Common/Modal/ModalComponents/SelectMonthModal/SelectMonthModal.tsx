import ButtonX from 'components/Common/Button/ButtonX';
import { useEffect, useRef } from 'react';
import { TYearMonth } from 'store/reducers/accoutBook-Slice';
import useAccountBook from 'store/hooks/useAccountBook';
import SelectDateBox from './SelectDateBox';
import { SelectModalS } from '../Modal_Inner.style';

interface SelectMonthModalProps {
  onClose: () => void;
  dates: TYearMonth[];
}

const SelectMonthModal = ({ onClose, dates }: SelectMonthModalProps) => {
  const { Container, Header, Body } = SelectModalS;
  const goRef = useRef<HTMLDivElement>(null);
  const { changeSelectDate } = useAccountBook();

  useEffect(() => {
    goRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleClickDateButton = (date: TYearMonth) => {
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
              date={date}
              onClick={handleClickDateButton}
            />
          ))}
        </Body>
      </Container>
    </>
  );
};

export default SelectMonthModal;
