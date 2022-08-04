import ButtonX from 'components/Common/Button/ButtonX';
import Flex from 'components/Common/Flex';
import { useEffect, useRef } from 'react';
import { TLoadDate } from 'store/accoutBook-Slice';
import useAccountBook from 'store/hooks/useAccountBook';
import SelectDateBox from './SelectDateBox';
import { SelectMonthModalS } from './SelectMonthModal.style';

interface SelectMonthModalProps {
  onClose: () => void;
  dates: TLoadDate[];
}

const SelectMonthModal = ({ onClose, dates }: SelectMonthModalProps) => {
  const { Container, Header, Body } = SelectMonthModalS;
  const goRef = useRef<HTMLDivElement>(null);
  const { changeSelectDate } = useAccountBook();

  useEffect(() => {
    goRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleClickDateButton = (date: TLoadDate) => {
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
