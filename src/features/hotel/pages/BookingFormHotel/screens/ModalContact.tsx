import React from 'react';
import {
  View,
  TouchableOpacity as Touch,
  ScrollView,
  Picker,
} from 'react-native';
import {Text, InputText, Button} from '../../../../../components';
import {styles} from '../components';
import {
  validateEmailFormat,
  getFirstNameLastname,
} from '../../../../../helpers/helpers';
import {dataSalutation} from '../components/data';

type Props = {
  onClose: () => void;
  onSave: (item: any) => void;
  costumerID: any;
};

export default (props: Props) => {
  const {onClose, costumerID} = props;

  // State
  const [salutation, setSalutation] = React.useState('MR');
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [validMail, setValidMail] = React.useState(true);
  const [mobileNumber, setMobileNumber] = React.useState('');

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
    setMobileNumber(number);
  };

  const onSave = () => {
    let payload = {
      salutation,
      name: '',
      surname: '',
      email,
      phoneNumber: mobileNumber,
      customerId: costumerID,
    };
    getFirstNameLastname(fullname, (res: any) => {
      (payload.name = res.firstName), (payload.surname = res.lastName);
    });
    props.onSave(payload);
  };

  // Main Render
  return (
    <View style={styles.contentModal}>
      <Touch onPress={onClose} style={styles.modalClose}>
        <Text
          style={styles.textClose}
          content={{id: 'Detail Kontak', en: 'Contact Detail'}}
        />
      </Touch>
      <ScrollView>
        <View style={[styles.rowBetween, {marginTop: 10}]}>
          <View style={{width: '25%'}}>
            <Picker
              selectedValue={salutation}
              style={{width: '100%'}}
              onValueChange={(item: any, index: number) => setSalutation(item)}>
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
              onChangeText={(text: any) => setFullname(text)}
            />
          </View>
        </View>

        <View>
          <InputText
            placeholder="Phone Number"
            onChangeText={(text: string) => changeNumber(text)}
            keyboardType="numeric"
          />
        </View>

        <View>
          <InputText
            placeholder="Email Address"
            onChangeText={(text: string) => changeEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {validMail ? null : (
            <Text
              style={styles.textRed}
              content={{
                id: 'Mohon masukkan alamat email yang benar',
                en: 'Please enter a valid email address',
              }}
            />
          )}
        </View>

        <View style={styles.vertical}>
          <Button
            fullWidth
            isUpperCase={true}
            content={{id: 'Selesai', en: 'Done'}}
            customStyle={styles.btnFooter}
            onPress={onSave}
          />
        </View>
      </ScrollView>
    </View>
  );
};
