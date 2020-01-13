import React from 'react';
import {InteractionManager, Alert} from 'react-native';
import {google, facebook} from 'react-native-simple-auth';
// Redux
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  actionSignIn,
  actionGetProfile,
  setToken,
} from '../../../../reduxs/profile/action';
import {getFetchSignIn} from '../../../../reduxs/profile/selector';
// Local Component
import {HighSafeArea, Header} from '../../../../components/';
import Content from './screen/Content';
import {Props} from '../../interface/types';
import {googleAndroid, facebookConf} from '../../../../services/signinProvider';
import {validateEmailFormat} from '../../../../helpers/helpers';

const FormRegister = (props: Props) => {
  // State
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isValidEmail, setValidEmail] = React.useState(true);

  // Function
  const goToBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => {
      goBack();
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
    } else if (type === 'mobile') {
      setMobile(txt);
    }
  };

  const goRegister = (type: string) => {
    const {
      navigation: {navigate},
    } = props;
    if (type === 'mobile') {
      navigate('ConfirmOTP', {
        typeNav: type,
      });
      // alert(mobile);
    } else if (type === 'email') {
      navigate('ConfirmOTP', {
        typeNav: type,
      });
      // alert(email);
    }
  };

  const goGoogle = () => {
    google(googleAndroid).then((res: any) =>
      signInSocmed(res.credentials.id_token, 'google'),
    );
  };

  const goFacebook = () => {
    facebook(facebookConf).then((res: any) =>
      signInSocmed(res.credentials.access_token, 'facebook'),
    );
  };

  const signInSocmed = (code: string, authType: string) => {
    const payload = {
      email: '',
      password: '',
      code,
      authType,
    };
    InteractionManager.runAfterInteractions(() => {
      props.actionSignIn(payload).then((res: any) => {
        if (res.type === 'SIGNIN_FAILED') {
          Alert.alert('Alert', res.message);
        } else {
          const token = res.data.access_token;
          gettingProfile(token);
        }
      });
    });
  };

  const gettingProfile = (token: string) => {
    const {
      navigation: {navigate},
    } = props;
    props.setToken(token);
    props
      .actionGetProfile(token)
      .then(() => navigate('Account'))
      .catch((err: any) => Alert.alert('Alert', err.message));
  };

  // Render
  return (
    <HighSafeArea>
      <Header title="New Member" callback={goToBack} />
      <Content
        onChangeMobile={(text: string) => onChangeText('mobile', text)}
        onChangeEmail={(text: string) => onChangeText('email', text)}
        onRegisterMobile={() => goRegister('mobile')}
        onRegisterEmail={() => goRegister('email')}
        onGoogle={goGoogle}
        validEmail={isValidEmail}
        onFacebook={goFacebook}
      />
    </HighSafeArea>
  );
};

// Reduxing
const mapStateToProps = (state: any) => ({
  fetchSignIn: getFetchSignIn(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionSignIn: (payload: object) => actionSignIn(payload),
      actionGetProfile: (token: string) => actionGetProfile(token),
      setToken: (token: string) => setToken(token),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormRegister);
