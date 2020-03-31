import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, InputText, Button} from '../../../../../components';
import {styles} from '../components';

type Props = {
  onClose: () => void;
  guest: number;
  onSaveGuest: (item: any, id: number) => void;
  isFullName: string;
};

export default (props: Props) => {
  const {onClose, onSaveGuest, guest, isFullName} = props;

  const [fullname, setFullname] = useState('');

  // Lifecycle
  useEffect(() => {
    setFullname(isFullName);
  }, []);

  const onSave = () => {
    if (fullname !== '') {
      const splitName = fullname.split(' ');
      const payload = {
        roomId: guest,
        type: 'AD',
        name: fullname,
        surname: splitName[0],
      };
      onSaveGuest(payload, guest - 1);
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
          content={{id: `#${guest} Tamu`, en: `#${guest} Guest`}}
        />
      </Touch>
      <View style={styles.vertical}>
        <Text content={{id: 'Nama Lengkap', en: 'Fullname'}} />
        <InputText
          placeholder=""
          onChangeText={(text: string) => setFullname(text)}
          value={fullname}
          autoCapitalize="words"
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
