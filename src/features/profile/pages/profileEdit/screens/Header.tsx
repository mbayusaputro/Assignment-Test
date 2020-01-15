import React from 'react';
import {View} from 'react-native';
import {Header} from '../../../../../components';
import {HeaderProps} from '../interface/types';

export default (props: HeaderProps) => {
  const {goBack} = props;
  return (
    <View>
      <Header callback={goBack} title="Account Setting" />
    </View>
  );
};
