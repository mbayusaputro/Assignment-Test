import React from 'react';
import {Alert, InteractionManager} from 'react-native';
import {google, facebook} from 'react-native-simple-auth';
import {
  googleAndroid,
  facebookConf,
} from '../../../../../services/signinProvider';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import {Header, Content} from '../components';
import {validateEmailFormat} from '../../../../../helpers/helpers';
import {SigninProps} from '../../../interface/types';

export default (props: SigninProps) => {
  // State
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isValidEmail, setValidEmail] = React.useState(true);

  // Props
  const {
    navigation: {navigate},
    actionSignIn,
    actionGetProfile,
    setToken,
    fetchProfile,
    fetchSignIn,
  } = props;

  // Function
  const goToThe = (target: string) => {
    InteractionManager.runAfterInteractions(() => {
      navigate(target);
    });
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
    const payload = {
      email: '',
      password: '',
      code,
      authType,
    };
    InteractionManager.runAfterInteractions(() => {
      actionSignIn(payload).then((res: any) => {
        if (res.type === 'SIGNIN_SUCCESS') {
          gettingProfile(res.data.access_token);
        } else {
          Alert.alert('Alert', res.message);
        }
      });
    });
  };

  const pressLogin = () => {
    const payload = {
      email,
      password,
    };
    InteractionManager.runAfterInteractions(() => {
      if (email !== '' && password !== '') {
        actionSignIn(payload).then((res: any) => {
          if (res.type === 'SIGNIN_SUCCESS') {
            gettingProfile(res.data.access_token);
          } else {
            Alert.alert('Alert', res.message);
          }
        });
      } else {
        Alert.alert('Alert', 'Please enter all field');
      }
    });
  };

  const gettingProfile = (token: string) => {
    setToken(token);
    actionGetProfile(token)
      .then(() => null)
      .catch((err: any) => Alert.alert('Alert', err.message));
  };

  // Render
  return (
    <HighSafeArea>
      <Header title="Log In" onSetting={() => goToThe('MainSetting')} />
      <Content
        {...props}
        onPressGoogle={() => pressGoogle()}
        onPressFacebook={() => pressFacebook()}
        onChangeEmail={(text: string) => onChangeText('email', text)}
        validMail={isValidEmail}
        onChangePassword={(text: string) => onChangeText('password', text)}
        onForgot={() => goToThe('ForgotPassword')}
        onPressLogin={() => pressLogin()}
        onPressRegister={() => goToThe('FormRegister')}
      />
      <LoadingBook isVisible={fetchProfile || fetchSignIn} />
    </HighSafeArea>
  );
};
