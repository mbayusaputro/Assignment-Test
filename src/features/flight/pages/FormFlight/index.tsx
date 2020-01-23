import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Alert} from 'react-native';
import {Color} from '../../../../constants/Color';
import Header from '../../components/Header';
import Form from './screen/Form';
import SearchAirport from './screen/SearchAirport';
import Calendar from './screen/Calendar';
import Passenger from './screen/Passenger';
import Class from './screen/Class';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {airport} from './data';

type Props = {
  handleOptionTripPress: () => void;
  handleFieldPress: (payload: any) => void;
  handleSearchFlight: () => void;
  handleFromToModals: (payload: any) => void;
  handleSelect: (payload: object) => void;
  handleSelectDate: (payload: object) => void;
  handleSelectDateReturn: (payload: object) => void;
  handleSelectPassenger: (payload: object) => void;
  handleSelectClass: (payload: object) => void;
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
    handleSelectDateReturn,
    handleSelectPassenger,
    handleSelectClass,
  } = props;

  const [optionTrip, setoptionTrip] = useState('oneway');
  const [isSearching, setSearching] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isCalendar1Visible, setCalendar1Visible] = useState(false);
  const [isPassengerVisible, setPassengerVisible] = useState(false);
  const [isClassVisible, setClassVisible] = useState(false);
  const [isParams, setParams] = useState('');
  const [isFrom, setFrom] = useState(null);
  const [isTo, setTo] = useState(null);
  const [isDate, setDate] = useState(new Date());
  const [isDateReturn, setDateReturn] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1)),
  );
  const [isPassenger, setPassenger] = useState({adult: 1, child: 0, infant: 0});
  const [isClass, setClass] = useState('Economy');

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
    setSearchVisible(!isSearchVisible);
  };

  handleSelectDate = (date: any) => {
    setDate(date);
    setCalendarVisible(!isCalendarVisible);
  };

  handleSelectDateReturn = (date: any) => {
    setDateReturn(date);
    setCalendar1Visible(!isCalendar1Visible);
  };

  handleFieldPress = (value: string) => {
    value === 'date'
      ? setCalendarVisible(!isCalendarVisible)
      : value === 'return_date'
      ? setCalendar1Visible(!isCalendar1Visible)
      : value === 'passenger'
      ? setPassengerVisible(!isPassengerVisible)
      : value === 'class'
      ? setClassVisible(!isClassVisible)
      : navigate('ResultFlight');
  };

  handleSelectPassenger = (data: any) => {
    setPassenger(data);
    setPassengerVisible(!isPassengerVisible);
  };

  handleSelectClass = (data: any) => {
    setClass(data);
    setClassVisible(!isClassVisible);
  };

  handleSearchFlight = () => {
    // setSearching(true);
    // setTimeout(() => {
    //   setSearching(false);
    // }, 5000);
    let payload = {
      from: isFrom,
      to: isTo,
      date: isDate,
      date_return: isDateReturn,
      passenger: isPassenger,
      cabin_class: isClass,
    };
    alert(JSON.stringify(payload));
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
      <Calendar
        isModalVisible={isCalendar1Visible}
        toggleModal={() => handleFieldPress('return_date')}
        onDateChange={handleSelectDateReturn}
      />
      <Passenger
        isModalVisible={isPassengerVisible}
        toggleModal={() => handleFieldPress('passenger')}
        onPassengerChange={handleSelectPassenger}
        isPassenger={isPassenger}
      />
      <Class
        isModalVisible={isClassVisible}
        toggleModal={() => handleFieldPress('class')}
        onClassChange={handleSelectClass}
      />
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
