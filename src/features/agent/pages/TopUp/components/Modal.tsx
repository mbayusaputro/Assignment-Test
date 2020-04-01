import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Text, Button, InputText} from '../../../../../components';
import {ModalProps} from '../../../interface/types';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import {generateValue} from '../../../../../helpers/helpers';

const Passenger = (props: ModalProps) => {
  // Props
  const {isVisible, onDismiss, onSave, model} = props;

  // State
  const [isAmount, setAmount] = useState(0);

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
                fontSize: 18,
              }}
              content={
                model === 'select'
                  ? {id: 'Pilih Jumlah', en: 'Select Amount'}
                  : {id: 'Masukkan Jumlah', en: 'Enter Amount'}
              }
            />
          </View>

          {model === 'select' ? (
            // Model Select
            <View style={[styles.row, {padding: 20}]}>
              <ScrollPicker
                dataSource={generateValue(0, 10)}
                selectedIndex={1}
                onValueChange={(data: any) => setAmount(data)}
                itemColor={Color.black}
                itemHeight={35}
                highlightBorderWidth={0.2}
                highlightColor={Color.labelgray}
                wrapperHeight={100}
              />
            </View>
          ) : (
            // Model Input
            <View style={styles.pd}>
              <InputText
                style={{borderRadius: 5, borderColor: Color.labelgray}}
                placeholder="Enter Amount"
                onChangeText={(text: any) =>
                  text === '' ? setAmount(0) : setAmount(parseInt(text))
                }
                keyboardType="numeric"
                autoCapitalize="none"
                value={isAmount.toString()}
              />
            </View>
          )}

          <Button
            customStyle={{margin: 20, borderRadius: 20}}
            type="primary"
            fullWidth={true}
            isUpperCase={true}
            content={{id: 'Selesai', en: 'Done'}}
            onPress={() => onSave(isAmount)}
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
  pd: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 20,
  },
});
