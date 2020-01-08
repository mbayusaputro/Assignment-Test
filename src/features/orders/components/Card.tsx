import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../constants/ScaleUtils';
import {WIDTH_SCREEN, HEIGHT_SCREEN} from '../../../constants/Dimension';
import {Button} from '../../../components';
import {Color} from '../../../constants/Color';
import style from '../../payment/style';

interface Props {
  departure: string;
  destination: string;
  id: string;
  price: string;
}

const Card = (props: Props) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://traveloka.s3.amazonaws.com/imageResource/2015/12/17/1450349771401-f7437a87e83b08f17055dc44d3ecb70e.png',
        }}
        resizeMode="contain"
      />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.bold}>{props.departure}</Text>
          <Image
            style={styles.icon}
            source={require('../../../assets/payment/return.png')}
            resizeMode="contain"
          />
          <Text style={styles.bold}>{props.destination}</Text>
        </View>
        {/* <View> */}
        <Text style={[styles.regular, {marginTop: 5}]}>
          Booking ID {props.id}
        </Text>
        <Text style={[styles.bold, {marginVertical: 5}]}>Rp{props.price}</Text>
        {/* </View> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.status}>
            <Text style={[styles.regular, {color: Color.white}]}>
              E-ticket has been Published
            </Text>
          </View>
          <Image
            style={{
              height: verticalScale(15),
              width: scale(15),
            }}
            source={require('../../../assets/payment/return.png')}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
  },
  img: {
    height: verticalScale(30),
    width: scale(50),
    marginVertical: 5,
    marginRight: 10,
  },
  icon: {
    height: verticalScale(15),
    width: scale(15),
    marginTop: 3,
    marginHorizontal: 5,
  },
  status: {
    backgroundColor: Color.green,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});
