import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';

const Card = (form: string, titleForm: string, date: string, props: any) => {
  const {departure, returns, data} = props;
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
              ? titleForm + ' x' + data.child.length
              : form === 'infant'
              ? titleForm + ' x' + data.infant.length
              : titleForm + ' x' + data.adult.length}
          </Text>
        </View>
        <Text style={styles.regular}>
          {form === 'child'
            ? (date === 'return'
                ? returns === null
                  ? 0
                  : returns.price_child * data.child.length
                : departure.price_child * data.child.length
              ).toLocaleString('id-ID')
            : form === 'infant'
            ? (date === 'return'
                ? returns === null
                  ? 0
                  : returns.price_infant * data.infant.length
                : departure.price_infant * data.infant.length
              ).toLocaleString('id-ID')
            : (date === 'return'
                ? returns === null
                  ? 0
                  : returns.price_adult * data.adult.length
                : departure.price_adult * data.adult.length
              ).toLocaleString('id-ID')}
        </Text>
      </View>
    </View>
  );
};

const Price = (props: any) => {
  const {returns, data} = props;
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        {`Price Departure${returns === null ? '' : '& Return'}`}
      </Text>
      <View style={styles.card}>
        {Card('adult', 'Adult', '1', props)}
        {data.child.length > 0 ? Card('child', 'Child', '', props) : []}
        {data.infant.length > 0 ? Card('infant', 'Infant', '', props) : []}
        {returns === null ? [] : Card('adult', 'Adult', 'return', props)}
        {data.child.length > -1 && returns === null
          ? []
          : Card('child', 'Child', 'return', props)}
        {data.infant.length > 0 && returns === null
          ? []
          : Card('infant', 'Infant', 'return', props)}
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
