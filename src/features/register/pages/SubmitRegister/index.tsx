import React from 'react';
import {InteractionManager} from 'react-native';
import {HighSafeArea} from '../../../../components';
import {Content, Header} from './screen';
import {Props} from '../../interface/types';

export default (props: Props) => {
  // State
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobilePre, setMobilePre] = React.useState('62');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const submit = () => {
    alert('Submit');
  };

  // Main Render
  return (
    <HighSafeArea>
      <Header callback={onBack} />
      <Content
        onChangeFullname={(text: string) => setFullname(text)}
        onChangeEmail={(text: string) => setEmail(text)}
        onChangeMobilePrefix={(text: string) => setMobilePre(text)}
        onChangeMobileNumber={(text: string) => setMobileNumber(text)}
        onChangeNationality={(text: string) => setNationality(text)}
        onChangePassword={(text: string) => setPassword(text)}
        onChangeConfirmPassword={(text: string) => setConfirmPassword(text)}
        valueEmail={email}
        valueMobilePrefix={mobilePre}
        valueMobileNumber={mobileNumber}
        onSubmit={submit}
      />
    </HighSafeArea>
  );
};
