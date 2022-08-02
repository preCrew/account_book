import styled from 'styled-components';

const StyledSelectMonthModalWrapper = styled.div`
  width: 100%;
  height: 70%;
  background-color: white;

  position: absolute;
  bottom: 0;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 15px;

  word-break: keep-all;
`;
const StyledSelectMonthModalHeader = styled.div`
  font-size: ${props => props.theme.fonts.size.large};
`;
const StyledSelectMonthModalBody = styled.div`
  font-size: ${props => props.theme.fonts.size.medium};
`;

export const SelectMonthModalS = {
  Wrapper: StyledSelectMonthModalWrapper,
  Header: StyledSelectMonthModalHeader,
  Body: StyledSelectMonthModalBody,
};
