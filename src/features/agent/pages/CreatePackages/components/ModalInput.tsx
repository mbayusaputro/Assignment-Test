import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Text, Button, InputText} from '../../../../../components';
import {ModalProps} from '../../../interface/types';
import ScrollPicker from 'react-native-wheel-scroll-picker';

const ModalInput = (props: ModalProps) => {
  const {isVisible, onDismiss, onSave, model, title, inputType} = props;

  const [data, setData] = useState(0);

  return (
    <Modal
      isVisible={isVisible}
      backdropColor={Color.black}
      onBackdropPress={onDismiss}
      onBackButtonPress={onDismiss}
      style={styles.modalContainer}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.modalHeaders}>
            <Text
              style={styles.modalHeaderTitle}
              content={{id: title, en: title}}
            />
          </View>
          {inputType === 'select' ? (
            <View style={styles.modalSelectInput}>
              <ScrollPicker
                dataSource={['Open Trip', 'Private']}
                selectedIndex={1}
                onValueChange={(text: any) => setData(text)}
                itemColor={Color.black}
                itemHeight={35}
                highlightBorderWidth={0.2}
                highlightColor={Color.labelgray}
                wrapperHeight={100}
              />
            </View>
          ) : (
            <View style={styles.pd}>
              <InputText
                style={styles.modalTextInput}
                placeholder={title}
                onChangeText={(text: any) => setData(text)}
                keyboardType={model !== 'title' ? 'number-pad' : 'default'}
                autoCapitalize="none"
              />
            </View>
          )}
          <Button
            customStyle={styles.modalButton}
            type="primary"
            fullWidth={true}
            isUpperCase={true}
            content={{id: 'Selesai', en: 'Done'}}
            onPress={() => onSave(data, model)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  pd: {
    paddingHorizontal: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalHeaders: {
    borderBottomWidth: 0.5,
    borderColor: Color.lightgray,
  },
  modalHeaderTitle: {
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
  },
  modalTextInput: {
    borderRadius: 5,
    borderColor: Color.labelgray,
  },
  modalButton: {
    margin: 20,
    borderRadius: 20,
  },
  modalSelectInput: {
    padding: 20,
    height: 100,
  },
});
