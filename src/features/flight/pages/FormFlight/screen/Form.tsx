import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import RadioOptionTrip from './RadioOptionTrip';
import FieldFromTo from './FieldFromTo';
import FieldData from './FieldData';
import {Button} from '../../../../../components/';
import {Color} from '../../../../../constants/Color';
import {FormProps} from '../types';

const Form = (props: FormProps) => {
  let {
    OptionTripPress,
    OptionTrip,
    fieldPress,
    searchFlightPress,
    isSearching,
    fromPressed,
    toPressed,
    fromCity,
    fromAirport,
    toCity,
    toAirport,
    date,
    dateReturn,
    passenger,
    cabinClass,
  } = props;
  return (
    <View style={styles.container}>
      <RadioOptionTrip
        OptionTripPress={OptionTripPress}
        OptionTrip={OptionTrip}
      />
      <FieldFromTo
        fromPressed={fromPressed}
        toPressed={toPressed}
        fromCity={fromCity}
        fromAirport={fromAirport}
        toCity={toCity}
        toAirport={toAirport}
      />
      <FieldData
        icons={require('../../../../../assets/icons/icon_departure.png')}
        onPress={() => fieldPress('date')}
        label="Departure Date"
        fieldValue={date}
      />
      {OptionTrip === 'return' ? (
        <FieldData
          icons={require('../../../../../assets/icons/icon_return.png')}
          onPress={() => fieldPress('return_date')}
          label="Return Date"
          fieldValue={dateReturn}
        />
      ) : (
        <View />
      )}
      <FieldData
        icons={require('../../../../../assets/icons/icon_total_passenger.png')}
        onPress={() => fieldPress('passenger')}
        label="Passenger"
        fieldValue={`Adult ${passenger.adult}${
          passenger.child > 0 ? `, Child ${passenger.child}` : []
        }${passenger.infant > 0 ? `, Infant ${passenger.infant}` : []}`}
      />
      <FieldData
        icons={require('../../../../../assets/icons/icon_cabin_class.png')}
        onPress={() => fieldPress('class')}
        label="Cabin Class"
        fieldValue={cabinClass}
      />
      {isSearching ? (
        <ActivityIndicator
          size="large"
          color={Color.red}
          style={{marginTop: 20}}
        />
      ) : (
        <Button
          customStyle={{marginVertical: 20, borderRadius: 20}}
          type="primary"
          fullWidth={true}
          isUpperCase={true}
          content={{id: 'Search Flight', en: 'Search Flight'}}
          onPress={searchFlightPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});
export default Form;
