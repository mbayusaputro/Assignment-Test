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

export default (props: Props) => {
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
            <Text style={styles.textClose}>Close</Text>
          </Touch>

          <ScrollView>
            <View style={styles.vertical}>
              <Text style={styles.textTitle}>Fullname</Text>
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
                    placeholder="Fullname"
                    onChangeText={(text: any) => props.onChangeFullname(text)}
                    autoCapitalize="words"
                    value={props.valueFullname}
                  />
                </View>
              </View>
            </View>

            <View style={styles.vertical}>
              <Text style={styles.textTitle}>Email</Text>
              <InputText
                placeholder="Email"
                onChangeText={(text: any) => props.onChangeEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
                value={props.valueEmail}
              />
              {props.validMail ? null : (
                <Text style={styles.textError}>
                  Please enter a valid email address
                </Text>
              )}
            </View>

            <View style={styles.vertical}>
              <Text style={styles.textTitle}>Mobile Number</Text>
              <View style={styles.rowBetween}>
                <View style={{width: '20%'}}>
                  <InputText
                    placeholder="Code"
                    onChangeText={(text: string) =>
                      props.onChangeMobilePre(text)
                    }
                    maxLength={4}
                    keyboardType="number-pad"
                    value={props.valuePre}
                  />
                </View>
                <View style={{width: '75%'}}>
                  <InputText
                    placeholder="Mobile Number"
                    onChangeText={(text: string) =>
                      props.onChangeMobileNumber(text)
                    }
                    keyboardType="number-pad"
                    value={props.valueMobile}
                  />
                </View>
              </View>
            </View>

            <View style={styles.vertical}>
              <Touch onPress={props.onShowBirthDate}>
                <Text style={styles.textButton}>BirthDate</Text>
              </Touch>
              <InputText
                placeholder=""
                value={props.birthDate}
                editable={false}
                onChangeText={txt => console.log(txt)}
              />
            </View>

            <View style={styles.vertical}>
              <Text style={styles.textTitle}>Address</Text>
              <InputText
                placeholder="Address"
                onChangeText={(txt: any) => props.onChangeAddress(txt)}
                numberOfLines={3}
                maxLength={200}
                value={props.valueAddress}
              />
            </View>

            <View style={styles.vertical}>
              {props.isLoading ? (
                <ButtonLoading />
              ) : (
                <Button
                  content={{id: 'Perbarui', en: 'Update'}}
                  customStyle={styles.btnUpdate}
                  fullWidth
                  isUpperCase
                  onPress={props.onUpdate}
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
    padding: 10,
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
    backgroundColor: Color.tealBlue,
    borderColor: Color.tealBlue,
    borderWidth: 0.5,
  },
});
