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

const FormRegister = (props: Props) => {
  // State
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');

  // Function
  const goToBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => {
      goBack();
    });
  };

  const goRegister = (type: string) => {
    if (type === 'mobile') {
      alert(mobile);
    } else if (type === 'email') {
      alert(email);
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
        onChangeMobile={(text: string) => setMobile(text)}
        onChangeEmail={(text: string) => setEmail(text)}
        onRegisterMobile={() => goRegister('mobile')}
        onRegisterEmail={() => alert(email)}
        onGoogle={goGoogle}
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
