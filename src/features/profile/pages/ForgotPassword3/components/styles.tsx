import {StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  vertical: {
    marginVertical: 10,
  },

  // Text
  textCenter: {
    textAlign: 'center',
  },

  // Component
  btnSubmit: {
    borderRadius: 20,
    backgroundColor: Color.tealBlue,
    borderColor: Color.tealBlue,
  },
});
