import { ButtonWrapper } from './Button.style';
import './Button.style.ts';

export type TButtonSize = 'large' | 'medium' | 'small' | 'no';
interface ButtonProps {
  itemColor?: string;
  size: TButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ itemColor, size, onClick, children }: ButtonProps) => {
  return (
    <ButtonWrapper
      className={size}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
