import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {TITLE_FONT_SIZE} from '../../../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    margin: 20,
  },
  content: {
    padding: 20,
    paddingVertical: 10,
  },
  vertical: {
    marginVertical: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Text
  textWhite: {
    color: Color.white,
    fontFamily: fonts.fontSemiBold,
  },
  textBlack: {
    color: Color.black,
    fontFamily: fonts.fontSemiBold,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
  },

  // Component
  btnSelected: {
    backgroundColor: Color.marineBlue,
    width: '47.5%',
    borderWidth: 0,
  },
  btnNonSelected: {
    backgroundColor: Color.backWhite,
    width: '47.5%',
    borderWidth: 0,
  },
});
