import { DefaultTheme } from 'styled-components';

const fonts = {
  style: {
    regular: 'appleR',
    bold: 'appleB',
  },
  size: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
  },
  weight: {
    fw700: 700,
  },
  deviceSize: '960px',
};
const colors = {
  primaryPurple: '#A464D1',
  primaryPink: '#FDB9D1',
  primaryGradient() {
    return `to right,${colors.primaryPurple},50%,${colors.primaryPink})`;
  },
  gray1: '#e5e5e5',
};

const deviceSizes = {
  mobile: '480px',
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
