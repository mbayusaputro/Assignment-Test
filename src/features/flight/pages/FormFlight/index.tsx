import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Alert} from 'react-native';
import {Color} from '../../../../constants/Color';
import Header from '../../components/Header';
import Form from './screen/Form';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

type Props = {
  handleOptionTripPress: () => void;
  handleFieldPress: () => void;
  handleSearchPress: () => void;
  navigation: NavigationScreenProp<NavigationState>;
};

const FormFlight = (props: Props) => {
  let {
    handleOptionTripPress,
    handleFieldPress,
    handleSearchPress,
    navigation: {navigate},
  } = props;

  const [optionTrip, setoptionTrip] = useState('oneway');

  handleOptionTripPress = () => {
    if (optionTrip === 'oneway') {
      setoptionTrip('return');
    } else {
      setoptionTrip('oneway');
    }
  };

  handleFieldPress = () => {
    Alert.alert('handleFieldPress');
  };

  handleSearchPress = () => {
    navigate('ResultFlight');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Booking Your Flights" />
      <Form
        OptionTripPress={handleOptionTripPress}
        OptionTrip={optionTrip}
        fieldPress={handleFieldPress}
        searchPress={handleSearchPress}
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
