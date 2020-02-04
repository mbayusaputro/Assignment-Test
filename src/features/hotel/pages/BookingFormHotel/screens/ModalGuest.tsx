import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, InputText, Button} from '../../../../../components';
import {styles} from '../components';

type Props = {
  onClose: () => void;
  guest: number;
  onSaveGuest: (item: any, id: number) => void;
};

export default (props: Props) => {
  const {onClose, onSaveGuest, guest} = props;

  const [fullname, setFullname] = React.useState('');

  const onSave = () => {
    if (fullname !== '') {
      const payload = {
        id: guest,
        title: fullname,
      };
      onSaveGuest(payload, guest);
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
