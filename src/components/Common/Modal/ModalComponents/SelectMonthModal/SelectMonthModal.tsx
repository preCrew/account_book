import ButtonX from 'components/Common/Button/ButtonX';
import Flex from 'components/Common/Flex';
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
  const { changeSelectDate } = useAccountBook();

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
            <Flex
              key={`${date.year}${date.month}`}
              justifyContents="space-between"
            >
              <SelectDateBox
                date={date}
                onClick={handleClickDateButton}
              />
            </Flex>
          ))}
        </Body>
      </Container>
    </>
  );
};

export default SelectMonthModal;
