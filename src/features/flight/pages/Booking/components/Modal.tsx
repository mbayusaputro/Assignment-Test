import React, {useState, useEffect} from 'react';
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
import {salutationAdult, salutationChild} from './data';
import {ModalProps} from '../types';
import {validateEmailFormat} from '../../../../../helpers/helpers';
import {oc} from 'ts-optchain';

export default (props: ModalProps) => {
  // Props
  const {isVisible, onSave, onDismiss, dataPassenger} = props;

  // State
  const [salutation, setSalutation] = useState('MR');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [validMail, setValidMail] = useState(true);
  const [phone, setPhone] = useState('');

  // Lifecycle
  useEffect(() => {
    setSalutation(oc(dataPassenger).salutation('MR'));
    setFullname(oc(dataPassenger).fullname(''));
    setEmail(oc(dataPassenger).email(''));
    setPhone(oc(dataPassenger).phone(''));
  }, []);

  // Function
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

  const changeNumber = (text: string) => {
    let number = text.replace(/[^0-9]/g, '');
    setPhone(number);
  };

  const onSaveContact = () => {
    let payload = {
      salutation,
      fullname,
      email,
      phone,
    };
    onSave(payload);
  };

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
            <Text style={styles.textClose}>Contact Details</Text>
          </Touch>
          <View style={styles.vertical}>
            <View style={styles.rowBetween}>
              <View style={{width: 100}}>
                <Picker
                  selectedValue={salutation}
                  style={{width: '100%'}}
                  onValueChange={(value: any, _: number) =>
                    setSalutation(value)
                  }>
                  {salutationAdult.map((item: any, index: number) => (
                    <Picker.Item
                      key={index}
                      value={item.title}
                      label={item.title}
                    />
                  ))}
                </Picker>
              </View>
              <View style={{width: '70%'}}>
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
              onChangeText={(text: any) => changeNumber(text)}
              keyboardType="numeric"
              autoCapitalize="none"
              value={phone}
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
              onPress={onSaveContact}
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
