import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from '../../components';
const Inbox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text isUpperCase={false} content={{id: 'Inbox', en: 'Inbox'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
export default Inbox;
