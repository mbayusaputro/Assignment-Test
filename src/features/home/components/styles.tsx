import {StyleSheet} from 'react-native';
import {Color} from '../../../constants/Color';
import normalize from '../../../constants/normalize';
import fonts from '../../../constants/Fonts';
import {TITLE_FONT_SIZE, MEDIUM_FONT_SIZE} from '../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: Color.backWhite,
  },
  contentMenu: {
    backgroundColor: Color.white,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  contentLogin: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
  },
  rowMenu: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  vertical: {
    marginVertical: 10,
  },

  // Component
  itemMenu: {
    backgroundColor: Color.tealBlue,
    padding: 10,
    marginBottom: 5,
  },
  btnLogin: {
    paddingHorizontal: 20,
    backgroundColor: Color.berry,
    borderRadius: 20,
    borderWidth: 0,
  },

  // ICON
  iconMenu: {
    width: normalize(30),
    height: normalize(30),
  },

  // Text
  textTitle: {
    fontFamily: fonts.fontExtraBold,
    fontSize: TITLE_FONT_SIZE,
    textAlign: 'center',
  },
  textSubTitle: {
    fontSize: MEDIUM_FONT_SIZE,
    textAlign: 'center',
  },
});
