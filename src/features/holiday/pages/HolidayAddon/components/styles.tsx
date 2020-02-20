import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import fonts from '../../../../../constants/Fonts';
import {
  TITLE_FONT_SIZE,
  HEADER_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  DEFAULT_FONT_SIZE,
} from '../../../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  container: {
    backgroundColor: Color.backWhite,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  contentButton: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vertical: {
    marginVertical: 10,
  },
  footer: {
    width: WIDTH_SCREEN,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: Color.greyish,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    backgroundColor: Color.white,
  },

  // Components
  card: {
    width: WIDTH_SCREEN - 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: Color.white,
    alignSelf: 'center',
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: Color.greyish,
    marginVertical: 5,
  },
  btnAdd: {
    borderRadius: 20,
    borderColor: Color.berry,
  },
  btnFooter: {
    borderRadius: 20,
  },

  // Text
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textMedium: {
    fontFamily: fonts.fontSemiBold,
    fontSize: HEADER_FONT_SIZE,
    color: Color.greyish,
  },
  textDesc: {
    color: Color.greyish,
  },
  textPink: {
    color: Color.berry,
  },
  textPrice: {
    color: Color.tealBlue,
    fontSize: MEDIUM_FONT_SIZE,
  },
  textSubTitle: {
    color: Color.greyish,
    fontSize: DEFAULT_FONT_SIZE,
  },
  textBlue: {
    fontFamily: fonts.fontSemiBold,
    color: Color.tealBlue,
    fontSize: TITLE_FONT_SIZE,
  },
});
