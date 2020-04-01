import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  TITLE_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../../../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  SafeContainer: {
    flex: 1,
    backgroundColor: Color.backWhite,
  },
  container: {
    marginTop: -55,
    padding: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vertical: {
    marginVertical: 15,
  },

  // Component
  card: {
    paddingHorizontal: 19,
    paddingTop: 7.33,
    paddingBottom: 8.3,
    marginBottom: 16,
  },
  cardPd: {
    paddingVertical: 18,
    paddingHorizontal: 19,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightSection: {
    flex: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  icons: {
    tintColor: Color.tealBlue,
    height: 25,
    width: 28,
  },

  // Text
  textBold: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textBlue: {
    fontFamily: fonts.fontSemiBold,
    color: Color.marineBlue,
  },

  // ++
  top: {
    marginTop: 4.33,
  },
  price: {
    marginTop: 4.33,
    color: Color.tealBlue,
  },
  textGrey: {
    color: Color.brownGrey,
  },
  textNormal: {
    fontFamily: fonts.fontReguler,
    fontSize: HEADER_FONT_SIZE,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
    marginBottom: 16,
    letterSpacing: 1,
  },
  err: {
    fontFamily: fonts.fontRegulerItalic,
    marginTop: 5,
    color: Color.red,
  },
});
