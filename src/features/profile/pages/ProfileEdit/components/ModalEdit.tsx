import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity as Touch,
  Picker,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {ModalProps as Props} from '../interface/types';
import {
  Text,
  InputText,
  Button,
  ButtonLoading,
} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  TITLE_FONT_SIZE,
  HEADER_FONT_SIZE,
  SMALL_FONT_SIZE,
} from '../../../../../constants/TextSize';
import {dataSalutation} from './data';
import moment from 'moment';

export default (props: Props) => {
  // Props
  const {
    onDismiss,
    onChangeSalutation,
    onChangeFullname,
    onChangeAddress,
    onChangeEmail,
    onChangeMobileNumber,
    onShowBirthDate,
    onUpdate,
    valueAddress,
    valueEmail,
    valueFullname,
    validMail,
    valueMobile,
    isVisible,
    selectedSalutation,
    birthDate,
    isLoading,
  } = props;
  return (
    <Modal
      useNativeDriver={true}
      isVisible={isVisible}
      avoidKeyboard={true}
      onBackButtonPress={onDismiss}
      onBackdropPress={onDismiss}
      style={styles.modal}
      children={
        <View style={styles.container}>
          <Touch style={styles.close} onPress={onDismiss}>
            <Text
              style={styles.textClose}
              content={{id: 'Tutup', en: 'Close'}}
            />
          </Touch>

          <ScrollView>
            <View style={styles.vertical}>
              <View style={styles.rowBetween}>
                <View style={{width: '25%'}}>
                  <Picker
                    selectedValue={selectedSalutation}
                    style={{width: '100%'}}
                    onValueChange={(itemValue: any, itemIndex: number) =>
                      onChangeSalutation(itemValue)
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
                    placeholder="Fullname"
                    onChangeText={(text: any) => onChangeFullname(text)}
                    autoCapitalize="words"
                    value={valueFullname}
                  />
                </View>
              </View>
            </View>

            <View style={styles.vertical}>
              <InputText
                placeholder="Email"
                onChangeText={(text: any) => onChangeEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
                value={valueEmail}
              />
              {validMail ? null : (
                <Text
                  style={styles.textError}
                  content={{
                    id: 'Mohon masukkan alamat email yang benar',
                    en: 'Please enter a valid email address',
                  }}
                />
              )}
            </View>

            <View style={styles.vertical}>
              <InputText
                placeholder="Mobile Number"
                onChangeText={(text: string) => onChangeMobileNumber(text)}
                keyboardType="numeric"
                value={valueMobile}
              />
            </View>

            <View style={styles.vertical}>
              <InputText
                placeholder=""
                value={moment(birthDate).format('D MMMM YYYY')}
                onChangeText={null}
                onFocus={onShowBirthDate}
              />
            </View>

            <View style={styles.vertical}>
              <InputText
                placeholder="Address"
                onChangeText={(txt: any) => onChangeAddress(txt)}
                numberOfLines={3}
                maxLength={200}
                value={valueAddress}
              />
            </View>

            <View style={styles.vertical}>
              {isLoading ? (
                <ButtonLoading />
              ) : (
                <Button
                  content={{id: 'Perbarui', en: 'Update'}}
                  customStyle={styles.btnUpdate}
                  fullWidth
                  isUpperCase
                  onPress={onUpdate}
                  type="primary"
                />
              )}
            </View>
          </ScrollView>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  // Layout
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

  // Text
  textClose: {
    fontFamily: fonts.fontSemiBold,
    fontSize: TITLE_FONT_SIZE,
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
    fontSize: SMALL_FONT_SIZE,
  },

  // Component
  close: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.backWhite,
  },
  btnUpdate: {
    borderRadius: 20,
    borderWidth: 0.5,
  },
});
