import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Color} from '../../../../constants/Color';
import Header from '../../components/Header';
import Form from './screen/Form';
import SearchAirport from './screen/SearchAirport';
import Calendar from './screen/Calendar';
import Passenger from './screen/Passenger';
import Class from './screen/Class';
import {airport, from, to} from './data';
import moment from 'moment';
import {Props} from './types';
import {HighSafeArea} from '../../../../components';
import {connect} from 'react-redux';
import {getAddon} from '../../../../reduxs/holiday/selector';

const FormFlight = (props: Props) => {
  let {
    handleOptionTripPress,
    handleFieldPress,
    handleSearchFlight,
    handleFromToModals,
    navigation: {navigate, goBack, state},
    handleSelect,
    handleSelectDate,
    handleSelectDateReturn,
    handleSelectPassenger,
    handleSelectClass,
    addon,
  } = props;

  const [optionTrip, setoptionTrip] = useState('oneway');
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isCalendar1Visible, setCalendar1Visible] = useState(false);
  const [isPassengerVisible, setPassengerVisible] = useState(false);
  const [isClassVisible, setClassVisible] = useState(false);
  const [isParams, setParams] = useState('');
  const [isFrom, setFrom]: any = useState(from);
  const [isTo, setTo]: any = useState(to);
  const [isDate, setDate] = useState(new Date());
  const [isDateReturn, setDateReturn] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1)),
  );
  const [isPassenger, setPassenger] = useState({adult: 1, child: 0, infant: 0});
  const [isClass, setClass] = useState('Economy');

  useEffect(() => {
    checkOptionAddOn();
  }, []);

  const checkOptionAddOn = () => {
    const {params} = state;
    let payload = {
      adult: params && params.item.adult,
      child: params && params.item.child,
      infant: 0,
    };
    if (addon) {
      setoptionTrip('return');
      setTo(params.detail.flight);
      setDate(params.detail.trip_date.start_date);
      setDateReturn(params.detail.trip_date.end_date);
      setPassenger(payload);
    }
  };

  const onBack = () => {
    goBack();
  };

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
    setDateReturn(
      new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
    );
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
    let payload = {
      from: isFrom,
      to: isTo,
      date: moment(isDate).format('YYYY-MM-DD'),
      date_return:
        optionTrip === 'return'
          ? moment(isDateReturn).format('YYYY-MM-DD')
          : '',
      passenger: isPassenger,
      cabin_class: isClass,
    };
    navigate('ResultFlight', payload);
  };

  return (
    <HighSafeArea style={styles.container}>
      <Header goBack={onBack} />
      <ScrollView>
        <Form
          OptionTripPress={handleOptionTripPress}
          OptionTrip={optionTrip}
          fieldPress={handleFieldPress}
          searchFlightPress={handleSearchFlight}
          fromPressed={() => handleFromToModals('from')}
          toPressed={() => handleFromToModals('to')}
          fromCity={isFrom.city_name}
          fromAirport={isFrom.airport_code}
          toCity={isTo.city_name}
          toAirport={isTo.airport_code}
          date={moment(isDate).format('ddd, DD MMM YYYY')}
          dateReturn={moment(isDateReturn).format('ddd, DD MMM YYYY')}
          passenger={isPassenger}
          cabinClass={isClass}
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
          date={isDate}
        />
        <Calendar
          isModalVisible={isCalendar1Visible}
          toggleModal={() => handleFieldPress('return_date')}
          onDateChange={handleSelectDateReturn}
          date={isDateReturn}
          disabled={
            new Date(new Date(isDate).setDate(new Date(isDate).getDate() + 1))
          }
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
      </ScrollView>
    </HighSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightgray,
  },
});

const mapStateToProps = (state: any) => ({
  addon: getAddon(state),
});

export default connect(mapStateToProps)(FormFlight);
