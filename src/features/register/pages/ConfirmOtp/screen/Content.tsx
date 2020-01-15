import React from 'react';
import {
  View,
  Platform,
  ScrollView,
  TouchableOpacity as Touch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Text,
  Imaging,
  InputText,
  Button,
  ButtonLoading,
} from '../../../../../components';
import styles from './style';
import {Color} from '../../../../../constants/Color';

type ContentProps = {
  type: string;
  onChangeText: any;
  onSend: () => void;
  loading: boolean;
};

export default (props: ContentProps) => {
  const {type, onChangeText, onSend} = props;

  // Function
  const typeImage = () => {
    if (type === 'mobile') {
      return require('../../../../../assets/register/phone-verify.png');
    } else if (type === 'email') {
      return require('../../../../../assets/register/email-verify.png');
    }
  };

  const typeDesc = () => {
    if (type === 'mobile') {
      return 'We have sent a verification code to your number. Please enter the code to verify your account.';
    } else if (type === 'email') {
      return 'We have sent verification to your email. Please enter the code to verify your account.';
    }
  };

  // Main Render
  return (
    <ScrollView>
      <Imaging
        source={typeImage()}
        resizeMode={Platform.OS === 'ios' ? 'contain' : 'contain'}
        style={[styles.image, styles.vertical]}
      />
      <View style={styles.content}>
        <View style={styles.vertical}>
          <Text style={styles.textDesc}>{typeDesc()}</Text>
        </View>
        <View style={[styles.fullWidth, styles.vertical]}>
          <InputText
            placeholder="Enter OTP Code"
            onChangeText={onChangeText}
            autoCapitalize="characters"
            maxLength={6}
          />
        </View>
        <View style={styles.vertical}>
          <Touch style={styles.rowCenter}>
            <Icon
              name="refresh-cw"
              color={Color.black}
              size={14}
              style={styles.iconRefresh}
            />
            <Text>Resend Verification Code?</Text>
          </Touch>
        </View>
        <View style={[styles.vertical, styles.fullWidth]}>
          {props.loading ? (
            <ButtonLoading />
          ) : (
            <Button
              content={{id: 'Kirim Kode', en: 'Send Code'}}
              isUpperCase={true}
              customStyle={styles.btnCode}
              onPress={onSend}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};
