import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity as Touch} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Imaging} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {moneyFormat} from '../../../../../helpers/helpers';
import {oc} from 'ts-optchain';

type Props = {
  id: string;
  price: number;
  statusPayment: string;
  imgPlane: string;
  isReturn: boolean;
  onPress: (item: any) => void;
  purchase?: boolean;
  type: string;
  data: any;
};

const Card = (props: Props) => {
  // Props
  const {
    type,
    data,
    onPress,
    id,
    price,
    statusPayment,
    imgPlane,
    isReturn,
    purchase,
  } = props;

  // Status Payment
  const statusPay = (status: string) => {
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
        <View style={[styles.status, {backgroundColor: Color.dustyOrange}]}>
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
      onPress={(item: any) => onPress(item)}>
      <Imaging
        style={styles.img}
        source={{uri: imgPlane}}
        resizeMode="contain"
      />
      <View style={{flex: 1}}>
        {type === ' flight' ? (
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.bold}>
              {oc(data[0]).flight_info.detail[0].departure_city_name(' ')}
            </Text>
            <Imaging
              style={styles.icon}
              source={require('../../../../../assets/payment/return.png')}
              resizeMode="contain"
            />
            <Text style={styles.bold}>
              {oc(data[0]).flight_info.detail[0].arrival_city_name(' ')}
            </Text>
          </View>
        ) : (
          <Text>
            {`${type === 'hotel' ? data.summary.name.content : data.title} - ${
              type === 'hotel' ? data.room.name : data.host
            }`.length > 35
              ? `${
                  type === 'hotel' ? data.summary.name.content : data.title
                } - ${type === 'hotel' ? data.room.name : data.host}`.slice(
                  0,
                  35,
                ) + '...'
              : `${
                  type === 'hotel' ? data.summary.name.content : data.title
                } - ${type === 'hotel' ? data.room.name : data.host}`}
          </Text>
        )}
        {/* <View> */}
        <Text style={[styles.regular, {marginTop: 5}]}>Booking ID {id}</Text>
        <Text style={[styles.bold, {marginVertical: 5}]}>
          Rp {moneyFormat(price)}
        </Text>
        {/* </View> */}
        <View style={styles.rowBetween}>
          {purchase ? (
            <View style={[styles.status, {backgroundColor: Color.backWhite}]}>
              <Text
                style={[
                  styles.regular,
                  {color: Color.green, fontFamily: 'NunitoSans-Bold'},
                ]}>
                Purchase Successful
              </Text>
            </View>
          ) : (
            statusPay(statusPayment)
          )}
          {isReturn && (
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

export const styles = StyleSheet.create({
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
