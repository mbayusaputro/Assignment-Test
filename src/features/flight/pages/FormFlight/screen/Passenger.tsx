import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';

// type Props = {
//   isModalVisible: boolean;
//   toggleModal: () => void;
//   onDateChange: (payload: any) => void;
// };

const Passenger = () => {
  return (
    <Modal
      isVisible={true}
      backdropColor={Color.black}
      style={{flex: 1, justifyContent: 'flex-end', margin: 0}}>
      <SafeAreaView>
        {/* <View style={styles.container}></View> */}
      </SafeAreaView>
    </Modal>
  );
};

export default Passenger;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    padding: 20,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
});
