import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Color} from '../../../constants/Color';
import {HEADER_FONT_SIZE} from '../../../constants/TextSize';
import {verticalScale, scale} from '../../../constants/ScaleUtils';
import {WIDTH_SCREEN} from '../../../constants/Dimension';

interface Props {
  goBack?: boolean;
  title: string;
}
const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{height: verticalScale(16), width: scale(20), marginTop: 5}}
        source={require('../../../assets/icons/back.png')}
        resizeMode="contain"
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>{props.title}</Text>
        <Image
          style={{
            height: verticalScale(16),
            width: scale(40),
            marginTop: 5,
            marginHorizontal: 5,
          }}
          source={require('../../../assets/icons/icon_header_flight_result.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Image
        style={{height: verticalScale(16), width: scale(10), marginTop: 5}}
        source={require('../../../assets/icons/icon_dot_vertical.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.marineBlue,
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    color: Color.white,
    fontSize: HEADER_FONT_SIZE,
    fontFamily: 'NunitoSans-ExtraBold',
  },
});
export default Header;
