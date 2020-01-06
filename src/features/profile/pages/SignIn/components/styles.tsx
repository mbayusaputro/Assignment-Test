import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';
import {
  TITLE_FONT_SIZE,
  SMALL_FONT_SIZE,
} from '../../../../../constants/TextSize';
import fonts from '../../../../../constants/Fonts';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    alignItems: 'center',
    marginVertical: 10,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Button
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
  btn: {
    width: '100%',
    borderRadius: 50,
  },

  // Input Text
  inputText: {
    width: '100%',
    height: 50,
    borderColor: Color.greyish,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 15,
    marginVertical: 10,
  },

  // Text
  textRegular: {
    fontFamily: fonts.fontReguler,
    color: Color.black,
  },
  textRegister: {
    fontSize: TITLE_FONT_SIZE,
    color: Color.tealBlue,
  },
  textBold: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
    color: Color.black,
  },
  textBoldLitle: {
    fontFamily: fonts.fontBold,
    color: Color.black,
  },
  textSemiBold: {
    fontFamily: fonts.fontSemiBold,
    color: Color.black,
  },
  textFB: {
    fontFamily: fonts.fontSemiBold,
    color: Color.white,
  },
  textError: {
    fontFamily: fonts.fontBold,
    color: Color.red,
    fontSize: SMALL_FONT_SIZE,
  },

  // Other
  hr: {
    width: scale(50),
    height: 1,
    backgroundColor: Color.greyish,
    marginHorizontal: 10,
  },
  iconGoogle: {
    width: scale(25),
    height: verticalScale(25),
  },
});
