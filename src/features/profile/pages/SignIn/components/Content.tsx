import React from 'react';
import {View, TouchableOpacity as Touch, Platform} from 'react-native';
import {
  Text,
  InputText,
  InputPassword,
  Button,
  ButtonLoading,
  Imaging,
} from '../../../../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SignInContent} from '../../../interface/types';
import styles from './styles';
import {Color} from '../../../../../constants/Color';
import {scale} from '../../../../../constants/ScaleUtils';

export default (props: SignInContent) => {
  const {
    validMail,
    onChangeEmail,
    onChangePassword,
    onPressFacebook,
    onPressGoogle,
    onForgot,
    onPressLogin,
    onPressRegister,
    fetchSignIn,
  } = props;
  return (
    <View style={styles.container}>
      {/* Greetings */}
      <View style={styles.content}>
        <Text style={styles.textBold}>Hi There</Text>
        <Text style={styles.textRegular}>Log In to your account here</Text>
      </View>

      {/* Socmed Button */}
      <View style={[styles.rowDirection, styles.content]}>
        <Touch onPress={onPressGoogle} style={styles.btnGoogle}>
          <Imaging
            source={require('../../../../../assets/icons/profile/icon_google.png')}
            resizeMode={Platform.OS === 'ios' ? 'contain' : 'cover'}
            style={styles.iconGoogle}
          />
          <Text style={styles.textSemiBold}>Google</Text>
        </Touch>
        <Touch onPress={onPressFacebook} style={styles.btnFb}>
          <Icon name="facebook-f" color={Color.white} size={scale(25)} />
          <Text style={styles.textFB}>Facebook</Text>
        </Touch>
      </View>

      {/* OR */}
      <View style={[styles.content, styles.row]}>
        <View style={styles.hr} />
        <Text style={styles.textRegular}>or</Text>
        <View style={styles.hr} />
      </View>

      {/* Form */}
      <View>
        <InputText
          placeholder="Email address"
          onChangeText={onChangeEmail}
          style={styles.inputText}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {validMail ? null : (
          <Text style={styles.textError}>
            Please enter a valid email address
          </Text>
        )}
        <InputPassword placeholder="Password" onChangeText={onChangePassword} />
      </View>

      {/* Forgot Password */}
      <View style={styles.content}>
        <Touch onPress={onForgot} activeOpacity={0.9}>
          <Text style={styles.textRegular}>Forgot your password?</Text>
        </Touch>
      </View>

      {/* Log In */}
      <View style={styles.content}>
        {fetchSignIn ? (
          <ButtonLoading />
        ) : (
          <Button
            content={{id: 'Masuk', en: 'Log In'}}
            isUpperCase={true}
            customStyle={styles.btn}
            onPress={onPressLogin}
          />
        )}
      </View>

      {/* Register */}
      <View style={styles.content}>
        <View style={styles.content}>
          <Text style={styles.textBoldLitle}>
            New Member? Create your account
          </Text>
        </View>
        <Touch onPress={onPressRegister} activeOpacity={0.9}>
          <Text style={styles.textRegister}>REGISTER</Text>
        </Touch>
      </View>
    </View>
  );
};
