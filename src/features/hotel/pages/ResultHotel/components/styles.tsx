import {StyleSheet} from 'react-native';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import normalize from '../../../../../constants/normalize';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  MEDIUM_FONT_SIZE,
  TITLE_FONT_SIZE,
  BIG_FONT_SIZE,
} from '../../../../../constants/TextSize';

const styles = StyleSheet.create({
  // Layout
  contentSubHeader: {
    width: WIDTH_SCREEN,
    height: normalize(60),
    backgroundColor: Color.marineBlue,
    alignItems: 'center',
  },
  contentContent: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingVertical: 10,
    marginTop: -20,
    backgroundColor: Color.backWhite,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentPadding: {
    paddingHorizontal: 20,
  },

  // Other
  iconDot: {
    marginHorizontal: 5,
  },
  iconStar: {
    width: normalize(20),
    height: normalize(20),
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: Color.greyish,
    marginTop: 10,
  },
  imgCard: {
    width: '100%',
    height: 155,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  card: {
    marginVertical: 10,
    width: WIDTH_SCREEN - normalize(40),
    height: 'auto',
    backgroundColor: Color.white,
    marginHorizontal: 20,
  },
  cardContent: {
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  // Text
  textSubHeader: {
    fontFamily: fonts.fontSemiBold,
    color: Color.white,
  },
  textSubContent: {
    color: Color.greyish,
    fontSize: MEDIUM_FONT_SIZE,
  },
  textPrice: {
    color: Color.marineBlue,
    fontSize: TITLE_FONT_SIZE,
    fontFamily: fonts.fontBold,
    marginRight: 10,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: BIG_FONT_SIZE,
  },
  textSemiBold: {
    fontFamily: fonts.fontSemiBold,
  },
});

export default styles;
