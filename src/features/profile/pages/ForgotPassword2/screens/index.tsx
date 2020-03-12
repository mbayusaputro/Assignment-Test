import React from 'react';
import {InteractionManager, ScrollView} from 'react-native';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import Content from './Content';
import {ForgotPassProps} from '../../../interface/types';
import Header from './Header';

export default (props: ForgotPassProps) => {
  // Props
  const {
    navigation: {getParam, goBack, navigate},
    fetchForgotPass,
    actionForgotPassword,
  } = props;

  // State
  const [otp, setOTP] = React.useState('');

  // Function
  const onBack = () => {
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const onSend = () => {
    const data = getParam('data');
    const payload = {
      data: data.data,
      otp,
    };
    const code: string = otp;
    if (code.length === 6) {
      actionForgotPassword('password-verified', payload).then((res: any) => {
        if (res.type === 'FORGOTPASS_SUCCESS') {
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
      <ScrollView>
        <Content
          type={getParam('typeNav')}
          onChangeText={(text: string) => setOTP(text)}
          onSend={() => onSend()}
          loading={fetchForgotPass}
        />
      </ScrollView>
      <LoadingBook isVisible={props.fetchForgotPass} />
    </HighSafeArea>
  );
};
