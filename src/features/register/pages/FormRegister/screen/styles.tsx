import {StyleSheet} from 'react-native';
import fonts from '../../../../../constants/Fonts';
import {Color} from '../../../../../constants/Color';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';
import {
  DEFAULT_FONT_SIZE,
  SMALL_FONT_SIZE,
} from '../../../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSpace: {
    justifyContent: 'space-between',
  },
  vertical: {
    marginVertical: 10,
  },

  // Button
  btn: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: Color.tealBlue,
    borderColor: Color.tealBlue,
  },
  btnGoogle: {
    width: '47.5%',
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.mediumgray,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnFb: {
    backgroundColor: Color.fbColor,
    width: '47.5%',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Text
  textSmall: {
    fontFamily: fonts.fontLight,
    fontSize: DEFAULT_FONT_SIZE,
    textAlign: 'center',
  },
  textSemiBold: {
    fontFamily: fonts.fontSemiBold,
    color: Color.black,
  },
  textFB: {
    fontFamily: fonts.fontSemiBold,
    color: Color.white,
  },
  textUnderline: {
    textDecorationLine: 'underline',
    color: Color.marineBlue,
    fontFamily: fonts.fontLight,
    fontSize: DEFAULT_FONT_SIZE,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  textError: {
    fontFamily: fonts.fontBold,
    color: Color.red,
    fontSize: SMALL_FONT_SIZE,
  },

  // Other
  hr: {
    width: scale(50),
    height: 0.5,
    backgroundColor: Color.greyish,
    marginHorizontal: 10,
  },
  iconGoogle: {
    width: scale(25),
    height: verticalScale(25),
  },
});
