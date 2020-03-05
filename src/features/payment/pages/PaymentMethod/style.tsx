import {StyleSheet} from 'react-native';
import {Color} from '../../../../constants/Color';
import {MEDIUM_FONT_SIZE} from '../../../../constants/TextSize';
import fonts from '../../../../constants/Fonts';
import normalize from '../../../../constants/normalize';

export default StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: Color.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 6.66,
    alignItems: 'center',
  },
  titlegray: {
    fontFamily: fonts.fontReguler,
    color: Color.labelgray,
    fontSize: 13,
  },
  subtitle: {
    marginTop: 7,
    fontSize: 16,
    color: Color.tealBlue,
    fontFamily: fonts.fontBold,
  },
  return: {
    width: normalize(15),
    height: normalize(15),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fonts.fontBold,
    fontSize: 16,
  },
  view: {
    marginTop: 14,
    fontSize: MEDIUM_FONT_SIZE,
    color: Color.tealBlue,
    fontFamily: fonts.fontBold,
  },
  cc: {
    fontSize: MEDIUM_FONT_SIZE,
    fontFamily: fonts.fontBold,
    letterSpacing: 1.5,
  },
  rowva: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logova: {
    height: normalize(20),
    width: normalize(70),
  },
  circle: {
    backgroundColor: Color.labelgray,
    height: 20,
    width: 20,
    borderRadius: 20,
  },
});
