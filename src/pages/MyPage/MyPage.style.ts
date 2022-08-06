import styled from 'styled-components';
import Dollar from '../../styles/Icon/dollar-sign-solid.svg';
import { contentsMinHeight } from '../../components/Common/Layout/Layout.style';

export const MyPageContainer = styled.div`
  margin: 0 auto;
  min-height: ${contentsMinHeight};
  position: static;
  display: table;
`;

export const MyPageSection = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const StyledMyPage = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: skyblue;
  cursor: pointer;
`;

export const Name = styled.div`
  margin-top: 20px;
  font-size: 26px;
`;

export const Emaile = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: #b0b0b0;
  margin-bottom: 40px;
`;

export const SubTitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #b0b0b0;
  margin-bottom: 10px;
`;

export const AmountBox = styled.div`
  width: inherit;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #dddd;
`;

export const AmountInputBox = styled.div`
  width: inherit;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-right: 30px;
`;

export const AmountIcon = styled.div`
  background-image: url(${Dollar});
  background-repeat: no-repeat;
  background-position: 15px center;

  width: 50px;
  height: 30px;
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
`;

export const SaveButton = styled.button`
  width: inherit;
  height: 40px;
  color: #fff;
  background: ${({ theme }) => theme.colors.primaryPurple};
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
  transition: 0.3s;
  margin-top: 30px;
  cursor: pointer;
`;
