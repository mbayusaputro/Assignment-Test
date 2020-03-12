import React from 'react';
import {View} from 'react-native';
import Empty from './Empty';
import Card from '../components/Card';

const Finished = (props: any) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <View style={{margin: 20}}>
      <Empty {...props} />
    </View>
  );
};

export default Finished;
