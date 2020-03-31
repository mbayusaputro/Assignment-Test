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

  // Component
  img: {
    width: 125,
    height: 125,
    borderRadius: 10,
  },
  card: {
    width: '90%',
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginTop: -100,
    zIndex: -1,
    flexWrap: 'wrap',
  },
  cadr: {
    marginVertical: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
    padding: 10,
  },

  // Text
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: 20,
    color: Color.black,
  },
  textSubTitle: {
    color: Color.greyish,
  },
  textPrice: {
    color: Color.tealBlue,
    fontSize: 20,
    fontFamily: fonts.fontBold,
  },
});
