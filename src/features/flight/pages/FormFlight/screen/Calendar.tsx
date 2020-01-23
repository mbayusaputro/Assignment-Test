import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import Header from '../../../components/Head';
import CalendarPicker from 'react-native-calendar-picker';

type Props = {
  isModalVisible: boolean;
  toggleModal: () => void;
  onDateChange: (payload: any) => void;
};

const Calendar = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={props.isModalVisible}
        backdropColor={Color.white}
        backdropOpacity={1}
        onBackButtonPress={props.toggleModal}
        style={{marginHorizontal: 0}}>
        <SafeAreaView style={{flex: 1}}>
          <Header title="Select Departure Date" goBack={props.toggleModal} />
          <View style={styles.title}>
            <CalendarPicker
              textStyle={{fontFamily: 'NunitoSans-SemiBold'}}
              minDate={new Date()}
              onDateChange={props.onDateChange}
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
