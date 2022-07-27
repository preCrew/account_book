import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  font: {
    style: {
      regular: 'NotoSansKR-R',
      bold: 'NotoSansKR-B',
    },
    size: {
      fs18: '18px',
      fs22: '22px',
      fs60: '60px',
    },
    weight: {
      fw700: 700,
    },
  },
  color: {
    primary1: 'rgb(0,0,0)',
  },
  deviceSizes: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1240px',
  },
};

export { theme };
