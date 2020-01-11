import React from 'react';
import {View, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import RadioOptionTrip from './RadioOptionTrip';
import FieldFromTo from './FieldFromTo';
import FieldData from './FieldData';
import {Button} from '../../../../../components/';
import {Color} from '../../../../../constants/Color';

type Props = {
  OptionTripPress: () => void;
  OptionTrip: string;
  fieldPress: () => void;
  searchFlightPress: () => void;
  isSearching: boolean;
  fromPressed: () => void;
  toPressed: () => void;
  fromCity: string;
  fromAirport: string;
  toCity: string;
  toAirport: string;
};
const Form = (props: Props) => {
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
        onPress={fieldPress}
        label="Departure Date"
        fieldValue="Wed, 21 Jan 2020"
      />
      {OptionTrip === 'return' ? (
        <FieldData
          icons={require('../../../../../assets/icons/icon_return.png')}
          onPress={fieldPress}
          label="Return Date"
          fieldValue="Wed, 21 Jan 2020"
        />
      ) : (
        <View />
      )}
      <FieldData
        icons={require('../../../../../assets/icons/icon_total_passenger.png')}
        onPress={fieldPress}
        label="Passenger"
        fieldValue="1 Adult"
      />
      <FieldData
        icons={require('../../../../../assets/icons/icon_cabin_class.png')}
        onPress={fieldPress}
        label="Cabin Class"
        fieldValue="Economy"
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
