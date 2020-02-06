import {StyleSheet} from 'react-native';
import {Color} from '../../../../constants/Color';
import {MEDIUM_FONT_SIZE} from '../../../../constants/TextSize';
import fonts from '../../../../constants/Fonts';
import normalize from '../../../../constants/normalize';

export default StyleSheet.create({
  card: {
    marginVertical: 5,
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  va: {
    marginVertical: 5,
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 5,
  },
  titlegray: {
    fontFamily: fonts.fontReguler,
    color: Color.labelgray,
    marginVertical: 7,
  },
  subtitle: {
    marginBottom: 7,
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
    fontSize: 14,
  },
  view: {
    marginTop: 15,
    marginBottom: 7,
    fontSize: MEDIUM_FONT_SIZE,
    color: Color.tealBlue,
    fontFamily: fonts.fontBold,
  },
  rowva: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logova: {
    height: normalize(30),
    width: normalize(100),
  },
  circle: {
    backgroundColor: Color.labelgray,
    height: 20,
    width: 20,
    borderRadius: 20,
  },
});
