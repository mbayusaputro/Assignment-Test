import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../constants/Color';
import {HEADER_FONT_SIZE} from '../../../constants/TextSize';

interface Props {
  goBack?: boolean;
  title: string;
}
const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.marineBlue,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Color.white,
    fontSize: HEADER_FONT_SIZE,
    fontFamily: 'NunitoSans-ExtraBold',
  },
});
export default Header;
