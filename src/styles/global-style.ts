import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #root {
    font-size: 150%;
    width: 100%;
    height: 100%;
  }
  body {
      font-family: appleR;
  }
  *{
      box-sizing: border-box;
  }
`;
