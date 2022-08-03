import { ButtonWrapper } from './Button.style';
import './Button.style.ts';

export type TButtonSize = 'large' | 'medium' | 'small' | 'full' | 'no';
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
      itemColor={itemColor}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
