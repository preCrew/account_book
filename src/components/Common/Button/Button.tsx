import { ButtonInner, ButtonWrapper } from './Button.style';
import './Button.style.ts';

export type TButtonSize = 'large' | 'medium' | 'small' | 'full' | 'no';
interface ButtonProps {
  itemColor?: string;
  beSmall?: boolean; // hover 혹은 클릭시 작아지는 애니메이션
  size?: TButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  itemColor,
  beSmall,
  size = 'no',
  onClick,
  children,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      className={size}
      onClick={onClick}
      itemColor={itemColor}
    >
      <ButtonInner beSmall={beSmall}> {children}</ButtonInner>
    </ButtonWrapper>
  );
};

export default Button;
