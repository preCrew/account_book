import ButtonX from 'components/Common/Button/ButtonX';
import { ModalS } from '../Modal_Inner.style';
import SelectDataBox from '../../../SelectableList/CheckList';
import { useAppDispatch, useAppSelector } from 'store/store';
import useUser from '../../../../../store/hooks/useUser';

interface SelectCharacterModalProps {
  onClose: () => void;
}

const SelectCharacterModal = ({ onClose }: SelectCharacterModalProps) => {
  const { Container, Header, Body } = ModalS;
  const { avatar, userInfo } = useAppSelector(state => state.user);
  const { chageCaracter } = useUser();

  const onClickCharacter = (index: number) => () => {
    chageCaracter(index);
  };

  return (
    <>
      <Container>
        <Header>
          {'캐릭터 선택하기'}
          <ButtonX onClick={onClose} />
        </Header>
        <Body>
          {avatar.map((character, i) => (
            <SelectDataBox
              key={i}
              selectCondition={i === userInfo.character}
              onClick={onClickCharacter(i)}
            >
              {character.name}
            </SelectDataBox>
          ))}
        </Body>
      </Container>
    </>
  );
};

export default SelectCharacterModal;
