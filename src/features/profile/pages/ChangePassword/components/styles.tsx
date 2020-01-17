import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {TITLE_FONT_SIZE} from '../../../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  SafeContainer: {
    flex: 1,
    backgroundColor: Color.backWhite,
  },
  container: {
    marginTop: -50,
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
    padding: 15,
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
});
