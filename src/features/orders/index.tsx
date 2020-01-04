import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from '../../components';
const Orders = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text isUpperCase={false} content={{id: 'Orders', en: 'Orders'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
export default Orders;
