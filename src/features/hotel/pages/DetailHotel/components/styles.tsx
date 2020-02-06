import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {
  TITLE_FONT_SIZE,
  BIG_FONT_SIZE,
  HEADER_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  DEFAULT_FONT_SIZE,
} from '../../../../../constants/TextSize';
import {HEADER_MAX_HEIGHT} from './valuesScroll';
import normalize from '../../../../../constants/normalize';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import fonts from '../../../../../constants/Fonts';

export default StyleSheet.create({
  // LAYOUT
  content: {
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.white,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.greyish,
    overflow: 'hidden',
  },
  bar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 1000,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
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
  vertical: {
    marginVertical: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: WIDTH_SCREEN,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: Color.greyish,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    backgroundColor: Color.white,
  },
  facilitySpace: {
    width: normalize(100),
    alignItems: 'center',
  },
  modalHeaderRounded: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Color.white,
  },

  // TEXT
  headerTitle: {
    fontSize: TITLE_FONT_SIZE,
    color: Color.black,
  },
  textTitle: {
    fontFamily: fonts.fontExtraBold,
    fontSize: BIG_FONT_SIZE,
  },
  textReguler: {
    fontFamily: fonts.fontReguler,
    fontSize: HEADER_FONT_SIZE,
  },
  textBlue: {
    fontFamily: fonts.fontSemiBold,
    color: Color.tealBlue,
    fontSize: TITLE_FONT_SIZE,
  },
  textMedium: {
    fontFamily: fonts.fontReguler,
    fontSize: MEDIUM_FONT_SIZE,
  },
  textSubTitle: {
    color: Color.greyish,
    fontSize: DEFAULT_FONT_SIZE,
  },
  textWhite: {
    color: Color.white,
  },

  // Other
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: WIDTH_SCREEN,
    height: HEADER_MAX_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  centerImage: {
    width: '100%',
    height: HEADER_MAX_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageList: {
    width: WIDTH_SCREEN / 3,
    height: WIDTH_SCREEN / 3,
    borderWidth: 0.5,
    borderColor: Color.white,
    backgroundColor: Color.backWhite,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: Color.greyish,
  },
  map: {
    width: WIDTH_SCREEN,
    height: normalize(250),
    backgroundColor: Color.tealBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFooter: {
    borderRadius: 20,
  },
  btnBack: {
    borderRadius: 20,
    paddingVertical: 7.5,
    paddingRight: 5,
    backgroundColor: Color.white,
    position: 'absolute',
    left: 20,
    top: 20,
  },
  btnShare: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
  iconBack: {
    width: normalize(60),
    height: normalize(20),
    marginLeft: -10,
  },
  iconShare: {
    width: normalize(40),
    height: normalize(40),
  },
  iconFacility: {
    width: normalize(50),
    height: normalize(50),
  },
});
