import React from 'react';
import { StyledFlex, TAlignItems, TJustifyContents } from './Flex.style';
import './Flex.style.ts';

interface FlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justifyContents?: TJustifyContents;
  alignItems?: TAlignItems;
}

const Flex = ({
  direction = 'row',
  justifyContents,
  alignItems,
  children,
}: FlexProps) => {
  return (
    <StyledFlex
      direction={direction}
      justifyContents={justifyContents}
      alignItems={alignItems}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
