import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';

interface Props {
  return: boolean;
  data: any;
}

const Card = (form: string, titleForm: string, date: string, props: any) => {
  return (
    <View style={styles.wrap}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {date === 'return' ? (
          <Image
            style={{
              height: verticalScale(30),
              width: scale(30),
              marginRight: 10,
            }}
            source={require('../../../../../assets/icons/flight_flip.png')}
            resizeMode="contain"
          />
        ) : (
          <Image
            style={{
              height: verticalScale(30),
              width: scale(30),
              marginRight: 10,
            }}
            source={require('../../../../../assets/icons/flight_oneway.png')}
            resizeMode="contain"
          />
        )}
        <Text style={styles.regular}>
          {form === 'child'
            ? titleForm + ' x' + props.data.child
            : form === 'infant'
            ? titleForm + ' x' + props.data.infant
            : titleForm + ' x' + props.data.adult}
        </Text>
      </View>
      <Text style={styles.regular}>
        Rp
        {form === 'child'
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
            ).toLocaleString('id-ID')}
      </Text>
    </View>
  );
};

const Price = (props: Props) => {
  return (
    <View style={{marginTop: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        {`Price Departure${props.return ? ' & Return' : ''}`}
      </Text>
      <View style={{marginVertical: 20}}>
        {Card('adult', 'Adult', '', props)}
        {props.data.child > 0 ? Card('child', 'Child', '', props) : []}
        {props.data.infant > 0 ? Card('infant', 'Infant', '', props) : []}
        {props.return ? Card('adult', 'Adult', 'return', props) : []}
        {props.return ? Card('child', 'Child', 'return', props) : []}
        {props.return ? Card('infant', 'Infant', 'return', props) : []}
        <View style={styles.linehorizon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
  },
  linehorizon: {
    backgroundColor: Color.labelgray,
    height: 1,
    marginTop: 10,
  },
});

export default Price;
