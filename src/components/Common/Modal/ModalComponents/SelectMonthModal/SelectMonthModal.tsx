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
    console.log('달력모달');
    goRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;
  `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
    // window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
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
