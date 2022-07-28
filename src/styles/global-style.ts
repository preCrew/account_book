import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
      font-family: appleR;
  }
  *{
      box-sizing: border-box;
  }
`;
