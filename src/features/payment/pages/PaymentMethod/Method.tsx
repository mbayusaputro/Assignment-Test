import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Card, CardCC, CardInfo, CardVA} from './components';

const Method = () => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
      <Card title="Please complete this payment in" sub="time limit" />
      <CardInfo
        departure="Jakarta (CGK)"
        destination="Denpasar (DPS)"
        date="Wed, 21 Jan 2019"
        onPress={() => Alert.alert('View Detail')}
      />
      <Card title="Price You Pay" sub="Rp1.900.384" />
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
