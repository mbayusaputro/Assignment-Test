import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Alert} from 'react-native';
import {Color} from '../../../../constants/Color';
import Header from '../../components/Header';
import Form from './screen/Form';

type Props = {
  handleOptionTripPress: () => void;
  handleFieldPress: () => void;
};

const FormFlight = (props: Props) => {
  let {handleOptionTripPress, handleFieldPress} = props;

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

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Booking Your Flights" />
      <Form
        OptionTripPress={handleOptionTripPress}
        OptionTrip={optionTrip}
        fieldPress={handleFieldPress}
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
