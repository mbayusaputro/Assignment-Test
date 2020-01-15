import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';
import {
  MEDIUM_FONT_SIZE,
  BIG_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../../../../../constants/TextSize';
import fonts from '../../../../../constants/Fonts';
import {Color} from '../../../../../constants/Color';

export default StyleSheet.create({
  container: {
    marginTop: -60,
  },

  // Layout
  content: {
    padding: 15,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vertical: {
    marginVertical: 10,
  },

  // Text
  textLight: {
    fontSize: MEDIUM_FONT_SIZE,
    fontFamily: fonts.fontLight,
    marginLeft: 10,
  },
  textBold: {
    fontSize: BIG_FONT_SIZE,
    fontFamily: fonts.fontExtraBold,
  },
  textBlue: {
    fontFamily: fonts.fontSemiBold,
    color: Color.marineBlue,
  },
  textRegular: {
    fontSize: HEADER_FONT_SIZE,
    fontFamily: fonts.fontRegulerItalic,
  },

  // Component
  imgCircle: {
    borderRadius: 50,
    width: scale(75),
    height: verticalScale(75),
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: Color.lightgray,
    marginVertical: 5,
  },
});
