import {StyleSheet} from 'react-native';
import fonts from '../../../../../constants/Fonts';
import {
  HEADER_FONT_SIZE,
  TITLE_FONT_SIZE,
  BIG_FONT_SIZE,
} from '../../../../../constants/TextSize';
import {Color} from '../../../../../constants/Color';
import normalize from '../../../../../constants/normalize';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import {HEADER_MAX_HEIGHT} from './valueScroll';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.white,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.greyish,
    overflow: 'hidden',
    zIndex: 5,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 1000,
  },
  content: {
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vertical: {
    marginVertical: 10,
  },
  marginTitle: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  // Component
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: Color.greyish,
  },
  cardCancel: {
    width: '90%',
    padding: 10,
    backgroundColor: Color.backWhite,
    borderRadius: 10,
  },
  imgFacility: {
    width: normalize(25),
    height: normalize(25),
    marginRight: 5,
  },
  iconDot: {
    marginHorizontal: 10,
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
  iconBack: {
    width: normalize(60),
    height: normalize(20),
    marginLeft: -10,
  },
  iconCancelPolicy: {
    width: normalize(20),
    height: normalize(20),
    marginRight: 10,
  },

  // Text
  textTab: {
    fontFamily: fonts.fontSemiBold,
    fontSize: HEADER_FONT_SIZE,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textSemi: {
    fontFamily: fonts.fontReguler,
    fontSize: HEADER_FONT_SIZE,
  },
  textSubTitle: {
    color: Color.greyish,
  },
  textPrice: {
    fontFamily: fonts.fontBold,
    color: Color.tealBlue,
    fontSize: BIG_FONT_SIZE,
  },
  headerTitle: {
    fontSize: TITLE_FONT_SIZE,
    color: Color.black,
  },
});
