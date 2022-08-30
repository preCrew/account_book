import React from 'react';
import { TAlignItems, TJustifyContents } from '../Flex/Flex.style';
import { ButtonS, ButtonWrapper } from './Button.style';
import './Button.style.ts';

export type TButtonSize = 'large' | 'medium' | 'small' | 'full';
interface ButtonProps {
  className?: string;
  itemColor?: string;
  beSmall?: boolean; // hover 혹은 클릭시 작아지는 애니메이션
  size?: TButtonSize;
  justifyContent?: TJustifyContents;
  alignItems?: TAlignItems;
  onClick?: (e: any) => void;
  children: React.ReactNode;
}

const Button = ({
  className,
  beSmall,
  size,
  justifyContent,
  alignItems,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      className={`${className} ${size}`}
      onClick={onClick}
    >
      <ButtonS
        beSmall={beSmall}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {children}
      </ButtonS>
    </ButtonWrapper>
  );
};

export default React.memo(Button);
