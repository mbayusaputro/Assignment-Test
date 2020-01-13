import React from 'react';
import {View} from 'react-native';
import Card from './components/Card';

const Active = (props: any) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <View style={{margin: 20}}>
      <Card
        title="Your flight is gonna be ready Tomorrow"
        time="Update 2 hours ago"
        unbox={false}
      />
      <Card
        title="E-ticket has been published"
        time="Update 2 hours ago"
        unbox={false}
      />
      <Card
        title="Please pay for your order"
        time="Update 3 hours ago"
        unbox={true}
      />
    </View>
  );
};

export default Active;
