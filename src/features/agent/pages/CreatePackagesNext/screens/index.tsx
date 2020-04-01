import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header, SubHeader} from '../../../../../components';
import Content from './Content';

const Orders = (props: any) => {
  const {
    navigation: {goBack},
  } = props;
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', flex: 1}}>
      <Header
        content={{id: 'Buat Paket Resmi', en: 'Create Official Packages'}}
        callback={() => goBack()}
      />
      <SubHeader />
      <Content onSubmit={() => {}} onField={() => {}} />
    </SafeAreaView>
  );
};

export default Orders;
