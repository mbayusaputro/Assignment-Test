import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {ContentChangeProps as Props} from '../../../interface/types';
import {Button} from '../../../../../components/';

export default (props: Props) => {
  const [valueSwitch, onSwitch] = React.useState(false);

  // Main Render
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text
          style={[styles.textBlue, styles.textGrey]}
          content={{id: 'Saldomu', en: 'Your Balance'}}
        />
        <Text style={[styles.textBold, styles.price]}>Rp 0</Text>
      </Card>
      <Card style={styles.card}>
        <Text
          style={[styles.textBlue, styles.textGrey]}
          content={{id: 'Masukkan Jumlah', en: 'Enter Amount'}}
        />
        <Text style={[styles.textBold, styles.top]}>Rp 0</Text>
      </Card>
      <Card style={styles.card}>
        <Text
          style={[styles.textBlue, styles.textGrey]}
          content={{id: 'Nomor Akun', en: 'Account Number'}}
        />
        <Text
          style={[styles.textBold, styles.top]}
          content={{id: 'Masukkan Nomor Akun', en: 'Enter Account Number'}}
        />
      </Card>
      <Card style={styles.card}>
        <Text
          style={[styles.textBlue, styles.textGrey]}
          content={{id: 'Nama Bank', en: 'Bank Name'}}
        />
        <Text
          style={[styles.textBold, styles.top]}
          content={{id: 'Pilih Nama Bank', en: 'Choose Bank Name'}}
        />
      </Card>
      <Button
        customStyle={{marginVertical: 26, borderRadius: 20}}
        type="primary"
        fullWidth={true}
        isUpperCase={true}
        content={{id: 'Kirimkan', en: 'Submit'}}
        // onPress={searchFlightPress}
      />
    </View>
  );
};
