import {StyleSheet, Platform} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import {HEADER_MAX_HEIGHT} from './valueScroll';
import {
  TITLE_FONT_SIZE,
  DEFAULT_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../../../../../constants/TextSize';
import fonts from '../../../../../constants/Fonts';
import normalize from '../../../../../constants/normalize';

export default StyleSheet.create({
  // Layout
  content: {
    paddingHorizontal: 15,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  vertical: {
    marginVertical: 10,
  },
  pinkColor: {
    backgroundColor: Color.berry,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImage: {
    width: '100%',
    height: HEADER_MAX_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Component
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: Color.greyish,
  },
  cardHorizontal: {
    backgroundColor: Color.backWhite,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardModal: {
    padding: 15,
    width: '90%',
  },
  footer: {
    width: WIDTH_SCREEN,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderTopColor: Color.greyish,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    backgroundColor: Color.white,
  },
  btnFooter: {
    borderRadius: 25,
  },
  btnCircle: {
    padding: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.tealBlue,
  },
  imageList: {
    width: WIDTH_SCREEN / 3,
    height: WIDTH_SCREEN / 3,
    borderWidth: 0.5,
    borderColor: Color.white,
    backgroundColor: Color.backWhite,
  },

  // Header
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
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    paddingTop: Platform.OS === 'ios' ? 50 : 0, // ios
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  iconBack: {
    width: 60,
    height: 20,
    marginLeft: -10,
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
  btnBack: {
    borderRadius: 20,
    paddingVertical: 7.5,
    paddingRight: 5,
    backgroundColor: Color.white,
    position: 'absolute',
    left: 20,
    top: 25,
  },
  btnShowMore: {
    width: '100%',
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: Color.greyish,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },

  // TEXT
  headerTitle: {
    fontSize: TITLE_FONT_SIZE,
    color: Color.black,
  },
  textBlue: {
    fontFamily: fonts.fontSemiBold,
    color: Color.tealBlue,
    fontSize: TITLE_FONT_SIZE,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textSubTitle: {
    color: Color.greyish,
    fontSize: DEFAULT_FONT_SIZE,
  },
  textMedium: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
  },
  textSmallBold: {
    fontFamily: fonts.fontBold,
  },
  textWhite: {
    color: Color.white,
  },
});
