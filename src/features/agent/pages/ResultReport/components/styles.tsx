import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  TITLE_FONT_SIZE,
  HEADER_FONT_SIZE,
  MEDIUM_FONT_SIZE,
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

  // Component Profile
  card1: {
    paddingTop: 15.33,
    paddingBottom: 16.66,
    marginBottom: 5.63,
  },
  rowProf: {
    paddingHorizontal: 24,
    paddingBottom: 15.16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgProf: {
    height: 64.66,
    width: 64.66,
    borderRadius: 20,
  },
  textProf: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
    marginLeft: 23.33,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 17.16,
    paddingBottom: 17.16,
    borderTopWidth: 1,
    borderTopColor: Color.backWhite,
  },
  textPrev: {
    fontFamily: fonts.fontReguler,
    fontSize: HEADER_FONT_SIZE,
  },
  textValue: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
    color: Color.tealBlue,
  },

  // Component Result
  card2: {
    paddingHorizontal: 26.66,
    paddingVertical: 17.33,
    marginVertical: 10.36,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textName: {
    fontFamily: fonts.fontBold,
    fontSize: 17,
  },
  textPrice: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
    color: Color.berry,
  },
  line: {
    height: 1,
    backgroundColor: Color.backWhite,
    marginTop: 5.83,
    marginBottom: 13.5,
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
