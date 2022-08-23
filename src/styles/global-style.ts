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
  button{
    background: none;
    outline: 0;
    border:none;
  }
  *{
      box-sizing: border-box;
  }
`;
