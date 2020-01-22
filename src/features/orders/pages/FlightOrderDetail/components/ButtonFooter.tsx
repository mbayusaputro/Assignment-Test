import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../../../../../components';

export default () => {
  return (
    <View style={styles.content}>
      <Button
        content={{id: 'Lanjutkan Pembayaran', en: 'Continue Payment'}}
        fullWidth={true}
        customStyle={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    width: '90%',
  },
});
