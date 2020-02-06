import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Card, CardCC, CardInfo, CardVA} from './components';
import {PayMethodContext} from './components/Context';
import {moneyFormat} from '../../../../helpers/helpers';

const Method = () => {
  const {price, typeScreen, dataFlight} = React.useContext(PayMethodContext);

  // Main Render
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
      <Card
        title={{
          id: 'Silakan lengkapi pembayaran ini dalam',
          en: 'Please complete this payment in',
        }}
        sub="time limit"
      />

      {/* FLIGHT */}
      {typeScreen === 'flight' && (
        <CardInfo
          departure={`(${dataFlight.details[0].departure_code})`}
          destination={`(${dataFlight.details[0].arrival_code})`}
          date="Wed, 21 Jan 2019"
          onPress={() => Alert.alert('View Detail')}
        />
      )}
      <Card
        title={{id: 'Harga yang anda bayar', en: 'Price You Pay'}}
        sub={`Rp${moneyFormat(price)}`}
      />
      <CardCC onPress={() => Alert.alert('CC')} />
      <Text
        style={{
          marginVertical: 10,
          fontFamily: 'NunitoSans-Bold',
          fontSize: 16,
        }}>
        Virtual Account
      </Text>
      <CardVA onPress={() => Alert.alert('Virtual Account')} />
    </View>
  );
};

export default Method;
