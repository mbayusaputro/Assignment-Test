import React from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import Content from './Content';
import Header from './Header';
import {ForgotPass3Props as Props} from '../../../interface/types';
import {InteractionManager} from 'react-native';

export default (props: Props) => {
  // State
  const [password, setPassword] = React.useState('');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const onSubmit = () => {
    const {
      navigation: {getParam, dispatch},
      actionForgotPassword3,
    } = props;
    const data = getParam('data');
    const payload = {
      data: data.data,
      otp: data.otp,
      password,
    };
    if (password.length !== 0) {
      actionForgotPassword3('password-apply', payload).then((res: any) => {
        if (res.type === 'FORGOTPASS3_SUCCESS') {
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
  const {fetchForgotPass} = props;
  return (
    <HighSafeArea>
      <Header callback={onBack} />
      <Content
        onChangePassword={(text: string) => setPassword(text)}
        value={password}
        onSubmit={onSubmit}
        loading={fetchForgotPass}
      />
      <LoadingBook isVisible={props.fetchForgotPass} />
    </HighSafeArea>
  );
};
