import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {oc} from 'ts-optchain';
import {Text} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';

type Props = {
  return: boolean;
  data: any;
};

const zeroArray = new Array(0);

const Card = (
  key: number,
  form: string,
  titleForm: string,
  date: string,
  data: any,
) => {
  return (
    <View key={key} style={styles.wrap}>
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
            ? titleForm + ' x' + oc(data).cabin_info.child('Child')
            : form === 'infant'
            ? titleForm + ' x' + oc(data).cabin_info.infant('Infant')
            : titleForm + ' x' + oc(data).cabin_info.adult('Adult')}
        </Text>
      </View>
      <Text style={styles.regular}>
        Rp
        {form === 'child'
          ? (date === 'return'
              ? oc(data).flight_info.price_child(0) * data.cabin_info.child
              : oc(data).flight_info.price_child(0) * data.cabin_info.child
            ).toLocaleString('id-ID')
          : form === 'infant'
          ? (date === 'return'
              ? oc(data).flight_info.price_infant(0) * data.cabin_info.infant
              : oc(data).flight_info.price_infant(0) * data.cabin_info.infant
            ).toLocaleString('id-ID')
          : (date === 'return'
              ? oc(data).flight_info.price_adult(0) * data.cabin_info.adult
              : oc(data).flight_info.price_adult(0) * data.cabin_info.adult
            ).toLocaleString('id-ID')}
      </Text>
    </View>
  );
};

const Price = (props: Props) => {
  return (
    <View style={{marginTop: 10}}>
      <Text
        style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}
        content={{
          id: `Harga Berangkat${props.return ? ' & Pulang' : ''}`,
          en: `Price Departure${props.return ? ' & Return' : ''}`,
        }}
      />
      <View style={{marginVertical: 20}}>
        {props.data.map((item: any, index: number) => {
          // item.cabin_info.adult > 0 ? Card('adult', 'Adult', index === 0 ? '' : 'return', item) : zeroArray
          if (item.cabin_info.adult > 0) {
            return Card(
              index,
              'adult',
              'Adult',
              index === 0 ? '' : 'return',
              item,
            );
          }
          if (item.cabin_info.child > 0) {
            return Card(
              index,
              'child',
              'Child',
              index === 0 ? '' : 'return',
              item,
            );
          }
          if (item.cabin_info.infant > 0) {
            return Card(
              index,
              'infant',
              'Infant',
              index === 0 ? '' : 'return',
              item,
            );
          } else {
            return zeroArray;
          }
        })}
        {/* {Card('adult', 'Adult', '', props)}
        {props.data.cabin_info.child > 0
          ? Card('child', 'Child', '', props)
          : []}
        {props.data.cabin_info.infant > 0
          ? Card('infant', 'Infant', '', props)
          : []} */}
        {/* {props.return ? Card('adult', 'Adult', 'return', props) : []}
        {props.return ? Card('child', 'Child', 'return', props) : []}
        {props.return ? Card('infant', 'Infant', 'return', props) : []} */}
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
