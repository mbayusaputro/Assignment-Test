import React from 'react';
import {View, StyleSheet, TouchableOpacity as Touch} from 'react-native';
import Modal from 'react-native-modal';
import {BirthDatePicker, Button} from '../../../../../components';
import {BirthDateProps as Props} from '../interface/types';
import {Color} from '../../../../../constants/Color';

export default (props: Props) => {
  // State
  const [year, setYear] = React.useState(1999);
  const [month, setMonth] = React.useState(0);
  const [day, setDate] = React.useState(1);

  // Function
  const showDate = () => {
    const theMonth =
      month.toString().length === 1 ? `0${month + 1}` : month + 1;
    const theDay = day.toString().length === 1 ? `0${day}` : day;
    const payload = `${year}-${theMonth}-${theDay}`;
    props.onDatesChange(payload);
  };

  // Main Render
  return (
    <Modal
      useNativeDriver={true}
      isVisible={props.isVisible}
      avoidKeyboard={true}
      onBackButtonPress={props.onDismiss}
      onBackdropPress={props.onDismiss}
      style={styles.modal}
      children={
        <View style={styles.container}>
          <BirthDatePicker
            selectedYear={year}
            selectedMonth={month}
            selectedDay={day}
            onYearValueChange={(text: any, i: any) => setYear(text)}
            onMonthValueChange={(text: any, i: any) => setMonth(text)}
            onDayValueChange={(text: any, i: any) => setDate(text)}
          />
          <Button
            content={{id: 'Pilih Tanggal', en: 'Set Date'}}
            onPress={showDate}
            fullWidth
            isUpperCase
          />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: Color.white,
    padding: 10,
    paddingBottom: 20,
  },
});
