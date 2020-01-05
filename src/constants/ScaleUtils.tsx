import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const scale = (size: number) => (width / 350) * size;
export const verticalScale = (size: number) => (height / 680) * size;
export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;
