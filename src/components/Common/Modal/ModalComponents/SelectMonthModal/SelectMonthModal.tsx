import ButtonX from 'components/Common/Button/ButtonX';
import { TLoadDate } from 'store/accoutBook-Slice';
import { dateGenerator } from 'utils/dateUtils';
import SelectDateButton from '../../../Button/SelectDateButton';
import { SelectMonthModalS } from './SelectMonthModal.style';

interface SelectMonthModalProps {
  onClose?: () => void;
}

const SelectMonthModal = ({ onClose }: SelectMonthModalProps) => {
  const { Container, Header, Body } = SelectMonthModalS;
  const dates = dateGenerator(20);

  const handleClickDateButton = (date: TLoadDate) => {
    console.log(date);
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
            <SelectDateButton
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
