import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  TITLE_FONT_SIZE,
  BIG_FONT_SIZE,
  MEDIUM_FONT_SIZE,
} from '../../../../../constants/TextSize';
import normalize from '../../../../../constants/normalize';

export default StyleSheet.create({
  // Layout
  content: {
    paddingHorizontal: 20,
    marginTop: normalize(-40),
  },
  contentModal: {
    backgroundColor: Color.white,
    flex: 1,
  },
  contentModalCheckout: {
    padding: 10,
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingBottom: 20,
  },
  vertical: {
    marginVertical: 10,
  },
  rowBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Text
  textClose: {
    fontFamily: fonts.fontSemiBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textBold: {
    fontFamily: fonts.fontBold,
    fontSize: BIG_FONT_SIZE,
  },
  textSubTitle: {
    fontFamily: fonts.fontReguler,
    fontSize: MEDIUM_FONT_SIZE,
    color: Color.greyish,
  },
  textItemDest: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textSubItemDest: {
    fontFamily: fonts.fontReguler,
    fontSize: MEDIUM_FONT_SIZE,
    color: Color.greyish,
  },

  // Other
  btnFooter: {
    marginVertical: 10,
    borderRadius: 50,
  },
  close: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.backWhite,
  },
  typeItem: {
    padding: 10,
    backgroundColor: Color.backWhite,
    borderRadius: 10,
    alignItems: 'center',
  },
  itemDestination: {
    paddingHorizontal: 10,
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.greyish,
  },
});
