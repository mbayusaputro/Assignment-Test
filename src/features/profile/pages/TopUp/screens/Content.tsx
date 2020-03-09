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
      <Text
        style={styles.textTitle}
        content={{id: '', en: 'Select top up ammount'}}
      />
      <Card style={styles.cardPd}>
        <Text style={styles.textNormal}>Rp500.000</Text>
        <Text style={styles.textBold}>Rp 0</Text>
      </Card>
      <Text
        style={styles.err}
        content={{
          id: '*Minimal top up jumlah: Rp500.000',
          en: '*Minimum top up amount: Rp500.000',
        }}
      />
      <Button
        customStyle={{marginVertical: 26, borderRadius: 20}}
        type="primary"
        fullWidth={true}
        isUpperCase={true}
        content={{id: 'Top Up', en: 'Top Up'}}
        // onPress={searchFlightPress}
      />
    </View>
  );
};
