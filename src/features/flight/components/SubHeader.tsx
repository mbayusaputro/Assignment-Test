import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Color} from '../../../constants/Color';
import {scale, verticalScale} from '../../../constants/ScaleUtils';
import moment from 'moment';
import {HEADER_FONT_SIZE} from '../../../constants/TextSize';

interface Props {
  date: any;
  passenger: any;
  class: any;
}

const Header = (props: any) => {
  return (
    <View style={styles.contain}>
      <Image
        style={{height: verticalScale(16), width: scale(20), marginTop: 5}}
        source={require('../../../assets/icons/back.png')}
        resizeMode="contain"
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>{props.departure}</Text>
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
        <Text style={styles.title}>{props.destination}</Text>
      </View>
      <Image
        style={{height: verticalScale(16), width: scale(10), marginTop: 5}}
        source={require('../../../assets/icons/icon_dot_vertical.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const SubHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', position: 'absolute', top: -10}}>
        <Text style={styles.id}>
          {`${moment(props.date).format('ddd, D MMM')} • ${props.passenger} • ${
            props.class
          }`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
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
    fontFamily: 'NunitoSans-Regular',
    fontSize: 13,
  },
  return: {
    marginTop: 5,
    width: scale(12),
    height: verticalScale(12),
    marginHorizontal: 5,
  },
});
export {SubHeader, Header};
