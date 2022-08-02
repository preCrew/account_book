import Button from '../Button';
import { StyledButtonX } from './ButtonX.style';

interface ButtonXProps {
  onClick?: () => void;
}

const ButtonX = ({ onClick }: ButtonXProps) => {
  return (
    <StyledButtonX>
      <Button
        size="no"
        onClick={onClick}
      >
        X
      </Button>
    </StyledButtonX>
  );
};

export default ButtonX;
