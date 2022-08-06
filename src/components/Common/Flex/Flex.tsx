import React from 'react';
import { StyledFlex, TAlignItems, TJustifyContents } from './Flex.style';
import './Flex.style.ts';

interface FlexProps {
  direction?: 'row' | 'column';
  width?: string;
  height?: string;
  justifyContents?: TJustifyContents;
  alignItems?: TAlignItems;
  children: React.ReactNode;
}

const Flex = ({
  direction = 'row',
  width,
  height,
  justifyContents,
  alignItems,
  children,
}: FlexProps) => {
  return (
    <StyledFlex
      direction={direction}
      width={width}
      height={height}
      justifyContents={justifyContents}
      alignItems={alignItems}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
