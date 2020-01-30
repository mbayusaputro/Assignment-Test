import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {HEADER_FONT_SIZE} from '../../../../../constants/TextSize';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {HeaderProps} from '../types';

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.goBack}>
        <Image
          style={{height: verticalScale(16), width: scale(20), marginTop: 5}}
          source={require('../../../../../assets/icons/back.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.title}>{props.from}</Text>
        <Image
          style={{
            height: verticalScale(16),
            width: scale(40),
            marginHorizontal: 5,
          }}
          source={require('../../../../../assets/icons/icon_header_flight_result.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>{props.to}</Text>
      </View>
      <Image
        style={{height: verticalScale(16), width: scale(10), marginTop: 5}}
        source={require('../../../../../assets/icons/icon_dot_vertical.png')}
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
