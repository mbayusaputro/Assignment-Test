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
  onChangeMobile: (text: string) => void;
  onSubmitMobile: () => void;
  loading: boolean;
};

export default (props: Props) => {
  return (
    <View style={[styles.container, styles.content]}>
      <View style={styles.vertical}>
        <InputText
          placeholder="Mobile Number"
          onChangeText={(text: string) => props.onChangeMobile(text)}
          keyboardType="number-pad"
        />
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
            content={{id: 'Kirimkan', en: 'Submit'}}
            isUpperCase={true}
            fullWidth={true}
            customStyle={styles.btnSubmit}
            onPress={props.onSubmitMobile}
          />
        )}
      </View>
    </View>
  );
};
