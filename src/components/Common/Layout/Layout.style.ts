import styled from 'styled-components';

export const navHeightVal = `${40}px`;
export const contentsMinHeight = `${540}px`;

export const LayoutWrap = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.mobile};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContentsBox = styled.section`
  min-height: ${contentsMinHeight};
  padding-bottom: ${navHeightVal};

  height: calc(100% - 40px);
  height: -webkit-calc(100% - 40px); /* for Chrome, Safari */
  height: -moz-calc(100% - 40px); /* for Firefox */
`;
