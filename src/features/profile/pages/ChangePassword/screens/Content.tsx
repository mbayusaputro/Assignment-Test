import React from 'react';
import {View, TouchableOpacity as Touch, Switch} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {ContentChangeProps as Props} from '../../../interface/types';

export default (props: Props) => {
  const [valueSwitch, onSwitch] = React.useState(false);

  // Main Render
  return (
    <View style={styles.container}>
      <Card style={[styles.card, styles.rowBetween]}>
        <Text
          style={styles.textBold}
          content={{id: 'Kata Sandi', en: 'Password'}}
        />
        <Touch onPress={props.onShowModal}>
          <Text style={styles.textBlue} content={{id: 'Ubah', en: 'Change'}} />
        </Touch>
      </Card>

      <Card style={[styles.card, styles.vertical]}>
        <View style={styles.rowBetween}>
          <View style={{width: '80%'}}>
            <Text
              style={styles.textBold}
              content={{
                id: 'Aktifkan verifikasi masuk',
                en: 'Enable log in verification',
              }}
            />
          </View>
          <View style={{width: '15%'}}>
            <Switch
              value={valueSwitch}
              onValueChange={() => onSwitch(!valueSwitch)}
            />
          </View>
        </View>
        <View style={{width: '80%'}}>
          <Text
            content={{
              id:
                'Kirimi saya kode verifikasi setiap kali saya masuk dari perangkat baru',
              en:
                'Send me a verification code every time I log in from a new device',
            }}
          />
        </View>
      </Card>
    </View>
  );
};
