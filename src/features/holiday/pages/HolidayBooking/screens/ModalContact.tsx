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

type Props = {
  onClose: () => void;
  onSave: (item: any) => void;
};

const dataSalutation = [
  {
    id: 1,
    title: 'Mr',
  },
  {
    id: 2,
    title: 'Mrs',
  },
  {
    id: 3,
    title: 'Ms',
  },
];

export default (props: Props) => {
  const {onClose} = props;

  // State
  const [salutation, setSalutation] = React.useState('Mr');
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

  const onSave = () => {
    let payload = {
      salutation,
      fullname,
      email,
      phoneNumber: mobileNumber,
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
            <Text content={{id: 'Nama Lengkap', en: 'Fullname'}} />
            <InputText
              placeholder=""
              onChangeText={(text: any) => setFullname(text)}
            />
          </View>
        </View>

        <View>
          <Text content={{id: 'Nomor Handphone', en: 'Mobile Number'}} />
          <InputText
            placeholder=""
            onChangeText={(text: string) => setMobileNumber(text)}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text content={{id: 'Alamat Email', en: 'Email Address'}} />
          <InputText
            placeholder=""
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
