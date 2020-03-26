import React from 'react';
import {SafeAreaView} from 'react-native';
import Empty from './Empty';
import {Header} from '../../../../../components';

const Orders = (props: any) => {
  const {
    navigation: {goBack, navigate},
  } = props;
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', flex: 1}}>
      <Header
        content={{id: 'Agen Saya', en: 'My Agent'}}
        callback={() => goBack()}
      />
      <Empty onCreate={() => navigate('CreatePackages')} />
    </SafeAreaView>
  );
};

export default Orders;
