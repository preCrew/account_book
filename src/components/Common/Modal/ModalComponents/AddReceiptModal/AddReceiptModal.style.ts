import styled, { css } from 'styled-components';

const inputHeight = '30px';
const inputStyle = css`
  width: 100%;
  height: ${inputHeight};
  border: 0;
  outline: 0;
`;

export const AddReceiptFormWrap = styled.div``;
export const InputWrap = styled.div``;
export const AmountInput = styled.div`
  position: relative;
  & input {
    &::-webkit-inner-spin-button,
    /* stylelint-enable property-no-vendor-prefix */
    &::-webkit-outer-spin-button {
      /* -webkit-appearance: unset; */
    }
    width: 100%;
    margin: 0;
    display: inline-block;
    vertical-align: baseline;
    height: ${inputHeight};
    border: 0;
    outline: 0;
    font-size: ${({ theme }) => theme.fonts.size.large};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.purple};
  }
  & > span {
    position: absolute;
    right: 0;
    top: 0;
  }
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
    font-family: ${({ theme }) => theme.fonts.style.regular};
    font-size: ${({ theme }) => theme.fonts.size.size16};
  }
  & select {
    ${inputStyle}
    font-family: ${({ theme }) => theme.fonts.style.regular};
    font-size: ${({ theme }) => theme.fonts.size.size16};
  }
`;
