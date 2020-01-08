import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from '../../components';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Active from './Active';
import Finished from './Finished';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Orders = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title=" My Order" />
      <Tabs>
        <Active {...props} title="Active" />
        <Finished {...props} title="Finished" />
      </Tabs>
      {/* <Text isUpperCase={false} content={{id: 'Orders', en: 'Orders'}} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Orders;
