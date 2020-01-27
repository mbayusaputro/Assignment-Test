import {Dimensions, Platform, PixelRatio} from 'react-native';

export let {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get(
  'window',
);

const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 667;

export default function normalize(
  size: number,
  based: 'width' | 'height' = 'width',
) {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

// =========================== USAGE ===========================
// on iPhone 8
// normalize(100)          // = 100
// normalize(50, 'height') // = 50

// // on iPhone 5s
// normalize(100)          // = 86
// normalize(50, 'height') // = 43

// // on iPhoneXs Max
// normalize(100)          // = 110
// normalize(50, 'height') // = 67
// =========================== USAGE ===========================
