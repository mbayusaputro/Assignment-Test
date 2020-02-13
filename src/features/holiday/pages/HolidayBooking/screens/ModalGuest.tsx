import React from 'react';
import {View, TouchableOpacity as Touch, Picker} from 'react-native';
import {Text, InputText, Button} from '../../../../../components';
import {validateEmailFormat} from '../../../../../helpers/helpers';
import {styles} from '../components';

type Props = {
  onClose: () => void;
  guest: number;
  type: string;
  onSaveGuest: (item: any, type: any) => void;
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
  const {onClose, onSaveGuest, guest, type} = props;

  const [fullname, setFullname] = React.useState('');
  const [salutation, setSalutation] = React.useState(
    type === 'adult' ? 'Mr' : 'Ms',
  );
  const [birthDate, setBirthDate] = React.useState('2000-01-01');
  const [email, setEmail] = React.useState('');
  const [validMail, setValidMail] = React.useState(true);
  const [phone, setPhone] = React.useState('');

  const onCheckMail = (text: any) => {
    const valid = validateEmailFormat(text);
    setEmail(text);
    setValidMail(valid);
  };

  const onSave = () => {
    if (fullname !== '') {
      const splitName = fullname.split(' ');
      const payload = {
        salutation,
        first_name: splitName[0],
        last_name: splitName[1],
        birth_date: birthDate,
        email,
        phone,
        type,
        nationality: 'ID',
        card_number: '123232323',
        card_issue_date: '2017-01-01',
        card_expire_date: '2022-01-01',
        identity_number: `${guest}`,
      };
      onSaveGuest(payload, type);
    } else {
      alert('Please enter fullname field');
    }
  };

  // Main Render
  return (
    <View style={styles.contentModal}>
      <Touch onPress={onClose} style={styles.modalClose}>
        <Text
          style={styles.textClose}
          content={{id: `#${guest + 1} Tamu`, en: `#${guest + 1} Guest`}}
        />
      </Touch>
      <View style={styles.rowBetween}>
        <View style={{width: '30%'}}>
          <Picker
            selectedValue={salutation}
            style={{width: '100%'}}
            onValueChange={(item: any, index: number) => setSalutation(item)}>
            {type === 'adult' ? (
              dataSalutation.map((item: any, index: number) => (
                <Picker.Item
                  key={index}
                  value={item.title}
                  label={item.title}
                />
              ))
            ) : (
              <Picker.Item value={salutation} label={salutation} />
            )}
          </Picker>
        </View>
        <View style={{width: '70%'}}>
          <Text content={{id: 'Nama Lengkap', en: 'Fullname'}} />
          <InputText
            placeholder=""
            onChangeText={(text: string) => setFullname(text)}
            value={fullname}
            autoCapitalize="words"
          />
        </View>
      </View>
      <View>
        <Text content={{id: 'Email', en: 'Email'}} />
        <InputText
          placeholder=""
          onChangeText={(text: string) => onCheckMail(text)}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
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
      <View>
        <Text content={{id: 'Nomor Handphone', en: 'Mobile Number'}} />
        <InputText
          placeholder=""
          onChangeText={(text: string) => setPhone(text)}
          value={phone}
          autoCapitalize="none"
          keyboardType="phone-pad"
        />
      </View>
      <Button
        fullWidth
        isUpperCase
        customStyle={styles.btnFooter}
        content={{id: 'Simpan', en: 'Save'}}
        onPress={onSave}
      />
      <View style={styles.vertical} />
    </View>
  );
};
