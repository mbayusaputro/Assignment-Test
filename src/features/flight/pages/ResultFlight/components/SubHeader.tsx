import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import moment from 'moment';
import {verticalScale} from '../../../../../constants/ScaleUtils';

type Props = {
  date: any;
  adult: number;
  child: number;
  infant: number;
  class: string;
  total_flight: number;
};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: -10,
          alignItems: 'center',
        }}>
        <Text style={styles.id}>
          {moment(props.date).format('ddd, DD MMM')}
        </Text>
        <View style={styles.circle} />
        <Text style={styles.id}>
          Adult {props.adult}
          {props.child > 0 ? `, Child ${props.child}` : []}
          {props.infant > 0 ? `, Infant ${props.infant}` : []}
        </Text>
        <View style={styles.circle} />
        <Text style={styles.id}>{props.class}</Text>
      </View>
      <View style={styles.top}>
        <Text style={styles.ids}>
          Select Departure Flights From {props.total_flight} Schedule
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.marineBlue,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 55,
    width: '100%',
  },
  id: {
    color: Color.white,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 13,
  },
  ids: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 13,
  },
  top: {
    backgroundColor: Color.lightgray,
    paddingVertical: 10,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
  },
  circle: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: Color.white,
    marginHorizontal: 5,
  },
  tops: {
    backgroundColor: Color.white,
    height: 35,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
});
export default Header;
