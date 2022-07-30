import styled from 'styled-components';

export const navHeightVal = `${40}px`;

export const LayoutWrap = styled.div`
  max-width: ${({ theme }) => theme.deviceSizes.mobile};
  margin: 0 auto;
`;

export const ContentsBox = styled.section`
  min-height: 540px;
  padding-bottom: ${navHeightVal};
`;
