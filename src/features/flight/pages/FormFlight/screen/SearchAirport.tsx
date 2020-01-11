import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';

const SearchAirport = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}
        animationInTiming={50}
        animationOutTiming={50}
        backdropColor="red">
        <View style={{flex: 1}}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default SearchAirport;
