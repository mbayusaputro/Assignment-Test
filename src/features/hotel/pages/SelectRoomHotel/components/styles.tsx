import {StyleSheet} from 'react-native';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import normalize from '../../../../../constants/normalize';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  BIG_FONT_SIZE,
  MEDIUM_FONT_SIZE,
} from '../../../../../constants/TextSize';

export default StyleSheet.create({
  // Layout
  content: {
    marginTop: -25,
    backgroundColor: Color.backWhite,
    borderTopLeftRadius: 15,
  },
  subHeader: {
    width: WIDTH_SCREEN,
    height: normalize(125),
    backgroundColor: Color.marineBlue,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
  filterSubHeader: {
    width: WIDTH_SCREEN - 40,
    padding: 10,
    backgroundColor: Color.oceanBlue,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stick: {
    width: 1,
    height: '100%',
    backgroundColor: Color.white,
  },
  horizontal: {
    paddingHorizontal: 15,
  },
  vertical: {
    marginVertical: 15,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: Color.greyish,
  },
  rangeSubHeader: {
    width: normalize(75),
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 10,
  },

  // TEXT
  textWhite: {
    color: Color.white,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: BIG_FONT_SIZE,
  },
  textDetail: {
    fontFamily: fonts.fontSemiBold,
    color: Color.oceanBlue,
  },
  textPrice: {
    fontFamily: fonts.fontBold,
    fontSize: BIG_FONT_SIZE,
    color: Color.oceanBlue,
    marginRight: 5,
  },
  textSubTitle: {
    fontSize: MEDIUM_FONT_SIZE,
    color: Color.greyish,
  },

  // COMPONENT
  cardFilter: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: Color.white,
    flex: 0,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSelected: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: Color.tealBlue,
    flex: 0,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRoom: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  imgCardRoom: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: 10,
  },
  btnFooter: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: normalize(100),
  },
  iconSubHeader: {
    width: normalize(20),
    height: normalize(20),
    marginRight: 5,
  },
  btnSubHeader: {
    padding: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.white,
  },
});
