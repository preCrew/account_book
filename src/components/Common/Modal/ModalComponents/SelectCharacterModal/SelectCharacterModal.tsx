import ButtonX from 'components/Common/Button/ButtonX';
import { SelectModalS } from '../Modal_Inner.style';

interface SelectCharacterModalProps {
  onClose: () => void;
}

const SelectCharacterModal = ({ onClose }: SelectCharacterModalProps) => {
  const { Container, Header, Body } = SelectModalS;
  return (
    <>
      <Container>
        <Header>
          {'캐릭터 선택하기'}
          <ButtonX onClick={onClose} />
        </Header>
        <Body>body</Body>
      </Container>
    </>
  );
};

export default SelectCharacterModal;
