import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  HEADER_FONT_SIZE,
  TITLE_FONT_SIZE,
} from '../../../../../constants/TextSize';
import normalize from '../../../../../constants/normalize';

export default StyleSheet.create({
  container: {
    marginTop: -50,
  },

  // Layout
  content: {
    padding: 15,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightMargin: {
    marginRight: 20,
  },
  leftMargin: {
    marginLeft: 20,
  },
  vertical: {
    marginVertical: 15,
  },

  // Component
  imgCircle: {
    borderRadius: 50,
    width: normalize(75),
    height: normalize(75),
  },

  // Text
  textBold: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
  },
  textExtraBold: {
    fontFamily: fonts.fontExtraBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textSmall: {
    fontFamily: fonts.fontReguler,
    color: Color.brownGrey,
  },

  // Other
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: Color.lightgray,
  },
  iconMenu: {
    width: normalize(25),
    height: normalize(25),
  },
});
