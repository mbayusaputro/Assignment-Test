import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../constants/Color';
import {TITLE_FONT_SIZE} from '../../../constants/TextSize';

interface Props {
  id: string;
}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>{`Order ID : ${props.id}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
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
    fontFamily: 'NunitoSans-Regular',
    fontSize: TITLE_FONT_SIZE,
    fontWeight: 'bold',
  },
});
export default Header;
