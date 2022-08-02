import { SelectMonthModalS } from './SelectMonthModal.style';

interface SelectMonthModalProps {}

const SelectMonthModal = ({}: SelectMonthModalProps) => {
  const { Wrapper, Header, Body } = SelectMonthModalS;

  return (
    <>
      <Wrapper>
        <Header>월 선택하기</Header>
        <Body>body</Body>
      </Wrapper>
    </>
  );
};

export default SelectMonthModal;
