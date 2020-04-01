import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../../../../../components';

type Props = {
  onPress: () => void;
};

export default (props: Props) => {
  return (
    <View style={styles.content}>
      <Button
        content={{id: 'Lanjutkan Pembayaran', en: 'Continue Payment'}}
        fullWidth={true}
        customStyle={styles.btn}
        onPress={props.onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {
    padding: 10,
    width: '90%',
    borderRadius: 50,
  },
});
