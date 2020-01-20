import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {SMALL_FONT_SIZE} from '../../../../../constants/TextSize';

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
  vertical: {
    marginVertical: 10,
  },

  // Text
  textError: {
    fontFamily: fonts.fontBold,
    color: Color.red,
    fontSize: SMALL_FONT_SIZE,
  },

  // Component
  btnSubmit: {
    borderRadius: 20,
    backgroundColor: Color.tealBlue,
    borderColor: Color.tealBlue,
  },
});
