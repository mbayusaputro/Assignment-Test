import React from 'react';
import {InteractionManager, ScrollView} from 'react-native';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import Header from './Header';
import {ForgotPassProps} from '../../../interface/types';
import Content from './Content';
import {validateEmailFormat} from '../../../../../helpers/helpers';

export default (props: ForgotPassProps) => {
  // State
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [validMail, setValidEmail] = React.useState(true);

  // Props
  const {
    navigation: {goBack, navigate},
    actionForgotPassword,
    fetchForgotPass,
  } = props;

  // Function
  const onBack = () => {
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const onChange = (type: string, text: string) => {
    if (type === 'mobile') {
      setMobile(text);
    } else if (type === 'email') {
      let checkEmail = validateEmailFormat(text);
      if (checkEmail) {
        setValidEmail(true);
        setEmail(text);
      } else {
        setValidEmail(false);
        setEmail(text);
      }
    }
  };

  const onSubmit = (type: string) => {
    const payload = {
      data: type === 'mobile' ? mobile : email,
    };
    actionForgotPassword('password', payload).then((res: any) => {
      if (res.type === 'FORGOTPASS_SUCCESS') {
        InteractionManager.runAfterInteractions(() => {
          navigate('ForgotPassword2', {typeNav: type, data: payload});
        });
      } else {
        alert(res.message);
      }
    });
  };

  // Main Render
  return (
    <HighSafeArea>
      <Header callback={onBack} />
      <ScrollView>
        <Content
          onChangeMobile={(text: string) => onChange('mobile', text)}
          onChangeEmail={(text: string) => onChange('email', text)}
          validEmail={validMail}
          onSubmitMobile={() => onSubmit('mobile')}
          onSubmitEmail={() => onSubmit('email')}
          loading={fetchForgotPass}
        />
      </ScrollView>
      <LoadingBook isVisible={props.fetchForgotPass} />
    </HighSafeArea>
  );
};
