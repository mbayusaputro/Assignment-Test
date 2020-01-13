import {StyleSheet} from 'react-native';
import fonts from '../../../../../constants/Fonts';
import {Color} from '../../../../../constants/Color';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
  },
  content: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  footer: {
    alignItems: 'center',
    padding: 0,
    marginTop: 10,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Text
  textDesc: {
    textAlign: 'center',
    fontFamily: fonts.fontReguler,
  },

  // Other
  btnSubmit: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: Color.tealBlue,
    borderColor: Color.tealBlue,
  },
});
