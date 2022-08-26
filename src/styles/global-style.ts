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
    border:0;
    outline:0;
  }
  *{
      box-sizing: border-box;
  }
`;
