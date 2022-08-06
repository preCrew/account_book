import styled, { css } from 'styled-components';

export type TJustifyContents =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'left'
  | 'right'
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
export type TAlignItems =
  | 'normal'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline';

interface TFlex {
  justifyContents?: TJustifyContents;
  alignItems?: TAlignItems;
  direction: 'row' | 'column';
  width?: string;
  height?: string;
}
export const StyledFlex = styled.div<TFlex>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  ${({ justifyContents, alignItems, direction }) => css`
    justify-content: ${justifyContents};
    align-items: ${alignItems};
    flex-direction: ${direction};
  `}
`;
