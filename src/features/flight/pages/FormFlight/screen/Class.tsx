import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';
import {Text, Button} from '../../../../../components';
import {ClassProps} from '../types';

const Class = (props: ClassProps) => {
  const [type, setType] = React.useState([
    {type: 'Economy', active: true},
    {type: 'Business', active: false},
    {type: 'First Class', active: false},
  ]);
  const [isClass, setClass] = React.useState('');

  const onChange = (index: number) => {
    type.map((item: any, i: number) => {
      if (index === i) {
        if (item.active) {
          item.active = false;
        } else {
          item.active = true;
        }
      } else {
        item.active = false;
      }
      return item;
    });
    setType(type);
    setClass(type[index].type);
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
                fontSize: 16,
              }}>
              Cabin Class
            </Text>
          </View>
          <View style={{paddingHorizontal: 20, paddingTop: 0}}>
            {type.map((item: any, i: number) => {
              return (
                <TouchableOpacity
                  onPress={() => onChange(i)}
                  key={i}
                  style={styles.row}>
                  <Text style={styles.bold}>{item.type}</Text>
                  {item.active ? (
                    <Image
                      style={{
                        width: scale(18),
                        height: verticalScale(16),
                      }}
                      source={require('../../../../../assets/icons/class-check.png')}
                    />
                  ) : (
                    []
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          <Button
            customStyle={{margin: 20, borderRadius: 20, marginTop: 50}}
            type="primary"
            fullWidth={true}
            isUpperCase={true}
            content={{id: 'Select', en: 'Select'}}
            onPress={() => props.onClassChange(isClass)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Class;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 0.3,
    borderColor: Color.labelgray,
  },
  bold: {
    fontFamily: 'NunitoSans-SemiBold',
  },
});
