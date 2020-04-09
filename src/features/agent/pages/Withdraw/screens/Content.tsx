import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {ContentChangeProps as Props} from '../../../interface/types';
import {Button} from '../../../../../components/';
import {moneyFormat} from '../../../../../helpers/helpers';

export default (props: Props) => {
  // Props
  const {
    modalInput,
    modalSelect,
    amount,
    onSubmit,
    bankName,
    accountNumber,
    balance,
  } = props;

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

      {/* Account Number */}
      <Touch onPress={() => modalInput('amount')}>
        <Card style={styles.card}>
          <Text
            style={[styles.textBlue, styles.textGrey]}
            content={{
              id: 'Penarikan Jumlah Komisi',
              en: 'Commission Withdrawal Amounts',
            }}
          />
          <Text style={[styles.textBold, styles.top]}>
            Rp{moneyFormat(amount)}
          </Text>
        </Card>
      </Touch>

      {/* Account Number */}
      <Touch onPress={() => modalInput('account_number')}>
        <Card style={styles.card}>
          <Text
            style={[styles.textBlue, styles.textGrey]}
            content={{id: 'Nomor Akun', en: 'Account Number'}}
          />
          {accountNumber !== '' ? (
            <Text style={[styles.textBold, styles.top]}>{accountNumber}</Text>
          ) : (
            <Text
              style={[styles.textBold, styles.top]}
              content={{id: 'Masukkan Nomor Akun', en: 'Enter Account Number'}}
            />
          )}
        </Card>
      </Touch>

      {/* Bank Name */}
      <Touch onPress={modalSelect}>
        <Card style={styles.card}>
          <Text
            style={[styles.textBlue, styles.textGrey]}
            content={{id: 'Nama Bank', en: 'Bank Name'}}
          />
          {bankName !== '' ? (
            <Text style={[styles.textBold, styles.top]}>{bankName}</Text>
          ) : (
            <Text
              style={[styles.textBold, styles.top]}
              content={{id: 'Pilih Nama Bank', en: 'Choose Bank Name'}}
            />
          )}
        </Card>
      </Touch>

      <Button
        customStyle={{marginVertical: 26, borderRadius: 20}}
        type="primary"
        fullWidth={true}
        isUpperCase={true}
        content={{id: 'Kirimkan', en: 'Submit'}}
        onPress={onSubmit}
      />
    </View>
  );
};
