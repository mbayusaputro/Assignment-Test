import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from '../../components';
const Flight = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text isUpperCase={false} content={{id: 'Flight', en: 'Flight'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
export default Flight;
