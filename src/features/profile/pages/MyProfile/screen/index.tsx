import React from 'react';
import {InteractionManager} from 'react-native';
import {HighSafeArea} from '../../../../../components';
import {Content} from '../components';
import {SigninProps} from '../../../interface/types';

export default (props: SigninProps) => {
  const logOut = () => {
    const {logout} = props;
    InteractionManager.runAfterInteractions(() => {
      logout();
    });
  };

  return (
    <HighSafeArea>
      <Content onLogOut={logOut} />
    </HighSafeArea>
  );
};
