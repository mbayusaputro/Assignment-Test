import React from 'react';
import {InteractionManager} from 'react-native';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import Content from './Content';
import {ForgotPass2Props} from '../../../interface/types';
import Header from './Header';

export default (props: ForgotPass2Props) => {
  const {
    navigation: {getParam},
    fetchForgotPass,
  } = props;

  // State
  const [otp, setOTP] = React.useState('');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const onSend = () => {
    const {
      navigation: {navigate},
      actionForgotPassword2,
    } = props;
    const data = getParam('data');
    const payload = {
      data: data.data,
      otp,
    };
    const code: string = otp;
    if (code.length === 6) {
      actionForgotPassword2('password-verified', payload).then((res: any) => {
        if (res.type === 'FORGOTPASS2_SUCCESS') {
          InteractionManager.runAfterInteractions(() => {
            navigate('ForgotPassword3', {data: payload});
          });
        } else {
          alert(res.message);
        }
      });
    } else {
      alert('OTP Code must 6 digit');
    }
  };

  // Main Render
  return (
    <HighSafeArea>
      <Header callback={onBack} />
      <Content
        type={getParam('typeNav')}
        onChangeText={(text: string) => setOTP(text)}
        onSend={onSend}
        loading={fetchForgotPass}
      />
      <LoadingBook isVisible={props.fetchForgotPass} />
    </HighSafeArea>
  );
};
