import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../constants/ScaleUtils';
import {Color} from '../../constants/Color';

export default StyleSheet.create({
  card: {
    marginVertical: 5,
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  va: {
    marginVertical: 5,
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 5,
  },
  titlegray: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.labelgray,
    marginVertical: 7,
  },
  subtitle: {
    marginBottom: 7,
    fontSize: 16,
    color: '#ea6520',
    fontFamily: 'NunitoSans-Bold',
  },
  return: {
    width: scale(15),
    height: verticalScale(15),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 14,
  },
  view: {
    marginTop: 15,
    marginBottom: 7,
    fontSize: 14,
    color: '#ea6520',
    fontFamily: 'NunitoSans-Bold',
  },
  rowva: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logova: {
    height: verticalScale(30),
    width: scale(100),
  },
  circle: {
    backgroundColor: Color.labelgray,
    height: 20,
    width: 20,
    borderRadius: 20,
  },
});
