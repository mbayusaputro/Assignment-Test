import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity as Touch,
  Picker,
} from 'react-native';
import Modal from 'react-native-modal';
import {Text, InputText, Button} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  TITLE_FONT_SIZE,
  HEADER_FONT_SIZE,
  MEDIUM_FONT_SIZE,
} from '../../../../../constants/TextSize';
import {dataSalutation} from './data';
import {ModalProps} from '../types';
import {validateEmailFormat} from '../../../../../helpers/helpers';

export default (props: ModalProps) => {
  const [salutation, setSalutation] = React.useState('Mr');
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [validMail, setValidMail] = React.useState(true);
  const [mobileNumber, setMobileNumber] = React.useState('');

  const changeEmail = (txt: string) => {
    let checkMail = validateEmailFormat(txt);
    if (checkMail) {
      setEmail(txt);
      setValidMail(true);
    } else {
      setEmail(txt);
      setValidMail(false);
    }
  };

  const onSave = () => {
    let payload = {
      salutation: salutation,
      fullname: fullname,
      email: email,
      mobileNumber: mobileNumber,
    };
    props.onSave(payload);
  };

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
            <Text style={styles.textClose}>Contact Details</Text>
          </Touch>
          <View style={styles.vertical}>
            <View style={styles.rowBetween}>
              <View style={{width: '25%'}}>
                <Picker
                  selectedValue={salutation}
                  style={{width: '100%'}}
                  onValueChange={(value: any, _: number) =>
                    setSalutation(value)
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
                  onChangeText={(text: any) => setFullname(text)}
                  autoCapitalize="words"
                  value={fullname}
                />
              </View>
            </View>
          </View>

          <View style={styles.vertical}>
            <InputText
              style={{borderRadius: 5, borderColor: Color.labelgray}}
              placeholder="Phone Number"
              onChangeText={(text: any) => setMobileNumber(text)}
              keyboardType="email-address"
              autoCapitalize="none"
              value={mobileNumber}
            />
          </View>

          <View style={styles.vertical}>
            <InputText
              style={{borderRadius: 5, borderColor: Color.labelgray}}
              placeholder="Email"
              onChangeText={(text: any) => changeEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
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
            <Button
              content={{id: 'Simpan Kontak', en: 'Save Contact'}}
              customStyle={styles.btnUpdate}
              fullWidth
              isUpperCase
              onPress={onSave}
            />
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
