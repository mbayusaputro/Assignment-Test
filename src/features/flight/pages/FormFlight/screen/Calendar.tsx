import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import Header from '../../../components/Head';
import CalendarPicker from 'react-native-calendar-picker';
import {CalendarProps} from '../types';

const Calendar = (props: CalendarProps) => {
  // Props
  const {isModalVisible, toggleModal, onDateChange, disabled, date} = props;
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isModalVisible}
        backdropColor={Color.white}
        backdropOpacity={1}
        onBackButtonPress={toggleModal}
        style={{marginHorizontal: 0}}>
        <SafeAreaView style={{flex: 1}}>
          <Header title="Select Departure Date" goBack={toggleModal} />
          <View style={styles.title}>
            <CalendarPicker
              textStyle={{fontFamily: 'NunitoSans-SemiBold'}}
              minDate={disabled ? disabled : new Date()}
              onDateChange={onDateChange}
              selectDayColor={Color.berry}
              selectedStartDate={date}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  title: {
    backgroundColor: Color.white,
    flex: 1,
    padding: 20,
  },
});
