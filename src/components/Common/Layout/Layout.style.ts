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
export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  height: 100vh;

  > h1 {
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fonts.size.large};
  }
`;
export const LoginBtn = styled.button`
  width: 70%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 15px;
  font-family: ${({ theme }) => theme.fonts.style.regular};
  font-size: ${({ theme }) => theme.fonts.size.size16};
  background: rgb(255, 255, 255);

  & svg {
    margin-right: 10px;
  }
`;
