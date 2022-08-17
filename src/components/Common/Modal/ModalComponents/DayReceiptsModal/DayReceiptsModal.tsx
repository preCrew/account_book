import { useAppSelector } from 'store/store';
import { SelectModalS } from '../Modal_Inner.style';

interface DayReceiptsModalProps {}

const DayReceiptsModal = ({}: DayReceiptsModalProps) => {
  const { Container, Header, Body } = SelectModalS;
  const { year, month, date } = useAppSelector(
    state => state.accountBook.selectDate,
  );
  return (
    <Container>
      <Header>헤더</Header>
      <Body>
        <div>
          {year}년 {month}월 {date}일
        </div>
      </Body>
    </Container>
  );
};

export default DayReceiptsModal;
