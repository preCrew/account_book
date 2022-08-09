import styled from 'styled-components';

export const navHeightVal = `${40}px`;
export const contentsMinHeight = `${540}px`;
export const contentsMargin = `${15}px`;

export const LayoutWrap = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.mobile};
  margin: 0 auto;
`;

export const ContentsBox = styled.section`
  min-height: ${contentsMinHeight};
  padding: 0 ${contentsMargin} ${navHeightVal};
`;
