import React from 'react';
import {View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {
  Text,
  InputText,
  Button,
  ButtonLoading,
} from '../../../../../components';
import styles from './styles';

type Props = {
  onSubmitEmail: () => void;
  validEmail: boolean;
  onChangeEmail: (text: string) => void;
  loading: boolean;
};

export default (props: Props) => {
  return (
    <View style={[styles.container, styles.content]}>
      <View style={styles.vertical}>
        <InputText
          placeholder="Email"
          onChangeText={(text: string) => props.onChangeEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {props.validEmail ? null : (
          <Text
            style={styles.textError}
            content={{
              id: 'Mohon masukkan alamat email yang benar',
              en: 'Please enter a valid email address',
            }}
          />
        )}
      </View>
      <View style={styles.rowCenter}>
        <AntIcon name="lock" size={30} />
        <Text
          content={{
            id: 'Data anda akan dilindungi dan sangat aman',
            en: 'Your data will be protected and very safe',
          }}
        />
      </View>
      <View style={styles.vertical}>
        {props.loading ? (
          <ButtonLoading />
        ) : (
          <Button
            content={{id: 'Submit', en: 'Submit'}}
            isUpperCase={true}
            fullWidth={true}
            customStyle={styles.btnSubmit}
            onPress={props.onSubmitEmail}
          />
        )}
      </View>
    </View>
  );
};
