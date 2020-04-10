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
  content: {
    paddingHorizontal: 15,
  },
  contentMenu: {
    backgroundColor: Color.white,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 5,
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
  rowDirection: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  vertical: {
    marginVertical: 10,
  },
  contentPopular: {
    backgroundColor: Color.white,
    paddingTop: 10,
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
  imgFirst: {
    width: normalize(200),
  },
  imgSlider: {
    width: normalize(300),
    height: normalize(250),
    borderRadius: 10,
    marginRight: 10,
  },
  imgContent: {
    position: 'absolute',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: normalize(300),
    height: normalize(250),
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'space-between',
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
  textWhite: {
    color: Color.white,
  },
  textPrice: {
    color: Color.dustyOrange,
    fontSize: TITLE_FONT_SIZE,
    fontFamily: fonts.fontBold,
  },
});
