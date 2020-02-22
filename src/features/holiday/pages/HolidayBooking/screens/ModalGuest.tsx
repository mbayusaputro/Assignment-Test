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

const dataSalutChild = [
  {
    id: 1,
    title: 'MSTR',
  },
  {
    id: 1,
    title: 'MS',
  },
];

export default (props: Props) => {
  const {onClose, onSaveGuest, guest, type} = props;

  const [fullname, setFullname] = React.useState('');
  const [salutation, setSalutation] = React.useState('MR');
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
      const payload = {
        titleIndex: guest,
        title: salutation,
        fullName: fullname,
        dateOfBirth: type === 'child' || type === 'infant' ? '2016-01-01' : '',
        type,
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
            {(type === 'adult' ? dataSalutation : dataSalutChild).map(
              (item: any, index: number) => (
                <Picker.Item
                  key={index}
                  value={item.title}
                  label={item.title}
                />
              ),
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
