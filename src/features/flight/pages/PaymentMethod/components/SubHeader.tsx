import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';

interface Props {
  id: string;
}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>{`Order ID ${props.id}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
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
