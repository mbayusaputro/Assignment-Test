import {StyleSheet} from 'react-native';
import fonts from '../../../../../constants/Fonts';
import {
  HEADER_FONT_SIZE,
  TITLE_FONT_SIZE,
} from '../../../../../constants/TextSize';
import {Color} from '../../../../../constants/Color';
import normalize from '../../../../../constants/normalize';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
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
});
