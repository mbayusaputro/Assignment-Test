import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Alert} from 'react-native';
import {Color} from '../../../../constants/Color';
import Header from '../../components/Header';
import Form from './screen/Form';
import SearchAirport from './screen/SearchAirport';

type Props = {
  handleOptionTripPress: () => void;
  handleFieldPress: () => void;
  handleSearchFlight: () => void;
  handleFromToModals: () => void;
};

const FormFlight = (props: Props) => {
  let {
    handleOptionTripPress,
    handleFieldPress,
    handleSearchFlight,
    handleFromToModals,
  } = props;

  const [optionTrip, setoptionTrip] = useState('oneway');
  const [isSearching, setSearching] = useState(false);

  handleOptionTripPress = () => {
    if (optionTrip === 'oneway') {
      setoptionTrip('return');
    } else {
      setoptionTrip('oneway');
    }
  };

  handleFromToModals = () => {
    Alert.alert('handleFromToModals');
  };

  handleFieldPress = () => {
    Alert.alert('handleFieldPress');
  };

  handleSearchFlight = () => {
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
    }, 5000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Booking Your Flights" />
      <Form
        isSearching={isSearching}
        OptionTripPress={handleOptionTripPress}
        OptionTrip={optionTrip}
        fieldPress={handleFieldPress}
        searchFlightPress={handleSearchFlight}
        fromPressed={handleFromToModals}
        toPressed={handleFromToModals}
        fromCity="Jakarta"
        fromAirport="CGK"
        toCity="Denpasar"
        toAirport="DPS"
      />

      <SearchAirport />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightgray,
  },
});
export default FormFlight;
