import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';

const Header = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    backgroundColor: Color.marineBlue,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    height: 50,
    width: '100%',
  },
  id: {
    color: Color.white,
    position: 'absolute',
    top: -15,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 13,
  },
});
export default Header;
