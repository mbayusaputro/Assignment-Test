import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  BIG_FONT_SIZE,
  TITLE_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../../../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: Color.backWhite,
  },
  content: {
    paddingHorizontal: 15,
  },
  subHeader: {
    position: 'absolute',
    zIndex: -1,
    height: 50,
    top: 55,
  },
  row: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  vertical: {
    marginVertical: 10,
  },

  // Component
  card: {
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  cardLogin: {
    padding: 15,
    margin: 15,
    backgroundColor: Color.tealBlue,
  },
  cardItem: {
    padding: 15,
    marginBottom: 5,
  },
  iconDot: {
    marginHorizontal: 5,
  },
  btnFooter: {
    borderRadius: 25,
  },

  // Text
  textTitle: {
    fontFamily: fonts.fontExtraBold,
    fontSize: BIG_FONT_SIZE,
  },
  textSubTitle: {
    color: Color.greyish,
  },
  textBold: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
  },
  textSemi: {
    fontFamily: fonts.fontSemiBold,
  },
  textWhite: {
    color: Color.white,
  },
  textRed: {
    color: Color.red,
    fontFamily: fonts.fontRegulerItalic,
  },
  textBlue: {
    color: Color.oceanBlue,
  },
  textPrice: {
    color: Color.oceanBlue,
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textClose: {
    fontFamily: fonts.fontSemiBold,
    fontSize: TITLE_FONT_SIZE,
  },

  // Modal
  contentModal: {
    padding: 10,
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingBottom: 20,
  },
  modalClose: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.backWhite,
  },
});
