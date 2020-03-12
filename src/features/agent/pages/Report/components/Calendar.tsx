import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Header, SubHeader} from '../../../../../components/Header';
import CalendarPicker from 'react-native-calendar-picker';
import {ModalProps} from '../../../interface/types';

const Calendar = (props: ModalProps) => {
  // Props
  const {isVisible, onDismiss, onSave} = props;

  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isVisible}
        backdropColor={Color.white}
        backdropOpacity={1}
        onBackButtonPress={onDismiss}
        style={{marginHorizontal: 0}}>
        <SafeAreaView style={{flex: 1}}>
          <Header
            callback={onDismiss}
            content={{id: 'Pilih Tanggal', en: 'Select Date'}}
          />
          <SubHeader />
          <View style={styles.title}>
            <CalendarPicker
              textStyle={{fontFamily: 'NunitoSans-SemiBold'}}
              minDate={new Date()}
              onDateChange={onSave}
              selectDayColor={Color.orange}
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
