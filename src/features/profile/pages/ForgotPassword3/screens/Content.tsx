import React from 'react';
import {View} from 'react-native';
import {
  Text,
  InputPassword,
  Button,
  ButtonLoading,
} from '../../../../../components';
import styles from '../components/styles';

type Props = {
  onChangePassword: (text: string) => void;
  onSubmit: () => void;
  value: string;
  loading: boolean;
};

export default (props: Props) => {
  const {onChangePassword, onSubmit, value} = props;
  return (
    <View style={[styles.container, styles.content]}>
      <View style={styles.vertical}>
        <Text
          style={styles.textCenter}
          content={{
            id: 'Masukkan password baru ke akun anda',
            en: 'Enter your new password for your accounts',
          }}
        />
      </View>
      <View style={styles.vertical}>
        <InputPassword
          placeholder="Enter new Password"
          value={value}
          onChangeText={(text: any) => onChangePassword(text)}
        />
      </View>
      <View style={styles.vertical}>
        {props.loading ? (
          <ButtonLoading />
        ) : (
          <Button
            content={{id: 'Kirimkan', en: 'Submit'}}
            isUpperCase={true}
            onPress={onSubmit}
            fullWidth
            customStyle={styles.btnSubmit}
          />
        )}
      </View>
    </View>
  );
};
