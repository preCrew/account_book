import React from 'react';
import { TAlignItems, TJustifyContents } from './Flex.style';
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
}: FlexProps) => {
  return <></>;
};

export default Flex;
