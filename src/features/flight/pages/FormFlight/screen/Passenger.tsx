import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Text, Button} from '../../../../../components';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import {generateNumber} from '../../../../../helpers/helpers';
import {PassengerProps} from '../types';

const Passenger = (props: PassengerProps) => {
  const [type, setType] = React.useState([
    {type: 'Adult', desc: 'Age 12+'},
    {type: 'Child', desc: 'Age 2-11'},
    {type: 'Infant', desc: 'Age 2'},
  ]);
  const [passenger, setPassenger] = React.useState({
    adult: 1,
    child: 0,
    infant: 0,
  });
  const onChange = (data: any, field: string) => {
    passenger[field] = data;
    setPassenger(passenger);
  };
  return (
    <Modal
      isVisible={props.isModalVisible}
      backdropColor={Color.black}
      onBackdropPress={props.toggleModal}
      onBackButtonPress={props.toggleModal}
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
                      ? generateNumber(1, 7)
                      : generateNumber(0, 7)
                  }
                  selectedIndex={
                    item.type === 'Adult'
                      ? props.isPassenger.adult - 1
                      : item.type === 'Child'
                      ? props.isPassenger.child
                      : props.isPassenger.infant
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
            onPress={() => props.onPassengerChange(passenger)}
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
