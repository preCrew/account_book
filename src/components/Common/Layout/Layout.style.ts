import styled from 'styled-components';

export const navHeightVal = `${40}px`;

export const LayoutWrap = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.mobile};
  margin: 0 auto;
`;

export const ContentsBox = styled.section`
  min-height: 540px;
  padding-bottom: ${navHeightVal};

  height: calc(100% - 40px);
  height: -webkit-calc(100% - 40px); /* for Chrome, Safari */
  height: -moz-calc(100% - 40px); /* for Firefox */
`;
