import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import {moneyFormat} from '../../../../../helpers/helpers';

type Props = {
  departure_time: string;
  arrival_time: string;
  departure: string;
  arrival: string;
  price: number;
  img: string;
  duration: string;
  transit: string;
  total_flight: number;
};

const ListView = (props: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
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
        <Text style={styles.bold}>Rp {moneyFormat(props.price)}</Text>
      </View>
      <View
        style={{
          backgroundColor: Color.lightgray,
          width: WIDTH_SCREEN,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          marginTop: 15,
        }}>
        <Text style={{fontFamily: 'NunitoSans-SemiBold', fontSize: 13}}>
          Select Return Flights From {props.total_flight} Schedule
        </Text>
      </View>
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    paddingTop: 5,
    borderRadius: 5,
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
    fontFamily: 'NunitoSans-Regular',
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: Color.orange,
  },
  info: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.brownGreyF,
    fontSize: 12,
  },
});
