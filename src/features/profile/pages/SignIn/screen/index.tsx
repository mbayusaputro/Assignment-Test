import React from 'react';
import {Alert, InteractionManager} from 'react-native';
import {google, facebook} from 'react-native-simple-auth';
import {
  googleAndroid,
  facebookConf,
} from '../../../../../services/signinProvider';
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

  const pressGoogle = () => {
    google(googleAndroid)
      .then((res: any) => {
        signinSocmed(res.credentials.id_token, 'google');
      })
      .catch((err: any) => {
        alert(JSON.stringify(err));
      });
  };

  const pressFacebook = () => {
    facebook(facebookConf)
      .then((res: any) => {
        signinSocmed(res.credentials.access_token, 'facebook');
      })
      .catch((err: any) => {
        alert(JSON.stringify(err));
      });
  };

  const signinSocmed = (code: string, authType: string) => {
    const {actionSignIn} = props;
    const payload = {
      email: '',
      password: '',
      code,
      authType,
    };
    InteractionManager.runAfterInteractions(() => {
      actionSignIn(payload).then((res: any) => {
        if (res.type === 'SIGNIN_FAILED') {
          Alert.alert('Alert', res.message);
        } else {
          const token = res.data.access_token;
          gettingProfile(token);
        }
      });
    });
  };

  const pressLogin = () => {
    const {actionSignIn} = props;
    const payload = {
      email,
      password,
    };
    InteractionManager.runAfterInteractions(() => {
      if (email !== '' && password !== '') {
        actionSignIn(payload).then((res: any) => {
          if (res.type === 'SIGNIN_FAILED') {
            Alert.alert('Alert', res.message);
          } else {
            const tokenNow = res.data.access_token;
            gettingProfile(tokenNow);
          }
        });
      } else {
        Alert.alert('Alert', 'Please enter all field');
      }
    });
  };

  const gettingProfile = (token: string) => {
    const {actionGetProfile, setToken} = props;
    setToken(token);
    actionGetProfile(token)
      .then(() => null)
      .catch((err: any) => Alert.alert('Alert', err.message));
  };

  // Render
  return (
    <HighSafeArea>
      <Header title="Log In" />
      <Content
        {...props}
        onPressGoogle={pressGoogle}
        onPressFacebook={pressFacebook}
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
