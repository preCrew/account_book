import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  font: {
    style: {
      regular: 'appleR',
      bold: 'appleB',
    },
    size: {
      fs14: '1.4rem',
      fs16: '1.6rem',
      fs20: '2rem',
    },
    weight: {
      fw700: 700,
    },
  },
  color: {
    color1: 'rgb(0,0,0)',
    color2: 'rgb(255,255,255)',
  },
  backgroundColor: {
    primary1:
      'linear-gradient(to right, rgb(164,101,208), 60%, rgb(246,181,207))',
  },
  deviceSize: '960px',
};

export { theme };
