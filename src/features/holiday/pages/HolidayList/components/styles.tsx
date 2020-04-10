import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backWhite,
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingBottom: 125,
  },
  contentCard: {
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  vertical: {
    marginVertical: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  card: {
    width: '90%',
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: -85,
    zIndex: -1,
    flexWrap: 'wrap',
  },

  // Text
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: 16,
    color: Color.black,
  },
  textSubTitle: {
    color: Color.greyish,
    fontSize: 14,
  },
  textPrice: {
    color: Color.tealBlue,
    fontSize: 14,
    fontFamily: fonts.fontBold,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
