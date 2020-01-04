import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from '../../components';
const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text isUpperCase={false} content={{id: 'Akun', en: 'Account'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
export default Profile;
