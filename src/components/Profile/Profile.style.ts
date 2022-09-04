import { contentsMargin } from 'components/Common/Layout/Layout.style';
import styled from 'styled-components';

export const ProfileWrap = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.417rem 0.83rem;
  margin: 0 -${contentsMargin};
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.primaryGradient()}`};
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: rgb(255, 255, 255);
  > a {
    margin-right: 0.417rem;
  }

  & dl {
    display: flex;
    & + dl {
      margin-top: 10px;
    }

    > dt {
      margin-right: 5px;
    }
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 10px;
`;
export const AddListButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
`;
