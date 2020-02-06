import {StyleSheet} from 'react-native';
import {Color} from '../../../constants/Color';
import normalize from '../../../constants/normalize';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: Color.backWhite,
  },
  contentMenu: {
    backgroundColor: Color.white,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  rowMenu: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  // Component
  itemMenu: {
    backgroundColor: Color.tealBlue,
    padding: 10,
    marginBottom: 5,
  },

  // ICON
  iconMenu: {
    width: normalize(30),
    height: normalize(30),
  },
});
