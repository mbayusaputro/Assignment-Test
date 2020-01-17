import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';

const Card = (form: string, titleForm: string, date: string, props: any) => {
  return (
    <View>
      {date !== '1' ? (
        <View style={{backgroundColor: Color.lightgray, height: 1}} />
      ) : (
        []
      )}
      <View style={styles.wrap}>
        <View style={styles.row}>
          {date === 'return' ? (
            <Image
              style={styles.icon}
              source={require('../../../../../assets/icons/flight_flip.png')}
              resizeMode="contain"
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../../../../../assets/icons/flight_oneway.png')}
              resizeMode="contain"
            />
          )}
          <Text style={styles.regular}>
            {form === 'child'
              ? titleForm + ' x' + 1
              : form === 'infant'
              ? titleForm + ' x' + 1
              : titleForm + ' x' + 1}
          </Text>
        </View>
        <Text style={styles.regular}>
          Rp1.900.000
          {/* {form === 'child'
          ? (date === 'return'
              ? props.data.flightSelectedReturn.price_child * props.data.child
              : props.data.flightSelected.price_child * props.data.child
            ).toLocaleString('id-ID')
          : form === 'infant'
          ? (date === 'return'
              ? props.data.flightSelectedReturn.price_infant * props.data.infant
              : props.data.flightSelected.price_infant * props.data.infant
            ).toLocaleString('id-ID')
          : (date === 'return'
              ? props.data.flightSelectedReturn.price_adult * props.data.adult
              : props.data.flightSelected.price_adult * props.data.adult
            ).toLocaleString('id-ID')} */}
        </Text>
      </View>
    </View>
  );
};

const Price = (props: any) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        Price Departure & Return
      </Text>
      <View style={styles.card}>
        {Card('adult', 'Adult', '1', props)}
        {Card('adult', 'Adult', 'return', props)}
      </View>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: verticalScale(16),
    width: scale(25),
    marginRight: 10,
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
