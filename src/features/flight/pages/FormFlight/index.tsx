import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Alert} from 'react-native';
import {Color} from '../../../../constants/Color';
import Header from '../../components/Header';
import Form from './screen/Form';
import SearchAirport from './screen/SearchAirport';
import Calendar from './screen/Calendar';
import Passenger from './screen/Passenger';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {airport} from './data';

type Props = {
  handleOptionTripPress: () => void;
  handleFieldPress: (payload: any) => void;
  handleSearchFlight: () => void;
  handleFromToModals: (payload: any) => void;
  handleSelect: (payload: object) => void;
  handleSelectDate: (payload: object) => void;
  navigation: NavigationScreenProp<NavigationState>;
};

const FormFlight = (props: Props) => {
  let {
    handleOptionTripPress,
    handleFieldPress,
    handleSearchFlight,
    handleFromToModals,
    navigation: {navigate},
    handleSelect,
    handleSelectDate,
  } = props;

  const [optionTrip, setoptionTrip] = useState('oneway');
  const [isSearching, setSearching] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isParams, setParams] = useState('');
  const [isFrom, setFrom] = useState(null);
  const [isTo, setTo] = useState(null);
  const [isDate, setDate] = useState(null);
  const [isDateReturn, setDateReturn] = useState(null);

  handleOptionTripPress = () => {
    if (optionTrip === 'oneway') {
      setoptionTrip('return');
    } else {
      setoptionTrip('oneway');
    }
  };

  handleFromToModals = (value: string) => {
    setSearchVisible(!isSearchVisible);
    setParams(value);
  };

  handleSelect = (item: any) => {
    isParams === 'from' ? setFrom(item) : setTo(item);
  };

  handleSelectDate = (date: any) => {
    optionTrip === 'oneway' ? setDate(date) : setDateReturn(date);
  };

  handleFieldPress = (value: string) => {
    value === 'date'
      ? setCalendarVisible(!isCalendarVisible)
      : navigate('ResultFlight');
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
        fromPressed={() => handleFromToModals('from')}
        toPressed={() => handleFromToModals('to')}
        fromCity="Jakarta"
        fromAirport="CGK"
        toCity="Denpasar"
        toAirport="DPS"
      />

      <SearchAirport
        airport={airport}
        isModalVisible={isSearchVisible}
        toggleModal={() => handleFromToModals(isParams)}
        handleSelect={handleSelect}
      />
      <Calendar
        isModalVisible={isCalendarVisible}
        toggleModal={() => handleFieldPress('date')}
        onDateChange={handleSelectDate}
      />
      <Passenger />
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
