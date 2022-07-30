import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
      font-family: appleR;
      font-size:10px;
  }
  *{
      box-sizing: border-box;
  }
`;
