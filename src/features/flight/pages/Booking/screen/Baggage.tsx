import React from 'react';
import {View, Text} from 'react-native';
import {Card} from '../components';

const Content = () => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        Additional Baggage
      </Text>
      <Card
        title="Baggage (0 kg)"
        subtitle="Add baggage to lighten your load"
        err={true}
      />
    </View>
  );
};

export default Content;
