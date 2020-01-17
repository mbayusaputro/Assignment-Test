import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity as Touch,
  Picker,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  Text,
  InputText,
  Button,
  ButtonLoading,
} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  HEADER_FONT_SIZE,
  MEDIUM_FONT_SIZE,
} from '../../../../../constants/TextSize';
import {dataSalutation} from './data';
import {ModalProps} from '../types';

export default (props: ModalProps) => {
  return (
    <Modal
      useNativeDriver={true}
      isVisible={props.isVisible}
      avoidKeyboard={true}
      onBackButtonPress={props.onDismiss}
      onBackdropPress={props.onDismiss}
      style={styles.modal}
      children={
        <View style={styles.container}>
          <Touch style={styles.close} onPress={props.onDismiss}>
            <Text style={styles.textClose}>Passenger Details</Text>
          </Touch>
          <View style={styles.vertical}>
            <View style={styles.rowBetween}>
              <View style={{width: '25%'}}>
                <Picker
                  selectedValue={props.selectedSalutation}
                  style={{width: '100%'}}
                  onValueChange={(itemValue: any, itemIndex: number) =>
                    props.onChangeSalutation(itemValue)
                  }>
                  {dataSalutation.map((item: any, index: number) => (
                    <Picker.Item
                      key={index}
                      value={item.title}
                      label={item.title}
                    />
                  ))}
                </Picker>
              </View>
              <View style={{width: '75%'}}>
                <InputText
                  style={{borderRadius: 5, borderColor: Color.labelgray}}
                  placeholder="Full Name"
                  onChangeText={(text: any) => props.onChangeFullname(text)}
                  autoCapitalize="words"
                  value={props.valueFullname}
                />
              </View>
            </View>
          </View>

          <View style={styles.vertical}>
            {props.isLoading ? (
              <ButtonLoading />
            ) : (
              <Button
                content={{id: 'Simpan Kontak', en: 'Save Contact'}}
                customStyle={styles.btnUpdate}
                fullWidth
                isUpperCase
                onPress={props.onUpdate}
              />
            )}
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingBottom: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vertical: {
    marginVertical: 5,
  },
  textClose: {
    fontFamily: fonts.fontSemiBold,
    fontSize: HEADER_FONT_SIZE,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
  },
  textButton: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
    color: Color.tealBlue,
  },
  textError: {
    fontFamily: fonts.fontBold,
    color: Color.red,
    fontSize: MEDIUM_FONT_SIZE,
  },
  close: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.backWhite,
  },
  btnUpdate: {
    borderRadius: 20,
    backgroundColor: Color.tealBlue,
    borderColor: Color.tealBlue,
    borderWidth: 0.5,
  },
});
