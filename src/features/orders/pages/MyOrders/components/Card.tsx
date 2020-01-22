import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity as Touch} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Imaging} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {moneyFormat} from '../../../../../helpers/helpers';

type Props = {
  departure: string;
  destination: string;
  id: string;
  price: number;
  statusPayment: string;
  imgPlane: string;
  isReturn: boolean;
  onPress: (item: any) => void;
};

const Card = (props: Props) => {
  // Status Payment
  const statusPayment = (status: string) => {
    if (status === 'WAITING_PAYMENT') {
      return (
        <View style={[styles.status, {backgroundColor: Color.oceanBlue}]}>
          <Text style={[styles.regular, {color: Color.white}]}>
            Waiting for Payment
          </Text>
        </View>
      );
    } else if (status === 'BOOKED') {
      return (
        <View style={styles.status}>
          <Text style={[styles.regular, {color: Color.white}]}>Booked</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.status}>
          <Text style={[styles.regular, {color: Color.white}]}>
            E-ticket has been Published
          </Text>
        </View>
      );
    }
  };

  // Main Render
  return (
    <Touch
      style={styles.card}
      activeOpacity={0.5}
      onPress={(item: any) => props.onPress(item)}>
      <Imaging
        style={styles.img}
        source={{uri: props.imgPlane}}
        resizeMode="contain"
      />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={styles.bold}>{props.departure}</Text>
          <Imaging
            style={styles.icon}
            source={require('../../../../../assets/payment/return.png')}
            resizeMode="contain"
          />
          <Text style={styles.bold}>{props.destination}</Text>
        </View>
        {/* <View> */}
        <Text style={[styles.regular, {marginTop: 5}]}>
          Booking ID {props.id}
        </Text>
        <Text style={[styles.bold, {marginVertical: 5}]}>
          Rp {moneyFormat(props.price)}
        </Text>
        {/* </View> */}
        <View style={styles.rowBetween}>
          {statusPayment(props.statusPayment)}
          {props.isReturn && (
            <Imaging
              style={styles.iconReturn}
              source={require('../../../../../assets/payment/return.png')}
              resizeMode="contain"
            />
          )}
        </View>
      </View>
    </Touch>
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
    marginHorizontal: 20,
    marginVertical: 5,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bold: {
    fontFamily: fonts.fontBold,
  },
  regular: {
    fontFamily: fonts.fontReguler,
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
  iconReturn: {
    height: verticalScale(15),
    width: scale(15),
  },
  status: {
    backgroundColor: Color.green,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});
