import React from 'react';
import {StackActions, NavigationActions, ScrollView} from 'react-navigation';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import Content from './Content';
import Header from './Header';
import {ForgotPassProps as Props} from '../../../interface/types';
import {InteractionManager} from 'react-native';

export default (props: Props) => {
  // State
  const [password, setPassword] = React.useState('');

  // Props
  const {
    navigation: {goBack, getParam, dispatch},
    actionForgotPassword,
    fetchForgotPass,
  } = props;

  // Function
  const onBack = () => {
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const onSubmit = () => {
    const data = getParam('data');
    const payload = {
      data: data.data,
      otp: data.otp,
      password,
    };
    if (password.length !== 0) {
      actionForgotPassword('password-apply', payload).then((res: any) => {
        if (res.type === 'FORGOTPASS_SUCCESS') {
          dispatch(
            StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({routeName: 'Tabs'})],
            }),
          );
        } else {
          alert(res.message);
        }
      });
    } else {
      alert('Please enter your new Password');
    }
  };

  // Main Render
  return (
    <HighSafeArea>
      <Header callback={onBack} />
      <ScrollView>
        <Content
          onChangePassword={(text: string) => setPassword(text)}
          value={password}
          onSubmit={() => onSubmit()}
          loading={fetchForgotPass}
        />
      </ScrollView>
      <LoadingBook isVisible={props.fetchForgotPass} />
    </HighSafeArea>
  );
};
