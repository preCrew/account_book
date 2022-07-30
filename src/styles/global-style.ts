import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 150%;
  }
  body {
      font-family: appleR;
  }
  *{
      box-sizing: border-box;
  }
`;
