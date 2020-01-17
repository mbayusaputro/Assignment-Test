import React from 'react';
import {View, Text} from 'react-native';
import {Card} from '../components';

const Content = (props: any) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        Contact Details
      </Text>
      <Card
        onPress={props.onPress}
        title="Contact Person"
        subtitle="*Please fill in contact details"
        err={true}
        textColor={true}
      />
    </View>
  );
};

export default Content;
