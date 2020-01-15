import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Info from './Info';
import Price from './Price';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<NavigationState>;
};

const Orders = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Detail Flight" goBack={() => props.navigation.goBack()} />
      <Tabs>
        <Info {...props} title="Flight Info" />
        <Price {...props} title="Price Info" />
      </Tabs>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Orders;
