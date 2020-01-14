import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {HEADER_FONT_SIZE} from '../../../../../constants/TextSize';
import {verticalScale} from '../../../../../constants/ScaleUtils';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';

interface Props {
  goBack?: boolean;
  title: string;
}
const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{height: verticalScale(16), marginTop: 5}}
        source={require('../../../../../assets/icons/back.png')}
        resizeMode="contain"
      />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.marineBlue,
    alignItems: 'center',
    height: 60,
  },
  title: {
    marginLeft: WIDTH_SCREEN / 7,
    color: Color.white,
    fontSize: HEADER_FONT_SIZE,
    fontFamily: 'NunitoSans-ExtraBold',
  },
});
export default Header;
