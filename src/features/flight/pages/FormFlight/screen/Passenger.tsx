import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Text, Button} from '../../../../../components';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import {PassengerProps} from '../types';

const Passenger = (props: PassengerProps) => {
  // Props
  const {isModalVisible, toggleModal, isPassenger, onPassengerChange} = props;

  // State
  const [type, setType] = useState([
    {type: 'Adult', desc: 'Age 12+'},
    {type: 'Child', desc: 'Age 2-11'},
    {type: 'Infant', desc: 'Age 2'},
  ]);
  const [passenger, setPassenger] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

  // Function
  const onChange = (data: any, field: string) => {
    passenger[field] = data;
    setPassenger(passenger);
  };

  // Main Render
  return (
    <Modal
      isVisible={isModalVisible}
      backdropColor={Color.black}
      onBackdropPress={toggleModal}
      onBackButtonPress={toggleModal}
      style={{flex: 1, justifyContent: 'flex-end', margin: 0}}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={{borderBottomWidth: 0.5, borderColor: Color.lightgray}}>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 10,
                fontFamily: 'NunitoSans-Bold',
                fontSize: 18,
              }}>
              Passenger
            </Text>
          </View>
          <View style={styles.row}>
            {type.map((item: any, i: number) => {
              return (
                <View key={i} style={styles.center}>
                  <Text style={styles.bold}>
                    {item.type === 'Infant' ? 'Below' : item.type}
                  </Text>
                  <Text style={styles.regular}>{item.desc}</Text>
                </View>
              );
            })}
          </View>
          <View
            style={[styles.row, {paddingVertical: 0, paddingHorizontal: 20}]}>
            {type.map((item: any, i: number) => {
              return (
                <ScrollPicker
                  key={i}
                  dataSource={
                    item.type === 'Adult'
                      ? [1, 2, 3, 4, 5, 6, 7]
                      : [0, 1, 2, 3, 4, 5, 6, 7]
                  }
                  selectedIndex={
                    item.type === 'Adult'
                      ? isPassenger.adult === 1
                        ? -1
                        : isPassenger.adult - 1
                      : item.type === 'Child'
                      ? isPassenger.child === 0
                        ? -1
                        : isPassenger.child
                      : isPassenger.infant === 0
                      ? -1
                      : isPassenger.infant
                  }
                  onValueChange={(data: any, _: number) =>
                    onChange(data, item.type.toLowerCase())
                  }
                  itemColor={Color.black}
                  itemHeight={35}
                  highlightBorderWidth={0.2}
                  highlightColor={Color.labelgray}
                  wrapperHeight={100}
                />
              );
            })}
          </View>
          <Button
            customStyle={{margin: 20, borderRadius: 20}}
            type="primary"
            fullWidth={true}
            isUpperCase={true}
            content={{id: 'Done', en: 'Done'}}
            onPress={() => onPassengerChange(passenger)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Passenger;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 20,
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 12,
    color: Color.brownGreyF,
  },
  center: {
    alignItems: 'center',
  },
});
