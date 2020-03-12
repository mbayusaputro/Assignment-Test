import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {ContentChangeProps as Props} from '../../../interface/types';
import {Button} from '../../../../../components/';
import {moneyFormat} from '../../../../../helpers/helpers';

export default (props: Props) => {
  // Props
  const {modalInput, amount, modalSelect, onSubmit, balance} = props;

  // Main Render
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text
          style={[styles.textBlue, styles.textGrey]}
          content={{id: 'Saldomu', en: 'Your Balance'}}
        />
        <Text style={[styles.textBold, styles.price]}>
          Rp{moneyFormat(balance)}
        </Text>
      </Card>
      <Touch onPress={() => modalInput('input')}>
        <Card style={styles.card}>
          <Text
            style={[styles.textBlue, styles.textGrey]}
            content={{id: 'Masukkan Jumlah', en: 'Enter Amount'}}
          />
          <Text style={[styles.textBold, styles.top]}>
            Rp{moneyFormat(amount)}
          </Text>
        </Card>
      </Touch>
      <Text
        style={styles.textTitle}
        content={{id: 'Pilih Jumlah Top Up', en: 'Select top up ammount'}}
      />
      <Touch onPress={modalSelect}>
        <Card style={styles.cardPd}>
          <Text style={styles.textNormal}>Rp{moneyFormat(500000)}</Text>
          <Text style={styles.textBold}>></Text>
        </Card>
      </Touch>
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
        onPress={onSubmit}
      />
    </View>
  );
};
