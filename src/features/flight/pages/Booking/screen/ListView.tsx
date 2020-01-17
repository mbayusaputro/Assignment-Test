import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';
import moment from 'moment';

type Props = {
  departure_time: string;
  arrival_time: string;
  departure: string;
  arrival: string;
  airline: string;
  img: string;
  duration: string;
  transit: string;
  title: string;
  date: any;
};

const ListView = (props: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.bold}>{props.title}</Text>
        <Text style={styles.regular}>
          {moment(props.date).format('ddd, DD MMM')}
        </Text>
      </View>
      <View style={[styles.row, {marginTop: 10}]}>
        <Text style={styles.extrabold}>{props.departure_time}</Text>
        <Image
          style={{
            height: verticalScale(15),
            width: scale(100),
            marginTop: 2,
            marginHorizontal: 5,
          }}
          source={require('../../../../../assets/icons/dashed_flight.png')}
          resizeMode="contain"
        />
        <Text style={styles.extrabold}>{props.arrival_time}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.regular}>{props.departure}</Text>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.info}>
            {`${props.duration} ${props.transit}`}
          </Text>
        </View>
        <Text style={styles.regular}>{props.arrival}</Text>
      </View>
      <View style={[styles.row, {marginTop: 10}]}>
        <Image
          style={{
            height: verticalScale(20),
            width: scale(50),
            marginTop: 2,
          }}
          source={{uri: props.img}}
          resizeMode="contain"
        />
        <Text style={styles.regular}>{props.airline}</Text>
      </View>
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  extrabold: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: 16,
  },
  regular: {
    fontFamily: 'NunitoSans-SemiBold',
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
    color: Color.orange,
  },
  info: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.brownGreyF,
    fontSize: 12,
  },
});
