import React from 'react';
import {Alert} from 'react-native';
import {HighSafeArea} from '../../../../../components';
import {Header, Content} from '../components';
import {validateEmailFormat} from '../../../../../helpers/helpers';

export default (props: any) => {
  // State
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isValidEmail, setValidEmail] = React.useState(true);

  // Function
  const pressed = (txt: string) => {
    Alert.alert('Alert', txt);
  };
  const onChangeText = (type: string, txt: string) => {
    if (type === 'email') {
      let checkMail = validateEmailFormat(txt);
      if (checkMail) {
        setEmail(txt);
        setValidEmail(true);
      } else {
        setEmail(txt);
        setValidEmail(false);
      }
    } else if (type === 'password') {
      setPassword(txt);
    }
  };
  const pressLogin = () => {
    const payload = {
      email,
      password,
    };
    Alert.alert('Alert', JSON.stringify(payload));
  };

  // Render
  return (
    <HighSafeArea>
      <Header title="Log In" />
      <Content
        {...props}
        onPressGoogle={() => pressed('Google')}
        onPressFacebook={() => pressed('Facebook')}
        onChangeEmail={(text: string) => onChangeText('email', text)}
        validMail={isValidEmail}
        onChangePassword={(text: string) => onChangeText('password', text)}
        onForgot={() => pressed('Forgot Password')}
        onPressLogin={pressLogin}
        onPressRegister={() => pressed('Register')}
      />
    </HighSafeArea>
  );
};
