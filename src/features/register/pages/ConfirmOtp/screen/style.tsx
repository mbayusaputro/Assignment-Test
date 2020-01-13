import {StyleSheet} from 'react-native';
import {verticalScale} from '../../../../../constants/ScaleUtils';
import fonts from '../../../../../constants/Fonts';
import {HEADER_FONT_SIZE} from '../../../../../constants/TextSize';
import {Color} from '../../../../../constants/Color';

export default StyleSheet.create({
  // Layout
  content: {
    alignItems: 'center',
    padding: 10,
  },
  fullWidth: {
    width: '100%',
  },
  vertical: {
    marginVertical: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Image
  image: {
    width: '85%',
    height: verticalScale(250),
    alignSelf: 'center',
  },
  iconRefresh: {
    marginRight: 5,
  },

  // Text
  textDesc: {
    alignItems: 'center',
    fontFamily: fonts.fontReguler,
    fontSize: HEADER_FONT_SIZE,
    textAlign: 'center',
  },

  // Button
  btnCode: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: Color.tealBlue,
    borderColor: Color.tealBlue,
  },
});
