import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import normalize from '../../../../../constants/normalize';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import fonts from '../../../../../constants/Fonts';
import {TITLE_FONT_SIZE} from '../../../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: Color.tealBlue,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 15,
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Color.white,
    borderBottomStartRadius: 75,
    borderBottomEndRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: (WIDTH_SCREEN * 75) / 100,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  vertical: {
    marginVertical: 10,
  },

  // component
  imgHeader: {
    width: normalize(125),
    height: normalize(50),
  },
  img: {
    width: normalize(300),
    height: normalize(300),
  },
  iconClose: {
    width: normalize(25),
    height: normalize(25),
  },
  btnFooter: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.white,
    borderRadius: 50,
    marginBottom: 15,
  },
  hr: {
    width: WIDTH_SCREEN - 30,
    height: 1,
    backgroundColor: Color.white,
  },

  // Text
  textTitleBold: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
    color: Color.white,
  },
  textSubTitle: {
    color: Color.white,
    textAlign: 'center',
  },
});
