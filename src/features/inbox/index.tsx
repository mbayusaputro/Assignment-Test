import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './components/Header';
import Content from './Content';
import Empty from './Empty';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Orders = (props: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', flex: 1}}>
      <Header title=" My Inbox" />
      {/* <Content {...props} title="Active" /> */}
      <Empty />
      {/* <Text isUpperCase={false} content={{id: 'Orders', en: 'Orders'}} /> */}
    </SafeAreaView>
  );
};

export default Orders;
