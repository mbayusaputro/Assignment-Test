import React from 'react';
import {Text, HighSafeArea} from '../../../../components';
import {Content, Header} from './screen';
import {Props} from '../../interface/types';
import {InteractionManager} from 'react-native';

export default (props: Props) => {
  // State
  const [otp, setOtp] = React.useState('');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const sendCode = () => {
    const {
      navigation: {navigate},
    } = props;
    const type = getParam('typeNav');
    let payload: any;
    if (type === 'mobile') {
      payload = {
        mobileNoPrefix: '62',
        mobileNo: '85742055558',
        otp,
      };
    } else if (type === 'email') {
      payload = {
        email: 'youremail@gmail.com',
        otp,
      };
    }
    navigate('SubmitRegister', {
      typeNav: type,
    });
  };

  // Main Render
  const {
    navigation: {getParam},
  } = props;
  return (
    <HighSafeArea>
      <Header callback={onBack} />
      <Content
        type={getParam('typeNav')}
        onChangeText={(text: string) => setOtp(text)}
        onSend={sendCode}
      />
    </HighSafeArea>
  );
};
