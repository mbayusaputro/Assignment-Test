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
import {ModalProps} from '../../../interface/types';

const Class = (props: ModalProps) => {
  // State
  const [type, setType] = React.useState([
    {
      type: {id: 'Laporan Sales', en: 'Sales Report', alias: 'sales'},
      active: true,
    },
    {
      type: {id: 'Laporan Komisi', en: 'Commission Report', alias: 'commision'},
      active: false,
    },
    {
      type: {id: 'Rekening', en: 'Account Statement', alias: 'balance'},
      active: false,
    },
    // { type: { id: 'Saldo Komisi', en: 'Commission Balance' }, active: false },
    // { type: { id: 'Saldo Deposit', en: 'Deposit Balance' }, active: false },
  ]);
  const [isClass, setClass] = React.useState({});

  // Props
  const {isVisible, onDismiss, onSave} = props;

  // Function
  const onChange = (index: number) => {
    type.map((item: any, i: number) => {
      if (index === i) {
        item.active = true;
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
      isVisible={isVisible}
      backdropColor={Color.black}
      onBackdropPress={onDismiss}
      onBackButtonPress={onDismiss}
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
              }}
              content={{id: 'Pilih Laporan', en: 'Select Report'}}
            />
          </View>
          <View style={{paddingHorizontal: 20, paddingTop: 0}}>
            {type.map((item: any, i: number) => {
              return (
                <TouchableOpacity
                  onPress={() => onChange(i)}
                  key={i}
                  style={styles.row}>
                  <Text style={styles.bold} content={item.type} />
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
            content={{id: 'Pilih', en: 'Select'}}
            onPress={() => onSave(isClass)}
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
