import {StyleSheet} from 'react-native';
import {Color} from '../../../../constants/Color';
import {HEIGHT_SCREEN} from '../../../../constants/Dimension';

export default StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.brownGreyF,
  },
  line: {
    height: 1,
    backgroundColor: Color.labelgray,
    marginVertical: 15,
  },
  view: {
    marginHorizontal: 20,
    paddingVertical: 10,
    height: HEIGHT_SCREEN - 90,
  },
  blue: {
    color: Color.oceanBlue,
  },
});
