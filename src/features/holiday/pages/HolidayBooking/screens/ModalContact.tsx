import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity as Touch,
  ScrollView,
  Picker,
} from 'react-native';
import {Text, InputText, Button} from '../../../../../components';
import {styles} from '../components';
import {validateEmailFormat} from '../../../../../helpers/helpers';
import {oc} from 'ts-optchain';

type Props = {
  onClose: () => void;
  onSave: (item: any) => void;
  data: any;
};

const dataSalutation = [
  {
    id: 1,
    title: 'MR',
  },
  {
    id: 2,
    title: 'MRS',
  },
  {
    id: 3,
    title: 'MS',
  },
];

export default (props: Props) => {
  const {onClose, data} = props;

  // State
  const [salutation, setSalutation] = useState('Mr');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [validMail, setValidMail] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');

  // Lifecycle
  useEffect(() => {
    setSalutation(oc(data).salutation('MR'));
    setFullname(oc(data).fullname(''));
    setEmail(oc(data).email(''));
    setMobileNumber(oc(data).phoneNumber(''));
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
    setMobileNumber(number);
  };

  const onSave = () => {
    let payload = {
      salutation,
      fullname,
      email,
      phone: mobileNumber,
    };
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
          <View style={{width: 100}}>
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
          <View style={{width: '70%'}}>
            <InputText
              placeholder="Fullname"
              onChangeText={(text: any) => setFullname(text)}
              value={fullname}
            />
          </View>
        </View>

        <View style={styles.vertical}>
          <InputText
            placeholder="Phone Number"
            onChangeText={(text: string) => changeNumber(text)}
            keyboardType="numeric"
            value={mobileNumber}
          />
        </View>

        <View style={styles.vertical}>
          <InputText
            placeholder="Email Address"
            onChangeText={(text: string) => changeEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
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
