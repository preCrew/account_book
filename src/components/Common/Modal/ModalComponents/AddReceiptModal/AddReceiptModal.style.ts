import styled, { css } from 'styled-components';

const inputHeight = '30px';
const inputStyle = css`
  width: 100%;
  height: ${inputHeight};
  border: 0;
  outline: 0;
`;

export const AddReceiptFormWrap = styled.div`
  & > div {
    height: 95%;
  }
`;
export const InputWrap = styled.div``;
export const AmountInput = styled.input<{ keypressWidth: number }>`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  width: ${props => props.keypressWidth}px;
  margin: 0;
  display: inline-block;
  vertical-align: baseline;
  height: ${inputHeight};
  border: 0;
  outline: 0;
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple};
`;
export const AddReceiptTable = styled.table`
  width: 100%;
  margin: 1.2rem 0;
  font-size: ${({ theme }) => theme.fonts.size.size16};

  & th {
    font-family: ${({ theme }) => theme.fonts.style.regular};
    color: ${({ theme }) => theme.colors.gray2};
    text-align: left;
  }
  & td {
    padding: 10px 0;
  }
  & input {
    ${inputStyle}
  }
  & select {
    ${inputStyle}
    font-family: ${({ theme }) => theme.fonts.style.regular};
    font-size: ${({ theme }) => theme.fonts.size.size16};
  }
`;
