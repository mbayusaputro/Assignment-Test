import React from 'react';
import {View, TouchableOpacity as Touch, ScrollView} from 'react-native';
import {Text, InputText, Button} from '../../../../../components';
import {styles} from '../components';

type Props = {
  onClose: () => void;
};

export default (props: Props) => {
  const {onClose} = props;

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
          <Touch style={{width: '20%'}}>
            <Text>Title</Text>
            <InputText
              editable={false}
              placeholder="MR."
              onChangeText={() => {}}
            />
          </Touch>
          <View style={{width: '75%'}}>
            <Text content={{id: 'Nama Lengkap', en: 'Fullname'}} />
            <InputText placeholder="" onChangeText={() => {}} />
          </View>
        </View>

        <View>
          <Text content={{id: 'Nomor Handphone', en: 'Mobile Number'}} />
          <InputText
            placeholder=""
            onChangeText={() => {}}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text content={{id: 'Alamat Email', en: 'Email Address'}} />
          <InputText
            placeholder=""
            onChangeText={() => {}}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.vertical}>
          <Button
            fullWidth
            isUpperCase={true}
            content={{id: 'Selesai', en: 'Done'}}
            customStyle={styles.btnFooter}
          />
        </View>
      </ScrollView>
    </View>
  );
};
