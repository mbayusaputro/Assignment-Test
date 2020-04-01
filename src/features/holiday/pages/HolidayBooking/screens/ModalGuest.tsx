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
  isFullName: string;
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
];

const dataSalutChild = [
  {
    id: 1,
    title: 'MSTR',
  },
  {
    id: 1,
    title: 'MISS',
  },
];

export default (props: Props) => {
  const {onClose, onSaveGuest, guest, type, isFullName} = props;

  const [fullname, setFullname] = React.useState('');
  const [salutation, setSalutation] = React.useState('MR');

  React.useEffect(() => {
    setFullname(isFullName);
  }, []);

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
        <View style={{width: 100}}>
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
          <InputText
            placeholder="Fullname"
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
