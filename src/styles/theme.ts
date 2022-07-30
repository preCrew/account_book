import { DefaultTheme } from 'styled-components';

const fonts = {
  style: {
    regular: 'appleR',
    bold: 'appleB',
  },
  size: {
    small: '0.7rem',
    medium: '1rem',
    large: '1.3rem',
  },
  weight: {
    fw700: 700,
  },
  deviceSize: '960px',
};
const colors = {
  primary1: 'rgb(0,0,0)',
};
const deviceSizes = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1240px',
};

export type FontsTypes = typeof fonts;
export type ColorsTypes = typeof colors;
export type DevicesSizesType = typeof deviceSizes;

const theme: DefaultTheme = {
  fonts,
  colors,
  deviceSizes,
};

export default theme;
