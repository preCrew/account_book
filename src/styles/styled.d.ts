import 'styled-components';
import { ColorsTypes, DevicesSizesType, FontsTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: FontsTypes;
    colors: ColorsTypes;
    deviceSizes: DevicesSizesType;
  }
}
